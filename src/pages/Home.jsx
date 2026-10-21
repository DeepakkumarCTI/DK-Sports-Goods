import React from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowDownRight,
    ArrowRight,
    ArrowUpRight,
    ShieldCheck,
    Truck,
    RefreshCw,
} from 'lucide-react';

import ProductCard from '../components/ProductCard';
import { useStore } from '../context/StoreContext';
import { categories } from '../data/products';

import heroVideo from '../assets/videos/herosection.mp4';

export default function Home() {
    const { products } = useStore();

    return (
        <main className="w-full overflow-hidden bg-[#FFF8E7] text-[#302322]">

            {/* Hero Section */}
            <section className="mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-0 pt-0 pb-6 sm:pb-8 lg:grid-cols-2 lg:items-stretch lg:pt-0">

                {/* Left Hero - Background Video */}
                <div className="relative isolate min-h-[500px] overflow-hidden bg-[#FFF8E7] sm:min-h-[560px] lg:min-h-[590px]">
                    <video
                        className="absolute inset-0 z-0 h-full w-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        aria-hidden="true"
                    >
                        <source src={heroVideo} type="video/mp4" />
                    </video>

                    {/* Overlay */}
                    <div className="absolute inset-0 z-10 bg-[#FFF8E7]/15" />
                    <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#FFF8E7]/75 via-[#FFF8E7]/60 to-[#800020]/5" />

                    {/* Hero Content */}
                    <div className="relative z-20 mx-auto grid min-h-[500px] w-full items-center px-5 py-8 sm:min-h-[560px] sm:px-8 sm:py-10 lg:min-h-[590px] lg:px-10 lg:py-10 xl:px-14">
                        <div className="flex flex-col items-start justify-center">

                            <p className="inline-flex items-center gap-2.5 text-[10px] font-extrabold tracking-[2px] text-[#800020]">
                                <span className="h-2 w-2 rounded-full bg-[#800020]" />
                                YOUR GAME. YOUR GEAR.
                            </p>

                            <h1 className="mt-6 text-[clamp(40px,5.5vw,76px)] font-extrabold leading-[0.98] tracking-[-2px] sm:tracking-[-3px]">
                                Made for the
                                <br />
                                <i className="font-serif font-normal text-[#800020]">
                                    love of the game.
                                </i>
                            </h1>

                            <p className="mt-5 max-w-[450px] text-sm leading-7 text-[#756763] sm:mt-6 sm:text-[15px] sm:leading-8">
                                Good gear changes how you play. Find the essentials that help you
                                show up, push harder and enjoy every minute.
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                <Link
                                    to="/shop"
                                    className="inline-flex items-center gap-4 bg-[#800020] px-5 py-4 text-xs font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#600018]"
                                >
                                    Shop the collection <ArrowUpRight size={18} />
                                </Link>

                                <Link
                                    to="/about"
                                    className="inline-flex items-center justify-center border border-[#D8CFC5] bg-white/70 px-5 py-4 text-xs font-bold text-[#302322] transition duration-300 hover:border-[#800020] hover:text-[#800020]"
                                >
                                    Our story
                                </Link>
                            </div>

                            <div className="mt-9 flex items-center gap-4 border-t border-[#D8CFC5] pt-5 sm:mt-10 sm:pt-6">
                                <div className="flex items-center -space-x-2">
                                    <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#FFF8E7] bg-[#800020] text-[10px] font-extrabold text-white">
                                        DK
                                    </span>
                                    <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#FFF8E7] bg-[#D8CFC5] text-lg font-bold text-[#800020]">
                                        +
                                    </span>
                                    <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#FFF8E7] bg-white text-lg text-[#800020]">
                                        ★
                                    </span>
                                </div>

                                <p>
                                    <b className="block text-xs">For every kind of athlete</b>
                                    <small className="mt-1 block text-[11px] text-[#756763]">
                                        From first practice to game day
                                    </small>
                                </p>
                            </div>

                            <span className="mt-6 text-[9px] font-extrabold tracking-[2px] text-[#756763]">
                                01 / PLAY YOUR WAY
                            </span>
                        </div>
                    </div>
                </div>

                {/* Right Hero - Image */}
                <div className="group relative min-h-[400px] overflow-hidden bg-[#D8CFC5] sm:min-h-[500px] lg:min-h-[590px]">
                    <img
                        src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1400&q=85"
                        alt="Athlete training outdoors"
                        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#2B1018]/80 via-[#2B1018]/10 to-transparent" />

                    <div className="absolute right-5 top-5 flex h-32 w-32 flex-col items-center justify-center rounded-full border border-white/50 bg-[#800020]/95 text-center text-white sm:right-8 sm:top-8 sm:h-36 sm:w-36">
                        <span className="text-[10px] font-bold tracking-[3px]">PLAY</span>
                        <b className="mt-2 text-lg leading-tight">
                            WITH
                            <br />
                            PURPOSE.
                        </b>
                        <small className="mt-2 text-[8px] tracking-wider text-white/75">
                            DK / EST. 2024
                        </small>
                    </div>

                    <div className="absolute bottom-7 left-6 right-6 flex items-end justify-between gap-4 text-white sm:bottom-9 sm:left-9 sm:right-8">
                        <div>
                            <span className="mb-4 block text-[9px] font-bold tracking-[2px] text-white/75">
                                01 / THE EVERYDAY ATHLETE
                            </span>
                            <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-5xl">
                                STARTS RIGHT
                                <br />
                                <span className="text-[#F0D9D9]">HERE.</span>
                            </h2>
                        </div>
                        <ArrowDownRight size={27} className="mb-1 shrink-0 text-[#F0D9D9]" />
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="mx-auto grid w-[calc(100%-32px)] max-w-[1450px] grid-cols-1 border-y border-[#D8CFC5] sm:w-[calc(100%-48px)] sm:grid-cols-2 lg:grid-cols-3">
                <div className="flex items-center gap-4 border-b border-[#D8CFC5] px-3 py-6 sm:border-r sm:px-5 lg:border-b-0">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-white text-[#800020]">
                        <Truck size={23} strokeWidth={1.7} />
                    </div>
                    <span>
                        <b className="block text-xs font-bold">Delivery made easy</b>
                        <small className="mt-1 block text-[11px] text-[#756763]">
                            Convenient doorstep delivery
                        </small>
                    </span>
                </div>

                <div className="flex items-center gap-4 border-b border-[#D8CFC5] px-3 py-6 sm:px-5 lg:border-b-0 lg:border-r">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-white text-[#800020]">
                        <ShieldCheck size={23} strokeWidth={1.7} />
                    </div>
                    <span>
                        <b className="block text-xs font-bold">Quality you can trust</b>
                        <small className="mt-1 block text-[11px] text-[#756763]">
                            Gear picked with care
                        </small>
                    </span>
                </div>

                <div className="flex items-center gap-4 px-3 py-6 sm:col-span-2 sm:px-5 lg:col-span-1">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-white text-[#800020]">
                        <RefreshCw size={23} strokeWidth={1.7} />
                    </div>
                    <span>
                        <b className="block text-xs font-bold">Easy order support</b>
                        <small className="mt-1 block text-[11px] text-[#756763]">
                            We’re here to help
                        </small>
                    </span>
                </div>
            </section>

            {/* Categories Section */}
            <section className="mx-auto w-[calc(100%-32px)] max-w-[1450px] py-8 sm:w-[calc(100%-48px)] sm:py-16 lg:py-10">
                <div className="mb-7 flex flex-col justify-between gap-4 sm:mb-9 sm:flex-row sm:items-end">
                    <div>
                        <p className="text-[10px] font-extrabold tracking-[2px] text-[#800020]">
                            FIND YOUR PLAY
                        </p>

                        <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-1.5px] sm:text-4xl lg:text-6xl">
                            Gear for every{' '}
                            <i className="font-serif font-normal text-[#800020]">
                                kind of game.
                            </i>
                        </h2>
                    </div>

                    <Link
                        className="inline-flex items-center gap-2 self-start text-xs font-bold transition hover:text-[#800020] sm:self-auto"
                        to="/shop"
                    >
                        Explore all categories <ArrowRight size={17} />
                    </Link>
                </div>

                {/*
      Background images are matched to category names.
      Replace the image URLs with your own local assets if preferred.
    */}
                {(() => {
                    const categoryImages = {
                        cricket:
                            'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=900&q=85',
                        football:
                            'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=900&q=85',
                        badminton:
                            'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=900&q=85',
                        tennis:
                            'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=900&q=85',
                        basketball:
                            'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=900&q=85',
                        fitness:
                            'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=85',
                        volleyball:
                            'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=900&q=85',
                        swimming:
                            'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=900&q=85',
                        'table tennis':
                            'https://images.unsplash.com/photo-1611251135345-18c56206b863?auto=format&fit=crop&w=900&q=85',
                    };

                    const getCategoryImage = (category) => {
                        const normalizedCategory = category.toLowerCase().trim();

                        return (
                            categoryImages[normalizedCategory] ||
                            'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=85'
                        );
                    };

                    return (
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
                            {categories.slice(1).map((cat, i) => (
                                <Link
                                    to={`/shop?category=${encodeURIComponent(cat)}`}
                                    key={cat}
                                    className="group relative flex min-h-[220px] flex-col justify-between overflow-hidden border border-[#D8CFC5] bg-[#FFF8E7] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#800020] hover:shadow-xl sm:min-h-[260px] sm:p-7 lg:min-h-[290px]"
                                    style={{
                                        backgroundImage: `url("${getCategoryImage(cat)}")`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                >
                                    {/* Dark overlay for text readability */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10 transition duration-300 group-hover:from-[#800020]/90 group-hover:via-[#800020]/45" />

                                    {/* Category number */}
                                    <span className="relative z-10 flex h-9 w-9 items-center justify-center border border-white/60 bg-black/20 text-[10px] font-extrabold text-white backdrop-blur-sm transition group-hover:border-white group-hover:bg-white group-hover:text-[#800020]">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>

                                    {/* Category title */}
                                    <div className="relative z-10 mt-12">
                                        <h3 className="text-2xl font-bold tracking-tight text-white transition sm:text-3xl">
                                            {cat}
                                        </h3>

                                        <p className="mt-2 inline-flex items-center gap-2 text-[11px] font-bold text-white/85 transition group-hover:text-white">
                                            Explore the collection
                                            <ArrowUpRight
                                                size={15}
                                                className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                            />
                                        </p>
                                    </div>

                                    {/* Decorative brand text */}
                                    <span className="pointer-events-none absolute -bottom-7 -right-1 select-none text-8xl font-black tracking-[-5px] text-white/[0.12] transition group-hover:text-white/[0.2]">
                                        DK
                                    </span>
                                </Link>
                            ))}
                        </div>
                    );
                })()}
            </section>

            {/* Featured Products */}
            <section className="bg-[#D8CFC5]/40">
                <div className="mx-auto w-[calc(100%-32px)] max-w-[1450px] py-10 sm:w-[calc(100%-48px)] sm:py-10 lg:py-10">
                    <div className="mb-8 flex flex-col justify-between gap-5 sm:mb-10 sm:flex-row sm:items-end">
                        <div>
                            <p className="text-[10px] font-extrabold tracking-[2px] text-[#800020]">
                                THE CROWD FAVOURITES
                            </p>
                            <h2 className="mt-5 text-4xl font-bold leading-tight tracking-[-2px] sm:text-5xl lg:text-6xl">
                                Good picks. <i className="font-serif font-normal text-[#800020]">Great play.</i>
                            </h2>
                            <p className="mt-4 text-sm leading-7 text-[#756763]">
                                The essentials players keep coming back for.
                            </p>
                        </div>

                        <Link
                            className="inline-flex items-center gap-2 self-start text-xs font-bold transition hover:text-[#800020] sm:self-auto"
                            to="/shop"
                        >
                            Shop all gear <ArrowRight size={17} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {products.slice(0, 4).map((p) => (
                            <ProductCard key={p.id} product={p} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Brand Statement */}
            <section className="relative mx-auto my-16 w-[calc(100%-32px)] max-w-[1450px] overflow-hidden bg-[#800020] px-6 py-10 text-white sm:my-20 sm:w-[calc(100%-48px)] sm:px-10 sm:py-10 lg:my-24 lg:px-10 lg:py-10">
                <p className="relative z-10 text-[10px] font-extrabold tracking-[2px] text-[#F0D9D9]">
                    OUR KIND OF SPORT
                </p>

                <h2 className="relative z-10 mt-7 text-4xl font-black leading-[1.05] tracking-[-2px] sm:text-5xl lg:text-7xl">
                    Less about the spotlight.
                    <br />
                    <i className="font-serif font-normal text-[#F0D9D9]">
                        More about showing up.
                    </i>
                </h2>

                <Link
                    to="/about"
                    className="relative z-10 mt-8 inline-flex items-center gap-3 bg-[#FFF8E7] px-5 py-4 text-xs font-extrabold text-[#800020] transition hover:-translate-y-1 hover:bg-white"
                >
                    A little about us <ArrowUpRight size={17} />
                </Link>

                <span className="pointer-events-none absolute -bottom-12 right-2 select-none text-[180px] font-black leading-none tracking-[-15px] text-white/[0.06] sm:right-8 sm:text-[260px] lg:text-[340px]">
                    DK
                </span>
            </section>

            {/* Shop Call to Action */}
            <section className="mx-auto flex w-[calc(100%-32px)] max-w-[1450px] flex-col items-start justify-between gap-8 border-t border-[#D8CFC5] py-10 sm:w-[calc(100%-48px)] sm:py-20 lg:flex-row lg:items-center lg:py-10">
                <div>
                    <p className="text-[10px] font-extrabold tracking-[2px] text-[#800020]">
                        STAY IN THE GAME
                    </p>
                    <h2 className="mt-5 text-4xl font-bold leading-tight tracking-[-2px] sm:text-5xl lg:text-6xl">
                        Fresh gear. <i className="font-serif font-normal text-[#800020]">Good energy.</i>
                    </h2>
                    <p className="mt-5 max-w-[450px] text-sm leading-7 text-[#756763]">
                        Follow along for new arrivals, useful picks and a little extra
                        motivation.
                    </p>
                </div>

                <Link
                    to="/shop"
                    className="inline-flex w-full items-center justify-between gap-8 bg-[#800020] px-6 py-5 text-xs font-extrabold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#600018] sm:w-auto sm:min-w-[240px]"
                >
                    Find your next favourite <ArrowRight size={17} />
                </Link>
            </section>
        </main>
    );
}
