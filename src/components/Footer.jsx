import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

import logo from '../assets/logo.png';

// Social media icons
// Replace these image paths with your original icon images.
import instagramIcon from '../assets/insta.png';
import facebookIcon from '../assets/facebook.png';
import youtubeIcon from '../assets/youtube.png';
import whatsappIcon from '../assets/whatsapp.png';

export default function Footer() {
  const [activeModal, setActiveModal] = useState(null);

  // Close popup with Escape key
  useEffect(() => {
    if (!activeModal) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveModal(null);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeModal]);

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

  const currentPolicy = activeModal ? policies[activeModal] : null;

  const closePolicy = () => {
    setActiveModal(null);
  };

  return (
    <>
      <footer className="footer">
        <div className="container-shell grid gap-10 py-8 md:grid-cols-[1.5fr_1fr_1fr]">

          {/* Brand */}
          <div>
            <Link
              to="/"
              className="inline-flex items-center"
              aria-label="DK Sports Goods home"
            >
              <img
                src={logo}
                alt="DK Sports Goods"
                className="h-16 w-auto max-w-[220px] object-contain"
              />
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-white/65">
              Thoughtfully picked sports essentials for everyday athletes,
              weekend players and the next big win.
            </p>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="mb-4 text-xs font-semibold tracking-[0.18em] text-white/80">
                FOLLOW OUR JOURNEY
              </h4>

              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white transition duration-300 hover:-translate-y-1 hover:bg-[#fff8e7]"
                  >
                    <img
                      src={social.icon}
                      alt={social.name}
                      className="h-6 w-6 object-contain"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4>EXPLORE</h4>
            <Link to="/">Home</Link>
            <Link to="/shop">Shop all gear</Link>
            <Link to="/about">Our story</Link>
            <Link to="/orders">Track an order</Link>
            <Link to="/contact">Contact</Link>
          </div>

          {/* Contact and Legal */}
          <div>
            <h4>NEED A HAND?</h4>

            <p>Questions about your gear or order?</p>

            <a href="mailto:hello@dksportsgoods.example">
              hello@dksportsgoods.example
            </a>

            <div className="mt-6">
              <h4>LEGAL</h4>

              <button
                type="button"
                onClick={() => setActiveModal('terms')}
                className="block cursor-pointer py-1 text-left text-sm text-white/65 transition hover:text-white"
              >
                Terms & Conditions
              </button>

              <button
                type="button"
                onClick={() => setActiveModal('privacy')}
                className="block cursor-pointer py-1 text-left text-sm text-white/65 transition hover:text-white"
              >
                Privacy Policy
              </button>
            </div>

            <p className="mt-5 text-xs text-white/45">
              Demo storefront • Cash on Delivery
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} DK Sports Goods. Play your game.
          </p>
        </div>
      </footer>

      {/* Policy Popup */}
      {currentPolicy && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/65 p-4 backdrop-blur-sm"
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
            className="relative flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-[#fff8e7] shadow-2xl"
          >
            {/* Popup Header */}
            <div className="flex items-start justify-between gap-4 border-b border-[#d8cfc5] bg-white px-6 py-5 sm:px-8">
              <div>
                <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-[#800020]">
                  DK SPORTS GOODS
                </p>

                <h2
                  id="policy-title"
                  className="text-2xl font-bold text-[#800020] sm:text-3xl"
                >
                  {currentPolicy.title}
                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {currentPolicy.subtitle}
                </p>
              </div>

              <button
                type="button"
                onClick={closePolicy}
                aria-label="Close policy"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d8cfc5] text-[#800020] transition hover:bg-[#800020] hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* Popup Content */}
            <div className="overflow-y-auto px-6 py-6 sm:px-8">
              <div className="space-y-6">
                {currentPolicy.sections.map((section) => (
                  <article key={section.heading}>
                    <h3 className="mb-2 text-base font-semibold text-[#800020]">
                      {section.heading}
                    </h3>

                    <p className="text-sm leading-7 text-gray-700">
                      {section.text}
                    </p>
                  </article>
                ))}
              </div>

              <p className="mt-8 border-t border-[#d8cfc5] pt-4 text-xs leading-5 text-gray-500">
                This policy content is a starting point for a demonstration
                storefront. Review and adapt it to your actual business
                practices and applicable laws before publishing.
              </p>
            </div>

            {/* Popup Footer */}
            <div className="flex justify-end border-t border-[#d8cfc5] bg-white px-6 py-4 sm:px-8">
              <button
                type="button"
                onClick={closePolicy}
                className="rounded-lg bg-[#800020] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#600018]"
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