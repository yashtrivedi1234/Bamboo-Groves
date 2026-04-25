import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  const rawBackendUrl =
    env.VITE_ACCESS_REQUEST_API_BASE ||
    env.VITE_BACKEND_URL ||
    env.BACKEND_URL ||
    env.VITE_BASE_URL ||
    env.VITE_APP_URL ||
    env.APP_URL;

  const resolveProxyTarget = (rawUrl?: string) => {
    if (!rawUrl) {
      return undefined;
    }

    try {
      return new URL(rawUrl).origin;
    } catch {
      return undefined;
    }
  };

  const backendProxyTarget = resolveProxyTarget(rawBackendUrl);

  return {
    plugins: [react(), tailwindcss()],
    envPrefix: ['VITE_', 'BACKEND_'],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      proxy: backendProxyTarget
        ? {
            '/api/accessrequest': {
              target: backendProxyTarget,
              changeOrigin: true,
              secure: false,
              headers: {
                'ngrok-skip-browser-warning': 'true',
              },
            },
            '/uploads': {
              target: backendProxyTarget,
              changeOrigin: true,
              secure: false,
              headers: {
                'ngrok-skip-browser-warning': 'true',
              },
            },
          }
        : undefined,
    },
  };
});
