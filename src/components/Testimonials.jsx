
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
    <section className="bg-white px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-600">
            Client Stories
          </p>

          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-red-600" />

          <h2 className="mt-6 text-3xl font-black tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            What Our Clients Say
          </h2>
        </div>

        <div
          key={activeIndex}
          className="mx-auto mt-12 max-w-4xl rounded-2xl border border-neutral-100 bg-neutral-50 p-6 text-center shadow-sm transition-all duration-300 sm:p-10 lg:p-12"
          aria-live="polite"
        >
          <Quote className="mx-auto h-9 w-9 text-red-600/70" />

          <div
            className="mt-5 flex justify-center gap-1"
            aria-label="Five stars displayed on the original website"
          >
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                size={19}
                className="fill-red-600 text-red-600"
              />
            ))}
          </div>

          <blockquote className="mt-6 text-base italic leading-8 text-neutral-700 sm:text-lg sm:leading-9">
            “{current.quote}”
          </blockquote>

          <div className="mt-8">
            <p className="font-bold text-neutral-900">
              {current.name}
            </p>

            <span className="mt-3 inline-flex rounded-full bg-red-50 px-4 py-1.5 text-xs font-semibold text-red-700">
              {current.industry}
            </span>
          </div>
        </div>

        <div className="mt-7 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={previous}
            aria-label="Previous testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 text-neutral-800 transition hover:border-red-600 hover:bg-red-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
          >
            <ChevronLeft size={20} />
          </button>

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
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-7 bg-red-600"
                    : "w-2.5 bg-neutral-300 hover:bg-red-300"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 text-neutral-800 transition hover:border-red-600 hover:bg-red-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
