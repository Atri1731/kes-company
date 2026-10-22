
import { MapPin, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const serviceAreas = [
  "Maharashtra",
  "Gujarat",
  "Rajasthan",
  "Madhya Pradesh",
];

export default function ServiceAreas() {
  return (
    <section className="bg-[#151515] px-5 py-20 text-white sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-400">
          Pan India Presence
        </p>

        <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-red-600" />

        <h2 className="mt-6 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
          Service Areas
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
          Executing projects across four states with dedicated regional teams.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {serviceAreas.map((area, index) => (
            <div
              key={area}
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-gray-200 transition-all duration-300 hover:-translate-y-1 hover:border-red-400 hover:bg-red-500/10 hover:text-red-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <MapPin
                size={16}
                className="text-red-400 transition-transform duration-300 group-hover:-translate-y-0.5"
              />
              {area}
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-red-700 px-6 py-3.5 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-red-600"
          >
            Discuss Your Project
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
