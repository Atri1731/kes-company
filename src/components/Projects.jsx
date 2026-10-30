// import { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowUpRight,
//   ArrowRight,
//   MapPin,
// } from "lucide-react";

// const projects = [
//   {
//     name: "Alliance Recept",
//     location: "Surat, Gujarat",
//     category: "Recycling",
//     number: "01",
//     image:
//       "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1400&q=85",
//   },
//   {
//     name: "ARC7 Metals",
//     location: "Surat, Gujarat",
//     category: "Automobile",
//     number: "02",
//     image:
//       "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1100&q=85",
//   },
//   {
//     name: "CMP Factory Shed",
//     location: "Vapi, Gujarat",
//     category: "Manufacturing",
//     number: "03",
//     image: "/cmp-factory-shed.jpg",
//   },
//   {
//     name: "CR3 India",
//     location: "Jamnagar, Gujarat",
//     category: "Chemical",
//     number: "04",
//     image:
//       "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1100&q=85",
//   },
//   {
//     name: "Flair Cryosil",
//     location: "Vapi, Gujarat",
//     category: "Warehouse",
//     number: "05",
//     image:
//       "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1100&q=85",
//   },
//   {
//     name: "Troikaa",
//     location: "Ahmedabad, Gujarat",
//     category: "Pharma",
//     number: "06",
//     image: "/troikaa.jpg",
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

// function ProjectCard({ project, variant = "standard" }) {
//   const isWide = variant === "wide";
//   const isTall = variant === "tall";

//   return (

//   <Link
//     to="/projects"
//     className={`group relative block h-full min-h-[300px] overflow-hidden bg-[#E8E3DD] ${
//       isTall
//         ? "lg:min-h-0"
//         : "min-h-[300px] sm:min-h-[320px] lg:min-h-0"
//     }`}
//   >
//       <img
//         src={project.image}
//         alt={`${project.name} industrial project`}
//         loading="lazy"
//         onError={(event) => {
//           event.currentTarget.style.display = "none";
//         }}
//         className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
//       />

//       <div className="absolute inset-0 bg-gradient-to-t from-[#171514]/90 via-[#171514]/10 to-transparent" />

//       {/* Technical project label */}
//       <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5 sm:p-6">
//       <span className="border border-white/50 bg-[#292524]/55 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-sm">
//   {project.category}
// </span>

//         <span className="font-mono text-xs text-white/85">
//           PROJECT / {project.number}
//         </span>
//       </div>

//       {/* Project information */}
//       <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-7">
//         <div className="mb-4 flex items-center gap-2 text-xs text-white/80">
//           <MapPin size={14} className="text-[#D9A8AE]" />
//           {project.location}
//         </div>

//         <div className="flex items-end justify-between gap-3">
//           <h3
//             className={`max-w-[85%] font-semibold leading-tight tracking-[-0.035em] text-white ${
//               isWide || isTall
//                 ? "text-3xl sm:text-4xl"
//                 : "text-2xl sm:text-3xl"
//             }`}
//           >
//             {project.name}
//           </h3>

//           <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/60 text-white transition-all duration-300 group-hover:border-[#873F4B] group-hover:bg-[#873F4B]">
//             <ArrowUpRight
//               size={19}
//               className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
//             />
//           </span>
//         </div>

//         <div className="mt-5 h-px origin-left scale-x-0 bg-[#D9A8AE] transition-transform duration-500 group-hover:scale-x-100" />
//       </div>
//     </Link>
//   );
// }

// export default function Projects() {
//   const [activeCategory, setActiveCategory] = useState("All");

//   const filteredProjects =
//     activeCategory === "All"
//       ? projects
//       : projects.filter(
//           (project) => project.category === activeCategory
//         );

//   return (
//     <section className="bg-[#292524] px-3 py-3 text-[#292524] sm:px-5 sm:py-5 lg:px-8 lg:py-8">
//       <div className="mx-auto max-w-[1600px] bg-[#F7F5F1]">
//         {/* Dark editorial header */}
//         <header className="relative overflow-hidden bg-[#292524] px-6 py-10 text-white sm:px-10 sm:py-14 lg:px-14 lg:py-16">
//           <div
//             aria-hidden="true"
//             className="pointer-events-none absolute -right-16 -top-24 h-80 w-80 rounded-full border border-white/[0.08]"
//           />
//           <div
//             aria-hidden="true"
//             className="pointer-events-none absolute -right-4 -top-12 h-56 w-56 rounded-full border border-white/[0.08]"
//           />

//           <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
//             <div>
//               <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D9A8AE]">
//                 <span className="h-px w-8 bg-[#D9A8AE]" />
//                 KES Group / Project Archive
//               </p>

//               <h2 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-7xl">
//                 Built with purpose.
//                 <span className="block text-[#D9A8AE]">
//                   Engineered to last.
//                 </span>
//               </h2>

//               <p className="mt-5 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
//                 A selection of industrial facilities and engineering projects
//                 across manufacturing, recycling, chemicals, and other sectors.
//               </p>
//             </div>

//             <div className="flex items-center gap-4 border-t border-white/20 pt-5 lg:min-w-[160px] lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
//               <span className="text-5xl font-semibold tabular-nums text-white">
//                 {String(filteredProjects.length).padStart(2, "0")}
//               </span>
//               <span className="max-w-[90px] text-[9px] font-semibold uppercase leading-5 tracking-[0.16em] text-white/60">
//                 Projects in selection
//               </span>
//             </div>
//           </div>
//         </header>

//         {/* Light portfolio canvas */}
//         <div className="px-5 py-7 sm:px-8 sm:py-9 lg:px-12 lg:py-12">
//           {/* Category selector */}
//           <div className="flex flex-col gap-5 border-b border-[#D8CEC7] pb-6 lg:flex-row lg:items-center lg:justify-between">
//             <div>
//               <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#873F4B]">
//                 Browse by discipline
//               </p>
//               <p className="mt-2 text-sm text-[#78716C]">
//                 Find projects across our industrial sectors.
//               </p>
//             </div>

//             <div
//               className="flex gap-2 overflow-x-auto pb-2 lg:max-w-[72%] lg:flex-wrap lg:justify-end"
//               aria-label="Filter projects by category"
//             >
//               {categories.map((category) => {
//                 const isActive = activeCategory === category;

//                 return (
//                   <button
//                     key={category}
//                     type="button"
//                     onClick={() => setActiveCategory(category)}
//                     aria-pressed={isActive}
//                     className={`shrink-0 border px-4 py-3 text-[9px] font-semibold uppercase tracking-[0.12em] transition-all duration-200 ${
//                       isActive
//                         ? "border-[#873F4B] bg-[#873F4B] text-white"
//                         : "border-[#D8CEC7] bg-transparent text-[#57534E] hover:border-[#873F4B] hover:text-[#873F4B]"
//                     }`}
//                   >
//                     {category}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>

// {/* Asymmetric architectural grid */}
// {filteredProjects.length > 0 && (
//   <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-12 lg:auto-rows-[190px] lg:gap-4">
//     {filteredProjects.map((project, index) => {
//       let layoutClass = "";
//       let variant = "standard";

//       if (activeCategory === "All") {
//         if (index === 0) {
//           layoutClass = "sm:col-span-2 lg:col-span-7 lg:row-span-2";
//           variant = "tall";
//         } else if (index === 1 || index === 2) {
//           layoutClass = "lg:col-span-5";
//         } else {
//           layoutClass = "lg:col-span-4";
//         }
//       } else {
//         layoutClass = "lg:col-span-4";
//       }

//       return (
//         <div
//           key={project.number}
//           className={`min-w-0 ${layoutClass}`}
//         >
//           <ProjectCard
//             project={project}
//             variant={variant}
//           />
//         </div>
//       );
//     })}
//   </div>
// )}

//           {/* Archive footer */}
//           <div className="mt-8 flex flex-col gap-5 border-t border-[#D8CEC7] pt-6 sm:flex-row sm:items-center sm:justify-between">
//             <p className="text-xs leading-6 text-[#78716C]">
//               Showing {filteredProjects.length} project
//               {filteredProjects.length === 1 ? "" : "s"} in this selection
//             </p>

//             <Link
//               to="/projects"
//               className="group inline-flex items-center gap-3 self-start bg-[#873F4B] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#71323D] sm:self-auto"
//             >
//               Explore Portfolio
//               <ArrowRight
//                 size={18}
//                 className="transition-transform duration-300 group-hover:translate-x-1"
//               />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {motion, AnimatePresence, useReducedMotion} from "motion/react";
import {ArrowUpRight, ArrowRight, MapPin} from "lucide-react";

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

function ProjectCard({project, variant = "standard"}) {
  const isWide = variant === "wide";
  const isTall = variant === "tall";

  return (
    <Link
      to="/projects"
      aria-label={`View ${project.name} project`}
      className={`group relative block h-full min-h-[300px] overflow-hidden bg-[#E8E3DD] ${
        isTall ? "lg:min-h-0" : "min-h-[300px] sm:min-h-[320px] lg:min-h-0"
      }`}
    >
      <img
        src={project.image}
        alt={`${project.name} industrial project`}
        loading="lazy"
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#171514]/90 via-[#171514]/10 to-transparent" />

      <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5 sm:p-6">
        <span className="border border-white/50 bg-[#292524]/55 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-sm">
          {project.category}
        </span>

        <span className="font-mono text-xs text-white/85">
          PROJECT / {project.number}
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-7">
        <div className="mb-4 flex items-center gap-2 text-xs text-white/80">
          <MapPin size={14} className="text-[#D9A8AE]" />
          {project.location}
        </div>

        <div className="flex items-end justify-between gap-3">
          <h3
            className={`max-w-[85%] font-semibold leading-tight tracking-[-0.035em] text-white ${
              isWide || isTall ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl"
            }`}
          >
            {project.name}
          </h3>

          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/60 text-white transition-all duration-300 group-hover:border-[#873F4B] group-hover:bg-[#873F4B]">
            <ArrowUpRight
              size={19}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </div>

        <div className="mt-5 h-px origin-left scale-x-0 bg-[#D9A8AE] transition-transform duration-500 group-hover:scale-x-100" />
      </div>
    </Link>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const reduceMotion = useReducedMotion();
const [hasMounted, setHasMounted] = useState(false);

useEffect(() => {
  const frame = requestAnimationFrame(() => {
    setHasMounted(true);
  });

  return () => cancelAnimationFrame(frame);
}, []);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="bg-[#292524] px-3 py-3 text-[#292524] sm:px-5 sm:py-5 lg:px-8 lg:py-8">
      <div className="mx-auto max-w-[1600px] bg-[#F7F5F1]">
        <header className="relative overflow-hidden bg-[#292524] px-6 py-10 text-white sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-24 h-80 w-80 rounded-full border border-white/[0.08]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-4 -top-12 h-56 w-56 rounded-full border border-white/[0.08]"
          />

          <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D9A8AE]">
                <span className="h-px w-8 bg-[#D9A8AE]" />
                KES Group / Project Archive
              </p>

              <motion.h2
                initial={reduceMotion ? false : {opacity: 0, y: 25}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, amount: 0.4}}
                transition={{
                  duration: reduceMotion ? 0 : 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-7xl"
              >
                Built with purpose.
                <span className="block text-[#D9A8AE]">
                  Engineered to last.
                </span>
              </motion.h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
                A selection of industrial facilities and engineering projects
                across manufacturing, recycling, chemicals, and other sectors.
              </p>
            </div>

            <div className="flex items-center gap-4 border-t border-white/20 pt-5 lg:min-w-[160px] lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
              <motion.span
                key={filteredProjects.length}
                initial={reduceMotion ? false : {opacity: 0, y: 8}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: reduceMotion ? 0 : 0.25}}
                className="text-5xl font-semibold tabular-nums text-white"
              >
                {String(filteredProjects.length).padStart(2, "0")}
              </motion.span>
              <span className="max-w-[90px] text-[9px] font-semibold uppercase leading-5 tracking-[0.16em] text-white/60">
                Projects in selection
              </span>
            </div>
          </div>
        </header>

        <div className="px-5 py-7 sm:px-8 sm:py-9 lg:px-12 lg:py-12">
          <div className="flex flex-col gap-5 border-b border-[#D8CEC7] pb-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#873F4B]">
                Browse by discipline
              </p>
              <p className="mt-2 text-sm text-[#78716C]">
                Find projects across our industrial sectors.
              </p>
            </div>

            <div
              className="flex gap-2 overflow-x-auto pb-2 lg:max-w-[72%] lg:flex-wrap lg:justify-end"
              aria-label="Filter projects by category"
            >
              {categories.map((category) => {
                const isActive = activeCategory === category;

                return (
                  <motion.button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    aria-pressed={isActive}
                    whileHover={reduceMotion ? undefined : {y: -2}}
                    whileTap={reduceMotion ? undefined : {scale: 0.97}}
                    transition={{duration: reduceMotion ? 0 : 0.2}}
                    className={`shrink-0 border px-4 py-3 text-[9px] font-semibold uppercase tracking-[0.12em] transition-all duration-200 ${
                      isActive
                        ? "border-[#873F4B] bg-[#873F4B] text-white"
                        : "border-[#D8CEC7] bg-transparent text-[#57534E] hover:border-[#873F4B] hover:text-[#873F4B]"
                    }`}
                  >
                    {category}
                  </motion.button>
                );
              })}
            </div>
          </div>

        <div className="mt-6">
<motion.div
  key={activeCategory}
  className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-12 lg:auto-rows-[190px] lg:gap-4"
  initial={{ opacity: 0, y: 20 }}
  animate={{
    opacity: hasMounted ? 1 : 0,
    y: hasMounted ? 0 : 20,
  }}
  transition={{ duration: 0.5, ease: "easeOut" }}
>
    {filteredProjects.map((project, index) => {
      let layoutClass = "";
      let variant = "standard";

      if (activeCategory === "All") {
        if (index === 0) {
          layoutClass =
            "sm:col-span-2 lg:col-span-7 lg:row-span-2";
          variant = "tall";
        } else if (index === 1 || index === 2) {
          layoutClass = "lg:col-span-5";
        } else {
          layoutClass = "lg:col-span-4";
        }
      } else {
        layoutClass = "lg:col-span-4";
      }

      return (
        <motion.div
          key={project.number}
        initial={reduceMotion ? false : { opacity: 0, y: 45 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{
  once: true,
  amount: 0.2,
}}
transition={{
  duration: 1.5,
  delay: index * 0.12,
  ease: [0.22, 1, 0.36, 1],
}}
          className={`min-w-0 ${layoutClass}`}
        >
          <ProjectCard project={project} variant={variant} />
        </motion.div>
      );
    })}
  </motion.div>
</div>
          <div className="mt-8 flex flex-col gap-5 border-t border-[#D8CEC7] pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-6 text-[#78716C]">
              Showing {filteredProjects.length} project
              {filteredProjects.length === 1 ? "" : "s"} in this selection
            </p>

            <Link
              to="/projects"
              className="group inline-flex items-center gap-3 self-start bg-[#873F4B] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#71323D] sm:self-auto"
            >
              Explore Portfolio
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
