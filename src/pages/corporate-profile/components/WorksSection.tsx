import React from 'react';
import { Link } from 'react-router-dom';
import RevealSection from './RevealSection';
import SectionHeading from './SectionHeading';

const BASE_URL = import.meta.env.VITE_BACKEND_URL;
const IMAGE_BASE_URL = 'https://bg.codecrafter.co.in';

interface EventImage {
  id: number;
  url: string;
  caption: string | null;
}

interface PortfolioEvent {
  id: number;
  title: string;
  eventDate: string;
  startTime: string;
  endTime: string;
  location: string;
  clientName: string;
  eventType: string;
  notes: string;
  images: EventImage[];
}

const WorksSection: React.FC = () => {
  const [events, setEvents] = React.useState<PortfolioEvent[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [carouselIndexByEvent, setCarouselIndexByEvent] = React.useState<Record<number, number>>({});

  React.useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(`${BASE_URL}/portfolio/27`);
        if (!res.ok) throw new Error(`Server error: ${res.status}`);
        const json = await res.json();
        if (json.success) {
          setEvents(json.data.events);
        } else {
          setError('Data load nahi hua.');
        }
      } catch (err: any) {
        setError(err.message ?? 'Network error aaya.');
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const updateCarouselIndex = (
    eventId: number,
    imageCount: number,
    direction: 'prev' | 'next'
  ) => {
    setCarouselIndexByEvent((prev) => {
      const current = prev[eventId] ?? 0;
      const next =
        direction === 'next'
          ? (current + 1) % imageCount
          : (current - 1 + imageCount) % imageCount;
      return { ...prev, [eventId]: next };
    });
  };

  const jumpToImage = (eventId: number, imageIndex: number) => {
    setCarouselIndexByEvent((prev) => ({
      ...prev,
      [eventId]: imageIndex,
    }));
  };

  return (
    <RevealSection
      id="works"
      observerOptions={{ threshold: 0.02, rootMargin: '0px 0px -2% 0px' }}
      className="bg-[#0a0a0a] px-5 py-20 sm:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading centered title="Works Done Recently at a Glance" />

        {/* Loading State */}
        {loading && (
          <div className="mt-12 flex justify-center">
            <div className="flex items-center gap-3 text-white/40">
              <svg
                className="h-5 w-5 animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8z"
                />
              </svg>
              <span className="text-sm">Loading events...</span>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="mt-12 flex justify-center">
            <p className="rounded-xl border border-red-500/20 bg-red-500/10 px-5 py-3 text-sm text-red-400">
              {error}
            </p>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && events.length === 0 && (
          <p className="mt-12 text-center text-sm text-white/30">
            Koi event nahi mila.
          </p>
        )}

        {/* Events List */}
        {!loading && !error && events.length > 0 && (
          <div className="mt-12 space-y-8">
            {events.map((event) => {
              const images = event.images;
              const hasCarousel = images.length > 1;
              const activeIndex = carouselIndexByEvent[event.id] ?? 0;
              const activeImage = images[activeIndex] ?? images[0];

              return (
                <section
                  key={event.id}
                  className="rounded-[28px] border border-white/10 bg-[#0d1209]/80 p-5 shadow-[0_16px_40px_rgba(0,0,0,0.24)] sm:p-6"
                >
                  {/* Header */}
                  <div className="flex flex-col gap-3 border-b border-white/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <h3 className="mt-3 normal-case text-2xl tracking-normal text-[#f5f5f5]">
                        {event.title}
                      </h3>
                      <p className="mt-1 text-sm text-white/40">
                        {event.clientName}
                        {event.location ? ` · ${event.location}` : ''}
                      </p>
                    </div>
                    <span className="inline-flex w-fit rounded-full border border-[#88ab32]/30 bg-[#88ab32]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#d6e8a1]">
                      {event.eventType}
                    </span>
                  </div>

                  {/* Carousel (multiple images) */}
                  {hasCarousel && activeImage && (
                    <div className="relative mt-6 aspect-[16/7] overflow-hidden rounded-2xl border border-white/10">
                      <img
                        key={activeImage.id}
                        src={`${IMAGE_BASE_URL}${activeImage.url}`}
                        alt={activeImage.caption ?? event.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-opacity duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                      {/* Prev Button */}
                      <button
                        type="button"
                        aria-label="Previous image"
                        onClick={() =>
                          updateCarouselIndex(event.id, images.length, 'prev')
                        }
                        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/40 bg-black/45 px-2.5 py-1.5 text-sm text-white transition hover:bg-black/70"
                      >
                        {'<'}
                      </button>

                      {/* Next Button */}
                      <button
                        type="button"
                        aria-label="Next image"
                        onClick={() =>
                          updateCarouselIndex(event.id, images.length, 'next')
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/40 bg-black/45 px-2.5 py-1.5 text-sm text-white transition hover:bg-black/70"
                      >
                        {'>'}
                      </button>

                      {/* Dots */}
                      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                        {images.map((_, imgIdx) => (
                          <button
                            key={imgIdx}
                            type="button"
                            aria-label={`Go to image ${imgIdx + 1}`}
                            onClick={() => jumpToImage(event.id, imgIdx)}
                            className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                              imgIdx === activeIndex
                                ? 'bg-accent scale-125'
                                : 'bg-white/45 hover:bg-white/70'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Single Image (no carousel) */}
                  {!hasCarousel && images[0] && (
                    <div className="relative mt-6 aspect-[16/7] overflow-hidden rounded-2xl border border-white/10">
                      <img
                        src={`${IMAGE_BASE_URL}${images[0].url}`}
                        alt={images[0].caption ?? event.title}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    </div>
                  )}

                  {/* Thumbnail Grid */}
                  {images.length > 0 && (
                    <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                      {images.map((img, imgIdx) => (
                        <article
                          key={img.id}
                          onClick={() => jumpToImage(event.id, imgIdx)}
                          className={`group cursor-pointer overflow-hidden rounded-2xl border bg-[#10140c] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(136,171,50,0.16)] ${
                            imgIdx === activeIndex
                              ? 'border-[#88ab32] shadow-[0_18px_44px_rgba(136,171,50,0.20)] -translate-y-1'
                              : 'border-white/10 hover:border-[#88ab32]'
                          }`}
                        >
                          <div className="relative aspect-[4/3] overflow-hidden">
                            <img
                              src={`${IMAGE_BASE_URL}${img.url}`}
                              alt={img.caption ?? event.title}
                              loading="lazy"
                              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

                            {/* Active overlay ring only */}
                            {imgIdx === activeIndex && (
                              <div className="absolute inset-0 rounded-2xl ring-2 ring-inset ring-[#88ab32]/70" />
                            )}
                          </div>
                        </article>
                      ))}
                    </div>
                  )}
                </section>
              );
            })}
          </div>
        )}

        {/* View All Button */}
        <div className="mt-10 flex justify-center">
          <Link
            to="/corporate-events"
            className="inline-flex items-center justify-center rounded-full border border-[#88ab32] bg-[#88ab32] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#0a0a0a] transition duration-300 hover:-translate-y-0.5 hover:bg-[#9cc340]"
          >
            View All Events
          </Link>
        </div>
      </div>
    </RevealSection>
  );
};

export default WorksSection;