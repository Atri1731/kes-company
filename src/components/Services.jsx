

// import { Link } from "react-router-dom";
// import {
//   ArrowUpRight,
//   ArrowRight,
//   Building2,
//   Factory,
//   Droplets,
//   HardHat,
// } from "lucide-react";

// const services = [
//   {
//     number: "01",
//     icon: Building2,
//     title: "Pre-Engineered Buildings",
//     description:
//       "Engineered building solutions for industrial facilities, production units, and warehouses.",
//     image:
//       "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85",
//     label: "INDUSTRIAL BUILDINGS",
//   },
//   {
//     number: "02",
//     icon: Factory,
//     title: "Industrial Steel Structures",
//     description:
//       "Structural steel solutions designed around industrial requirements and project specifications.",
//     image:
//       "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=85",
//     label: "STEEL ENGINEERING",
//   },
//   {
//     number: "03",
//     icon: Droplets,
//     title: "STP / WTP Systems",
//     description:
//       "Wastewater treatment solutions focused on treatment needs, water reuse, and efficient operation.",
//     image:
//       "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&w=900&q=85",
//     label: "WATER TREATMENT",
//   },
//   {
//     number: "04",
//     icon: HardHat,
//     title: "EPC Solutions",
//     description:
//       "Integrated engineering, procurement, and construction coordination for industrial projects.",
//     image:
//       "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=85",
//     label: "PROJECT EXECUTION",
//   },
// ];

// export default function Services() {
//   const featured = services[0];
//   const FeaturedIcon = featured.icon;

//   return (
//     <section
//       id="services"
//       className="overflow-hidden bg-[#FCFAF8] py-20 text-[#292524] sm:py-28 lg:py-32"
//     >
//       <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
//         {/* Editorial heading */}
//         <div className="mb-12 flex items-center justify-between border-b border-[#E6DED8] pb-5 sm:mb-16">
//           <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#873F4B]">
//             <span className="h-2 w-2 rounded-full bg-[#873F4B]" />
//             What We Do
//           </p>

//           <span className="hidden text-[10px] uppercase tracking-[0.18em] text-[#78716C] sm:block">
//             Engineering · Procurement · Construction
//           </span>
//         </div>

//         <div className="mb-12 grid gap-7 lg:mb-16 lg:grid-cols-12 lg:items-end">
//           <div className="lg:col-span-8">
//             <h2 className="max-w-5xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-7xl">
//               Engineering Solutions
//               <span className="block text-[#873F4B]">
//                 Built Around You
//               </span>
//             </h2>
//           </div>

//           <div className="lg:col-span-4 lg:pb-2">
//             <p className="max-w-md text-sm leading-7 text-[#78716C] sm:text-base">
//               Practical engineering and construction capabilities for
//               industrial facilities and infrastructure projects.
//             </p>

//             <Link
//               to="/services"
//               className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#873F4B] transition-colors hover:text-[#632D37]"
//             >
//               View All Services
//               <ArrowUpRight
//                 size={18}
//                 className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
//               />
//             </Link>
//           </div>
//         </div>

//         {/* Featured service */}
//         <Link
//           to="/services"
//           className="group relative grid overflow-hidden border border-[#E7DED7] bg-white lg:grid-cols-12"
//         >
//           <div className="relative min-h-[300px] overflow-hidden sm:min-h-[400px] lg:col-span-7 lg:min-h-[540px]">
//             <img
//               src={featured.image}
//               alt={featured.title}
//               loading="lazy"
//               className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
//             />

//             <div className="absolute inset-0 bg-gradient-to-t from-[#171514]/65 via-transparent to-transparent" />

//             <span className="absolute left-5 top-5 border border-white/40 bg-white/10 px-3 py-2 text-[10px] font-semibold tracking-[0.16em] text-white backdrop-blur-md sm:left-7 sm:top-7">
//               {featured.label}
//             </span>

//             <span className="absolute bottom-6 left-5 text-sm font-medium tracking-[0.15em] text-white/80 sm:bottom-8 sm:left-8">
//               SERVICE / {featured.number}
//             </span>
//           </div>

//           <div className="flex flex-col justify-center p-7 sm:p-10 lg:col-span-5 lg:p-12 xl:p-16">
//             <div className="flex h-12 w-12 items-center justify-center border border-[#E7D8D8] bg-[#FCF6F5] text-[#873F4B]">
//               <FeaturedIcon size={24} strokeWidth={1.5} />
//             </div>

//             <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#873F4B]">
//               Featured Capability
//             </p>

//             <h3 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl xl:text-5xl">
//               {featured.title}
//             </h3>

//             <p className="mt-5 text-sm leading-7 text-[#78716C] sm:text-base">
//               {featured.description}
//             </p>

//             <div className="mt-8 flex items-center justify-between border-t border-[#EAE3DE] pt-6">
//               <span className="text-sm font-semibold">
//                 Explore Service
//               </span>

//               <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D8CEC7] text-[#873F4B] transition-all duration-300 group-hover:border-[#873F4B] group-hover:bg-[#873F4B] group-hover:text-white">
//                 <ArrowUpRight size={20} />
//               </span>
//             </div>
//           </div>
//         </Link>

//         {/* Remaining services */}
//        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
//           {services.slice(1).map((service) => {
//             const Icon = service.icon;

//             return (
//               <Link
//                 key={service.number}
//                 to="/services"
//                 className="group overflow-hidden border border-[#E7DED7] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(41,37,36,0.08)]"
//               >
//                 <div className="relative h-[220px] overflow-hidden bg-[#EDE8E3] sm:h-[250px]">
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     loading="lazy"
//                     className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
//                   />

//                   <div className="absolute inset-0 bg-gradient-to-t from-[#171514]/55 to-transparent" />

//                   <span className="absolute left-5 top-5 text-xs font-semibold tracking-[0.15em] text-white">
//                     {service.number}
//                   </span>

//                   <span className="absolute bottom-5 left-5 text-[9px] font-semibold tracking-[0.18em] text-white/90">
//                     {service.label}
//                   </span>

//                   <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/60 text-white transition-all duration-300 group-hover:border-[#873F4B] group-hover:bg-[#873F4B]">
//                     <ArrowUpRight size={18} />
//                   </span>
//                 </div>

//                 <div className="p-6 sm:p-7">
//                   <div className="flex items-start gap-3">
//                     <Icon
//                       size={21}
//                       strokeWidth={1.6}
//                       className="mt-1 shrink-0 text-[#873F4B]"
//                     />

//                     <h3 className="text-xl font-semibold leading-snug tracking-[-0.025em]">
//                       {service.title}
//                     </h3>
//                   </div>

//                   <p className="mt-4 text-sm leading-7 text-[#78716C]">
//                     {service.description}
//                   </p>

//                   <div className="mt-6 flex items-center gap-2 border-t border-[#EEE7E1] pt-5 text-sm font-semibold text-[#873F4B]">
//                     Learn More
//                     <ArrowRight
//                       size={17}
//                       className="transition-transform duration-300 group-hover:translate-x-1"
//                     />
//                   </div>
//                 </div>
//               </Link>
//             );
//           })}
//         </div>

//         {/* Closing call to action */}
//         <div className="relative mt-12 overflow-hidden bg-[#292524] p-7 text-white sm:mt-16 sm:p-10 lg:p-14">
//           <div
//             aria-hidden="true"
//             className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full border border-white/10"
//           />
//           <div
//             aria-hidden="true"
//             className="pointer-events-none absolute -right-4 -top-12 h-40 w-40 rounded-full border border-white/10"
//           />

//           <div className="relative flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
//             <div className="max-w-2xl">
//               <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D9A8AE]">
//                 Start a Conversation
//               </p>

//               <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.035em] sm:text-3xl lg:text-4xl">
//                 Engineering your next project?
//               </h3>
//             </div>

//             <Link
//               to="/contact"
//               className="group inline-flex items-center justify-center gap-3 self-start bg-[#873F4B] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#71323D] sm:self-center"
//             >
//               Get in Touch
//               <ArrowUpRight
//                 size={18}
//                 className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
//               />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  Building2,
  Factory,
  Droplets,
  HardHat,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Building2,
    title: "Pre-Engineered Buildings",
    description:
      "Engineered building solutions for industrial facilities, production units, and warehouses.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85",
    label: "INDUSTRIAL BUILDINGS",
  },
  {
    number: "02",
    icon: Factory,
    title: "Industrial Steel Structures",
    description:
      "Structural steel solutions designed around industrial requirements and project specifications.",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=85",
    label: "STEEL ENGINEERING",
  },
  {
    number: "03",
    icon: Droplets,
    title: "STP / WTP Systems",
    description:
      "Wastewater treatment solutions focused on treatment needs, water reuse, and efficient operation.",
    image:
      "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&w=900&q=85",
    label: "WATER TREATMENT",
  },
  {
    number: "04",
    icon: HardHat,
    title: "EPC Solutions",
    description:
      "Integrated engineering, procurement, and construction coordination for industrial projects.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=85",
    label: "PROJECT EXECUTION",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function AnimatedImage({ src, alt, className = "" }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.img
      src={src}
      alt={alt}
      loading="lazy"
      initial={reduceMotion ? false : { scale: 1.12 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reduceMotion ? 0 : 1.3,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    />
  );
}

export default function Services() {
  const reduceMotion = useReducedMotion();
  const featured = services[0];
  const FeaturedIcon = featured.icon;

  return (
    <section
      id="services"
      className="overflow-hidden bg-[#FCFAF8] py-20 text-[#292524] sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
        {/* Editorial heading */}
        <motion.div
          className="mb-12 flex items-center justify-between border-b border-[#E6DED8] pb-5 sm:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={reveal}
        >
          <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#873F4B]">
            <span className="h-2 w-2 rounded-full bg-[#873F4B]" />
            What We Do
          </p>

          <span className="hidden text-[10px] uppercase tracking-[0.18em] text-[#78716C] sm:block">
            Engineering · Procurement · Construction
          </span>
        </motion.div>

        {/* Section title */}
        <div className="mb-12 grid gap-7 lg:mb-16 lg:grid-cols-12 lg:items-end">
          <motion.div
            className="lg:col-span-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={reveal}
          >
            <h2 className="max-w-5xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-7xl">
              Engineering Solutions
              <span className="block text-[#873F4B]">
                Built Around You
              </span>
            </h2>
          </motion.div>

          <motion.div
            className="lg:col-span-4 lg:pb-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={reveal}
          >
            <p className="max-w-md text-sm leading-7 text-[#78716C] sm:text-base">
              Practical engineering and construction capabilities for
              industrial facilities and infrastructure projects.
            </p>

            <Link
              to="/services"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#873F4B] transition-colors hover:text-[#632D37]"
            >
              View All Services
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </motion.div>
        </div>

        {/* Featured service */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={reveal}
          whileHover={reduceMotion ? undefined : { y: -4 }}
          transition={{ duration: 0.35 }}
        >
          <Link
            to="/services"
            className="group relative grid overflow-hidden border border-[#E7DED7] bg-white lg:grid-cols-12"
          >
            <div className="relative min-h-[300px] overflow-hidden bg-[#EDE8E3] sm:min-h-[400px] lg:col-span-7 lg:min-h-[540px]">
              <AnimatedImage
                src={featured.image}
                alt={featured.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#171514]/65 via-transparent to-transparent" />

              <span className="absolute left-5 top-5 border border-white/40 bg-white/10 px-3 py-2 text-[10px] font-semibold tracking-[0.16em] text-white backdrop-blur-md sm:left-7 sm:top-7">
                {featured.label}
              </span>

              <span className="absolute bottom-6 left-5 text-sm font-medium tracking-[0.15em] text-white/80 sm:bottom-8 sm:left-8">
                SERVICE / {featured.number}
              </span>
            </div>

            <div className="flex flex-col justify-center p-7 sm:p-10 lg:col-span-5 lg:p-12 xl:p-16">
              <div className="flex h-12 w-12 items-center justify-center border border-[#E7D8D8] bg-[#FCF6F5] text-[#873F4B]">
                <FeaturedIcon size={24} strokeWidth={1.5} />
              </div>

              <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#873F4B]">
                Featured Capability
              </p>

              <h3 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl xl:text-5xl">
                {featured.title}
              </h3>

              <p className="mt-5 text-sm leading-7 text-[#78716C] sm:text-base">
                {featured.description}
              </p>

              <div className="mt-8 flex items-center justify-between border-t border-[#EAE3DE] pt-6">
                <span className="text-sm font-semibold">
                  Explore Service
                </span>

                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D8CEC7] text-[#873F4B] transition-all duration-300 group-hover:border-[#873F4B] group-hover:bg-[#873F4B] group-hover:text-white">
                  <ArrowUpRight size={20} />
                </span>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Remaining service cards */}
        <motion.div
          className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: reduceMotion ? 0 : 0.15,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
        >
          {services.slice(1).map((service) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.number}
                variants={reveal}
                whileHover={reduceMotion ? undefined : { y: -6 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  to="/services"
                  className="group block h-full overflow-hidden border border-[#E7DED7] bg-white transition-shadow duration-300 hover:shadow-[0_18px_45px_rgba(41,37,36,0.08)]"
                >
                  <div className="relative h-[220px] overflow-hidden bg-[#EDE8E3] sm:h-[250px]">
                    <AnimatedImage
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#171514]/55 to-transparent" />

                    <span className="absolute left-5 top-5 text-xs font-semibold tracking-[0.15em] text-white">
                      {service.number}
                    </span>

                    <span className="absolute bottom-5 left-5 text-[9px] font-semibold tracking-[0.18em] text-white/90">
                      {service.label}
                    </span>

                    <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/60 text-white transition-all duration-300 group-hover:border-[#873F4B] group-hover:bg-[#873F4B]">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>

                  <div className="p-6 sm:p-7">
                    <div className="flex items-start gap-3">
                      <Icon
                        size={21}
                        strokeWidth={1.6}
                        className="mt-1 shrink-0 text-[#873F4B]"
                      />

                      <h3 className="text-xl font-semibold leading-snug tracking-[-0.025em]">
                        {service.title}
                      </h3>
                    </div>

                    <p className="mt-4 text-sm leading-7 text-[#78716C]">
                      {service.description}
                    </p>

                    <div className="mt-6 flex items-center gap-2 border-t border-[#EEE7E1] pt-5 text-sm font-semibold text-[#873F4B]">
                      Learn More
                      <ArrowRight
                        size={17}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Closing call to action */}
        <motion.div
          className="relative mt-12 overflow-hidden bg-[#292524] p-7 text-white sm:mt-16 sm:p-10 lg:p-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={reveal}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full border border-white/10"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-4 -top-12 h-40 w-40 rounded-full border border-white/10"
          />

          <div className="relative flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D9A8AE]">
                Start a Conversation
              </p>

              <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.035em] sm:text-3xl lg:text-4xl">
                Engineering your next project?
              </h3>
            </div>

            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-3 self-start bg-[#873F4B] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#71323D] sm:self-center"
            >
              Get in Touch
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
