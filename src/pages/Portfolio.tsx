import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import ContactModal from "../components/ContactModal";
import CustomQR from "../components/CustomQR";
import logo from "../assets/logo.png";

const projects = [
  {
    id: 1,
    title: "The Crystal Gala",
    category: "Corporate",
    desc: "A high-end corporate gala for 500+ guests with immersive lighting and world-class production.",
    year: "2025",
    guests: "500+",
    days: "3",
    vendors: "12",
  },
  {
    id: 2,
    title: "Midnight Soiree",
    category: "Social",
    desc: "An exclusive private birthday celebration in a hidden rooftop venue.",
    year: "2024",
    guests: "80",
    days: "1",
    vendors: "6",
  },
  {
    id: 3,
    title: "Nexus Tech Launch",
    category: "Corporate",
    desc: "A futuristic product launch featuring holographic displays.",
    year: "2025",
    guests: "300+",
    days: "2",
    vendors: "9",
  },
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState("All");
  const [modalOpen, setModalOpen] = useState(false);
  const [qrSize, setQrSize] = useState(300);
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get("project");

    if (projectId) {
      const project = projects.find((p) => p.id === parseInt(projectId, 10));
      if (project) {
        setSelectedProject(project);
        setModalOpen(true);
        window.history.replaceState(
          {},
          document.title,
          window.location.pathname
        );
      }
    }
  }, []);

  useEffect(() => {
    const updateQrSize = () => {
      if (window.innerWidth < 480) {
        setQrSize(190);
        return;
      }

      if (window.innerWidth < 768) {
        setQrSize(220);
        return;
      }

      setQrSize(300);
    };

    updateQrSize();
    window.addEventListener("resize", updateQrSize);
    return () => window.removeEventListener("resize", updateQrSize);
  }, []);

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <>
      <div className="mx-auto mt-4 max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:mt-6 lg:px-8">
        <div className="mb-8 sm:mb-10">
          <span className="section-label">Portfolio</span>
          <h1 className="mb-3 text-white">Productions</h1>
          <p className="max-w-2xl text-sm leading-6 text-white/55 sm:text-base">
            Explore a selection of Bamboo Groves events across corporate productions and social celebrations.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-2.5 sm:mb-10 sm:gap-3">
          {["All", "Corporate", "Social"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] transition-colors duration-200 sm:text-sm ${
                filter === cat
                  ? "bg-[#88ab32] text-black"
                  : "bg-white/10 text-white/60 hover:bg-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => {
              const qrUrl = `${
                import.meta.env.VITE_APP_URL
              }/portfolio?project=${project.id}`;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="rounded-[28px] bg-[#0c0c0e] p-4 sm:p-5 lg:p-6"
                >
                  {/* Card header */}
                  <div className="mb-4 sm:mb-5">
                    <span className="text-xs font-medium tracking-widest uppercase text-[#88ab32] mb-1 block">
                      {project.category}
                    </span>
                    <h2 className="text-lg font-semibold leading-tight text-white sm:text-xl">
                      {project.title}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-white/40">{project.desc}</p>
                  </div>

                  {/* Stats row */}
                  <div className="mb-5 grid grid-cols-2 gap-3 text-xs text-white/30 sm:grid-cols-4">
                    <span className="rounded-2xl border border-white/8 bg-white/[0.03] px-3 py-2">
                      <span className="mb-1 block text-[10px] uppercase tracking-[0.18em] text-white/25">
                        Year
                      </span>
                      <span className="text-white/60 font-medium">{project.year}</span>
                    </span>
                    <span className="rounded-2xl border border-white/8 bg-white/[0.03] px-3 py-2">
                      <span className="mb-1 block text-[10px] uppercase tracking-[0.18em] text-white/25">
                        Guests
                      </span>
                      <span className="text-white/60 font-medium">
                        {project.guests}
                      </span>
                    </span>
                    <span className="rounded-2xl border border-white/8 bg-white/[0.03] px-3 py-2">
                      <span className="mb-1 block text-[10px] uppercase tracking-[0.18em] text-white/25">
                        Duration
                      </span>
                      <span className="text-white/60 font-medium">
                        {project.days}
                      </span>
                      {project.days === "1" ? "day" : "days"}
                    </span>
                    <span className="rounded-2xl border border-white/8 bg-white/[0.03] px-3 py-2">
                      <span className="mb-1 block text-[10px] uppercase tracking-[0.18em] text-white/25">
                        Vendors
                      </span>
                      <span className="text-white/60 font-medium">
                        {project.vendors}
                      </span>
                    </span>
                  </div>

                  {/* Custom QR Code */}
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 200, damping: 18 }}
                    className="group relative mx-auto w-full max-w-[220px] sm:max-w-[260px] lg:max-w-[320px]"
                  >
                    {/* Glow border */}
                    <div className="absolute -inset-[1px] rounded-[22px] bg-gradient-to-br from-[#88ab32] via-[#b8d56a] to-[#88ab32] opacity-40 group-hover:opacity-80 transition-opacity duration-500 blur-[1px]" />

                    {/* QR wrapper */}
                    <div className="relative rounded-[20px] overflow-hidden bg-white p-3">
                      <CustomQR url={qrUrl} logoText="CC" logoSrc={logo} size={qrSize} />
                    </div>

                    {/* Scan label */}
                    <p className="mt-2 text-center text-[10px] tracking-[0.2em] uppercase text-white/20 group-hover:text-[#88ab32]/60 transition-colors duration-300">
                      Scan to view
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        <ContactModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          projectTitle={selectedProject?.title || "Our Project"}
        />
      </div>
    </>
  );
};

export default Portfolio;
