

// import { motion } from "motion/react";
// import { useMemo, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowUpRight,
//   ArrowRight,
//   MapPin,
//   Building2,
//   Layers3,
//   X,
// } from "lucide-react";

// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const projects = [
//   {
//     name: "Alliance Recept",
//     location: "Surat, Gujarat",
//     category: "Recycling",
//     image:
//       "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=900&q=80",
//   },
//   {
//     name: "ARC7 Metals",
//     location: "Surat, Gujarat",
//     category: "Automobile",
//     image:
//       "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=900&q=80",
//   },
//   {
//     name: "CMP Factory Shed",
//     location: "Vapi, Gujarat",
//     category: "Manufacturing",
//     image: "/cmp-factory-shed.jpg",
//   },
//   {
//     name: "CR3 India",
//     location: "Jamnagar, Gujarat",
//     category: "Chemical",
//     image:
//       "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=900&q=80",
//   },
//   {
//     name: "Flair Cryosil",
//     location: "Vapi, Gujarat",
//     category: "Warehouse",
//     image:
//       "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
//   },
//   {
//     name: "Godawitt",
//     location: "Halol, Gujarat",
//     category: "Warehouse",
//     image:
//       "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=900&q=80",
//   },
//   {
//     name: "Maruti Suzuki",
//     location: "Gujarat",
//     category: "Automobile",
//     image:
//       "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=900&q=80",
//   },
//   {
//     name: "Meghali",
//     location: "Dahej, Gujarat",
//     category: "Manufacturing",
//     image:
//       "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=900&q=80",
//   },
//   {
//     name: "Polymetrix",
//     location: "Vapi, Gujarat",
//     category: "Chemical",
//     image:
//       "https://images.unsplash.com/photo-1565608438257-fac3c27beb36?auto=format&fit=crop&w=900&q=80",
//   },
//   {
//     name: "Plas O Pack",
//     location: "Vapi, Gujarat",
//     category: "Manufacturing",
//     image:
//       "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=80",
//   },
//   {
//     name: "Savita Oil",
//     location: "Vapi, Gujarat",
//     category: "Chemical",
//     image:
//       "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=900&q=80",
//   },
//   {
//     name: "SUD Chemie",
//     location: "Vadodara, Gujarat",
//     category: "Chemical",
//     image:
//       "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=900&q=80",
//   },
//   {
//     name: "Surja Extrusion",
//     location: "Anand, Gujarat",
//     category: "Manufacturing",
//     image: "/surja-extrusion.jpg",
//   },
//   {
//     name: "Troikaa",
//     location: "Ahmedabad, Gujarat",
//     category: "Pharma",
//     image: "/troikaa.jpg",
//   },
//   {
//     name: "V-Trans",
//     location: "Vapi, Gujarat",
//     category: "Warehouse",
//     image:
//       "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
//   },
// ];

// const categories = [
//   "All",
//   "Recycling",
//   "Automobile",
//   "Manufacturing",
//   "Chemical",
//   "Warehouse",
//   "Pharma",
// ];

// export default function ProjectsPage() {
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredProjects = useMemo(() => {
//     const search = searchTerm.trim().toLowerCase();

//     return projects.filter((project) => {
//       const matchesCategory =
//         activeCategory === "All" ||
//         project.category === activeCategory;

//       const matchesSearch =
//         !search ||
//         project.name.toLowerCase().includes(search) ||
//         project.location.toLowerCase().includes(search) ||
//         project.category.toLowerCase().includes(search);

//       return matchesCategory && matchesSearch;
//     });
//   }, [activeCategory, searchTerm]);

//   return (
//     <>
//       <Navbar />

//       <main className="overflow-hidden bg-[#F7F5F1] text-[#292524]">
//         {/* Hero */}
//     {/* Projects Page Introduction */}
// <section className="bg-[#F7F5F1] px-6 pb-8 pt-20 md:px-12 lg:px-20">
//   <div className="mx-auto max-w-7xl">
//     <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#873F4B]">
//       Our Work
//     </p>

//     <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
//       <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-[#292524] md:text-5xl">
//         Projects built to <span className="text-[#873F4B]">perform.</span>
//       </h1>

//       <p className="max-w-md text-sm leading-7 text-[#6B625E] md:text-base">
//         Explore our industrial projects, designed with precision,
//         quality, and long-term performance in mind.
//       </p>
//     </div>
//   </div>
// </section>
//         {/* Portfolio */}
//         <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12">
//           <div className="mx-auto max-w-7xl">
//             <div className="mb-8 border-t border-[#D8CEC7] pt-6 sm:flex sm:items-end sm:justify-between sm:gap-6">
//               <div>
//                 <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#873F4B]">
//                   Selected Work
//                 </p>
//                 <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
//                   Projects that make an impact
//                 </h2>
//                 <p className="mt-3 max-w-xl text-sm leading-7 text-[#78716C] sm:text-base">
//                   Browse the portfolio and find projects by industry,
//                   client name, or location.
//                 </p>
//               </div>

//               <p className="mt-5 shrink-0 text-sm font-medium text-[#78716C] sm:mt-0">
//                 {filteredProjects.length}{" "}
//                 {filteredProjects.length === 1 ? "project" : "projects"} found
//               </p>
//             </div>

//             {/* Search */}
//             <div className="mb-5 flex flex-col gap-3 sm:flex-row">
//               <div className="relative w-full sm:max-w-sm">
//                 <input
//                   type="text"
//                   value={searchTerm}
//                   onChange={(event) => setSearchTerm(event.target.value)}
//                   placeholder="Search projects or locations..."
//                   aria-label="Search projects or locations"
//                   className="w-full rounded-xl border border-[#D8CEC7] bg-white px-4 py-3.5 pr-11 text-sm text-[#292524] outline-none transition placeholder:text-[#A8A29E] focus:border-[#873F4B] focus:ring-2 focus:ring-[#873F4B]/10"
//                 />

//                 {searchTerm && (
//                   <button
//                     type="button"
//                     onClick={() => setSearchTerm("")}
//                     aria-label="Clear search"
//                     className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-[#78716C] transition hover:bg-[#F0E0E3] hover:text-[#873F4B]"
//                   >
//                     <X size={16} />
//                   </button>
//                 )}
//               </div>
//             </div>

//             {/* Category filters */}
//             <div className="mb-9 flex flex-wrap gap-2.5">
//               {categories.map((category) => {
//                 const isActive = activeCategory === category;

//                 return (
//                   <button
//                     key={category}
//                     type="button"
//                     onClick={() => setActiveCategory(category)}
//                     aria-pressed={isActive}
//                     className={`rounded-full border px-4 py-2.5 text-sm font-semibold transition duration-200 sm:px-5 ${
//                       isActive
//                         ? "border-[#873F4B] bg-[#873F4B] text-white shadow-sm"
//                         : "border-[#D8CEC7] bg-transparent text-[#57534E] hover:border-[#873F4B] hover:bg-[#F0E0E3] hover:text-[#873F4B]"
//                     }`}
//                   >
//                     {category}
//                   </button>
//                 );
//               })}
//             </div>

//             {/* Project cards */}
//             {filteredProjects.length > 0 ? (
//  <motion.div
//   key={`${activeCategory}-${searchTerm}`}
//   className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
//   variants={{
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: 0.08,
//       },
//     },
//   }}
//   initial="hidden"
//   animate="visible"
// >
//                 {filteredProjects.map((project, index) => (
//                  <motion.article
//   key={project.name}
//   variants={{
//     hidden: {
//       opacity: 0,
//       y: 28,
//       scale: 0.98,
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         duration: 0.55,
//         ease: [0.22, 1, 0.36, 1],
//       },
//     },
//   }}
//   whileHover={{
//     y: -6,
//     scale: 1.01,
//     transition: { duration: 0.25 },
//   }}
//   className="group relative overflow-hidden rounded-2xl border border-[#D8CEC7]/80 bg-white transition-shadow duration-300 hover:border-[#C99AA2] hover:shadow-[0_18px_45px_rgba(75,45,45,0.09)]"
// >
//                     <div className="relative aspect-[4/3] overflow-hidden bg-[#F0E0E3]">
//                       <img
//                         src={project.image}
//                         alt={`${project.name} project`}
//                         loading="lazy"
//                         className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
//                       />

//                       <div className="absolute inset-0 bg-gradient-to-t from-[#292524]/55 via-transparent to-transparent opacity-70 transition group-hover:opacity-90" />

//                       <span className="absolute left-4 top-4 rounded-full border border-white/60 bg-[#F7F5F1]/95 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#873F4B] backdrop-blur-sm">
//                         {project.category}
//                       </span>

//                       <span className="absolute bottom-4 left-4 text-xs font-semibold tracking-[0.18em] text-white/85">
//                         PROJECT {String(projects.indexOf(project) + 1).padStart(2, "0")}
//                       </span>

//                       <div className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-[#F7F5F1] text-[#873F4B] opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
//                         <ArrowUpRight size={20} />
//                       </div>
//                     </div>

//                     <div className="p-5 sm:p-6">
//                       <div className="mb-4 flex items-center gap-2 text-xs text-[#78716C]">
//                         <MapPin
//                           size={14}
//                           className="shrink-0 text-[#873F4B]"
//                         />
//                         <span>{project.location}</span>
//                       </div>

//                       <div className="flex items-center justify-between gap-3">
//                         <h3 className="text-xl font-semibold tracking-tight text-[#292524] transition-colors group-hover:text-[#873F4B] sm:text-2xl">
//                           {project.name}
//                         </h3>

//                         <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#D8CEC7] text-[#873F4B] transition duration-300 group-hover:border-[#873F4B] group-hover:bg-[#873F4B] group-hover:text-white">
//                           <ArrowUpRight size={18} />
//                         </span>
//                       </div>

//                       <div className="mt-5 h-px bg-[#E7E0DA]" />

//                       <div className="mt-4 flex items-center justify-between">
//                         <span className="text-xs font-medium uppercase tracking-[0.14em] text-[#A8A29E]">
//                           KES Projects
//                         </span>
//                         <span className="text-xs font-semibold text-[#873F4B]">
//                           {String(index + 1).padStart(2, "0")}
//                         </span>
//                       </div>
//                     </div>
//                   </motion.article>
//                 ))}
//               </motion.div>
//             ) : (
//               <div className="rounded-2xl border border-dashed border-[#C99AA2] bg-white px-6 py-16 text-center">
//                 <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#F0E0E3] text-[#873F4B]">
//                   <Building2 size={25} />
//                 </div>
//                 <h3 className="mt-5 text-xl font-semibold">
//                   No matching projects
//                 </h3>
//                 <p className="mt-2 text-sm text-[#78716C]">
//                   Try another search term or select a different category.
//                 </p>
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setSearchTerm("");
//                     setActiveCategory("All");
//                   }}
//                   className="mt-6 rounded-full bg-[#873F4B] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#6F303B]"
//                 >
//                   Reset filters
//                 </button>
//               </div>
//             )}

//             <div className="mt-8 flex flex-col gap-3 border-t border-[#D8CEC7] pt-5 text-sm text-[#78716C] sm:flex-row sm:items-center sm:justify-between">
//               <p>
//                 Showing {filteredProjects.length} of {projects.length} projects
//               </p>
//               {(searchTerm || activeCategory !== "All") && (
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setSearchTerm("");
//                     setActiveCategory("All");
//                   }}
//                   className="self-start font-semibold text-[#873F4B] transition hover:text-[#6F303B] sm:self-auto"
//                 >
//                   Clear all filters
//                 </button>
//               )}
//             </div>
//           </div>
//         </section>

//         {/* CTA */}
//         <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12">
//           <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#873F4B] px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-16">
//             <div className="pointer-events-none absolute -right-12 -top-24 h-64 w-64 rounded-full border border-white/10 sm:h-80 sm:w-80" />
//             <div className="pointer-events-none absolute -right-1 -top-12 h-48 w-48 rounded-full border border-white/10 sm:h-64 sm:w-64" />
// <motion.div
//   className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between"
//   initial={{ opacity: 0, y: 30 }}
//   whileInView={{ opacity: 1, y: 0 }}
//   viewport={{ once: true, amount: 0.25 }}
//   transition={{
//     duration: 0.8,
//     ease: [0.22, 1, 0.36, 1],
//   }}
// >
//               <div className="max-w-2xl">
//                 <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#F0E0E3]">
//                   Have a project in mind?
//                 </p>

//                 <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
//                   Let's build something
//                   <span className="block font-semibold italic text-[#F0E0E3]">
//                     remarkable together.
//                   </span>
//                 </h2>

//                 <p className="mt-5 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
//                   Tell us about your industrial project and connect with
//                   our team to discuss your requirements.
//                 </p>
//               </div>

//               <Link
//                 to="/contact"
//                 className="inline-flex shrink-0 items-center justify-center gap-3 self-start rounded-full bg-[#F7F5F1] px-6 py-4 text-sm font-bold text-[#873F4B] transition hover:bg-[#F0E0E3] md:self-center"
//               >
//                 Discuss Your Project
//                 <ArrowRight size={18} />
//               </Link>
//             </motion.div>
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </>
//   );
// }










import { motion } from "motion/react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  MapPin,
  Building2,
  Layers3,
  X,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const projects = [
  {
    name: "Alliance Recept",
    location: "Surat, Gujarat",
    category: "Recycling",
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "ARC7 Metals",
    location: "Surat, Gujarat",
    category: "Automobile",
    image:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "CMP Factory Shed",
    location: "Vapi, Gujarat",
    category: "Manufacturing",
    image: "/cmp-factory-shed.jpg",
  },
  {
    name: "CR3 India",
    location: "Jamnagar, Gujarat",
    category: "Chemical",
    image:
      "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Flair Cryosil",
    location: "Vapi, Gujarat",
    category: "Warehouse",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Godawitt",
    location: "Halol, Gujarat",
    category: "Warehouse",
    image:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Maruti Suzuki",
    location: "Gujarat",
    category: "Automobile",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Meghali",
    location: "Dahej, Gujarat",
    category: "Manufacturing",
    image:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Polymetrix",
    location: "Vapi, Gujarat",
    category: "Chemical",
    image:
      "https://images.unsplash.com/photo-1565608438257-fac3c27beb36?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Plas O Pack",
    location: "Vapi, Gujarat",
    category: "Manufacturing",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Savita Oil",
    location: "Vapi, Gujarat",
    category: "Chemical",
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "SUD Chemie",
    location: "Vadodara, Gujarat",
    category: "Chemical",
    image:
      "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Surja Extrusion",
    location: "Anand, Gujarat",
    category: "Manufacturing",
    image: "/surja-extrusion.jpg",
  },
  {
    name: "Troikaa",
    location: "Ahmedabad, Gujarat",
    category: "Pharma",
    image: "/troikaa.jpg",
  },
  {
    name: "V-Trans",
    location: "Vapi, Gujarat",
    category: "Warehouse",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
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

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === "All" ||
        project.category === activeCategory;

      const matchesSearch =
        !search ||
        project.name.toLowerCase().includes(search) ||
        project.location.toLowerCase().includes(search) ||
        project.category.toLowerCase().includes(search);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-[#F7F5F1] text-[#292524]">
        {/* Portfolio */}
        <motion.section
          className="px-5 pb-20 pt-3 sm:px-8 sm:pb-24 sm:pt-5 lg:px-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.08 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mx-auto max-w-7xl">
            <motion.div
              className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end sm:gap-6"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#873F4B]">
                  Selected Work
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Projects that make an impact
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-7 text-[#78716C] sm:text-base">
                  Browse the portfolio and find projects by industry,
                  client name, or location.
                </p>
              </div>

              <p className="mt-5 shrink-0 text-sm font-medium text-[#78716C] sm:mt-0">
                {filteredProjects.length}{" "}
                {filteredProjects.length === 1 ? "project" : "projects"} found
              </p>
            </motion.div>

            {/* Search */}
            <div className="mb-5 flex flex-col gap-3 sm:flex-row">
              <div className="relative w-full sm:max-w-sm">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search projects or locations..."
                  aria-label="Search projects or locations"
                  className="w-full rounded-xl border border-[#D8CEC7] bg-white px-4 py-3.5 pr-11 text-sm text-[#292524] outline-none transition placeholder:text-[#A8A29E] focus:border-[#873F4B] focus:ring-2 focus:ring-[#873F4B]/10"
                />

                {searchTerm && (
                  <button
                    type="button"
                    onClick={() => setSearchTerm("")}
                    aria-label="Clear search"
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-[#78716C] transition hover:bg-[#F0E0E3] hover:text-[#873F4B]"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            </div>

            {/* Category filters */}
            <div className="mb-9 flex flex-wrap gap-2.5">
              {categories.map((category) => {
                const isActive = activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    aria-pressed={isActive}
                    className={`min-h-11 border px-5 py-2.5 text-sm font-semibold transition-all duration-300 sm:px-6 ${
                      isActive
                        ? "border-[#873F4B] bg-[#873F4B] text-white shadow-[0_6px_18px_rgba(135,63,75,0.16)]"
                        : "border-[#D8CEC7] bg-white/60 text-[#57534E] hover:-translate-y-0.5 hover:border-[#873F4B] hover:bg-[#F0E0E3] hover:text-[#873F4B]"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            {/* Project cards */}
            {filteredProjects.length > 0 ? (
 <motion.div
  key={`${activeCategory}-${searchTerm}`}
  className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  }}
  initial="hidden"
  animate="visible"
>
                {filteredProjects.map((project, index) => (
                 <motion.article
  key={project.name}
  variants={{
    hidden: {
      opacity: 0,
      y: 28,
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }}
  whileHover={{
    y: -6,
    scale: 1.01,
    transition: { duration: 0.25 },
  }}
  className="group relative overflow-hidden border border-[#D8CEC7]/90 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#873F4B]/50 hover:shadow-[0_18px_45px_rgba(75,45,45,0.10)]"
>
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#F0E0E3]">
                      <img
                        src={project.image}
                        alt={`${project.name} project`}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#292524]/55 via-transparent to-transparent opacity-70 transition group-hover:opacity-90" />

                      <span className="absolute left-4 top-4 border border-white/60 bg-[#F7F5F1]/95 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#873F4B] backdrop-blur-sm">
                        {project.category}
                      </span>

                      <span className="absolute bottom-4 left-4 text-xs font-semibold tracking-[0.18em] text-white/85">
                        PROJECT {String(projects.indexOf(project) + 1).padStart(2, "0")}
                      </span>

                      <div className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-[#F7F5F1] text-[#873F4B] opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <ArrowUpRight size={20} />
                      </div>
                    </div>

                    <div className="p-5 sm:p-6">
                      <div className="mb-4 flex items-center gap-2 text-xs text-[#78716C]">
                        <MapPin
                          size={14}
                          className="shrink-0 text-[#873F4B]"
                        />
                        <span>{project.location}</span>
                      </div>

                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-xl font-semibold tracking-tight text-[#292524] transition-colors group-hover:text-[#873F4B] sm:text-2xl">
                          {project.name}
                        </h3>

                        <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#D8CEC7] text-[#873F4B] transition duration-300 group-hover:border-[#873F4B] group-hover:bg-[#873F4B] group-hover:text-white">
                          <ArrowUpRight size={18} />
                        </span>
                      </div>

                      <div className="mt-5 h-px bg-[#E7E0DA]" />

                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-xs font-medium uppercase tracking-[0.14em] text-[#A8A29E]">
                          KES Projects
                        </span>
                        <span className="text-xs font-semibold text-[#873F4B]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            ) : (
              <div className="rounded-2xl border border-dashed border-[#C99AA2] bg-white px-6 py-16 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#F0E0E3] text-[#873F4B]">
                  <Building2 size={25} />
                </div>
                <h3 className="mt-5 text-xl font-semibold">
                  No matching projects
                </h3>
                <p className="mt-2 text-sm text-[#78716C]">
                  Try another search term or select a different category.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchTerm("");
                    setActiveCategory("All");
                  }}
                  className="mt-6 rounded-full bg-[#873F4B] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#6F303B]"
                >
                  Reset filters
                </button>
              </div>
            )}

            <div className="mt-8 flex flex-col gap-3 border-t border-[#D8CEC7] pt-5 text-sm text-[#78716C] sm:flex-row sm:items-center sm:justify-between">
              <p>
                Showing {filteredProjects.length} of {projects.length} projects
              </p>
              {(searchTerm || activeCategory !== "All") && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchTerm("");
                    setActiveCategory("All");
                  }}
                  className="self-start font-semibold text-[#873F4B] transition hover:text-[#6F303B] sm:self-auto"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#873F4B] px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-16">
            <div className="pointer-events-none absolute -right-12 -top-24 h-64 w-64 rounded-full border border-white/10 sm:h-80 sm:w-80" />
            <div className="pointer-events-none absolute -right-1 -top-12 h-48 w-48 rounded-full border border-white/10 sm:h-64 sm:w-64" />
<motion.div
  className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.25 }}
  transition={{
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1],
  }}
>
              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#F0E0E3]">
                  Have a project in mind?
                </p>

                <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  Let's build something
                  <span className="block font-semibold italic text-[#F0E0E3]">
                    remarkable together.
                  </span>
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
                  Tell us about your industrial project and connect with
                  our team to discuss your requirements.
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex shrink-0 items-center justify-center gap-3 self-start rounded-full bg-[#F7F5F1] px-6 py-4 text-sm font-bold text-[#873F4B] transition hover:bg-[#F0E0E3] md:self-center"
              >
                Discuss Your Project
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </>
  );
}
