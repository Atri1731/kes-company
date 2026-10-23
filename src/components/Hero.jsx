
// import { Link } from "react-router-dom";
// import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";

// const stats = [
//   { value: "350+", label: "Projects Delivered" },
//   { value: "15+", label: "Years Experience" },
//   { value: "50+", label: "Expert Engineers" },
//   { value: "100%", label: "Quality Commitment" },
// ];

// export default function Hero() {
//   return (
//     <section className="relative isolate overflow-hidden bg-gray-950 text-white">
//       {/* Background photograph */}
//       {/* <div
//         className="absolute inset-0 -z-20 bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=2200&q=85')",
//         }}
//       /> */}

      
// {/* Original KES Projects hero video */}

// <video
//   className="absolute inset-0 -z-20 h-full w-full object-cover"
//   autoPlay
//   muted
//   loop
//   playsInline
//   preload="metadata"
//   aria-hidden="true"
// >
//   <source
//     src="https://kesprojects.com/videos/hero/home_bg_v_1.mp4"
//     type="video/mp4"
//   />
// </video>


// {/* Overlay to keep the heading readable */}
// {/* Dark gradient overlay for readable text */}
// <div className="absolute inset-0 -z-10 bg-gradient-to-r from-gray-950/95 via-gray-950/75 to-gray-950/35" />

//       <div className="mx-auto grid min-h-[570px] max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:min-h-[650px] lg:grid-cols-[1.2fr_0.8fr] lg:py-28">
//         <div className="max-w-3xl">
//           <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-4 py-2 backdrop-blur-sm">
//             <span className="h-2 w-2 rounded-full bg-red-500" />
//             <span className="text-xs font-bold uppercase tracking-[0.18em] text-gray-200">
//               Industrial Engineering & Construction
//             </span>
//           </div>

//           <h1 className="mt-7 text-4xl font-black leading-[1.1] tracking-tight sm:text-5xl lg:text-7xl">
//             Engineering
//             <span className="block">Tomorrow's</span>
//             <span className="block text-red-500">Industrial Landmarks.</span>
//           </h1>

//           <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
//             Where trust is the foundation and steel is the frame. Discover
//             engineering solutions built around your industrial ambitions.
//           </p>

//           <div className="mt-8 flex flex-col gap-4 sm:flex-row">
//             <Link
//               to="/contact"
//               className="inline-flex items-center justify-center gap-2 rounded-md bg-red-700 px-7 py-4 font-bold text-white transition hover:bg-red-800"
//             >
//               Request a Quote <ArrowRight size={18} />
//             </Link>

//             <Link
//               to="/projects"
//               className="inline-flex items-center justify-center gap-2 rounded-md border border-white/40 px-7 py-4 font-bold text-white transition hover:bg-white/10"
//             >
//               Explore Projects <ArrowUpRight size={18} />
//             </Link>
//           </div>

//           <div className="mt-8 flex items-center gap-2 text-sm text-gray-300">
//             <CheckCircle2 size={17} className="text-red-400" />
//             Industrial solutions tailored to your requirements
//           </div>
//         </div>

//         {/* Supporting panel */}
//         <div className="hidden lg:block">
//           <div className="ml-auto max-w-sm rounded-2xl border border-white/20 bg-black/30 p-7 shadow-2xl backdrop-blur-md">
//             <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-400">
//               Your Engineering Partner
//             </p>

//             <h2 className="mt-4 text-2xl font-bold leading-snug">
//               Designed with precision. Built with confidence.
//             </h2>

//             <p className="mt-4 text-sm leading-7 text-gray-300">
//               From pre-engineered buildings to industrial steel structures,
//               explore solutions for your next project.
//             </p>

//             <Link
//               to="/services"
//               className="mt-6 inline-flex items-center gap-2 font-bold text-white transition hover:text-red-400"
//             >
//               Discover Our Services <ArrowRight size={17} />
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Statistics strip */}
//       <div className="border-t border-white/15 bg-gray-950/80">
//         <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 py-7 sm:px-8 lg:grid-cols-4">
//           {stats.map((stat, index) => (
//             <div
//               key={stat.label}
//               className={`px-4 py-4 sm:px-7 ${
//                 index > 0 ? "border-l border-white/15" : ""
//               }`}
//             >
//               <p className="text-3xl font-black text-white sm:text-4xl">
//                 {stat.value}
//               </p>
//               <p className="mt-2 text-xs leading-5 text-gray-400 sm:text-sm">
//                 {stat.label}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const stats = [
  { value: "350+", label: "Projects Delivered" },
  { value: "15+", label: "Years Experience" },
  { value: "50+", label: "Expert Engineers" },
  { value: "100%", label: "Quality Commitment" },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#FCFAF8] text-[#292524]">
      {/* Existing KES Projects hero video */}
      <video
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-[0.16]"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source
          src="https://kesprojects.com/videos/hero/home_bg_v_1.mp4"
          type="video/mp4"
        />
      </video>

      {/* Light overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#FCFAF8]/95 via-[#FCFAF8]/85 to-[#FCFAF8]/65" />

      {/* Decorative background elements */}
      <div className="pointer-events-none absolute -right-20 -top-24 -z-10 h-72 w-72 rounded-full border border-[#873F4B]/10 sm:h-96 sm:w-96" />
      <div className="pointer-events-none absolute -right-8 -top-12 -z-10 h-56 w-56 rounded-full border border-[#873F4B]/10 sm:h-72 sm:w-72" />

      <div className="mx-auto grid min-h-0 max-w-[1440px] items-center gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:min-h-[650px] lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:px-12 lg:py-24">
        {/* Main content — original text preserved */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#D8CEC7] bg-white/80 px-4 py-2.5 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#873F4B]" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#57534E]">
              Industrial Engineering & Construction
            </span>
          </div>

          <h1 className="mt-6 max-w-3xl text-[38px] font-bold leading-[1.08] tracking-[-0.045em] text-[#292524] sm:text-5xl lg:text-[60px] xl:text-[68px]">
            Engineering
            <span className="block">Tomorrow's</span>
            <span className="block text-[#873F4B]">
              Industrial Landmarks.
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[#57534E] sm:text-base sm:leading-8">
            Where trust is the foundation and steel is the frame. Discover
            engineering solutions built around your industrial ambitions.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-[#873F4B] px-7 py-4 font-bold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#71323D] hover:shadow-lg"
            >
              Request a Quote
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-[#D8CEC7] bg-white/80 px-7 py-4 font-bold text-[#292524] transition duration-300 hover:border-[#873F4B] hover:bg-white hover:text-[#873F4B]"
            >
              Explore Projects
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm text-[#57534E]">
            <CheckCircle2 size={17} className="shrink-0 text-[#873F4B]" />
            Industrial solutions tailored to your requirements
          </div>
        </div>

        {/* Supporting panel — original content preserved */}
        <div className="hidden lg:block">
          <div className="relative ml-auto max-w-sm">
            <div className="absolute -bottom-3 -left-3 -z-10 h-28 w-28 rounded-bl-3xl border-b-2 border-l-2 border-[#873F4B]/40" />

            <div className="rounded-2xl border border-white/80 bg-white/90 p-7 shadow-[0_24px_70px_rgba(41,37,36,0.10)] backdrop-blur-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F5F0EF] text-[#873F4B]">
                <ArrowUpRight size={24} />
              </div>

              <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#873F4B]">
                Your Engineering Partner
              </p>

              <h2 className="mt-4 text-2xl font-bold leading-snug text-[#292524]">
                Designed with precision. Built with confidence.
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#57534E]">
                From pre-engineered buildings to industrial steel structures,
                explore solutions for your next project.
              </p>

              <div className="my-6 h-px bg-[#EAE5E0]" />

              <Link
                to="/services"
                className="group inline-flex items-center gap-2 font-bold text-[#873F4B] transition-colors hover:text-[#71323D]"
              >
                Discover Our Services
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

     
      {/* Statistics strip — original values and labels preserved */}
      <div className="border-t border-[#EAE5E0] bg-white/95">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 px-3 py-4 sm:px-8 sm:py-7 lg:grid-cols-4 lg:px-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`px-4 py-4 sm:px-7 ${
                index % 2 === 1
                  ? "border-l border-[#EAE5E0] lg:border-l-0"
                  : ""
              } ${
                index > 0
                  ? "lg:border-l lg:border-[#EAE5E0]"
                  : ""
              }`}
            >
              <p className="text-3xl font-black tracking-tight text-[#873F4B] sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs leading-5 text-[#78716C] sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

   
  );
}
