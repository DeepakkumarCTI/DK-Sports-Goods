import React, { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal } from 'lucide-react';

import ProductCard from '../components/ProductCard';
import { useStore } from '../context/StoreContext';
import { categories } from '../data/products';

export default function Shop() {
    const { products } = useStore();
    const [params, setParams] = useSearchParams();
    const [query, setQuery] = useState('');
    const [sort, setSort] = useState('featured');
    const [category, setCategory] = useState(
        params.get('category') || 'All Gear'
    );

    const filtered = useMemo(() => {
        const list = products.filter(
            (p) =>
                (category === 'All Gear' || p.category === category) &&
                `${p.name} ${p.category} ${p.description}`
                    .toLowerCase()
                    .includes(query.toLowerCase())
        );

        if (sort === 'low') list.sort((a, b) => a.price - b.price);
        if (sort === 'high') list.sort((a, b) => b.price - a.price);
        if (sort === 'name') list.sort((a, b) => a.name.localeCompare(b.name));

        return list;
    }, [products, category, query, sort]);

    const clearFilters = () => {
        setQuery('');
        setCategory('All Gear');
        setSort('featured');
        setParams({});
    };

    return (
        <main className="min-h-screen w-full overflow-hidden bg-[#FFF8E7] text-[#302322]">

            {/* Page Intro */}
            <section className="mx-auto w-full max-w-[1800px] px-4 pb-7 pt-8 sm:px-6 sm:pt-10 lg:px-8 lg:pt-12 xl:px-10">
                <p className="text-[10px] font-extrabold tracking-[2px] text-[#800020]">
                    THE DK COLLECTION
                </p>

                <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-[-2px] sm:text-5xl lg:text-6xl">
                    Find your{' '}
                    <i className="font-serif font-normal text-[#800020]">
                        game changer.
                    </i>
                </h1>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#756763] sm:text-base">
                    Everyday essentials. Weekend favourites. Gear up for whatever
                    gets you moving.
                </p>
            </section>

            {/* Search and Sort */}
            <section className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-10">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    <div className="flex min-h-12 flex-1 items-center gap-3 border border-[#D8CFC5] bg-white px-4 transition focus-within:border-[#800020]">
                        <Search size={18} className="shrink-0 text-[#800020]" />

                        <input
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search gear, category..."
                            aria-label="Search products"
                            className="w-full bg-transparent py-3 text-sm text-[#302322] outline-none placeholder:text-[#958783]"
                        />
                    </div>

                    <label className="flex min-h-12 items-center gap-3 border border-[#D8CFC5] bg-white px-4 sm:min-w-[230px]">
                        <SlidersHorizontal
                            size={17}
                            className="shrink-0 text-[#800020]"
                        />

                        <select
                            value={sort}
                            onChange={(e) => setSort(e.target.value)}
                            aria-label="Sort products"
                            className="w-full cursor-pointer bg-transparent py-3 text-sm text-[#302322] outline-none"
                        >
                            <option value="featured">Featured</option>
                            <option value="low">Price: low to high</option>
                            <option value="high">Price: high to low</option>
                            <option value="name">Name: A to Z</option>
                        </select>
                    </label>
                </div>
            </section>

            {/* Category Filters */}
            <section className="mx-auto w-full max-w-[1800px] px-4 pt-5 sm:px-6 lg:px-8 xl:px-10">
                <div className="flex gap-2 overflow-x-auto pb-3">
                    {categories.map((c) => (
                        <button
                            key={c}
                            type="button"
                            onClick={() => {
                                setCategory(c);
                                setParams(c === 'All Gear' ? {} : { category: c });
                            }}
                            className={`shrink-0 border px-4 py-2.5 text-xs font-bold transition duration-200 ${category === c
                                    ? 'border-[#800020] bg-[#800020] text-white'
                                    : 'border-[#D8CFC5] bg-white text-[#302322] hover:border-[#800020] hover:text-[#800020]'
                                }`}
                        >
                            {c}
                        </button>
                    ))}
                </div>
            </section>

            {/* Product Results */}
            <section className="mx-auto w-full max-w-[1800px] px-4 pb-16 pt-5 sm:px-6 sm:pb-20 lg:px-8 xl:px-10">
                <div className="mb-5 flex items-center justify-between gap-4 border-b border-[#D8CFC5] pb-4">
                    <span className="text-sm font-bold text-[#302322]">
                        {filtered.length}{' '}
                        {filtered.length === 1 ? 'product' : 'products'}
                    </span>

                    <span className="text-right text-[9px] font-extrabold tracking-[1.5px] text-[#756763] sm:text-[10px]">
                        CURATED FOR YOUR NEXT SESSION
                    </span>
                </div>

                {filtered.length > 0 ? (
                    <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        {filtered.map((p) => (
                            <ProductCard key={p.id} product={p} />
                        ))}
                    </div>
                ) : (
                    <div className="flex min-h-[300px] flex-col items-center justify-center px-4 text-center">
                        <h3 className="text-xl font-bold sm:text-2xl">
                            No gear found just yet.
                        </h3>

                        <p className="mt-2 text-sm text-[#756763]">
                            Try another search or category.
                        </p>

                        <button
                            type="button"
                            className="mt-6 bg-[#800020] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#600018]"
                            onClick={clearFilters}
                        >
                            Clear filters
                        </button>
                    </div>
                )}
            </section>
        </main>
    );
}