
// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   Building2,
//   Factory,
//   Droplets,
//   HardHat,
//   CheckCircle2,
// } from "lucide-react";

// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const services = [
//   {
//     number: "01",
//     icon: Building2,
//     title: "Pre-Engineered Buildings (PEB)",
//     description:
//       "Engineered building systems designed to support industrial, commercial, and warehouse requirements.",
//     features: [
//       "Customized structural design",
//       "Efficient fabrication and assembly",
//       "Industrial sheds and warehouses",
//       "Solutions tailored to project requirements",
//     ],
//   },
//   {
//     number: "02",
//     icon: Factory,
//     title: "Industrial Steel Structures",
//     description:
//       "Steel structure solutions for industrial facilities, production plants, and specialized infrastructure.",
//     features: [
//       "Structural analysis using engineering software",
//       "CNC plasma and laser cutting capabilities",
//       "Epoxy coating options",
//       "Fabrication and erection coordination",
//     ],
//   },
//   {
//     number: "03",
//     icon: Droplets,
//     title: "Wastewater Treatment Systems",
//     description:
//       "STP and WTP solutions designed around project requirements, treatment needs, and water reuse goals.",
//     features: [
//       "Customized STP and WTP systems",
//       "MBR technology options",
//       "Water recycling and reuse solutions",
//       "PLC and SCADA automation options",
//     ],
//   },
//   {
//     number: "04",
//     icon: HardHat,
//     title: "Engineering, Procurement & Construction",
//     description:
//       "Integrated project delivery support for industrial construction and engineering requirements.",
//     features: [
//       "Civil, structural, and MEP coordination",
//       "Project planning and reporting",
//       "Procurement and supply chain coordination",
//       "Quality checks and handover support",
//     ],
//   },
// ];

// export default function ServicesPage() {
//   return (
//     <>
//       <Navbar />

//       <main className="min-h-screen bg-[#111318] text-white">

// {/* Hero */}
// <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#111318] px-5 py-20 sm:py-24 lg:py-28">
//   {/* Industrial background */}
//   <img
//     src="/images/services-hero.jpg"
//     alt=""
//     aria-hidden="true"
//     className="absolute inset-0 -z-20 h-full w-full object-cover object-center blur-[2px]"
//   />

//   {/* Dark overlay */}
//   <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#111318]/95 via-[#111318]/80 to-[#111318]/45" />

//   {/* Red accent */}
//   <div
//     aria-hidden="true"
//     className="pointer-events-none absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-red-700/20 blur-3xl"
//   />

//   <div className="relative mx-auto max-w-7xl">
//     <div className="flex items-center gap-3">
//       <span className="h-[2px] w-10 bg-red-600" />
//       <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-400">
//         What We Do
//       </p>
//     </div>

//     <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
//       Engineering Solutions
//       <span className="block text-red-500">
//         for Industrial Growth
//       </span>
//     </h1>

//     <p className="mt-6 max-w-2xl text-base leading-8 text-gray-200 sm:text-lg">
//       From pre-engineered buildings to integrated EPC solutions,
//       explore services designed around industrial project needs.
//     </p>

//     <Link
//       to="/contact"
//       className="mt-8 inline-flex items-center gap-2 rounded-md bg-red-700 px-6 py-4 font-bold text-white transition hover:bg-red-600"
//     >
//       Discuss Your Project <ArrowRight size={18} />
//     </Link>
//   </div>
// </section>


//         {/* Services list */}
//         <section className="bg-[#181A20] px-5 py-16 sm:py-20 lg:py-24">
//           <div className="mx-auto max-w-7xl">
//             <div className="mb-12 max-w-2xl">
//               <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-400">
//                 Our Expertise
//               </p>

//               <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
//                 Solutions for Every Stage
//               </h2>

//               <p className="mt-5 leading-7 text-gray-400">
//                 Explore our core service categories and the capabilities
//                 associated with each one.
//               </p>
//             </div>

//             <div className="space-y-5">
//               {services.map((service) => {
//                 const Icon = service.icon;

//                 return (
//                   <article
//                     key={service.number}
//                     className="grid gap-6 rounded-2xl border border-white/10 bg-[#202229] p-6 transition duration-300 hover:border-red-500/40 sm:p-8 lg:grid-cols-[90px_1fr_1fr] lg:items-start lg:gap-10 lg:p-10"
//                   >
//                     <div className="flex items-center gap-4 lg:block">
//                       <span className="text-sm font-bold tracking-widest text-red-400">
//                         {service.number}
//                       </span>

//                       <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-red-500/20 bg-red-600/10 text-red-400 lg:mt-5">
//                         <Icon size={29} />
//                       </div>
//                     </div>

//                     <div>
//                       <h3 className="text-xl font-bold leading-snug text-white sm:text-2xl">
//                         {service.title}
//                       </h3>

//                       <p className="mt-4 leading-7 text-gray-400">
//                         {service.description}
//                       </p>

//                       <Link
//                         to="/contact"
//                         className="mt-5 inline-flex items-center gap-2 font-bold text-red-400 transition hover:text-red-300"
//                       >
//                         Enquire About This Service
//                         <ArrowUpRight size={17} />
//                       </Link>
//                     </div>

//                     <ul className="space-y-4 lg:pt-2">
//                       {service.features.map((feature) => (
//                         <li
//                           key={feature}
//                           className="flex items-start gap-3 text-sm leading-6 text-gray-300"
//                         >
//                           <CheckCircle2
//                             size={19}
//                             className="mt-0.5 shrink-0 text-red-400"
//                           />
//                           <span>{feature}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </article>
//                 );
//               })}
//             </div>
//           </div>
//         </section>

//         {/* CTA */}
//         <section className="px-5 py-16 sm:py-20">
//           <div className="mx-auto max-w-7xl rounded-2xl border border-red-500/20 bg-[#202229] px-6 py-12 text-center sm:px-10 sm:py-16">
//             <p className="text-xs font-bold uppercase tracking-[0.22em] text-red-400">
//               Let's Work Together
//             </p>

//             <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
//               Not Sure Which Service You Need?
//             </h2>

//             <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-300">
//               Tell us about your project. Our team can help you identify the
//               engineering services that fit your requirements.
//             </p>

//             <Link
//               to="/contact"
//               className="mt-8 inline-flex items-center gap-2 rounded-md bg-red-700 px-7 py-4 font-bold text-white transition hover:bg-red-600"
//             >
//               Talk to Our Team <ArrowRight size={18} />
//             </Link>
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </>
//   );
// }




import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Building2,
  Factory,
  Droplets,
  HardHat,
  CheckCircle2,
  MoveUpRight,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const services = [
  {
    number: "01",
    category: "BUILDING SYSTEMS",
    title: "Pre-Engineered Buildings",
    description:
      "Efficient pre-engineered building solutions designed around industrial requirements, functional layouts, and project-specific needs.",
    details: [
      "Industrial and commercial buildings",
      "Customised building design",
      "Coordinated fabrication and erection",
    ],
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Steel fabrication and industrial construction",
  },
  {
    number: "02",
    category: "STRUCTURAL ENGINEERING",
    title: "Industrial Steel Structures",
    description:
      "Steel structure solutions combining engineering coordination, fabrication, and execution for demanding industrial environments.",
    details: [
      "Structural steel fabrication",
      "Industrial sheds and warehouses",
      "Structural erection and coordination",
    ],
    icon: Factory,
    image:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Industrial steel structures",
  },
  {
    number: "03",
    category: "WATER INFRASTRUCTURE",
    title: "Industrial Wastewater Treatment",
    description:
      "Wastewater treatment infrastructure planned around operational requirements, environmental responsibilities, and site conditions.",
    details: [
      "Sewage treatment plants (STP)",
      "Wastewater treatment plants (WTP)",
      "Project-specific treatment solutions",
    ],
    icon: Droplets,
    image:
      "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Water infrastructure and treatment facilities",
  },
  {
    number: "04",
    category: "END-TO-END DELIVERY",
    title: "EPC Solutions",
    description:
      "Integrated engineering, procurement, and construction coordination to help bring industrial projects from planning through execution.",
    details: [
      "Engineering and project planning",
      "Procurement coordination",
      "Construction and execution management",
    ],
    icon: HardHat,
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Industrial construction project",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#F7F5F1] text-[#292524]">

        {/* Hero — editorial introduction */}
        <section className="relative overflow-hidden border-b border-[#D8CEC7]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-36 h-[420px] w-[420px] rounded-full border border-[#C99AA2]/40 sm:h-[580px] sm:w-[580px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-20 h-[290px] w-[290px] rounded-full border border-[#C99AA2]/40 sm:h-[420px] sm:w-[420px]"
          />

          <div className="relative mx-auto grid max-w-[1440px] gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:px-12 lg:py-28">
            <div>
              <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#873F4B] sm:text-xs">
                <span className="h-px w-9 bg-[#873F4B]" />
                What We Do
              </p>

              <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
                Engineered for
                <span className="block text-[#873F4B]">
                  industry. Built
                </span>
                to perform.
              </h1>
            </div>

            <div className="relative lg:pb-2">
              <p className="max-w-lg text-base leading-8 text-[#78716C] sm:text-lg">
                From pre-engineered buildings to industrial steel
                structures, water treatment systems, and EPC projects,
                KES Group delivers solutions shaped around your
                requirements.
              </p>

              <Link
                to="/contact"
                className="group mt-7 inline-flex items-center gap-3 border-b border-[#873F4B] pb-2 text-sm font-semibold text-[#873F4B] transition-colors hover:text-[#71323D]"
              >
                Discuss your project
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </div>

          <div className="relative border-t border-[#D8CEC7] bg-[#F0E0E3]/60">
            <div className="mx-auto grid max-w-[1440px] grid-cols-2 divide-x divide-[#D8CEC7] px-5 sm:px-8 lg:grid-cols-4 lg:px-12">
              {[
                "Building Systems",
                "Steel Structures",
                "Water Infrastructure",
                "EPC Solutions",
              ].map((label, index) => (
                <a
                  key={label}
                  href={`#service-${index + 1}`}
                  className="group flex min-h-20 items-center justify-between gap-2 px-3 py-5 text-xs font-semibold text-[#57534E] transition-colors hover:text-[#873F4B] sm:px-5 sm:text-sm"
                >
                  <span>{label}</span>
                  <MoveUpRight
                    size={15}
                    className="shrink-0 text-[#873F4B] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Service showcase — alternating image and content */}
        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-[1440px]">

            <div className="mb-12 flex flex-col justify-between gap-5 sm:mb-16 sm:flex-row sm:items-end">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#873F4B]">
                  Our Expertise
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
                  Solutions for every
                  <span className="text-[#873F4B]"> stage.</span>
                </h2>
              </div>

              <p className="max-w-sm text-sm leading-7 text-[#78716C]">
                Explore our core capabilities and find the right
                starting point for your next industrial project.
              </p>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {services.map((service, index) => {
                const Icon = service.icon;
                const reversed = index % 2 === 1;

                return (
                  <article
                    key={service.number}
                    id={`service-${index + 1}`}
                    className="scroll-mt-28 overflow-hidden border border-[#E3D8D2] bg-white"
                  >
                    <div
                      className={`grid lg:grid-cols-2 ${
                        reversed ? "lg:[&>div:first-child]:order-2" : ""
                      }`}
                    >
                      {/* Image panel */}
                      <div className="group relative min-h-[280px] overflow-hidden bg-[#E8D9D9] sm:min-h-[360px] lg:min-h-[440px]">
                        <img
                          src={service.image}
                          alt={service.imageAlt}
                          loading="lazy"
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#292524]/70 via-[#292524]/10 to-transparent" />

                        <span className="absolute left-5 top-5 border border-white/50 bg-[#292524]/20 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm sm:left-7 sm:top-7">
                          {service.category}
                        </span>

                        <span className="absolute bottom-5 right-5 text-6xl font-semibold tracking-tighter text-white/70 sm:bottom-7 sm:right-7 sm:text-8xl">
                          {service.number}
                        </span>
                      </div>

                      {/* Text panel */}
                      <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12 xl:p-14">
                        <div className="flex items-center justify-between gap-4">
                          <span className="flex h-12 w-12 items-center justify-center bg-[#F0E0E3] text-[#873F4B]">
                            <Icon size={23} strokeWidth={1.6} />
                          </span>

                          <span className="font-mono text-xs tracking-widest text-[#B9A5A1]">
                            SERVICE / {service.number}
                          </span>
                        </div>

                        <h3 className="mt-7 max-w-lg text-2xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                          {service.title}
                        </h3>

                        <p className="mt-5 text-sm leading-7 text-[#78716C] sm:text-base sm:leading-8">
                          {service.description}
                        </p>

                        <div className="mt-6 space-y-3 border-t border-[#E5DCD6] pt-5">
                          {service.details.map((detail) => (
                            <div
                              key={detail}
                              className="flex items-start gap-3 text-sm leading-6 text-[#57534E]"
                            >
                              <CheckCircle2
                                size={17}
                                className="mt-0.5 shrink-0 text-[#873F4B]"
                              />
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>

                        <div className="mt-8">
                          <Link
                            to="/contact"
                            className="group inline-flex items-center gap-3 bg-[#873F4B] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#71323D]"
                          >
                            Enquire about this service
                            <ArrowUpRight
                              size={17}
                              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Closing call to action */}
        <section className="px-5 pb-16 sm:px-8 sm:pb-24 lg:px-12">
          <div className="relative mx-auto max-w-[1440px] overflow-hidden bg-[#F0E0E3] px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border border-[#C99AA2]/50 sm:h-80 sm:w-80"
            />

            <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div className="max-w-3xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#873F4B] sm:text-xs">
                  Have a project in mind?
                </p>

                <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  Let’s build something
                  <span className="text-[#873F4B]"> that lasts.</span>
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#6F5A5D] sm:text-base">
                  Tell us about your requirements and let’s explore
                  the right engineering solution for your project.
                </p>
              </div>

              <Link
                to="/contact"
                className="group inline-flex shrink-0 items-center justify-center gap-3 self-start bg-[#873F4B] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#71323D] lg:self-auto"
              >
                Request a Quote
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
