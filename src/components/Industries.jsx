

// import {
//   Factory,
//   Truck,
//   Warehouse,
//   FlaskConical,
//   CarFront,
//   Utensils,
//   Shirt,
//   Sun,
// } from "lucide-react";

// const industries = [
//   { title: "Manufacturing", icon: Factory },
//   { title: "Logistics", icon: Truck },
//   { title: "Warehousing", icon: Warehouse },
//   { title: "Pharmaceutical", icon: FlaskConical },
//   { title: "Automobile", icon: CarFront },
//   { title: "Food Processing", icon: Utensils },
//   { title: "Textile", icon: Shirt },
//   { title: "Renewable Energy", icon: Sun },
// ];

// export default function Industries() {
//   return (
//     <section
//       id="industries"
//       className="bg-[#292524] p-3 sm:p-5 lg:p-8"
//     >
//       <div className="mx-auto max-w-[1600px] bg-[#F7F5F1] px-5 py-12 sm:px-8 sm:py-16 lg:px-14 lg:py-20">
//         {/* Section heading */}
//         <div className="mb-10 flex flex-col justify-between gap-5 sm:mb-14 md:flex-row md:items-end">
//           <div>
//             <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#873F4B]">
//               KES Group / Our Expertise
//             </p>

//             <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
//               Industries
//               <span className="text-[#873F4B]"> we serve.</span>
//             </h2>
//           </div>

//           <p className="max-w-sm text-sm leading-7 text-[#78716C]">
//             Deep domain expertise across India's most critical
//             industrial sectors.
//           </p>
//         </div>



// {/* Smaller, lighter industry cards */}
// <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
//   {industries.map((industry, index) => {
//     const Icon = industry.icon;
//     const isBurgundy =
//   Math.floor(index / 4) % 2 === index % 2;

//     return (
//       <article
//         key={industry.title}
//         className={`group relative flex min-h-[155px] flex-col justify-between overflow-hidden border p-4 transition-all duration-300 hover:-translate-y-1 sm:min-h-[170px] sm:p-5 ${
//           isBurgundy
//             ? "border-[#D9B7BC] bg-[#EBD9DC] text-[#5E343B] hover:bg-[#E4CDD1]"
//             : "border-[#E5DCD7] bg-white text-[#292524] hover:border-[#C99AA2]"
//         }`}
//       >
//         <div className="flex items-center justify-between">
//           <span
//             className={`font-mono text-[10px] tracking-widest ${
//               isBurgundy ? "text-[#873F4B]/75" : "text-[#873F4B]"
//             }`}
//           >
//             {String(index + 1).padStart(2, "0")}
//           </span>

//           <span
//             className={`h-1.5 w-1.5 rounded-full ${
//               isBurgundy ? "bg-[#A86D77]" : "bg-[#C99AA2]"
//             }`}
//           />
//         </div>

//         <div
//           className={`mt-5 flex h-10 w-10 items-center justify-center ${
//             isBurgundy
//               ? "bg-white/60 text-[#873F4B]"
//               : "bg-[#F7F0EE] text-[#873F4B]"
//           }`}
//         >
//           <Icon size={22} strokeWidth={1.6} />
//         </div>

//         <h3 className="mt-5 text-base font-semibold leading-snug tracking-tight sm:text-lg">
//           {industry.title}
//         </h3>

//         <div
//           className={`absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full ${
//             isBurgundy ? "bg-[#A86D77]" : "bg-[#873F4B]"
//           }`}
//         />
//       </article>
//     );
//   })}
// </div>



//         {/* Bottom note */}
//         <div className="mt-10 flex flex-col gap-2 border-t border-[#D8CEC7] pt-5 sm:mt-16 sm:flex-row sm:justify-between">
//           <p className="text-xs leading-6 text-[#78716C]">
//             Engineering solutions across diverse industrial sectors.
//           </p>

//           <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#873F4B]">
//             Precision / Performance / Reliability
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }





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

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Industries() {
  const reduceMotion = useReducedMotion();
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  return (
    <section
      id="industries"
      className="bg-[#292524] p-3 sm:p-5 lg:p-8"
    >
      <div className="mx-auto max-w-[1600px] overflow-hidden bg-[#F7F5F1] px-5 py-12 sm:px-8 sm:py-16 lg:px-14 lg:py-20">

        {/* Section heading */}
        <motion.div
          className="mb-10 flex flex-col justify-between gap-5 sm:mb-14 md:flex-row md:items-end"
          initial={reduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#873F4B]">
              KES Group / Our Expertise
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              Industries
              <span className="text-[#873F4B]">
                {" "}we serve.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#78716C]">
            Deep domain expertise across India&apos;s most
            critical industrial sectors.
          </p>
        </motion.div>

        {/* Industry cards */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            const isSelected = selectedIndustry === industry.title;
            const isBurgundy = index % 2 === 0;

            return (
              <motion.article
                key={industry.title}
                variants={cardVariants}
                initial={reduceMotion ? false : "hidden"}
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
               transition={{
  opacity: {
    duration: reduceMotion ? 0 : 1,
    delay: reduceMotion ? 0 : index * 0.25,
  },
  y: {
    duration: reduceMotion ? 0 : 1,
    delay: reduceMotion ? 0 : index * 0.25,
    ease: [0.22, 1, 0.36, 1],
  },
}}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -7,
                        scale: 1.025,
                        borderColor: "#873F4B",
                        transition: {
                          duration: 0.25,
                          ease: "easeOut",
                        },
                      }
                }
                whileTap={
                  reduceMotion ? undefined : { scale: 0.985 }
                }
                animate={{
                  borderColor: isSelected
                    ? "#873F4B"
                    : isBurgundy
                      ? "#D9B7BC"
                      : "#E5DCD7",
                }}
                onClick={() =>
                  setSelectedIndustry(isSelected ? null : industry.title)
                }
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
                className={`group relative flex min-h-[170px] cursor-pointer flex-col overflow-hidden border p-4 sm:min-h-[185px] sm:p-5 ${
                  isBurgundy
                    ? "bg-[#EBD9DC] text-[#5E343B]"
                    : "bg-white text-[#292524]"
                }`}
              >
                {/* Card top row */}
                <div className="flex w-full items-center justify-between">
                  <span className="font-mono text-[10px] tracking-widest text-[#873F4B]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <motion.span
                    animate={{
                      scale: isSelected ? 1.4 : 1,
                      backgroundColor: isSelected
                        ? "#873F4B"
                        : "#C99AA2",
                    }}
                    transition={{ duration: 0.25 }}
                    className="h-1.5 w-1.5 rounded-full"
                  />
                </div>

                {/* Icon */}
                <motion.div
                  animate={{
                    backgroundColor: isSelected
                      ? "#873F4B"
                      : isBurgundy
                        ? "#FFFFFF99"
                        : "#F7F0EE",
                    color: isSelected ? "#FFFFFF" : "#873F4B",
                    scale: isSelected ? 1.08 : 1,
                  }}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : { rotate: -8, scale: 1.12 }
                  }
                  transition={{ duration: 0.25 }}
                  className="mt-6 flex h-11 w-11 items-center justify-center"
                >
                  <Icon size={22} strokeWidth={1.6} />
                </motion.div>

                {/* Card title */}
                <motion.h3
                  animate={{ x: isSelected ? 3 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="mt-5 text-base font-semibold leading-snug tracking-tight sm:text-lg"
                >
                  {industry.title}
                </motion.h3>

                {/* Explore indicator */}
                <motion.div
                  initial={false}
                  animate={{
                    opacity: isSelected ? 1 : 0,
                    x: isSelected ? 0 : -6,
                  }}
                  transition={{ duration: 0.25 }}
                  className="mt-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-[#873F4B] sm:text-xs"
                  aria-hidden={!isSelected}
                >
                  Explore industry
                  <ArrowUpRight size={14} />
                </motion.div>

                {/* Animated bottom accent */}
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
                  style={{
                    backgroundColor: isBurgundy
                      ? "#A86D77"
                      : "#873F4B",
                  }}
                />

                {/* Hover background tint */}
                <div
                  className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                    isBurgundy
                      ? "bg-white/10"
                      : "bg-[#873F4B]/[0.025]"
                  }`}
                />
              </motion.article>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-10 flex flex-col gap-2 border-t border-[#D8CEC7] pt-5 sm:mt-16 sm:flex-row sm:justify-between">
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
