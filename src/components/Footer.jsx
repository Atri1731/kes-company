
// import { Link } from "react-router-dom";
// import {
//   Phone,
//   Mail,
//   MapPin,
//   ArrowUpRight,
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
//     <footer className="bg-[#111318] text-gray-300">
//       <div className="mx-auto max-w-7xl px-5 py-14 sm:py-16 lg:px-8">
//         <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
//           {/* Company information */}
//           <div>
//             <Link to="/" className="inline-flex items-center gap-3">
//               <img
//   src="kes-logo.png"
//   alt="KES Projects Logo"
//   className="h-12 w-16 shrink-0 object-contain "
// />
//               <span>
//                 <span className="block text-xl font-extrabold text-white">
//                   KES Projects
//                 </span>
//                 <span className="text-xs text-gray-400">
//                   Your Engineering Partner
//                 </span>
//               </span>
//             </Link>

//             <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">
//               Engineering solutions for industrial buildings, steel
//               structures, wastewater treatment systems, and EPC projects.
//             </p>

//             <Link
//               to="/about"
//               className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-red-400"
//             >
//               Learn About Us <ArrowUpRight size={16} />
//             </Link>
//           </div>

//           {/* Quick links */}
//           <div>
//             <h3 className="mb-5 text-lg font-bold text-white">
//               Quick Links
//             </h3>

//             <ul className="space-y-3">
//               {quickLinks.map((link) => (
//                 <li key={link.path}>
//                   <Link
//                     to={link.path}
//                     className="text-sm text-gray-400 transition hover:text-white"
//                   >
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h3 className="mb-5 text-lg font-bold text-white">
//               Our Services
//             </h3>

//             <ul className="space-y-3">
//               {services.map((service) => (
//                 <li key={service}>
//                   <Link
//                     to="/services"
//                     className="text-sm text-gray-400 transition hover:text-white"
//                   >
//                     {service}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact information */}
//           <div>
//             <h3 className="mb-5 text-lg font-bold text-white">
//               Get In Touch
//             </h3>

//             <ul className="space-y-5">
//               <li className="flex items-start gap-3">
//                 <Phone
//                   size={19}
//                   className="mt-1 shrink-0 text-red-400"
//                 />
//                 <div>
//                   <p className="text-xs text-gray-500">Call Us</p>
//                   <a
//                     href="tel:+919099910579"
//                     className="mt-1 block text-sm transition hover:text-white"
//                   >
//                     +91 90999 10579
//                   </a>
//                 </div>
//               </li>

//               <li className="flex items-start gap-3">
//                 <Mail
//                   size={19}
//                   className="mt-1 shrink-0 text-red-400"
//                 />
//                 <div>
//                   <p className="text-xs text-gray-500">Email Us</p>
//                   <a
//                     href="mailto:info@kesprojects.com"
//                     className="mt-1 block break-all text-sm transition hover:text-white"
//                   >
//                     info@kesprojects.com
//                   </a>
//                 </div>
//               </li>

//               <li className="flex items-start gap-3">
//                 <MapPin
//                   size={19}
//                   className="mt-1 shrink-0 text-red-400"
//                 />
//                 <div>
//                   <p className="text-xs text-gray-500">Our Location</p>
//                   <p className="mt-1 text-sm leading-6">
//                     Mother Industrial Park-2, Dehgam, Kaddadara,
//                     Gandhinagar, Gujarat 382305
//                   </p>
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Bottom bar */}
//         <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-gray-400 sm:flex-row sm:items-center sm:justify-between">
//           <p>
//             © {new Date().getFullYear()} KES Projects. All rights reserved.
//           </p>

//           <Link
//             to="/contact"
//             className="transition hover:text-white"
//           >
//             Contact Our Team
//           </Link>
//         </div>
//       </div>
//     </footer>
//   );
// }




import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  MoveUpRight,
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

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#292524] text-white">
      {/* Subtle brand decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/[0.06] sm:h-96 sm:w-96"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 -top-8 h-48 w-48 rounded-full border border-white/[0.06] sm:h-64 sm:w-64"
      />

      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        {/* Top brand strip */}
        <div className="flex flex-col gap-5 border-b border-white/15 py-8 sm:flex-row sm:items-center sm:justify-between sm:py-10">
          <Link to="/" className="group inline-flex min-w-0 items-center gap-3">
            <img
              src="/kes-logo.png"
              alt="KES Projects Logo"
              className="h-12 w-16 shrink-0 object-contain sm:h-14 sm:w-20"
            />

            <span className="min-w-0">
              <span className="block text-xl font-semibold tracking-tight text-white sm:text-2xl">
                KES Projects
              </span>
              <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.16em] text-white/50 sm:text-xs sm:tracking-[0.2em]">
                Your Engineering Partner
              </span>
            </span>
          </Link>

          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 self-start border border-white/25 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-[#D9A8AE] hover:bg-[#873F4B] sm:self-auto"
          >
            Start a Conversation
            <MoveUpRight
              size={17}
              className="text-[#D9A8AE] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
            />
          </Link>
        </div>

        {/* Main footer content */}
        <div className="grid min-w-0 grid-cols-1 gap-10 py-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 sm:py-12 lg:grid-cols-4 lg:gap-10 lg:py-14">
          {/* Company information */}
          <div className="min-w-0">
            <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D9A8AE]">
              <span className="h-px w-7 bg-[#D9A8AE]" />
              Who We Are
            </p>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">
              Engineering solutions for industrial buildings, steel
              structures, wastewater treatment systems, and EPC projects.
            </p>

            <Link
              to="/about"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[#D9A8AE]"
            >
              Learn About Us
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          {/* Quick links */}
          <div className="min-w-0">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
              Quick Links
            </h3>

            <div className="mb-5 mt-3 h-px w-9 bg-[#873F4B]" />

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-white"
                  >
                    <span className="h-px w-0 bg-[#D9A8AE] transition-all duration-300 group-hover:w-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="min-w-0">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
              Our Services
            </h3>

            <div className="mb-5 mt-3 h-px w-9 bg-[#873F4B]" />

            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="group flex items-start gap-3 text-sm leading-6 text-white/55 transition-colors hover:text-white"
                  >
                    <ArrowUpRight
                      size={14}
                      className="mt-1 shrink-0 text-[#D9A8AE] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                    <span>{service}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact information */}
          <div className="min-w-0">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
              Get In Touch
            </h3>

            <div className="mb-5 mt-3 h-px w-9 bg-[#873F4B]" />

            <ul className="space-y-6">
              <li className="flex min-w-0 items-start gap-3">
                <Phone
                  size={17}
                  className="mt-1 shrink-0 text-[#D9A8AE]"
                />
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/40">
                    Call Us
                  </p>
                  <a
                    href="tel:+919099910579"
                    className="mt-1 block break-words text-sm text-white/75 transition-colors hover:text-[#D9A8AE]"
                  >
                    +91 90999 10579
                  </a>
                </div>
              </li>

              <li className="flex min-w-0 items-start gap-3">
                <Mail
                  size={17}
                  className="mt-1 shrink-0 text-[#D9A8AE]"
                />
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/40">
                    Email Us
                  </p>
                  <a
                    href="mailto:info@kesprojects.com"
                    className="mt-1 block break-all text-sm text-white/75 transition-colors hover:text-[#D9A8AE]"
                  >
                    info@kesprojects.com
                  </a>
                </div>
              </li>

              <li className="flex min-w-0 items-start gap-3">
                <MapPin
                  size={17}
                  className="mt-1 shrink-0 text-[#D9A8AE]"
                />
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/40">
                    Our Location
                  </p>
                  <p className="mt-1 text-sm leading-6 text-white/65">
                    Mother Industrial Park-2, Dehgam, Kaddadara,
                    Gandhinagar, Gujarat 382305
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-white/15 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-6 text-white/45">
            © {new Date().getFullYear()} KES Projects. All rights reserved.
          </p>

          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 self-start text-xs font-semibold text-white/65 transition-colors hover:text-[#D9A8AE] sm:self-auto"
          >
            Contact Our Team
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>

      {/* Burgundy accent line */}
      <div className="h-1 bg-[#873F4B]" />
    </footer>
  );
}
