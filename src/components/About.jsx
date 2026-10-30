

// import { Link } from "react-router-dom";
// import { ArrowRight, CheckCircle2, MoveUpRight } from "lucide-react";

// const highlights = [
//   "Industrial engineering and construction solutions",
//   "Pre-engineered buildings and steel structures",
//   "Quality-focused project execution",
//   "Solutions tailored to client requirements",
// ];

// export default function About() {
//   return (
//    <section className="relative overflow-hidden bg-[#F7F3EF] py-10 text-[#292524] sm:py-14 lg:py-16">
//       <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
//         {/* Editorial section heading */}
//         <div className="mb-12 flex flex-col justify-between gap-5 border-b border-[#D8CEC7]/70 pb-7 sm:mb-16 sm:flex-row sm:items-end">
//           <div>
//             <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#873F4B]">
//               <span className="h-px w-8 bg-[#873F4B]" />
//               About KES Group
//             </p>
//             <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl lg:text-6xl">
//               15 Years of
//               <span className="block text-[#873F4B]">
//                 Engineering Excellence
//               </span>
//             </h2>
//           </div>
//           <p className="max-w-xs text-sm leading-7 text-[#78716C]">
//             Industrial engineering and construction solutions shaped around
//             quality, practical execution, and client requirements.
//           </p>
//         </div>

//         {/* Asymmetric content layout */}
//         <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
//           {/* Large image and overlapping statistic */}
//           <div className="relative lg:col-span-6">
//           <div className="relative h-[360px] overflow-hidden rounded-sm bg-[#E3D8D0] sm:h-[500px] lg:h-[570px]">
//               <img
//                 src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=85"
//                 alt="Industrial engineering and steel fabrication"
//                 loading="lazy"
//                 className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#171514]/60 via-transparent to-transparent" />

//               <div className="absolute bottom-6 left-6 border-l-2 border-[#B77882] pl-4 sm:bottom-8 sm:left-8">
//                 <p className="text-sm font-semibold text-white">
//                   Engineering & Construction
//                 </p>
//                 <p className="mt-1 text-xs text-white/80">
//                   Built around your requirements
//                 </p>
//               </div>

//               <span className="absolute right-5 top-5 border border-white/60 bg-white/15 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
//                 KES Group
//               </span>
//             </div>

//            <div className="relative -mt-5 ml-auto mr-4 max-w-[300px] border-l-4 border-[#873F4B] bg-[#EFE5DF] p-6 shadow-[0_15px_45px_rgba(41,37,36,0.08)] sm:-mt-16 sm:mr-0 sm:max-w-[340px] sm:p-8">
//               <p className="text-4xl font-semibold tracking-tight text-[#873F4B] sm:text-5xl">
//                 350+
//               </p>
//               <p className="mt-3 text-sm leading-6 text-[#57534E]">
//                 Projects delivered across industrial sectors
//               </p>
//             </div>
//           </div>

//           {/* Existing company information */}
//           <div className="lg:col-span-6 lg:pt-5">
//             <div className="space-y-5 text-[15px] leading-8 text-[#57534E] sm:text-base">
//               <p>
//                 KES Group provides engineering solutions for industrial buildings,
//                 steel structures, wastewater treatment systems, and EPC projects.
//                 With a focus on quality and practical execution, we work to turn
//                 project requirements into reliable industrial facilities.
//               </p>

//               <p>
//                 Our approach combines engineering, project coordination, and
//                 attention to detail at every stage of delivery.
//               </p>
//             </div>

//             {/* Refined highlights */}
//            <div className="mt-9 border-y border-[#D4C5BC]">
//               {highlights.map((item, index) => (
//                 <div
//                   key={item}
//                   className="flex items-start gap-4 border-b border-[#D4C5BC]/70 py-4 last:border-b-0"
//                 >
//                   <span className="pt-0.5 text-xs font-medium tabular-nums text-[#873F4B]">
//                     {String(index + 1).padStart(2, "0")}
//                   </span>
//                   <p className="flex-1 text-sm leading-6 text-[#44403C] sm:text-base">
//                     {item}
//                   </p>
//                   <CheckCircle2
//                     size={18}
//                     className="mt-1 shrink-0 text-[#873F4B]"
//                   />
//                 </div>
//               ))}
//             </div>

//             {/* Existing links preserved */}
//             <div className="mt-9 flex flex-wrap items-center gap-5">
//               <Link
//                 to="/about"
//                 className="group inline-flex items-center gap-3 bg-[#873F4B] px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-[#71323D]"
//               >
//                 Discover Our Story
//                 <ArrowRight
//                   size={18}
//                   className="transition-transform duration-300 group-hover:translate-x-1"
//                 />
//               </Link>

//               <Link
//                 to="/projects"
//                 className="group inline-flex items-center gap-2 text-sm font-semibold text-[#292524] transition-colors hover:text-[#873F4B]"
//               >
//                 Explore Projects
//                 <MoveUpRight
//                   size={17}
//                   className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
//                 />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




// // import { Link } from "react-router-dom";
// // import {
// //   ArrowRight,
// //   ArrowUpRight,
// //   CheckCircle2,
// //   MoveUpRight,
// // } from "lucide-react";

// // const highlights = [
// //   "Industrial engineering and construction solutions",
// //   "Pre-engineered buildings and steel structures",
// //   "Quality-focused project execution",
// //   "Solutions tailored to client requirements",
// // ];

// // export default function About() {
// //   return (
// //     <section className="overflow-hidden bg-[#F7F5F1] py-16 text-[#292524] sm:py-20 lg:py-28">
// //       <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">

// //         {/* Unique editorial header */}
// //         <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
// //           <div className="lg:col-span-8">
// //             <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#873F4B]">
// //               <span className="h-px w-8 bg-[#873F4B]" />
// //               KES Group / About Us
// //             </p>

// //             <h2 className="mt-6 max-w-5xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-7xl">
// //               Engineering ideas.
// //               <span className="block text-[#873F4B]">
// //                 Building possibilities.
// //               </span>
// //             </h2>
// //           </div>

// //           <div className="lg:col-span-4 lg:justify-self-end lg:pb-2">
// //             <p className="max-w-sm text-sm leading-7 text-[#78716C] sm:text-base">
// //               Industrial engineering and construction solutions shaped
// //               around quality, practical execution, and client requirements.
// //             </p>
// //           </div>
// //         </div>

// //         {/* Architectural composition */}
// //         <div className="mt-12 grid gap-8 border-t border-[#D8CEC7] pt-8 lg:mt-16 lg:grid-cols-12 lg:gap-10">

// //           {/* Image panel */}
// //           <div className="lg:col-span-7">
// //             <div className="relative min-h-[350px] overflow-hidden bg-[#EBD9DC] sm:min-h-[470px] lg:min-h-[570px]">
// //               <img
// //                 src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=85"
// //                 alt="Industrial steel fabrication and engineering"
// //                 loading="lazy"
// //                 className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
// //               />

// //               <div className="absolute inset-0 bg-gradient-to-t from-[#292524]/70 via-transparent to-[#292524]/10" />

// //               <div className="absolute left-5 top-5 border border-white/50 bg-[#292524]/20 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm sm:left-7 sm:top-7">
// //                 Industrial Engineering & Construction
// //               </div>

// //               <div className="absolute bottom-7 left-6 max-w-md border-l-2 border-[#C99AA2] pl-5 sm:bottom-10 sm:left-10">
// //                 <p className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
// //                   Designed with purpose.
// //                   <br />
// //                   Delivered with precision.
// //                 </p>
// //               </div>
// //             </div>

// //             {/* Statistics strip */}
// //             <div className="grid grid-cols-2 border-b border-[#D8CEC7] bg-[#F0E0E3]">
// //               <div className="border-r border-[#D6ADB5] p-5 sm:p-7">
// //                 <p className="text-3xl font-semibold tracking-tight text-[#873F4B] sm:text-4xl">
// //                   350+
// //                 </p>
// //                 <p className="mt-2 text-xs leading-5 text-[#6F5A5D] sm:text-sm">
// //                   Projects delivered
// //                 </p>
// //               </div>

// //               <div className="p-5 sm:p-7">
// //                 <p className="text-3xl font-semibold tracking-tight text-[#873F4B] sm:text-4xl">
// //                   15+
// //                 </p>
// //                 <p className="mt-2 text-xs leading-5 text-[#6F5A5D] sm:text-sm">
// //                   Years of experience
// //                 </p>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Information panel */}
// //           <div className="flex flex-col lg:col-span-5 lg:pl-3 lg:pt-2">
// //             <div className="flex items-center gap-3">
// //               <span className="h-2 w-2 bg-[#873F4B]" />
// //               <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#873F4B]">
// //                 Who We Are
// //               </p>
// //             </div>

// //             <h3 className="mt-5 text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
// //               Turning complex requirements into reliable industrial facilities.
// //             </h3>

// //             <div className="mt-5 space-y-4 text-sm leading-7 text-[#78716C] sm:text-base">
// //               <p>
// //                 KES Group provides engineering solutions for industrial
// //                 buildings, steel structures, wastewater treatment systems,
// //                 and EPC projects. With a focus on quality and practical
// //                 execution, we work to turn project requirements into
// //                 reliable industrial facilities.
// //               </p>

// //               <p>
// //                 Our approach combines engineering, project coordination,
// //                 and attention to detail at every stage of delivery.
// //               </p>
// //             </div>

// //             {/* Numbered capability list */}
// //             <div className="mt-8 border-t border-[#D8CEC7]">
// //               {highlights.map((item, index) => (
// //                 <div
// //                   key={item}
// //                   className="group flex items-start gap-4 border-b border-[#D8CEC7] py-4"
// //                 >
// //                   <span className="pt-0.5 font-mono text-xs text-[#A66B75]">
// //                     0{index + 1}
// //                   </span>

// //                   <p className="flex-1 text-sm font-medium leading-6 text-[#44403C] transition-colors group-hover:text-[#873F4B] sm:text-base">
// //                     {item}
// //                   </p>

// //                   <CheckCircle2
// //                     size={18}
// //                     className="mt-0.5 shrink-0 text-[#873F4B]"
// //                   />
// //                 </div>
// //               ))}
// //             </div>

// //             {/* Actions */}
// //             <div className="mt-8 flex flex-wrap items-center gap-5">
// //               <Link
// //                 to="/about"
// //                 className="group inline-flex items-center gap-3 bg-[#873F4B] px-5 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#71323D]"
// //               >
// //                 Discover Our Story
// //                 <ArrowRight
// //                   size={18}
// //                   className="transition-transform group-hover:translate-x-1"
// //                 />
// //               </Link>

// //               <Link
// //                 to="/projects"
// //                 className="group inline-flex items-center gap-2 text-sm font-semibold text-[#292524] transition-colors hover:text-[#873F4B]"
// //               >
// //                 Explore Projects
// //                 <MoveUpRight
// //                   size={17}
// //                   className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
// //                 />
// //               </Link>
// //             </div>

// //             <div className="mt-8 flex items-center gap-3 border-t border-[#D8CEC7] pt-5">
// //               <span className="h-px w-8 bg-[#873F4B]" />
// //               <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#78716C]">
// //                 Engineering Excellence
// //               </p>
// //               <ArrowUpRight size={15} className="text-[#873F4B]" />
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }




import { motion, useReducedMotion } from "motion/react";

import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, MoveUpRight } from "lucide-react";

const highlights = [
  "Industrial engineering and construction solutions",
  "Pre-engineered buildings and steel structures",
  "Quality-focused project execution",
  "Solutions tailored to client requirements",
];

export default function About() {
  
  return (
   <section className="relative overflow-hidden bg-[#F7F3EF] py-10 text-[#292524] sm:py-14 lg:py-16">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
        {/* Editorial section heading */}
        <div className="mb-12 flex flex-col justify-between gap-5 border-b border-[#D8CEC7]/70 pb-7 sm:mb-16 sm:flex-row sm:items-end">
          <div>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#873F4B]">
              <span className="h-px w-8 bg-[#873F4B]" />
              About KES Group
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              15 Years of
              <span className="block text-[#873F4B]">
                Engineering Excellence
              </span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-7 text-[#78716C]">
            Industrial engineering and construction solutions shaped around
            quality, practical execution, and client requirements.
          </p>
        </div>

        {/* Asymmetric content layout */}
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Large image and overlapping statistic */}
         
{/* Large image and animated overlapping statistic */}
<motion.div
  className="relative lg:col-span-6"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  variants={{
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.18 },
    },
  }}
>
  <motion.div
    className="relative h-[360px] overflow-hidden rounded-sm bg-[#E3D8D0] sm:h-[500px] lg:h-[570px]"
    variants={{
      hidden: {
        clipPath: "inset(0 0 100% 0)",
      },
      visible: {
        clipPath: "inset(0 0 0% 0)",
        transition: {
          duration: 1.2,
          ease: [0.76, 0, 0.24, 1],
        },
      },
    }}
  >
    <motion.img
      src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=85"
      alt="Industrial engineering and steel fabrication"
      loading="lazy"
      className="h-full w-full object-cover"
      variants={{
        hidden: { scale: 1.18 },
        visible: {
          scale: 1,
          transition: {
            duration: 1.9,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
    />

    <div className="absolute inset-0 bg-gradient-to-t from-[#171514]/60 via-transparent to-transparent" />

    {/* Bottom caption */}
    <motion.div
      className="absolute bottom-6 left-6 border-l-2 border-[#B77882] pl-4 sm:bottom-8 sm:left-8"
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.7,
            delay: 0.65,
          },
        },
      }}
    >
      <p className="text-sm font-semibold text-white">
        Engineering & Construction
      </p>
      <p className="mt-1 text-xs text-white/80">
        Built around your requirements
      </p>
    </motion.div>

    {/* KES Group badge */}
    <motion.span
      className="absolute right-5 top-5 border border-white/60 bg-white/15 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm"
      variants={{
        hidden: { opacity: 0, y: -12 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            delay: 0.45,
          },
        },
      }}
    >
      KES Group
    </motion.span>
  </motion.div>

  {/* Overlapping statistics card */}
  <motion.div
    className="relative -mt-5 ml-auto mr-4 max-w-[300px] border-l-4 border-[#873F4B] bg-[#EFE5DF] p-6 shadow-[0_15px_45px_rgba(41,37,36,0.08)] sm:-mt-16 sm:mr-0 sm:max-w-[340px] sm:p-8"
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{
      duration: 0.8,
      delay: 0.25,
      ease: [0.22, 1, 0.36, 1],
    }}
  >
    <p className="text-4xl font-semibold tracking-tight text-[#873F4B] sm:text-5xl">
      350+
    </p>
    <p className="mt-3 text-sm leading-6 text-[#57534E]">
      Projects delivered across industrial sectors
    </p>
  </motion.div>
</motion.div>


          {/* Existing company information */}
          <div className="lg:col-span-6 lg:pt-5">
            <div className="space-y-5 text-[15px] leading-8 text-[#57534E] sm:text-base">
              <p>
                KES Group provides engineering solutions for industrial buildings,
                steel structures, wastewater treatment systems, and EPC projects.
                With a focus on quality and practical execution, we work to turn
                project requirements into reliable industrial facilities.
              </p>

              <p>
                Our approach combines engineering, project coordination, and
                attention to detail at every stage of delivery.
              </p>
            </div>

            {/* Refined highlights */}
           <div className="mt-9 border-y border-[#D4C5BC]">
              {highlights.map((item, index) => (
                <div
                  key={item}
                  className="flex items-start gap-4 border-b border-[#D4C5BC]/70 py-4 last:border-b-0"
                >
                  <span className="pt-0.5 text-xs font-medium tabular-nums text-[#873F4B]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="flex-1 text-sm leading-6 text-[#44403C] sm:text-base">
                    {item}
                  </p>
                  <CheckCircle2
                    size={18}
                    className="mt-1 shrink-0 text-[#873F4B]"
                  />
                </div>
              ))}
            </div>

            {/* Existing links preserved */}
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Link
                to="/about"
                className="group inline-flex items-center gap-3 bg-[#873F4B] px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-[#71323D]"
              >
                Discover Our Story
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[#292524] transition-colors hover:text-[#873F4B]"
              >
                Explore Projects
                <MoveUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




