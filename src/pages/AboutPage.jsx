
// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   Target,
//   Eye,
//   ShieldCheck,
//   Lightbulb,
//   Award,
//   Users,
// } from "lucide-react";

// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const values = [
//   {
//     icon: ShieldCheck,
//     title: "Integrity",
//     description:
//       "Building trust through transparency, honesty, and responsible business practices.",
//   },
//   {
//     icon: Award,
//     title: "Excellence",
//     description:
//       "Maintaining high standards of engineering, manufacturing, and project execution.",
//   },
//   {
//     icon: Users,
//     title: "Safety",
//     description:
//       "Prioritizing the safety of our people, partners, and project sites.",
//   },
//   {
//     icon: Lightbulb,
//     title: "Innovation",
//     description:
//       "Exploring practical and efficient engineering solutions for industrial needs.",
//   },
// ];

// const stats = [
//   { number: "350+", label: "Projects Delivered" },
//   { number: "15+", label: "Years of Experience" },
//   { number: "50+", label: "Expert Engineers" },
//   { number: "100%", label: "Quality Commitment" },
// ];

// export default function AboutPage() {
//   return (
//     <>
//       <Navbar />

//       <main className="min-h-screen bg-[#111318] text-white">

// {/* Page hero */}
// <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#111318]">
//   {/* Background image */}
//   <img
//     src="/images/kes-industrial-hero.jpg"
//     alt=""
//     aria-hidden="true"
//     className="absolute inset-0 -z-20 h-full w-full object-cover object-center  blur-[2px]"
//   />

//   {/* Dark overlay for readable text */}
//   <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#111318] via-[#111318]/90 to-[#111318]/55" />

//   {/* Subtle red accent */}
//   <div className="absolute inset-0 -z-10 bg-gradient-to-br from-transparent via-transparent to-red-950/30" />

//   <div className="mx-auto flex min-h-[520px] max-w-7xl items-center px-5 py-20 sm:px-8 sm:py-24 lg:min-h-[600px] lg:px-12">
//     <div className="max-w-3xl">
//       <div className="flex items-center gap-3">
//         <span className="h-[2px] w-10 bg-red-600" />
//         <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-400 sm:text-sm">
//           Who We Are
//         </p>
//       </div>

//       <h1 className="mt-6 text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-7xl">
//         About KES Group
//         <span className="mt-3 block text-red-500">
//           Engineering with Purpose.
//         </span>
//       </h1>

//       <p className="mt-6 max-w-2xl text-base leading-8 text-gray-200 sm:text-lg">
//         Your engineering partner for industrial buildings, steel structures,
//         and integrated engineering solutions.
//       </p>

//       <div className="mt-8 flex flex-col gap-3 sm:flex-row">
//         <Link
//           to="/projects"
//           className="inline-flex items-center justify-center gap-2 rounded-md bg-red-700 px-6 py-4 font-bold text-white transition hover:bg-red-600"
//         >
//           Explore Our Projects <ArrowRight size={18} />
//         </Link>

//         <Link
//           to="/contact"
//           className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/5 px-6 py-4 font-bold text-white backdrop-blur-sm transition hover:border-red-500 hover:bg-white/10"
//         >
//           Contact Our Team
//         </Link>
//       </div>
//     </div>
//   </div>
// </section>



//         {/* Company values */}
//         <section className="px-5 py-16 sm:py-20 lg:py-24">
//           <div className="mx-auto max-w-7xl">
//             <div className="mb-12">
//               <div className="flex items-center gap-3">
//                 <span className="h-[2px] w-8 bg-red-600" />
//                 <p className="text-xs font-bold uppercase tracking-[0.22em] text-red-400 sm:text-sm">
//                   What Guides Us
//                 </p>
//               </div>

//               <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
//                 Our Core Values
//               </h2>

//               <p className="mt-4 max-w-2xl leading-7 text-gray-400">
//                 The principles that shape our engineering approach, our
//                 decisions, and our relationships with clients.
//               </p>
//             </div>

//             <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
//               {values.map((value) => {
//                 const Icon = value.icon;

//                 return (
//                   <article
//                     key={value.title}
//                     className="group rounded-xl border border-white/10 bg-[#1B1D23] p-6 transition duration-300 hover:-translate-y-1 hover:border-red-600/50 hover:bg-[#202229] hover:shadow-xl hover:shadow-black/10"
//                   >
//                     <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-600/10 transition group-hover:bg-red-600/20">
//                       <Icon size={26} className="text-red-400" />
//                     </div>

//                     <h3 className="mt-5 text-xl font-bold text-white">
//                       {value.title}
//                     </h3>

//                     <p className="mt-3 text-sm leading-7 text-gray-400">
//                       {value.description}
//                     </p>
//                   </article>
//                 );
//               })}
//             </div>
//           </div>
//         </section>

//         {/* Call to action */}
//         <section className="px-5 pb-16 sm:pb-20 lg:pb-24">
//           <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl border border-red-500/20 bg-[#202229] px-6 py-14 text-center sm:px-10 sm:py-16">
//             <div
//               aria-hidden="true"
//               className="pointer-events-none absolute -right-20 -top-32 h-72 w-72 rounded-full bg-red-700/15 blur-3xl"
//             />

//             <div className="relative mx-auto max-w-3xl">
//               <p className="text-xs font-bold uppercase tracking-[0.22em] text-red-400">
//                 Let's Work Together
//               </p>

//               <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
//                 Ready to Build Something Great?
//               </h2>

//               <p className="mt-5 leading-7 text-gray-300">
//                 Let's discuss your industrial project and find the right
//                 engineering solution for your requirements.
//               </p>

//               <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
//                 <Link
//                   to="/contact"
//                   className="rounded-md bg-red-700 px-6 py-4 font-bold text-white transition hover:bg-red-600"
//                 >
//                   Request a Quote
//                 </Link>

//                 <Link
//                   to="/projects"
//                   className="rounded-md border border-white/20 px-6 py-4 font-bold text-white transition hover:border-red-500 hover:bg-white/5"
//                 >
//                   View Our Projects
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





// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   ShieldCheck,
//   Lightbulb,
//   Award,
//   Users,
//   CheckCircle2,
//   Target,
//   Eye,
// } from "lucide-react";

// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const values = [
//   {
//     icon: ShieldCheck,
//     number: "01",
//     title: "Integrity",
//     description:
//       "Building trust through transparency, honesty, and responsible business practices.",
//   },
//   {
//     icon: Award,
//     number: "02",
//     title: "Excellence",
//     description:
//       "Maintaining high standards of engineering, manufacturing, and project execution.",
//   },
//   {
//     icon: Users,
//     number: "03",
//     title: "Safety",
//     description:
//       "Prioritizing the safety of our people, partners, and project sites.",
//   },
//   {
//     icon: Lightbulb,
//     number: "04",
//     title: "Innovation",
//     description:
//       "Exploring practical and efficient engineering solutions for industrial needs.",
//   },
// ];

// const stats = [
//   { number: "350+", label: "Projects Delivered" },
//   { number: "15+", label: "Years of Experience" },
//   { number: "50+", label: "Expert Engineers" },
//   { number: "100%", label: "Quality Commitment" },
// ];

// export default function AboutPage() {
//   return (
//     <>
//       <Navbar />

//       <main className="bg-[#F7F5F1] text-[#292524]">

//         {/* Page hero */}
//         <section className="relative overflow-hidden border-b border-[#D8CEC7] bg-[#F7F5F1]">
//           <div
//             aria-hidden="true"
//             className="pointer-events-none absolute -right-24 -top-32 h-[420px] w-[420px] rounded-full border border-[#E5C9CE] sm:h-[600px] sm:w-[600px]"
//           />
//           <div
//             aria-hidden="true"
//             className="pointer-events-none absolute -right-12 -top-20 h-[320px] w-[320px] rounded-full border border-[#E5C9CE] sm:h-[480px] sm:w-[480px]"
//           />

//           <div className="relative mx-auto grid min-h-[520px] max-w-[1440px] items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-14 lg:py-24">

//             <div>
//               <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#873F4B] sm:text-xs">
//                 <span className="h-px w-9 bg-[#873F4B]" />
//                 Who We Are
//               </p>

//               <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-7xl">
//                 About KES Group
//                 <span className="mt-2 block text-[#873F4B]">
//                   Engineering with purpose.
//                 </span>
//               </h1>

//               <p className="mt-6 max-w-2xl text-base leading-8 text-[#78716C] sm:text-lg">
//                 Your engineering partner for industrial buildings,
//                 steel structures, and integrated engineering solutions.
//               </p>

//               <div className="mt-8 flex flex-col gap-3 sm:flex-row">
//                 <Link
//                   to="/projects"
//                   className="inline-flex items-center justify-center gap-3 bg-[#873F4B] px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-[#71323D]"
//                 >
//                   Explore Our Projects
//                   <ArrowRight size={18} />
//                 </Link>

//                 <Link
//                   to="/contact"
//                   className="inline-flex items-center justify-center gap-2 border border-[#D8CEC7] bg-[#F7F5F1] px-6 py-4 text-sm font-semibold text-[#292524] transition duration-300 hover:border-[#873F4B] hover:text-[#873F4B]"
//                 >
//                   Contact Our Team
//                   <ArrowUpRight size={17} />
//                 </Link>
//               </div>

//               <div className="mt-7 flex items-center gap-3 text-sm text-[#78716C]">
//                 <CheckCircle2 size={18} className="shrink-0 text-[#873F4B]" />
//                 Industrial solutions tailored to your requirements
//               </div>
//             </div>

//             {/* Industrial image */}
//             <div className="relative min-h-[320px] overflow-hidden bg-[#EBD9DC] sm:min-h-[420px] lg:min-h-[490px]">
//               <img
//                 src="/images/kes-industrial-hero.jpg"
//                 alt="Industrial steel structure and engineering"
//                 className="absolute inset-0 h-full w-full object-cover"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-[#292524]/75 via-[#292524]/10 to-transparent" />

//               <div className="absolute left-5 top-5 border border-white/50 bg-[#292524]/20 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
//                 KES Group
//               </div>

//               <div className="absolute bottom-6 left-6 right-6 border-l-2 border-[#C99AA2] pl-4 sm:bottom-8 sm:left-8">
//                 <p className="text-xl font-semibold text-white sm:text-2xl">
//                   Engineering & Construction
//                 </p>
//                 <p className="mt-2 text-sm text-white/80">
//                   Built around your requirements
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Company statistics */}
//         <section className="border-b border-[#D8CEC7] bg-[#F0E0E3]">
//           <div className="mx-auto grid max-w-[1440px] grid-cols-2 px-5 sm:px-8 lg:grid-cols-4 lg:px-14">
//             {stats.map((stat, index) => (
//               <div
//                 key={stat.label}
//                 className={`py-7 sm:py-9 lg:px-7 ${
//                   index % 2 === 0 ? "border-r border-[#D6ADB5]" : ""
//                 } ${
//                   index < 2 ? "border-b border-[#D6ADB5] lg:border-b-0" : ""
//                 } ${
//                   index > 0 ? "lg:border-l lg:border-r-0 lg:border-[#D6ADB5]" : ""
//                 }`}
//               >
//                 <p className="text-3xl font-semibold tracking-tight text-[#873F4B] sm:text-4xl lg:text-5xl">
//                   {stat.number}
//                 </p>
//                 <p className="mt-2 text-xs leading-5 text-[#6F5A5D] sm:text-sm">
//                   {stat.label}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Mission and vision */}
//         <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
//           <div className="mx-auto max-w-[1440px]">
//             <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
//               <div>
//                 <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#873F4B]">
//                   <span className="h-px w-8 bg-[#873F4B]" />
//                   What Drives Us
//                 </p>

//                 <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
//                   Purpose in every
//                   <span className="block text-[#873F4B]">
//                     project we deliver.
//                   </span>
//                 </h2>
//               </div>

//               <p className="max-w-xl text-sm leading-7 text-[#78716C] sm:text-base lg:justify-self-end">
//                 Our principles guide how we approach engineering,
//                 collaborate with clients, and deliver industrial projects.
//               </p>
//             </div>

//             <div className="mt-10 grid gap-5 lg:grid-cols-2">
//               <article className="border border-[#E5C9CE] bg-[#F0E0E3] p-7 sm:p-9">
//                 <div className="flex h-12 w-12 items-center justify-center border border-[#D6ADB5] bg-[#F7F5F1] text-[#873F4B]">
//                   <Target size={23} strokeWidth={1.7} />
//                 </div>

//                 <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-[#873F4B]">
//                   Our Mission
//                 </p>

//                 <h3 className="mt-3 text-2xl font-semibold text-[#292524]">
//                   Engineering with purpose.
//                 </h3>

//                 <p className="mt-4 max-w-xl text-sm leading-7 text-[#6F5A5D]">
//                   To provide practical industrial engineering and
//                   construction solutions with a focus on quality,
//                   coordination, and client requirements.
//                 </p>
//               </article>

//               <article className="border border-[#D8CEC7] bg-[#F7F5F1] p-7 sm:p-9">
//                 <div className="flex h-12 w-12 items-center justify-center border border-[#D8CEC7] bg-[#F0E0E3] text-[#873F4B]">
//                   <Eye size={23} strokeWidth={1.7} />
//                 </div>

//                 <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-[#873F4B]">
//                   Our Vision
//                 </p>

//                 <h3 className="mt-3 text-2xl font-semibold text-[#292524]">
//                   Building lasting value.
//                 </h3>

//                 <p className="mt-4 max-w-xl text-sm leading-7 text-[#78716C]">
//                   To build lasting client relationships through
//                   dependable engineering, thoughtful solutions,
//                   and a commitment to continuous improvement.
//                 </p>
//               </article>
//             </div>
//           </div>
//         </section>

//         {/* Core values */}
//         <section className="bg-[#F0E0E3] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
//           <div className="mx-auto max-w-[1440px]">
//             <div className="flex flex-col gap-5 border-b border-[#D6ADB5] pb-8 sm:flex-row sm:items-end sm:justify-between">
//               <div>
//                 <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#873F4B]">
//                   What Guides Us
//                 </p>

//                 <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#292524] sm:text-4xl lg:text-5xl">
//                   Our Core Values
//                 </h2>
//               </div>

//               <p className="max-w-md text-sm leading-7 text-[#6F5A5D]">
//                 The principles that shape our engineering approach,
//                 decisions, and relationships with clients.
//               </p>
//             </div>

//             <div className="mt-8 grid gap-px border border-[#D6ADB5] bg-[#D6ADB5] sm:grid-cols-2 lg:grid-cols-4">
//               {values.map((value) => {
//                 const Icon = value.icon;

//                 return (
//                   <article
//                     key={value.title}
//                     className="group flex min-h-[260px] flex-col bg-[#F0E0E3] p-6 transition-colors duration-300 hover:bg-[#EBD3D8] sm:p-7"
//                   >
//                     <div className="flex items-start justify-between">
//                       <span className="font-mono text-xs text-[#A66B75]">
//                         {value.number}
//                       </span>

//                       <Icon
//                         size={25}
//                         strokeWidth={1.6}
//                         className="text-[#873F4B] transition-transform duration-300 group-hover:scale-110"
//                       />
//                     </div>

//                     <div className="mt-auto pt-10">
//                       <h3 className="text-xl font-semibold text-[#292524]">
//                         {value.title}
//                       </h3>

//                       <p className="mt-3 text-sm leading-7 text-[#6F5A5D]">
//                         {value.description}
//                       </p>
//                     </div>
//                   </article>
//                 );
//               })}
//             </div>
//           </div>
//         </section>

//         {/* Call to action */}
//         <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
//           <div className="relative mx-auto max-w-[1440px] overflow-hidden bg-[#873F4B] px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
//             <div
//               aria-hidden="true"
//               className="pointer-events-none absolute -right-20 -top-32 h-72 w-72 rounded-full border border-white/15"
//             />

//             <div
//               aria-hidden="true"
//               className="pointer-events-none absolute -right-8 -top-20 h-52 w-52 rounded-full border border-white/15"
//             />

//             <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
//               <div className="max-w-3xl">
//                 <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#F0E0E3]">
//                   Let's Work Together
//                 </p>

//                 <h2 className="mt-5 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
//                   Ready to build something great?
//                 </h2>

//                 <p className="mt-5 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
//                   Let's discuss your industrial project and find
//                   the right engineering solution for your requirements.
//                 </p>
//               </div>

//               <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
//                 <Link
//                   to="/contact"
//                   className="inline-flex items-center justify-center gap-3 bg-[#F7F5F1] px-6 py-4 text-sm font-semibold text-[#873F4B] transition hover:bg-[#F0E0E3]"
//                 >
//                   Request a Quote
//                   <ArrowRight size={18} />
//                 </Link>

//                 <Link
//                   to="/projects"
//                   className="inline-flex items-center justify-center gap-2 border border-white/40 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
//                 >
//                   View Our Projects
//                   <ArrowUpRight size={17} />
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





import { Link } from "react-router-dom";
import {
  ArrowDownRight,
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
    role: "Director",
    initials: "UP",
    bio:
      "Mr. Upesh Patel brings more than 18 years of dedicated experience in the Pre Engineered Building (PEB) industry. With his broad perspective and leadership skills, he oversees the entire plant operations and drives the company's future expansion initiatives. His professional journey reflects a deep understanding of diverse business functions, including project management, financials, product development, quality assurance, planning, and client engagement. His ability to integrate technical knowledge with strategic business acumen makes him a key contributor to the company's sustained growth and success.",
  },
  {
    number: "02",
    name: "Jitesh Mistry",
    role: "Director",
    initials: "JM",
    bio:
      "Mr. Jitesh Mistry is a young and dynamic professional with a graduation in BE Mechanical and over 18 years of experience in the PEB field. He has successfully executed more than 1,500 buildings across diverse segments. Currently, he spearheads Sales and Marketing at KES, focusing on strengthening client relationships, driving business growth, and delivering competitive solutions aligned with evolving market trends.",
  },
  {
    number: "03",
    name: "Tejas Patel",
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

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-[#F7F5F1] text-[#292524]">
        {/* 01 — Editorial introduction */}
        <section className="relative px-5 pb-14 pt-14 sm:px-8 sm:pb-20 sm:pt-20 lg:px-12 lg:pb-24 lg:pt-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full border border-[#EBD9DC] sm:-right-16"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 top-24 h-64 w-64 rounded-full border border-[#C99AA2]/50"
          />

          <div className="relative mx-auto max-w-[1440px]">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
              <div className="lg:col-span-8">
                <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#873F4B] sm:text-xs">
                  <span className="h-px w-9 bg-[#873F4B]" />
                  The KES Story
                </p>

                <h1 className="mt-6 max-w-5xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-6xl lg:text-7xl xl:text-8xl">
                  Built on trust.
                  <span className="block text-[#873F4B]">
                    Engineered for progress.
                  </span>
                </h1>
              </div>

              <div className="lg:col-span-4 lg:pb-2">
                <p className="max-w-lg text-sm leading-7 text-[#78716C] sm:text-base sm:leading-8">
                  KES Group provides engineering solutions for industrial
                  buildings, pre-engineered structures, steel fabrication,
                  wastewater treatment systems, and EPC projects.
                </p>

                <Link
                  to="/projects"
                  className="group mt-6 inline-flex items-center gap-3 border-b border-[#873F4B] pb-2 text-sm font-semibold text-[#873F4B]"
                >
                  Discover our work
                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </div>
            </div>

            {/* Industrial image banner */}
            <div className="relative mt-10 min-h-[280px] overflow-hidden bg-[#292524] sm:mt-14 sm:min-h-[400px] lg:min-h-[480px]">
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
            </div>

            {/* 02 — Compact statistics */}
            <div className="grid grid-cols-2 border-b border-[#D8CEC7] sm:grid-cols-4">
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
                    {stat.number}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-[#78716C] sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

   
{/* 03 — Our journey: light editorial timeline */}
<section className="relative overflow-hidden bg-[#F7F5F1] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
  <div className="mx-auto max-w-[1440px]">

    {/* Section heading */}
    <div className="grid gap-7 border-b border-[#D8CEC7] pb-9 lg:grid-cols-[1fr_0.65fr] lg:items-end">
      <div>
        <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#873F4B] sm:text-xs">
          <span className="h-px w-9 bg-[#873F4B]" />
          Our journey
        </p>

        <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#292524] sm:text-5xl lg:text-6xl">
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
    <div className="mt-8 flex flex-wrap items-center gap-3">
      <span className="bg-[#873F4B] px-4 py-2 text-xs font-semibold text-white">
        2018 — 2025
      </span>
      <span className="text-xs text-[#78716C]">
        Eight milestones · One growing vision
      </span>
    </div>

    {/* Desktop timeline */}
    <div className="relative mt-14 hidden lg:block">
      {/* Connecting line */}
      <div className="absolute left-0 right-0 top-[15px] h-px bg-[#C99AA2]" />

      <div className="grid grid-cols-4 gap-x-8 gap-y-12">
        {milestones.map((milestone, index) => (
          <article key={`${milestone.year}-${milestone.title}`} className="group relative">
            {/* Timeline marker */}
            <div className="relative z-10 flex h-[31px] items-center">
              <span className="flex h-[31px] w-[31px] items-center justify-center rounded-full border border-[#C99AA2] bg-[#F7F5F1] transition-colors duration-300 group-hover:border-[#873F4B] group-hover:bg-[#873F4B]">
                <span className="h-2 w-2 rounded-full bg-[#873F4B] transition-colors group-hover:bg-white" />
              </span>
            </div>

            {/* Milestone content */}
            <div className="mt-5 border-t-2 border-[#D8CEC7] bg-white p-5 shadow-[0_8px_30px_rgba(41,37,36,0.035)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#873F4B] group-hover:shadow-[0_14px_35px_rgba(135,63,75,0.10)]">
              <div className="flex items-center justify-between gap-3">
                <span className="text-2xl font-semibold tracking-tight text-[#873F4B]">
                  {milestone.year}
                </span>
                <span className="font-mono text-xs text-[#B9A5A1]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-4 text-base font-semibold text-[#292524]">
                {milestone.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#78716C]">
                {milestone.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>

    {/* Mobile and tablet timeline */}
    <div className="mt-10 lg:hidden">
      <div className="relative">
        {/* Vertical connector */}
        <div className="absolute bottom-8 left-[15px] top-4 w-px bg-[#C99AA2]" />

        <div className="space-y-5">
          {milestones.map((milestone, index) => (
            <article
              key={`${milestone.year}-${milestone.title}`}
              className="relative grid grid-cols-[32px_1fr] gap-4"
            >
              <div className="relative z-10 flex justify-center pt-5">
                <span className="flex h-[31px] w-[31px] items-center justify-center rounded-full border border-[#C99AA2] bg-[#F7F5F1]">
                  <span className="h-2 w-2 rounded-full bg-[#873F4B]" />
                </span>
              </div>

              <div className="border border-[#E5DCD6] bg-white p-5 sm:p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-2xl font-semibold text-[#873F4B]">
                    {milestone.year}
                  </span>
                  <span className="font-mono text-xs text-[#B9A5A1]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-3 font-semibold text-[#292524]">
                  {milestone.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#78716C]">
                  {milestone.description}
                </p>
              </div>
            </article>
          ))}
        </div>
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
</section>


        {/* 04 — Vision and mission */}
        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-10 max-w-3xl sm:mb-14">
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
        </section>

        {/* 05 — Leadership */}
        <section className="border-y border-[#D8CEC7] bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-[1440px]">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#873F4B]">
                  <span className="h-px w-8 bg-[#873F4B]" />
                  The people behind KES
                </p>

                <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                  Meet our
                  <span className="text-[#873F4B]"> leaders.</span>
                </h2>
              </div>

              <p className="max-w-sm text-sm leading-7 text-[#78716C] sm:text-base">
                Experienced professionals driving KES Engineering's vision
                and growth.
              </p>
            </div>

            <div className="mt-10 border-t border-[#D8CEC7]">
              {leaders.map((leader) => (
                <article
                  key={leader.name}
                  className="grid gap-5 border-b border-[#D8CEC7] py-8 sm:grid-cols-[110px_1fr] sm:gap-8 sm:py-10 lg:grid-cols-[150px_0.65fr_1.35fr] lg:gap-10"
                >
                  <div className="flex items-start gap-4 sm:block">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center border border-[#C99AA2] bg-[#F0E0E3] text-xl font-semibold text-[#873F4B] sm:h-24 sm:w-24 sm:text-2xl">
                      {leader.initials}
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
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 06 — Subsidiary companies */}
        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-[1440px]">
            <div className="max-w-3xl">
              <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#873F4B]">
                <span className="h-px w-8 bg-[#873F4B]" />
                Business verticals
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
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

            <div className="mt-10 grid gap-5 lg:grid-cols-2">
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
        </section>

        {/* 07 — Core values */}
        <section className="bg-[#F0E0E3] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#873F4B]">
                  <span className="h-px w-8 bg-[#873F4B]" />
                  What drives us
                </p>

                <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
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

            <div className="mt-10 border-t border-[#C99AA2]">
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
        </section>

        {/* 08 — Closing CTA */}
        <section className="px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
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
        </section>
      </main>

      <Footer />
    </>
  );
}
