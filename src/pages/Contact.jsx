import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Open the customer's default email application.
    const recipient = "hello@dksportsgoods.example";

    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `;

    const mailtoLink =
      `mailto:${recipient}` +
      `?subject=${encodeURIComponent(formData.subject)}` +
      `&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const contactDetails = [
    {
      icon: MapPin,
      title: "Visit Our Store",
      description: "Coimbatore, Tamil Nadu, India",
      link: null,
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "+91 98765 43210",
      link: "tel:+919876543210",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "hello@dksportsgoods.example",
      link: "mailto:hello@dksportsgoods.example",
    },
    {
      icon: Clock,
      title: "Business Hours",
      description: "Monday – Saturday, 9 AM – 7 PM",
      link: null,
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#fffaf0] text-[#3b1822]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#800020] px-5 py-20 text-white sm:py-24 lg:py-28">
        <div className="absolute -right-20 -top-20 h-72 w-72 animate-pulse rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-[#e1b270]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl animate-[fadeUp_.8s_ease-out]">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium tracking-wide">
              <MessageCircle size={16} />
              WE'RE HERE TO HELP
            </span>

            <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
              Let's Talk
              <span className="mt-2 block text-[#e1b270]">
                Sports.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Have a question about our sports products, orders, or delivery?
              Our team is ready to help you find the right equipment for your
              game.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact-form"
                className="group inline-flex items-center gap-3 rounded-full bg-[#e1b270] px-7 py-3.5 font-bold text-[#3b1822] transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
              >
                Send Us a Message
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <Link
                to="/shop"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 font-semibold transition duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#800020]">
              Get In Touch
            </span>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              We'd Love to Hear From You
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#78646a]">
              Whether you need product recommendations or help with an order,
              choose the best way to reach our team.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {contactDetails.map((item, index) => {
              const Icon = item.icon;

              const content = (
                <div
                  className="group h-full rounded-2xl border border-[#eaded8] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#800020]/30 hover:shadow-xl"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#800020]/10 text-[#800020] transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-[#800020] group-hover:text-white">
                    <Icon size={25} />
                  </div>

                  <h3 className="text-lg font-bold">{item.title}</h3>

                  <p className="mt-3 break-words text-sm leading-6 text-[#78646a]">
                    {item.description}
                  </p>

                  {item.link && (
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#800020]">
                      Contact us
                      <ArrowRight
                        size={15}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  )}
                </div>
              );

              return item.link ? (
                <a
                  href={item.link}
                  key={item.title}
                  className="animate-[fadeUp_.7s_ease-out_both]"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={item.title}
                  className="animate-[fadeUp_.7s_ease-out_both]"
                >
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="px-5 pb-20 sm:pb-24">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl border border-[#eaded8] bg-white shadow-xl lg:grid-cols-5">
          {/* Left Panel */}
          <div className="relative overflow-hidden bg-[#800020] p-8 text-white sm:p-10 lg:col-span-2 lg:p-12">
            <div className="absolute -right-20 top-20 h-60 w-60 rounded-full bg-white/5 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-[#e1b270]/10 blur-3xl" />

            <div className="relative">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#e1b270]">
                Contact Support
              </span>

              <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
                How Can We Help You?
              </h2>

              <p className="mt-5 leading-7 text-white/75">
                Fill out the form with your question, and we'll help you with
                your sports shopping experience.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-white/10 p-3">
                    <Mail size={21} className="text-[#e1b270]" />
                  </div>

                  <div>
                    <h3 className="font-bold">Email Assistance</h3>
                    <p className="mt-1 break-all text-sm text-white/70">
                      hello@dksportsgoods.example
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-white/10 p-3">
                    <Clock size={21} className="text-[#e1b270]" />
                  </div>

                  <div>
                    <h3 className="font-bold">Support Hours</h3>
                    <p className="mt-1 text-sm text-white/70">
                      Monday – Saturday
                    </p>
                    <p className="text-sm text-white/70">
                      9:00 AM – 7:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 rounded-2xl border border-white/15 bg-white/5 p-5">
                <p className="text-sm leading-6 text-white/80">
                  "Every great game starts with the right equipment. Let us
                  help you find yours."
                </p>
                <p className="mt-3 text-sm font-bold text-[#e1b270]">
                  — DK Sports Goods
                </p>
              </div>
            </div>
          </div>

          {/* Form Panel */}
          <div className="p-6 sm:p-10 lg:col-span-3 lg:p-12">
            <h2 className="text-2xl font-black sm:text-3xl">
              Send Us a Message
            </h2>

            <p className="mt-3 leading-7 text-[#78646a]">
              Complete the form below. Fields marked with * are required.
            </p>

            {submitted && (
              <div className="mt-6 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-800">
                <CheckCircle size={20} className="mt-0.5 shrink-0" />
                <p>
                  Your email application has been opened. Please send the email
                  from your email application to complete your message.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-bold"
                  >
                    Full Name *
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    autoComplete="name"
                    required
                    className="w-full rounded-xl border border-[#e5d7d1] bg-[#fffaf6] px-4 py-3.5 outline-none transition duration-300 placeholder:text-[#a99a9d] focus:border-[#800020] focus:ring-4 focus:ring-[#800020]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-bold"
                  >
                    Email Address *
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    className="w-full rounded-xl border border-[#e5d7d1] bg-[#fffaf6] px-4 py-3.5 outline-none transition duration-300 placeholder:text-[#a99a9d] focus:border-[#800020] focus:ring-4 focus:ring-[#800020]/10"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-bold"
                >
                  Subject *
                </label>

                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What would you like help with?"
                  required
                  className="w-full rounded-xl border border-[#e5d7d1] bg-[#fffaf6] px-4 py-3.5 outline-none transition duration-300 placeholder:text-[#a99a9d] focus:border-[#800020] focus:ring-4 focus:ring-[#800020]/10"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-bold"
                >
                  Your Message *
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help..."
                  rows={5}
                  required
                  className="w-full resize-y rounded-xl border border-[#e5d7d1] bg-[#fffaf6] px-4 py-3.5 outline-none transition duration-300 placeholder:text-[#a99a9d] focus:border-[#800020] focus:ring-4 focus:ring-[#800020]/10"
                />
              </div>

              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#800020] px-6 py-4 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#610019] hover:shadow-lg active:translate-y-0 sm:w-auto"
              >
                Send Message
                <Send
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>

              <p className="text-xs leading-5 text-[#78646a]">
                This demo form opens your default email application. It does
                not store messages on a server.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-5 pb-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-3xl bg-[#f0e4d6] p-8 sm:p-10 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-black sm:text-3xl">
              Ready to Upgrade Your Game?
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-[#78646a]">
              Explore our sports collection and find the equipment you need.
            </p>
          </div>

          <Link
            to="/shop"
            className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-[#800020] px-7 py-4 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#610019] hover:shadow-xl"
          >
            Shop Now
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>

      {/* Page Animations */}
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </main>
  );
};

export default Contact;