import React from 'react';
import { Link } from 'react-router-dom';
import { workEventGroups } from '../data';
import RevealSection from './RevealSection';
import SectionHeading from './SectionHeading';

const WorksSection: React.FC = () => {
  const [carouselIndexByGroup, setCarouselIndexByGroup] = React.useState<Record<string, number>>({});

  const updateCarouselIndex = (groupName: string, imageCount: number, direction: 'prev' | 'next') => {
    setCarouselIndexByGroup((prev) => {
      const currentIndex = prev[groupName] ?? 0;
      const nextIndex = direction === 'next'
        ? (currentIndex + 1) % imageCount
        : (currentIndex - 1 + imageCount) % imageCount;

      return {
        ...prev,
        [groupName]: nextIndex,
      };
    });
  };

  return (
    <RevealSection
      id="works"
      observerOptions={{ threshold: 0.02, rootMargin: '0px 0px -2% 0px' }}
      className="bg-[#0a0a0a] px-5 py-20 sm:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading centered title="Works Done Recently at a Glance" />
        <div className="mt-12 space-y-8">
          {workEventGroups.map((group) => (
            <section
              key={group.companyName}
              className="rounded-[28px] border border-white/10 bg-[#0d1209]/80 p-5 shadow-[0_16px_40px_rgba(0,0,0,0.24)] sm:p-6"
            >
              <div className="flex flex-col gap-3 border-b border-white/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3 className="mt-3 normal-case text-2xl tracking-normal text-[#f5f5f5]">{group.companyName}</h3>
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

                if (!hasCarousel || !activeImage) {
                  return null;
                }

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
                      onClick={() => updateCarouselIndex(group.companyName, groupImages.length, 'prev')}
                      className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/40 bg-black/45 px-2.5 py-1.5 text-sm text-white transition hover:bg-black/70"
                    >
                      {'<'}
                    </button>
                    <button
                      type="button"
                      aria-label="Next image"
                      onClick={() => updateCarouselIndex(group.companyName, groupImages.length, 'next')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/40 bg-black/45 px-2.5 py-1.5 text-sm text-white transition hover:bg-black/70"
                    >
                      {'>'}
                    </button>

                    <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                      {groupImages.map((_, imageIndex) => (
                        <span
                          key={`${group.companyName}-${imageIndex}`}
                          className={`h-1.5 w-1.5 rounded-full ${imageIndex === activeIndex ? 'bg-accent' : 'bg-white/45'}`}
                        />
                      ))}
                    </div>
                  </div>
                );
              })()}

              <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {group.events.map((event) => {
                  return (
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
                  );
                })}
              </div>
            </section>
          ))}
        </div>
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
