import {useState} from "react";
import {Link} from "react-router-dom";
import {ArrowRight, Handshake, MoveUpRight} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const clients = [
  {name: "Maruti Suzuki", logo: "/clients/maruti-suzuki.png"},
  {name: "Coromandel", logo: "/clients/coromandel.png"},
  {name: "Krishna", logo: "/clients/krishna.png"},
  {name: "Goldi Solar", logo: "/clients/goldi-solar.png"},
  {name: "ASAL", logo: "/clients/asal.png"},
  {name: "IndiCold", logo: "/clients/indicold.png"},
  {name: "V-Trans", logo: "/clients/v-trans.png"},
  {name: "Flair", logo: "/clients/flair.png"},
  {name: "Troikaa", logo: "/clients/troikaa.png"},
  {name: "Spark Minda", logo: "/clients/spark-minda.png"},
  {name: "Godawitt", logo: "/clients/godawitt.png"},
  {name: "Savita Oil", logo: "/clients/savita-oil.png"},
  {name: "CR3 India", logo: "/clients/cr3.png"},
  {name: "SUD Chemie", logo: "/clients/sud-chemie.png"},
  {name: "Meghali", logo: "/clients/meghali.png"},
  {name: "Alliance Recept", logo: "/clients/alliance-recept.png"},
  {name: "Coraplast", logo: "/clients/coraplast.png"},
  {name: "Archroma", logo: "/clients/archroma.png"},
  {name: "Yash Highvoltage", logo: "/clients/yash-highvoltage.png"},
  {name: "Orbis", logo: "/clients/orbis.png"},
  {name: "Agrawal", logo: "/clients/agrawal.png"},
  {name: "Paharpur", logo: "/clients/paharpur.png"},
  {name: "NML", logo: "/clients/nml.png"},
  {name: "JBM", logo: "/clients/jbm.png"},
  {name: "Lumax", logo: "/clients/lumax.png"},
  {name: "Aerolam", logo: "/clients/aerolam.png"},
  {name: "TCPL", logo: "/clients/tcpl.png"},
  {name: "Motherson", logo: "/clients/motherson.png"},
  {name: "Somic ZF", logo: "/clients/somic-zf.png"},
  {name: "Napino", logo: "/clients/napino.png"},
  {name: "Omega Ice Hill", logo: "/clients/omega-ice-hill.png"},
  {name: "NTF Filter", logo: "/clients/ntf-filter.png"},
  {name: "Prakash", logo: "/clients/prakash.png"},
  {name: "Mascot Industrial Park", logo: "/clients/mascot.png"},
  {name: "Bholikota University", logo: "/clients/bholikota-university.png"},
  {name: "Rainbow Group of Industries", logo: "/clients/rainbow.png"},
  {name: "PCL Logistics", logo: "/clients/pcl-logistics.png"},
  {name: "Surja Extrusion", logo: "/clients/surja-extrusion.png"},
  {name: "Alaina Healthcare", logo: "/clients/alaina-healthcare.png"},
  {name: "Polymetrix Solutions", logo: "/clients/polymetrix.png"},
  {name: "Aristo Plast", logo: "/clients/aristo-plast.png"},
  {name: "Krishna Maruti", logo: "/clients/krishna-maruti.png"},
  {name: "Royal Tech", logo: "/clients/royal-tech.png"},
  {name: "Sparco Multiplast", logo: "/clients/sparco.png"},
  {name: "Param", logo: "/clients/param.png"},
  {name: "Consta Cool", logo: "/clients/consta-cool.png"},
  {name: "total imperial", logo: "/clients/total-imperial.png"},
  {name: "fnp", logo: "/clients/fnp.png"},
  {name: "Tandel", logo: "/clients/tandel.png"},
  {name: "Trans Electro", logo: "/clients/trans-electro.png"},
  {name: "Superkino", logo: "/clients/superkino.png"},
  {name: "mpl", logo: "/clients/mpl.png"},
  {name: "ASHA", logo: "/clients/asha.png"},
  {name: "SAI", logo: "/clients/sai.png"},
  {name: "DK fire", logo: "/clients/dk-fire.png"},

  {name: "CMR", logo: "/clients/cmr.png"},

  {name: "Houseware", logo: "/clients/houseware.png"},

  {name: "Prince", logo: "/clients/prince.png"},
  {name: "Airtech", logo: "/clients/airtech.png"},
  {name: "aarmonia", logo: "/clients/aarmonia.png"},
  {name: "Fairdeal", logo: "/clients/fairdeal.png"},
  {name: "sanden", logo: "/clients/sanden.png"},
  {name: "Horizon", logo: "/clients/horizon.png"},
  {name: "Polymetrix", logo: "/clients/polymetrix.png"},
  {name: "Money-packers", logo: "/clients/money-packers.png"},
  {name: "avail infra", logo: "/clients/avail-infra.png"},
  {name: "Akshar", logo: "/clients/akshar.png"},

  {
    name: "Akshar Electric Panel Boards Pvt. Ltd.",
    logo: "/clients/akshar-electric.png",
  },
  {name: "CMP", logo: "/clients/cmp.png"},
  {name: "Krishna Maruti", logo: "/clients/krishna-maruti.png"},
  {name: "Nil metal", logo: "/clients/nil-metal.png"},
  {name: "SS Printt O Pack Pvt Ltd", logo: "/clients/ss-print.png"},
];

function ClientCard({client}) {
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <article className="group relative flex min-h-36 flex-col items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/50 hover:shadow-[0_12px_35px_rgba(220,38,38,0.12)]">
      <div className="flex h-16 w-full items-center justify-center">
        {!logoFailed ? (
          <img
            src={client.logo}
            alt={`${client.name} logo`}
            loading="lazy"
            onError={() => setLogoFailed(true)}
            className="max-h-16 w-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <span className="text-center text-base font-bold text-gray-800">
            {client.name}
          </span>
        )}
      </div>

      <p className="mt-3 text-center text-xs font-semibold text-gray-600">
        {client.name}
      </p>

      <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-red-700 transition-transform duration-300 group-hover:scale-x-100" />
    </article>
  );
}

export default function ClientsPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#111318] text-white">
        {/* Hero */}
       <section className="relative isolate overflow-hidden border-b border-white/10 px-5 py-16 sm:py-20 lg:py-24">
          <img
            src="/images/clients-hero.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 -z-20 h-full w-full scale-105 object-cover blur-[2px]"
          />
         <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#111318]/90 via-[#111318]/75 to-[#111318]/45" />

          <div className="relative mx-auto max-w-7xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-red-600" />
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-red-400 sm:text-sm">
                Our Partnerships
              </p>
            </div>

            <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Trusted relationships.
              <span className="block text-red-500">Lasting impact.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
              Strong partnerships built on engineering excellence, reliable
              execution, and a shared commitment to quality.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4">
              <Handshake size={28} className="text-red-400" />
              <div>
                <p className="text-2xl font-extrabold">{clients.length}+</p>
                <p className="text-sm text-gray-400">
                  Names in the current portfolio list
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Client portfolio */}
        <section className="px-5 py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-red-400">
                  The Companies
                </p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Built on partnership.
                </h2>
              </div>

              <p className="max-w-md text-sm leading-6 text-gray-400">
                A selection of companies listed in the KES reference portfolio.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
              {clients.map((client) => (
                <ClientCard key={client.name} client={client} />
              ))}
            </div>
          </div>
        </section>

        {/* Partnership CTA */}
        <section className="px-5 pb-16 sm:pb-20 lg:pb-24">
          <div className="relative mx-auto flex max-w-7xl flex-col gap-8 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#25272d] to-[#191a1f] p-7 sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:p-14">
            <div className="max-w-2xl">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-red-700/15 text-red-400">
                <Handshake size={27} />
              </div>

              <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
                Have a project in mind?
                <span className="block text-gray-400">
                  Let's build something great.
                </span>
              </h2>

              <p className="mt-4 leading-7 text-gray-400">
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
        </section>
      </main>

      <Footer />
    </>
  );
}
