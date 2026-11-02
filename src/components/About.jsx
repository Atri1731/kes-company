

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
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative w-full overflow-hidden bg-[#F7F3EF] py-12 text-[#292524] sm:py-14 lg:py-20">
      <div className="mx-auto w-full max-w-[1440px] px-4 min-[380px]:px-5 sm:px-8 lg:px-14">
        <div className="mb-9 flex min-w-0 flex-col justify-between gap-5 border-b border-[#D8CEC7]/70 pb-7 sm:mb-12 sm:flex-row sm:items-end lg:mb-16">
          <div className="min-w-0">
            <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#873F4B] sm:text-xs sm:tracking-[0.22em]">
              <span className="h-px w-7 shrink-0 bg-[#873F4B] sm:w-8" />
              About KES Group
            </p>
            <h2 className="mt-4 text-[clamp(1.9rem,6vw,3.75rem)] font-semibold leading-[1.08] tracking-[-0.04em] sm:mt-5">
              15 Years of
              <span className="block text-[#873F4B]">
                Engineering Excellence
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-[#78716C] sm:max-w-xs sm:leading-7">
            Industrial engineering and construction solutions shaped around
            quality, practical execution, and client requirements.
          </p>
        </div>

        <div className="grid min-w-0 items-start gap-9 md:gap-11 lg:grid-cols-2 lg:gap-14">
          {/* Image and overlapping project statistic */}
          <motion.div
            className="relative min-w-0"
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.15 } },
            }}
          >
            <motion.div
              className="relative h-[clamp(260px,72vw,500px)] overflow-hidden rounded-sm bg-[#E3D8D0] lg:h-[570px]"
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: reduceMotion ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              <motion.img
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=85"
                alt="Industrial engineering and steel fabrication"
                loading="lazy"
                className="h-full w-full object-cover"
                initial={reduceMotion ? false : { scale: 1.08 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: reduceMotion ? 0 : 1.3, ease: [0.22, 1, 0.36, 1] }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171514]/60 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-4 right-4 border-l-2 border-[#B77882] pl-3 sm:bottom-8 sm:left-8 sm:right-auto sm:pl-4">
                <p className="text-sm font-semibold text-white sm:text-base">
                  Engineering & Construction
                </p>
                <p className="mt-1 text-xs text-white/80 sm:text-sm">
                  Built around your requirements
                </p>
              </div>

              <span className="absolute right-3 top-3 border border-white/60 bg-white/15 px-2.5 py-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm sm:right-5 sm:top-5 sm:px-3 sm:text-[10px]">
                KES Group
              </span>
            </motion.div>

            <motion.div
              className="relative z-10 -mt-7 ml-auto mr-3 w-[min(88%,340px)] border-l-4 border-[#873F4B] bg-[#EFE5DF] p-5 shadow-[0_15px_45px_rgba(41,37,36,0.08)] sm:-mt-14 sm:mr-0 sm:p-8"
              initial={reduceMotion ? false : { opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-4xl font-semibold tracking-tight text-[#873F4B] sm:text-5xl">
                350+
              </p>
              <p className="mt-2 text-sm leading-6 text-[#57534E] sm:mt-3 sm:text-base">
                Projects delivered across industrial sectors
              </p>
            </motion.div>
          </motion.div>

          {/* Company information */}
          <div className="min-w-0 lg:pt-5">
            <div className="space-y-4 text-sm leading-7 text-[#57534E] sm:space-y-5 sm:text-base sm:leading-8">
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

            <div className="mt-7 border-y border-[#D4C5BC] sm:mt-9">
              {highlights.map((item, index) => (
                <div
                  key={item}
                  className="flex min-w-0 items-start gap-3 border-b border-[#D4C5BC]/70 py-3.5 last:border-b-0 sm:gap-4 sm:py-4"
                >
                  <span className="pt-0.5 text-xs font-medium tabular-nums text-[#873F4B]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="min-w-0 flex-1 text-sm leading-6 text-[#44403C] sm:text-base">
                    {item}
                  </p>
                  <CheckCircle2 size={18} className="mt-1 shrink-0 text-[#873F4B]" />
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-col items-stretch gap-4 min-[480px]:flex-row min-[480px]:flex-wrap min-[480px]:items-center sm:mt-9">
              <Link
                to="/about"
                className="group inline-flex min-h-12 items-center justify-center gap-3 bg-[#873F4B] px-5 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-[#71323D] sm:px-6"
              >
                Discover Our Story
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/projects"
                className="group inline-flex min-h-11 items-center justify-center gap-2 text-sm font-semibold text-[#292524] transition-colors hover:text-[#873F4B] min-[480px]:justify-start"
              >
                Explore Projects
                <MoveUpRight size={17} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
