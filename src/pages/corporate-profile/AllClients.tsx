import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

interface ClientLogo {
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
  import.meta.env.VITE_BACKEND_URL?.trim()?.replace(/\/api\/accessrequest\/?$/, '') ||
  ''
).replace(/\/+$/, '');

const resolveLogoUrl = (url?: string) => {
  const value = url?.trim() ?? '';

  if (!value) return '';
  if (/^(data|blob):/i.test(value)) {
    return value;
  }

  if (/^https?:\/\//i.test(value)) {
    try {
      const absolute = new URL(value);
      const backendOrigin = BACKEND_BASE ? new URL(BACKEND_BASE).origin : '';

      if (backendOrigin && absolute.origin === backendOrigin && absolute.pathname.startsWith('/uploads/')) {
        return `${absolute.pathname}${absolute.search}${absolute.hash}`;
      }
    } catch {
      return value;
    }

    return value;
  }

  const normalizedPath = value.startsWith('/') ? value : `/${value}`;
  if (normalizedPath.startsWith('/uploads/')) {
    return normalizedPath;
  }

  return `${BACKEND_BASE}${normalizedPath}`;
};

const AllClients: React.FC = () => {
  const [clientLogos, setClientLogos] = useState<ClientLogo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${ACCESS_REQUEST_BASE}/portfolio/27`)
      .then((res) => res.json())
      .then((json) => {
        setClientLogos(json?.data?.clientele ?? []);
      })
      .catch((err) => console.error('Failed to fetch all clients:', err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="bg-transparent px-6 pb-20 pt-32 md:px-12">
      <div className="mx-auto max-w-7xl">
        <Link
          to="/corporate-profile"
          className="group mb-12 inline-flex items-center gap-2 text-white/60 transition-colors hover:text-white"
        >
          <span className="transition-transform group-hover:-translate-x-1">←</span>
          <span>Back to Corporate Profile</span>
        </Link>

        <div className="mb-16">
          <h1 className="mb-6">Our Esteemed Clients</h1>
          <p className="max-w-2xl text-lg text-white/60">
            {loading
              ? 'Loading our valued clients...'
              : `Browse through all ${clientLogos.length} of our valued clients worldwide`}
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {Array.from({ length: 15 }).map((_, index) => (
              <div
                key={`client-grid-skeleton-${index}`}
                className="h-[120px] animate-pulse rounded-2xl border border-white/10 bg-white/10"
              />
            ))}
          </div>
        ) : clientLogos.length === 0 ? (
          <p className="text-white/50">No clients available.</p>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {clientLogos.map((logo, index) => {
              const imageSrc = resolveLogoUrl(logo.url);

              return (
                <motion.div
                  key={`client-grid-${logo.id}`}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.08,
                    rotateY: 5,
                    boxShadow: '0 20px 40px rgba(255,255,255,0.1)',
                  }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  className="cursor-pointer rounded-2xl border border-white/10 bg-white/10 p-4 hover:border-white/30"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <img
                    src={imageSrc}
                    onError={() => console.log('Image not loading:', imageSrc)}
                    alt={logo.caption || `Client logo ${index + 1}`}
                    loading="lazy"
                    className="h-20 w-full object-contain transition-all duration-300 sm:h-24"
                  />
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllClients;
