
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

// export default function HowWeWork() {
//   const [activeStep, setActiveStep] = useState(0);
//   const currentStep = steps[activeStep];
//   const ActiveIcon = currentStep.icon;

//   return (
//     <section className="overflow-hidden bg-[#151515] px-5 py-20 text-white sm:px-8 sm:py-24">
//       <div className="mx-auto max-w-7xl">
//         <div className="mx-auto max-w-3xl text-center">
//           <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-400">
//             How We Work
//           </p>

//           <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-red-600" />

//           <h2 className="mt-6 text-3xl font-black sm:text-4xl lg:text-5xl">
//             From Concept to Completion
//           </h2>

//           <p className="mt-5 text-base leading-8 text-gray-400 sm:text-lg">
//             Explore the key stages of an industrial project, from initial
//             consultation to final handover.
//           </p>
//         </div>

//         {/* Interactive timeline */}
//         <div className="relative mt-14">
//           <div className="absolute left-[8%] right-[8%] top-6 hidden h-px bg-white/20 lg:block" />

//           <div
//             className="absolute left-[8%] top-6 hidden h-px bg-red-500 transition-all duration-500 lg:block"
//             style={{
//               width: `${(activeStep / (steps.length - 1)) * 84}%`,
//             }}
//           />

//           <div className="grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-3 lg:grid-cols-6 lg:gap-3">
//             {steps.map((step, index) => {
//               const Icon = step.icon;
//               const isActive = activeStep === index;
//               const isComplete = activeStep > index;

//               return (
//                 <button
//                   key={step.title}
//                   type="button"
//                   onClick={() => setActiveStep(index)}
//                   aria-pressed={isActive}
//                   className="group relative flex flex-col items-center rounded-lg px-2 py-3 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
//                 >
//                   <span
//                     className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 ${
//                       isActive
//                         ? "scale-110 border-red-500 bg-red-600 text-white shadow-lg shadow-red-950/40"
//                         : isComplete
//                           ? "border-red-500 bg-red-500/15 text-red-400"
//                           : "border-white/20 bg-[#242424] text-gray-400 group-hover:border-red-400 group-hover:text-white"
//                     }`}
//                   >
//                     <Icon size={20} />
//                   </span>

//                   <span
//                     className={`mt-4 text-sm font-bold leading-5 transition-colors ${
//                       isActive ? "text-red-400" : "text-gray-200"
//                     }`}
//                   >
//                     {step.title}
//                   </span>

//                   <span className="mt-1 text-xs text-gray-500">
//                     Step {index + 1}
//                   </span>
//                 </button>
//               );
//             })}
//           </div>
//         </div>

//         {/* Active step detail card */}
//         <div
//           key={activeStep}
//           className="mx-auto mt-10 max-w-3xl animate-in rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/10 sm:mt-12 sm:p-9"
//         >
//           <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
//             <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-red-600 text-white">
//               <ActiveIcon size={27} />
//             </div>

//             <div className="flex-1">
//               <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-400">
//                 Step {activeStep + 1} of {steps.length}
//               </p>

//               <h3 className="mt-2 text-2xl font-bold sm:text-3xl">
//                 {currentStep.title}
//               </h3>

//               <p className="mt-3 text-sm leading-7 text-gray-300 sm:text-base">
//                 {currentStep.detail}
//               </p>

//               <p className="mt-3 text-sm leading-6 text-gray-500">
//                 {currentStep.description}
//               </p>

//               <div className="mt-6 flex flex-wrap gap-3">
//                 {activeStep > 0 && (
//                   <button
//                     type="button"
//                     onClick={() => setActiveStep((step) => step - 1)}
//                     className="rounded-md border border-white/20 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
//                   >
//                     Previous
//                   </button>
//                 )}

//                 {activeStep < steps.length - 1 ? (
//                   <button
//                     type="button"
//                     onClick={() => setActiveStep((step) => step + 1)}
//                     className="inline-flex items-center gap-2 rounded-md bg-red-700 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-red-600"
//                   >
//                     Next Step <ArrowRight size={16} />
//                   </button>
//                 ) : (
//                   <a
//                     href="/contact"
//                     className="inline-flex items-center gap-2 rounded-md bg-red-700 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-red-600"
//                   >
//                     Discuss Your Project <ArrowRight size={16} />
//                   </a>
//                 )}
//               </div>
//             </div>
//           </div>
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
    <g
      key={step.title}
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
    </g>
  );
})}

            </svg>

            <p className="mt-2 text-center text-xs text-[#78716C]">
              Select a numbered stage to view its details.
            </p>
          </div>

          {/* Active stage information */}
          <div
            key={activeStep}
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
          </div>
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
