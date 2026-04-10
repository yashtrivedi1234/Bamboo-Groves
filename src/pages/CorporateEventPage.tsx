import React from 'react';
import { Building2, Images, MapPin } from 'lucide-react';
import { workEventGroups } from './corporate-profile/data';

const CorporateEventPage: React.FC = () => {
  const totalEvents = workEventGroups.reduce((count, group) => count + group.events.length, 0);
  const totalLocations = new Set(
    workEventGroups.flatMap((group) => group.events.map((event) => event.location)),
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
                Corporate Event Highlights
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/68 sm:text-base">
                This page is ready for a large event library, with multiple events grouped under the same company and
                each event carrying its own location and image.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45">Companies</p>
                <div className="mt-3 flex items-center gap-3">
                  <Building2 className="h-5 w-5 text-[#88ab32]" />
                  <span className="text-2xl font-bold text-white">{workEventGroups.length}</span>
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

        <section className="mt-10 space-y-8">
          {workEventGroups.map((group) => (
            <section
              key={group.companyName}
              className="rounded-[28px] border border-white/10 bg-[#0d1209]/85 p-5 shadow-[0_16px_40px_rgba(0,0,0,0.24)] sm:p-6"
            >
              <div className="flex flex-col gap-3 border-b border-white/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#88ab32]">Client</p>
                  <h2 className="mt-3 normal-case text-2xl tracking-normal text-[#f5f5f5]">{group.companyName}</h2>
                </div>
                <span className="inline-flex w-fit rounded-full border border-[#88ab32]/30 bg-[#88ab32]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#d6e8a1]">
                  {group.events.length} Events
                </span>
              </div>

              <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {group.events.map((event, index) => (
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
                      <span className="absolute left-3 top-3 rounded-full bg-[#88ab32] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0a0a0a]">
                        Event {index + 1}
                      </span>
                    </div>

                    <div className="flex items-end justify-between gap-4 p-4">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">Location</p>
                        <h3 className="mt-2 normal-case text-base tracking-normal text-[#f5f5f5]">{event.location}</h3>
                      </div>
                      <p className="text-right text-xs leading-relaxed text-white/45">{group.companyName}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </section>
      </div>
    </main>
  );
};

export default CorporateEventPage;
