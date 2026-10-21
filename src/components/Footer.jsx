
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  ArrowRight,
  X,
  ShieldCheck,
  Mail,
  ShoppingBag,
  MapPin,
} from 'lucide-react';

import logo from '../assets/logo.png';
import instagramIcon from '../assets/insta.png';
import facebookIcon from '../assets/facebook.png';
import youtubeIcon from '../assets/youtube.png';
import whatsappIcon from '../assets/whatsapp.png';

const socialLinks = [
  { name: 'Instagram', icon: instagramIcon, url: 'https://www.instagram.com/' },
  { name: 'Facebook', icon: facebookIcon, url: 'https://www.facebook.com/' },
  { name: 'YouTube', icon: youtubeIcon, url: 'https://www.youtube.com/' },
  { name: 'WhatsApp', icon: whatsappIcon, url: 'https://www.whatsapp.com/' },
];

const navigationLinks = [
  { label: 'Home', to: '/' },
  { label: 'Shop All Gear', to: '/shop' },
  { label: 'Our Story', to: '/about' },
  { label: 'Track an Order', to: '/orders' },
  { label: 'Contact Us', to: '/contact' },
];

const policies = {
  terms: {
    title: 'Terms & Conditions',
    subtitle: 'Please read these terms before using our website.',
    sections: [
      {
        heading: '1. General Information',
        text: 'DK Sports Goods is a demonstration sports goods e-commerce website that allows customers to browse products, add items to their shopping bag, and place orders.',
      },
      {
        heading: '2. Products and Pricing',
        text: 'Product descriptions, images, availability, and prices are provided for demonstration purposes. Errors may occasionally occur.',
      },
      {
        heading: '3. Orders and Confirmation',
        text: 'Customers must provide accurate contact information and delivery details. Orders are subject to confirmation and availability.',
      },
      {
        heading: '4. Payment',
        text: 'Cash on Delivery is the available demonstration payment method. Online payment processing is not implemented.',
      },
      {
        heading: '5. Cancellations and Returns',
        text: 'Contact the store to discuss cancellations, returns, or exchanges. Actual purchases are subject to applicable store policies and consumer protection laws.',
      },
      {
        heading: '6. Website Usage',
        text: 'Users must not misuse the website, attempt unauthorized access, interfere with its operation, or submit false order information.',
      },
      {
        heading: '7. Changes to These Terms',
        text: 'These terms may be updated when website features or store policies change.',
      },
    ],
  },

  privacy: {
    title: 'Privacy Policy',
    subtitle: 'Learn how this demonstration website handles your information.',
    sections: [
      {
        heading: '1. Information We Collect',
        text: 'Customers may provide their name, email address, phone number, and delivery address when placing a demonstration order.',
      },
      {
        heading: '2. How Information Is Used',
        text: 'Information may be used to demonstrate order placement, manage customer accounts, and display order details and status.',
      },
      {
        heading: '3. Local Storage',
        text: 'This frontend project uses browser localStorage. Data is associated with the browser and is not automatically shared across devices.',
      },
      {
        heading: '4. Data Security',
        text: 'Browser storage is not a secure production database. Do not enter real payment details, passwords, or sensitive personal information.',
      },
      {
        heading: '5. Third-Party Services',
        text: 'Social media links may direct you to external websites with their own privacy policies.',
      },
      {
        heading: '6. Data Retention',
        text: 'Demonstration data may remain in browser storage until cleared or removed by the application.',
      },
      {
        heading: '7. Contact',
        text: 'For questions, contact hello@dksportsgoods.example. Replace this placeholder with your actual business email before publishing.',
      },
    ],
  },
};

export default function Footer() {
  const [activeModal, setActiveModal] = useState(null);
  const currentPolicy = activeModal ? policies[activeModal] : null;

  const closePolicy = () => setActiveModal(null);

  useEffect(() => {
    if (!activeModal) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closePolicy();
    };

    const previousOverflow = document.body.style.overflow;

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeModal]);

  return (
    <>
      <footer className="relative mt-6 overflow-hidden bg-[#800020] text-white sm:mt-8">
        {/* Compact footer content */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border border-white/[0.08] sm:h-48 sm:w-48"
        />

        <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
          {/* Brand and shop banner */}
          <div className="grid gap-5 border-b border-white/20 py-5 sm:grid-cols-2 sm:items-center sm:gap-6 sm:py-6 lg:gap-10">
            <div className="min-w-0">
              <Link
                to="/"
                aria-label="DK Sports Goods home"
                className="inline-flex rounded-md bg-[#FFF8E7] px-2 py-1"
              >
                <img
                  src={logo}
                  alt="DK Sports Goods"
                  className="h-8 w-auto max-w-[145px] object-contain sm:h-9"
                />
              </Link>

              <p className="mt-2 max-w-md text-[11px] leading-5 text-white/75 sm:text-xs">
                Sports essentials for everyday athletes. Find your gear,
                get moving, and enjoy the game.
              </p>

              <div className="mt-3 flex gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-white transition hover:-translate-y-0.5 hover:bg-[#FFF8E7]"
                  >
                    <img
                      src={social.icon}
                      alt=""
                      className="h-7 w-7 object-contain"
                    />
                  </a>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden border border-white/15 bg-white/[0.07] p-3.5 sm:p-4">
              <span className="inline-flex items-center gap-2 text-[9px] font-bold tracking-[1.5px] text-[#F0D9D9]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#F0D9D9]" />
                YOUR NEXT MOVE
              </span>

              <h3 className="mt-1.5 text-xl font-bold leading-tight sm:text-2xl">
                Ready to play?{' '}
                <span className="font-serif font-normal italic text-[#F0D9D9]">
                  Gear up with DK.
                </span>
              </h3>

              <p className="mt-1.5 text-[11px] leading-4 text-white/70 sm:text-xs">
                Discover sports essentials for your next game.
              </p>

              <Link
                to="/shop"
                className="mt-3 inline-flex items-center gap-2 bg-[#FFF8E7] px-3.5 py-2 text-[11px] font-bold text-[#800020] transition hover:bg-white sm:text-xs"
              >
                Explore the Shop <ArrowUpRight size={14} />
              </Link>

              <ShoppingBag
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-4 -right-3 h-16 w-16 text-white/[0.05] sm:h-20 sm:w-20"
                strokeWidth={1}
              />
            </div>
          </div>

          {/* Short navigation and support sections */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-5 py-5 sm:grid-cols-3 sm:gap-6 sm:py-6 lg:grid-cols-[1fr_1fr_0.8fr]">
            <div>
              <h4 className="mb-2.5 text-[9px] font-extrabold tracking-[1.6px] text-[#F0D9D9] sm:text-[10px]">
                EXPLORE
              </h4>

              <nav className="flex flex-col items-start gap-2">
                {navigationLinks.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="group inline-flex items-center gap-1 text-[11px] text-white/75 transition hover:text-white sm:text-xs"
                  >
                    {item.label}
                    <ArrowUpRight
                      size={11}
                      className="opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    />
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="mb-2.5 text-[9px] font-extrabold tracking-[1.6px] text-[#F0D9D9] sm:text-[10px]">
                NEED A HAND?
              </h4>

              <p className="max-w-xs text-[11px] leading-5 text-white/70 sm:text-xs">
                Need help with your gear or order? Contact our team.
              </p>

              <a
                href="mailto:hello@dksportsgoods.example"
                className="mt-2 inline-flex items-start gap-1.5 text-[11px] font-semibold text-white transition hover:text-[#F0D9D9] sm:text-xs"
              >
                <Mail size={13} className="mt-0.5 shrink-0" />
                <span className="break-all">
                  hello@dksportsgoods.example
                </span>
              </a>

              <Link
                to="/contact"
                className="mt-2 inline-flex items-center gap-1 border-b border-white/35 pb-0.5 text-[11px] font-bold text-white/85 hover:text-white sm:text-xs"
              >
                Get in touch <ArrowRight size={12} />
              </Link>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h4 className="mb-2.5 text-[9px] font-extrabold tracking-[1.6px] text-[#F0D9D9] sm:text-[10px]">
                INFORMATION
              </h4>

              <div className="flex flex-wrap gap-x-4 gap-y-2 sm:flex-col sm:items-start">
                <button
                  type="button"
                  onClick={() => setActiveModal('terms')}
                  className="text-left text-[11px] text-white/75 transition hover:text-white sm:text-xs"
                >
                  Terms &amp; Conditions
                </button>

                <button
                  type="button"
                  onClick={() => setActiveModal('privacy')}
                  className="text-left text-[11px] text-white/75 transition hover:text-white sm:text-xs"
                >
                  Privacy Policy
                </button>
              </div>

              <div className="mt-3 flex items-start gap-2 border-t border-white/15 pt-2.5">
                <ShieldCheck
                  size={15}
                  className="mt-0.5 shrink-0 text-[#F0D9D9]"
                />
                <div>
                  <p className="text-[11px] font-semibold sm:text-xs">
                    Shopping Information
                  </p>
                  <p className="mt-0.5 text-[10px] leading-4 text-white/60">
                    Demo store · Cash on Delivery
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Compact bottom bar */}
          <div className="flex flex-col gap-2 border-t border-white/20 py-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[10px] leading-4 text-white/65 sm:text-[11px]">
              © {new Date().getFullYear()} DK Sports Goods. All rights reserved.
            </p>

            <p className="inline-flex items-center gap-1.5 text-[10px] text-white/65 sm:text-[11px]">
              <MapPin size={12} />
              Play your game. Your way.
            </p>

            <Link
              to="/"
              className="inline-flex items-center gap-1 self-start text-[10px] font-semibold text-white/80 transition hover:text-white sm:self-auto sm:text-[11px]"
            >
              Back to top <ArrowUpRight size={12} />
            </Link>
          </div>
        </div>
      </footer>

      {/* Terms and Privacy popup */}
      {currentPolicy && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1C080D]/75 p-3 backdrop-blur-sm sm:p-4"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closePolicy();
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="policy-title"
            className="relative flex max-h-[88vh] w-full max-w-2xl flex-col overflow-hidden rounded-xl border border-[#D8CFC5] bg-[#FFF8E7] shadow-2xl sm:rounded-2xl"
          >
            <div className="flex items-start justify-between gap-3 border-b border-[#D8CFC5] bg-white px-4 py-3.5 sm:px-7 sm:py-4">
              <div>
                <p className="mb-1 text-[9px] font-extrabold tracking-[1.6px] text-[#800020]">
                  DK SPORTS GOODS
                </p>

                <h2
                  id="policy-title"
                  className="text-xl font-bold tracking-tight text-[#800020] sm:text-2xl"
                >
                  {currentPolicy.title}
                </h2>

                <p className="mt-1 text-xs leading-5 text-[#756763] sm:text-sm">
                  {currentPolicy.subtitle}
                </p>
              </div>

              <button
                type="button"
                onClick={closePolicy}
                aria-label="Close policy"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#D8CFC5] text-[#800020] transition hover:bg-[#800020] hover:text-white"
              >
                <X size={16} />
              </button>
            </div>

            <div className="overflow-y-auto px-4 py-4 sm:px-7 sm:py-5">
              <div className="space-y-4">
                {currentPolicy.sections.map((section) => (
                  <article key={section.heading}>
                    <h3 className="mb-1 text-sm font-bold text-[#800020]">
                      {section.heading}
                    </h3>
                    <p className="text-xs leading-5 text-[#5E514D] sm:text-sm sm:leading-6">
                      {section.text}
                    </p>
                  </article>
                ))}
              </div>

              <p className="mt-5 border-t border-[#D8CFC5] pt-3 text-[10px] leading-5 text-[#756763] sm:text-xs">
                Review and adapt this demonstration policy to your actual
                business practices and applicable laws before publishing.
              </p>
            </div>

            <div className="flex justify-end border-t border-[#D8CFC5] bg-white px-4 py-3 sm:px-7">
              <button
                type="button"
                onClick={closePolicy}
                className="bg-[#800020] px-5 py-2 text-xs font-semibold text-white transition hover:bg-[#600018] sm:text-sm"
              >
                Close
              </button>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
