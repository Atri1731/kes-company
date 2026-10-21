
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
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Industrial facilities and production infrastructure.",
  },
  {
    icon: Truck,
    title: "Logistics",
    description: "Infrastructure for efficient logistics operations.",
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    description: "Functional and durable warehouse structures.",
  },
  {
    icon: FlaskConical,
    title: "Pharmaceutical",
    description: "Infrastructure for pharmaceutical operations.",
  },
  {
    icon: CarFront,
    title: "Automobile",
    description: "Facilities for automotive manufacturing.",
  },
  {
    icon: Utensils,
    title: "Food Processing",
    description: "Facilities for food production and processing.",
  },
  {
    icon: Shirt,
    title: "Textile",
    description: "Industrial buildings for textile operations.",
  },
  {
    icon: Sun,
    title: "Renewable Energy",
    description: "Infrastructure supporting renewable energy.",
  },
];

export default function Industries() {
  return (
    <section
      id="industries"
      className="bg-white px-5 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-700 sm:text-sm">
            Our Expertise
          </p>

          <div className="mx-auto mb-14 max-w-3xl text-center"/>

          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Industries We Serve
          </h2>

          <p className="mt-5 leading-7 text-gray-600">
            Engineering solutions for diverse industrial sectors, tailored to
            meet the needs of each application.
          </p>
        </div>

        {/* Industry grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <article
                key={industry.title}
                className="group rounded-xl border border-gray-200/80 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl hover:shadow-gray-900/5 sm:p-7"
              >
                <div
                 className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-red-100 bg-red-50 text-red-700 transition duration-300 group-hover:border-red-700 group-hover:bg-red-700 group-hover:text-white">
                  <Icon size={25} strokeWidth={1.8} />
                </div>

                <h3 className="text-base font-bold text-gray-900 sm:text-lg">
                  {industry.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {industry.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
