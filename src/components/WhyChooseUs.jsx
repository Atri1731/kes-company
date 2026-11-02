

import {
  Zap,
  Award,
  TrendingDown,
  ShieldCheck,
  Globe,
  Users,
  ArrowUpRight,
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


const cardStyles = [
  // 01 — White
  {
    card: "bg-white border-[#DED6D0]",
    number: "text-[#F0E0E3]",
    icon: "bg-[#F1E5E6] text-[#873F4B] group-hover:bg-[#873F4B] group-hover:text-white",
    heading: "text-[#292524]",
    description: "text-[#78716C]",
    footer: "border-[#EAE5E0] text-[#873F4B]",
  },

  // 02 — Light Burgundy
  {
    card: "bg-[#F0E0E3] border-[#E5C9CE]",
    number: "text-[#DFC0C6]",
    icon: "bg-white text-[#873F4B] group-hover:bg-[#873F4B] group-hover:text-white",
    heading: "text-[#292524]",
    description: "text-[#6F5A5D]",
    footer: "border-[#D6ADB5] text-[#873F4B]",
  },

  // 03 — Deep Burgundy
  {
    card: "bg-white border-[#DED6D0]",
    number: "text-[#F0E0E3]",
    icon: "bg-[#F1E5E6] text-[#873F4B] group-hover:bg-[#873F4B] group-hover:text-white",
    heading: "text-[#292524]",
    description: "text-[#78716C]",
    footer: "border-[#EAE5E0] text-[#873F4B]",
  },

  // 04 — Light Burgundy
  {
    card: "bg-[#F0E0E3] border-[#E5C9CE]",
    number: "text-[#DFC0C6]",
    icon: "bg-white text-[#873F4B] group-hover:bg-[#873F4B] group-hover:text-white",
    heading: "text-[#292524]",
    description: "text-[#6F5A5D]",
    footer: "border-[#D6ADB5] text-[#873F4B]",
  },

  // 05 — Deep Burgundy
  {
    card: "bg-white border-[#DED6D0]",
    number: "text-[#F0E0E3]",
    icon: "bg-[#F1E5E6] text-[#873F4B] group-hover:bg-[#873F4B] group-hover:text-white",
    heading: "text-[#292524]",
    description: "text-[#78716C]",
    footer: "border-[#EAE5E0] text-[#873F4B]",
  },

  // 06 — White
  {
    card: "bg-[#F0E0E3] border-[#E5C9CE]",
    number: "text-[#DFC0C6]",
    icon: "bg-white text-[#873F4B] group-hover:bg-[#873F4B] group-hover:text-white",
    heading: "text-[#292524]",
    description: "text-[#6F5A5D]",
    footer: "border-[#D6ADB5] text-[#873F4B]",
  },
];


const ease = [0.22, 1, 0.36, 1];

export default function WhyChooseUs() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="w-full min-w-0 overflow-hidden bg-[#F7F5F1] px-4 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1440px]">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: reduceMotion ? 0 : 0.75,
            ease,
          }}
          className="flex flex-col gap-6 border-b border-[#D8CEC7] pb-9 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#873F4B] sm:text-xs">
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
        </motion.div>

        {/* Advantage cards */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 xl:gap-6">

          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const style = cardStyles[index];

            return (
              <motion.article
                key={reason.title}
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.65,
                  delay: reduceMotion ? 0 : (index % 3) * 0.1,
                  ease,
                }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : { y: -7 }
                }
                className={`group relative flex min-h-[330px] min-w-0 flex-col overflow-hidden border p-6 transition-colors duration-300 sm:min-h-[350px] sm:p-8 lg:p-9 ${style.card}`}
              >

                {/* Oversized background number */}
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute -right-1 -top-5 select-none font-normal text-[100px] leading-none tracking-[-0.09em] opacity-90 transition-transform duration-500 group-hover:scale-110 sm:text-[120px] lg:text-[140px] ${style.number}`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div
                  className={`relative z-10 flex h-12 w-12 items-center justify-center transition-all duration-300 group-hover:rotate-6 ${style.icon}`}
                >
                  <Icon size={23} strokeWidth={1.6} />
                </div>

                {/* Content */}
                <div className="relative z-10 mt-auto pt-16 sm:pt-20">
                  <p className={`mb-3 text-[10px] font-bold uppercase tracking-[0.2em] opacity-70 ${style.description}`}>
                    KES Advantage / {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className={`max-w-sm text-xl font-semibold leading-snug tracking-tight sm:text-2xl ${style.heading}`}>
                    {reason.title}
                  </h3>

                  <p className={`mt-4 max-w-sm text-sm leading-7 ${style.description}`}>
                    {reason.description}
                  </p>
                </div>

                {/* Bottom detail */}
                <div className={`relative z-10 mt-7 flex items-center justify-between border-t pt-4 ${style.footer}`}>
                  <span className="text-[9px] font-bold uppercase tracking-[0.18em]">
                    KES / Engineering
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center border border-current/20 transition-all duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-[#873F4B]">
                    <ArrowUpRight size={17} />
                  </span>
                </div>

                {/* Bottom hover line */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#873F4B] transition-all duration-500 group-hover:w-full" />

              </motion.article>
            );
          })}

        </div>

        {/* Closing statement */}
        <motion.div
          initial={{
            opacity: 0,
            x: reduceMotion ? 0 : -30,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: reduceMotion ? 0 : 0.8,
            ease,
          }}
          className="mt-10 flex flex-col gap-3 border-l-2 border-[#873F4B] pl-5 sm:flex-row sm:items-center sm:justify-between"
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
