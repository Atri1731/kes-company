


// import { Link } from "react-router-dom";
// import {
//   ArrowUpRight,
//   Building2,
//   Factory,
//   Droplets,
//   HardHat,
//   CheckCircle2,
//   MoveUpRight,
// } from "lucide-react";

// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const services = [
//   {
//     number: "01",
//     category: "BUILDING SYSTEMS",
//     title: "Pre-Engineered Buildings",
//     description:
//       "Efficient pre-engineered building solutions designed around industrial requirements, functional layouts, and project-specific needs.",
//     details: [
//       "Industrial and commercial buildings",
//       "Customised building design",
//       "Coordinated fabrication and erection",
//     ],
//     icon: Building2,
//     image:
//       "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=85",
//     imageAlt: "Steel fabrication and industrial construction",
//   },
//   {
//     number: "02",
//     category: "STRUCTURAL ENGINEERING",
//     title: "Industrial Steel Structures",
//     description:
//       "Steel structure solutions combining engineering coordination, fabrication, and execution for demanding industrial environments.",
//     details: [
//       "Structural steel fabrication",
//       "Industrial sheds and warehouses",
//       "Structural erection and coordination",
//     ],
//     icon: Factory,
//     image:
//       "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1200&q=85",
//     imageAlt: "Industrial steel structures",
//   },
//   {
//     number: "03",
//     category: "WATER INFRASTRUCTURE",
//     title: "Industrial Wastewater Treatment",
//     description:
//       "Wastewater treatment infrastructure planned around operational requirements, environmental responsibilities, and site conditions.",
//     details: [
//       "Sewage treatment plants (STP)",
//       "Wastewater treatment plants (WTP)",
//       "Project-specific treatment solutions",
//     ],
//     icon: Droplets,
//     image:
//       "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&w=1200&q=85",
//     imageAlt: "Water infrastructure and treatment facilities",
//   },
//   {
//     number: "04",
//     category: "END-TO-END DELIVERY",
//     title: "EPC Solutions",
//     description:
//       "Integrated engineering, procurement, and construction coordination to help bring industrial projects from planning through execution.",
//     details: [
//       "Engineering and project planning",
//       "Procurement coordination",
//       "Construction and execution management",
//     ],
//     icon: HardHat,
//     image:
//       "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=85",
//     imageAlt: "Industrial construction project",
//   },
// ];

// export default function ServicesPage() {
//   return (
//     <>
//       <Navbar />

//       <main className="bg-[#F7F5F1] text-[#292524]">

//         {/* Hero — editorial introduction */}
//         <section className="relative overflow-hidden border-b border-[#D8CEC7]">
//           <div
//             aria-hidden="true"
//             className="pointer-events-none absolute -right-32 -top-36 h-[420px] w-[420px] rounded-full border border-[#C99AA2]/40 sm:h-[580px] sm:w-[580px]"
//           />
//           <div
//             aria-hidden="true"
//             className="pointer-events-none absolute -right-16 -top-20 h-[290px] w-[290px] rounded-full border border-[#C99AA2]/40 sm:h-[420px] sm:w-[420px]"
//           />

//           <div className="relative mx-auto grid max-w-[1440px] gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:px-12 lg:py-28">
//             <div>
//               <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#873F4B] sm:text-xs">
//                 <span className="h-px w-9 bg-[#873F4B]" />
//                 What We Do
//               </p>

//               <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
//                 Engineered for
//                 <span className="block text-[#873F4B]">
//                   industry. Built
//                 </span>
//                 to perform.
//               </h1>
//             </div>

//             <div className="relative lg:pb-2">
//               <p className="max-w-lg text-base leading-8 text-[#78716C] sm:text-lg">
//                 From pre-engineered buildings to industrial steel
//                 structures, water treatment systems, and EPC projects,
//                 KES Group delivers solutions shaped around your
//                 requirements.
//               </p>

//               <Link
//                 to="/contact"
//                 className="group mt-7 inline-flex items-center gap-3 border-b border-[#873F4B] pb-2 text-sm font-semibold text-[#873F4B] transition-colors hover:text-[#71323D]"
//               >
//                 Discuss your project
//                 <ArrowUpRight
//                   size={18}
//                   className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
//                 />
//               </Link>
//             </div>
//           </div>

//           <div className="relative border-t border-[#D8CEC7] bg-[#F0E0E3]/60">
//             <div className="mx-auto grid max-w-[1440px] grid-cols-2 divide-x divide-[#D8CEC7] px-5 sm:px-8 lg:grid-cols-4 lg:px-12">
//               {[
//                 "Building Systems",
//                 "Steel Structures",
//                 "Water Infrastructure",
//                 "EPC Solutions",
//               ].map((label, index) => (
//                 <a
//                   key={label}
//                   href={`#service-${index + 1}`}
//                   className="group flex min-h-20 items-center justify-between gap-2 px-3 py-5 text-xs font-semibold text-[#57534E] transition-colors hover:text-[#873F4B] sm:px-5 sm:text-sm"
//                 >
//                   <span>{label}</span>
//                   <MoveUpRight
//                     size={15}
//                     className="shrink-0 text-[#873F4B] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//                   />
//                 </a>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Service showcase — alternating image and content */}
//         <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
//           <div className="mx-auto max-w-[1440px]">

//             <div className="mb-12 flex flex-col justify-between gap-5 sm:mb-16 sm:flex-row sm:items-end">
//               <div>
//                 <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#873F4B]">
//                   Our Expertise
//                 </p>
//                 <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
//                   Solutions for every
//                   <span className="text-[#873F4B]"> stage.</span>
//                 </h2>
//               </div>

//               <p className="max-w-sm text-sm leading-7 text-[#78716C]">
//                 Explore our core capabilities and find the right
//                 starting point for your next industrial project.
//               </p>
//             </div>

//             <div className="space-y-8 sm:space-y-12">
//               {services.map((service, index) => {
//                 const Icon = service.icon;
//                 const reversed = index % 2 === 1;

//                 return (
//                   <article
//                     key={service.number}
//                     id={`service-${index + 1}`}
//                     className="scroll-mt-28 overflow-hidden border border-[#E3D8D2] bg-white"
//                   >
//                     <div
//                       className={`grid lg:grid-cols-2 ${
//                         reversed ? "lg:[&>div:first-child]:order-2" : ""
//                       }`}
//                     >
//                       {/* Image panel */}
//                       <div className="group relative min-h-[280px] overflow-hidden bg-[#E8D9D9] sm:min-h-[360px] lg:min-h-[440px]">
//                         <img
//                           src={service.image}
//                           alt={service.imageAlt}
//                           loading="lazy"
//                           className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
//                         />

//                         <div className="absolute inset-0 bg-gradient-to-t from-[#292524]/70 via-[#292524]/10 to-transparent" />

//                         <span className="absolute left-5 top-5 border border-white/50 bg-[#292524]/20 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm sm:left-7 sm:top-7">
//                           {service.category}
//                         </span>

//                         <span className="absolute bottom-5 right-5 text-6xl font-semibold tracking-tighter text-white/70 sm:bottom-7 sm:right-7 sm:text-8xl">
//                           {service.number}
//                         </span>
//                       </div>

//                       {/* Text panel */}
//                       <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12 xl:p-14">
//                         <div className="flex items-center justify-between gap-4">
//                           <span className="flex h-12 w-12 items-center justify-center bg-[#F0E0E3] text-[#873F4B]">
//                             <Icon size={23} strokeWidth={1.6} />
//                           </span>

//                           <span className="font-mono text-xs tracking-widest text-[#B9A5A1]">
//                             SERVICE / {service.number}
//                           </span>
//                         </div>

//                         <h3 className="mt-7 max-w-lg text-2xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
//                           {service.title}
//                         </h3>

//                         <p className="mt-5 text-sm leading-7 text-[#78716C] sm:text-base sm:leading-8">
//                           {service.description}
//                         </p>

//                         <div className="mt-6 space-y-3 border-t border-[#E5DCD6] pt-5">
//                           {service.details.map((detail) => (
//                             <div
//                               key={detail}
//                               className="flex items-start gap-3 text-sm leading-6 text-[#57534E]"
//                             >
//                               <CheckCircle2
//                                 size={17}
//                                 className="mt-0.5 shrink-0 text-[#873F4B]"
//                               />
//                               <span>{detail}</span>
//                             </div>
//                           ))}
//                         </div>

//                         <div className="mt-8">
//                           <Link
//                             to="/contact"
//                             className="group inline-flex items-center gap-3 bg-[#873F4B] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#71323D]"
//                           >
//                             Enquire about this service
//                             <ArrowUpRight
//                               size={17}
//                               className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//                             />
//                           </Link>
//                         </div>
//                       </div>
//                     </div>
//                   </article>
//                 );
//               })}
//             </div>
//           </div>
//         </section>

//         {/* Closing call to action */}
//         <section className="px-5 pb-16 sm:px-8 sm:pb-24 lg:px-12">
//           <div className="relative mx-auto max-w-[1440px] overflow-hidden bg-[#F0E0E3] px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          
// {/* <div className="relative mx-auto grid max-w-[1280px] gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-16 lg:px-12 lg:py-24"> */}

//             <div
//               aria-hidden="true"
//               className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border border-[#C99AA2]/50 sm:h-80 sm:w-80"
//             />

//             <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
//               <div className="max-w-3xl">
//                 <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#873F4B] sm:text-xs">
//                   Have a project in mind?
//                 </p>

//                 <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
//                   Let’s build something
//                   <span className="text-[#873F4B]"> that lasts.</span>
//                 </h2>

//                 <p className="mt-4 max-w-2xl text-sm leading-7 text-[#6F5A5D] sm:text-base">
//                   Tell us about your requirements and let’s explore
//                   the right engineering solution for your project.
//                 </p>
//               </div>

//               <Link
//                 to="/contact"
//                 className="group inline-flex shrink-0 items-center justify-center gap-3 self-start bg-[#873F4B] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#71323D] lg:self-auto"
//               >
//                 Request a Quote
//                 <ArrowUpRight
//                   size={18}
//                   className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//                 />
//               </Link>
//             </div>
//           </div>
//         </section>

//       </main>

//       <Footer />
//     </>
//   );
// }








import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Building2,
  Factory,
  Droplets,
  HardHat,
  CheckCircle2,
  MoveUpRight,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const services = [
  {
    number: "01",
    category: "BUILDING SYSTEMS",
    title: "Pre-Engineered Buildings",
    description:
      "Efficient pre-engineered building solutions designed around industrial requirements, functional layouts, and project-specific needs.",
    details: [
      "Industrial and commercial buildings",
      "Customised building design",
      "Coordinated fabrication and erection",
    ],
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Steel fabrication and industrial construction",
  },
  {
    number: "02",
    category: "STRUCTURAL ENGINEERING",
    title: "Industrial Steel Structures",
    description:
      "Steel structure solutions combining engineering coordination, fabrication, and execution for demanding industrial environments.",
    details: [
      "Structural steel fabrication",
      "Industrial sheds and warehouses",
      "Structural erection and coordination",
    ],
    icon: Factory,
    image:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Industrial steel structures",
  },
  {
    number: "03",
    category: "WATER INFRASTRUCTURE",
    title: "Industrial Wastewater Treatment",
    description:
      "Wastewater treatment infrastructure planned around operational requirements, environmental responsibilities, and site conditions.",
    details: [
      "Sewage treatment plants (STP)",
      "Wastewater treatment plants (WTP)",
      "Project-specific treatment solutions",
    ],
    icon: Droplets,
    image:
      "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Water infrastructure and treatment facilities",
  },
  {
    number: "04",
    category: "END-TO-END DELIVERY",
    title: "EPC Solutions",
    description:
      "Integrated engineering, procurement, and construction coordination to help bring industrial projects from planning through execution.",
    details: [
      "Engineering and project planning",
      "Procurement coordination",
      "Construction and execution management",
    ],
    icon: HardHat,
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Industrial construction project",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <motion.main
        className="bg-[#F7F5F1] text-[#292524]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >

        {/* Services navigation grid — replaces only the old hero introduction */}
        {/* <motion.section
          className="border-y border-[#D8CEC7] bg-[#F0E0E3]/60 px-5 sm:px-8 lg:px-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.div
            className="mx-auto grid max-w-[1440px] grid-cols-2"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.12, delayChildren: 0.08 },
              },
            }}
          >
            {[
              "Building Systems",
              "Steel Structures",
              "Water Infrastructure",
              "EPC Solutions",
            ].map((label, index) => (
              <motion.a
                key={label}
                href={`#service-${index + 1}`}
                variants={{
                  hidden: { opacity: 0, y: 22 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.99 }}
                className={`group flex min-h-[100px] items-center justify-between gap-3 border-b border-[#D8CEC7] px-4 py-6 text-xs font-semibold text-[#57534E] transition-colors duration-300 hover:bg-white/50 hover:text-[#873F4B] sm:min-h-[120px] sm:px-7 sm:text-sm ${
                  index % 2 === 0 ? "border-r" : ""
                } ${index >= 2 ? "border-b-0" : ""}`}
              >
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  {label}
                </span>
                <motion.span
                  className="shrink-0 text-[#873F4B]"
                  whileHover={{ x: 3, y: -3 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <MoveUpRight size={17} strokeWidth={1.8} />
                </motion.span>
              </motion.a>
            ))}
          </motion.div>
        </motion.section> */}

        {/* Service showcase — alternating image and content */}
        <section className="px-5 pt-10 pb-12 sm:px-8 sm:pt-12 sm:pb-16 lg:px-12 lg:pt-14 lg:pb-20">
          <div className="mx-auto max-w-[1440px]">

            <div className="mb-12 flex flex-col justify-between gap-5 sm:mb-16 sm:flex-row sm:items-end">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#873F4B]">
                  Our Expertise
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
                  Solutions for every
                  <span className="text-[#873F4B]"> stage.</span>
                </h2>
              </div>

              <p className="max-w-sm text-sm leading-7 text-[#78716C]">
                Explore our core capabilities and find the right
                starting point for your next industrial project.
              </p>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {services.map((service, index) => {
                const Icon = service.icon;
                const reversed = index % 2 === 1;

                return (
                  <motion.article
                    key={service.number}
                    id={`service-${index + 1}`}
                    className="scroll-mt-28 overflow-hidden border border-[#E3D8D2] bg-white"
                    initial={{ opacity: 0, y: 55 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.16 }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.10,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <div
                      className={`grid lg:grid-cols-2 ${
                        reversed ? "lg:[&>div:first-child]:order-2" : ""
                      }`}
                    >
                      {/* Image panel */}
                      <div className="group relative min-h-[280px] overflow-hidden bg-[#E8D9D9] sm:min-h-[360px] lg:min-h-[440px]">
                        <motion.img
                          src={service.image}
                          alt={service.imageAlt}
                          loading="lazy"
                          initial={{ scale: 1.08 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.1, ease: "easeOut" }}
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#292524]/70 via-[#292524]/10 to-transparent" />

                        <span className="absolute left-5 top-5 border border-white/50 bg-[#292524]/20 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm sm:left-7 sm:top-7">
                          {service.category}
                        </span>

                        <span className="absolute bottom-5 right-5 text-6xl font-semibold tracking-tighter text-white/70 sm:bottom-7 sm:right-7 sm:text-8xl">
                          {service.number}
                        </span>
                      </div>

                      {/* Text panel */}
                      <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12 xl:p-14">
                        <div className="flex items-center justify-between gap-4">
                          <span className="flex h-12 w-12 items-center justify-center bg-[#F0E0E3] text-[#873F4B]">
                            <Icon size={23} strokeWidth={1.6} />
                          </span>

                          <span className="text-xs tracking-widest text-[#B9A5A1]">
                            SERVICE / {service.number}
                          </span>
                        </div>

                        <h3 className="mt-7 max-w-lg text-2xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                          {service.title}
                        </h3>

                        <p className="mt-5 text-sm leading-7 text-[#78716C] sm:text-base sm:leading-8">
                          {service.description}
                        </p>

                        <div className="mt-6 space-y-3 border-t border-[#E5DCD6] pt-5">
                          {service.details.map((detail) => (
                            <div
                              key={detail}
                              className="flex items-start gap-3 text-sm leading-6 text-[#57534E]"
                            >
                              <CheckCircle2
                                size={17}
                                className="mt-0.5 shrink-0 text-[#873F4B]"
                              />
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>

                        <div className="mt-8">
                          <Link
                            to="/contact"
                            className="group inline-flex items-center gap-3 bg-[#873F4B] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#71323D]"
                          >
                            Enquire about this service
                            <ArrowUpRight
                              size={17}
                              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Closing call to action */}
        <motion.section
          className="px-5 pb-16 sm:px-8 sm:pb-24 lg:px-12"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative mx-auto max-w-[1440px] overflow-hidden bg-[#F0E0E3] px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          
{/* <div className="relative mx-auto grid max-w-[1280px] gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-16 lg:px-12 lg:py-24"> */}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border border-[#C99AA2]/50 sm:h-80 sm:w-80"
            />

            <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div className="max-w-3xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#873F4B] sm:text-xs">
                  Have a project in mind?
                </p>

                <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  Let’s build something
                  <span className="text-[#873F4B]"> that lasts.</span>
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#6F5A5D] sm:text-base">
                  Tell us about your requirements and let’s explore
                  the right engineering solution for your project.
                </p>
              </div>

              <Link
                to="/contact"
                className="group inline-flex shrink-0 items-center justify-center gap-3 self-start bg-[#873F4B] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#71323D] lg:self-auto"
              >
                Request a Quote
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              
            </div>
            
          </div>
          
        </motion.section>
<motion.section
          className="border-y border-[#D8CEC7] bg-[#F0E0E3]/60 px-5 sm:px-8 lg:px-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.div
            className="mx-auto grid max-w-[1440px] grid-cols-2"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.12, delayChildren: 0.08 },
              },
            }}
          >
            {[
              "Building Systems",
              "Steel Structures",
              "Water Infrastructure",
              "EPC Solutions",
            ].map((label, index) => (
              <motion.a
                key={label}
                href={`#service-${index + 1}`}
                variants={{
                  hidden: { opacity: 0, y: 22 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.99 }}
                className={`group flex min-h-[100px] items-center justify-between gap-3 border-b border-[#D8CEC7] px-4 py-6 text-xs font-semibold text-[#57534E] transition-colors duration-300 hover:bg-white/50 hover:text-[#873F4B] sm:min-h-[120px] sm:px-7 sm:text-sm ${
                  index % 2 === 0 ? "border-r" : ""
                } ${index >= 2 ? "border-b-0" : ""}`}
              >
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  {label}
                </span>
                <motion.span
                  className="shrink-0 text-[#873F4B]"
                  whileHover={{ x: 3, y: -3 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <MoveUpRight size={17} strokeWidth={1.8} />
                </motion.span>
              </motion.a>
            ))}
          </motion.div>
        </motion.section>
      </motion.main>

      <Footer />
    </>
  );
}


