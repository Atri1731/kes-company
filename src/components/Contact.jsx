
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   Phone,
//   Mail,
//   MapPin,
//   ArrowRight,
//   Send,
// } from "lucide-react";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     company: "",
//     email: "",
//     phone: "",
//     projectType: "",
//     budget: "",
//     timeline: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [successMessage, setSuccessMessage] = useState("");

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormData((previous) => ({
//       ...previous,
//       [name]: value,
//     }));

//     setErrors((previous) => ({
//       ...previous,
//       [name]: "",
//     }));

//     setSuccessMessage("");
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const newErrors = {};

//     if (!formData.name.trim()) {
//       newErrors.name = "Please enter your full name.";
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = "Please enter your email address.";
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = "Please enter a valid email address.";
//     }

//     if (!formData.phone.trim()) {
//       newErrors.phone = "Please enter your phone number.";
//     }

//     if (!formData.projectType) {
//       newErrors.projectType = "Please select a project type.";
//     }

//     if (!formData.message.trim()) {
//       newErrors.message = "Please describe your project.";
//     }

//     setErrors(newErrors);

//     if (Object.keys(newErrors).length > 0) {
//       return;
//     }

//     // Frontend demo only: no backend or email service is connected yet.
//     setSuccessMessage(
//       "Your form passed validation! Connect a backend to submit your inquiry."
//     );
//   };

// const inputClass =
//   "mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-red-600 focus:ring-4 focus:ring-red-100";

//   const contactCards = [
//     {
//       icon: Phone,
//       title: "Call Us",
//       detail: "+91 90999 10579",
//       href: "tel:+919099910579",
//     },
//     {
//       icon: Mail,
//       title: "Email Us",
//       detail: "info@kesprojects.com",
//       href: "mailto:info@kesprojects.com",
//     },
//     {
//       icon: MapPin,
//       title: "Visit Us",
//       detail:
//         "Mother Industrial Park-2, Dehgam, Kaddadara, Gandhinagar, Gujarat 382305",
//       href: null,
//     },
//   ];

//   return (
//     <section id="contact" className="bg-white py-16 sm:py-20 lg:py-24">
//       <div className="mx-auto max-w-7xl px-5 lg:px-8 ">
//         {/* Heading */}
//         <div className="mx-auto mb-12 max-w-3xl text-center">
//           <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-700">
//             Get In Touch
//           </p>

//           <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
//             Let's Discuss Your Project
//           </h2>

//           <p className="mt-5 leading-7 text-gray-600">
//             Tell us about your industrial project and requirements. Our team
//             can help you explore the right engineering solution.
//           </p>
//         </div>

//         {/* Contact information */}
//         <div className="mb-12 grid gap-5 md:grid-cols-3">
//           {contactCards.map((card) => {
//             const Icon = card.icon;

//             return (
//               <div
//                 key={card.title}
//                 className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-lg"
//               >
//                 <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 text-red-700">
//                   <Icon size={23} />
//                 </div>

//                 <h3 className="font-bold text-gray-900">{card.title}</h3>

//                 {card.href ? (
//                   <a
//                     href={card.href}
//                     className="mt-2 block break-words text-sm leading-6 text-gray-600 hover:text-red-700"
//                   >
//                     {card.detail}
//                   </a>
//                 ) : (
//                   <p className="mt-2 text-sm leading-6 text-gray-600">
//                     {card.detail}
//                   </p>
//                 )}
//               </div>
//             );
//           })}
//         </div>

//         {/* Inquiry form */}
//         <div className="grid gap-10 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
//           <div>
//             <p className="text-sm font-bold uppercase tracking-widest text-red-700">
//               Start a Conversation
//             </p>

//             <h3 className="mt-4 text-3xl font-extrabold text-gray-900">
//               Tell Us About Your Requirements
//             </h3>

//             <p className="mt-5 leading-7 text-gray-600">
//               Share your project details, expected timeline, and requirements.
//               The information will help you prepare for a discussion with the
//               KES team.
//             </p>

//             <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-5">
//               <h4 className="font-bold text-gray-900">
//                 Prefer to speak directly?
//               </h4>

//               <a
//                 href="tel:+919099910579"
//                 className="mt-3 inline-flex items-center gap-2 font-semibold text-red-700 hover:text-red-900"
//               >
//                 <Phone size={18} />
//                 +91 90999 10579
//               </a>
//             </div>
//           </div>

//           <form onSubmit={handleSubmit} noValidate>
//             <div className="grid gap-5 sm:grid-cols-2">
//               <div>
//                 <label htmlFor="name" className="font-medium text-gray-800">
//                   Full Name *
//                 </label>
//                 <input
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className={inputClass}
//                   placeholder="Enter your full name"
//                   autoComplete="name"
//                   aria-invalid={Boolean(errors.name)}
//                 />
//                 {errors.name && (
//                   <p className="mt-1 text-sm text-red-600">{errors.name}</p>
//                 )}
//               </div>

//               <div>
//                 <label htmlFor="company" className="font-medium text-gray-800">
//                   Company Name
//                 </label>
//                 <input
//                   id="company"
//                   name="company"
//                   value={formData.company}
//                   onChange={handleChange}
//                   className={inputClass}
//                   placeholder="Enter company name"
//                   autoComplete="organization"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="email" className="font-medium text-gray-800">
//                   Email Address *
//                 </label>
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className={inputClass}
//                   placeholder="you@example.com"
//                   autoComplete="email"
//                   aria-invalid={Boolean(errors.email)}
//                 />
//                 {errors.email && (
//                   <p className="mt-1 text-sm text-red-600">{errors.email}</p>
//                 )}
//               </div>

//               <div>
//                 <label htmlFor="phone" className="font-medium text-gray-800">
//                   Phone Number *
//                 </label>
//                 <input
//                   id="phone"
//                   name="phone"
//                   type="tel"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className={inputClass}
//                   placeholder="Enter phone number"
//                   autoComplete="tel"
//                   aria-invalid={Boolean(errors.phone)}
//                 />
//                 {errors.phone && (
//                   <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
//                 )}
//               </div>

//               <div>
//                 <label
//                   htmlFor="projectType"
//                   className="font-medium text-gray-800"
//                 >
//                   Project Type *
//                 </label>
//                 <select
//                   id="projectType"
//                   name="projectType"
//                   value={formData.projectType}
//                   onChange={handleChange}
//                   className={inputClass}
//                   aria-invalid={Boolean(errors.projectType)}
//                 >
//                   <option value="">Select project type</option>
//                   <option value="PEB">Pre-Engineered Building</option>
//                   <option value="Steel Structures">
//                     Industrial Steel Structures
//                   </option>
//                   <option value="STP/WTP">
//                     Wastewater Treatment (STP/WTP)
//                   </option>
//                   <option value="EPC">EPC Solutions</option>
//                   <option value="Other">Other</option>
//                 </select>
//                 {errors.projectType && (
//                   <p className="mt-1 text-sm text-red-600">
//                     {errors.projectType}
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <label htmlFor="budget" className="font-medium text-gray-800">
//                   Estimated Budget
//                 </label>
//                 <select
//                   id="budget"
//                   name="budget"
//                   value={formData.budget}
//                   onChange={handleChange}
//                   className={inputClass}
//                 >
//                   <option value="">Select budget range</option>
//                   <option value="Under 25 lakh">Under ₹25 lakh</option>
//                   <option value="25-50 lakh">₹25–50 lakh</option>
//                   <option value="50 lakh-1 crore">₹50 lakh–₹1 crore</option>
//                   <option value="1-5 crore">₹1–5 crore</option>
//                   <option value="Above 5 crore">Above ₹5 crore</option>
//                   <option value="Not decided">Not decided</option>
//                 </select>
//               </div>

//               <div className="sm:col-span-2">
//                 <label htmlFor="timeline" className="font-medium text-gray-800">
//                   Expected Timeline
//                 </label>
//                 <select
//                   id="timeline"
//                   name="timeline"
//                   value={formData.timeline}
//                   onChange={handleChange}
//                   className={inputClass}
//                 >
//                   <option value="">Select expected timeline</option>
//                   <option value="Urgent">As soon as possible</option>
//                   <option value="1-3 months">1–3 months</option>
//                   <option value="3-6 months">3–6 months</option>
//                   <option value="6+ months">6+ months</option>
//                   <option value="Planning">Still planning</option>
//                 </select>
//               </div>

//               <div className="sm:col-span-2">
//                 <label htmlFor="message" className="font-medium text-gray-800">
//                   Project Description *
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows={5}
//                   value={formData.message}
//                   onChange={handleChange}
//                   className={inputClass}
//                   placeholder="Describe your project and requirements..."
//                   aria-invalid={Boolean(errors.message)}
//                 />
//                 {errors.message && (
//                   <p className="mt-1 text-sm text-red-600">
//                     {errors.message}
//                   </p>
//                 )}
//               </div>
//             </div>

//             {successMessage && (
//               <p
//                 role="status"
//                 className="mt-5 rounded-lg bg-green-50 p-4 text-sm leading-6 text-green-800"
//               >
//                 {successMessage}
//               </p>
//             )}

//             <button
//               type="submit"
//               className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-red-700 px-6 py-4 font-bold text-white transition hover:bg-red-800 sm:w-auto"
//             >
//               Submit Inquiry <Send size={18} />
//             </button>

//             <p className="mt-4 text-xs leading-5 text-gray-500">
//               * Required fields. This demonstration currently validates your
//               entries in the browser only; it does not send or store your
//               inquiry.
//             </p>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }



import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Send,
  MoveUpRight,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));

    setSuccessMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    }

    if (!formData.projectType) {
      newErrors.projectType = "Please select a project type.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please describe your project.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // Frontend demo only: no backend or email service is connected yet.
    setSuccessMessage(
      "Your form passed validation! Connect a backend to submit your inquiry."
    );
  };

  const inputClass =
    "mt-2 w-full min-w-0 rounded-none border border-[#D8CEC7] bg-white px-4 py-3.5 text-sm text-[#292524] outline-none transition placeholder:text-[#A8A29E] focus:border-[#873F4B] focus:ring-2 focus:ring-[#873F4B]/10";

  const labelClass =
    "text-sm font-semibold text-[#44403C]";

  const contactCards = [
    {
      icon: Phone,
      title: "Call our team",
      detail: "+91 90999 10579",
      href: "tel:+919099910579",
      note: "Speak directly with us",
    },
    {
      icon: Mail,
      title: "Email us",
      detail: "info@kesprojects.com",
      href: "mailto:info@kesprojects.com",
      note: "Send us your requirements",
    },
    {
      icon: MapPin,
      title: "Visit our office",
      detail:
        "Mother Industrial Park-2, Dehgam, Kaddadara, Gandhinagar, Gujarat 382305",
      href: null,
      note: "Gujarat, India",
    },
  ];

  return (
    <section
      id="contact"
      className="bg-[#F7F5F1] px-3 py-3 text-[#292524] sm:px-5 sm:py-5 lg:px-8 lg:py-8"
    >
      <div className="mx-auto max-w-[1600px]">
        {/* Editorial header */}
        <header className="relative overflow-hidden border-b border-[#D8CEC7] bg-[#F7F5F1] px-5 py-9 sm:px-10 sm:py-12 lg:px-14 lg:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full border border-[#873F4B]/10 sm:h-80 sm:w-80"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-8 -top-8 h-36 w-36 rounded-full border border-[#873F4B]/10 sm:h-56 sm:w-56"
          />

          <div className="relative min-w-0">
            <p className="flex flex-wrap items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#873F4B] sm:text-[10px] sm:tracking-[0.22em]">
              <span className="h-px w-8 bg-[#873F4B]" />
              KES Group / Contact
            </p>

            <h1 className="mt-6 max-w-4xl break-words text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-7xl">
              Let's discuss
              <span className="block text-[#873F4B]">
                your next project.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#78716C] sm:text-base">
              Tell us about your industrial project and requirements.
              Our team can help you explore the right engineering solution.
            </p>

            <div className="mt-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#78716C]">
              <span className="h-2 w-2 rounded-full bg-[#873F4B]" />
              Engineering conversations start here
            </div>
          </div>
        </header>

        {/* Contact information */}
        <div className="grid gap-px border-b border-[#D8CEC7] bg-[#D8CEC7] sm:grid-cols-2 lg:grid-cols-3">
          {contactCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="group min-w-0 bg-[#F7F5F1] p-5 transition-colors duration-300 hover:bg-white sm:p-7 lg:p-8"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#D8CEC7] text-[#873F4B] transition-colors duration-300 group-hover:border-[#873F4B] group-hover:bg-[#873F4B] group-hover:text-white">
                    <Icon size={20} />
                  </div>

                  <span className="font-mono text-[10px] text-[#A8A29E]">
                    0{index + 1}
                  </span>
                </div>

                <h2 className="mt-5 text-lg font-semibold tracking-tight">
                  {card.title}
                </h2>

                <p className="mt-1 text-xs text-[#78716C]">
                  {card.note}
                </p>

                {card.href ? (
                  <a
                    href={card.href}
                    className="mt-4 inline-flex max-w-full items-start gap-2 break-words text-sm font-medium leading-6 text-[#873F4B] hover:text-[#71323D]"
                  >
                    <span className="break-words">{card.detail}</span>
                    <MoveUpRight
                      size={15}
                      className="mt-1 shrink-0"
                    />
                  </a>
                ) : (
                  <p className="mt-4 break-words text-sm leading-6 text-[#57534E]">
                    {card.detail}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Inquiry form section */}
        <div className="mt-8 grid min-w-0 gap-8 lg:mt-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          {/* Form introduction */}
          <aside className="min-w-0 bg-[#292524] p-6 text-white sm:p-9 lg:p-10">
            <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D9A8AE]">
              <span className="h-px w-7 bg-[#D9A8AE]" />
              Start a conversation
            </p>

            <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl">
              Tell us what
              <span className="block text-[#D9A8AE]">
                you're building.
              </span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/65">
              Share your project details, expected timeline, and
              requirements. This information can help you prepare
              for a discussion with the KES team.
            </p>

            <div className="mt-8 border-t border-white/15 pt-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/50">
                Prefer to speak directly?
              </p>

              <a
                href="tel:+919099910579"
                className="mt-4 inline-flex items-center gap-3 text-lg font-semibold text-white transition-colors hover:text-[#D9A8AE]"
              >
                <span className="flex h-10 w-10 items-center justify-center border border-white/20 text-[#D9A8AE]">
                  <Phone size={18} />
                </span>
                +91 90999 10579
              </a>
            </div>

            <div className="mt-8 border-t border-white/15 pt-6">
              <p className="text-xs leading-6 text-white/55">
                Industrial engineering. Dependable execution.
                Long-term partnerships.
              </p>
            </div>
          </aside>

          {/* Contact form */}
          <div className="min-w-0 border border-[#D8CEC7] bg-white p-5 sm:p-8 lg:p-10">
            <div className="mb-7 border-b border-[#E7E0DA] pb-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#873F4B]">
                Project enquiry
              </p>

              <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                Your project details
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#78716C]">
                Fields marked with * are required.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate>
              <div className="grid min-w-0 gap-x-5 gap-y-5 sm:grid-cols-2">
                {/* Full name */}
                <div className="min-w-0">
                  <label htmlFor="name" className={labelClass}>
                    Full Name *
                  </label>

                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Enter your full name"
                    autoComplete="name"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />

                  {errors.name && (
                    <p id="name-error" className="mt-2 text-xs text-red-700">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Company */}
                <div className="min-w-0">
                  <label htmlFor="company" className={labelClass}>
                    Company Name
                  </label>

                  <input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Enter company name"
                    autoComplete="organization"
                  />
                </div>

                {/* Email */}
                <div className="min-w-0">
                  <label htmlFor="email" className={labelClass}>
                    Email Address *
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="you@example.com"
                    autoComplete="email"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />

                  {errors.email && (
                    <p id="email-error" className="mt-2 text-xs text-red-700">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div className="min-w-0">
                  <label htmlFor="phone" className={labelClass}>
                    Phone Number *
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Enter phone number"
                    autoComplete="tel"
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                  />

                  {errors.phone && (
                    <p id="phone-error" className="mt-2 text-xs text-red-700">
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Project type */}
                <div className="min-w-0">
                  <label htmlFor="projectType" className={labelClass}>
                    Project Type *
                  </label>

                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className={inputClass}
                    aria-invalid={Boolean(errors.projectType)}
                    aria-describedby={
                      errors.projectType ? "projectType-error" : undefined
                    }
                  >
                    <option value="">Select project type</option>
                    <option value="PEB">Pre-Engineered Building</option>
                    <option value="Steel Structures">
                      Industrial Steel Structures
                    </option>
                    <option value="STP/WTP">
                      Wastewater Treatment (STP/WTP)
                    </option>
                    <option value="EPC">EPC Solutions</option>
                    <option value="Other">Other</option>
                  </select>

                  {errors.projectType && (
                    <p
                      id="projectType-error"
                      className="mt-2 text-xs text-red-700"
                    >
                      {errors.projectType}
                    </p>
                  )}
                </div>

                {/* Budget */}
                <div className="min-w-0">
                  <label htmlFor="budget" className={labelClass}>
                    Estimated Budget
                  </label>

                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select budget range</option>
                    <option value="Under 25 lakh">Under ₹25 lakh</option>
                    <option value="25-50 lakh">₹25–50 lakh</option>
                    <option value="50 lakh-1 crore">
                      ₹50 lakh–₹1 crore
                    </option>
                    <option value="1-5 crore">₹1–5 crore</option>
                    <option value="Above 5 crore">Above ₹5 crore</option>
                    <option value="Not decided">Not decided</option>
                  </select>
                </div>

                {/* Timeline */}
                <div className="min-w-0 sm:col-span-2">
                  <label htmlFor="timeline" className={labelClass}>
                    Expected Timeline
                  </label>

                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select expected timeline</option>
                    <option value="Urgent">As soon as possible</option>
                    <option value="1-3 months">1–3 months</option>
                    <option value="3-6 months">3–6 months</option>
                    <option value="6+ months">6+ months</option>
                    <option value="Planning">Still planning</option>
                  </select>
                </div>

                {/* Message */}
                <div className="min-w-0 sm:col-span-2">
                  <label htmlFor="message" className={labelClass}>
                    Project Description *
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-y`}
                    placeholder="Describe your project and requirements..."
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                  />

                  {errors.message && (
                    <p id="message-error" className="mt-2 text-xs text-red-700">
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Demo success message */}
              {successMessage && (
                <p
                  role="status"
                  className="mt-5 border border-[#873F4B]/20 bg-[#F7F5F1] p-4 text-sm leading-6 text-[#71323D]"
                >
                  {successMessage}
                </p>
              )}

              <button
                type="submit"
                className="group mt-7 inline-flex w-full items-center justify-center gap-3 bg-[#873F4B] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#71323D] sm:w-auto"
              >
                Submit Inquiry
                <Send
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <p className="mt-4 text-xs leading-5 text-[#78716C]">
                Your inquiry is validated in the browser only. This
                demonstration does not send or store your information.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-8 flex flex-col gap-3 border-t border-[#D8CEC7] pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#78716C]">
            KES Group / Engineering & Construction
          </p>

          <a
            href="mailto:info@kesprojects.com"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#873F4B] hover:text-[#71323D]"
          >
            Email our team
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

