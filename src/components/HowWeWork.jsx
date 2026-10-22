
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

export default function HowWeWork() {
  const [activeStep, setActiveStep] = useState(0);
  const currentStep = steps[activeStep];
  const ActiveIcon = currentStep.icon;

  return (
    <section className="overflow-hidden bg-[#151515] px-5 py-20 text-white sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-400">
            How We Work
          </p>

          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-red-600" />

          <h2 className="mt-6 text-3xl font-black sm:text-4xl lg:text-5xl">
            From Concept to Completion
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-400 sm:text-lg">
            Explore the key stages of an industrial project, from initial
            consultation to final handover.
          </p>
        </div>

        {/* Interactive timeline */}
        <div className="relative mt-14">
          <div className="absolute left-[8%] right-[8%] top-6 hidden h-px bg-white/20 lg:block" />

          <div
            className="absolute left-[8%] top-6 hidden h-px bg-red-500 transition-all duration-500 lg:block"
            style={{
              width: `${(activeStep / (steps.length - 1)) * 84}%`,
            }}
          />

          <div className="grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-3 lg:grid-cols-6 lg:gap-3">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;
              const isComplete = activeStep > index;

              return (
                <button
                  key={step.title}
                  type="button"
                  onClick={() => setActiveStep(index)}
                  aria-pressed={isActive}
                  className="group relative flex flex-col items-center rounded-lg px-2 py-3 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
                >
                  <span
                    className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 ${
                      isActive
                        ? "scale-110 border-red-500 bg-red-600 text-white shadow-lg shadow-red-950/40"
                        : isComplete
                          ? "border-red-500 bg-red-500/15 text-red-400"
                          : "border-white/20 bg-[#242424] text-gray-400 group-hover:border-red-400 group-hover:text-white"
                    }`}
                  >
                    <Icon size={20} />
                  </span>

                  <span
                    className={`mt-4 text-sm font-bold leading-5 transition-colors ${
                      isActive ? "text-red-400" : "text-gray-200"
                    }`}
                  >
                    {step.title}
                  </span>

                  <span className="mt-1 text-xs text-gray-500">
                    Step {index + 1}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active step detail card */}
        <div
          key={activeStep}
          className="mx-auto mt-10 max-w-3xl animate-in rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/10 sm:mt-12 sm:p-9"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-red-600 text-white">
              <ActiveIcon size={27} />
            </div>

            <div className="flex-1">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-400">
                Step {activeStep + 1} of {steps.length}
              </p>

              <h3 className="mt-2 text-2xl font-bold sm:text-3xl">
                {currentStep.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-300 sm:text-base">
                {currentStep.detail}
              </p>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                {currentStep.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {activeStep > 0 && (
                  <button
                    type="button"
                    onClick={() => setActiveStep((step) => step - 1)}
                    className="rounded-md border border-white/20 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Previous
                  </button>
                )}

                {activeStep < steps.length - 1 ? (
                  <button
                    type="button"
                    onClick={() => setActiveStep((step) => step + 1)}
                    className="inline-flex items-center gap-2 rounded-md bg-red-700 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-red-600"
                  >
                    Next Step <ArrowRight size={16} />
                  </button>
                ) : (
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-md bg-red-700 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-red-600"
                  >
                    Discuss Your Project <ArrowRight size={16} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
