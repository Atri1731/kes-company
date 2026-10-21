
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Handshake, MoveUpRight } from "lucide-react";

const clients = [
  { name: "Maruti Suzuki", logo: "/clients/maruti-suzuki.png" },
  { name: "Coromandel", logo: "/clients/coromandel.png" },
  { name: "Goldi Solar", logo: "/clients/goldi-solar.png" },
  { name: "V-Trans", logo: "/clients/v-trans.png" },
  { name: "Troikaa", logo: "/clients/troikaa.png" },
  { name: "Flair", logo: "/clients/flair.png" },
  { name: "Savita Oil", logo: "/clients/savita-oil.png" },
  { name: "Motherson", logo: "/clients/motherson.png" },
  { name: "Lumax", logo: "/clients/lumax.png" },
  { name: "Archroma", logo: "/clients/archroma.png" },
  { name: "Yash Highvoltage", logo: "/clients/yash-highvoltage.png" },
  { name: "JBM", logo: "/clients/jbm.png" },
  { name: "Total Imperial", logo: "/clients/total-imperial.png" },
  { name: "FNP", logo: "/clients/fnp.png" },
  { name: "Tandel", logo: "/clients/tandel.png" },
  { name: "Trans Electro", logo: "/clients/trans-electro.png" },
  { name: "Superkino", logo: "/clients/superkino.png" },
  { name: "Aareha", logo: "/clients/aareha.png" },
];

function ClientCard({ client }) {
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <div className="group flex min-h-[112px] items-center justify-center rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-lg sm:min-h-[125px]">
      {logoFailed ? (
        <span className="text-center text-sm font-bold text-gray-700 sm:text-base">
          {client.name}
        </span>
      ) : (
        <img
          src={client.logo}
          alt={`${client.name} logo`}
          loading="lazy"
          onError={() => setLogoFailed(true)}
          className="max-h-[58px] w-full object-contain transition-transform duration-300 group-hover:scale-105 sm:max-h-[68px]"
        />
      )}
    </div>
  );
}

export default function Clients() {
  return (
    <section
      id="clients"
      className="relative overflow-hidden bg-[#F7F7F8] py-16 text-[#17191F] sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-red-600/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <div className="grid gap-5 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-red-700" />
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-red-700 sm:text-sm">
                Our Partnerships
              </p>
            </div>

            <h2 className="max-w-2xl text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Trusted by industry leaders.
              <span className="mt-1 block text-red-700">
                Built on lasting partnerships.
              </span>
            </h2>
          </div>

          <p className="max-w-lg leading-7 text-gray-600 md:justify-self-end">
            Strong partnerships built on engineering excellence, dependable
            execution, and a shared commitment to quality.
          </p>
        </div>

        {/* Client logo grid */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-6">
          {clients.map((client) => (
            <ClientCard key={client.name} client={client} />
          ))}
        </div>

        {/* View all clients */}
        <div className="mt-8 flex justify-center sm:justify-end">
          <Link
            to="/clients"
            className="group inline-flex items-center gap-2 rounded-md border border-red-700 px-5 py-3 text-sm font-bold text-red-700 transition hover:bg-red-700 hover:text-white"
          >
            View All Clients
            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Partnership CTA */}
        <div className="relative mt-16 overflow-hidden rounded-2xl bg-[#181A20] p-7 text-white sm:mt-20 sm:p-10 lg:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-16 h-56 w-56 rounded-full border-[32px] border-red-600/10"
          />

          <div className="relative flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-700/15 text-red-400">
                <Handshake size={26} />
              </div>

              <h3 className="text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl">
                Have a project in mind?
                <span className="mt-1 block text-gray-400">
                  Let's build something great.
                </span>
              </h3>

              <p className="mt-4 max-w-xl leading-7 text-gray-300">
                Talk to our team about your industrial engineering and
                construction requirements.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-md bg-red-700 px-6 py-4 text-sm font-bold text-white transition hover:bg-red-600"
            >
              Start a Conversation
              <MoveUpRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
