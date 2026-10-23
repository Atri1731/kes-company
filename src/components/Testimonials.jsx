
// import { useState } from "react";
// import {
//   ChevronLeft,
//   ChevronRight,
//   Quote,
//   Star,
// } from "lucide-react";

// const testimonials = [
//   {
//     quote:
//       "We have trusted KES from the very beginning, engaging them for old shed maintenance, modifications in existing structures, and the construction of new PEB sheds. The team demonstrated a clear understanding of our requirements and executed every stage with professionalism and timely service. Their dedication from design to execution reflects a culture of excellence. For us, KES is more than just a company — they are like family. We wholeheartedly recommend them for complex steel structure projects and wish them continued success in all future endeavors.",
//     name: "Mehali Papers Project Team",
//     industry: "Manufacturing",
//   },
//   {
//     quote:
//       "We have worked with many PEB companies, but the service level received from KES has been truly outstanding — right from drawing approvals to execution. Their PMC team ensured timely coordination of site activities and seamless collaboration with the civil team for smooth execution. The professionalism and dedication of every KES team member have been excellent. As a result, KES has successfully executed over 1 million sq.ft of projects, and we wish them great success ahead.",
//     name: "Flair Plastic Group Project Team",
//     industry: "Manufacturing",
//   },
//   {
//     quote:
//       "KES executed our 1,80,000 sq.ft plant with precision, including heavy 30 meter unsupported mezzanine beams seamlessly integrated with pre cast concrete structures. The roof covering with PUFF panels was delivered with exacting accuracy. We truly appreciate the efficiency of the entire KES team across design, manufacturing, and execution. We wish KES continued success and highly recommend them for complex steel structure projects.",
//     name: "Troikaa Pharma Project Team",
//     industry: "Pharma",
//   },
//   {
//     quote:
//       "KES successfully delivered our 95,000 sq.ft warehouse in just 14 weeks — three weeks ahead of schedule. The quality of fabrication and the professionalism of their erection team were truly outstanding. We are currently executing four back-to-back sheds with KES, a testament to our confidence in their capabilities. Highly recommended for any large-scale industrial project.",
//     name: "Sud Chemie Team",
//     industry: "Chemical",
//   },
// ];

// export default function Testimonials() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const current = testimonials[activeIndex];

//   const previous = () => {
//     setActiveIndex(
//       (index) =>
//         (index - 1 + testimonials.length) % testimonials.length
//     );
//   };

//   const next = () => {
//     setActiveIndex(
//       (index) => (index + 1) % testimonials.length
//     );
//   };

//   return (
//     <section className="bg-white px-5 py-20 sm:px-8 sm:py-24">
//       <div className="mx-auto max-w-7xl">
//         <div className="text-center">
//           <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-600">
//             Client Stories
//           </p>

//           <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-red-600" />

//           <h2 className="mt-6 text-3xl font-black tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
//             What Our Clients Say
//           </h2>
//         </div>

//         <div
//           key={activeIndex}
//           className="mx-auto mt-12 max-w-4xl rounded-2xl border border-neutral-100 bg-neutral-50 p-6 text-center shadow-sm transition-all duration-300 sm:p-10 lg:p-12"
//           aria-live="polite"
//         >
//           <Quote className="mx-auto h-9 w-9 text-red-600/70" />

//           <div
//             className="mt-5 flex justify-center gap-1"
//             aria-label="Five stars displayed on the original website"
//           >
//             {Array.from({ length: 5 }).map((_, index) => (
//               <Star
//                 key={index}
//                 size={19}
//                 className="fill-red-600 text-red-600"
//               />
//             ))}
//           </div>

//           <blockquote className="mt-6 text-base italic leading-8 text-neutral-700 sm:text-lg sm:leading-9">
//             “{current.quote}”
//           </blockquote>

//           <div className="mt-8">
//             <p className="font-bold text-neutral-900">
//               {current.name}
//             </p>

//             <span className="mt-3 inline-flex rounded-full bg-red-50 px-4 py-1.5 text-xs font-semibold text-red-700">
//               {current.industry}
//             </span>
//           </div>
//         </div>

//         <div className="mt-7 flex items-center justify-center gap-4">
//           <button
//             type="button"
//             onClick={previous}
//             aria-label="Previous testimonial"
//             className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 text-neutral-800 transition hover:border-red-600 hover:bg-red-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
//           >
//             <ChevronLeft size={20} />
//           </button>

//           <div className="flex items-center gap-2">
//             {testimonials.map((testimonial, index) => (
//               <button
//                 key={testimonial.name}
//                 type="button"
//                 onClick={() => setActiveIndex(index)}
//                 aria-label={`Show testimonial ${index + 1}`}
//                 aria-current={
//                   activeIndex === index ? "true" : undefined
//                 }
//                 className={`h-2.5 rounded-full transition-all duration-300 ${
//                   activeIndex === index
//                     ? "w-7 bg-red-600"
//                     : "w-2.5 bg-neutral-300 hover:bg-red-300"
//                 }`}
//               />
//             ))}
//           </div>

//           <button
//             type="button"
//             onClick={next}
//             aria-label="Next testimonial"
//             className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 text-neutral-800 transition hover:border-red-600 hover:bg-red-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
//           >
//             <ChevronRight size={20} />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }



import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
} from "lucide-react";

const testimonials = [
  {
    quote:
      "We have trusted KES from the very beginning, engaging them for old shed maintenance, modifications in existing structures, and the construction of new PEB sheds. The team demonstrated a clear understanding of our requirements and executed every stage with professionalism and timely service. Their dedication from design to execution reflects a culture of excellence. For us, KES is more than just a company — they are like family. We wholeheartedly recommend them for complex steel structure projects and wish them continued success in all future endeavors.",
    name: "Mehali Papers Project Team",
    industry: "Manufacturing",
  },
  {
    quote:
      "We have worked with many PEB companies, but the service level received from KES has been truly outstanding — right from drawing approvals to execution. Their PMC team ensured timely coordination of site activities and seamless collaboration with the civil team for smooth execution. The professionalism and dedication of every KES team member have been excellent. As a result, KES has successfully executed over 1 million sq.ft of projects, and we wish them great success ahead.",
    name: "Flair Plastic Group Project Team",
    industry: "Manufacturing",
  },
  {
    quote:
      "KES executed our 1,80,000 sq.ft plant with precision, including heavy 30 meter unsupported mezzanine beams seamlessly integrated with pre cast concrete structures. The roof covering with PUFF panels was delivered with exacting accuracy. We truly appreciate the efficiency of the entire KES team across design, manufacturing, and execution. We wish KES continued success and highly recommend them for complex steel structure projects.",
    name: "Troikaa Pharma Project Team",
    industry: "Pharma",
  },
  {
    quote:
      "KES successfully delivered our 95,000 sq.ft warehouse in just 14 weeks — three weeks ahead of schedule. The quality of fabrication and the professionalism of their erection team were truly outstanding. We are currently executing four back-to-back sheds with KES, a testament to our confidence in their capabilities. Highly recommended for any large-scale industrial project.",
    name: "Sud Chemie Team",
    industry: "Chemical",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = testimonials[activeIndex];

  const previous = () => {
    setActiveIndex(
      (index) =>
        (index - 1 + testimonials.length) % testimonials.length
    );
  };

  const next = () => {
    setActiveIndex(
      (index) => (index + 1) % testimonials.length
    );
  };

  return (
    <section className="overflow-hidden bg-[#F0E0E3] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1440px]">

        {/* Heading */}
        <div className="flex flex-col gap-6 border-b border-[#D6ADB5] pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#873F4B]">
              KES Group / Client Stories
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#292524] sm:text-5xl lg:text-6xl">
              Built on trust.
              <span className="block text-[#873F4B]">
                Proven by clients.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#6F5A5D] sm:text-base">
            Strong partnerships are built through reliable
            execution, engineering excellence, and lasting trust.
          </p>
        </div>

        {/* Premium testimonial card */}
        <div
          key={activeIndex}
          aria-live="polite"
          className="relative mt-10 grid overflow-hidden border border-[#E2C6CB] bg-[#F7F5F1] shadow-[0_20px_60px_rgba(91,42,51,0.08)] transition-all duration-300 lg:grid-cols-[0.72fr_1.28fr]"
        >
          {/* Left decorative panel */}
          <div className="relative flex min-h-[220px] flex-col justify-between overflow-hidden bg-[#873F4B] p-7 sm:p-10 lg:min-h-[500px] lg:p-12">
            <span className="absolute -right-12 -top-12 h-56 w-56 rounded-full border border-white/15" />
            <span className="absolute -right-2 -top-2 h-36 w-36 rounded-full border border-white/15" />

            <div className="relative flex items-start justify-between">
              <div className="flex h-14 w-14 items-center justify-center border border-white/30 bg-white/10 text-white">
                <Quote size={28} strokeWidth={1.4} />
              </div>

              <span className="font-mono text-sm tracking-[0.2em] text-white/70">
                {String(activeIndex + 1).padStart(2, "0")}
                <span className="mx-2">/</span>
                {String(testimonials.length).padStart(2, "0")}
              </span>
            </div>

            <div className="relative mt-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/65">
                The KES Experience
              </p>

              <h3 className="mt-4 max-w-xs text-3xl font-medium leading-tight text-white sm:text-4xl">
                Partnerships that stand the test of time.
              </h3>

              <div className="mt-6 h-px w-16 bg-[#EBD9DC]" />
            </div>

            <div className="relative mt-8 flex items-center justify-between">
              <p className="text-xs tracking-wide text-white/75">
                Voices of our partners
              </p>

            </div>
          </div>

          {/* Right testimonial content */}
          <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12 xl:p-14">
            <div>
              <div className="flex items-center gap-1.5">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={16}
                    className="fill-[#873F4B] text-[#873F4B]"
                  />
                ))}

                <span className="ml-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#873F4B]">
                  Client Testimonial
                </span>
              </div>

              <blockquote className="mt-7 text-lg font-medium leading-8 tracking-tight text-[#292524] sm:text-xl sm:leading-9 lg:text-[22px] lg:leading-[1.85]">
                “{current.quote}”
              </blockquote>
            </div>

            <div className="mt-9 flex flex-col gap-6 border-t border-[#E5D7D5] pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#EBD9DC] text-sm font-bold text-[#873F4B]">
                  {current.name
                    .split(" ")
                    .filter((word) => /^[A-Z]/.test(word))
                    .slice(0, 2)
                    .map((word) => word[0])
                    .join("")}
                </div>

                <div>
                  <p className="text-sm font-bold text-[#292524] sm:text-base">
                    {current.name}
                  </p>

                  <p className="mt-1.5 text-xs uppercase tracking-[0.16em] text-[#873F4B]">
                    {current.industry}
                  </p>
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={previous}
                  aria-label="Previous testimonial"
                  className="flex h-12 w-12 items-center justify-center border border-[#D6ADB5] bg-transparent text-[#873F4B] transition duration-300 hover:bg-[#873F4B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#873F4B]"
                >
                  <ChevronLeft size={21} />
                </button>

                <button
                  type="button"
                  onClick={next}
                  aria-label="Next testimonial"
                  className="flex h-12 w-12 items-center justify-center bg-[#873F4B] text-white transition duration-300 hover:bg-[#71323D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#873F4B]"
                >
                  <ChevronRight size={21} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom pagination */}
        <div className="mt-6 flex items-center justify-between">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6F5A5D]">
            Client voices / {String(activeIndex + 1).padStart(2, "0")}
          </p>

          <div className="flex items-center gap-2">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.name}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show testimonial ${index + 1}`}
                aria-current={
                  activeIndex === index ? "true" : undefined
                }
                className={`h-1.5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#873F4B] ${
                  activeIndex === index
                    ? "w-10 bg-[#873F4B]"
                    : "w-4 bg-[#D6ADB5] hover:bg-[#A66B75]"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
