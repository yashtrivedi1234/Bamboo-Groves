import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { serviceItems } from './data';

interface ServiceImage {
  id: number;
  url: string;
  caption: string | null;
}

interface Service {
  id: number;
  serviceName: string;
  description: string;
  images: ServiceImage[];
}

interface PortfolioEvent {
  id: number;
  images: ServiceImage[];
}

const BASE_URL =
  import.meta.env.VITE_ACCESS_REQUEST_API_BASE?.trim() ||
  import.meta.env.VITE_BACKEND_URL?.trim() ||
  'https://winterly-reverable-romona.ngrok-free.dev/api/accessrequest';
const BACKEND_BASE = (
  import.meta.env.VITE_BASE_URL?.trim() ||
  import.meta.env.VITE_BACKEND_URL?.trim()?.replace(/\/api\/accessrequest\/?$/, '') ||
  ''
).replace(/\/+$/, '');

const slugify = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const fallbackServices: Service[] = serviceItems.map((item, index) => ({
  id: -(index + 1),
  serviceName: item.title,
  description: item.description,
  images: [],
}));

const defaultGalleryImages: ServiceImage[] = [
  {
    id: -1001,
    url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    caption: 'Corporate event setup',
  },
  {
    id: -1002,
    url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
    caption: 'Stage and audience view',
  },
  {
    id: -1003,
    url: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80',
    caption: 'Conference lighting setup',
  },
  {
    id: -1004,
    url: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1200&q=80',
    caption: 'Event production team',
  },
  {
    id: -1005,
    url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80',
    caption: 'Brand showcase stage',
  },
  {
    id: -1006,
    url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80',
    caption: 'Decor and venue styling',
  },
];

const resolveImageUrl = (url?: string) => {
  const value = url?.trim() ?? '';

  if (!value) return '';
  if (/^(data|blob):/i.test(value)) return value;

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

const ServiceDetails: React.FC = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const [services, setServices] = useState<Service[]>(fallbackServices);
  const [galleryFallbackImages, setGalleryFallbackImages] = useState<ServiceImage[]>(defaultGalleryImages);
  const [loading, setLoading] = useState(true);
  const normalizedServiceSlug = decodeURIComponent(serviceSlug ?? '').trim().toLowerCase();

  const service = services.find((item) => slugify(item.serviceName) === normalizedServiceSlug);

  useEffect(() => {
    if (!BASE_URL) {
      setLoading(false);
      return;
    }

    const controller = new AbortController();

    fetch(`${BASE_URL}/portfolio/27`, { signal: controller.signal })
      .then((res) => res.json())
      .then((json) => {
        const apiServices = json?.data?.services ?? [];
        const eventImages = ((json?.data?.events ?? []) as PortfolioEvent[])
          .flatMap((event) => event.images ?? []);
        const pooledImages = [...apiServices.flatMap((service: Service) => service.images ?? []), ...eventImages];

        if (pooledImages.length > 0) {
          setGalleryFallbackImages(pooledImages);
        }

        setServices(apiServices.length > 0 ? apiServices : fallbackServices);
      })
      .catch((err) => {
        if (err?.name !== 'AbortError') {
          console.error('Failed to fetch service details:', err);
        }
        setServices(fallbackServices);
      })
      .finally(() => setLoading(false));

    window.scrollTo(0, 0);

    return () => controller.abort();
  }, []);

  if (!normalizedServiceSlug) {
    return null;
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background pb-20 pt-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-10">
          <div className="mb-16 animate-pulse space-y-4">
            <div className="h-4 w-28 rounded bg-white/10" />
            <div className="h-12 w-2/3 rounded bg-white/10" />
            <div className="h-5 w-full max-w-2xl rounded bg-white/10" />
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={`service-image-skeleton-${index}`}
                className="aspect-4/3 animate-pulse rounded-2xl border border-white/10 bg-white/10"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
        <div className="text-center">
          <h1 className="mb-4">Service Not Found</h1>
          <Link to="/corporate-profile" className="text-accent hover:underline">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const displayedImages = (service.images?.length ? service.images : galleryFallbackImages).slice(0, 9);

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-10">

        {/* ── Hero header ── */}
        <div className="mb-16">
          {/* Icon badge */}
       

          {/* Section eyebrow */}
          <span className="section-label">Our Service</span>

          {/* Title — uses global h1 styles */}
          <h2 className="mb-4" >
            {service.serviceName}
          </h2>

          {/* Description — uses global p styles */}
          <p className="max-w-2xl" style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.125rem)' }}>
            {service.description}
          </p>
        </div>

        {/* ── 3×3 Image grid ── */}
        {displayedImages.length === 0 ? (
          <p className="text-white/50">No service images available.</p>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
            {displayedImages.map((image, index) => {
              const imageSrc = resolveImageUrl(image.url);

              return (
                <motion.div
                  key={`${image.id}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className="group relative aspect-4/3 overflow-hidden rounded-2xl"
                  style={{ background: 'rgb(255 255 255 / 0.04)', border: '1px solid rgb(255 255 255 / 0.06)' }}
                >
                  <img
                    src={imageSrc}
                    alt={image.caption || `${service.serviceName} showcase ${index + 1}`}
                    onError={() => console.log('Image not loading:', imageSrc)}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ background: 'linear-gradient(to top, rgb(0 0 0 / 0.65), transparent)' }}
                  />
                  <div
                    className="absolute bottom-3 right-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      width: '0.5rem',
                      height: '0.5rem',
                      borderRadius: '9999px',
                      background: 'var(--color-accent)',
                    }}
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

export default ServiceDetails;