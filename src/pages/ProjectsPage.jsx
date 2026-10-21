
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const projects = [
  {
    name: "Alliance Recept",
    location: "Surat, Gujarat",
    category: "Recycling",
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "ARC7 Metals",
    location: "Surat, Gujarat",
    category: "Automobile",
    image:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "CMP Factory Shed",
    location: "Vapi, Gujarat",
    category: "Manufacturing",
    image:
      "/cmp-factory-shed.jpg",},
  {
    name: "CR3 India",
    location: "Jamnagar, Gujarat",
    category: "Chemical",
    image:
      "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Flair Cryosil",
    location: "Vapi, Gujarat",
    category: "Warehouse",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Godawitt",
    location: "Halol, Gujarat",
    category: "Warehouse",
    image:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Maruti Suzuki",
    location: "Gujarat",
    category: "Automobile",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Meghali",
    location: "Dahej, Gujarat",
    category: "Manufacturing",
    image:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Polymetrix",
    location: "Vapi, Gujarat",
    category: "Chemical",
    image:
      "https://images.unsplash.com/photo-1565608438257-fac3c27beb36?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Plas O Pack",
    location: "Vapi, Gujarat",
    category: "Manufacturing",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Savita Oil",
    location: "Vapi, Gujarat",
    category: "Chemical",
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "SUD Chemie",
    location: "Vadodara, Gujarat",
    category: "Chemical",
    image:
      "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Surja Extrusion",
    location: "Anand, Gujarat",
    category: "Manufacturing",
   image: "/surja-extrusion.jpg",
  },
  {
    name: "Troikaa",
    location: "Ahmedabad, Gujarat",
    category: "Pharma",
   image: "/troikaa.jpg",
  },
  {
    name: "V-Trans",
    location: "Vapi, Gujarat",
    category: "Warehouse",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
  },
];

const categories = [
  "All",
  "Recycling",
  "Automobile",
  "Manufacturing",
  "Chemical",
  "Warehouse",
  "Pharma",
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-gray-950 px-5 py-20 text-white sm:py-28">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-400">
              Our Work
            </p>

            <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl lg:text-6xl">
              Projects That Build Trust
            </h1>

            <p className="mt-6 max-w-2xl leading-8 text-gray-300 sm:text-lg">
              Explore industrial projects across manufacturing, automotive,
              chemical, warehousing, and other sectors.
            </p>
          </div>
        </section>

        {/* Project gallery */}
        <section className="px-5 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-red-700">
                  Project Portfolio
                </p>

                <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Our Recent Projects
                </h2>
              </div>

              <p className="max-w-md text-sm leading-6 text-gray-600">
                Select an industry to explore relevant projects in our
                portfolio.
              </p>
            </div>

            {/* Category filters */}
            <div className="mb-10 flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
                    activeCategory === category
                      ? "border-red-700 bg-red-700 text-white"
                      : "border-gray-300 bg-white text-gray-700 hover:border-red-500 hover:text-red-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Project cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project) => (
                <article
                  key={project.name}
                  className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-56 overflow-hidden bg-gray-200">
                    <img
                      src={project.image}
                      alt={`${project.name} project placeholder`}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-gray-800">
                      {project.category}
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-3 p-5">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {project.name}
                      </h3>

                      <p className="mt-2 text-sm text-gray-500">
                        {project.location}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={22}
                      className="shrink-0 text-red-700"
                    />
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-8 text-sm text-gray-500">
              Showing {filteredProjects.length} of {projects.length} projects.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-red-700 px-5 py-16 text-center text-white sm:py-20">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Have a Project in Mind?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-red-100">
            Let's discuss your requirements and explore the right solution for
            your next industrial project.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-white px-7 py-4 font-bold text-red-700 transition hover:bg-red-50"
          >
            Discuss Your Project <ArrowRight size={18} />
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}
