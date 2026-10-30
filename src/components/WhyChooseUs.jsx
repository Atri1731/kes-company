
// import {
//   Zap,
//   Award,
//   TrendingDown,
//   ShieldCheck,
//   Globe,
//   Users,
// //   ArrowUpRight,
// } from "lucide-react";

// const reasons = [
//   {
//     title: "Faster Delivery",
//     description:
//       "An integrated factory-fabricated approach designed to streamline construction and support project schedules.",
//     icon: Zap,
//   },
//   {
//     title: "Engineering Excellence",
//     description:
//       "Engineering, design, production, and quality coordination for precision-focused industrial projects.",
//     icon: Award,
//   },
//   {
//     title: "Cost Effective Solutions",
//     description:
//       "Thoughtful material planning and efficient fabrication processes tailored to project requirements.",
//     icon: TrendingDown,
//   },
//   {
//     title: "Certified Manufacturing",
//     description:
//       "Quality-focused manufacturing processes and documented quality checks throughout production.",
//     icon: ShieldCheck,
//   },
//   {
//     title: "Nationwide Execution",
//     description:
//       "Industrial project capabilities with regional coverage tailored to each project's requirements.",
//     icon: Globe,
//   },
//   {
//     title: "Dedicated Project Management",
//     description:
//       "Coordinated project activities, progress communication, and execution planning from start to handover.",
//     icon: Users,
//   },
// ];

// export default function WhyChooseUs() {
//   return (
//     <section className="overflow-hidden bg-[#F7F5F1] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
//       <div className="mx-auto max-w-[1440px]">

//         {/* Section heading */}
//         <div className="flex flex-col gap-6 border-b border-[#E5C9CE] pb-9 lg:flex-row lg:items-end lg:justify-between">
//           <div className="max-w-2xl">
//             <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#873F4B]">
//               KES Group / Why Choose Us
//             </p>

//             <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#292524] sm:text-5xl lg:text-6xl">
//               The KES
//               <span className="text-[#873F4B]"> advantage.</span>
//             </h2>
//           </div>

//           <p className="max-w-md text-sm leading-7 text-[#78716C] sm:text-base">
//             Integrated engineering and industrial construction
//             solutions designed around your project requirements.
//           </p>
//         </div>

//         {/* Advantage cards */}
//         <div className="mt-10 grid gap-px overflow-hidden border border-[#E5C9CE] bg-[#E5C9CE] sm:grid-cols-2 lg:grid-cols-3">
//           {reasons.map((reason, index) => {
//             const Icon = reason.icon;

//             return (
//               <article
//                 key={reason.title}
//                 style={{ animationDelay: `${index * 100}ms` }}
//                 className="group relative flex min-h-[290px] flex-col justify-between bg-[#F0E0E3] p-7 transition-colors duration-300 hover:bg-[#EBD3D8] sm:p-8 lg:min-h-[320px] lg:p-9"
//               >
//                 {/* Top row */}
//                 <div className="flex items-start justify-between">
//                   <span className="font-mono text-sm tracking-widest text-[#A66B75]">
//                     0{index + 1}
//                   </span>

//                   <div className="flex h-12 w-12 items-center justify-center border border-[#D6ADB5] bg-[#F7F5F1] text-[#873F4B] transition-all duration-300 group-hover:border-[#873F4B] group-hover:bg-[#873F4B] group-hover:text-white">
//                     <Icon size={22} strokeWidth={1.6} />
//                   </div>
//                 </div>

//                 {/* Card content */}
//                 <div className="mt-12">
//                   <h3 className="max-w-sm text-xl font-semibold leading-snug tracking-tight text-[#292524] sm:text-2xl">
//                     {reason.title}
//                   </h3>

//                   <p className="mt-4 max-w-sm text-sm leading-7 text-[#6F5A5D]">
//                     {reason.description}
//                   </p>
//                 </div>

//                 {/* Bottom detail */}
//                 <div className="mt-7 flex items-center justify-between border-t border-[#D6ADB5] pt-4">
//                   <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#873F4B]">
//                     KES Advantage
//                   </span>

//                   {/* <ArrowUpRight
//                     size={19}
//                     className="text-[#873F4B] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
//                   /> */}
//                 </div>
//               </article>
//             );
//           })}
//         </div>

//         {/* Closing statement */}
//         <div className="mt-8 flex flex-col gap-3 border-l-2 border-[#873F4B] pl-5 sm:flex-row sm:items-center sm:justify-between">
//           <p className="text-sm leading-6 text-[#78716C]">
//             From engineering design to on-site execution,
//             every detail matters.
//           </p>

//           <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#873F4B]">
//             Engineered for Performance
//           </span>
//         </div>

//       </div>
//     </section>
//   );
// }






import {
  Zap,
  Award,
  TrendingDown,
  ShieldCheck,
  Globe,
  Users,
} from "lucide-react";

import {
  motion,
  useReducedMotion,
} from "motion/react";

const reasons = [
  {
    title: "Faster Delivery",
    description:
      "An integrated factory-fabricated approach designed to streamline construction and support project schedules.",
    icon: Zap,
  },
  {
    title: "Engineering Excellence",
    description:
      "Engineering, design, production, and quality coordination for precision-focused industrial projects.",
    icon: Award,
  },
  {
    title: "Cost Effective Solutions",
    description:
      "Thoughtful material planning and efficient fabrication processes tailored to project requirements.",
    icon: TrendingDown,
  },
  {
    title: "Certified Manufacturing",
    description:
      "Quality-focused manufacturing processes and documented quality checks throughout production.",
    icon: ShieldCheck,
  },
  {
    title: "Nationwide Execution",
    description:
      "Industrial project capabilities with regional coverage tailored to each project's requirements.",
    icon: Globe,
  },
  {
    title: "Dedicated Project Management",
    description:
      "Coordinated project activities, progress communication, and execution planning from start to handover.",
    icon: Users,
  },
];

const ease = [0.22, 1, 0.36, 1];

export default function WhyChooseUs() {
  const reduceMotion = useReducedMotion();

  const headingVariants = {
    hidden: { opacity: 0, y: 45 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.8,
        ease,
      },
    },
  };

  const cardVariants = {
    hidden: (index) => ({
      opacity: 0,
      y: reduceMotion ? 0 : 55,
      x: reduceMotion ? 0 : index % 2 === 0 ? -15 : 15,
      scale: reduceMotion ? 1 : 0.96,
    }),
    visible: (index) => ({
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: reduceMotion ? 0 : 0.75,
        delay: reduceMotion ? 0 : index * 0.12,
        ease,
      },
    }),
  };

  return (
    <section className="overflow-hidden bg-[#F7F5F1] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1440px]">

        {/* Section heading */}
        <motion.div
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: reduceMotion ? 0 : 0.15,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col gap-6 border-b border-[#E5C9CE] pb-9 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-2xl">
            <motion.p
              variants={headingVariants}
              className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#873F4B]"
            >
              KES Group / Why Choose Us
            </motion.p>

            <motion.h2
              variants={headingVariants}
              className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#292524] sm:text-5xl lg:text-6xl"
            >
              The KES
              <span className="text-[#873F4B]"> advantage.</span>
            </motion.h2>
          </div>

          <motion.p
            variants={headingVariants}
            className="max-w-md text-sm leading-7 text-[#78716C] sm:text-base"
          >
            Integrated engineering and industrial construction
            solutions designed around your project requirements.
          </motion.p>
        </motion.div>

        {/* Advantage cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-10 grid gap-px overflow-hidden border border-[#E5C9CE] bg-[#E5C9CE] sm:grid-cols-2 lg:grid-cols-3"
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.article
                key={reason.title}
                custom={index}
                variants={cardVariants}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -7,
                        transition: { duration: 0.3, ease },
                      }
                }
                className="group relative flex min-h-[290px] flex-col justify-between bg-[#F0E0E3] p-7 transition-colors duration-300 hover:bg-[#EBD3D8] sm:p-8 lg:min-h-[320px] lg:p-9"
              >
                {/* Top row */}
                <div className="flex items-start justify-between">
                  <span className="font-mono text-sm tracking-widest text-[#A66B75]">
                    0{index + 1}
                  </span>

                  <motion.div
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            rotate: 12,
                            scale: 1.12,
                          }
                    }
                    transition={{ duration: 0.35, ease }}
                    className="flex h-12 w-12 items-center justify-center border border-[#D6ADB5] bg-[#F7F5F1] text-[#873F4B] transition-colors duration-300 group-hover:border-[#873F4B] group-hover:bg-[#873F4B] group-hover:text-white"
                  >
                    <Icon size={22} strokeWidth={1.6} />
                  </motion.div>
                </div>

                {/* Card content */}
                <div className="mt-12">
                  <h3 className="max-w-sm text-xl font-semibold leading-snug tracking-tight text-[#292524] sm:text-2xl">
                    {reason.title}
                  </h3>

                  <p className="mt-4 max-w-sm text-sm leading-7 text-[#6F5A5D]">
                    {reason.description}
                  </p>
                </div>

                {/* Bottom detail */}
                <div className="mt-7 flex items-center justify-between border-t border-[#D6ADB5] pt-4">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#873F4B]">
                    KES Advantage
                  </span>

                  <motion.span
                    animate={
                      reduceMotion
                        ? undefined
                        : { x: [0, 4, 0] }
                    }
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="text-lg text-[#873F4B]"
                  >
                    →
                  </motion.span>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Closing statement */}
        <motion.div
          initial={{
            opacity: 0,
            x: reduceMotion ? 0 : -35,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: reduceMotion ? 0 : 0.8,
            delay: reduceMotion ? 0 : 0.2,
            ease,
          }}
          className="mt-8 flex flex-col gap-3 border-l-2 border-[#873F4B] pl-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-sm leading-6 text-[#78716C]">
            From engineering design to on-site execution,
            every detail matters.
          </p>

          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#873F4B]">
            Engineered for Performance
          </span>
        </motion.div>

      </div>
    </section>
  );
}

