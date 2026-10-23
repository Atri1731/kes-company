
// import {
//   Factory,
//   Truck,
//   Warehouse,
//   FlaskConical,
//   CarFront,
//   Utensils,
//   Shirt,
//   Sun,
// } from "lucide-react";

// const industries = [
//   {
//     icon: Factory,
//     title: "Manufacturing",
//     description: "Industrial facilities and production infrastructure.",
//   },
//   {
//     icon: Truck,
//     title: "Logistics",
//     description: "Infrastructure for efficient logistics operations.",
//   },
//   {
//     icon: Warehouse,
//     title: "Warehousing",
//     description: "Functional and durable warehouse structures.",
//   },
//   {
//     icon: FlaskConical,
//     title: "Pharmaceutical",
//     description: "Infrastructure for pharmaceutical operations.",
//   },
//   {
//     icon: CarFront,
//     title: "Automobile",
//     description: "Facilities for automotive manufacturing.",
//   },
//   {
//     icon: Utensils,
//     title: "Food Processing",
//     description: "Facilities for food production and processing.",
//   },
//   {
//     icon: Shirt,
//     title: "Textile",
//     description: "Industrial buildings for textile operations.",
//   },
//   {
//     icon: Sun,
//     title: "Renewable Energy",
//     description: "Infrastructure supporting renewable energy.",
//   },
// ];

// export default function Industries() {
//   return (
//     <section
//       id="industries"
//       className="bg-white px-5 py-16 sm:py-20 lg:py-24"
//     >
//       <div className="mx-auto max-w-7xl">
//         {/* Section heading */}
//         <div className="mx-auto mb-12 max-w-3xl text-center">
//           <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-700 sm:text-sm">
//             Our Expertise
//           </p>

//           <div className="mx-auto mb-14 max-w-3xl text-center"/>

//           <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
//             Industries We Serve
//           </h2>

//           <p className="mt-5 leading-7 text-gray-600">
//             Engineering solutions for diverse industrial sectors, tailored to
//             meet the needs of each application.
//           </p>
//         </div>

//         {/* Industry grid */}
//         <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
//           {industries.map((industry) => {
//             const Icon = industry.icon;

//             return (
//               <article
//                 key={industry.title}
//                 className="group rounded-xl border border-gray-200/80 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl hover:shadow-gray-900/5 sm:p-7"
//               >
//                 <div
//                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-red-100 bg-red-50 text-red-700 transition duration-300 group-hover:border-red-700 group-hover:bg-red-700 group-hover:text-white">
//                   <Icon size={25} strokeWidth={1.8} />
//                 </div>

//                 <h3 className="text-base font-bold text-gray-900 sm:text-lg">
//                   {industry.title}
//                 </h3>

//                 <p className="mt-3 text-sm leading-6 text-gray-600">
//                   {industry.description}
//                 </p>
//               </article>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }


import {
  Factory,
  Truck,
  Warehouse,
  FlaskConical,
  CarFront,
  Utensils,
  Shirt,
  Sun,
} from "lucide-react";

const industries = [
  { title: "Manufacturing", icon: Factory },
  { title: "Logistics", icon: Truck },
  { title: "Warehousing", icon: Warehouse },
  { title: "Pharmaceutical", icon: FlaskConical },
  { title: "Automobile", icon: CarFront },
  { title: "Food Processing", icon: Utensils },
  { title: "Textile", icon: Shirt },
  { title: "Renewable Energy", icon: Sun },
];

export default function Industries() {
  return (
    <section
      id="industries"
      className="bg-[#292524] p-3 sm:p-5 lg:p-8"
    >
      <div className="mx-auto max-w-[1600px] bg-[#F7F5F1] px-5 py-12 sm:px-8 sm:py-16 lg:px-14 lg:py-20">
        {/* Section heading */}
        <div className="mb-10 flex flex-col justify-between gap-5 sm:mb-14 md:flex-row md:items-end">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#873F4B]">
              KES Group / Our Expertise
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              Industries
              <span className="text-[#873F4B]"> we serve.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#78716C]">
            Deep domain expertise across India's most critical
            industrial sectors.
          </p>
        </div>



{/* Smaller, lighter industry cards */}
<div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
  {industries.map((industry, index) => {
    const Icon = industry.icon;
    const isBurgundy =
  Math.floor(index / 4) % 2 === index % 2;

    return (
      <article
        key={industry.title}
        className={`group relative flex min-h-[155px] flex-col justify-between overflow-hidden border p-4 transition-all duration-300 hover:-translate-y-1 sm:min-h-[170px] sm:p-5 ${
          isBurgundy
            ? "border-[#D9B7BC] bg-[#EBD9DC] text-[#5E343B] hover:bg-[#E4CDD1]"
            : "border-[#E5DCD7] bg-white text-[#292524] hover:border-[#C99AA2]"
        }`}
      >
        <div className="flex items-center justify-between">
          <span
            className={`font-mono text-[10px] tracking-widest ${
              isBurgundy ? "text-[#873F4B]/75" : "text-[#873F4B]"
            }`}
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          <span
            className={`h-1.5 w-1.5 rounded-full ${
              isBurgundy ? "bg-[#A86D77]" : "bg-[#C99AA2]"
            }`}
          />
        </div>

        <div
          className={`mt-5 flex h-10 w-10 items-center justify-center ${
            isBurgundy
              ? "bg-white/60 text-[#873F4B]"
              : "bg-[#F7F0EE] text-[#873F4B]"
          }`}
        >
          <Icon size={22} strokeWidth={1.6} />
        </div>

        <h3 className="mt-5 text-base font-semibold leading-snug tracking-tight sm:text-lg">
          {industry.title}
        </h3>

        <div
          className={`absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full ${
            isBurgundy ? "bg-[#A86D77]" : "bg-[#873F4B]"
          }`}
        />
      </article>
    );
  })}
</div>



        {/* Bottom note */}
        <div className="mt-10 flex flex-col gap-2 border-t border-[#D8CEC7] pt-5 sm:mt-16 sm:flex-row sm:justify-between">
          <p className="text-xs leading-6 text-[#78716C]">
            Engineering solutions across diverse industrial sectors.
          </p>

          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#873F4B]">
            Precision / Performance / Reliability
          </p>
        </div>
      </div>
    </section>
  );
}
