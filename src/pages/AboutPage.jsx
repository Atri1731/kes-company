





// import { Link } from "react-router-dom";
// import {
//   ArrowDownRight,
//   ArrowRight,
//   ArrowUpRight,
//   Award,
//   Building2,
//   Check,
//   Eye,
//   Factory,
//   Lightbulb,
//   ShieldCheck,
//   Target,
//   Users,
//   Workflow,
// } from "lucide-react";

// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const stats = [
//   { number: "350+", label: "Projects delivered" },
//   { number: "15+", label: "Years of experience" },
//   { number: "50+", label: "Expert engineers" },
//   { number: "100%", label: "Quality commitment" },
// ];

// const milestones = [
//   {
//     year: "2018",
//     title: "The beginning",
//     description: "KES Engineering Products was founded.",
//   },
//   {
//     year: "2020",
//     title: "A new chapter",
//     description: "KES Projects Pvt. Ltd. was founded with 9 employees.",
//   },
//   {
//     year: "2021",
//     title: "Manufacturing expansion",
//     description:
//       "Opened a manufacturing plant near Chhatral, Ahmedabad, covering 20,000 sq. ft.",
//   },
//   {
//     year: "2022",
//     title: "Major project milestone",
//     description:
//       "Received a large PEB project involving 2,200 tons for a pharmaceutical company in Ahmedabad.",
//   },
//   {
//     year: "2022",
//     title: "Facility expansion",
//     description:
//       "Moved the manufacturing facility to a new 60,000 sq. ft. site in Kadadara, Gandhinagar, with modern machinery.",
//   },
//   {
//     year: "2023",
//     title: "Growing our presence",
//     description: "Opened sales offices in Gandhinagar and Navsari.",
//   },
//   {
//     year: "2024",
//     title: "Scaling production",
//     description:
//       "Expanded the manufacturing factory shed and increased production capacity.",
//   },
//   {
//     year: "2025",
//     title: "Quality recognition",
//     description: "Received the Quality ISO Certificate.",
//   },
// ];

// const leaders = [
//   {
//     number: "01",
//     name: "Upesh Patel",
//     role: "Director",
//     initials: "UP",
//     bio:
//       "Mr. Upesh Patel brings more than 18 years of dedicated experience in the Pre Engineered Building (PEB) industry. With his broad perspective and leadership skills, he oversees the entire plant operations and drives the company's future expansion initiatives. His professional journey reflects a deep understanding of diverse business functions, including project management, financials, product development, quality assurance, planning, and client engagement. His ability to integrate technical knowledge with strategic business acumen makes him a key contributor to the company's sustained growth and success.",
//   },
//   {
//     number: "02",
//     name: "Jitesh Mistry",
//     role: "Director",
//     initials: "JM",
//     bio:
//       "Mr. Jitesh Mistry is a young and dynamic professional with a graduation in BE Mechanical and over 18 years of experience in the PEB field. He has successfully executed more than 1,500 buildings across diverse segments. Currently, he spearheads Sales and Marketing at KES, focusing on strengthening client relationships, driving business growth, and delivering competitive solutions aligned with evolving market trends.",
//   },
//   {
//     number: "03",
//     name: "Tejas Patel",
//     role: "Director",
//     initials: "TP",
//     bio:
//       "Mr. Tejas Patel comes from a business family and, as an engineering graduate, possesses strong leadership qualities to manage and guide teams effectively. He oversees production operations, ensuring efficiency, quality, and timely delivery across plant activities. With prior experience in stainless steel trading, he brings valuable commercial insight. His role extends beyond production, as he is actively involved in purchasing, financing, and legal matters. His ability to combine technical acumen with business foresight makes him a pivotal force in driving operational excellence and supporting the company's long-term vision.",
//   },
// ];

// const policyPoints = [
//   "Every component is engineered and inspected to ensure structural integrity and compliance with national and international standards.",
//   "We are dedicated to meeting our clients' expectations through responsive service, technical support, and on-time delivery.",
//   "We cultivate a skilled, safety-conscious, and motivated team that drives our commitment to excellence.",
//   "We enforce strict safety protocols and maintain regulatory compliance across all operations and job sites.",
//   "We embrace modern engineering practices and technologies that promote resource efficiency and align with sustainable development principles.",
// ];

// const values = [
//   {
//     number: "01",
//     title: "Integrity",
//     description:
//       "We do what we say, and we say what we do. Transparency and honesty are non-negotiable.",
//     icon: ShieldCheck,
//   },
//   {
//     number: "02",
//     title: "Excellence",
//     description:
//       "We pursue engineering excellence in every design, every weld, and every project we deliver.",
//     icon: Award,
//   },
//   {
//     number: "03",
//     title: "Safety",
//     description:
//       "Zero accidents is not a goal — it is a standard. Safety is embedded in everything we do.",
//     icon: Users,
//   },
//   {
//     number: "04",
//     title: "Innovation",
//     description:
//       "We continuously invest in new technologies and methodologies to deliver better outcomes.",
//     icon: Lightbulb,
//   },
// ];

// const subsidiaries = [
//   {
//     shortName: "KBL",
//     name: "KES Builtech LLP",
//     description:
//       "Specializes in infrastructure planning and development, offering end-to-end solutions from project planning and design to execution, with a focus on efficient, sustainable, and quality-driven infrastructure projects.",
//     icon: Building2,
//   },
//   {
//     shortName: "KFL",
//     name: "KES Fabtech LLP",
//     description:
//       "Engaged in the fabrication of high-quality steel structures and engineered components, providing reliable and customized solutions for industrial and construction requirements.",
//     icon: Factory,
//   },
// ];

// export default function AboutPage() {
//   return (
//     <>
//       <Navbar />

//       <main className="overflow-hidden bg-[#F7F5F1] text-[#292524]">
//         {/* 01 — Editorial introduction */}
//         <section className="relative px-5 pb-14 pt-14 sm:px-8 sm:pb-20 sm:pt-20 lg:px-12 lg:pb-24 lg:pt-24">
//           <div
//             aria-hidden="true"
//             className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full border border-[#EBD9DC] sm:-right-16"
//           />
//           <div
//             aria-hidden="true"
//             className="pointer-events-none absolute -right-16 top-24 h-64 w-64 rounded-full border border-[#C99AA2]/50"
//           />

//           <div className="relative mx-auto max-w-[1440px]">
//             <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
//               <div className="lg:col-span-8">
//                 <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#873F4B] sm:text-xs">
//                   <span className="h-px w-9 bg-[#873F4B]" />
//                   The KES Story
//                 </p>

//                 <h1 className="mt-6 max-w-5xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-6xl lg:text-7xl xl:text-8xl">
//                   Built on trust.
//                   <span className="block text-[#873F4B]">
//                     Engineered for progress.
//                   </span>
//                 </h1>
//               </div>

//               <div className="lg:col-span-4 lg:pb-2">
//                 <p className="max-w-lg text-sm leading-7 text-[#78716C] sm:text-base sm:leading-8">
//                   KES Group provides engineering solutions for industrial
//                   buildings, pre-engineered structures, steel fabrication,
//                   wastewater treatment systems, and EPC projects.
//                 </p>

//                 <Link
//                   to="/projects"
//                   className="group mt-6 inline-flex items-center gap-3 border-b border-[#873F4B] pb-2 text-sm font-semibold text-[#873F4B]"
//                 >
//                   Discover our work
//                   <ArrowUpRight
//                     size={17}
//                     className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
//                   />
//                 </Link>
//               </div>
//             </div>

//             {/* Industrial image banner */}
//             <div className="relative mt-10 min-h-[280px] overflow-hidden bg-[#292524] sm:mt-14 sm:min-h-[400px] lg:min-h-[480px]">
//               <img
//                 src="/images/kes-industrial-hero.jpg"
//                 alt="Industrial steel fabrication and engineering"
//                 className="absolute inset-0 h-full w-full object-cover object-center"
//               />

//               <div className="absolute inset-0 bg-gradient-to-r from-[#292524]/90 via-[#292524]/40 to-transparent" />

//               <div className="absolute inset-x-0 bottom-0 flex flex-col justify-between gap-6 p-6 sm:p-10 lg:flex-row lg:items-end lg:p-12">
//                 <div className="max-w-xl">
//                   <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#EBD9DC]">
//                     Our foundation
//                   </p>
//                   <h2 className="mt-3 text-2xl font-semibold leading-tight text-white sm:text-4xl">
//                     Where trust is the foundation and steel is the frame.
//                   </h2>
//                 </div>

//                 <div className="flex items-center gap-3 self-start border border-white/30 bg-white/10 px-4 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-sm lg:self-auto">
//                   <Workflow size={17} />
//                   Engineering & construction
//                 </div>
//               </div>
//             </div>

//             {/* 02 — Compact statistics */}
//             <div className="grid grid-cols-2 border-b border-[#D8CEC7] sm:grid-cols-4">
//               {stats.map((stat, index) => (
//                 <div
//                   key={stat.label}
//                   className={`py-6 sm:py-8 ${
//                     index > 0
//                       ? "border-l border-[#D8CEC7] pl-4 sm:pl-7"
//                       : ""
//                   }`}
//                 >
//                   <p className="text-3xl font-semibold tracking-tight text-[#873F4B] sm:text-4xl lg:text-5xl">
//                     {stat.number}
//                   </p>
//                   <p className="mt-2 text-xs leading-5 text-[#78716C] sm:text-sm">
//                     {stat.label}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

   
// {/* 03 — Our journey: light editorial timeline */}
// <section className="relative overflow-hidden bg-[#F7F5F1] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
//   <div className="mx-auto max-w-[1440px]">

//     {/* Section heading */}
//     <div className="grid gap-7 border-b border-[#D8CEC7] pb-9 lg:grid-cols-[1fr_0.65fr] lg:items-end">
//       <div>
//         <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#873F4B] sm:text-xs">
//           <span className="h-px w-9 bg-[#873F4B]" />
//           Our journey
//         </p>

//         <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#292524] sm:text-5xl lg:text-6xl">
//           Every milestone
//           <span className="block text-[#873F4B]">
//             moves us forward.
//           </span>
//         </h2>
//       </div>

//       <p className="max-w-md text-sm leading-7 text-[#78716C] sm:text-base lg:justify-self-end">
//         From our founding to manufacturing expansion and quality
//         recognition, each milestone represents another step in the
//         growth of KES Group.
//       </p>
//     </div>

//     {/* Milestone overview */}
//     <div className="mt-8 flex flex-wrap items-center gap-3">
//       <span className="bg-[#873F4B] px-4 py-2 text-xs font-semibold text-white">
//         2018 — 2025
//       </span>
//       <span className="text-xs text-[#78716C]">
//         Eight milestones · One growing vision
//       </span>
//     </div>

//     {/* Desktop timeline */}
//     <div className="relative mt-14 hidden lg:block">
//       {/* Connecting line */}
//       <div className="absolute left-0 right-0 top-[15px] h-px bg-[#C99AA2]" />

//       <div className="grid grid-cols-4 gap-x-8 gap-y-12">
//         {milestones.map((milestone, index) => (
//           <article key={`${milestone.year}-${milestone.title}`} className="group relative">
//             {/* Timeline marker */}
//             <div className="relative z-10 flex h-[31px] items-center">
//               <span className="flex h-[31px] w-[31px] items-center justify-center rounded-full border border-[#C99AA2] bg-[#F7F5F1] transition-colors duration-300 group-hover:border-[#873F4B] group-hover:bg-[#873F4B]">
//                 <span className="h-2 w-2 rounded-full bg-[#873F4B] transition-colors group-hover:bg-white" />
//               </span>
//             </div>

//             {/* Milestone content */}
//             <div className="mt-5 border-t-2 border-[#D8CEC7] bg-white p-5 shadow-[0_8px_30px_rgba(41,37,36,0.035)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#873F4B] group-hover:shadow-[0_14px_35px_rgba(135,63,75,0.10)]">
//               <div className="flex items-center justify-between gap-3">
//                 <span className="text-2xl font-semibold tracking-tight text-[#873F4B]">
//                   {milestone.year}
//                 </span>
//                 <span className="font-mono text-xs text-[#B9A5A1]">
//                   {String(index + 1).padStart(2, "0")}
//                 </span>
//               </div>

//               <h3 className="mt-4 text-base font-semibold text-[#292524]">
//                 {milestone.title}
//               </h3>

//               <p className="mt-2 text-sm leading-6 text-[#78716C]">
//                 {milestone.description}
//               </p>
//             </div>
//           </article>
//         ))}
//       </div>
//     </div>

//     {/* Mobile and tablet timeline */}
//     <div className="mt-10 lg:hidden">
//       <div className="relative">
//         {/* Vertical connector */}
//         <div className="absolute bottom-8 left-[15px] top-4 w-px bg-[#C99AA2]" />

//         <div className="space-y-5">
//           {milestones.map((milestone, index) => (
//             <article
//               key={`${milestone.year}-${milestone.title}`}
//               className="relative grid grid-cols-[32px_1fr] gap-4"
//             >
//               <div className="relative z-10 flex justify-center pt-5">
//                 <span className="flex h-[31px] w-[31px] items-center justify-center rounded-full border border-[#C99AA2] bg-[#F7F5F1]">
//                   <span className="h-2 w-2 rounded-full bg-[#873F4B]" />
//                 </span>
//               </div>

//               <div className="border border-[#E5DCD6] bg-white p-5 sm:p-6">
//                 <div className="flex items-center justify-between gap-3">
//                   <span className="text-2xl font-semibold text-[#873F4B]">
//                     {milestone.year}
//                   </span>
//                   <span className="font-mono text-xs text-[#B9A5A1]">
//                     {String(index + 1).padStart(2, "0")}
//                   </span>
//                 </div>

//                 <h3 className="mt-3 font-semibold text-[#292524]">
//                   {milestone.title}
//                 </h3>

//                 <p className="mt-2 text-sm leading-6 text-[#78716C]">
//                   {milestone.description}
//                 </p>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </div>

//     {/* Closing note */}
//     <div className="mt-10 flex flex-col gap-3 border-t border-[#D8CEC7] pt-6 sm:flex-row sm:items-center sm:justify-between">
//       <p className="text-sm text-[#78716C]">
//         Built through experience, strengthened by every project.
//       </p>

//       <Link
//         to="/projects"
//         className="group inline-flex items-center gap-2 text-sm font-semibold text-[#873F4B] transition-colors hover:text-[#71323D]"
//       >
//         Explore our projects
//         <ArrowRight
//           size={17}
//           className="transition-transform group-hover:translate-x-1"
//         />
//       </Link>
//     </div>

//   </div>
// </section>


//         {/* 04 — Vision and mission */}
//         <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
//           <div className="mx-auto max-w-[1440px]">
//             <div className="mb-10 max-w-3xl sm:mb-14">
//               <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#873F4B]">
//                 <span className="h-px w-8 bg-[#873F4B]" />
//                 Our foundation
//               </p>

//               <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
//                 Principles behind
//                 <span className="text-[#873F4B]"> every structure.</span>
//               </h2>

//               <p className="mt-4 max-w-2xl text-sm leading-7 text-[#78716C] sm:text-base">
//                 The vision, mission, and policies that guide our engineering
//                 decisions and project execution.
//               </p>
//             </div>

//             <div className="grid gap-5 lg:grid-cols-2">
//               <article className="relative overflow-hidden border border-[#D8CEC7] bg-white p-7 sm:p-10 lg:p-12">
//                 <span className="absolute right-5 top-1 text-7xl font-semibold text-[#F0E0E3] sm:right-8 sm:text-8xl">
//                   01
//                 </span>

//                 <div className="relative">
//                   <div className="flex h-12 w-12 items-center justify-center bg-[#F0E0E3] text-[#873F4B]">
//                     <Eye size={23} />
//                   </div>

//                   <h3 className="mt-7 text-2xl font-semibold">Our Vision</h3>

//                   <p className="mt-4 max-w-xl text-sm leading-7 text-[#6F5A5D] sm:text-base sm:leading-8">
//                     To be India's leading provider of cutting-edge
//                     Pre-engineered Building solutions, known for engineering
//                     excellence, client trust, and sustainable growth.
//                   </p>
//                 </div>
//               </article>

//               <article className="relative overflow-hidden border border-[#D8CEC7] bg-[#F0E0E3] p-7 sm:p-10 lg:p-12">
//                 <span className="absolute right-5 top-1 text-7xl font-semibold text-[#D6ADB5]/50 sm:right-8 sm:text-8xl">
//                   02
//                 </span>

//                 <div className="relative">
//                   <div className="flex h-12 w-12 items-center justify-center bg-[#873F4B] text-white">
//                     <Target size={23} />
//                   </div>

//                   <h3 className="mt-7 text-2xl font-semibold">Our Mission</h3>

//                   <p className="mt-4 max-w-xl text-sm leading-7 text-[#6F5A5D] sm:text-base sm:leading-8">
//                     Design, manufacture, and erect high-performance steel
//                     structures to meet evolving industry needs and build
//                     lasting client relationships through integrity,
//                     transparency, and consistent performance. We uphold high
//                     standards of quality, safety, and operational efficiency
//                     in every stage of project execution.
//                   </p>
//                 </div>
//               </article>
//             </div>

//             {/* Policy statement — split editorial layout */}
//             <div className="mt-5 grid overflow-hidden border border-[#D8CEC7] bg-white lg:grid-cols-[0.72fr_1.28fr]">
//               <div className="relative overflow-hidden bg-[#873F4B] p-7 text-white sm:p-10 lg:p-12">
//                 <span className="absolute -right-2 -top-8 text-9xl font-semibold text-white/10">
//                   03
//                 </span>

//                 <div className="relative">
//                   <div className="flex h-12 w-12 items-center justify-center border border-white/25 bg-white/10">
//                     <Workflow size={23} />
//                   </div>

//                   <h3 className="mt-7 text-2xl font-semibold">
//                     Policy Statement
//                   </h3>

//                   <p className="mt-3 max-w-xs text-sm leading-7 text-white/80">
//                     Quality, safety, and accountability in every operation.
//                   </p>
//                 </div>
//               </div>

//               <div className="grid gap-x-8 gap-y-5 p-6 sm:grid-cols-2 sm:p-8 lg:p-10">
//                 {policyPoints.map((point) => (
//                   <div key={point} className="flex items-start gap-3">
//                     <Check
//                       size={18}
//                       className="mt-1 shrink-0 text-[#873F4B]"
//                     />
//                     <p className="text-sm leading-6 text-[#6F5A5D]">
//                       {point}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* 05 — Leadership */}
//         <section className="border-y border-[#D8CEC7] bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
//           <div className="mx-auto max-w-[1440px]">
//             <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
//               <div>
//                 <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#873F4B]">
//                   <span className="h-px w-8 bg-[#873F4B]" />
//                   The people behind KES
//                 </p>

//                 <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
//                   Meet our
//                   <span className="text-[#873F4B]"> leaders.</span>
//                 </h2>
//               </div>

//               <p className="max-w-sm text-sm leading-7 text-[#78716C] sm:text-base">
//                 Experienced professionals driving KES Engineering's vision
//                 and growth.
//               </p>
//             </div>

//             <div className="mt-10 border-t border-[#D8CEC7]">
//               {leaders.map((leader) => (
//                 <article
//                   key={leader.name}
//                   className="grid gap-5 border-b border-[#D8CEC7] py-8 sm:grid-cols-[110px_1fr] sm:gap-8 sm:py-10 lg:grid-cols-[150px_0.65fr_1.35fr] lg:gap-10"
//                 >
//                   <div className="flex items-start gap-4 sm:block">
//                     <div className="flex h-16 w-16 shrink-0 items-center justify-center border border-[#C99AA2] bg-[#F0E0E3] text-xl font-semibold text-[#873F4B] sm:h-24 sm:w-24 sm:text-2xl">
//                       {leader.initials}
//                     </div>

//                     <span className="pt-1 font-mono text-xs text-[#A66B75] sm:mt-4 sm:block">
//                       LEADER / {leader.number}
//                     </span>
//                   </div>

//                   <div>
//                     <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
//                       {leader.name}
//                     </h3>
//                     <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-[#873F4B]">
//                       {leader.role}
//                     </p>
//                   </div>

//                   <p className="text-sm leading-7 text-[#6F5A5D] sm:text-base sm:leading-8">
//                     {leader.bio}
//                   </p>
//                 </article>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* 06 — Subsidiary companies */}
//         <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
//           <div className="mx-auto max-w-[1440px]">
//             <div className="max-w-3xl">
//               <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#873F4B]">
//                 <span className="h-px w-8 bg-[#873F4B]" />
//                 Business verticals
//               </p>

//               <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
//                 Specialized expertise.
//                 <span className="block text-[#873F4B]">
//                   One shared vision.
//                 </span>
//               </h2>

//               <p className="mt-4 max-w-2xl text-sm leading-7 text-[#78716C] sm:text-base">
//                 Through our specialized subsidiaries, we provide engineering,
//                 construction, and infrastructure solutions across multiple
//                 industries.
//               </p>
//             </div>

//             <div className="mt-10 grid gap-5 lg:grid-cols-2">
//               {subsidiaries.map((company, index) => {
//                 const Icon = company.icon;

//                 return (
//                   <article
//                     key={company.shortName}
//                     className={`group relative overflow-hidden border p-7 transition-colors duration-300 sm:p-10 lg:p-12 ${
//                       index === 0
//                         ? "border-[#873F4B] bg-[#873F4B] text-white"
//                         : "border-[#D8CEC7] bg-white text-[#292524] hover:border-[#C99AA2]"
//                     }`}
//                   >
//                     <div className="flex items-start justify-between gap-4">
//                       <div
//                         className={`flex h-12 w-12 items-center justify-center ${
//                           index === 0
//                             ? "bg-white/10 text-white"
//                             : "bg-[#F0E0E3] text-[#873F4B]"
//                         }`}
//                       >
//                         <Icon size={23} />
//                       </div>

//                       <span
//                         className={`font-mono text-sm ${
//                           index === 0 ? "text-white/60" : "text-[#A66B75]"
//                         }`}
//                       >
//                         {company.shortName}
//                       </span>
//                     </div>

//                     <h3 className="mt-8 text-2xl font-semibold sm:text-3xl">
//                       {company.name}
//                     </h3>

//                     <p
//                       className={`mt-4 max-w-xl text-sm leading-7 sm:text-base sm:leading-8 ${
//                         index === 0 ? "text-white/80" : "text-[#78716C]"
//                       }`}
//                     >
//                       {company.description}
//                     </p>

//                     <div
//                       className={`mt-8 h-px w-14 transition-all duration-300 group-hover:w-24 ${
//                         index === 0 ? "bg-white/60" : "bg-[#873F4B]"
//                       }`}
//                     />
//                   </article>
//                 );
//               })}
//             </div>
//           </div>
//         </section>

//         {/* 07 — Core values */}
//         <section className="bg-[#F0E0E3] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
//           <div className="mx-auto max-w-[1440px]">
//             <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
//               <div className="lg:col-span-7">
//                 <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#873F4B]">
//                   <span className="h-px w-8 bg-[#873F4B]" />
//                   What drives us
//                 </p>

//                 <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
//                   Purpose in every
//                   <span className="block text-[#873F4B]">
//                     project we deliver.
//                   </span>
//                 </h2>
//               </div>

//               <p className="max-w-md text-sm leading-7 text-[#6F5A5D] sm:text-base lg:col-span-5 lg:justify-self-end">
//                 Our values guide how we work, how we solve challenges, and
//                 how we build lasting relationships with our clients.
//               </p>
//             </div>

//             <div className="mt-10 border-t border-[#C99AA2]">
//               {values.map((value) => {
//                 const Icon = value.icon;

//                 return (
//                   <article
//                     key={value.title}
//                     className="group grid gap-4 border-b border-[#C99AA2] py-6 sm:grid-cols-[70px_1fr_1.2fr] sm:items-center sm:gap-8 sm:py-8"
//                   >
//                     <span className="font-mono text-sm text-[#A66B75]">
//                       {value.number}
//                     </span>

//                     <div className="flex items-center gap-4">
//                       <Icon
//                         size={23}
//                         strokeWidth={1.6}
//                         className="shrink-0 text-[#873F4B] transition-transform group-hover:scale-110"
//                       />
//                       <h3 className="text-xl font-semibold sm:text-2xl">
//                         {value.title}
//                       </h3>
//                     </div>

//                     <p className="text-sm leading-7 text-[#6F5A5D] sm:text-base">
//                       {value.description}
//                     </p>
//                   </article>
//                 );
//               })}
//             </div>
//           </div>
//         </section>

//         {/* 08 — Closing CTA */}
//         <section className="px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
//           <div className="relative mx-auto max-w-[1440px] overflow-hidden bg-[#873F4B] px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-16 lg:py-20">
//             <div
//               aria-hidden="true"
//               className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full border border-white/15"
//             />
//             <div
//               aria-hidden="true"
//               className="pointer-events-none absolute -right-5 -top-14 h-52 w-52 rounded-full border border-white/15"
//             />

//             <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
//               <div className="max-w-3xl">
//                 <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#F0E0E3] sm:text-xs">
//                   Let's build something meaningful
//                 </p>

//                 <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
//                   Ready to bring your next project to life?
//                 </h2>

//                 <p className="mt-5 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
//                   Let's discuss your industrial project and find the right
//                   engineering solution for your requirements.
//                 </p>
//               </div>

//               <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
//                 <Link
//                   to="/contact"
//                   className="inline-flex items-center justify-center gap-3 bg-[#F7F5F1] px-6 py-4 text-sm font-semibold text-[#873F4B] transition hover:bg-white"
//                 >
//                   Request a Quote
//                   <ArrowRight size={18} />
//                 </Link>

//                 <Link
//                   to="/projects"
//                   className="inline-flex items-center justify-center gap-3 border border-white/40 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
//                 >
//                   View Projects
//                   <ArrowUpRight size={18} />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </>
//   );
// }








import {

  motion,

  useReducedMotion,

  useInView,

  useMotionValue,

  useTransform,

  animate,

} from "motion/react";

import { useEffect, useRef } from "react";

import { Link } from "react-router-dom";

import {

  ArrowRight,

  ArrowUpRight,

  Award,

  Building2,

  Check,

  Eye,

  Factory,

  Lightbulb,

  ShieldCheck,

  Target,

  Users,

  Workflow,

} from "lucide-react";

import Navbar from "../components/Navbar";

import Footer from "../components/Footer";

const stats = [

  { number: "350+", label: "Projects delivered" },

  { number: "15+", label: "Years of experience" },

  { number: "50+", label: "Expert engineers" },

  { number: "100%", label: "Quality commitment" },

];

const milestones = [

  {

    year: "2018",

    title: "The beginning",

    description: "KES Engineering Products was founded.",

  },

  {

    year: "2020",

    title: "A new chapter",

    description: "KES Projects Pvt. Ltd. was founded with 9 employees.",

  },

  {

    year: "2021",

    title: "Manufacturing expansion",

    description:

      "Opened a manufacturing plant near Chhatral, Ahmedabad, covering 20,000 sq. ft.",

  },

  {

    year: "2022",

    title: "Major project milestone",

    description:

      "Received a large PEB project involving 2,200 tons for a pharmaceutical company in Ahmedabad.",

  },

  {

    year: "2022",

    title: "Facility expansion",

    description:

      "Moved the manufacturing facility to a new 60,000 sq. ft. site in Kadadara, Gandhinagar, with modern machinery.",

  },

  {

    year: "2023",

    title: "Growing our presence",

    description: "Opened sales offices in Gandhinagar and Navsari.",

  },

  {

    year: "2024",

    title: "Scaling production",

    description:

      "Expanded the manufacturing factory shed and increased production capacity.",

  },

  {

    year: "2025",

    title: "Quality recognition",

    description: "Received the Quality ISO Certificate.",

  },

];

const leaders = [

  {

    number: "01",

    name: "Upesh Patel",

    image: "/images/team/upesh-patel.jpg",

    role: "Director",

    initials: "UP",

    bio:

      "Mr. Upesh Patel brings more than 18 years of dedicated experience in the Pre Engineered Building (PEB) industry. With his broad perspective and leadership skills, he oversees the entire plant operations and drives the company's future expansion initiatives. His professional journey reflects a deep understanding of diverse business functions, including project management, financials, product development, quality assurance, planning, and client engagement. His ability to integrate technical knowledge with strategic business acumen makes him a key contributor to the company's sustained growth and success.",

  },

  {

    number: "02",

    name: "Jitesh Mistry",

    image: "/images/team/jitesh-mistry.jpg",

    role: "Director",

    initials: "JM",

    bio:

      "Mr. Jitesh Mistry is a young and dynamic professional with a graduation in BE Mechanical and over 18 years of experience in the PEB field. He has successfully executed more than 1,500 buildings across diverse segments. Currently, he spearheads Sales and Marketing at KES, focusing on strengthening client relationships, driving business growth, and delivering competitive solutions aligned with evolving market trends.",

  },

  {

    number: "03",

    name: "Tejas Patel",

    image: "/images/team/tejas-patel.jpg",

    role: "Director",

    initials: "TP",

    bio:

      "Mr. Tejas Patel comes from a business family and, as an engineering graduate, possesses strong leadership qualities to manage and guide teams effectively. He oversees production operations, ensuring efficiency, quality, and timely delivery across plant activities. With prior experience in stainless steel trading, he brings valuable commercial insight. His role extends beyond production, as he is actively involved in purchasing, financing, and legal matters. His ability to combine technical acumen with business foresight makes him a pivotal force in driving operational excellence and supporting the company's long-term vision.",

  },

];

const policyPoints = [

  "Every component is engineered and inspected to ensure structural integrity and compliance with national and international standards.",

  "We are dedicated to meeting our clients' expectations through responsive service, technical support, and on-time delivery.",

  "We cultivate a skilled, safety-conscious, and motivated team that drives our commitment to excellence.",

  "We enforce strict safety protocols and maintain regulatory compliance across all operations and job sites.",

  "We embrace modern engineering practices and technologies that promote resource efficiency and align with sustainable development principles.",

];

const values = [

  {

    number: "01",

    title: "Integrity",

    description:

      "We do what we say, and we say what we do. Transparency and honesty are non-negotiable.",

    icon: ShieldCheck,

  },

  {

    number: "02",

    title: "Excellence",

    description:

      "We pursue engineering excellence in every design, every weld, and every project we deliver.",

    icon: Award,

  },

  {

    number: "03",

    title: "Safety",

    description:

      "Zero accidents is not a goal — it is a standard. Safety is embedded in everything we do.",

    icon: Users,

  },

  {

    number: "04",

    title: "Innovation",

    description:

      "We continuously invest in new technologies and methodologies to deliver better outcomes.",

    icon: Lightbulb,

  },

];

const subsidiaries = [

  {

    shortName: "KBL",

    name: "KES Builtech LLP",

    description:

      "Specializes in infrastructure planning and development, offering end-to-end solutions from project planning and design to execution, with a focus on efficient, sustainable, and quality-driven infrastructure projects.",

    icon: Building2,

  },

  {

    shortName: "KFL",

    name: "KES Fabtech LLP",

    description:

      "Engaged in the fabrication of high-quality steel structures and engineered components, providing reliable and customized solutions for industrial and construction requirements.",

    icon: Factory,

  },

];

const smoothEase = [0.22, 1, 0.36, 1];

const fadeUp = {

  hidden: { opacity: 0, y: 45 },

  visible: {

    opacity: 1,

    y: 0,

    transition: { duration: 0.8, ease: smoothEase },

  },

};

const fadeLeft = {

  hidden: { opacity: 0, x: -55 },

  visible: {

    opacity: 1,

    x: 0,

    transition: { duration: 0.85, ease: smoothEase },

  },

};

const fadeRight = {

  hidden: { opacity: 0, x: 55 },

  visible: {

    opacity: 1,

    x: 0,

    transition: { duration: 0.85, ease: smoothEase },

  },

};

const staggerContainer = {

  hidden: {},

  visible: {

    transition: {

      staggerChildren: 0.15,

    },

  },

};

const revealViewport = {

  once: true,

  amount: 0.15,

};

function Reveal({ children, className = "", direction = "up" }) {

  const reduceMotion = useReducedMotion();

  const variants = {

    up: fadeUp,

    left: fadeLeft,

    right: fadeRight,

  };

  if (reduceMotion) {

    return <div className={className}>{children}</div>;

  }

  return (

    <motion.div

      variants={variants[direction]}

      initial="hidden"

      whileInView="visible"

      viewport={revealViewport}

      className={className}

    >

      {children}

    </motion.div>

  );

}

function CountUp({ value }) {

  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  const numericValue = parseInt(value.replace(/\D/g, ""), 10);

  const motionValue = useMotionValue(0);

  const rounded = useTransform(

    motionValue,

    (latest) => `${Math.round(latest)}${value.replace(/[0-9]/g, "")}`

  );

  useEffect(() => {

    if (!isInView) return;

    const controls = animate(motionValue, numericValue, {

      duration: 1.8,

      ease: "easeOut",

    });

    return controls.stop;

  }, [isInView, motionValue, numericValue]);

  return <motion.span ref={ref}>{rounded}</motion.span>;

}

export default function AboutPage() {

  const reduceMotion = useReducedMotion();

  const reveal = reduceMotion

    ? {}

    : {

        initial: { opacity: 0, y: 35 },

        whileInView: { opacity: 1, y: 0 },

        viewport: { once: true, amount: 0.15 },

        transition: {

          duration: 0.7,

          ease: [0.22, 1, 0.36, 1],

        },

      };

  return (

    <>

      <Navbar />

      <main className="overflow-hidden bg-[#F7F5F1] text-[#292524]">

        {/* 01 — Editorial introduction */}

       {/* 01 — Industrial banner and statistics */}

<motion.section

  {...reveal}

  className="relative px-5 pb-8 pt-6 sm:px-8 sm:pb-12 sm:pt-8 lg:px-12 lg:pb-14"

>

  <div className="relative mx-auto max-w-[1440px]">

    {/* Industrial image banner */}

    <motion.div

      initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}

      whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}

      viewport={{ once: true }}

      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}

      className="relative min-h-[280px] overflow-hidden bg-[#292524] sm:min-h-[400px] lg:min-h-[480px]"

    >

      <img

        src="/images/kes-industrial-hero.jpg"

        alt="Industrial steel fabrication and engineering"

        className="absolute inset-0 h-full w-full object-cover object-center"

      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#292524]/90 via-[#292524]/40 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 flex flex-col justify-between gap-6 p-6 sm:p-10 lg:flex-row lg:items-end lg:p-12">

        <div className="max-w-xl">

          <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#EBD9DC]">

            Our foundation

          </p>

          <h2 className="mt-3 text-2xl font-semibold leading-tight text-white sm:text-4xl">

            Where trust is the foundation and steel is the frame.

          </h2>

        </div>

        <div className="flex items-center gap-3 self-start border border-white/30 bg-white/10 px-4 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-sm lg:self-auto">

          <Workflow size={17} />

          Engineering & construction

        </div>

      </div>

    </motion.div>

    {/* Statistics */}

    <motion.div

      initial={reduceMotion ? false : { opacity: 0, y: 25 }}

      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}

      viewport={{ once: true }}

      transition={{ duration: 0.7, delay: 0.2 }}

      className="grid grid-cols-2 border-b border-[#D8CEC7] sm:grid-cols-4"

    >

      {stats.map((stat, index) => (

        <div

          key={stat.label}

          className={`py-6 sm:py-8 ${

            index > 0

              ? "border-l border-[#D8CEC7] pl-4 sm:pl-7"

              : ""

          }`}

        >

          <p className="text-3xl font-semibold tracking-tight text-[#873F4B] sm:text-4xl lg:text-5xl">

         <CountUp value={stat.number} />

          </p>

          <p className="mt-2 text-xs leading-5 text-[#78716C] sm:text-sm">

            {stat.label}

          </p>

        </div>

      ))}

    </motion.div>

  </div>

</motion.section>

{/* 03 — Our journey: light editorial timeline */}

<motion.section

{...reveal}

className="relative overflow-hidden bg-[#F7F5F1] px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-16">

  <div className="mx-auto max-w-[1440px]">

    {/* Section heading */}

    <div className="grid gap-7 border-b border-[#D8CEC7] pb-9 lg:grid-cols-[1fr_0.65fr] lg:items-end">

      <div>

        <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#873F4B] sm:text-xs">

          <span className="h-px w-9 bg-[#873F4B]" />

          Our journey

        </p>

        <h2 className="mt-3 text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#292524] sm:text-5xl lg:text-6xl">

          Every milestone

          <span className="block text-[#873F4B]">

            moves us forward.

          </span>

        </h2>

      </div>

      <p className="max-w-md text-sm leading-7 text-[#78716C] sm:text-base lg:justify-self-end">

        From our founding to manufacturing expansion and quality

        recognition, each milestone represents another step in the

        growth of KES Group.

      </p>

    </div>

    {/* Milestone overview */}

    <div className="mt-5 flex flex-wrap items-center gap-3">

      <span className="bg-[#873F4B] px-4 py-2 text-xs font-semibold text-white">

        2018 — 2025

      </span>

      <span className="text-xs text-[#78716C]">

        Eight milestones · One growing vision

      </span>

    </div>

    {/* Responsive milestone timeline */}
    <div className="relative mt-9">
      {/* Animated timeline spine */}
      <motion.div
        aria-hidden="true"
        className="absolute bottom-5 left-[15px] top-5 w-px origin-top bg-[#C99AA2] sm:left-1/2"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1.8, ease: smoothEase }}
      />

      <div className="space-y-5 sm:space-y-7">
        {milestones.map((milestone, index) => (
          <motion.article
            key={`${milestone.year}-${milestone.title}`}
            initial={reduceMotion ? false : {
              opacity: 0,
              y: 28,
              x: index % 2 === 0 ? -18 : 18,
            }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.65,
              delay: reduceMotion ? 0 : 0.06,
              ease: smoothEase,
            }}
            className={`relative grid grid-cols-[32px_minmax(0,1fr)] gap-4 sm:grid-cols-[1fr_56px_1fr] sm:gap-5 ${
              index % 2 === 0 ? "" : "sm:[&>div:first-of-type]:col-start-3"
            }`}
          >
            {/* Timeline node */}
            <div className="relative z-10 col-start-1 row-start-1 flex justify-center pt-6 sm:col-start-2 sm:row-start-1 sm:pt-7">
              <motion.span
                whileHover={reduceMotion ? {} : { scale: 1.25 }}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#873F4B] bg-[#F7F5F1] shadow-[0_0_0_6px_#F7F5F1]"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-[#873F4B]" />
              </motion.span>
            </div>

            {/* Milestone card */}
            <div
              className={`col-start-2 row-start-1 min-w-0 border border-[#E5DCD6] bg-white p-5 shadow-[0_8px_26px_rgba(41,37,36,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-[#C99AA2] hover:shadow-[0_16px_36px_rgba(135,63,75,0.10)] sm:col-span-1 sm:p-6 ${
                index % 2 === 0
                  ? "sm:col-start-1 sm:text-right"
                  : "sm:col-start-3"
              }`}
            >
              <div className={`flex items-center justify-between gap-3 sm:justify-start ${
                index % 2 === 0 ? "sm:flex-row-reverse" : ""
              }`}>
                <span className="text-3xl font-black tracking-[-0.05em] text-[#873F4B] sm:text-4xl">
                  {milestone.year}
                </span>
                <span className="inline-flex h-8 min-w-8 items-center justify-center border border-[#E5DCD6] px-2 font-mono text-[10px] text-[#A66B75]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-3 text-base font-bold text-[#292524] sm:text-lg">
                {milestone.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#78716C]">
                {milestone.description}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>

    {/* Closing note */}

    <div className="mt-10 flex flex-col gap-3 border-t border-[#D8CEC7] pt-6 sm:flex-row sm:items-center sm:justify-between">

      <p className="text-sm text-[#78716C]">

        Built through experience, strengthened by every project.

      </p>

      <Link

        to="/projects"

        className="group inline-flex items-center gap-2 text-sm font-semibold text-[#873F4B] transition-colors hover:text-[#71323D]"

      >

        Explore our projects

        <ArrowRight

          size={17}

          className="transition-transform group-hover:translate-x-1"

        />

      </Link>

    </div>

  </div>

</motion.section>

        {/* 04 — Vision and mission */}

        <motion.section

        {...reveal} className="px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-16">

          <div className="mx-auto max-w-[1440px]">

            <div className="mb-7 max-w-3xl sm:mb-9">

              <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#873F4B]">

                <span className="h-px w-8 bg-[#873F4B]" />

                Our foundation

              </p>

              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">

                Principles behind

                <span className="text-[#873F4B]"> every structure.</span>

              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#78716C] sm:text-base">

                The vision, mission, and policies that guide our engineering

                decisions and project execution.

              </p>

            </div>

            <div className="grid gap-5 lg:grid-cols-2">

              <article className="relative overflow-hidden border border-[#D8CEC7] bg-white p-7 sm:p-10 lg:p-12">

                <span className="absolute right-5 top-1 text-7xl font-semibold text-[#F0E0E3] sm:right-8 sm:text-8xl">

                  01

                </span>

                <div className="relative">

                  <div className="flex h-12 w-12 items-center justify-center bg-[#F0E0E3] text-[#873F4B]">

                    <Eye size={23} />

                  </div>

                  <h3 className="mt-7 text-2xl font-semibold">Our Vision</h3>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-[#6F5A5D] sm:text-base sm:leading-8">

                    To be India's leading provider of cutting-edge

                    Pre-engineered Building solutions, known for engineering

                    excellence, client trust, and sustainable growth.

                  </p>

                </div>

              </article>

              <article className="relative overflow-hidden border border-[#D8CEC7] bg-[#F0E0E3] p-7 sm:p-10 lg:p-12">

                <span className="absolute right-5 top-1 text-7xl font-semibold text-[#D6ADB5]/50 sm:right-8 sm:text-8xl">

                  02

                </span>

                <div className="relative">

                  <div className="flex h-12 w-12 items-center justify-center bg-[#873F4B] text-white">

                    <Target size={23} />

                  </div>

                  <h3 className="mt-7 text-2xl font-semibold">Our Mission</h3>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-[#6F5A5D] sm:text-base sm:leading-8">

                    Design, manufacture, and erect high-performance steel

                    structures to meet evolving industry needs and build

                    lasting client relationships through integrity,

                    transparency, and consistent performance. We uphold high

                    standards of quality, safety, and operational efficiency

                    in every stage of project execution.

                  </p>

                </div>

              </article>

            </div>

            {/* Policy statement — split editorial layout */}

            <div className="mt-5 grid overflow-hidden border border-[#D8CEC7] bg-white lg:grid-cols-[0.72fr_1.28fr]">

              <div className="relative overflow-hidden bg-[#873F4B] p-7 text-white sm:p-10 lg:p-12">

                <span className="absolute -right-2 -top-8 text-9xl font-semibold text-white/10">

                  03

                </span>

                <div className="relative">

                  <div className="flex h-12 w-12 items-center justify-center border border-white/25 bg-white/10">

                    <Workflow size={23} />

                  </div>

                  <h3 className="mt-7 text-2xl font-semibold">

                    Policy Statement

                  </h3>

                  <p className="mt-3 max-w-xs text-sm leading-7 text-white/80">

                    Quality, safety, and accountability in every operation.

                  </p>

                </div>

              </div>

              <div className="grid gap-x-8 gap-y-5 p-6 sm:grid-cols-2 sm:p-8 lg:p-10">

                {policyPoints.map((point) => (

                  <div key={point} className="flex items-start gap-3">

                    <Check

                      size={18}

                      className="mt-1 shrink-0 text-[#873F4B]"

                    />

                    <p className="text-sm leading-6 text-[#6F5A5D]">

                      {point}

                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </motion.section>

        {/* 05 — Leadership */}

        <motion.section {...reveal} className="border-y border-[#D8CEC7] bg-white px-5 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-10">

          <div className="mx-auto max-w-[1440px]">

            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

              <div>

                <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#873F4B]">

                  <span className="h-px w-8 bg-[#873F4B]" />

                  The people behind KES

                </p>

                <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">

                  Meet our

                  <span className="text-[#873F4B]"> leaders.</span>

                </h2>

              </div>

              <p className="max-w-sm text-sm leading-7 text-[#78716C] sm:text-base">

                Experienced professionals driving KES Engineering's vision

                and growth.

              </p>

            </div>

            <div className="mt-7 border-t border-[#D8CEC7]">

              {leaders.map((leader, index) => (

                <motion.article

                  key={leader.name}

                  className="grid gap-5 border-b border-[#D8CEC7] py-8 sm:grid-cols-[110px_1fr] sm:gap-8 sm:py-10 lg:grid-cols-[150px_0.65fr_1.35fr] lg:gap-10"

                >

                  <div className="flex items-start gap-4 sm:block">

                    <div className="relative h-24 w-24 shrink-0 overflow-hidden border border-[#C99AA2] bg-[#F0E0E3] sm:h-32 sm:w-32">

                      <span className="absolute inset-0 flex items-center justify-center text-2xl font-semibold text-[#873F4B]">

                        {leader.initials}

                      </span>

                      <img

                        src={leader.image}

                        alt={leader.name}

                        loading="lazy"

                        className="absolute inset-0 h-full w-full object-cover"

                        onError={(event) => {

                          event.currentTarget.style.display = "none";

                        }}

                      />

                    </div>

                    <span className="pt-1 font-mono text-xs text-[#A66B75] sm:mt-4 sm:block">

                      LEADER / {leader.number}

                    </span>

                  </div>

                  <div>

                    <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">

                      {leader.name}

                    </h3>

                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-[#873F4B]">

                      {leader.role}

                    </p>

                  </div>

                  <p className="text-sm leading-7 text-[#6F5A5D] sm:text-base sm:leading-8">

                    {leader.bio}

                  </p>

                </motion.article>

              ))}

            </div>

          </div>

        </motion.section>

        {/* 06 — Subsidiary companies */}

        <motion.section {...reveal} className="px-5 pt-6 pb-10 sm:px-8 sm:pt-8 sm:pb-12 lg:px-12 lg:pt-10 lg:pb-16">

          <div className="mx-auto max-w-[1440px]">

            <div className="max-w-3xl">

              <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#873F4B]">

                <span className="h-px w-8 bg-[#873F4B]" />

                Business verticals

              </p>

              <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">

                Specialized expertise.

                <span className="block text-[#873F4B]">

                  One shared vision.

                </span>

              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#78716C] sm:text-base">

                Through our specialized subsidiaries, we provide engineering,

                construction, and infrastructure solutions across multiple

                industries.

              </p>

            </div>

            <div className="mt-7 grid gap-5 lg:grid-cols-2">

              {subsidiaries.map((company, index) => {

                const Icon = company.icon;

                return (

                  <article

                    key={company.shortName}

                    className={`group relative overflow-hidden border p-7 transition-colors duration-300 sm:p-10 lg:p-12 ${

                      index === 0

                        ? "border-[#873F4B] bg-[#873F4B] text-white"

                        : "border-[#D8CEC7] bg-white text-[#292524] hover:border-[#C99AA2]"

                    }`}

                  >

                    <div className="flex items-start justify-between gap-4">

                      <div

                        className={`flex h-12 w-12 items-center justify-center ${

                          index === 0

                            ? "bg-white/10 text-white"

                            : "bg-[#F0E0E3] text-[#873F4B]"

                        }`}

                      >

                        <Icon size={23} />

                      </div>

                      <span

                        className={`font-mono text-sm ${

                          index === 0 ? "text-white/60" : "text-[#A66B75]"

                        }`}

                      >

                        {company.shortName}

                      </span>

                    </div>

                    <h3 className="mt-8 text-2xl font-semibold sm:text-3xl">

                      {company.name}

                    </h3>

                    <p

                      className={`mt-4 max-w-xl text-sm leading-7 sm:text-base sm:leading-8 ${

                        index === 0 ? "text-white/80" : "text-[#78716C]"

                      }`}

                    >

                      {company.description}

                    </p>

                    <div

                      className={`mt-8 h-px w-14 transition-all duration-300 group-hover:w-24 ${

                        index === 0 ? "bg-white/60" : "bg-[#873F4B]"

                      }`}

                    />

                  </article>

                );

              })}

            </div>

          </div>

        </motion.section>

        {/* 07 — Core values */}

        <motion.section {...reveal}  className="bg-[#F0E0E3] px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-16">

          <div className="mx-auto max-w-[1440px]">

            <div className="grid gap-8 lg:grid-cols-12 lg:items-end">

              <div className="lg:col-span-7">

                <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#873F4B]">

                  <span className="h-px w-8 bg-[#873F4B]" />

                  What drives us

                </p>

                <h2 className="mt-3 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">

                  Purpose in every

                  <span className="block text-[#873F4B]">

                    project we deliver.

                  </span>

                </h2>

              </div>

              <p className="max-w-md text-sm leading-7 text-[#6F5A5D] sm:text-base lg:col-span-5 lg:justify-self-end">

                Our values guide how we work, how we solve challenges, and

                how we build lasting relationships with our clients.

              </p>

            </div>

            <div className="mt-7 border-t border-[#C99AA2]">

              {values.map((value) => {

                const Icon = value.icon;

                return (

                  <article

                    key={value.title}

                    className="group grid gap-4 border-b border-[#C99AA2] py-6 sm:grid-cols-[70px_1fr_1.2fr] sm:items-center sm:gap-8 sm:py-8"

                  >

                    <span className="font-mono text-sm text-[#A66B75]">

                      {value.number}

                    </span>

                    <div className="flex items-center gap-4">

                      <Icon

                        size={23}

                        strokeWidth={1.6}

                        className="shrink-0 text-[#873F4B] transition-transform group-hover:scale-110"

                      />

                      <h3 className="text-xl font-semibold sm:text-2xl">

                        {value.title}

                      </h3>

                    </div>

                    <p className="text-sm leading-7 text-[#6F5A5D] sm:text-base">

                      {value.description}

                    </p>

                  </article>

                );

              })}

            </div>

          </div>

        </motion.section>

        {/* 08 — Closing CTA */}

        <motion.section {...reveal}  className="px-5 py-8 sm:px-8 sm:py-12 lg:px-12 lg:py-16">

          <div className="relative mx-auto max-w-[1440px] overflow-hidden bg-[#873F4B] px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-16 lg:py-20">

            <div

              aria-hidden="true"

              className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full border border-white/15"

            />

            <div

              aria-hidden="true"

              className="pointer-events-none absolute -right-5 -top-14 h-52 w-52 rounded-full border border-white/15"

            />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">

              <div className="max-w-3xl">

                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#F0E0E3] sm:text-xs">

                  Let's build something meaningful

                </p>

                <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">

                  Ready to bring your next project to life?

                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">

                  Let's discuss your industrial project and find the right

                  engineering solution for your requirements.

                </p>

              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">

                <Link

                  to="/contact"

                  className="inline-flex items-center justify-center gap-3 bg-[#F7F5F1] px-6 py-4 text-sm font-semibold text-[#873F4B] transition hover:bg-white"

                >

                  Request a Quote

                  <ArrowRight size={18} />

                </Link>

                <Link

                  to="/projects"

                  className="inline-flex items-center justify-center gap-3 border border-white/40 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10"

                >

                  View Projects

                  <ArrowUpRight size={18} />

                </Link>

              </div>

            </div>

          </div>

        </motion.section>

      </main>

      <Footer />

    </>

  );

}


