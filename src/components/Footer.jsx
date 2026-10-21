
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
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
    <footer className="bg-[#111318] text-gray-300">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company information */}
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-700 text-xl font-black text-white shadow-lg shadow-red-950/30">
              </span>

              <span>
                <span className="block text-xl font-extrabold text-white">
                  KES Projects
                </span>
                <span className="text-xs text-gray-400">
                  Your Engineering Partner
                </span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">
              Engineering solutions for industrial buildings, steel
              structures, wastewater treatment systems, and EPC projects.
            </p>

            <Link
              to="/about"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-red-400"
            >
              Learn About Us <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-5 text-lg font-bold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-lg font-bold text-white">
              Our Services
            </h3>

            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-sm text-gray-400 transition hover:text-white"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact information */}
          <div>
            <h3 className="mb-5 text-lg font-bold text-white">
              Get In Touch
            </h3>

            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <Phone
                  size={19}
                  className="mt-1 shrink-0 text-red-400"
                />
                <div>
                  <p className="text-xs text-gray-500">Call Us</p>
                  <a
                    href="tel:+919099910579"
                    className="mt-1 block text-sm transition hover:text-white"
                  >
                    +91 90999 10579
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Mail
                  size={19}
                  className="mt-1 shrink-0 text-red-400"
                />
                <div>
                  <p className="text-xs text-gray-500">Email Us</p>
                  <a
                    href="mailto:info@kesprojects.com"
                    className="mt-1 block break-all text-sm transition hover:text-white"
                  >
                    info@kesprojects.com
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <MapPin
                  size={19}
                  className="mt-1 shrink-0 text-red-400"
                />
                <div>
                  <p className="text-xs text-gray-500">Our Location</p>
                  <p className="mt-1 text-sm leading-6">
                    Mother Industrial Park-2, Dehgam, Kaddadara,
                    Gandhinagar, Gujarat 382305
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} KES Projects. All rights reserved.
          </p>

          <Link
            to="/contact"
            className="transition hover:text-white"
          >
            Contact Our Team
          </Link>
        </div>
      </div>
    </footer>
  );
}
