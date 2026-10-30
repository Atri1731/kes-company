

// import { Link } from "react-router-dom";
// import {
//   Phone,
//   Mail,
//   MapPin,
//   ArrowUpRight,
//   MoveUpRight,
// } from "lucide-react";

// const quickLinks = [
//   { label: "Home", path: "/" },
//   { label: "About Us", path: "/about" },
//   { label: "Services", path: "/services" },
//   { label: "Projects", path: "/projects" },
//   { label: "Clients", path: "/clients" },
//   { label: "Contact Us", path: "/contact" },
// ];

// const services = [
//   "Pre-Engineered Buildings",
//   "Industrial Steel Structures",
//   "STP / WTP Systems",
//   "EPC Solutions",
// ];

// export default function Footer() {
//   return (
//     <footer className="relative overflow-hidden bg-[#292524] text-white">
//       {/* Subtle brand decoration */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/[0.06] sm:h-96 sm:w-96"
//       />
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -right-8 -top-8 h-48 w-48 rounded-full border border-white/[0.06] sm:h-64 sm:w-64"
//       />

//       <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
//         {/* Top brand strip */}
//         <div className="flex flex-col gap-5 border-b border-white/15 py-8 sm:flex-row sm:items-center sm:justify-between sm:py-10">
//           <Link to="/" className="group inline-flex min-w-0 items-center gap-3">
//             <img
//               src="/kes-logo.png"
//               alt="KES Projects Logo"
//               className="h-12 w-16 shrink-0 object-contain sm:h-14 sm:w-20"
//             />

//             <span className="min-w-0">
//               <span className="block text-xl font-semibold tracking-tight text-white sm:text-2xl">
//                 KES Projects
//               </span>
//               <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.16em] text-white/50 sm:text-xs sm:tracking-[0.2em]">
//                 Your Engineering Partner
//               </span>
//             </span>
//           </Link>

//           <Link
//             to="/contact"
//             className="group inline-flex items-center gap-3 self-start border border-white/25 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-[#D9A8AE] hover:bg-[#873F4B] sm:self-auto"
//           >
//             Start a Conversation
//             <MoveUpRight
//               size={17}
//               className="text-[#D9A8AE] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
//             />
//           </Link>
//         </div>

//         {/* Main footer content */}
//         <div className="grid min-w-0 grid-cols-1 gap-10 py-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 sm:py-12 lg:grid-cols-4 lg:gap-10 lg:py-14">
//           {/* Company information */}
//           <div className="min-w-0">
//             <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D9A8AE]">
//               <span className="h-px w-7 bg-[#D9A8AE]" />
//               Who We Are
//             </p>

//             <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">
//               Engineering solutions for industrial buildings, steel
//               structures, wastewater treatment systems, and EPC projects.
//             </p>

//             <Link
//               to="/about"
//               className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[#D9A8AE]"
//             >
//               Learn About Us
//               <ArrowUpRight
//                 size={16}
//                 className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
//               />
//             </Link>
//           </div>

//           {/* Quick links */}
//           <div className="min-w-0">
//             <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
//               Quick Links
//             </h3>

//             <div className="mb-5 mt-3 h-px w-9 bg-[#873F4B]" />

//             <ul className="space-y-3">
//               {quickLinks.map((link) => (
//                 <li key={link.path}>
//                   <Link
//                     to={link.path}
//                     className="group inline-flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-white"
//                   >
//                     <span className="h-px w-0 bg-[#D9A8AE] transition-all duration-300 group-hover:w-3" />
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Services */}
//           <div className="min-w-0">
//             <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
//               Our Services
//             </h3>

//             <div className="mb-5 mt-3 h-px w-9 bg-[#873F4B]" />

//             <ul className="space-y-4">
//               {services.map((service) => (
//                 <li key={service}>
//                   <Link
//                     to="/services"
//                     className="group flex items-start gap-3 text-sm leading-6 text-white/55 transition-colors hover:text-white"
//                   >
//                     <ArrowUpRight
//                       size={14}
//                       className="mt-1 shrink-0 text-[#D9A8AE] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
//                     />
//                     <span>{service}</span>
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact information */}
//           <div className="min-w-0">
//             <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
//               Get In Touch
//             </h3>

//             <div className="mb-5 mt-3 h-px w-9 bg-[#873F4B]" />

//             <ul className="space-y-6">
//               <li className="flex min-w-0 items-start gap-3">
//                 <Phone
//                   size={17}
//                   className="mt-1 shrink-0 text-[#D9A8AE]"
//                 />
//                 <div className="min-w-0">
//                   <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/40">
//                     Call Us
//                   </p>
//                   <a
//                     href="tel:+919099910579"
//                     className="mt-1 block break-words text-sm text-white/75 transition-colors hover:text-[#D9A8AE]"
//                   >
//                     +91 90999 10579
//                   </a>
//                 </div>
//               </li>

//               <li className="flex min-w-0 items-start gap-3">
//                 <Mail
//                   size={17}
//                   className="mt-1 shrink-0 text-[#D9A8AE]"
//                 />
//                 <div className="min-w-0">
//                   <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/40">
//                     Email Us
//                   </p>
//                   <a
//                     href="mailto:info@kesprojects.com"
//                     className="mt-1 block break-all text-sm text-white/75 transition-colors hover:text-[#D9A8AE]"
//                   >
//                     info@kesprojects.com
//                   </a>
//                 </div>
//               </li>

//               <li className="flex min-w-0 items-start gap-3">
//                 <MapPin
//                   size={17}
//                   className="mt-1 shrink-0 text-[#D9A8AE]"
//                 />
//                 <div className="min-w-0">
//                   <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/40">
//                     Our Location
//                   </p>
//                   <p className="mt-1 text-sm leading-6 text-white/65">
//                     Mother Industrial Park-2, Dehgam, Kaddadara,
//                     Gandhinagar, Gujarat 382305
//                   </p>
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Bottom bar */}
//         <div className="flex flex-col gap-4 border-t border-white/15 py-6 sm:flex-row sm:items-center sm:justify-between">
//           <p className="text-xs leading-6 text-white/45">
//             © {new Date().getFullYear()} KES Projects. All rights reserved.
//           </p>

//           <Link
//             to="/contact"
//             className="group inline-flex items-center gap-2 self-start text-xs font-semibold text-white/65 transition-colors hover:text-[#D9A8AE] sm:self-auto"
//           >
//             Contact Our Team
//             <ArrowUpRight
//               size={14}
//               className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
//             />
//           </Link>
//         </div>
//       </div>

//       {/* Burgundy accent line */}
//       <div className="h-1 bg-[#873F4B]" />
//     </footer>
//   );
// }





import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Clients", path: "/clients" },
  { label: "Contact Us", path: "/contact" },
];

const services = [
  "Pre-Engineered Buildings",
  "Industrial Steel Structures",
  "STP / WTP Systems",
  "EPC Solutions",
];

const ease = [0.22, 1, 0.36, 1];

export default function Footer() {
  const reduceMotion = useReducedMotion();

  const reveal = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 22 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.15 },
        transition: { duration: 0.65, ease },
      };

  return (
    <footer className="relative overflow-hidden bg-[#242120] text-white">
      {/* Ambient industrial linework */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-0 h-[430px] w-[430px] rounded-full border border-white/[0.055]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-16 top-16 h-[300px] w-[300px] rounded-full border border-white/[0.055]" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-20 left-0 h-px w-1/3 bg-gradient-to-r from-[#873F4B]/60 to-transparent" />

      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        {/* Large editorial call to action */}
        <motion.section
          {...reveal}
          className="grid gap-7 border-b border-white/15 py-12 sm:py-16 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12 lg:py-20"
        >
          <div className="max-w-4xl">
            <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#D9A8AE] sm:text-xs">
              <span className="h-px w-9 bg-[#D9A8AE]" />
              Have a project in mind?
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Let's build something
              <span className="block text-[#D9A8AE]">that lasts.</span>
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
              Tell us what you are planning. Our team is ready to help turn your industrial vision into a dependable reality.
            </p>
          </div>

          <Link
            to="/contact"
            className="group inline-flex min-h-[58px] items-center justify-between gap-8 self-start bg-[#873F4B] px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#9A4B58] hover:shadow-[0_14px_30px_rgba(135,63,75,0.25)] lg:min-w-[210px] lg:self-end"
          >
            Start a Project
            <span className="flex h-8 w-8 items-center justify-center border border-white/30 transition-all duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-[#873F4B]">
              <ArrowUpRight size={17} />
            </span>
          </Link>
        </motion.section>

        {/* Footer information grid */}
        <div className="grid gap-10 py-12 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-[1.25fr_0.75fr_1fr_1.15fr] lg:gap-12 lg:py-14">
          {/* Brand */}
          <motion.div {...reveal} className="min-w-0">
            <Link to="/" className="inline-flex items-center gap-3">
              <img
                src="/kes-logo.png"
                alt="KES Projects"
                className="h-14 w-[88px] object-contain"
              />
              <span>
                <span className="block text-xl font-bold tracking-tight text-white">KES Projects</span>
                <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D9A8AE]">
                  Your Engineering Partner
                </span>
              </span>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/55">
              Engineering solutions for industrial buildings, steel structures, wastewater treatment systems, and EPC projects.
            </p>

            <Link
              to="/about"
              className="group mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#D9A8AE] transition-colors hover:text-white"
            >
              Discover KES
              <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

          </motion.div>

          {/* Explore */}
          <motion.div {...reveal} className="min-w-0">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#D9A8AE]">
              Explore
            </h3>
            <div className="mb-6 mt-4 h-px w-10 bg-[#873F4B]" />
            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-white"
                  >
                    <span className="h-px w-0 bg-[#D9A8AE] transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Capabilities */}
          <motion.div {...reveal} className="min-w-0">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#D9A8AE]">
              Capabilities
            </h3>
            <div className="mb-6 mt-4 h-px w-10 bg-[#873F4B]" />
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="group flex items-start gap-3 text-sm leading-6 text-white/55 transition-colors hover:text-white"
                  >
                    <span className="mt-0.5 font-mono text-[10px] text-[#A66B75]">
                      0{index + 1}
                    </span>
                    <span>{service}</span>
                    <ArrowUpRight size={13} className="ml-auto mt-1 shrink-0 opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div {...reveal} className="min-w-0">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#D9A8AE]">
              Get in touch
            </h3>
            <div className="mb-6 mt-4 h-px w-10 bg-[#873F4B]" />

            <ul className="space-y-5">
              <li className="flex min-w-0 items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/10 bg-white/[0.04] text-[#D9A8AE]">
                  <Phone size={15} />
                </span>
                <div className="min-w-0 pt-0.5">
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/35">Call us</p>
                  <a href="tel:+919099910579" className="mt-1 block text-sm text-white/75 transition-colors hover:text-[#D9A8AE]">
                    +91 90999 10579
                  </a>
                </div>
              </li>

              <li className="flex min-w-0 items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/10 bg-white/[0.04] text-[#D9A8AE]">
                  <Mail size={15} />
                </span>
                <div className="min-w-0 pt-0.5">
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/35">Email us</p>
                  <a href="mailto:info@kesprojects.com" className="mt-1 block break-all text-sm text-white/75 transition-colors hover:text-[#D9A8AE]">
                    info@kesprojects.com
                  </a>
                </div>
              </li>

              <li className="flex min-w-0 items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/10 bg-white/[0.04] text-[#D9A8AE]">
                  <MapPin size={15} />
                </span>
                <div className="min-w-0 pt-0.5">
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/35">Visit us</p>
                  <p className="mt-1 text-sm leading-6 text-white/60">
                    Mother Industrial Park-2, Dehgam, Kaddadara, Gandhinagar, Gujarat 382305
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom signature bar */}
        <div className="flex flex-col gap-4 border-t border-white/15 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] leading-6 text-white/40">
            © {new Date().getFullYear()} KES Projects. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/30">
              Engineered with purpose
            </span>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 text-xs font-semibold text-white/65 transition-colors hover:text-[#D9A8AE]"
            >
              Contact our team
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group flex h-9 w-9 items-center justify-center border border-white/20 text-white/65 transition-all hover:border-[#D9A8AE] hover:bg-[#873F4B] hover:text-white"
              aria-label="Back to top"
            >
              <ArrowUpRight size={16} className="rotate-[-45deg] transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Brand finish */}
      <div className="h-[3px] bg-gradient-to-r from-[#873F4B] via-[#C99AA2] to-[#873F4B]" />
    </footer>
  );
}

