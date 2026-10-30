


// import { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   Handshake,
//   MoveUpRight,
//   X,
// } from "lucide-react";

// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const clients = [
//   { name: "Maruti Suzuki", logo: "/clients/maruti-suzuki.png" },
//   { name: "Coromandel", logo: "/clients/coromandel.png" },
//   { name: "Krishna", logo: "/clients/krishna.png" },
//   { name: "Goldi Solar", logo: "/clients/goldi-solar.png" },
//   { name: "ASAL", logo: "/clients/asal.png" },
//   { name: "IndiCold", logo: "/clients/indicold.png" },
//   { name: "V-Trans", logo: "/clients/v-trans.png" },
//   { name: "Flair", logo: "/clients/flair.png" },
//   { name: "Troikaa", logo: "/clients/troikaa.png" },
//   { name: "Spark Minda", logo: "/clients/spark-minda.png" },
//   { name: "Godawitt", logo: "/clients/godawitt.png" },
//   { name: "Savita Oil", logo: "/clients/savita-oil.png" },
//   { name: "CR3 India", logo: "/clients/cr3.png" },
//   { name: "SUD Chemie", logo: "/clients/sud-chemie.png" },
//   { name: "Meghali", logo: "/clients/meghali.png" },
//   { name: "Alliance Recept", logo: "/clients/alliance-recept.png" },
//   { name: "Coraplast", logo: "/clients/coraplast.png" },
//   { name: "Archroma", logo: "/clients/archroma.png" },
//   { name: "Yash Highvoltage", logo: "/clients/yash-highvoltage.png" },
//   { name: "Orbis", logo: "/clients/orbis.png" },
//   { name: "Agrawal", logo: "/clients/agrawal.png" },
//   { name: "Paharpur", logo: "/clients/paharpur.png" },
//   { name: "NML", logo: "/clients/nml.png" },
//   { name: "JBM", logo: "/clients/jbm.png" },
//   { name: "Lumax", logo: "/clients/lumax.png" },
//   { name: "Aerolam", logo: "/clients/aerolam.png" },
//   { name: "TCPL", logo: "/clients/tcpl.png" },
//   { name: "Motherson", logo: "/clients/motherson.png" },
//   { name: "Somic ZF", logo: "/clients/somic-zf.png" },
//   { name: "Napino", logo: "/clients/napino.png" },
//   { name: "Omega Ice Hill", logo: "/clients/omega-ice-hill.png" },
//   { name: "NTF Filter", logo: "/clients/ntf-filter.png" },
//   { name: "Prakash", logo: "/clients/prakash.png" },
//   { name: "Mascot Industrial Park", logo: "/clients/mascot.png" },
//   { name: "Bholikota University", logo: "/clients/bholikota-university.png" },
//   { name: "Rainbow Group of Industries", logo: "/clients/rainbow.png" },
//   { name: "PCL Logistics", logo: "/clients/pcl-logistics.png" },
//   { name: "Surja Extrusion", logo: "/clients/surja-extrusion.png" },
//   { name: "Alaina Healthcare", logo: "/clients/alaina-healthcare.png" },
//   { name: "Polymetrix Solutions", logo: "/clients/polymetrix.png" },
//   { name: "Aristo Plast", logo: "/clients/aristo-plast.png" },
//   { name: "Krishna Maruti", logo: "/clients/krishna-maruti.png" },
//   { name: "Royal Tech", logo: "/clients/royal-tech.png" },
//   { name: "Sparco Multiplast", logo: "/clients/sparco.png" },
//   { name: "Param", logo: "/clients/param.png" },
//   { name: "Consta Cool", logo: "/clients/consta-cool.png" },
//   { name: "total imperial", logo: "/clients/total-imperial.png" },
//   { name: "fnp", logo: "/clients/fnp.png" },
//   { name: "Tandel", logo: "/clients/tandel.png" },
//   { name: "Trans Electro", logo: "/clients/trans-electro.png" },
//   { name: "Superkino", logo: "/clients/superkino.png" },
//   { name: "mpl", logo: "/clients/mpl.png" },
//   { name: "ASHA", logo: "/clients/asha.png" },
//   { name: "SAI", logo: "/clients/sai.png" },
//   { name: "DK fire", logo: "/clients/dk-fire.png" },
//   { name: "CMR", logo: "/clients/cmr.png" },
//   { name: "Houseware", logo: "/clients/houseware.png" },
//   { name: "Prince", logo: "/clients/prince.png" },
//   { name: "Airtech", logo: "/clients/airtech.png" },
//   { name: "aarmonia", logo: "/clients/aarmonia.png" },
//   { name: "Fairdeal", logo: "/clients/fairdeal.png" },
//   { name: "sanden", logo: "/clients/sanden.png" },
//   { name: "Horizon", logo: "/clients/horizon.png" },
//   { name: "Polymetrix", logo: "/clients/polymetrix.png" },
//   { name: "Money-packers", logo: "/clients/money-packers.png" },
//   { name: "avail infra", logo: "/clients/avail-infra.png" },
//   { name: "Akshar", logo: "/clients/akshar.png" },
//   {
//     name: "Akshar Electric Panel Boards Pvt. Ltd.",
//     logo: "/clients/akshar-electric.png",
//   },
//   { name: "CMP", logo: "/clients/cmp.png" },
//   { name: "Krishna Maruti", logo: "/clients/krishna-maruti.png" },
//   { name: "Nil metal", logo: "/clients/nil-metal.png" },
//   { name: "SS Printt O Pack Pvt Ltd", logo: "/clients/ss-print.png" },
// ];


// function ClientLogo({ client }) {
//   const [logoFailed, setLogoFailed] = useState(false);

//   return (
//     <div className="flex h-[90px] w-full items-center justify-center">
//       {!logoFailed ? (
//         <img
//           src={client.logo}
//           alt={`${client.name} logo`}
//           loading="lazy"
//           onError={() => setLogoFailed(true)}
//           className="block max-h-[70px] max-w-[95%] object-contain transition-transform duration-300 group-hover:scale-105"
//         />
//       ) : (
//         <span className="text-center text-sm font-semibold text-[#292524]">
//           {client.name}
//         </span>
//       )}
//     </div>
//   );
// }
// function ClientEntry({ client, index }) {
//   return (
//     <article className="group relative flex min-w-0 items-center justify-center overflow-hidden border border-[#D8CEC7] bg-white px-2 py-2 transition-colors duration-200 hover:border-[#873F4B]">
//       <ClientLogo client={client} />

//       {/* <span className="absolute bottom-1 right-2 text-[9px] text-[#A8A29E]">
//         {String(index + 1).padStart(2, "0")}
//       </span> */}

//       <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#873F4B] transition-all duration-300 group-hover:w-full" />
//     </article>
//   );
// }


// export default function ClientsPage() {
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredClients = clients.filter((client) =>
//     client.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
//   );

//   return (
//     <>
//       <Navbar />

//       <main className="overflow-hidden bg-[#F7F5F1] text-[#292524]">
//         {/* Editorial hero */}
//         <section className="relative px-5 pb-14 pt-14 sm:px-8 sm:pb-20 sm:pt-20 lg:px-12 lg:pb-24 lg:pt-24">
//           <div
//             aria-hidden="true"
//             className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full border border-[#873F4B]/10 sm:h-96 sm:w-96"
//           />

//           <div className="relative mx-auto max-w-7xl">
//             <div className="mb-10 flex items-center gap-3 sm:mb-14">
//               <span className="h-px w-10 bg-[#873F4B]" />
//               <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#873F4B] sm:text-sm">
//                 KES Projects / Our Network
//               </p>
//             </div>

//             <div className="grid gap-10 lg:grid-cols-[1fr_280px] lg:items-end">
//               <div>
//                 <h1 className="max-w-5xl text-5xl font-medium leading-[1.02] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[88px]">
//                   Good work builds
//                   <span className="block font-semibold italic text-[#873F4B]">
//                     lasting relationships.
//                   </span>
//                 </h1>

//                 <p className="mt-7 max-w-2xl text-base leading-8 text-[#78716C] sm:mt-9 sm:text-lg">
//                   Explore the companies featured in our client portfolio.
//                   Each name represents a relationship within the KES
//                   reference list.
//                 </p>
//               </div>

//               <div className="border-l border-[#D8CEC7] pl-5">
//                 <Handshake
//                   size={28}
//                   strokeWidth={1.4}
//                   className="text-[#873F4B]"
//                 />
//                 <p className="mt-5 text-5xl font-medium tracking-tight text-[#873F4B]">
//                   {String(clients.length).padStart(2, "0")}
//                 </p>
//                 <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#78716C]">
//                   Names in our portfolio list
//                 </p>
//               </div>
//             </div>

//             <div className="mt-12 flex items-center justify-between border-y border-[#D8CEC7] py-4 sm:mt-16">
//               <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#78716C]">
//                 Our client network
//               </span>
//               <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#873F4B]">
//                 Built on partnership
//               </span>
//             </div>
//           </div>
//         </section>

//         {/* Client directory */}
//         <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12">
//           <div className="mx-auto max-w-7xl">
//             <div className="grid gap-8 lg:grid-cols-[0.7fr_1fr] lg:items-end">
//               <div>
//                 <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#873F4B]">
//                   The Companies
//                 </p>

//                 <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
//                   A network of names.
//                 </h2>
//               </div>

//               <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
//                 <p className="max-w-sm text-sm leading-7 text-[#78716C]">
//                   Browse the portfolio or search for a particular company.
//                 </p>

//                 <div className="relative w-full sm:max-w-xs">
//                   <input
//                     type="text"
//                     value={searchTerm}
//                     onChange={(event) => setSearchTerm(event.target.value)}
//                     placeholder="Find a client..."
//                     aria-label="Search clients"
//                     className="w-full border-b border-[#C9BDB5] bg-transparent py-3 pr-9 text-sm outline-none transition placeholder:text-[#A8A29E] focus:border-[#873F4B]"
//                   />

//                   {searchTerm && (
//                     <button
//                       type="button"
//                       onClick={() => setSearchTerm("")}
//                       aria-label="Clear search"
//                       className="absolute right-0 top-1/2 -translate-y-1/2 text-[#78716C] hover:text-[#873F4B]"
//                     >
//                       <X size={16} />
//                     </button>
//                   )}
//                 </div>
//               </div>
//             </div>

//             <div className="mt-8 flex items-center justify-between border-y border-[#D8CEC7] py-4">
//               <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#78716C]">
//                 Client directory
//               </p>

//               <p className="text-sm text-[#873F4B]">
//                 {filteredClients.length} of {clients.length}
//               </p>
//             </div>

//             {filteredClients.length > 0 ? (
//              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
//                 {filteredClients.map((client, index) => (
//                   <ClientEntry
//                     key={`${client.name}-${index}`}
//                     client={client}
//                     index={clients.indexOf(client)}
//                   />
//                 ))}
//               </div>
//             ) : (
//               <div className="border-b border-[#D8CEC7] py-20 text-center">
//                 <h3 className="text-2xl font-medium">
//                   No matching clients
//                 </h3>
//                 <p className="mt-3 text-sm text-[#78716C]">
//                   Try another company name.
//                 </p>
//                 <button
//                   type="button"
//                   onClick={() => setSearchTerm("")}
//                   className="mt-5 border-b border-[#873F4B] pb-1 text-sm font-semibold text-[#873F4B]"
//                 >
//                   Clear search
//                 </button>
//               </div>
//             )}
//           </div>
//         </section>

//         {/* Partnership CTA */}
//         <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12">
//           <div className="mx-auto max-w-7xl bg-[#873F4B] px-6 py-10 text-white sm:px-10 sm:py-14 lg:px-16 lg:py-16">
//             <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
//               <div className="max-w-2xl">
//                 <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#F0E0E3]">
//                   Let's work together
//                 </p>

//                 <h2 className="mt-4 text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-5xl">
//                   Have a project in mind?
//                   <span className="block font-semibold italic text-[#F0E0E3]">
//                     Let's start a conversation.
//                   </span>
//                 </h2>

//                 <p className="mt-5 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
//                   Talk to our team about your industrial engineering
//                   and construction requirements.
//                 </p>
//               </div>

//               <Link
//                 to="/contact"
//                 className="inline-flex items-center justify-center gap-3 self-start bg-[#F7F5F1] px-6 py-4 text-sm font-semibold text-[#873F4B] transition hover:bg-[#F0E0E3] md:self-end"
//               >
//                 Start a Conversation
//                 <MoveUpRight size={18} />
//               </Link>
//             </div>
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </>
//   );
// }










import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { MoveUpRight, X } from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";

const clients = [
  { name: "Maruti Suzuki", logo: "/clients/maruti-suzuki.png" },
  { name: "Coromandel", logo: "/clients/coromandel.png" },
  { name: "Krishna", logo: "/clients/krishna.png" },
  { name: "Goldi Solar", logo: "/clients/goldi-solar.png" },
  { name: "ASAL", logo: "/clients/asal.png" },
  { name: "IndiCold", logo: "/clients/indicold.png" },
  { name: "V-Trans", logo: "/clients/v-trans.png" },
  { name: "Flair", logo: "/clients/flair.png" },
  { name: "Troikaa", logo: "/clients/troikaa.png" },
  { name: "Spark Minda", logo: "/clients/spark-minda.png" },
  { name: "Godawitt", logo: "/clients/godawitt.png" },
  { name: "Savita Oil", logo: "/clients/savita-oil.png" },
  { name: "CR3 India", logo: "/clients/cr3.png" },
  { name: "SUD Chemie", logo: "/clients/sud-chemie.png" },
  { name: "Meghali", logo: "/clients/meghali.png" },
  { name: "Alliance Recept", logo: "/clients/alliance-recept.png" },
  { name: "Coraplast", logo: "/clients/coraplast.png" },
  { name: "Archroma", logo: "/clients/archroma.png" },
  { name: "Yash Highvoltage", logo: "/clients/yash-highvoltage.png" },
  { name: "Orbis", logo: "/clients/orbis.png" },
  { name: "Agrawal", logo: "/clients/agrawal.png" },
  { name: "Paharpur", logo: "/clients/paharpur.png" },
  { name: "NML", logo: "/clients/nml.png" },
  { name: "JBM", logo: "/clients/jbm.png" },
  { name: "Lumax", logo: "/clients/lumax.png" },
  { name: "Aerolam", logo: "/clients/aerolam.png" },
  { name: "TCPL", logo: "/clients/tcpl.png" },
  { name: "Motherson", logo: "/clients/motherson.png" },
  { name: "Somic ZF", logo: "/clients/somic-zf.png" },
  { name: "Napino", logo: "/clients/napino.png" },
  { name: "Omega Ice Hill", logo: "/clients/omega-ice-hill.png" },
  { name: "NTF Filter", logo: "/clients/ntf-filter.png" },
  { name: "Prakash", logo: "/clients/prakash.png" },
  { name: "Mascot Industrial Park", logo: "/clients/mascot.png" },
  { name: "Bholikota University", logo: "/clients/bholikota-university.png" },
  { name: "Rainbow Group of Industries", logo: "/clients/rainbow.png" },
  { name: "PCL Logistics", logo: "/clients/pcl-logistics.png" },
  { name: "Surja Extrusion", logo: "/clients/surja-extrusion.png" },
  { name: "Alaina Healthcare", logo: "/clients/alaina-healthcare.png" },
  { name: "Polymetrix Solutions", logo: "/clients/polymetrix.png" },
  { name: "Aristo Plast", logo: "/clients/aristo-plast.png" },
  { name: "Krishna Maruti", logo: "/clients/krishna-maruti.png" },
  { name: "Royal Tech", logo: "/clients/royal-tech.png" },
  { name: "Sparco Multiplast", logo: "/clients/sparco.png" },
  { name: "Param", logo: "/clients/param.png" },
  { name: "Consta Cool", logo: "/clients/consta-cool.png" },
  { name: "total imperial", logo: "/clients/total-imperial.png" },
  { name: "fnp", logo: "/clients/fnp.png" },
  { name: "Tandel", logo: "/clients/tandel.png" },
  { name: "Trans Electro", logo: "/clients/trans-electro.png" },
  { name: "Superkino", logo: "/clients/superkino.png" },
  { name: "mpl", logo: "/clients/mpl.png" },
  { name: "ASHA", logo: "/clients/asha.png" },
  { name: "SAI", logo: "/clients/sai.png" },
  { name: "DK fire", logo: "/clients/dk-fire.png" },
  { name: "CMR", logo: "/clients/cmr.png" },
  { name: "Houseware", logo: "/clients/houseware.png" },
  { name: "Prince", logo: "/clients/prince.png" },
  { name: "Airtech", logo: "/clients/airtech.png" },
  { name: "aarmonia", logo: "/clients/aarmonia.png" },
  { name: "Fairdeal", logo: "/clients/fairdeal.png" },
  { name: "sanden", logo: "/clients/sanden.png" },
  { name: "Horizon", logo: "/clients/horizon.png" },
  { name: "Polymetrix", logo: "/clients/polymetrix.png" },
  { name: "Money-packers", logo: "/clients/money-packers.png" },
  { name: "avail infra", logo: "/clients/avail-infra.png" },
  { name: "Akshar", logo: "/clients/akshar.png" },
  {
    name: "Akshar Electric Panel Boards Pvt. Ltd.",
    logo: "/clients/akshar-electric.png",
  },
  { name: "CMP", logo: "/clients/cmp.png" },
  { name: "Krishna Maruti", logo: "/clients/krishna-maruti.png" },
  { name: "Nil metal", logo: "/clients/nil-metal.png" },
  { name: "SS Printt O Pack Pvt Ltd", logo: "/clients/ss-print.png" },
];


function ClientLogo({ client }) {
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <div className="flex h-[90px] w-full items-center justify-center">
      {!logoFailed ? (
        <motion.img
          src={client.logo}
          alt={`${client.name} logo`}
          loading="lazy"
          onError={() => setLogoFailed(true)}
          initial={{ opacity: 0, scale: 0.72, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ type: "spring", stiffness: 180, damping: 16 }}
          className="block max-h-[70px] max-w-[95%] object-contain transition-transform duration-300 group-hover:scale-110"
        />
      ) : (
        <motion.span
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ type: "spring", stiffness: 180, damping: 16 }}
          className="text-center text-sm font-semibold text-[#292524]"
        >
          {client.name}
        </motion.span>
      )}
    </div>
  );
}
function ClientEntry({ client, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 26, scale: 0.94, rotate: -1.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 18,
        delay: (index % 6) * 0.055,
      }}
      whileHover={{ y: -6, scale: 1.025, rotate: 0.6 }}
      className="group relative flex min-w-0 items-center justify-center overflow-hidden border border-[#D8CEC7] bg-white px-2 py-2 transition-colors duration-200 hover:border-[#873F4B]"
    >
      <ClientLogo client={client} />

      {/* <span className="absolute bottom-1 right-2 text-[9px] text-[#A8A29E]">
        {String(index + 1).padStart(2, "0")}
      </span> */}

      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#873F4B] transition-all duration-300 group-hover:w-full" />
    </motion.article>
  );
}


export default function ClientsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredClients = clients.filter((client) =>
    client.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );

  return (
    <>
      <Navbar />

      <motion.main
        className="overflow-hidden bg-[#F7F5F1] text-[#292524]"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        {/* Reuse the testimonials component from the homepage */}
        <motion.section
          className="px-5 pb-16 pt-5 sm:px-8 sm:pb-20 lg:px-12"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mx-auto max-w-7xl">
            <Testimonials />
          </div>
        </motion.section>

        {/* Client directory */}
        <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1fr] lg:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#873F4B]">
                  The Companies
                </p>

                <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
                  A network of names.
                </h2>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <p className="max-w-sm text-sm leading-7 text-[#78716C]">
                  Browse the portfolio or search for a particular company.
                </p>

                <div className="relative w-full sm:max-w-xs">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    placeholder="Find a client..."
                    aria-label="Search clients"
                    className="w-full border-b border-[#C9BDB5] bg-transparent py-3 pr-9 text-sm outline-none transition placeholder:text-[#A8A29E] focus:border-[#873F4B]"
                  />

                  {searchTerm && (
                    <button
                      type="button"
                      onClick={() => setSearchTerm("")}
                      aria-label="Clear search"
                      className="absolute right-0 top-1/2 -translate-y-1/2 text-[#78716C] hover:text-[#873F4B]"
                    >
                      <X size={16} />
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between border-y border-[#D8CEC7] py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#78716C]">
                Client directory
              </p>

              <p className="text-sm text-[#873F4B]">
                {filteredClients.length} of {clients.length}
              </p>
            </div>

            {filteredClients.length > 0 ? (
             <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {filteredClients.map((client, index) => (
                  <ClientEntry
                    key={`${client.name}-${index}`}
                    client={client}
                    index={clients.indexOf(client)}
                  />
                ))}
              </div>
            ) : (
              <div className="border-b border-[#D8CEC7] py-20 text-center">
                <h3 className="text-2xl font-medium">
                  No matching clients
                </h3>
                <p className="mt-3 text-sm text-[#78716C]">
                  Try another company name.
                </p>
                <button
                  type="button"
                  onClick={() => setSearchTerm("")}
                  className="mt-5 border-b border-[#873F4B] pb-1 text-sm font-semibold text-[#873F4B]"
                >
                  Clear search
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Partnership CTA */}
        <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12">
          <div className="mx-auto max-w-7xl bg-[#873F4B] px-6 py-10 text-white sm:px-10 sm:py-14 lg:px-16 lg:py-16">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#F0E0E3]">
                  Let's work together
                </p>

                <h2 className="mt-4 text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  Have a project in mind?
                  <span className="block font-semibold italic text-[#F0E0E3]">
                    Let's start a conversation.
                  </span>
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
                  Talk to our team about your industrial engineering
                  and construction requirements.
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 self-start bg-[#F7F5F1] px-6 py-4 text-sm font-semibold text-[#873F4B] transition hover:bg-[#F0E0E3] md:self-end"
              >
                Start a Conversation
                <MoveUpRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </motion.main>

      <Footer />
    </>
  );
}
