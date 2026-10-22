
import {
  Zap,
  Award,
  TrendingDown,
  ShieldCheck,
  Globe,
  Users,
} from "lucide-react";

const reasons = [
  {
    title: "Faster Delivery",
    description:
      "An integrated factory-fabricated approach designed to streamline construction and support project schedules.",
    icon: Zap,
  },
  {
    title: "Engineering Excellence",
    description:
      "Engineering, design, production, and quality coordination for precision-focused industrial projects.",
    icon: Award,
  },
  {
    title: "Cost Effective Solutions",
    description:
      "Thoughtful material planning and efficient fabrication processes tailored to project requirements.",
    icon: TrendingDown,
  },
  {
    title: "Certified Manufacturing",
    description:
      "Quality-focused manufacturing processes and documented quality checks throughout production.",
    icon: ShieldCheck,
  },
  {
    title: "Nationwide Execution",
    description:
      "Industrial project capabilities with regional coverage tailored to each project's requirements.",
    icon: Globe,
  },
  {
    title: "Dedicated Project Management",
    description:
      "Coordinated project activities, progress communication, and execution planning from start to handover.",
    icon: Users,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-600">
            Why Choose Us
          </p>

          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-red-600" />

          <h2 className="mt-6 text-3xl font-black tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            The KES Advantage
          </h2>

          <p className="mt-5 text-base leading-8 text-neutral-500 sm:text-lg">
            Integrated engineering and industrial construction solutions
            designed around your project requirements.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.title}
                style={{ animationDelay: `${index * 100}ms` }}
                className="group rounded-xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl hover:shadow-neutral-200/60 sm:p-7"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-red-700 text-white transition-colors duration-300 group-hover:bg-red-600">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-bold text-neutral-900 sm:text-lg">
                      {reason.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-neutral-500">
                      {reason.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 h-0.5 w-8 rounded-full bg-red-600 transition-all duration-300 group-hover:w-full" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
