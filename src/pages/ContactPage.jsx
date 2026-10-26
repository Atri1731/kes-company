
// import { Link } from "react-router-dom";
// import { ArrowRight, CheckCircle2 } from "lucide-react";

// import Navbar from "../components/Navbar";
// import Contact from "../components/Contact";
// import Footer from "../components/Footer";

// export default function ContactPage() {
//   return (
//     <>
//       <Navbar />

//       <main>
//         {/* Premium contact hero */}
//         <section className="relative isolate overflow-hidden bg-gray-950">
//           <div
//             className="absolute inset-0 -z-20 bg-cover bg-center"
//             style={{
//               backgroundImage:
//                 "url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=2000&q=85')",
//             }}
//           />

//           <div className="absolute inset-0 -z-10 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/50" />

//           <div className="mx-auto grid min-h-[440px] max-w-7xl items-center gap-10 px-5 py-20 sm:px-8 lg:min-h-[500px] lg:grid-cols-[1.3fr_0.7fr] lg:py-24">
//             <div className="max-w-3xl">
//               <div className="flex items-center gap-3">
//                 <span className="h-1 w-10 bg-red-600" />
//                 <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-400">
//                   Let's Build Together
//                 </p>
//               </div>

//               <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
//                 Contact KES
//                 <span className="block text-red-500">Groups</span>
//               </h1>

//               <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
//                 Have an industrial project in mind? Tell us your requirements
//                 and let's explore the right engineering solution for your
//                 business.
//               </p>

//               <div className="mt-8 flex flex-col gap-4 sm:flex-row">
//                 <a
//                   href="#contact"
//                   className="inline-flex items-center justify-center gap-2 rounded-md bg-red-700 px-7 py-4 font-bold text-white transition hover:bg-red-800"
//                 >
//                   Start Your Inquiry <ArrowRight size={18} />
//                 </a>

//                 <Link
//                   to="/services"
//                   className="inline-flex items-center justify-center rounded-md border border-white/40 px-7 py-4 font-bold text-white transition hover:bg-white/10"
//                 >
//                   Explore Our Services
//                 </Link>
//               </div>
//             </div>

//             <div className="hidden lg:block">
//               <div className="rounded-2xl border border-white/20 bg-black/30 p-8 backdrop-blur-sm">
//                 <p className="text-sm font-bold uppercase tracking-widest text-red-400">
//                   Your Engineering Partner
//                 </p>

//                 <h2 className="mt-5 text-2xl font-bold leading-snug text-white">
//                   From industrial planning to project execution.
//                 </h2>

//                 <div className="mt-7 space-y-4">
//                   {[
//                     "Pre-engineered buildings",
//                     "Industrial steel structures",
//                     "STP / WTP systems",
//                     "EPC solutions",
//                   ].map((service) => (
//                     <div
//                       key={service}
//                       className="flex items-center gap-3 text-sm text-gray-200"
//                     >
//                       <CheckCircle2
//                         size={19}
//                         className="shrink-0 text-red-400"
//                       />
//                       {service}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Existing contact details and form */}
//         <Contact />
//       </main>

//       <Footer />
//     </>
//   );
// }




import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Building2,
  MessageSquare,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const services = [
  "Pre-engineered buildings",
  "Industrial steel structures",
  "STP / WTP systems",
  "EPC solutions",
];

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-[#F7F5F1] text-[#292524]">
        {/* Split-screen contact hero */}
        <section className="px-5 pb-12 pt-12 sm:px-8 sm:pb-16 sm:pt-16 lg:px-12 lg:pb-20 lg:pt-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid overflow-hidden border border-[#D8CEC7] lg:grid-cols-[1.2fr_0.8fr]">
              {/* Introduction */}
              <div className="relative flex flex-col justify-between overflow-hidden px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-24 -top-20 h-64 w-64 rounded-full border border-[#873F4B]/10 sm:h-80 sm:w-80"
                />

                <div className="relative">
                  <div className="flex items-center gap-3">
                    <span className="h-px w-9 bg-[#873F4B]" />
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#873F4B] sm:text-sm">
                      Contact KES Groups
                    </p>
                  </div>

                  <h1 className="mt-8 text-5xl font-medium leading-[1.05] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
                    Every great
                    <span className="block">project starts</span>
                    <span className="block font-normal italic text-[#873F4B]">
                      with a conversation.
                    </span>
                  </h1>

                  <p className="mt-7 max-w-xl text-base leading-8 text-[#78716C] sm:mt-9 sm:text-lg">
                    Planning an industrial facility or exploring an
                    engineering solution? Tell us what you have in mind.
                    Let's discuss how we can help bring your project to life.
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center gap-3 bg-[#873F4B] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#6F303B]"
                    >
                      Start an Inquiry
                      <ArrowRight size={18} />
                    </a>

                    <Link
                      to="/services"
                      className="inline-flex items-center justify-center gap-2 border border-[#D8CEC7] px-6 py-4 text-sm font-semibold text-[#292524] transition hover:border-[#873F4B] hover:text-[#873F4B]"
                    >
                      Explore Services
                      <ArrowUpRight size={17} />
                    </Link>
                  </div>
                </div>

                <div className="relative mt-12 border-t border-[#D8CEC7] pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#78716C]">
                    Let's move your ideas forward
                  </p>
                </div>
              </div>

              {/* Burgundy service panel */}
              <div className="relative flex flex-col justify-between overflow-hidden bg-[#873F4B] px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-10 lg:py-14">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full border border-white/10 sm:h-96 sm:w-96"
                />

                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center border border-white/25 bg-white/10">
                    <Building2 size={23} strokeWidth={1.5} />
                  </div>

                  <p className="mt-8 text-xs font-bold uppercase tracking-[0.22em] text-[#F0E0E3]">
                    Your Engineering Partner
                  </p>

                  <h2 className="mt-4 max-w-md text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                    The right conversation. The right solution.
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-white/75">
                    Share your requirements with our team and start
                    exploring the possibilities for your next project.
                  </p>
                </div>

                <div className="relative mt-10">
                  <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#F0E0E3]">
                    Our capabilities
                  </p>

                  <div className="divide-y divide-white/15 border-y border-white/15">
                    {services.map((service, index) => (
                      <div
                        key={service}
                        className="flex items-center gap-4 py-4"
                      >
                        <span className="text-xs text-white/50">
                          0{index + 1}
                        </span>

                        <span className="flex-1 text-sm font-medium sm:text-base">
                          {service}
                        </span>

                        <CheckCircle2
                          size={17}
                          strokeWidth={1.5}
                          className="shrink-0 text-[#F0E0E3]"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative mt-8 flex items-center gap-3 text-sm text-white/80">
                  <MessageSquare size={17} />
                  <span>Tell us about your project</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Existing contact form and details */}
        <section id="contact" className="scroll-mt-24 px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 max-w-2xl sm:mb-10">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#873F4B]">
                Get in touch
              </p>

              <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
                Let's discuss your requirements.
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#78716C] sm:text-base">
                Share a few details with us using the form below. Our
                existing contact form and its functionality remain in place.
              </p>
            </div>

            <div className="border border-[#D8CEC7] bg-white p-3 sm:p-6 lg:p-8">
              <Contact />
            </div>
          </div>
        </section>

        {/* Closing banner */}
        <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-[#D8CEC7] pt-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-lg font-medium">
                Have a project ready to discuss?
              </p>
              <p className="mt-2 text-sm text-[#78716C]">
                Explore our capabilities before getting in touch.
              </p>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 self-start border-b border-[#873F4B] pb-2 text-sm font-semibold text-[#873F4B] transition hover:text-[#6F303B]"
            >
              Discover Our Services
              <ArrowRight size={17} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
