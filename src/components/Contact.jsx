
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Send,
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
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
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
  "mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-red-600 focus:ring-4 focus:ring-red-100";

  const contactCards = [
    {
      icon: Phone,
      title: "Call Us",
      detail: "+91 90999 10579",
      href: "tel:+919099910579",
    },
    {
      icon: Mail,
      title: "Email Us",
      detail: "info@kesprojects.com",
      href: "mailto:info@kesprojects.com",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      detail:
        "Mother Industrial Park-2, Dehgam, Kaddadara, Gandhinagar, Gujarat 382305",
      href: null,
    },
  ];

  return (
    <section id="contact" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 ">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-700">
            Get In Touch
          </p>

          <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Let's Discuss Your Project
          </h2>

          <p className="mt-5 leading-7 text-gray-600">
            Tell us about your industrial project and requirements. Our team
            can help you explore the right engineering solution.
          </p>
        </div>

        {/* Contact information */}
        <div className="mb-12 grid gap-5 md:grid-cols-3">
          {contactCards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 text-red-700">
                  <Icon size={23} />
                </div>

                <h3 className="font-bold text-gray-900">{card.title}</h3>

                {card.href ? (
                  <a
                    href={card.href}
                    className="mt-2 block break-words text-sm leading-6 text-gray-600 hover:text-red-700"
                  >
                    {card.detail}
                  </a>
                ) : (
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {card.detail}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Inquiry form */}
        <div className="grid gap-10 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-red-700">
              Start a Conversation
            </p>

            <h3 className="mt-4 text-3xl font-extrabold text-gray-900">
              Tell Us About Your Requirements
            </h3>

            <p className="mt-5 leading-7 text-gray-600">
              Share your project details, expected timeline, and requirements.
              The information will help you prepare for a discussion with the
              KES team.
            </p>

            <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-5">
              <h4 className="font-bold text-gray-900">
                Prefer to speak directly?
              </h4>

              <a
                href="tel:+919099910579"
                className="mt-3 inline-flex items-center gap-2 font-semibold text-red-700 hover:text-red-900"
              >
                <Phone size={18} />
                +91 90999 10579
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="font-medium text-gray-800">
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
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="company" className="font-medium text-gray-800">
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

              <div>
                <label htmlFor="email" className="font-medium text-gray-800">
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
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="font-medium text-gray-800">
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
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="projectType"
                  className="font-medium text-gray-800"
                >
                  Project Type *
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className={inputClass}
                  aria-invalid={Boolean(errors.projectType)}
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
                  <p className="mt-1 text-sm text-red-600">
                    {errors.projectType}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="budget" className="font-medium text-gray-800">
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
                  <option value="50 lakh-1 crore">₹50 lakh–₹1 crore</option>
                  <option value="1-5 crore">₹1–5 crore</option>
                  <option value="Above 5 crore">Above ₹5 crore</option>
                  <option value="Not decided">Not decided</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="timeline" className="font-medium text-gray-800">
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

              <div className="sm:col-span-2">
                <label htmlFor="message" className="font-medium text-gray-800">
                  Project Description *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Describe your project and requirements..."
                  aria-invalid={Boolean(errors.message)}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.message}
                  </p>
                )}
              </div>
            </div>

            {successMessage && (
              <p
                role="status"
                className="mt-5 rounded-lg bg-green-50 p-4 text-sm leading-6 text-green-800"
              >
                {successMessage}
              </p>
            )}

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-red-700 px-6 py-4 font-bold text-white transition hover:bg-red-800 sm:w-auto"
            >
              Submit Inquiry <Send size={18} />
            </button>

            <p className="mt-4 text-xs leading-5 text-gray-500">
              * Required fields. This demonstration currently validates your
              entries in the browser only; it does not send or store your
              inquiry.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
