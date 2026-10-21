
import React, { useEffect, useState } from 'react';
import { MessageCircle, X, ArrowUpRight } from 'lucide-react';

export default function WhatsAppPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  // Replace with your actual WhatsApp number.
  const whatsappNumber = '919876543210';

  const message = encodeURIComponent(
    'Hello DK Sports Goods! I need help with your products or my order.'
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

useEffect(() => {
    const timer = window.setTimeout(() => {
        setShowWelcome(true);
    }, 2500);

    return () => window.clearTimeout(timer);
}, []);

return (
    <div className="fixed bottom-5 right-4 z-[9999] flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">

        {/* Welcome Popup */}
        {showWelcome && !isOpen && (
            <div className="relative w-[min(290px,calc(100vw-32px))] animate-[waAppear_0.3s_ease-out] overflow-hidden rounded-2xl border border-[#E8DCCB] bg-[#FFF8E7] shadow-[0_12px_45px_rgba(28,8,13,0.20)]">

                {/* Header */}
                <div className="flex items-center gap-3 bg-[#800020] px-4 py-3 text-white">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10">
                        <MessageCircle size={21} />
                    </div>

                    <div className="min-w-0 flex-1">
                        <h3 className="text-sm font-bold">
                            DK Sports Goods
                        </h3>
                        <p className="mt-0.5 text-[11px] text-[#F0D9D9]">
                            Customer support
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={() => setShowWelcome(false)}
                        aria-label="Close welcome popup"
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white transition hover:bg-white/15"
                    >
                        <X size={16} />
                    </button>
                </div>

                {/* Message */}
                <div className="p-4">
                    <div className="rounded-xl rounded-tl-sm border border-[#E8DCCB] bg-white p-3">
                        <p className="text-sm font-bold text-[#800020]">
                            Hi there!
                        </p>

                        <p className="mt-1 text-xs leading-5 text-[#756763]">
                            Need help finding sports gear or tracking your order?
                            We're here to help.
                        </p>
                    </div>

                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-[#800020] px-4 py-3 text-sm font-bold text-white transition duration-300 hover:bg-[#650019] active:scale-[0.98]"
                    >
                        <MessageCircle size={18} />
                        Chat with us
                        <ArrowUpRight size={15} />
                    </a>

                    <p className="mt-2 text-center text-[10px] text-[#8A7770]">
                        Opens WhatsApp to continue the conversation.
                    </p>
                </div>
            </div>
        )}

        {/* Floating Button */}
        <button
            type="button"
            onClick={() => {
                setIsOpen((previous) => !previous);
                setShowWelcome(false);
            }}
            aria-label={isOpen ? 'Close WhatsApp popup' : 'Open WhatsApp chat'}
            className="group relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#FFF8E7] bg-[#800020] text-white shadow-[0_5px_22px_rgba(128,0,32,0.30)] transition duration-300 hover:scale-105 hover:bg-[#650019] active:scale-95 sm:h-16 sm:w-16"
        >
            {isOpen ? (
                <X size={25} />
            ) : (
                <MessageCircle size={28} />
            )}

            {!isOpen && (
                <span className="absolute right-0 top-0 h-3.5 w-3.5 rounded-full border-2 border-[#FFF8E7] bg-[#D6A85F]" />
            )}

            <span className="pointer-events-none absolute right-[calc(100%+12px)] whitespace-nowrap rounded-lg bg-[#16070C] px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-lg transition group-hover:opacity-100">
                Chat with us
            </span>
        </button>

        {/* Expanded Chat Card */}
        {isOpen && (
            <div className="absolute bottom-[72px] right-0 w-[min(290px,calc(100vw-32px))] animate-[waAppear_0.25s_ease-out] rounded-2xl border border-[#E8DCCB] bg-[#FFF8E7] p-5 shadow-[0_12px_45px_rgba(28,8,13,0.20)] sm:bottom-20">
                <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close chat"
                    className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full text-[#800020] transition hover:bg-[#800020]/10"
                >
                    <X size={17} />
                </button>

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#800020] text-white shadow-sm">
                    <MessageCircle size={25} />
                </div>

                <p className="mt-3 text-[10px] font-extrabold tracking-[1.8px] text-[#9A7478]">
                    DK SPORTS GOODS
                </p>

                <h3 className="mt-1 text-base font-bold text-[#800020]">
                    How can we help?
                </h3>

                <p className="mt-1 text-xs leading-5 text-[#756763]">
                    Ask us about products, availability, or your order.
                </p>

                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-[#800020] px-4 py-3 text-sm font-bold text-white transition duration-300 hover:bg-[#650019] active:scale-[0.98]"
                >
                    <MessageCircle size={18} />
                    Start WhatsApp Chat
                    <ArrowUpRight size={15} />
                </a>
            </div>
        )}

        <style>{`
        @keyframes waAppear {
          from {
            opacity: 0;
            transform: translateY(12px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </div>
);
}
