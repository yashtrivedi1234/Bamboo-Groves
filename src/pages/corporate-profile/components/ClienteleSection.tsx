import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RevealSection from "./RevealSection";
import SectionHeading from "./SectionHeading";

interface ClienteLogo {
  id: number;
  url: string;
  caption: string;
}

const ACCESS_REQUEST_BASE =
  import.meta.env.VITE_ACCESS_REQUEST_API_BASE?.trim() ||
  import.meta.env.VITE_BACKEND_URL?.trim() ||
  'https://winterly-reverable-romona.ngrok-free.dev/api/accessrequest';
const BACKEND_BASE = (
  import.meta.env.VITE_BASE_URL?.trim() ||
  import.meta.env.VITE_BACKEND_URL?.trim()?.replace(/\/api\/accessrequest\/?$/, "") ||
  ""
).replace(/\/+$/, "");

const resolveLogoUrl = (url?: string) => {
  const value = url?.trim() ?? "";

  if (!value) return "";
  if (/^(data|blob):/i.test(value)) {
    return value;
  }

  if (/^https?:\/\//i.test(value)) {
    try {
      const absolute = new URL(value);
      const backendOrigin = BACKEND_BASE ? new URL(BACKEND_BASE).origin : "";

      if (backendOrigin && absolute.origin === backendOrigin && absolute.pathname.startsWith("/uploads/")) {
        return `${absolute.pathname}${absolute.search}${absolute.hash}`;
      }
    } catch {
      return value;
    }

    return value;
  }

  const normalizedPath = value.startsWith("/") ? value : `/${value}`;
  if (normalizedPath.startsWith("/uploads/")) {
    return normalizedPath;
  }

  return `${BACKEND_BASE}${normalizedPath}`;
};

const ClienteleSection: React.FC = () => {
  const [clientLogos, setClientLogos] = useState<ClienteLogo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${ACCESS_REQUEST_BASE}/portfolio/27`)
      .then((res) => res.json())
      .then((json) => {
        setClientLogos(json?.data?.clientele ?? []);
      })
      .catch((err) => console.error("Failed to fetch clientele:", err))
      .finally(() => setLoading(false));
  }, []);

  const marqueeItems = [...clientLogos, ...clientLogos];

  return (
    <RevealSection
      id="clients"
      className="bg-[#0b0f08] px-5 py-20 sm:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between gap-4">
          <SectionHeading centered title="Our Esteemed Clients" />
          <Link
            to="/all-clients"
            className="whitespace-nowrap rounded-lg border border-white/20 bg-white/10 px-6 py-2 text-sm font-medium text-white transition-all hover:bg-white/20 hover:border-white/40 sm:px-8 sm:py-3 sm:text-base"
          >
            View All
          </Link>
        </div>

        {loading ? (
          <div className="marquee mt-12 overflow-hidden rounded-3xl border border-white/10 bg-[#0d1209]/90 p-4">
            <div className="flex gap-5">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="flex min-w-[190px] items-center justify-center rounded-2xl bg-white/10 p-4 shadow-md sm:min-w-[220px] h-[96px] sm:h-[112px] animate-pulse"
                />
              ))}
            </div>
          </div>
        ) : clientLogos.length === 0 ? (
          <p className="mt-12 text-center text-white/50">
            No clients available.
          </p>
        ) : (
          <div className="marquee mt-12 overflow-hidden rounded-3xl border border-white/10 bg-[#0d1209]/90 p-4">
            <div className="marquee-track flex w-max items-center gap-5">
              {marqueeItems.map((logo, index) => {
                const imageSrc = resolveLogoUrl(logo.url);

                return (
                  <div
                    key={`client-logo-${logo.id}-${index}`}
                    className="flex min-w-[190px] items-center justify-center rounded-2xl bg-white p-4 shadow-md sm:min-w-[220px]"
                  >
                    <img
                      src={imageSrc}
                      onError={() => console.log("Image not loading:", imageSrc)}
                      alt={
                        logo.caption ||
                        `Client logo ${(index % clientLogos.length) + 1}`
                      }
                      loading="lazy"
                      className="h-16 w-full object-contain sm:h-20"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </RevealSection>
  );
};

export default ClienteleSection;
