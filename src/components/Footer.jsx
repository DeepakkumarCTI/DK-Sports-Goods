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
  {
    name: 'Instagram',
    icon: instagramIcon,
    url: 'https://www.instagram.com/',
  },
  {
    name: 'Facebook',
    icon: facebookIcon,
    url: 'https://www.facebook.com/',
  },
  {
    name: 'YouTube',
    icon: youtubeIcon,
    url: 'https://www.youtube.com/',
  },
  {
    name: 'WhatsApp',
    icon: whatsappIcon,
    url: 'https://www.whatsapp.com/',
  },
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
        text: 'Product descriptions, images, availability, and prices are provided for demonstration purposes. We aim to display accurate information, but errors may occasionally occur.',
      },
      {
        heading: '3. Orders and Confirmation',
        text: 'Customers must provide accurate contact information and delivery details when placing an order. Orders are subject to confirmation and availability.',
      },
      {
        heading: '4. Payment',
        text: 'Cash on Delivery is the available demonstration payment method. Online payment processing is not implemented on this website.',
      },
      {
        heading: '5. Cancellations and Returns',
        text: 'Customers should contact the store to discuss order cancellation, returns, or exchanges. Actual purchases must follow the store’s applicable policies and consumer protection laws.',
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
        text: 'When placing a demonstration order, customers may provide their name, email address, phone number, and delivery address.',
      },
      {
        heading: '2. How Information Is Used',
        text: 'The information may be used to demonstrate order placement, display order details, manage customer accounts, and provide order status information.',
      },
      {
        heading: '3. Local Storage',
        text: 'This frontend project uses browser localStorage to store demonstration data. The data is associated with the browser and is not automatically shared across devices.',
      },
      {
        heading: '4. Data Security',
        text: 'Browser storage is not a secure production database. Do not enter real payment information, passwords, or sensitive personal information into this demonstration website.',
      },
      {
        heading: '5. Third-Party Services',
        text: 'Social media links may direct you to external websites. Those websites have their own privacy policies and data handling practices.',
      },
      {
        heading: '6. Data Retention',
        text: 'Demonstration data may remain in browser storage until it is cleared or removed by the application.',
      },
      {
        heading: '7. Contact',
        text: 'For questions about this demonstration privacy policy, contact hello@dksportsgoods.example. Replace this placeholder with your actual business email before publishing.',
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
      if (event.key === 'Escape') {
        setActiveModal(null);
      }
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
      <footer className="relative mt-8 overflow-hidden bg-[#800020] text-white sm:mt-10">
        {/* Decorative background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full border border-white/[0.08] sm:h-64 sm:w-64"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-8 -top-8 h-36 w-36 rounded-full border border-white/[0.08] sm:h-44 sm:w-44"
        />

        <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
          {/* Compact brand and shop section */}
          <div className="grid gap-6 border-b border-white/20 py-6 sm:py-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-10 lg:py-9">
            <div>
              <Link
                to="/"
                aria-label="DK Sports Goods home"
                className="inline-flex rounded-md bg-[#FFF8E7] px-2.5 py-1.5"
              >
                <img
                  src={logo}
                  alt="DK Sports Goods"
                  className="h-9 w-auto max-w-[160px] object-contain sm:h-11 sm:max-w-[185px]"
                />
              </Link>

              <p className="mt-3 max-w-md text-xs leading-6 text-white/75 sm:text-sm">
                Sports essentials for everyday athletes, weekend players,
                and every new challenge. Find your gear and enjoy the game.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#FFF8E7]"
                  >
                    <img
                      src={social.icon}
                      alt=""
                      className="h-4 w-4 object-contain"
                    />
                  </a>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden border border-white/15 bg-white/[0.07] p-4 sm:p-5 lg:p-6">
              <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[1.8px] text-[#F0D9D9]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#F0D9D9]" />
                YOUR NEXT MOVE
              </span>

              <h3 className="mt-2 text-2xl font-bold leading-tight sm:text-3xl">
                Ready to play?{' '}
                <span className="font-serif font-normal italic text-[#F0D9D9]">
                  Gear up with DK.
                </span>
              </h3>

              <p className="mt-2 text-xs leading-5 text-white/70 sm:text-sm">
                Discover sports essentials selected to keep you moving.
              </p>

              <Link
                to="/shop"
                className="mt-4 inline-flex items-center gap-3 bg-[#FFF8E7] px-4 py-2.5 text-xs font-bold text-[#800020] transition hover:bg-white"
              >
                Explore the Shop <ArrowUpRight size={15} />
              </Link>

              <ShoppingBag
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-5 -right-4 h-24 w-24 text-white/[0.05] sm:h-28 sm:w-28"
                strokeWidth={1}
              />
            </div>
          </div>

          {/* Compact footer links */}
          <div className="grid grid-cols-2 gap-x-5 gap-y-7 py-7 sm:grid-cols-3 sm:gap-8 sm:py-8 lg:grid-cols-[1fr_0.9fr_1fr] lg:py-9">
            {/* Explore */}
            <div>
              <h4 className="mb-3 text-[10px] font-extrabold tracking-[1.8px] text-[#F0D9D9] sm:text-xs">
                EXPLORE
              </h4>

              <nav className="flex flex-col items-start gap-2.5">
                {navigationLinks.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="group inline-flex items-center gap-1.5 text-xs text-white/70 transition hover:text-white sm:text-sm"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    />
                  </Link>
                ))}
              </nav>
            </div>

            {/* Customer support */}
            <div>
              <h4 className="mb-3 text-[10px] font-extrabold tracking-[1.8px] text-[#F0D9D9] sm:text-xs">
                NEED A HAND?
              </h4>

              <p className="max-w-xs text-xs leading-5 text-white/70 sm:text-sm sm:leading-6">
                Questions about your sports gear or order? We’re here to help.
              </p>

              <a
                href="mailto:hello@dksportsgoods.example"
                className="mt-3 inline-flex items-start gap-2 text-xs font-semibold text-white transition hover:text-[#F0D9D9] sm:text-sm"
              >
                <Mail size={15} className="mt-0.5 shrink-0" />
                <span className="break-all">
                  hello@dksportsgoods.example
                </span>
              </a>

              <Link
                to="/contact"
                className="mt-3 inline-flex items-center gap-1.5 border-b border-white/35 pb-1 text-xs font-bold text-white/80 transition hover:border-white hover:text-white"
              >
                Get in touch <ArrowRight size={13} />
              </Link>
            </div>

            {/* Information */}
            <div className="col-span-2 sm:col-span-1">
              <h4 className="mb-3 text-[10px] font-extrabold tracking-[1.8px] text-[#F0D9D9] sm:text-xs">
                INFORMATION
              </h4>

              <div className="flex flex-wrap gap-x-5 gap-y-3 sm:flex-col sm:items-start">
                <button
                  type="button"
                  onClick={() => setActiveModal('terms')}
                  className="text-left text-xs text-white/70 transition hover:text-white sm:text-sm"
                >
                  Terms &amp; Conditions
                </button>

                <button
                  type="button"
                  onClick={() => setActiveModal('privacy')}
                  className="text-left text-xs text-white/70 transition hover:text-white sm:text-sm"
                >
                  Privacy Policy
                </button>
              </div>

              <div className="mt-4 flex items-start gap-2.5 border-t border-white/15 pt-3">
                <ShieldCheck
                  size={17}
                  className="mt-0.5 shrink-0 text-[#F0D9D9]"
                />
                <div>
                  <p className="text-xs font-semibold">Shopping Information</p>
                  <p className="mt-1 text-[11px] leading-5 text-white/60">
                    Demonstration storefront · Cash on Delivery
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Short bottom bar */}
          <div className="flex flex-col gap-3 border-t border-white/20 py-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[11px] leading-5 text-white/65 sm:text-xs">
              © {new Date().getFullYear()} DK Sports Goods. All rights reserved.
            </p>

            <p className="inline-flex items-center gap-1.5 text-[11px] text-white/65 sm:text-xs">
              <MapPin size={13} />
              Play your game. Your way.
            </p>

            <Link
              to="/"
              className="inline-flex items-center gap-1.5 self-start text-[11px] font-semibold text-white/80 transition hover:text-white sm:self-auto sm:text-xs"
            >
              Back to top <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>
      </footer>

      {/* Terms and Privacy popup */}
      {currentPolicy && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1C080D]/75 p-3 backdrop-blur-sm sm:p-4"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closePolicy();
            }
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="policy-title"
            className="relative flex max-h-[88vh] w-full max-w-2xl flex-col overflow-hidden rounded-xl border border-[#D8CFC5] bg-[#FFF8E7] shadow-2xl sm:rounded-2xl"
          >
            {/* Popup header */}
            <div className="flex items-start justify-between gap-3 border-b border-[#D8CFC5] bg-white px-4 py-4 sm:px-7 sm:py-5">
              <div>
                <p className="mb-1.5 text-[9px] font-extrabold tracking-[1.8px] text-[#800020] sm:text-[10px]">
                  DK SPORTS GOODS
                </p>

                <h2
                  id="policy-title"
                  className="text-xl font-bold tracking-tight text-[#800020] sm:text-3xl"
                >
                  {currentPolicy.title}
                </h2>

                <p className="mt-1.5 text-xs leading-5 text-[#756763] sm:text-sm sm:leading-6">
                  {currentPolicy.subtitle}
                </p>
              </div>

              <button
                type="button"
                onClick={closePolicy}
                aria-label="Close policy"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#D8CFC5] text-[#800020] transition hover:bg-[#800020] hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            {/* Popup content */}
            <div className="overflow-y-auto px-4 py-5 sm:px-7 sm:py-6">
              <div className="space-y-5">
                {currentPolicy.sections.map((section) => (
                  <article key={section.heading}>
                    <h3 className="mb-1.5 text-sm font-bold text-[#800020] sm:text-base">
                      {section.heading}
                    </h3>

                    <p className="text-xs leading-6 text-[#5E514D] sm:text-sm sm:leading-7">
                      {section.text}
                    </p>
                  </article>
                ))}
              </div>

              <p className="mt-6 border-t border-[#D8CFC5] pt-3 text-[11px] leading-5 text-[#756763] sm:text-xs sm:leading-6">
                This policy content is a starting point for a demonstration
                storefront. Review and adapt it to your actual business
                practices and applicable laws before publishing.
              </p>
            </div>

            {/* Popup footer */}
            <div className="flex justify-end border-t border-[#D8CFC5] bg-white px-4 py-3 sm:px-7 sm:py-4">
              <button
                type="button"
                onClick={closePolicy}
                className="bg-[#800020] px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-[#600018] sm:px-6 sm:py-3 sm:text-sm"
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