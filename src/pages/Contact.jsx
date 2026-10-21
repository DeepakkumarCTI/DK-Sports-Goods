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
  ArrowUpRight,
} from "lucide-react";

import heroVideo from "../assets/videos/contactsection.mp4";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const recipient = "hello@dksportsgoods.example";

    const emailBody = `Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}`;

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
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#FFF8E7] text-[#302322]">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-[#800020] px-5 py-12 text-white sm:py-14 lg:py-16">
        {/* Background video */}
        <video
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Video overlays */}
        <div className="absolute inset-0 -z-10 bg-[#2B1018]/15" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#2B1018]/50 via-[#800020]/35 to-[#2B1018]/15" />

        <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[#F0D9D9]/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-[#D8CFC5]/10 blur-3xl" />

        <div className="relative mx-auto max-w-[1450px]">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 border border-white/25 bg-white/10 px-3 py-2 text-[10px] font-extrabold tracking-[2px] backdrop-blur-sm">
              <MessageCircle size={15} />
              WE'RE HERE TO HELP
            </span>

            <h1 className="mt-5 text-5xl font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
              Let's Talk
              <span className="mt-1 block font-serif font-normal italic text-[#F0D9D9]">
                Sports.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
              Questions about products, orders, or delivery? We're here to help
              you find the right equipment for your game.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#contact-form"
                className="group inline-flex items-center gap-3 bg-[#FFF8E7] px-5 py-3.5 text-xs font-extrabold text-[#800020] transition duration-300 hover:-translate-y-1 hover:bg-white"
              >
                Send Us a Message
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <Link
                to="/shop"
                className="inline-flex items-center gap-3 border border-white/40 bg-white/5 px-5 py-3.5 text-xs font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-white/15"
              >
                Explore Products
                <ArrowUpRight size={17} />
              </Link>
            </div>

            <div className="mt-7 flex items-center gap-3 border-t border-white/20 pt-5">
              <div className="flex h-10 w-10 items-center justify-center bg-[#FFF8E7] text-sm font-black text-[#800020]">
                DK.
              </div>
              <div>
                <p className="text-xs font-bold">DK Sports Goods</p>
                <p className="mt-1 text-[11px] text-white/65">
                  Here for your next move.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="px-4 py-10 sm:px-6 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-[1450px]">
          <div className="mb-7 flex flex-col justify-between gap-3 sm:mb-8 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] font-extrabold tracking-[2px] text-[#800020]">
                GET IN TOUCH
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                We'd love to hear from you.
              </h2>
            </div>

            <p className="max-w-lg text-sm leading-6 text-[#756763]">
              Choose the best way to reach our team for product recommendations
              or order assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {contactDetails.map((item) => {
              const Icon = item.icon;

              const content = (
                <div className="group flex h-full items-start gap-4 border border-[#D8CFC5] bg-white p-4 transition duration-300 hover:-translate-y-1 hover:border-[#800020]/40 hover:shadow-lg sm:p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#800020]/[0.07] text-[#800020] transition duration-300 group-hover:bg-[#800020] group-hover:text-white">
                    <Icon size={21} strokeWidth={1.7} />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-sm font-bold">{item.title}</h3>
                    <p className="mt-2 break-words text-xs leading-5 text-[#756763]">
                      {item.description}
                    </p>

                    {item.link && (
                      <span className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-extrabold text-[#800020]">
                        Contact us
                        <ArrowRight
                          size={13}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </span>
                    )}
                  </div>
                </div>
              );

              return item.link ? (
                <a
                  key={item.title}
                  href={item.link}
                  className="block"
                >
                  {content}
                </a>
              ) : (
                <div key={item.title}>{content}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="scroll-mt-24 px-4 pb-10 sm:px-6 sm:pb-12 lg:pb-14">
        <div className="mx-auto grid max-w-[1450px] overflow-hidden border border-[#D8CFC5] bg-white shadow-lg lg:grid-cols-5">
          {/* Information Panel */}
          <div className="relative overflow-hidden bg-[#800020] p-6 text-white sm:p-8 lg:col-span-2 lg:p-9">
            <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-white/[0.06] blur-2xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-12 h-48 w-48 rounded-full bg-[#F0D9D9]/10 blur-2xl" />

            <div className="relative">
              <p className="text-[10px] font-extrabold tracking-[2px] text-[#F0D9D9]">
                CONTACT SUPPORT
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
                How can we help?
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/75">
                Tell us what you need. Our team is ready to help make your
                sports shopping experience easier.
              </p>

              <div className="mt-7 space-y-5">
                <div className="flex items-start gap-3">
                  <div className="bg-white/10 p-2.5">
                    <Mail size={19} className="text-[#F0D9D9]" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold">Email Assistance</h3>
                    <p className="mt-1 break-all text-xs leading-5 text-white/70">
                      hello@dksportsgoods.example
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-white/10 p-2.5">
                    <Clock size={19} className="text-[#F0D9D9]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold">Support Hours</h3>
                    <p className="mt-1 text-xs leading-5 text-white/70">
                      Monday – Saturday
                      <br />
                      9:00 AM – 7:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-white/10 p-2.5">
                    <MapPin size={19} className="text-[#F0D9D9]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold">Our Location</h3>
                    <p className="mt-1 text-xs leading-5 text-white/70">
                      Coimbatore, Tamil Nadu, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 border border-white/15 bg-white/[0.06] p-4">
                <p className="text-sm leading-6 text-white/80">
                  "Every great game starts with the right equipment. Let us
                  help you find yours."
                </p>
                <p className="mt-2 text-xs font-extrabold text-[#F0D9D9]">
                  — DK Sports Goods
                </p>
              </div>
            </div>
          </div>

          {/* Form Panel */}
          <div className="p-5 sm:p-8 lg:col-span-3 lg:p-9">
            <p className="text-[10px] font-extrabold tracking-[2px] text-[#800020]">
              DROP US A LINE
            </p>

            <h2 className="mt-3 text-2xl font-black sm:text-3xl">
              Send us a message.
            </h2>

            <p className="mt-2 text-sm leading-6 text-[#756763]">
              Fields marked with * are required.
            </p>

            {submitted && (
              <div
                role="status"
                className="mt-5 flex items-start gap-3 border border-green-200 bg-green-50 p-3.5 text-sm text-green-800"
              >
                <CheckCircle size={19} className="mt-0.5 shrink-0" />
                <p>
                  Your email application should open. Please send the message
                  from that application to complete your enquiry.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs font-bold">
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
                    className="w-full border border-[#D8CFC5] bg-[#FFF8E7]/50 px-3.5 py-3 text-sm outline-none transition placeholder:text-[#9B8C86] focus:border-[#800020] focus:ring-2 focus:ring-[#800020]/10"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-bold">
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
                    className="w-full border border-[#D8CFC5] bg-[#FFF8E7]/50 px-3.5 py-3 text-sm outline-none transition placeholder:text-[#9B8C86] focus:border-[#800020] focus:ring-2 focus:ring-[#800020]/10"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-1.5 block text-xs font-bold">
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
                  className="w-full border border-[#D8CFC5] bg-[#FFF8E7]/50 px-3.5 py-3 text-sm outline-none transition placeholder:text-[#9B8C86] focus:border-[#800020] focus:ring-2 focus:ring-[#800020]/10"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs font-bold">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help..."
                  rows={4}
                  required
                  className="w-full resize-y border border-[#D8CFC5] bg-[#FFF8E7]/50 px-3.5 py-3 text-sm outline-none transition placeholder:text-[#9B8C86] focus:border-[#800020] focus:ring-2 focus:ring-[#800020]/10"
                />
              </div>

              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-3 bg-[#800020] px-6 py-3.5 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#600018] sm:w-auto"
              >
                Send Message
                <Send
                  size={17}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5"
                />
              </button>

              <p className="text-[11px] leading-5 text-[#756763]">
                This demo form opens your default email application. Messages
                are not saved to a server.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 pb-10 sm:px-6 sm:pb-12">
        <div className="mx-auto flex max-w-[1450px] flex-col items-start justify-between gap-5 border border-[#D8CFC5] bg-[#F0E4D6] p-5 sm:p-7 md:flex-row md:items-center">
          <div>
            <p className="text-[10px] font-extrabold tracking-[2px] text-[#800020]">
              YOUR NEXT MOVE STARTS HERE
            </p>
            <h2 className="mt-3 text-2xl font-black sm:text-3xl">
              Ready to upgrade your game?
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-[#756763]">
              Explore our sports collection and find the equipment you need.
            </p>
          </div>

          <Link
            to="/shop"
            className="group inline-flex shrink-0 items-center gap-3 bg-[#800020] px-5 py-3.5 text-xs font-extrabold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#600018]"
          >
            Shop Now
            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Contact;
