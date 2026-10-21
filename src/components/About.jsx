
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, MoveUpRight } from "lucide-react";

const highlights = [
  "Industrial engineering and construction solutions",
  "Pre-engineered buildings and steel structures",
  "Quality-focused project execution",
  "Solutions tailored to client requirements",
];

export default function About() {
  return (
    <section className="relative overflow-hidden bg-[#F7F7F8] py-20 text-[#17191F] sm:py-24 lg:py-28">
      {/* Subtle background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-red-600/5 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        {/* Image area */}
        <div className="relative pb-10 pr-5 sm:pr-10">
          <div className="relative h-[350px] overflow-hidden rounded-2xl border border-gray-200 bg-gray-200 shadow-xl sm:h-[470px]">
            <img
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=85"
              alt="Industrial engineering and steel fabrication"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 flex items-center gap-3">
              <span className="h-10 w-1 bg-red-600" />
              <div>
                <p className="text-sm font-bold text-white">
                  Engineering & Construction
                </p>
                <p className="mt-1 text-xs text-gray-200">
                  Built around your requirements
                </p>
              </div>
            </div>
          </div>

          {/* Project highlight */}
          <div className="absolute bottom-0 right-0 max-w-[230px] rounded-xl border border-red-500/20 bg-[#C90016] p-6 text-white shadow-2xl shadow-red-900/20 sm:max-w-[260px] sm:p-8">
            <p className="text-4xl font-black sm:text-5xl">350+</p>
            <p className="mt-2 text-sm font-semibold leading-6 text-red-50">
              Projects delivered across industrial sectors
            </p>
          </div>

          {/* Decorative frame */}
          <div
            aria-hidden="true"
            className="absolute -left-3 -top-3 -z-0 h-24 w-24 rounded-tl-2xl border-l-2 border-t-2 border-red-600/70"
          />
        </div>

        {/* Text area */}
        <div>
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-10 bg-red-600" />
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-red-700 sm:text-sm">
              About KES Group
            </p>
          </div>

          <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-[#17191F] sm:text-4xl lg:text-5xl">
            15 Years of
            <span className="block text-red-700">
              Engineering Excellence
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-[#626873]">
            KES Group provides engineering solutions for industrial buildings,
            steel structures, wastewater treatment systems, and EPC projects.
            With a focus on quality and practical execution, we work to turn
            project requirements into reliable industrial facilities.
          </p>

          <p className="mt-4 text-base leading-8 text-[#626873]">
            Our approach combines engineering, project coordination, and
            attention to detail at every stage of delivery.
          </p>

          {/* Highlights */}
          <ul className="mt-7 space-y-4">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm leading-6 text-[#30343B] sm:text-base"
              >
                <CheckCircle2
                  size={20}
                  className="mt-0.5 shrink-0 text-red-700"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-md bg-red-700 px-6 py-4 font-bold text-white transition hover:bg-red-800"
            >
              Discover Our Story <ArrowRight size={18} />
            </Link>

            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 font-bold text-[#30343B] transition hover:text-red-700"
            >
              Explore Projects
              <MoveUpRight
                size={17}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
