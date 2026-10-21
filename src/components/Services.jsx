
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
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
  },
  {
    number: "02",
    icon: Factory,
    title: "Industrial Steel Structures",
    description:
      "Structural steel solutions designed around industrial requirements and project specifications.",
  },
  {
    number: "03",
    icon: Droplets,
    title: "STP / WTP Systems",
    description:
      "Wastewater treatment solutions focused on treatment needs, water reuse, and efficient operation.",
  },
  {
    number: "04",
    icon: HardHat,
    title: "EPC Solutions",
    description:
      "Integrated engineering, procurement, and construction coordination for industrial projects.",
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-[#181A20] py-20 text-white sm:py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-red-700/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Heading */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-10 bg-red-600" />
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-red-400 sm:text-sm">
                What We Do
              </p>
            </div>

            <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
              Engineering Solutions
              <span className="block text-red-500">
                Built Around You
              </span>
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-gray-400">
              Practical engineering and construction capabilities for
              industrial facilities and infrastructure projects.
            </p>
          </div>

          <Link
            to="/services"
            className="inline-flex shrink-0 items-center gap-2 font-bold text-gray-200 transition hover:text-red-400"
          >
            View All Services <ArrowUpRight size={19} />
          </Link>
        </div>

        {/* Service cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.number}
                to="/services"
                className="group relative flex min-h-[310px] flex-col overflow-hidden rounded-xl border border-white/10 bg-[#22252C] p-6 shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-red-500/50 hover:bg-[#292C34] hover:shadow-xl hover:shadow-black/20 sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold tracking-widest text-red-400">
                    {service.number}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-red-500/20 bg-red-600/10 text-red-400 transition duration-300 group-hover:bg-red-700 group-hover:text-white">
                    <Icon size={25} />
                  </div>
                </div>

                <h3 className="mt-8 text-xl font-extrabold leading-snug text-white">
                  {service.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-7 text-gray-300">
                  {service.description}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="text-sm font-bold text-gray-200 transition group-hover:text-red-400">
                    Learn More
                  </span>

                  <ArrowUpRight
                    size={20}
                    className="text-red-400 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>

                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
