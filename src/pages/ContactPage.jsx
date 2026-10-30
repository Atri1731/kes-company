


// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   CheckCircle2,
//   Building2,
//   MessageSquare,
// } from "lucide-react";

// import Navbar from "../components/Navbar";
// import Contact from "../components/Contact";
// import Footer from "../components/Footer";

// const services = [
//   "Pre-engineered buildings",
//   "Industrial steel structures",
//   "STP / WTP systems",
//   "EPC solutions",
// ];

// export default function ContactPage() {
//   return (
//     <>
//       <Navbar />

//       <main className="overflow-hidden bg-[#F7F5F1] text-[#292524]">
//         {/* Split-screen contact hero */}
//         <section className="px-5 pb-12 pt-12 sm:px-8 sm:pb-16 sm:pt-16 lg:px-12 lg:pb-20 lg:pt-20">
//           <div className="mx-auto max-w-7xl">
//             <div className="grid overflow-hidden border border-[#D8CEC7] lg:grid-cols-[1.2fr_0.8fr]">
//               {/* Introduction */}
//               <div className="relative flex flex-col justify-between overflow-hidden px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
//                 <div
//                   aria-hidden="true"
//                   className="pointer-events-none absolute -right-24 -top-20 h-64 w-64 rounded-full border border-[#873F4B]/10 sm:h-80 sm:w-80"
//                 />

//                 <div className="relative">
//                   <div className="flex items-center gap-3">
//                     <span className="h-px w-9 bg-[#873F4B]" />
//                     <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#873F4B] sm:text-sm">
//                       Contact KES Groups
//                     </p>
//                   </div>

//                   <h1 className="mt-8 text-5xl font-medium leading-[1.05] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
//                     Every great
//                     <span className="block">project starts</span>
//                     <span className="block font-semibold italic text-[#873F4B]">
//                       with a conversation.
//                     </span>
//                   </h1>

//                   <p className="mt-7 max-w-xl text-base leading-8 text-[#78716C] sm:mt-9 sm:text-lg">
//                     Planning an industrial facility or exploring an
//                     engineering solution? Tell us what you have in mind.
//                     Let's discuss how we can help bring your project to life.
//                   </p>

//                   <div className="mt-8 flex flex-col gap-3 sm:flex-row">
//                     <a
//                       href="#contact"
//                       className="inline-flex items-center justify-center gap-3 bg-[#873F4B] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#6F303B]"
//                     >
//                       Start an Inquiry
//                       <ArrowRight size={18} />
//                     </a>

//                     <Link
//                       to="/services"
//                       className="inline-flex items-center justify-center gap-2 border border-[#D8CEC7] px-6 py-4 text-sm font-semibold text-[#292524] transition hover:border-[#873F4B] hover:text-[#873F4B]"
//                     >
//                       Explore Services
//                       <ArrowUpRight size={17} />
//                     </Link>
//                   </div>
//                 </div>

//                 <div className="relative mt-12 border-t border-[#D8CEC7] pt-5">
//                   <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#78716C]">
//                     Let's move your ideas forward
//                   </p>
//                 </div>
//               </div>

//               {/* Burgundy service panel */}
//               <div className="relative flex flex-col justify-between overflow-hidden bg-[#873F4B] px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-10 lg:py-14">
//                 <div
//                   aria-hidden="true"
//                   className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full border border-white/10 sm:h-96 sm:w-96"
//                 />

//                 <div className="relative">
//                   <div className="flex h-12 w-12 items-center justify-center border border-white/25 bg-white/10">
//                     <Building2 size={23} strokeWidth={1.5} />
//                   </div>

//                   <p className="mt-8 text-xs font-bold uppercase tracking-[0.22em] text-[#F0E0E3]">
//                     Your Engineering Partner
//                   </p>

//                   <h2 className="mt-4 max-w-md text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
//                     The right conversation. The right solution.
//                   </h2>

//                   <p className="mt-4 text-sm leading-7 text-white/75">
//                     Share your requirements with our team and start
//                     exploring the possibilities for your next project.
//                   </p>
//                 </div>

//                 <div className="relative mt-10">
//                   <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#F0E0E3]">
//                     Our capabilities
//                   </p>

//                   <div className="divide-y divide-white/15 border-y border-white/15">
//                     {services.map((service, index) => (
//                       <div
//                         key={service}
//                         className="flex items-center gap-4 py-4"
//                       >
//                         <span className="text-xs text-white/50">
//                           0{index + 1}
//                         </span>

//                         <span className="flex-1 text-sm font-medium sm:text-base">
//                           {service}
//                         </span>

//                         <CheckCircle2
//                           size={17}
//                           strokeWidth={1.5}
//                           className="shrink-0 text-[#F0E0E3]"
//                         />
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="relative mt-8 flex items-center gap-3 text-sm text-white/80">
//                   <MessageSquare size={17} />
//                   <span>Tell us about your project</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Existing contact form and details */}
//         <section id="contact" className="scroll-mt-24 px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12">
//           <div className="mx-auto max-w-7xl">
//             <div className="mb-8 max-w-2xl sm:mb-10">
//               <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#873F4B]">
//                 Get in touch
//               </p>

//               <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
//                 Let's discuss your requirements.
//               </h2>

//               <p className="mt-4 text-sm leading-7 text-[#78716C] sm:text-base">
//                 Share a few details with us using the form below. Our
//                 existing contact form and its functionality remain in place.
//               </p>
//             </div>

//             <div className="border border-[#D8CEC7] bg-white p-3 sm:p-6 lg:p-8">
//               <Contact />
//             </div>
//           </div>
//         </section>

//         {/* Closing banner */}
//         <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12">
//           <div className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-[#D8CEC7] pt-8 sm:flex-row sm:items-center sm:justify-between">
//             <div>
//               <p className="text-lg font-medium">
//                 Have a project ready to discuss?
//               </p>
//               <p className="mt-2 text-sm text-[#78716C]">
//                 Explore our capabilities before getting in touch.
//               </p>
//             </div>

//             <Link
//               to="/services"
//               className="inline-flex items-center gap-2 self-start border-b border-[#873F4B] pb-2 text-sm font-semibold text-[#873F4B] transition hover:text-[#6F303B]"
//             >
//               Discover Our Services
//               <ArrowRight size={17} />
//             </Link>
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </>
//   );
// }






import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Building2,
  MessageSquare,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const services = [
  "Pre-engineered buildings",
  "Industrial steel structures",
  "STP / WTP systems",
  "EPC solutions",
];

const ease = [0.22, 1, 0.36, 1];

export default function ContactPage() {
  const shouldReduceMotion = useReducedMotion();

  const revealUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.7, ease },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: shouldReduceMotion
        ? { duration: 0 }
        : { staggerChildren: 0.12, delayChildren: 0.08 },
    },
  };

  return (
    <>
      <Navbar />

      <motion.main
        className="overflow-hidden bg-[#F7F5F1] text-[#292524]"
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        {/* Split-screen contact hero */}
        <section className="px-5 pb-12 pt-5 sm:px-8 sm:pb-16 sm:pt-8 lg:px-12 lg:pb-20 lg:pt-10">
          <div className="mx-auto max-w-7xl">
            <div className="grid overflow-hidden border border-[#D8CEC7] lg:grid-cols-[1.2fr_0.8fr]">
              {/* Introduction */}
              <motion.div
                className="relative flex flex-col justify-between overflow-hidden px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16"
                initial={shouldReduceMotion ? false : { opacity: 0, x: -35 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease, delay: 0.08 }}
              >
                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-24 -top-20 h-64 w-64 rounded-full border border-[#873F4B]/10 sm:h-80 sm:w-80"
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : { rotate: 360, scale: [1, 1.04, 1] }
                  }
                  transition={{
                    rotate: { duration: 45, repeat: Infinity, ease: "linear" },
                    scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                  }}
                />

                <div className="relative">
                  <motion.div
                    className="flex items-center gap-3"
                    variants={revealUp}
                    initial="hidden"
                    animate="visible"
                  >
                    <span className="h-px w-9 bg-[#873F4B]" />
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#873F4B] sm:text-sm">
                      Contact KES Groups
                    </p>
                  </motion.div>

                  <motion.h1
                    className="mt-8 text-5xl font-medium leading-[1.05] tracking-[-0.045em] sm:text-6xl lg:text-7xl"
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.18, ease }}
                  >
                    Every great
                    <span className="block">project starts</span>
                    <motion.span
                      className="block font-semibold italic text-[#873F4B]"
                      initial={shouldReduceMotion ? false : { opacity: 0, x: -18 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.7, delay: 0.38, ease }}
                    >
                      with a conversation.
                    </motion.span>
                  </motion.h1>

                  <motion.p
                    className="mt-7 max-w-xl text-base leading-8 text-[#78716C] sm:mt-9 sm:text-lg"
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, delay: 0.48, ease }}
                  >
                    Planning an industrial facility or exploring an
                    engineering solution? Tell us what you have in mind.
                    Let's discuss how we can help bring your project to life.
                  </motion.p>

                  <motion.div
                    className="mt-8 flex flex-col gap-3 sm:flex-row"
                    variants={stagger}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.a
                      href="#contact"
                      variants={revealUp}
                      whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                      whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                      className="group inline-flex items-center justify-center gap-3 bg-[#873F4B] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#6F303B]"
                    >
                      Start an Inquiry
                      <ArrowRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </motion.a>

                    <motion.div
                      variants={revealUp}
                      whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                    >
                      <Link
                        to="/services"
                        className="group inline-flex w-full items-center justify-center gap-2 border border-[#D8CEC7] px-6 py-4 text-sm font-semibold text-[#292524] transition-colors hover:border-[#873F4B] hover:text-[#873F4B] sm:w-auto"
                      >
                        Explore Services
                        <ArrowUpRight
                          size={17}
                          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>

                <motion.div
                  className="relative mt-12 border-t border-[#D8CEC7] pt-5"
                  initial={shouldReduceMotion ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.65 }}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#78716C]">
                    Let's move your ideas forward
                  </p>
                </motion.div>
              </motion.div>

              {/* Burgundy service panel */}
              <motion.div
                className="relative flex flex-col justify-between overflow-hidden bg-[#873F4B] px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-10 lg:py-14"
                initial={shouldReduceMotion ? false : { opacity: 0, x: 35 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.18, ease }}
              >
                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full border border-white/10 sm:h-96 sm:w-96"
                  animate={
                    shouldReduceMotion ? undefined : { rotate: -360 }
                  }
                  transition={{
                    duration: 55,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <div className="relative">
                  <motion.div
                    className="flex h-12 w-12 items-center justify-center border border-white/25 bg-white/10"
                    initial={shouldReduceMotion ? false : { scale: 0.7, rotate: -12 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 180, damping: 14, delay: 0.35 }}
                    whileHover={shouldReduceMotion ? undefined : { scale: 1.08, rotate: 5 }}
                  >
                    <Building2 size={23} strokeWidth={1.5} />
                  </motion.div>

                  <motion.p
                    className="mt-8 text-xs font-bold uppercase tracking-[0.22em] text-[#F0E0E3]"
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.42, duration: 0.6 }}
                  >
                    Your Engineering Partner
                  </motion.p>

                  <motion.h2
                    className="mt-4 max-w-md text-3xl font-medium leading-tight tracking-tight sm:text-4xl"
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.65, ease }}
                  >
                    The right conversation. The right solution.
                  </motion.h2>

                  <motion.p
                    className="mt-4 text-sm leading-7 text-white/75"
                    initial={shouldReduceMotion ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.62, duration: 0.6 }}
                  >
                    Share your requirements with our team and start
                    exploring the possibilities for your next project.
                  </motion.p>
                </div>

                <div className="relative mt-10">
                  <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#F0E0E3]">
                    Our capabilities
                  </p>

                  <motion.div
                    className="divide-y divide-white/15 border-y border-white/15"
                    variants={stagger}
                    initial="hidden"
                    animate="visible"
                  >
                    {services.map((service, index) => (
                      <motion.div
                        key={service}
                        variants={revealUp}
                        whileHover={shouldReduceMotion ? undefined : { x: 5 }}
                        className="group flex items-center gap-4 py-4"
                      >
                        <span className="text-xs text-white/50">
                          0{index + 1}
                        </span>

                        <span className="flex-1 text-sm font-medium sm:text-base">
                          {service}
                        </span>

                        <CheckCircle2
                          size={17}
                          strokeWidth={1.5}
                          className="shrink-0 text-[#F0E0E3] transition-transform duration-300 group-hover:scale-110"
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                <motion.div
                  className="relative mt-8 flex items-center gap-3 text-sm text-white/80"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.75, duration: 0.55 }}
                >
                  <MessageSquare size={17} />
                  <span>Tell us about your project</span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Existing contact form and details */}
        <motion.section
          id="contact"
          className="scroll-mt-24 px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.75, ease }}
        >
          <div className="mx-auto max-w-7xl">
            <motion.div
              className="mb-8 max-w-2xl sm:mb-10"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#873F4B]">
                Get in touch
              </p>

              <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
                Let's discuss your requirements.
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#78716C] sm:text-base">
                Share a few details with us using the form below. Our
                existing contact form and its functionality remain in place.
              </p>
            </motion.div>

            <motion.div
              className="border border-[#D8CEC7] bg-white p-3 sm:p-6 lg:p-8"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24, scale: 0.99 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.7, ease }}
            >
              <Contact />
            </motion.div>
          </div>
        </motion.section>

        {/* Closing banner */}
        <motion.section
          className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease }}
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-[#D8CEC7] pt-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-lg font-medium">
                Have a project ready to discuss?
              </p>
              <p className="mt-2 text-sm text-[#78716C]">
                Explore our capabilities before getting in touch.
              </p>
            </div>

            <Link
              to="/services"
              className="group inline-flex items-center gap-2 self-start border-b border-[#873F4B] pb-2 text-sm font-semibold text-[#873F4B] transition-colors hover:text-[#6F303B]"
            >
              Discover Our Services
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </motion.section>
      </motion.main>

      <Footer />
    </>
  );
}

