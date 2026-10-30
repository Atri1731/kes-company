


// import { ArrowUpRight, MapPin } from "lucide-react";
// import { Link } from "react-router-dom";

// const serviceAreas = [
//   "Rajasthan",
//   "Gujarat",
//   "Madhya Pradesh",
//   "Maharashtra",
// ];

// export default function ServiceAreas() {
//   return (
//     <section className="bg-[#292524] p-3 sm:p-5 lg:p-8">
//       <div className="mx-auto max-w-[1600px] bg-[#F7F5F1] px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
//         <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

//           {/* Left: Section introduction */}
//           <div>
//             <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#873F4B]">
//               KES Group / Our Reach
//             </p>

//             <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#292524] sm:text-5xl lg:text-6xl">
//               Our service
//               <span className="block text-[#873F4B]">
//                 areas.
//               </span>
//             </h2>

//             <p className="mt-5 max-w-md text-sm leading-7 text-[#78716C] sm:text-base">
//               Delivering reliable industrial project services
//               across key regions of India.
//             </p>

//             <Link
//               to="/contact"
//               className="mt-8 inline-flex items-center gap-3 bg-[#873F4B] px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#71323D]"
//             >
//               Discuss Your Project
//               <ArrowUpRight size={18} />
//             </Link>
//           </div>

//           {/* Right: Service locations */}
//           <div className="border-t border-[#D8CEC7] lg:border-t-0">
//             {serviceAreas.map((area, index) => (
//               <div
//                 key={area}
//                 className="group flex items-center gap-4 border-b border-[#D8CEC7] py-4 transition-colors duration-300 sm:py-5 hover:bg-[#EBD9DC]/40 sm:gap-6 sm:py-7"
//               >
//                 <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#EBD9DC] text-[#873F4B] transition-colors duration-300 group-hover:bg-[#873F4B] group-hover:text-white">
//                   <MapPin size={21} strokeWidth={1.7} />
//                 </span>

//                 <div className="min-w-0 flex-1">
//                   <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#A8A29E]">
//                     Service Location 0{index + 1}
//                   </p>

//                   <h3 className="mt-1 text-lg font-semibold tracking-tight text-[#292524] sm:text-xl">
//                     {area}
//                   </h3>
//                 </div>

              
//               </div>
//             ))}
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }







import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const serviceAreas = [
  "Rajasthan",
  "Gujarat",
  "Madhya Pradesh",
  "Maharashtra",
];

export default function ServiceAreas() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-[#292524] p-3 sm:p-5 lg:p-8">
      <div className="mx-auto max-w-[1600px] bg-[#F7F5F1] px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

          {/* Left: Section introduction */}
          <motion.div
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={reveal}
            transition={{
              duration: reduceMotion ? 0 : 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.p
              variants={reveal}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#873F4B]"
            >
              KES Group / Our Reach
            </motion.p>

            <motion.h2
              variants={reveal}
              transition={{
                duration: 0.9,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#292524] sm:text-5xl lg:text-6xl"
            >
              Our service
              <span className="block text-[#873F4B]">
                areas.
              </span>
            </motion.h2>

            <motion.p
              variants={reveal}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-5 max-w-md text-sm leading-7 text-[#78716C] sm:text-base"
            >
              Delivering reliable industrial project services
              across key regions of India.
            </motion.p>

            <motion.div
              variants={reveal}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-8"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 bg-[#873F4B] px-6 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#71323D]"
              >
                Discuss Your Project
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Animated service locations */}
          <div className="border-t border-[#D8CEC7] lg:border-t-0">
            {serviceAreas.map((area, index) => (
              <motion.div
                key={area}
      initial={
  reduceMotion
    ? false
    : {
        opacity: 0,
        x: index % 2 === 0 ? -100 : 100,
      }
}
whileInView={{
  opacity: 1,
  x: 0,
}}
transition={{
  opacity: {
    duration: reduceMotion ? 0 : 1.2,
    delay: reduceMotion ? 0 : index * 0.4,
  },
  x: {
    duration: reduceMotion ? 0 : 1.2,
    delay: reduceMotion ? 0 : index * 0.4,
    ease: [0.22, 1, 0.36, 1],
  },
}}
                whileHover={
                  reduceMotion ? undefined : { x: 5 }
                }
                className="group flex items-center gap-4 border-b border-[#D8CEC7] py-5 transition-colors duration-300 hover:bg-[#EBD9DC]/40 sm:gap-6 sm:py-7"
              >
                {/* Location icon */}
                <motion.span
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          scale: 1.1,
                          rotate: -8,
                        }
                  }
                  animate={{
                    backgroundColor: "#EBD9DC",
                    color: "#873F4B",
                  }}
                  transition={{ duration: 0.25 }}
                  className="flex h-12 w-12 shrink-0 items-center justify-center transition-colors duration-300 group-hover:bg-[#873F4B] group-hover:text-white"
                >
                  <MapPin size={21} strokeWidth={1.7} />
                </motion.span>

                {/* Location name */}
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#A8A29E]">
                    Service Location 0{index + 1}
                  </p>

                  <motion.h3
                    whileHover={
                      reduceMotion ? undefined : { x: 4 }
                    }
                    transition={{ duration: 0.25 }}
                    className="mt-1 text-lg font-semibold tracking-tight text-[#292524] sm:text-xl"
                  >
                    {area}
                  </motion.h3>
                </div>

                {/* Arrow reveal */}
                <motion.div
                  initial={false}
                  animate={{ opacity: 0.45, x: 0 }}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : { opacity: 1, x: 3 }
                  }
                  className="text-[#873F4B] transition-opacity duration-300 group-hover:opacity-100"
                >
                  <ArrowUpRight size={19} />
                </motion.div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

