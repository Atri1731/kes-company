
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { ArrowRight, Handshake, MoveUpRight } from "lucide-react";

// const clients = [
//   { name: "Maruti Suzuki", logo: "/clients/maruti-suzuki.png" },
//   { name: "Coromandel", logo: "/clients/coromandel.png" },
//   { name: "Goldi Solar", logo: "/clients/goldi-solar.png" },
//   { name: "V-Trans", logo: "/clients/v-trans.png" },
//   { name: "Troikaa", logo: "/clients/troikaa.png" },
//   { name: "Flair", logo: "/clients/flair.png" },
//   { name: "Savita Oil", logo: "/clients/savita-oil.png" },
//   { name: "Motherson", logo: "/clients/motherson.png" },
//   { name: "Lumax", logo: "/clients/lumax.png" },
//   { name: "Archroma", logo: "/clients/archroma.png" },
//   { name: "Yash Highvoltage", logo: "/clients/yash-highvoltage.png" },
//   { name: "JBM", logo: "/clients/jbm.png" },
//   { name: "Total Imperial", logo: "/clients/total-imperial.png" },
//   { name: "FNP", logo: "/clients/fnp.png" },
//   { name: "Tandel", logo: "/clients/tandel.png" },
//   { name: "Trans Electro", logo: "/clients/trans-electro.png" },
//   { name: "Superkino", logo: "/clients/superkino.png" },
//   { name: "Aareha", logo: "/clients/aareha.png" },
// ];

// function ClientCard({ client }) {
//   const [logoFailed, setLogoFailed] = useState(false);

//   return (
//     <div className="group flex min-h-[112px] items-center justify-center rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-lg sm:min-h-[125px]">
//       {logoFailed ? (
//         <span className="text-center text-sm font-bold text-gray-700 sm:text-base">
//           {client.name}
//         </span>
//       ) : (
//         <img
//           src={client.logo}
//           alt={`${client.name} logo`}
//           loading="lazy"
//           onError={() => setLogoFailed(true)}
//           className="max-h-[58px] w-full object-contain transition-transform duration-300 group-hover:scale-105 sm:max-h-[68px]"
//         />
//       )}
//     </div>
//   );
// }

// export default function Clients() {
//   return (
//     <section
//       id="clients"
//       className="relative overflow-hidden bg-[#F7F7F8] py-16 text-[#17191F] sm:py-20 lg:py-24"
//     >
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-red-600/5 blur-3xl"
//       />

//       <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
//         {/* Section heading */}
//         <div className="grid gap-5 md:grid-cols-[1.1fr_0.9fr] md:items-end">
//           <div>
//             <div className="mb-4 flex items-center gap-3">
//               <span className="h-[2px] w-10 bg-red-700" />
//               <p className="text-xs font-bold uppercase tracking-[0.22em] text-red-700 sm:text-sm">
//                 Our Partnerships
//               </p>
//             </div>

//             <h2 className="max-w-2xl text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
//               Trusted by industry leaders.
//               <span className="mt-1 block text-red-700">
//                 Built on lasting partnerships.
//               </span>
//             </h2>
//           </div>

//           <p className="max-w-lg leading-7 text-gray-600 md:justify-self-end">
//             Strong partnerships built on engineering excellence, dependable
//             execution, and a shared commitment to quality.
//           </p>
//         </div>

//         {/* Client logo grid */}
//         <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-6">
//           {clients.map((client) => (
//             <ClientCard key={client.name} client={client} />
//           ))}
//         </div>

//         {/* View all clients */}
//         <div className="mt-8 flex justify-center sm:justify-end">
//           <Link
//             to="/clients"
//             className="group inline-flex items-center gap-2 rounded-md border border-red-700 px-5 py-3 text-sm font-bold text-red-700 transition hover:bg-red-700 hover:text-white"
//           >
//             View All Clients
//             <ArrowRight
//               size={17}
//               className="transition-transform group-hover:translate-x-1"
//             />
//           </Link>
//         </div>

//         {/* Partnership CTA */}
//         <div className="relative mt-16 overflow-hidden rounded-2xl bg-[#181A20] p-7 text-white sm:mt-20 sm:p-10 lg:p-12">
//           <div
//             aria-hidden="true"
//             className="pointer-events-none absolute -right-12 -top-16 h-56 w-56 rounded-full border-[32px] border-red-600/10"
//           />

//           <div className="relative flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
//             <div className="max-w-2xl">
//               <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-700/15 text-red-400">
//                 <Handshake size={26} />
//               </div>

//               <h3 className="text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl">
//                 Have a project in mind?
//                 <span className="mt-1 block text-gray-400">
//                   Let's build something great.
//                 </span>
//               </h3>

//               <p className="mt-4 max-w-xl leading-7 text-gray-300">
//                 Talk to our team about your industrial engineering and
//                 construction requirements.
//               </p>
//             </div>

//             <Link
//               to="/contact"
//               className="inline-flex shrink-0 items-center justify-center gap-3 rounded-md bg-red-700 px-6 py-4 text-sm font-bold text-white transition hover:bg-red-600"
//             >
//               Start a Conversation
//               <MoveUpRight size={18} />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Handshake, MoveUpRight, ArrowUpRight } from "lucide-react";

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

function ClientCard({ client, index }) {
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <div
      className={`group relative flex min-h-[108px] items-center justify-center overflow-hidden border border-[#D8CEC7] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#873F4B]/50 hover:shadow-[0_12px_30px_rgba(41,37,36,0.08)] sm:min-h-[125px] ${
        index % 6 === 0 ? "lg:col-span-2" : ""
      }`}
    >
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-[#873F4B] transition-all duration-300 group-hover:w-full" />

      {logoFailed ? (
        <span className="text-center text-sm font-semibold tracking-tight text-[#292524] sm:text-base">
          {client.name}
        </span>
      ) : (
        <img
          src={client.logo}
          alt={`${client.name} logo`}
          loading="lazy"
          onError={() => setLogoFailed(true)}
          className="max-h-[48px] w-full object-contain transition-all duration-300 group-hover:scale-105 sm:max-h-[62px]"
        />
      )}

      <span className="absolute bottom-2 right-3 font-mono text-[9px] tracking-wider text-[#A8A29E]">
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>
  );
}

export default function Clients() {
  return (
    <section
      id="clients"
      className="relative overflow-hidden bg-[#F7F5F1] px-3 py-3 text-[#292524] sm:px-5 sm:py-5 lg:px-8 lg:py-8"
    >
      <div className="mx-auto max-w-[1600px] bg-[#F7F5F1]">
        {/* Editorial header */}
       {/* Editorial header */}
<header className="relative overflow-hidden border-b border-[#D8CEC7] bg-[#F7F5F1] px-5 py-8 text-[#292524] sm:px-10 sm:py-12 lg:px-14 lg:py-16">
  {/* Decorative circles */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute -right-24 -top-16 h-48 w-48 rounded-full border border-[#873F4B]/10 sm:-right-16 sm:-top-24 sm:h-80 sm:w-80"
  />
  <div
    aria-hidden="true"
    className="pointer-events-none absolute -right-12 -top-8 h-32 w-32 rounded-full border border-[#873F4B]/10 sm:-right-4 sm:-top-12 sm:h-56 sm:w-56"
  />

 <div className="relative min-w-0">
    <div className="min-w-0">
      <p className="flex flex-wrap items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#873F4B] sm:text-[10px] sm:tracking-[0.22em]">
        <span className="h-px w-7 shrink-0 bg-[#873F4B] sm:w-8" />
        KES Group / Our Partners
      </p>

      <h2 className="mt-5 max-w-full break-words text-3xl font-semibold leading-[1.08] tracking-[-0.045em] sm:mt-6 sm:text-5xl lg:text-7xl">
        Strong relationships.
        <span className="mt-1 block break-words text-[#873F4B]">
          Shared progress.
        </span>
      </h2>

      <p className="mt-4 max-w-xl break-words text-sm leading-6 text-[#78716C] sm:mt-5 sm:text-base sm:leading-7">
        Building lasting partnerships through engineering excellence,
        dependable execution, and a shared commitment to quality.
      </p>
    </div>


  </div>
</header>

        {/* Client archive */}
        <div className="px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
          <div className="flex flex-col gap-4 border-b border-[#D8CEC7] pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#873F4B]">
                Our network
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                Partners who move us forward.
              </h3>
            </div>

            <p className="max-w-sm text-sm leading-6 text-[#78716C]">
              A growing network built on trust, collaboration, and shared
              ambition.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
            {clients.map((client, index) => (
              <ClientCard key={client.name} client={client} index={index} />
            ))}
          </div>

          {/* Portfolio link */}
          <div className="mt-8 flex flex-col gap-4 border-b border-[#D8CEC7] pb-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-6 text-[#78716C]">
              Working together to deliver projects that stand the test of time.
            </p>

            <Link
              to="/clients"
              className="group inline-flex items-center gap-3 self-start border border-[#873F4B] px-5 py-3 text-sm font-semibold text-[#873F4B] transition-colors hover:bg-[#873F4B] hover:text-white sm:self-auto"
            >
              View All Clients
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Partnership CTA */}
          <div className="relative mt-10 overflow-hidden bg-[#292524] p-6 text-white sm:mt-12 sm:p-10 lg:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-12 -top-16 h-56 w-56 rounded-full border-[32px] border-[#873F4B]/25"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 right-1/3 h-px w-1/3 bg-gradient-to-r from-transparent via-[#D9A8AE]/40 to-transparent"
            />

            <div className="relative flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <div className="mb-5 flex h-12 w-12 items-center justify-center border border-[#D9A8AE]/30 bg-[#873F4B]/25 text-[#D9A8AE]">
                  <Handshake size={25} />
                </div>

                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D9A8AE]">
                  Let's work together
                </p>

                <h3 className="text-2xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                  Have a project in mind?
                  <span className="mt-1 block text-white/55">
                    Let's build something great.
                  </span>
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
                  Talk to our team about your industrial engineering and
                  construction requirements.
                </p>
              </div>

              <Link
                to="/contact"
                className="group inline-flex shrink-0 items-center justify-center gap-3 self-start bg-[#873F4B] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#71323D] md:self-auto"
              >
                Start a Conversation
                <MoveUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}