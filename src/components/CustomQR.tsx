import { useEffect, useRef } from "react";
import QRCode from "qrcode";

const ACCENT = "#88ab32";

interface Props {
  url: string;
  logoText?: string;
  logoSrc?: string;
  size?: number;
}

export default function CustomQR({
  url,
  logoText = "CC",
  logoSrc,
  size = 260,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!url || !canvasRef.current) return;

    const canvas = canvasRef.current;

    // Step 1: Let QRCode.toCanvas handle everything — do NOT pre-set canvas size
    // The library manages canvas dimensions internally
    QRCode.toCanvas(canvas, url, {
      width: size,
      margin: 3,              // Standard quiet zone — critical for scanning
      errorCorrectionLevel: "M", // M level for logo overlap (H causes density issues)
      color: {
        dark: "#0c0c0e",
        light: "#ffffff",
      },
    })
      .then(() => {
        // Step 2: Only AFTER QR is fully drawn, get context and draw logo on top
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const lSize = size * 0.18; // Smaller logo = more QR modules visible = better scan
        const lx = (size - lSize) / 2;
        const ly = (size - lSize) / 2;
        const r = lSize * 0.15;

        // White clearing behind logo so QR modules underneath are hidden cleanly
        ctx.fillStyle = "#ffffff";
        roundRect(ctx, lx - 4, ly - 4, lSize + 8, lSize + 8, r + 2);
        ctx.fill();

        if (logoSrc) {
          const img = new Image();
          img.onload = () => ctx.drawImage(img, lx, ly, lSize, lSize);
          img.onerror = () => drawTextLogo(ctx, size, lx, ly, lSize, r, logoText ?? "CC");
          img.src = logoSrc;
        } else {
          drawTextLogo(ctx, size, lx, ly, lSize, r, logoText ?? "CC");
        }
      })
      .catch((err) => {
        console.error("QR generation failed:", err);
      });
  }, [url, size, logoText, logoSrc]);

  return (
    <canvas
      ref={canvasRef}
      style={{ display: "block", borderRadius: 12 }}
    />
  );
}

function drawTextLogo(
  ctx: CanvasRenderingContext2D,
  size: number,
  lx: number,
  ly: number,
  lSize: number,
  r: number,
  text: string
) {
  ctx.fillStyle = ACCENT;
  roundRect(ctx, lx, ly, lSize, lSize, r);
  ctx.fill();

  ctx.fillStyle = "#ffffff";
  ctx.font = `700 ${lSize * 0.4}px sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, size / 2, size / 2);
}

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}