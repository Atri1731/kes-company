
// import { MapPin, ArrowUpRight } from "lucide-react";
// import { Link } from "react-router-dom";

// const serviceAreas = [
//   "Maharashtra",
//   "Gujarat",
//   "Rajasthan",
//   "Madhya Pradesh",
// ];

// export default function ServiceAreas() {
//   return (
   
// <section className="bg-[#151515] px-5 py-20 text-white sm:px-8 sm:py-24">

//       <div className="mx-auto max-w-7xl text-center">
//         <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-600">
//           Pan India Presence
//         </p>

//         <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-red-600" />

//         <h2 className="mt-6 text-3xl font-black tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
//           Service Areas
//         </h2>

//         <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-neutral-500 sm:text-lg">
//           Executing projects across four states with dedicated regional teams.
//         </p>

//         <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
//           {serviceAreas.map((area, index) => (
//             <div
//               key={area}
//               className="group inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-5 py-3 text-sm font-medium text-neutral-700 transition-all duration-300 hover:-translate-y-1 hover:border-red-300 hover:bg-red-50 hover:text-red-700"
//               style={{ animationDelay: `${index * 100}ms` }}
//             >
//               <MapPin
//                 size={16}
//                 className="text-red-600 transition-transform duration-300 group-hover:-translate-y-0.5"
//               />
//               {area}
//             </div>
//           ))}
//         </div>

//         <div className="mt-10">
//           <Link
//             to="/contact"
//             className="inline-flex items-center gap-2 rounded-md bg-red-700 px-6 py-3.5 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-red-600"
//           >
//             Discuss Your Project
//             <ArrowUpRight size={18} />
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }



import { ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const serviceAreas = [
  "Rajasthan",
  "Gujarat",
  "Madhya Pradesh",
  "Maharashtra",
];

export default function ServiceAreas() {
  return (
    <section className="bg-[#292524] p-3 sm:p-5 lg:p-8">
      <div className="mx-auto max-w-[1600px] bg-[#F7F5F1] px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

          {/* Left: Section introduction */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#873F4B]">
              KES Group / Our Reach
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#292524] sm:text-5xl lg:text-6xl">
              Our service
              <span className="block text-[#873F4B]">
                areas.
              </span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-[#78716C] sm:text-base">
              Delivering reliable industrial project services
              across key regions of India.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-3 bg-[#873F4B] px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#71323D]"
            >
              Discuss Your Project
              <ArrowUpRight size={18} />
            </Link>
          </div>

          {/* Right: Service locations */}
          <div className="border-t border-[#D8CEC7] lg:border-t-0">
            {serviceAreas.map((area, index) => (
              <div
                key={area}
                className="group flex items-center gap-4 border-b border-[#D8CEC7] py-4 transition-colors duration-300 sm:py-5 hover:bg-[#EBD9DC]/40 sm:gap-6 sm:py-7"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#EBD9DC] text-[#873F4B] transition-colors duration-300 group-hover:bg-[#873F4B] group-hover:text-white">
                  <MapPin size={21} strokeWidth={1.7} />
                </span>

                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#A8A29E]">
                    Service Location 0{index + 1}
                  </p>

                  <h3 className="mt-1 text-lg font-semibold tracking-tight text-[#292524] sm:text-xl">
                    {area}
                  </h3>
                </div>

              
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
