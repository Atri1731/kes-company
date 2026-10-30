



// import { useState } from "react";
// import {
//   MessageSquare,
//   DraftingCompass,
//   Factory,
//   Paintbrush,
//   HardHat,
//   CheckCircle2,
//   ArrowRight,
// } from "lucide-react";

// const steps = [
//   {
//     title: "Consultation",
//     icon: MessageSquare,
//     description:
//       "Initial site visit, requirement analysis, and feasibility discussions to understand your project goals.",
//     detail:
//       "We begin by understanding your requirements, site conditions, project objectives, and expected timelines.",
//   },
//   {
//     title: "Engineering Design",
//     icon: DraftingCompass,
//     description:
//       "Planning and engineering design tailored to your industrial project.",
//     detail:
//       "The project moves into engineering coordination, design development, and planning before production begins.",
//   },
//   {
//     title: "Manufacturing",
//     icon: Factory,
//     description:
//       "Manufacturing and fabrication of project components.",
//     detail:
//       "Components are prepared according to the project design and applicable manufacturing requirements.",
//   },
//   {
//     title: "Blasting & Painting",
//     icon: Paintbrush,
//     description:
//       "Surface preparation and finishing for fabricated steel components.",
//     detail:
//       "Specified surface preparation and coating processes are carried out according to project requirements.",
//   },
//   {
//     title: "Erection",
//     icon: HardHat,
//     description:
//       "On-site installation and assembly of project structures.",
//     detail:
//       "The planned components are installed on-site with coordination around project requirements and safety.",
//   },
//   {
//     title: "Project Handover",
//     icon: CheckCircle2,
//     description:
//       "Final checks and handover of the completed project.",
//     detail:
//       "The project moves through final inspections, completion checks, and handover documentation as applicable.",
//   },
// ];


// const positions = [
//   { x: 160, y: 32 },
//   { x: 274, y: 91 },
//   { x: 274, y: 209 },
//   { x: 160, y: 268 },
//   { x: 46, y: 209 },
//   { x: 46, y: 91 },
// ];

// export default function HowWeWork() {
//   const [activeStep, setActiveStep] = useState(0);
//   const currentStep = steps[activeStep];
//   const ActiveIcon = currentStep.icon;

//   return (
//     <section className="bg-[#292524] p-3 sm:p-5 lg:p-8">
//       <div className="mx-auto max-w-[1600px] bg-[#F7F5F1] px-5 py-12 sm:px-8 sm:py-16 lg:px-14 lg:py-20">
//         {/* Heading */}
//         <div className="mb-10 text-center sm:mb-14">
//           <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#873F4B]">
//             KES Group / Our Process
//           </p>

//           <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#292524] sm:text-4xl lg:text-5xl">
//             From concept to{" "}
//             <span className="text-[#873F4B]">completion.</span>
//           </h2>

//           <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#78716C] sm:text-base">
//             Six coordinated stages. One complete industrial solution.
//             Select any stage to explore our process.
//           </p>
//         </div>

//         {/* Circular process */}
//         <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
//           <div className="mx-auto w-full max-w-[460px]">
//             <svg
//               viewBox="0 0 320 300"
//               className="h-auto w-full overflow-visible"
//               role="img"
//               aria-label="Interactive six-stage circular project process"
//             >
//               <defs>
//                 <marker
//                   id="process-arrow"
//                   markerWidth="6"
//                   markerHeight="6"
//                   refX="4"
//                   refY="3"
//                   orient="auto"
//                 >
//                   <path d="M0,0 L6,3 L0,6 Z" fill="#C99AA2" />
//                 </marker>
//               </defs>

//               {/* Circular path */}
//               <circle
//                 cx="160"
//                 cy="150"
//                 r="103"
//                 fill="none"
//                 stroke="#D8CEC7"
//                 strokeWidth="2"
//                 strokeDasharray="4 6"
//               />

//               {/* Center */}
//               <circle
//                 cx="160"
//                 cy="150"
//                 r="53"
//                 fill="#292524"
//                 stroke="#873F4B"
//                 strokeWidth="3"
//               />

//               <text
//                 x="160"
//                 y="144"
//                 textAnchor="middle"
//                 fill="#F7F5F1"
//                 fontSize="12"
//                 fontWeight="600"
//                 letterSpacing="1"
//               >
//                 KES
//               </text>

//               <text
//                 x="160"
//                 y="162"
//                 textAnchor="middle"
//                 fill="#EBD9DC"
//                 fontSize="11"
//               >
//                 OUR PROCESS
//               </text>

             
// {steps.map((step, index) => {
//   const { x, y } = positions[index];
//   const isActive = activeStep === index;

//   const labels = [
//     ["01", "CONSULTATION"],
//     ["02", "ENGINEERING", "DESIGN"],
//     ["03", "MANUFACTURING"],
//     ["04", "BLASTING &", "PAINTING"],
//     ["05", "ERECTION"],
//     ["06", "PROJECT", "HANDOVER"],
//   ];

//   return (
//     <g
//       key={step.title}
//       onClick={() => setActiveStep(index)}
//       onKeyDown={(event) => {
//         if (event.key === "Enter" || event.key === " ") {
//           event.preventDefault();
//           setActiveStep(index);
//         }
//       }}
//       role="button"
//       tabIndex={0}
//       aria-label={step.title}
//       aria-pressed={isActive}
//       className="cursor-pointer"
//     >
//       <circle
//         cx={x}
//         cy={y}
//         r={isActive ? 39 : 36}
//         fill={isActive ? "#873F4B" : "#EBD9DC"}
//         stroke={isActive ? "#873F4B" : "#C99AA2"}
//         strokeWidth="2"
//         className="transition-all duration-300"
//       />

//       <text
//         x={x}
//         y={y - 12}
//         textAnchor="middle"
//         fill={isActive ? "#FFFFFF" : "#873F4B"}
//         fontSize="12"
//         fontWeight="700"
//       >
//         {labels[index][0]}
//       </text>

//       {labels[index].slice(1).map((label, lineIndex, lines) => (
//         <text
//           key={label}
//           x={x}
//           y={y + 5 + lineIndex * 10}
//           textAnchor="middle"
//           fill={isActive ? "#FFFFFF" : "#873F4B"}
//           fontSize="7.5"
//           fontWeight="600"
//         >
//           {label}
//         </text>
//       ))}
//     </g>
//   );
// })}

//             </svg>

//             <p className="mt-2 text-center text-xs text-[#78716C]">
//               Select a numbered stage to view its details.
//             </p>
//           </div>

//           {/* Active stage information */}
//           <div
//             key={activeStep}
//             className="border border-[#D8CEC7] bg-white p-6 sm:p-8 lg:p-10"
//           >
//             <div className="flex items-center justify-between">
//               <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#873F4B]">
//                 Project journey
//               </span>

//               <span className="font-mono text-xs text-[#A8A29E]">
//                 {String(activeStep + 1).padStart(2, "0")} / 06
//               </span>
//             </div>

//             <div className="mt-7 flex h-14 w-14 items-center justify-center bg-[#EBD9DC] text-[#873F4B]">
//               <ActiveIcon size={27} strokeWidth={1.6} />
//             </div>

//             <h3 className="mt-6 text-2xl font-semibold tracking-tight text-[#292524] sm:text-3xl">
//               {currentStep.title}
//             </h3>

//             <div className="mt-4 h-[2px] w-12 bg-[#873F4B]" />

//             <p className="mt-5 text-sm leading-7 text-[#57534E] sm:text-base">
//               {currentStep.detail}
//             </p>

//             <p className="mt-3 text-sm leading-6 text-[#78716C]">
//               {currentStep.description}
//             </p>

//             <div className="mt-8 flex flex-wrap gap-3">
//               {activeStep > 0 && (
//                 <button
//                   type="button"
//                   onClick={() => setActiveStep((step) => step - 1)}
//                   className="border border-[#D8CEC7] px-4 py-2.5 text-sm font-semibold text-[#292524] transition hover:border-[#873F4B]"
//                 >
//                   Previous
//                 </button>
//               )}

//               {activeStep < steps.length - 1 ? (
//                 <button
//                   type="button"
//                   onClick={() => setActiveStep((step) => step + 1)}
//                   className="inline-flex items-center gap-2 bg-[#873F4B] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#71323D]"
//                 >
//                   Next Stage <ArrowRight size={16} />
//                 </button>
//               ) : (
//                 <a
//                   href="/contact"
//                   className="inline-flex items-center gap-2 bg-[#873F4B] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#71323D]"
//                 >
//                   Discuss Your Project <ArrowRight size={16} />
//                 </a>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="mt-10 flex flex-col gap-2 border-t border-[#D8CEC7] pt-5 sm:mt-14 sm:flex-row sm:items-center sm:justify-between">
//           <p className="text-xs leading-6 text-[#78716C]">
//             From planning and fabrication to on-site completion.
//           </p>

//           <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#873F4B]">
//             Plan / Build / Deliver
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }







import { useState } from "react";
import {
  MessageSquare,
  DraftingCompass,
  Factory,
  Paintbrush,
  HardHat,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const steps = [
  {
    title: "Consultation",
    icon: MessageSquare,
    description:
      "Initial site visit, requirement analysis, and feasibility discussions to understand your project goals.",
    detail:
      "We begin by understanding your requirements, site conditions, project objectives, and expected timelines.",
  },
  {
    title: "Engineering Design",
    icon: DraftingCompass,
    description:
      "Planning and engineering design tailored to your industrial project.",
    detail:
      "The project moves into engineering coordination, design development, and planning before production begins.",
  },
  {
    title: "Manufacturing",
    icon: Factory,
    description:
      "Manufacturing and fabrication of project components.",
    detail:
      "Components are prepared according to the project design and applicable manufacturing requirements.",
  },
  {
    title: "Blasting & Painting",
    icon: Paintbrush,
    description:
      "Surface preparation and finishing for fabricated steel components.",
    detail:
      "Specified surface preparation and coating processes are carried out according to project requirements.",
  },
  {
    title: "Erection",
    icon: HardHat,
    description:
      "On-site installation and assembly of project structures.",
    detail:
      "The planned components are installed on-site with coordination around project requirements and safety.",
  },
  {
    title: "Project Handover",
    icon: CheckCircle2,
    description:
      "Final checks and handover of the completed project.",
    detail:
      "The project moves through final inspections, completion checks, and handover documentation as applicable.",
  },
];


const positions = [
  { x: 160, y: 32 },
  { x: 274, y: 91 },
  { x: 274, y: 209 },
  { x: 160, y: 268 },
  { x: 46, y: 209 },
  { x: 46, y: 91 },
];

export default function HowWeWork() {
  const [activeStep, setActiveStep] = useState(0);
    const reduceMotion = useReducedMotion();
  const currentStep = steps[activeStep];
  const ActiveIcon = currentStep.icon;

  return (
    <section className="bg-[#292524] p-3 sm:p-5 lg:p-8">
      <div className="mx-auto max-w-[1600px] bg-[#F7F5F1] px-5 py-12 sm:px-8 sm:py-16 lg:px-14 lg:py-20">
        {/* Heading */}
        <div className="mb-10 text-center sm:mb-14">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#873F4B]">
            KES Group / Our Process
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#292524] sm:text-4xl lg:text-5xl">
            From concept to{" "}
            <span className="text-[#873F4B]">completion.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#78716C] sm:text-base">
            Six coordinated stages. One complete industrial solution.
            Select any stage to explore our process.
          </p>
        </div>

        {/* Circular process */}
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div className="mx-auto w-full max-w-[460px]">
            <svg
              viewBox="0 0 320 300"
              className="h-auto w-full overflow-visible"
              role="img"
              aria-label="Interactive six-stage circular project process"
            >
              <defs>
                <marker
                  id="process-arrow"
                  markerWidth="6"
                  markerHeight="6"
                  refX="4"
                  refY="3"
                  orient="auto"
                >
                  <path d="M0,0 L6,3 L0,6 Z" fill="#C99AA2" />
                </marker>
              </defs>

              {/* Circular path */}
              <circle
                cx="160"
                cy="150"
                r="103"
                fill="none"
                stroke="#D8CEC7"
                strokeWidth="2"
                strokeDasharray="4 6"
              />

              {/* Center */}
              <circle
                cx="160"
                cy="150"
                r="53"
                fill="#292524"
                stroke="#873F4B"
                strokeWidth="3"
              />

              <text
                x="160"
                y="144"
                textAnchor="middle"
                fill="#F7F5F1"
                fontSize="12"
                fontWeight="600"
                letterSpacing="1"
              >
                KES
              </text>

              <text
                x="160"
                y="162"
                textAnchor="middle"
                fill="#EBD9DC"
                fontSize="11"
              >
                OUR PROCESS
              </text>

             
{steps.map((step, index) => {
  const { x, y } = positions[index];
  const isActive = activeStep === index;

  const labels = [
    ["01", "CONSULTATION"],
    ["02", "ENGINEERING", "DESIGN"],
    ["03", "MANUFACTURING"],
    ["04", "BLASTING &", "PAINTING"],
    ["05", "ERECTION"],
    ["06", "PROJECT", "HANDOVER"],
  ];

return (
  <motion.g
    key={step.title}
    initial={
      reduceMotion
        ? false
        : { opacity: 0, scale: 0.75 }
    }
    whileInView={{
      opacity: 1,
      scale: 1,
    }}
    viewport={{
      once: true,
      amount: 0.2,
    }}
  transition={{
  duration: 0.1,
  delay: index * 0.5,
  ease: [0.22, 1, 0.36, 1],
}}
    style={{
      transformBox: "view-box",
      transformOrigin: `${x}px ${y}px`,
    }}
    onClick={() => setActiveStep(index)}
    onKeyDown={(event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        setActiveStep(index);
      }
    }}
    role="button"
    tabIndex={0}
    aria-label={step.title}
    aria-pressed={isActive}
    className="cursor-pointer"
  >
      <circle
        cx={x}
        cy={y}
        r={isActive ? 39 : 36}
        fill={isActive ? "#873F4B" : "#EBD9DC"}
        stroke={isActive ? "#873F4B" : "#C99AA2"}
        strokeWidth="2"
        className="transition-all duration-300"
      />

      <text
        x={x}
        y={y - 12}
        textAnchor="middle"
        fill={isActive ? "#FFFFFF" : "#873F4B"}
        fontSize="12"
        fontWeight="700"
      >
        {labels[index][0]}
      </text>

      {labels[index].slice(1).map((label, lineIndex, lines) => (
        <text
          key={label}
          x={x}
          y={y + 5 + lineIndex * 10}
          textAnchor="middle"
          fill={isActive ? "#FFFFFF" : "#873F4B"}
          fontSize="7.5"
          fontWeight="600"
        >
          {label}
        </text>
      ))}
    </motion.g>
  );
})}

            </svg>

            <p className="mt-2 text-center text-xs text-[#78716C]">
              Select a numbered stage to view its details.
            </p>
          </div>

          {/* Active stage information */}
        <motion.div
  key={activeStep}
  initial={
    reduceMotion
      ? false
      : { opacity: 0, y: 18 }
  }
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 1,
    ease: "easeOut",
  }}
  className="border border-[#D8CEC7] bg-white p-6 sm:p-8 lg:p-10"
>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#873F4B]">
                Project journey
              </span>

              <span className="font-mono text-xs text-[#A8A29E]">
                {String(activeStep + 1).padStart(2, "0")} / 06
              </span>
            </div>

            <div className="mt-7 flex h-14 w-14 items-center justify-center bg-[#EBD9DC] text-[#873F4B]">
              <ActiveIcon size={27} strokeWidth={1.6} />
            </div>

            <h3 className="mt-6 text-2xl font-semibold tracking-tight text-[#292524] sm:text-3xl">
              {currentStep.title}
            </h3>

            <div className="mt-4 h-[2px] w-12 bg-[#873F4B]" />

            <p className="mt-5 text-sm leading-7 text-[#57534E] sm:text-base">
              {currentStep.detail}
            </p>

            <p className="mt-3 text-sm leading-6 text-[#78716C]">
              {currentStep.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {activeStep > 0 && (
                <button
                  type="button"
                  onClick={() => setActiveStep((step) => step - 1)}
                  className="border border-[#D8CEC7] px-4 py-2.5 text-sm font-semibold text-[#292524] transition hover:border-[#873F4B]"
                >
                  Previous
                </button>
              )}

              {activeStep < steps.length - 1 ? (
                <button
                  type="button"
                  onClick={() => setActiveStep((step) => step + 1)}
                  className="inline-flex items-center gap-2 bg-[#873F4B] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#71323D]"
                >
                  Next Stage <ArrowRight size={16} />
                </button>
              ) : (
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#873F4B] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#71323D]"
                >
                  Discuss Your Project <ArrowRight size={16} />
                </a>
              )}
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-10 flex flex-col gap-2 border-t border-[#D8CEC7] pt-5 sm:mt-14 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-6 text-[#78716C]">
            From planning and fabrication to on-site completion.
          </p>

          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#873F4B]">
            Plan / Build / Deliver
          </p>
        </div>
      </div>
    </section>
  );
}
