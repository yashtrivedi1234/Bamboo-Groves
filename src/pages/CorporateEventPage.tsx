import React, { useEffect, useState } from "react";
import { Building2, Images, MapPin } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { workEventGroups } from "./corporate-profile/data";
import { getAccessRequestApiUrl } from "../lib/accessRequestApi";

const CorporateEventPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [isValidating, setIsValidating] = useState(true);
  const [isAccessGranted, setIsAccessGranted] = useState(false);
  const [validationMessage, setValidationMessage] = useState("Validating access...");
  const [carouselIndexByGroup, setCarouselIndexByGroup] = useState<Record<string, number>>({});

  const updateCarouselIndex = (groupName: string, imageCount: number, direction: "prev" | "next") => {
    setCarouselIndexByGroup((prev) => {
      const currentIndex = prev[groupName] ?? 0;
      const nextIndex = direction === "next"
        ? (currentIndex + 1) % imageCount
        : (currentIndex - 1 + imageCount) % imageCount;

      return {
        ...prev,
        [groupName]: nextIndex,
      };
    });
  };

  useEffect(() => {
    const requestId = searchParams.get("requestId")?.trim();
    const portfolioIdParam = searchParams.get("portfolioId")?.trim();
    const portfolioId = Number(portfolioIdParam);

    if (!requestId || !portfolioIdParam || !Number.isInteger(portfolioId) || portfolioId <= 0) {
      setIsAccessGranted(false);
      setValidationMessage("Access validation parameters are missing.");
      setIsValidating(false);
      return;
    }

    const controller = new AbortController();

    const validateAccess = async () => {
      try {
        const response = await fetch(
          `${getAccessRequestApiUrl(`/validate-access/${portfolioId}`)}?requestId=${encodeURIComponent(requestId)}`,
          {
            method: "GET",
            signal: controller.signal,
          },
        );

        const responseBody = await response.json().catch(() => null);

        const explicitDeny =
          responseBody?.success === false ||
          responseBody?.valid === false ||
          responseBody?.isValid === false;

        if (!response.ok || explicitDeny) {
          const message =
            typeof responseBody?.message === "string"
              ? responseBody.message
              : !response.ok
                ? "Access validation failed."
                : "Access was not granted.";
          setIsAccessGranted(false);
          setValidationMessage(message);
          return;
        }

        setIsAccessGranted(true);
        setValidationMessage(
          typeof responseBody?.message === "string"
            ? responseBody.message
            : "Access validated",
        );
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") {
          return;
        }

        setIsAccessGranted(false);
        setValidationMessage("Unable to validate access right now.");
      } finally {
        setIsValidating(false);
      }
    };

    validateAccess();

    return () => controller.abort();
  }, [searchParams]);

  if (isValidating) {
    return (
      <main className="min-h-screen bg-[#070a05] px-5 pb-20 pt-28 text-[#f5f5f5] sm:px-8 sm:pt-32 lg:px-12">
        <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-[#0d1209]/85 p-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#88ab32]">Access Check</p>
          <h1 className="mt-4 text-2xl font-bold text-white">Validating your session...</h1>
          <p className="mt-3 text-sm text-white/70">Please wait while we verify your access.</p>
        </div>
      </main>
    );
  }

  if (!isAccessGranted) {
    return (
      <main className="min-h-screen bg-[#070a05] px-5 pb-20 pt-28 text-[#f5f5f5] sm:px-8 sm:pt-32 lg:px-12">
        <div className="mx-auto max-w-3xl rounded-3xl border border-red-400/30 bg-[#1a0e0e]/85 p-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-300">Access Denied</p>
          <h1 className="mt-4 text-2xl font-bold text-white">Corporate events are locked.</h1>
          <p className="mt-3 text-sm text-white/70">{validationMessage}</p>
        </div>
      </main>
    );
  }

  const requestedCompanyName =
    searchParams.get("companyName")?.trim() ??
    searchParams.get("company")?.trim() ??
    "";
  const normalizedCompanyName = requestedCompanyName.toLowerCase();

  const filteredGroups = normalizedCompanyName
    ? workEventGroups.filter((group) => group.companyName.toLowerCase() === normalizedCompanyName)
    : workEventGroups;

  const shouldShowSliderOnly = Boolean(normalizedCompanyName);

  const totalEvents = filteredGroups.reduce(
    (count, group) => count + group.events.length,
    0,
  );
  const totalLocations = new Set(
    filteredGroups.flatMap((group) =>
      group.events.map((event) => event.location),
    ),
  ).size;

  return (
    <main className="min-h-screen bg-[#070a05] px-5 pb-20 pt-28 text-[#f5f5f5] sm:px-8 sm:pt-32 lg:px-12">
      <div className="mx-auto max-w-7xl">
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
                {shouldShowSliderOnly
                  ? "Showing only slider images for the selected company."
                  : "This page is ready for a large event library, with multiple events grouped under the same company and each event carrying its own location and image."}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45">
                  Companies
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <Building2 className="h-5 w-5 text-[#88ab32]" />
                  <span className="text-2xl font-bold text-white">
                    {filteredGroups.length}
                  </span>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45">
                  Events
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <Images className="h-5 w-5 text-[#88ab32]" />
                  <span className="text-2xl font-bold text-white">
                    {totalEvents}
                  </span>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45">
                  Locations
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-[#88ab32]" />
                  <span className="text-2xl font-bold text-white">
                    {totalLocations}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10 space-y-8">
          {filteredGroups.map((group) => (
            <section
              key={group.companyName}
              className="rounded-[28px] border border-white/10 bg-[#0d1209]/85 p-5 shadow-[0_16px_40px_rgba(0,0,0,0.24)] sm:p-6"
            >
              <div className="flex flex-col gap-3 border-b border-white/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="mt-3 normal-case text-2xl tracking-normal text-[#f5f5f5]">
                    {group.companyName}
                  </h2>
                </div>
                <span className="inline-flex w-fit rounded-full border border-[#88ab32]/30 bg-[#88ab32]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#d6e8a1]">
                  {group.events.length} Events
                </span>
              </div>

              {(() => {
                const groupImages = group.events.flatMap((event) => [
                  {
                    src: event.image,
                    alt: event.alt ?? `${group.companyName} event in ${event.location}`,
                  },
                  ...(event.extraImages ?? []).map((image) => ({
                    src: image,
                    alt: event.alt ?? `${group.companyName} event in ${event.location}`,
                  })),
                ]);

                const hasCarousel = groupImages.length > 1;
                const activeIndex = carouselIndexByGroup[group.companyName] ?? 0;
                const activeImage = groupImages[activeIndex] ?? groupImages[0];

                if (shouldShowSliderOnly && hasCarousel && activeImage) {
                  return (
                    <div className="relative mt-6 aspect-[16/7] overflow-hidden rounded-2xl border border-white/10">
                      <img
                        src={activeImage.src}
                        alt={activeImage.alt}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                      <button
                        type="button"
                        aria-label="Previous image"
                        onClick={() => updateCarouselIndex(group.companyName, groupImages.length, "prev")}
                        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/40 bg-black/45 px-2.5 py-1.5 text-sm text-white transition hover:bg-black/70"
                      >
                        {"<"}
                      </button>
                      <button
                        type="button"
                        aria-label="Next image"
                        onClick={() => updateCarouselIndex(group.companyName, groupImages.length, "next")}
                        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/40 bg-black/45 px-2.5 py-1.5 text-sm text-white transition hover:bg-black/70"
                      >
                        {">"}
                      </button>

                      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                        {groupImages.map((_, imageIndex) => (
                          <span
                            key={`${group.companyName}-${imageIndex}`}
                            className={`h-1.5 w-1.5 rounded-full ${imageIndex === activeIndex ? "bg-accent" : "bg-white/45"}`}
                          />
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {group.events.map((event) => (
                      <article
                        key={event.id}
                        className="group overflow-hidden rounded-2xl border border-white/10 bg-[#10140c] transition duration-300 hover:-translate-y-1 hover:border-[#88ab32] hover:shadow-[0_18px_44px_rgba(136,171,50,0.16)]"
                      >
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <img
                            src={event.image}
                            alt={event.alt ?? `${group.companyName} event in ${event.location}`}
                            loading="lazy"
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
                        </div>
                      </article>
                    ))}
                  </div>
                );
              })()}
            </section>
          ))}

          {requestedCompanyName && filteredGroups.length === 0 && (
            <section className="rounded-[28px] border border-red-400/25 bg-[#1a0e0e]/85 p-6 text-center">
              <p className="text-sm text-red-200">No event images found for company: {requestedCompanyName}</p>
            </section>
          )}
        </section>
      </div>
    </main>
  );
};

export default CorporateEventPage;
