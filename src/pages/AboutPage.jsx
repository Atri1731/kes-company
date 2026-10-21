
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Target,
  Eye,
  ShieldCheck,
  Lightbulb,
  Award,
  Users,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "Building trust through transparency, honesty, and responsible business practices.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Maintaining high standards of engineering, manufacturing, and project execution.",
  },
  {
    icon: Users,
    title: "Safety",
    description:
      "Prioritizing the safety of our people, partners, and project sites.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Exploring practical and efficient engineering solutions for industrial needs.",
  },
];

const stats = [
  { number: "350+", label: "Projects Delivered" },
  { number: "15+", label: "Years of Experience" },
  { number: "50+", label: "Expert Engineers" },
  { number: "100%", label: "Quality Commitment" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#111318] text-white">
        {/* Page hero */}
        <section className="relative overflow-hidden border-b border-white/10 bg-[#111318] px-5 py-20 sm:py-28">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-20 h-80 w-80 rounded-full bg-red-700/10 blur-3xl"
          />

          <div className="relative mx-auto max-w-7xl">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-10 bg-red-600" />
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-400">
                Who We Are
              </p>
            </div>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              About KES Group
              <span className="mt-2 block text-red-500">
                Engineering with Purpose.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
              Your engineering partner for industrial buildings, steel
              structures, and integrated engineering solutions.
            </p>
          </div>
        </section>

        {/* Company story and statistics */}
        <section className="px-5 py-16 sm:py-20 lg:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-8 bg-red-600" />
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-red-400 sm:text-sm">
                  Our Story
                </p>
              </div>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                Engineering Excellence,
                <span className="block text-red-500">Built on Trust</span>
              </h2>

              <p className="mt-6 leading-8 text-gray-300">
                KES Group, headquartered in Gandhinagar, Gujarat, provides
                engineering solutions for industrial and infrastructure
                projects. Its work includes pre-engineered buildings,
                industrial steel structures, wastewater treatment systems,
                and EPC services.
              </p>

              <p className="mt-4 leading-8 text-gray-400">
                Our focus is on practical design, quality execution, and
                long-term partnerships with our clients.
              </p>

              <Link
                to="/projects"
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-red-700 px-6 py-4 font-bold text-white transition hover:bg-red-600"
              >
                Explore Our Projects <ArrowRight size={18} />
              </Link>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {stats.map((stat, index) => (
                <article
                  key={stat.label}
                  className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#1B1D23] p-6 transition duration-300 hover:-translate-y-1 hover:border-red-600/50 sm:p-8"
                >
                  <div
                    className={`absolute left-0 top-0 h-1 bg-red-600 transition-all duration-300 ${
                      index === 0 ? "w-12" : "w-0 group-hover:w-12"
                    }`}
                  />

                  <p className="text-4xl font-extrabold tracking-tight text-red-500 sm:text-5xl">
                    {stat.number}
                  </p>

                  <p className="mt-3 font-semibold text-gray-200">
                    {stat.label}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Vision and mission */}
        <section className="border-y border-white/10 bg-[#181A20] px-5 py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
            <article className="rounded-xl border border-white/10 bg-[#202229] p-7 transition duration-300 hover:border-red-600/40 sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-red-600/10">
                <Eye size={30} className="text-red-400" />
              </div>

              <h2 className="mt-5 text-2xl font-bold text-white">
                Our Vision
              </h2>

              <p className="mt-4 leading-7 text-gray-300">
                To be a trusted engineering partner recognized for quality,
                innovation, and dependable industrial solutions.
              </p>
            </article>

            <article className="rounded-xl border border-white/10 bg-[#202229] p-7 transition duration-300 hover:border-red-600/40 sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-red-600/10">
                <Target size={30} className="text-red-400" />
              </div>

              <h2 className="mt-5 text-2xl font-bold text-white">
                Our Mission
              </h2>

              <p className="mt-4 leading-7 text-gray-300">
                To deliver efficient engineering and construction solutions
                through skilled teams, thoughtful planning, and a commitment
                to quality and safety.
              </p>
            </article>
          </div>
        </section>

        {/* Company values */}
        <section className="px-5 py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-8 bg-red-600" />
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-red-400 sm:text-sm">
                  What Guides Us
                </p>
              </div>

              <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
                Our Core Values
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-gray-400">
                The principles that shape our engineering approach, our
                decisions, and our relationships with clients.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => {
                const Icon = value.icon;

                return (
                  <article
                    key={value.title}
                    className="group rounded-xl border border-white/10 bg-[#1B1D23] p-6 transition duration-300 hover:-translate-y-1 hover:border-red-600/50 hover:bg-[#202229] hover:shadow-xl hover:shadow-black/10"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-600/10 transition group-hover:bg-red-600/20">
                      <Icon size={26} className="text-red-400" />
                    </div>

                    <h3 className="mt-5 text-xl font-bold text-white">
                      {value.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-400">
                      {value.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="px-5 pb-16 sm:pb-20 lg:pb-24">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl border border-red-500/20 bg-[#202229] px-6 py-14 text-center sm:px-10 sm:py-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-32 h-72 w-72 rounded-full bg-red-700/15 blur-3xl"
            />

            <div className="relative mx-auto max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-red-400">
                Let's Work Together
              </p>

              <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
                Ready to Build Something Great?
              </h2>

              <p className="mt-5 leading-7 text-gray-300">
                Let's discuss your industrial project and find the right
                engineering solution for your requirements.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  to="/contact"
                  className="rounded-md bg-red-700 px-6 py-4 font-bold text-white transition hover:bg-red-600"
                >
                  Request a Quote
                </Link>

                <Link
                  to="/projects"
                  className="rounded-md border border-white/20 px-6 py-4 font-bold text-white transition hover:border-red-500 hover:bg-white/5"
                >
                  View Our Projects
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
