
// import {
//   Zap,
//   Award,
//   TrendingDown,
//   ShieldCheck,
//   Globe,
//   Users,
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
//     <section className="bg-white px-5 py-20 sm:px-8 sm:py-24">
//       <div className="mx-auto max-w-7xl">
//         <div className="mx-auto max-w-3xl text-center">
//           <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-600">
//             Why Choose Us
//           </p>

//           <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-red-600" />

//           <h2 className="mt-6 text-3xl font-black tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
//             The KES Advantage
//           </h2>

//           <p className="mt-5 text-base leading-8 text-neutral-500 sm:text-lg">
//             Integrated engineering and industrial construction solutions
//             designed around your project requirements.
//           </p>
//         </div>

//         <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
//           {reasons.map((reason, index) => {
//             const Icon = reason.icon;

//             return (
//               <article
//                 key={reason.title}
//                 style={{ animationDelay: `${index * 100}ms` }}
//                 className="group rounded-xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl hover:shadow-neutral-200/60 sm:p-7"
//               >
//                 <div className="flex items-start gap-4">
//                   <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-red-700 text-white transition-colors duration-300 group-hover:bg-red-600">
//                     <Icon size={22} strokeWidth={1.8} />
//                   </div>

//                   <div className="min-w-0 flex-1">
//                     <h3 className="text-base font-bold text-neutral-900 sm:text-lg">
//                       {reason.title}
//                     </h3>

//                     <p className="mt-3 text-sm leading-6 text-neutral-500">
//                       {reason.description}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="mt-6 h-0.5 w-8 rounded-full bg-red-600 transition-all duration-300 group-hover:w-full" />
//               </article>
//             );
//           })}
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
//   ArrowUpRight,
} from "lucide-react";

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

export default function WhyChooseUs() {
  return (
    <section className="overflow-hidden bg-[#F7F5F1] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1440px]">

        {/* Section heading */}
        <div className="flex flex-col gap-6 border-b border-[#E5C9CE] pb-9 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#873F4B]">
              KES Group / Why Choose Us
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#292524] sm:text-5xl lg:text-6xl">
              The KES
              <span className="text-[#873F4B]"> advantage.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#78716C] sm:text-base">
            Integrated engineering and industrial construction
            solutions designed around your project requirements.
          </p>
        </div>

        {/* Advantage cards */}
        <div className="mt-10 grid gap-px overflow-hidden border border-[#E5C9CE] bg-[#E5C9CE] sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.title}
                style={{ animationDelay: `${index * 100}ms` }}
                className="group relative flex min-h-[290px] flex-col justify-between bg-[#F0E0E3] p-7 transition-colors duration-300 hover:bg-[#EBD3D8] sm:p-8 lg:min-h-[320px] lg:p-9"
              >
                {/* Top row */}
                <div className="flex items-start justify-between">
                  <span className="font-mono text-sm tracking-widest text-[#A66B75]">
                    0{index + 1}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center border border-[#D6ADB5] bg-[#F7F5F1] text-[#873F4B] transition-all duration-300 group-hover:border-[#873F4B] group-hover:bg-[#873F4B] group-hover:text-white">
                    <Icon size={22} strokeWidth={1.6} />
                  </div>
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

                  {/* <ArrowUpRight
                    size={19}
                    className="text-[#873F4B] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  /> */}
                </div>
              </article>
            );
          })}
        </div>

        {/* Closing statement */}
        <div className="mt-8 flex flex-col gap-3 border-l-2 border-[#873F4B] pl-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-6 text-[#78716C]">
            From engineering design to on-site execution,
            every detail matters.
          </p>

          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#873F4B]">
            Engineered for Performance
          </span>
        </div>

      </div>
    </section>
  );
}
