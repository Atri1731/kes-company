
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  MapPin,
  MoveUpRight,
} from "lucide-react";

const projects = [
  {
    name: "Alliance Recept",
    location: "Surat, Gujarat",
    category: "Recycling",
    number: "01",
    image:
    

      "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1400&q=85",
  },
  {
    name: "ARC7 Metals",
    location: "Surat, Gujarat",
    category: "Automobile",
    number: "02",
    image:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1100&q=85",
  },

{
  name: "CMP Factory Shed",
  location: "Vapi, Gujarat",
  category: "Manufacturing",
  number: "03",
  image: "/cmp-factory-shed.jpg",
},

  {
    name: "CR3 India",
    location: "Jamnagar, Gujarat",
    category: "Chemical",
    number: "04",
    image:
      "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1100&q=85",
  },
  {
    name: "Flair Cryosil",
    location: "Vapi, Gujarat",
    category: "Warehouse",
    number: "05",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1100&q=85",
  },
  {
    name: "Troikaa",
    location: "Ahmedabad, Gujarat",
    category: "Pharma",
    number: "06",
   image: "/troikaa.jpg",
  },
];

const categories = [
  "All",
  "Recycling",
  "Automobile",
  "Manufacturing",
  "Chemical",
  "Warehouse",
  "Pharma",
];

function ProjectCard({ project, featured = false }) {
  return (
    <Link
      to="/projects"
      className={`group relative block min-h-[320px] overflow-hidden bg-gray-900 ${
        featured ? "lg:min-h-[590px]" : "min-h-[320px] sm:min-h-[360px]"
      }`}
    >
  
<img
  src={project.image}
  alt={`${project.name} industrial project`}
  loading="lazy"
  onError={(event) => {
    event.currentTarget.style.display = "none";
  }}
  className="absolute inset-0 z-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
/>


      {/* Image contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/25 to-gray-950/5 transition-colors duration-300 group-hover:from-gray-950/95" />

      {/* Top metadata */}
      <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-5 sm:p-6">
        <span className="border border-white/30 bg-black/20 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
          {project.category}
        </span>

        <span className="text-sm font-semibold tracking-widest text-white/80">
          / {project.number}
        </span>
      </div>

      {/* Bottom content */}
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
        <div className="mb-3 flex items-center gap-2 text-xs font-medium text-gray-300">
          <MapPin size={14} className="text-red-400" />
          {project.location}
        </div>

        <div className="flex items-end justify-between gap-4">
          <div>
            <h3
              className={`font-extrabold leading-tight text-white ${
                featured
                  ? "text-3xl sm:text-4xl lg:text-5xl"
                  : "text-2xl sm:text-3xl"
              }`}
            >
              {project.name}
            </h3>

            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.15em] text-gray-300 transition-colors group-hover:text-white">
              View Project
            </p>
          </div>

          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/40 text-white transition-all duration-300 group-hover:border-red-700 group-hover:bg-red-700">
            <ArrowUpRight size={21} />
          </span>
        </div>

        <div className="mt-5 h-px w-full origin-left scale-x-0 bg-red-500 transition-transform duration-500 group-hover:scale-x-100" />
      </div>
    </Link>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
   <section className="overflow-hidden bg-[#181A20] py-20 text-white sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Section heading */}
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-10 bg-red-700" />
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-red-700">
                Selected Work
              </p>
            </div>

            <h2 className="mt-6 max-w-3xl text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-7xl">
              Built for industry.
             <span className="block text-gray-400">
                Made to perform.
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-5 lg:pb-2">
            <div className="hidden h-14 w-px bg-gray-300 sm:block" />

            <div>
           <p className="text-3xl font-black text-white">
  {String(filteredProjects.length).padStart(2, "0")}
</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-gray-400">
  Featured projects
</p>
            </div>
          </div>
        </div>

      <div className="mt-7 flex flex-col justify-between gap-5 border-b border-white/15 pb-8 sm:mt-9 lg:flex-row lg:items-end">
          <p className="max-w-xl text-sm leading-7 text-gray-300 sm:text-base">
            A selection of industrial facilities and engineering projects
            across manufacturing, recycling, chemicals, and other sectors.
          </p>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 self-start text-sm font-bold text-white transition hover:text-red-400 lg:self-auto">
            Explore Full Portfolio <ArrowUpRight size={18} />
          </Link>
        </div>

        {/* Filter controls */}
        <div className="mt-7 flex gap-2 overflow-x-auto pb-3">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={isActive}
              className={`shrink-0 rounded-sm px-5 py-3 text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
  isActive
    ? "border border-red-700 bg-red-700 text-white"
    : "border border-white/20 bg-transparent text-gray-300 hover:border-red-500 hover:bg-white/5 hover:text-white"
}`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Asymmetric project gallery */}
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {filteredProjects.map((project, index) => (
            <div
              key={project.name}
              className={
                activeCategory === "All" && index === 0
                  ? "sm:col-span-2 lg:row-span-2"
                  : ""
              }
            >
              <ProjectCard
                project={project}
                featured={activeCategory === "All" && index === 0}
              />
            </div>
          ))}
        </div>

        {/* Bottom link */}
        <div className="mt-10 flex flex-col gap-5 border-t border-gray-300 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-400">
            Showing {filteredProjects.length} project
            {filteredProjects.length === 1 ? "" : "s"} in this selection
          </p>

          <Link
            to="/projects"
            className="inline-flex items-center gap-3 self-start bg-red-700 px-6 py-4 text-sm font-bold text-white transition hover:bg-red-800 sm:self-auto"
          >
            View All Projects <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
