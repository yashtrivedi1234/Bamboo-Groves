import React, { useEffect, useState } from "react";
import { Building2, Images, MapPin } from "lucide-react";
import { useSearchParams } from "react-router-dom";

const IMAGE_BASE_URL = "https://bg.codecrafter.co.in";
const PORTFOLIO_API_URL = import.meta.env.VITE_BACKEND_URL;

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

const CorporateEventPage: React.FC = () => {
  const [searchParams] = useSearchParams();

  const [events, setEvents] = useState<PortfolioEvent[]>([]);
  const [eventsLoading, setEventsLoading] = useState(true);
  const [eventsError, setEventsError] = useState<string | null>(null);
  const [carouselIndexByEvent, setCarouselIndexByEvent] = useState<Record<number, number>>({});

  const updateCarouselIndex = (eventId: number, imageCount: number, direction: "prev" | "next") => {
    setCarouselIndexByEvent((prev) => {
      const current = prev[eventId] ?? 0;
      const next =
        direction === "next"
          ? (current + 1) % imageCount
          : (current - 1 + imageCount) % imageCount;
      return { ...prev, [eventId]: next };
    });
  };

  const jumpToImage = (eventId: number, imageIndex: number) => {
    setCarouselIndexByEvent((prev) => ({ ...prev, [eventId]: imageIndex }));
  };

  useEffect(() => {
    const portfolioId = searchParams.get("portfolioId")?.trim() ?? "27";

    const fetchEvents = async () => {
      try {
        setEventsLoading(true);
        setEventsError(null);
        const res = await fetch(`${PORTFOLIO_API_URL}/portfolio/${portfolioId}`);
        if (!res.ok) throw new Error(`Server error: ${res.status}`);
        const json = await res.json();
        if (json.success) {
          setEvents(json.data.events);
        } else {
          setEventsError("Data load nahi hua.");
        }
      } catch (err: any) {
        setEventsError(err.message ?? "Network error aaya.");
      } finally {
        setEventsLoading(false);
      }
    };

    fetchEvents();
  }, [searchParams]);

  const totalEvents = events.length;
  const totalLocations = new Set(events.map((e) => e.location).filter(Boolean)).size;
  const uniqueClients = new Set(events.map((e) => e.clientName).filter(Boolean)).size;

  const requestedCompanyName =
    searchParams.get("companyName")?.trim() ??
    searchParams.get("company")?.trim() ??
    "";

  return (
    <main className="min-h-screen bg-[#070a05] px-5 pb-20 pt-28 text-[#f5f5f5] sm:px-8 sm:pt-32 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* ── Hero Header ── */}
        <section className="overflow-hidden rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(136,171,50,0.18),transparent_30%),linear-gradient(135deg,#101709_0%,#0a0f07_55%,#070a05_100%)] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.28)] sm:p-8 lg:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#88ab32]">
                Corporate Event Page
              </p>
              <h1 className="mt-4 max-w-2xl text-2xl font-bold tracking-[0.03em] text-white sm:text-3xl lg:text-4xl">
                {requestedCompanyName ? `${requestedCompanyName} Event Highlights` : "Corporate Event Highlights"}
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/68 sm:text-base">
                A curated gallery of corporate events, showcasing moments captured across multiple locations and clients.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45">Clients</p>
                <div className="mt-3 flex items-center gap-3">
                  <Building2 className="h-5 w-5 text-[#88ab32]" />
                  <span className="text-2xl font-bold text-white">{uniqueClients}</span>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45">Events</p>
                <div className="mt-3 flex items-center gap-3">
                  <Images className="h-5 w-5 text-[#88ab32]" />
                  <span className="text-2xl font-bold text-white">{totalEvents}</span>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45">Locations</p>
                <div className="mt-3 flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-[#88ab32]" />
                  <span className="text-2xl font-bold text-white">{totalLocations}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Loading ── */}
        {eventsLoading && (
          <div className="mt-12 flex justify-center">
            <div className="flex items-center gap-3 text-white/40">
              <svg className="h-5 w-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
              </svg>
              <span className="text-sm">Loading events...</span>
            </div>
          </div>
        )}

        {/* ── Error ── */}
        {eventsError && !eventsLoading && (
          <div className="mt-12 flex justify-center">
            <p className="rounded-xl border border-red-500/20 bg-red-500/10 px-5 py-3 text-sm text-red-400">
              {eventsError}
            </p>
          </div>
        )}

        {/* ── Empty ── */}
        {!eventsLoading && !eventsError && events.length === 0 && (
          <section className="mt-10 rounded-[28px] border border-white/10 bg-[#0d1209]/85 p-6 text-center">
            <p className="text-sm text-white/40">Koi event nahi mila.</p>
          </section>
        )}

        {/* ── Events List ── */}
        {!eventsLoading && !eventsError && events.length > 0 && (
          <section className="mt-10 space-y-8">
            {events.map((event) => {
              const images = event.images;
              const hasCarousel = images.length > 1;
              const activeIndex = carouselIndexByEvent[event.id] ?? 0;
              const activeImage = images[activeIndex] ?? images[0];

              return (
                <section
                  key={event.id}
                  className="rounded-[28px] border border-white/10 bg-[#0d1209]/85 p-5 shadow-[0_16px_40px_rgba(0,0,0,0.24)] sm:p-6"
                >
                  {/* Card Header */}
                  <div className="flex flex-col gap-3 border-b border-white/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <h2 className="mt-3 normal-case text-2xl tracking-normal text-[#f5f5f5]">
                        {event.title}
                      </h2>
                      <p className="mt-1 text-sm text-white/40">
                        {event.clientName}
                        {event.location ? ` · ${event.location}` : ""}
                      </p>
                    </div>
                    <span className="inline-flex w-fit rounded-full border border-[#88ab32]/30 bg-[#88ab32]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#d6e8a1]">
                      {event.eventType}
                    </span>
                  </div>

                  {/* Carousel */}
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

                      <button
                        type="button"
                        aria-label="Previous image"
                        onClick={() => updateCarouselIndex(event.id, images.length, "prev")}
                        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/40 bg-black/45 px-2.5 py-1.5 text-sm text-white transition hover:bg-black/70"
                      >
                        {"<"}
                      </button>
                      <button
                        type="button"
                        aria-label="Next image"
                        onClick={() => updateCarouselIndex(event.id, images.length, "next")}
                        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/40 bg-black/45 px-2.5 py-1.5 text-sm text-white transition hover:bg-black/70"
                      >
                        {">"}
                      </button>

                      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                        {images.map((_, imgIdx) => (
                          <button
                            key={imgIdx}
                            type="button"
                            aria-label={`Go to image ${imgIdx + 1}`}
                            onClick={() => jumpToImage(event.id, imgIdx)}
                            className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                              imgIdx === activeIndex ? "bg-accent scale-125" : "bg-white/45 hover:bg-white/70"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Single Image */}
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
                              ? "border-[#88ab32] shadow-[0_18px_44px_rgba(136,171,50,0.20)] -translate-y-1"
                              : "border-white/10 hover:border-[#88ab32]"
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
          </section>
        )}
      </div>
    </main>
  );
};

export default CorporateEventPage;