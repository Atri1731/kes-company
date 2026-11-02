

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  Factory,
  Truck,
  Warehouse,
  FlaskConical,
  CarFront,
  Utensils,
  Shirt,
  Sun,
  ArrowUpRight,
} from "lucide-react";

const industries = [
  { title: "Manufacturing", icon: Factory },
  { title: "Logistics", icon: Truck },
  { title: "Warehousing", icon: Warehouse },
  { title: "Pharmaceutical", icon: FlaskConical },
  { title: "Automobile", icon: CarFront },
  { title: "Food Processing", icon: Utensils },
  { title: "Textile", icon: Shirt },
  { title: "Renewable Energy", icon: Sun },
];

const cardPalettes = [
  {
    background: "#F0E0E3",
    border: "#DFC0C6",
    number: "#C99DA5",
    iconBg: "#FFFFFF",
    iconColor: "#873F4B",
    title: "#5E343B",
    accent: "#873F4B",
    hover: "#EBD3D8",
  },
  {
    background: "#FCFAF8",
    border: "#E5DCD5",
    number: "#C5A9A9",
    iconBg: "#F1EAE5",
    iconColor: "#873F4B",
    title: "#292524",
    accent: "#873F4B",
    hover: "#F5EEE9",
  },
  {
    background: "#E9EDE8",
    border: "#D5DED2",
    number: "#A5B8A5",
    iconBg: "#FFFFFF",
    iconColor: "#496A50",
    title: "#293C2E",
    accent: "#496A50",
    hover: "#DFE8DD",
  },
];
const ease = [0.22, 1, 0.36, 1];

export default function Industries() {
  const reduceMotion = useReducedMotion();
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  return (
    <section
      id="industries"
      className="w-full min-w-0 overflow-hidden bg-[#292524] p-3 sm:p-5 lg:p-8"
    >
      <div className="mx-auto max-w-[1600px] overflow-hidden bg-[#F7F5F1] px-5 py-12 sm:px-8 sm:py-16 lg:px-14 lg:py-20">

        {/* Section heading */}
        <motion.div
          className="mb-10 flex flex-col justify-between gap-5 sm:mb-14 md:flex-row md:items-end"
          initial={reduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: reduceMotion ? 0 : 0.8,
            ease,
          }}
        >
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#873F4B] sm:text-xs">
              KES Group / Our Expertise
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-[#292524] sm:text-5xl lg:text-6xl">
              Industries
              <span className="text-[#873F4B]">
                {" "}we serve.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#78716C] sm:text-base">
            Deep domain expertise across India's most
            critical industrial sectors.
          </p>
        </motion.div>

        {/* Industry cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            const palette = cardPalettes[index % 3];
            const isSelected = selectedIndustry === industry.title;

            return (
              <motion.article
                key={industry.title}
                initial={
                  reduceMotion ? false : { opacity: 0, y: 30 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.7,
                  delay: reduceMotion ? 0 : (index % 4) * 0.1,
                  ease,
                }}
                whileHover={
                  reduceMotion ? undefined : {
                    y: -7,
                    transition: { duration: 0.25, ease },
                  }
                }
                whileTap={
                  reduceMotion ? undefined : { scale: 0.985 }
                }
                animate={{
                  borderColor: isSelected ? palette.accent : palette.border,
                }}
                // onClick={() =>
                //   setSelectedIndustry(
                //     isSelected ? null : industry.title
                //   )
                // }
                role="button"
                tabIndex={0}
                aria-pressed={isSelected}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setSelectedIndustry(
                      isSelected ? null : industry.title
                    );
                  }
                }}
                className="group relative flex min-h-[230px] cursor-pointer flex-col overflow-hidden border p-5 outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-[#873F4B] focus-visible:ring-offset-2 sm:min-h-[245px] sm:p-6 lg:min-h-[255px] lg:p-7"
                style={{
                  backgroundColor: palette.background,
                }}
              >
{/* Icon left + number right */}
<div className="flex w-full items-center justify-between">

  {/* Icon */}
  <motion.div
    animate={{
      scale: isSelected ? 1.08 : 1,
    }}
    whileHover={
      reduceMotion
        ? undefined
        : {
            rotate: -8,
            scale: 1.12,
          }
    }
    transition={{ duration: 0.25 }}
    className="flex h-12 w-12 items-center justify-center"
    style={{
      backgroundColor: palette.iconBg,
      color: palette.iconColor,
    }}
  >
    <Icon size={23} strokeWidth={1.6} />
  </motion.div>

  {/* Light oversized number */}
  <span
    className="font-mono text-3xl font-medium leading-none tracking-[-0.06em] sm:text-4xl"
    style={{
      color: palette.number,
      opacity: 0.85,
    }}
  >
    {String(index + 1).padStart(2, "0")}
  </span>

</div>

                {/* Title */}
                <motion.h3
                  animate={{ x: isSelected ? 3 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="mt-auto pt-6 text-lg font-semibold leading-snug tracking-tight sm:text-xl"
                  style={{ color: palette.title }}
                >
                  {industry.title}
                </motion.h3>

                {/* Explore indicator */}
                <motion.div
                  initial={false}
                  animate={{
                    opacity: isSelected ? 1 : 0,
                    y: isSelected ? 0 : 5,
                  }}
                  transition={{ duration: 0.25 }}
                  className="mt-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider sm:text-xs"
                  style={{ color: palette.accent }}
                  aria-hidden={!isSelected}
                >
                  Explore industry
                  <ArrowUpRight size={14} />
                </motion.div>

                {/* Bottom accent */}
                <motion.div
                  className="absolute bottom-0 left-0 h-[3px] w-full origin-left"
                  initial={false}
                  animate={{
                    scaleX: isSelected ? 1 : 0,
                  }}
                  whileHover={
                    reduceMotion ? undefined : { scaleX: 1 }
                  }
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                  style={{ backgroundColor: palette.accent }}
                />

                {/* Hover overlay */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    backgroundColor: palette.hover,
                    mixBlendMode: "multiply",
                  }}
                />
              </motion.article>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-10 flex flex-col gap-2 border-t border-[#D8CEC7] pt-5 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-6 text-[#78716C]">
            Engineering solutions across diverse industrial sectors.
          </p>

          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#873F4B]">
            Precision / Performance / Reliability
          </p>
        </div>
      </div>
    </section>
  );
}
