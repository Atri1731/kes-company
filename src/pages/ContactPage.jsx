
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Premium contact hero */}
        <section className="relative isolate overflow-hidden bg-gray-950">
          <div
            className="absolute inset-0 -z-20 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=2000&q=85')",
            }}
          />

          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/50" />

          <div className="mx-auto grid min-h-[440px] max-w-7xl items-center gap-10 px-5 py-20 sm:px-8 lg:min-h-[500px] lg:grid-cols-[1.3fr_0.7fr] lg:py-24">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="h-1 w-10 bg-red-600" />
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-400">
                  Let's Build Together
                </p>
              </div>

              <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
                Contact KES
                <span className="block text-red-500">Groups</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
                Have an industrial project in mind? Tell us your requirements
                and let's explore the right engineering solution for your
                business.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-red-700 px-7 py-4 font-bold text-white transition hover:bg-red-800"
                >
                  Start Your Inquiry <ArrowRight size={18} />
                </a>

                <Link
                  to="/services"
                  className="inline-flex items-center justify-center rounded-md border border-white/40 px-7 py-4 font-bold text-white transition hover:bg-white/10"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="rounded-2xl border border-white/20 bg-black/30 p-8 backdrop-blur-sm">
                <p className="text-sm font-bold uppercase tracking-widest text-red-400">
                  Your Engineering Partner
                </p>

                <h2 className="mt-5 text-2xl font-bold leading-snug text-white">
                  From industrial planning to project execution.
                </h2>

                <div className="mt-7 space-y-4">
                  {[
                    "Pre-engineered buildings",
                    "Industrial steel structures",
                    "STP / WTP systems",
                    "EPC solutions",
                  ].map((service) => (
                    <div
                      key={service}
                      className="flex items-center gap-3 text-sm text-gray-200"
                    >
                      <CheckCircle2
                        size={19}
                        className="shrink-0 text-red-400"
                      />
                      {service}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Existing contact details and form */}
        <Contact />
      </main>

      <Footer />
    </>
  );
}
