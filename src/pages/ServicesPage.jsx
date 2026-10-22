
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Factory,
  Droplets,
  HardHat,
  CheckCircle2,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const services = [
  {
    number: "01",
    icon: Building2,
    title: "Pre-Engineered Buildings (PEB)",
    description:
      "Engineered building systems designed to support industrial, commercial, and warehouse requirements.",
    features: [
      "Customized structural design",
      "Efficient fabrication and assembly",
      "Industrial sheds and warehouses",
      "Solutions tailored to project requirements",
    ],
  },
  {
    number: "02",
    icon: Factory,
    title: "Industrial Steel Structures",
    description:
      "Steel structure solutions for industrial facilities, production plants, and specialized infrastructure.",
    features: [
      "Structural analysis using engineering software",
      "CNC plasma and laser cutting capabilities",
      "Epoxy coating options",
      "Fabrication and erection coordination",
    ],
  },
  {
    number: "03",
    icon: Droplets,
    title: "Wastewater Treatment Systems",
    description:
      "STP and WTP solutions designed around project requirements, treatment needs, and water reuse goals.",
    features: [
      "Customized STP and WTP systems",
      "MBR technology options",
      "Water recycling and reuse solutions",
      "PLC and SCADA automation options",
    ],
  },
  {
    number: "04",
    icon: HardHat,
    title: "Engineering, Procurement & Construction",
    description:
      "Integrated project delivery support for industrial construction and engineering requirements.",
    features: [
      "Civil, structural, and MEP coordination",
      "Project planning and reporting",
      "Procurement and supply chain coordination",
      "Quality checks and handover support",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#111318] text-white">

{/* Hero */}
<section className="relative isolate overflow-hidden border-b border-white/10 bg-[#111318] px-5 py-20 sm:py-24 lg:py-28">
  {/* Industrial background */}
  <img
    src="/images/services-hero.jpg"
    alt=""
    aria-hidden="true"
    className="absolute inset-0 -z-20 h-full w-full object-cover object-center blur-[2px]"
  />

  {/* Dark overlay */}
  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#111318]/95 via-[#111318]/80 to-[#111318]/45" />

  {/* Red accent */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-red-700/20 blur-3xl"
  />

  <div className="relative mx-auto max-w-7xl">
    <div className="flex items-center gap-3">
      <span className="h-[2px] w-10 bg-red-600" />
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-400">
        What We Do
      </p>
    </div>

    <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
      Engineering Solutions
      <span className="block text-red-500">
        for Industrial Growth
      </span>
    </h1>

    <p className="mt-6 max-w-2xl text-base leading-8 text-gray-200 sm:text-lg">
      From pre-engineered buildings to integrated EPC solutions,
      explore services designed around industrial project needs.
    </p>

    <Link
      to="/contact"
      className="mt-8 inline-flex items-center gap-2 rounded-md bg-red-700 px-6 py-4 font-bold text-white transition hover:bg-red-600"
    >
      Discuss Your Project <ArrowRight size={18} />
    </Link>
  </div>
</section>


        {/* Services list */}
        <section className="bg-[#181A20] px-5 py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-400">
                Our Expertise
              </p>

              <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
                Solutions for Every Stage
              </h2>

              <p className="mt-5 leading-7 text-gray-400">
                Explore our core service categories and the capabilities
                associated with each one.
              </p>
            </div>

            <div className="space-y-5">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <article
                    key={service.number}
                    className="grid gap-6 rounded-2xl border border-white/10 bg-[#202229] p-6 transition duration-300 hover:border-red-500/40 sm:p-8 lg:grid-cols-[90px_1fr_1fr] lg:items-start lg:gap-10 lg:p-10"
                  >
                    <div className="flex items-center gap-4 lg:block">
                      <span className="text-sm font-bold tracking-widest text-red-400">
                        {service.number}
                      </span>

                      <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-red-500/20 bg-red-600/10 text-red-400 lg:mt-5">
                        <Icon size={29} />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold leading-snug text-white sm:text-2xl">
                        {service.title}
                      </h3>

                      <p className="mt-4 leading-7 text-gray-400">
                        {service.description}
                      </p>

                      <Link
                        to="/contact"
                        className="mt-5 inline-flex items-center gap-2 font-bold text-red-400 transition hover:text-red-300"
                      >
                        Enquire About This Service
                        <ArrowUpRight size={17} />
                      </Link>
                    </div>

                    <ul className="space-y-4 lg:pt-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm leading-6 text-gray-300"
                        >
                          <CheckCircle2
                            size={19}
                            className="mt-0.5 shrink-0 text-red-400"
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-5 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl rounded-2xl border border-red-500/20 bg-[#202229] px-6 py-12 text-center sm:px-10 sm:py-16">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-red-400">
              Let's Work Together
            </p>

            <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
              Not Sure Which Service You Need?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-300">
              Tell us about your project. Our team can help you identify the
              engineering services that fit your requirements.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-red-700 px-7 py-4 font-bold text-white transition hover:bg-red-600"
            >
              Talk to Our Team <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
