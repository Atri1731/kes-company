

// import { useState } from "react";
// import {
//   MessageSquare,
//   DraftingCompass,
//   Factory,
//   Paintbrush,
//   HardHat,
//   CheckCircle2,
//   ArrowRight,
//   ArrowLeft,
// } from "lucide-react";
// import { motion, useReducedMotion } from "motion/react";

// const steps = [
//   {
//     number: "01",
//     title: "Consultation",
//     icon: MessageSquare,
//     description:
//       "Initial site visit, requirement analysis, and feasibility discussions to understand your project goals.",
//     detail:
//       "We begin by understanding your requirements, site conditions, project objectives, and expected timelines.",
//   },
//   {
//     number: "02",
//     title: "Engineering Design",
//     icon: DraftingCompass,
//     description:
//       "Planning and engineering design tailored to your industrial project.",
//     detail:
//       "The project moves into engineering coordination, design development, and planning before production begins.",
//   },
//   {
//     number: "03",
//     title: "Manufacturing",
//     icon: Factory,
//     description: "Manufacturing and fabrication of project components.",
//     detail:
//       "Components are prepared according to the project design and applicable manufacturing requirements.",
//   },
//   {
//     number: "04",
//     title: "Blasting & Painting",
//     icon: Paintbrush,
//     description:
//       "Surface preparation and finishing for fabricated steel components.",
//     detail:
//       "Specified surface preparation and coating processes are carried out according to project requirements.",
//   },
//   {
//     number: "05",
//     title: "Erection",
//     icon: HardHat,
//     description:
//       "On-site installation and assembly of project structures.",
//     detail:
//       "The planned components are installed on-site with coordination around project requirements and safety.",
//   },
//   {
//     number: "06",
//     title: "Project Handover",
//     icon: CheckCircle2,
//     description:
//       "Final checks and handover of the completed project.",
//     detail:
//       "The project moves through final inspections, completion checks, and handover documentation as applicable.",
//   },
// ];

// const ease = [0.22, 1, 0.36, 1];

// function ProcessStep({ step, active, onClick }) {
//   return (
//     <button
//       type="button"
//       onClick={onClick}
//       aria-pressed={active}
//       aria-label={`Show ${step.title} details`}
//       className="process-step-button relative z-10 flex w-[144px] shrink-0 flex-col items-center text-center bg-transparent shadow-none outline-none focus-visible:rounded-full focus-visible:ring-2 focus-visible:ring-[#873F4B] sm:w-[158px]"
//     >
//       <motion.span
//         animate={{
//           scale: active ? 1 : 0.96,
//           backgroundColor: active ? "#873F4B" : "#F0E0E3",
//           borderColor: active ? "#873F4B" : "#C9959E",
//           color: active ? "#FFFFFF" : "#873F4B",
//         }}
        
//   whileHover={{
//     scale: active ? 1.04 : 1.02,
//     // boxShadow: "0 10px 25px rgba(10, 63, 75, 0.18)",
//   }}

//         transition={{ duration: 0.25, ease }}
//         className="flex h-[136px] w-[136px] flex-col items-center justify-center rounded-full border-[3px] px-3 shadow-sm sm:h-[150px] sm:w-[150px]"
//       >
//         <span className="font-mono text-[22px] font-bold leading-none sm:text-2xl">
//           {step.number}
//         </span>

//         <span className="mt-3 max-w-[112px] text-[11px] font-bold uppercase leading-[1.35] sm:max-w-[124px] sm:text-xs">
//           {step.title}
//         </span>
//       </motion.span>

//       <span
//         className={`mt-3 text-[9px] font-bold uppercase tracking-[0.18em] ${
//           active ? "text-[#873F4B]" : "text-[#A8A29E]"
//         }`}
//       >
//         {active ? "Selected stage" : "Select stage"}
//       </span>
//     </button>
//   );
// }
// function AnimatedButtonText({ children, animate }) {
//   return (
//     <span className={`kes-button-text ${animate ? "is-waving" : ""}`}>
//       {[...children].map((letter, index) => (
//         <span
//           key={index}
//           style={{ "--i": index }}
//         >
//           {letter === " " ? "\u00A0" : letter}
//         </span>
//       ))}
//     </span>
//   );
// }

// function StageDetails({ activeStep, onPrevious, onNext }) {
//   const reduceMotion = useReducedMotion();
//   const step = steps[activeStep];
//   const Icon = step.icon;
//   const [waveAction, setWaveAction] = useState("");

// const handlePrevious = () => {
//   if (activeStep === 0 || waveAction) return;

//   setWaveAction("previous");
//   setTimeout(() => {
//     onPrevious();
//   }, 450);
// };

// const handleNext = () => {
//   if (activeStep === steps.length - 1 || waveAction) return;

//   setWaveAction("next");
//   setTimeout(() => {
//     onNext();
//   }, 450);
// };

//   return (
//     <motion.div
//       key={activeStep}
//       initial={reduceMotion ? false : { opacity: 0, y: 15 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: reduceMotion ? 0 : 0.4, ease }}
//       className="grid min-w-0 grid-cols-1 gap-5 rounded-2xl border border-[#DED6D0] bg-white p-5 sm:gap-7 sm:p-7 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-center lg:p-8"
//       aria-live="polite"
//     >
//       <div className="flex items-center gap-4 lg:block">
//         <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#F1E5E6] text-[#873F4B] sm:h-16 sm:w-16">
//           <Icon size={27} strokeWidth={1.5} />
//         </div>

//         <div className="lg:mt-4">
//           <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#873F4B]">
//             Project journey
//           </p>
//           <p className="mt-1 font-mono text-xs text-[#A8A29E]">
//             {step.number} / 06
//           </p>
//         </div>
//       </div>

//       <div className="min-w-0">
//         <h3 className="break-words text-xl font-semibold tracking-tight text-[#292524] sm:text-2xl lg:text-3xl">
//           {step.title}
//         </h3>

//         <div className="mt-3 h-[2px] w-12 rounded-full bg-[#873F4B]" />

//         <p className="mt-4 text-sm leading-7 text-[#57534E] sm:text-base">
//           {step.detail}
//         </p>

//         <p className="mt-2 text-sm leading-6 text-[#78716C]">
//           {step.description}
//         </p>
//       </div>

//       <div className="flex flex-wrap items-center gap-2 lg:justify-end">
// <button
//   type="button"
//  onClick={handlePrevious}
//   disabled={activeStep === 0}
//   className="kes-button group inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#DED6D0] px-5 py-2.5 text-sm font-semibold text-[#57534E] hover:border-[#873F4B] hover:bg-[#873F4B] hover:text-white disabled:cursor-not-allowed disabled:opacity-35"
// >
//   <ArrowLeft
//     size={15}
//     className="transition-transform duration-300 group-hover:-translate-x-1"
//   />
//   {/* <span className="kes-button-text">Previous</span> */}
//  <AnimatedButtonText
//   animate={waveAction === "previous"}
// >
//   Previous
// </AnimatedButtonText>
// </button>

//         {activeStep < steps.length - 1 ? (
// <button
//   type="button"
//  onClick={handleNext}
//   className="kes-button group inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#873F4B] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#71323D] hover:shadow-[0_8px_22px_rgba(135,63,75,0.2)]"
// >
//   {/* <span className="kes-button-text">Next Stage</span> */}
//  <AnimatedButtonText
//   animate={waveAction === "next"}
// >
//   Next Stage
// </AnimatedButtonText>
//   <ArrowRight
//     size={15}
//     className="transition-transform duration-300 group-hover:translate-x-1"
//   />
// </button>
//         ) : (
//           <a
//   href="/contact"
//   className="kes-button group inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#873F4B] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#71323D] hover:shadow-[0_8px_22px_rgba(135,63,75,0.2)]"
// >
//   <span className="kes-button-text">Discuss Your Project</span>
//   <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
// </a>
//         )}
//       </div>
//     </motion.div>
//   );
// }

// export default function HowWeWork() {
//   const [activeStep, setActiveStep] = useState(0);

//   const goPrevious = () =>
//     setActiveStep((current) => Math.max(0, current - 1));

//   const goNext = () =>
//     setActiveStep((current) =>
//       Math.min(steps.length - 1, current + 1)
//     );

//   return (
//     <section className="w-full min-w-0 overflow-hidden bg-[#292524] p-2 sm:p-4 lg:p-6 xl:p-7">
//       <div className="mx-auto w-full max-w-[1600px] overflow-hidden bg-[#F7F5F1] px-4 py-10 sm:px-7 sm:py-14 md:px-9 lg:px-12 lg:py-16 xl:px-14 xl:py-20">

//         {/* Heading */}
//         <div className="mx-auto mb-9 max-w-3xl text-center sm:mb-12 lg:mb-14">
//           <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#873F4B] sm:text-xs sm:tracking-[0.22em]">
//             KES Group / Our Process
//           </p>

//           <h2 className="mt-3 text-[clamp(1.8rem,5vw,3.4rem)] font-semibold leading-tight tracking-[-0.045em] text-[#292524]">
//             From concept to{" "}
//             <span className="text-[#873F4B]">completion.</span>
//           </h2>

//           <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#78716C] sm:mt-4 sm:text-base sm:leading-7">
//             Six coordinated stages. One complete industrial solution.
//             Select any stage to explore our process.
//           </p>
//         </div>

//         {/* Horizontal circular process */}
//         <div className="relative mb-8 overflow-x-auto overflow-y-hidden pb-3">
//           <div className="relative flex min-w-[970px] items-start justify-between gap-3 px-2 pt-1 sm:min-w-[1060px]">

//             {/* Dashed connecting line */}
//             <div
//               aria-hidden="true"
//               className="absolute left-[8%] right-[8%] top-[69px] border-t-[3px] border-dashed border-[#D8CEC7] sm:top-[76px]"
//             />

//             {steps.map((step, index) => (
//               <ProcessStep
//                 key={step.number}
//                 step={step}
//                 active={activeStep === index}
//                 onClick={() => setActiveStep(index)}
//               />
//             ))}
//           </div>
//         </div>

//         <p className="-mt-5 mb-7 text-center text-[10px] text-[#A8A29E] sm:hidden">
//           Swipe horizontally to view all six stages
//         </p>

//         {/* Selected stage details */}
//         <StageDetails
//           activeStep={activeStep}
//           onPrevious={goPrevious}
//           onNext={goNext}
//         />

//         {/* Bottom note */}
//         <div className="mt-8 flex min-w-0 flex-col gap-2 border-t border-[#D8CEC7] pt-5 sm:mt-10 sm:flex-row sm:items-center sm:justify-between">
//           <p className="text-xs leading-6 text-[#78716C]">
//             From planning and fabrication to on-site completion.
//           </p>

//           <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#873F4B]">
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
  ArrowLeft,
} from "lucide-react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "motion/react";

const steps = [
  {
    number: "01",
    title: "Consultation",
    icon: MessageSquare,
    description:
      "Initial site visit, requirement analysis, and feasibility discussions to understand your project goals.",
    detail:
      "We begin by understanding your requirements, site conditions, project objectives, and expected timelines.",
  },
  {
    number: "02",
    title: "Engineering Design",
    icon: DraftingCompass,
    description:
      "Planning and engineering design tailored to your industrial project.",
    detail:
      "The project moves into engineering coordination, design development, and planning before production begins.",
  },
  {
    number: "03",
    title: "Manufacturing",
    icon: Factory,
    description: "Manufacturing and fabrication of project components.",
    detail:
      "Components are prepared according to the project design and applicable manufacturing requirements.",
  },
  {
    number: "04",
    title: "Blasting & Painting",
    icon: Paintbrush,
    description:
      "Surface preparation and finishing for fabricated steel components.",
    detail:
      "Specified surface preparation and coating processes are carried out according to project requirements.",
  },
  {
    number: "05",
    title: "Erection",
    icon: HardHat,
    description:
      "On-site installation and assembly of project structures.",
    detail:
      "The planned components are installed on-site with coordination around project requirements and safety.",
  },
  {
    number: "06",
    title: "Project Handover",
    icon: CheckCircle2,
    description:
      "Final checks and handover of the completed project.",
    detail:
      "The project moves through final inspections, completion checks, and handover documentation as applicable.",
  },
];

const ease = [0.22, 1, 0.36, 1];

function ProcessStep({
  step,
  active,
  completed,
  index,
  onClick,
  reduceMotion,
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      aria-label={`Show ${step.title} details`}
      initial={
        reduceMotion
          ? false
          : { opacity: 0, y: 35, scale: 0.82, rotate: -5 }
      }
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        rotate: 0,
      }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: reduceMotion ? 0 : 0.65,
        delay: reduceMotion ? 0 : index * 0.12,
        ease,
      }}
      className="process-step-button relative z-10 flex w-[144px] shrink-0 flex-col items-center bg-transparent text-center shadow-none outline-none focus-visible:rounded-full focus-visible:ring-2 focus-visible:ring-[#873F4B] sm:w-[158px]"
    >
      <motion.span
        animate={{
          scale: active ? 1 : 0.96,
          backgroundColor: active
            ? "#873F4B"
            : completed
              ? "#F0E0E3"
              : "#FCFAF8",
          borderColor:
            active || completed ? "#873F4B" : "#D8CEC7",
          color: active ? "#FFFFFF" : "#873F4B",
          boxShadow: active
            ? "0 12px 30px rgba(135,63,75,0.20)"
            : "0 3px 10px rgba(41,37,36,0.04)",
        }}
        whileHover={
          reduceMotion
            ? {}
            : { scale: active ? 1.04 : 1.02 }
        }
        transition={{ duration: 0.35, ease }}
        className="flex h-[136px] w-[136px] flex-col items-center justify-center rounded-full border-[3px] px-3 sm:h-[150px] sm:w-[150px]"
      >
        <motion.span
          animate={{ y: active ? -2 : 0 }}
          transition={{ duration: 0.3, ease }}
          className="font-mono text-[22px] font-bold leading-none sm:text-2xl"
        >
          {step.number}
        </motion.span>

        <span className="mt-3 max-w-[112px] text-[11px] font-bold uppercase leading-[1.35] sm:max-w-[124px] sm:text-xs">
          {step.title}
        </span>
      </motion.span>

      <motion.span
        animate={{
          color: active || completed ? "#873F4B" : "#A8A29E",
        }}
        transition={{ duration: 0.3 }}
        className="mt-3 text-[9px] font-bold uppercase tracking-[0.18em]"
      >
        {active
          ? "Selected stage"
          : completed
            ? "Completed"
            : "Select stage"}
      </motion.span>
    </motion.button>
  );
}

function AnimatedButtonText({ children }) {
  return (
    <span className="kes-button-text">
      {[...children].map((letter, index) => (
        <span key={index} style={{ "--i": index }}>
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </span>
  );
}


function StageDetails({ activeStep, onPrevious, onNext }) {
  const reduceMotion = useReducedMotion();
  const step = steps[activeStep];
  const Icon = step.icon;

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={activeStep}
        initial={
          reduceMotion
            ? false
            : { opacity: 0, y: 25, filter: "blur(5px)" }
        }
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={
          reduceMotion
            ? { opacity: 0 }
            : { opacity: 0, y: -15, filter: "blur(4px)" }
        }
        transition={{
          duration: reduceMotion ? 0 : 0.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="grid min-w-0 grid-cols-1 gap-5 rounded-2xl border border-[#DED6D0] bg-white p-5 sm:gap-7 sm:p-7 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-center lg:p-8"
        aria-live="polite"
      >
        {/* Icon and project number */}
        <div className="flex items-center gap-4 lg:block">
          <motion.div
            initial={reduceMotion ? false : { scale: 0.7, rotate: -12 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.4 }}
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#F1E5E6] text-[#873F4B] sm:h-16 sm:w-16"
          >
            <Icon size={27} strokeWidth={1.5} />
          </motion.div>

          <div className="lg:mt-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#873F4B]">
              Project journey
            </p>
            <p className="mt-1 font-mono text-xs text-[#A8A29E]">
              {step.number} / 06
            </p>
          </div>
        </div>

        {/* Stage information */}
        <div className="min-w-0">
          <h3 className="break-words text-xl font-semibold tracking-tight text-[#292524] sm:text-2xl lg:text-3xl">
            {step.title}
          </h3>

          <motion.div
            initial={reduceMotion ? false : { width: 0 }}
            animate={{ width: 48 }}
            transition={{ duration: 0.5 }}
            className="mt-3 h-[2px] rounded-full bg-[#873F4B]"
          />

          <p className="mt-4 text-sm leading-7 text-[#57534E] sm:text-base">
            {step.detail}
          </p>

          <p className="mt-2 text-sm leading-6 text-[#78716C]">
            {step.description}
          </p>
        </div>

        {/* Navigation buttons */}
        <div className="flex flex-wrap items-center gap-2 lg:justify-end">
          <button
            type="button"
            onClick={onPrevious}
            disabled={activeStep === 0}
            className="kes-button group inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#DED6D0] px-5 py-2.5 text-sm font-semibold text-[#57534E] hover:border-[#873F4B] hover:bg-[#873F4B] hover:text-white disabled:cursor-not-allowed disabled:opacity-35"
          >
            <motion.span whileHover={reduceMotion ? {} : { x: -4 }}>
              <ArrowLeft size={15} />
            </motion.span>
            <AnimatedButtonText>Previous</AnimatedButtonText>
          </button>

          {activeStep < steps.length - 1 ? (
            <button
              type="button"
              onClick={onNext}
              className="kes-button group inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#873F4B] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#71323D] hover:shadow-[0_8px_22px_rgba(135,63,75,0.2)]"
            >
              <AnimatedButtonText>Next Stage</AnimatedButtonText>
              <motion.span whileHover={reduceMotion ? {} : { x: 4 }}>
                <ArrowRight size={15} />
              </motion.span>
            </button>
          ) : (
            <a
              href="/contact"
              className="kes-button group inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#873F4B] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#71323D]"
            >
              <AnimatedButtonText>Discuss Your Project</AnimatedButtonText>
              <ArrowRight size={15} />
            </a>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function HowWeWork() {
  const [activeStep, setActiveStep] = useState(0);
  const reduceMotion = useReducedMotion();

  const goPrevious = () =>
    setActiveStep((current) => Math.max(0, current - 1));

  const goNext = () =>
    setActiveStep((current) =>
      Math.min(steps.length - 1, current + 1)
    );

  // Fill the thread according to the selected stage.
  const progress = (activeStep / (steps.length - 1)) * 100;

  return (
    <section className="w-full min-w-0 overflow-hidden bg-[#292524] p-2 sm:p-4 lg:p-6 xl:p-7">
      <div className="mx-auto w-full max-w-[1600px] overflow-hidden bg-[#F7F5F1] px-4 py-10 sm:px-7 sm:py-14 md:px-9 lg:px-12 lg:py-16 xl:px-14 xl:py-20">

        {/* Heading */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: reduceMotion ? 0 : 0.6, ease }}
          className="mx-auto mb-9 max-w-3xl text-center sm:mb-12 lg:mb-14"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#873F4B] sm:text-xs sm:tracking-[0.22em]">
            KES Group / Our Process
          </p>

          <h2 className="mt-3 text-[clamp(1.8rem,5vw,3.4rem)] font-semibold leading-tight tracking-[-0.045em] text-[#292524]">
            From concept to{" "}
            <span className="text-[#873F4B]">completion.</span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#78716C] sm:mt-4 sm:text-base sm:leading-7">
            Six coordinated stages. One complete industrial solution.
            Select any stage to explore our process.
          </p>
        </motion.div>

        {/* Horizontal circular process */}
        <div className="relative mb-8 overflow-x-auto overflow-y-hidden pb-3">
          <div className="relative flex min-w-[970px] items-start justify-between gap-3 px-2 pt-1 sm:min-w-[1060px]">

            {/* Background thread */}
            <div
              aria-hidden="true"
              className="absolute left-[8%] right-[8%] top-[69px] h-[3px] rounded-full bg-[#D8CEC7] sm:top-[76px]"
            />

            {/* Animated burgundy progress thread */}
            <motion.div
              aria-hidden="true"
              initial={false}
              animate={{ width: `${progress * 0.84}%` }}
              transition={{
                duration: reduceMotion ? 0 : 0.65,
                ease,
              }}
              className="absolute left-[8%] top-[69px] z-[1] h-[3px] rounded-full bg-[#873F4B] sm:top-[76px]"
            />

            {steps.map((step, index) => (
              <ProcessStep
                key={step.number}
                step={step}
                index={index}
                active={activeStep === index}
                completed={index < activeStep}
                reduceMotion={reduceMotion}
                onClick={() => setActiveStep(index)}
              />
            ))}
          </div>
        </div>

        <p className="-mt-5 mb-7 text-center text-[10px] text-[#A8A29E] sm:hidden">
          Swipe horizontally to view all six stages
        </p>

        {/* Selected stage details */}
        <StageDetails
          activeStep={activeStep}
          onPrevious={goPrevious}
          onNext={goNext}
        />

        {/* Bottom note */}
        <div className="mt-8 flex min-w-0 flex-col gap-2 border-t border-[#D8CEC7] pt-5 sm:mt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-6 text-[#78716C]">
            From planning and fabrication to on-site completion.
          </p>

          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#873F4B]">
            Plan / Build / Deliver
          </p>
        </div>
      </div>
    </section>
  );
}
