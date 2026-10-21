import React from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowUpRight,
    ArrowRight,
    Heart,
    Target,
    Users,
    Trophy,
    Zap,
    ShieldCheck,
} from 'lucide-react';

import aboutImage from '../assets/about.jpg';

const values = [
    {
        number: '01',
        title: 'Made for movement.',
        description:
            'Practical sports essentials that keep up with your training, routines, and everyday adventures.',
        icon: Target,
        watermark: 'MOVE',
        featured: true,
    },
    {
        number: '02',
        title: 'Picked with care.',
        description:
            'Gear chosen with your game in mind, focusing on useful essentials and dependable quality.',
        icon: Heart,
        watermark: 'CARE',
    },
    {
        number: '03',
        title: 'Everyone belongs.',
        description:
            'From first-time players to passionate regulars, sport is for everyone willing to show up.',
        icon: Users,
        watermark: 'ALL IN',
    },
    {
        number: '04',
        title: 'Quality matters.',
        description:
            'We value useful products that make choosing your everyday sports essentials simpler.',
        icon: ShieldCheck,
        watermark: 'TRUST',
    },
];

export default function About() {
    return (
        <main className="w-full overflow-hidden bg-[#FFF8E7] text-[#302322]">

            {/* Hero Section */}
            <section className="mx-auto grid w-full max-w-[1600px] grid-cols-1 items-stretch gap-5 px-4 py-5 sm:px-6 sm:py-6 lg:grid-cols-2 lg:gap-6 lg:px-8 lg:py-7 xl:px-10">

                {/* Hero Content */}
                <div className="flex flex-col items-start justify-center py-4 sm:py-6 lg:py-5">
                    <span className="inline-flex items-center gap-2.5 text-[10px] font-extrabold tracking-[2px] text-[#800020]">
                        <span className="h-2 w-2 rounded-full bg-[#800020]" />
                        THE STORY BEHIND DK
                    </span>

                    <h1 className="mt-5 text-[clamp(38px,5.5vw,70px)] font-extrabold leading-[0.98] tracking-[-2px] sm:tracking-[-3px]">
                        Built for the
                        <br />
                        <i className="font-serif font-normal text-[#800020]">
                            love of the game.
                        </i>
                    </h1>

                    <p className="mt-4 max-w-[450px] text-sm leading-7 text-[#756763] sm:mt-5 sm:text-[15px]">
                        Every athlete starts somewhere. Every great moment begins
                        with showing up. We’re here to make your next move count
                        with sports gear made for the way you play.
                    </p>

                    <div className="mt-6 flex flex-wrap items-center gap-4">
                        <Link
                            to="/shop"
                            className="inline-flex items-center gap-3 bg-[#800020] px-4 py-3.5 text-xs font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#600018]"
                        >
                            Explore our gear <ArrowUpRight size={18} />
                        </Link>

                        <a
                            href="#our-values"
                            className="inline-flex items-center gap-2 text-[11px] font-bold transition hover:text-[#800020]"
                        >
                            Discover what drives us <ArrowRight size={16} />
                        </a>
                    </div>

                    <div className="mt-8 flex w-full max-w-[400px] items-center gap-3 border-t border-[#D8CFC5] pt-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#800020] text-base font-black tracking-tight text-white">
                            DK<span className="text-[#D8CFC5]">.</span>
                        </div>

                        <div>
                            <strong className="text-xs">For every kind of athlete.</strong>
                            <p className="mt-1 text-[11px] text-[#756763]">
                                Everyday practice. Extraordinary passion.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="group relative min-h-[320px] overflow-hidden bg-[#D8CFC5] sm:min-h-[400px] lg:min-h-[470px] xl:min-h-[500px]">
                    <img
                        src={aboutImage}
                        alt="Athletes training and enjoying sport"
                        onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src =
                                'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1400&q=85';
                        }}
                        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#2B1018]/80 via-[#2B1018]/10 to-transparent" />

                    <div className="absolute bottom-5 left-5 text-white sm:bottom-7 sm:left-7">
                        <span className="mb-3 block text-[9px] font-bold tracking-[2px]">
                            01 / OUR PHILOSOPHY
                        </span>

                        <h2 className="text-3xl font-black leading-[1.08] tracking-tight sm:text-4xl lg:text-5xl">
                            SHOW UP.
                            <br />
                            PLAY HARD.
                            <br />
                            <span className="text-[#F0D9D9]">REPEAT.</span>
                        </h2>
                    </div>

                    <div className="absolute right-3 top-3 flex items-center gap-2.5 bg-[#FFF8E7]/95 p-3 sm:right-5 sm:top-5 sm:p-3.5">
                        <Zap size={19} className="text-[#800020]" />
                        <div>
                            <strong className="block text-[9px] tracking-wide text-[#302322]">
                                MADE FOR YOUR GAME
                            </strong>
                            <small className="mt-1 block text-[10px] text-[#756763]">
                                Gear up. Get out there.
                            </small>
                        </div>
                    </div>
                </div>
            </section>

            {/* Brand Introduction */}
            <section className="mx-auto w-full max-w-[1450px] border-t border-[#D8CFC5] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14 xl:px-10">
                <div className="flex items-center justify-between gap-4 text-[9px] font-extrabold tracking-[1.8px] text-[#756763]">
                    <span>OUR POINT OF VIEW</span>
                    <span>02 — 04</span>
                </div>

                <div className="mt-6 grid grid-cols-1 items-center gap-5 md:grid-cols-[1.1fr_0.9fr] lg:mt-8 lg:gap-10">
                    <h2 className="text-4xl font-bold leading-[1.02] tracking-[-2px] sm:text-5xl lg:text-6xl">
                        It’s not just about
                        <br />
                        <i className="font-serif font-normal text-[#800020]">
                            winning.
                        </i>
                    </h2>

                    <div className="max-w-[475px]">
                        <p className="mb-3 text-[13px] leading-6 text-[#756763] sm:text-sm sm:leading-7">
                            It’s the early mornings, the extra practice, the friendships,
                            and the small victories that make sport special.
                        </p>

                        <p className="text-[13px] leading-6 text-[#756763] sm:text-sm sm:leading-7">
                            At DK Sports Goods, we believe the right gear helps you feel
                            ready for every session, every challenge, and every new goal.
                            Whatever your game, bring your passion.
                        </p>

                        <Link
                            to="/shop"
                            className="mt-4 inline-flex items-center gap-3 border-b border-[#800020]/40 pb-2 text-xs font-extrabold transition hover:text-[#800020]"
                        >
                            Find your next favourite <ArrowUpRight size={17} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section
                id="our-values"
                className="bg-[#D8CFC5]/50 px-4 py-9 sm:px-6 sm:py-11 lg:px-8 lg:py-14"
            >
                <div className="mx-auto max-w-[1450px]">
                    <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                        <div>
                            <span className="inline-flex items-center gap-2.5 text-[10px] font-extrabold tracking-[2px] text-[#800020]">
                                <span className="h-2 w-2 rounded-full bg-[#800020]" />
                                WHAT WE STAND FOR
                            </span>

                            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-1.5px] sm:text-4xl lg:text-5xl">
                                Good gear.
                                <br />
                                <i className="font-serif font-normal text-[#800020]">
                                    Great reasons to play.
                                </i>
                            </h2>
                        </div>

                        <p className="max-w-[330px] text-[13px] leading-6 text-[#756763]">
                            More than equipment, it’s about helping you enjoy the sport
                            you love, your way.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
                        {values.map((value) => {
                            const Icon = value.icon;

                            return (
                                <article
                                    key={value.number}
                                    className={`group relative flex min-h-[215px] flex-col justify-between overflow-hidden border border-[#800020]/10 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:min-h-[230px] ${value.featured ? 'bg-[#800020] text-white' : 'bg-[#FFF8E7] text-[#302322]'}`}
                                >
                                    <div className="relative z-10 flex items-center justify-between">
                                        <span
                                            className={`text-[10px] font-extrabold tracking-widest ${value.featured ? 'text-white/65' : 'text-[#756763]'}`}
                                        >
                                            {value.number}
                                        </span>

                                        <Icon
                                            size={23}
                                            strokeWidth={1.7}
                                            className={`transition-transform duration-300 group-hover:scale-110 ${value.featured ? 'text-[#F0D9D9]' : 'text-[#800020]'}`}
                                        />
                                    </div>

                                    <div className="relative z-10 mt-8">
                                        <h3 className="mb-2 text-lg font-bold tracking-tight">
                                            {value.title}
                                        </h3>

                                        <p
                                            className={`max-w-[260px] text-xs leading-5 ${value.featured ? 'text-white/75' : 'text-[#756763]'}`}
                                        >
                                            {value.description}
                                        </p>
                                    </div>

                                    <span
                                        className={`pointer-events-none absolute -bottom-2 right-2 text-5xl font-black tracking-[-3px] ${value.featured ? 'text-white/[0.07]' : 'text-[#800020]/[0.05]'}`}
                                    >
                                        {value.watermark}
                                    </span>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Brand Statement */}
            <section className="relative overflow-hidden bg-[#800020] px-4 py-12 text-white sm:px-6 sm:py-14 lg:px-8 lg:py-16">
                <div className="relative mx-auto max-w-[1200px]">
                    <div className="flex items-center gap-3 text-[10px] font-extrabold tracking-[2px] text-[#F0D9D9]">
                        <Trophy size={21} />
                        THE DK MINDSET
                    </div>

                    <h2 className="relative z-10 mt-6 text-5xl font-black leading-[0.94] tracking-[-2px] sm:text-6xl lg:text-7xl xl:text-8xl">
                        Your game.
                        <br />
                        Your goals.
                        <br />
                        <i className="font-serif font-normal text-[#F0D9D9]">
                            Your moment.
                        </i>
                    </h2>

                    <p className="relative z-10 mt-5 max-w-[440px] text-sm leading-6 text-white/75">
                        There’s no one way to be an athlete. Find your pace, trust your
                        progress, and enjoy every step of the game.
                    </p>

                    <span className="pointer-events-none absolute -bottom-12 right-0 select-none text-[150px] font-black leading-none tracking-[-15px] text-white/[0.06] sm:text-[230px] lg:text-[300px]">
                        DK.
                    </span>
                </div>
            </section>

            {/* Final Shop CTA */}
            <section className="mx-auto flex w-full max-w-[1450px] flex-col items-start justify-between gap-5 px-4 py-9 sm:px-6 sm:py-11 lg:flex-row lg:items-center lg:gap-8 lg:px-8 lg:py-14 xl:px-10">
                <div>
                    <span className="inline-flex items-center gap-2.5 text-[10px] font-extrabold tracking-[2px] text-[#800020]">
                        <span className="h-2 w-2 rounded-full bg-[#800020]" />
                        YOUR NEXT MOVE STARTS HERE
                    </span>

                    <h2 className="mt-4 text-4xl font-bold leading-[0.98] tracking-[-2px] sm:text-5xl lg:text-6xl">
                        Enough talk.
                        <br />
                        <i className="font-serif font-normal text-[#800020]">
                            Let’s play.
                        </i>
                    </h2>

                    <p className="mt-4 max-w-[420px] text-[13px] leading-6 text-[#756763]">
                        Find the gear that fits your game and get ready for whatever
                        comes next.
                    </p>
                </div>

                <Link
                    to="/shop"
                    className="inline-flex w-full items-center justify-between gap-8 bg-[#800020] px-5 py-4 text-xs font-extrabold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#600018] sm:w-auto sm:min-w-[210px]"
                >
                    Shop all gear <ArrowUpRight size={19} />
                </Link>
            </section>
        </main>
    );
}