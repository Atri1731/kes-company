
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
<section className="relative isolate overflow-hidden border-b border-white/10 bg-[#111318]">
  {/* Background image */}
  <img
    src="/images/kes-industrial-hero.jpg"
    alt=""
    aria-hidden="true"
    className="absolute inset-0 -z-20 h-full w-full object-cover object-center  blur-[2px]"
  />

  {/* Dark overlay for readable text */}
  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#111318] via-[#111318]/90 to-[#111318]/55" />

  {/* Subtle red accent */}
  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-transparent via-transparent to-red-950/30" />

  <div className="mx-auto flex min-h-[520px] max-w-7xl items-center px-5 py-20 sm:px-8 sm:py-24 lg:min-h-[600px] lg:px-12">
    <div className="max-w-3xl">
      <div className="flex items-center gap-3">
        <span className="h-[2px] w-10 bg-red-600" />
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-400 sm:text-sm">
          Who We Are
        </p>
      </div>

      <h1 className="mt-6 text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-7xl">
        About KES Group
        <span className="mt-3 block text-red-500">
          Engineering with Purpose.
        </span>
      </h1>

      <p className="mt-6 max-w-2xl text-base leading-8 text-gray-200 sm:text-lg">
        Your engineering partner for industrial buildings, steel structures,
        and integrated engineering solutions.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          to="/projects"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-red-700 px-6 py-4 font-bold text-white transition hover:bg-red-600"
        >
          Explore Our Projects <ArrowRight size={18} />
        </Link>

        <Link
          to="/contact"
          className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/5 px-6 py-4 font-bold text-white backdrop-blur-sm transition hover:border-red-500 hover:bg-white/10"
        >
          Contact Our Team
        </Link>
      </div>
    </div>
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
