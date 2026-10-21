
import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    PackageCheck,
    ArrowUpRight,
    Clock3,
    ShoppingBag,
    Truck,
    ArrowRight,
    Search,
    CalendarDays,
    Package,
    ChevronRight,
    RotateCcw,
} from 'lucide-react';
import { useStore } from '../context/StoreContext';

export default function Orders() {
    const { orders, user } = useStore();
    const [activeFilter, setActiveFilter] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    const mine = useMemo(
        () => orders.filter(
            (order) => !user?.email || order.customer?.email === user.email
        ),
        [orders, user]
    );

    const deliveredCount = mine.filter(
        (order) => String(order.status || '').toLowerCase() === 'delivered'
    ).length;

    const activeCount = mine.filter((order) =>
        ['pending', 'confirmed', 'processing', 'shipped'].includes(
            String(order.status || '').toLowerCase()
        )
    ).length;

    const filters = [
        'All', 'Pending', 'Confirmed', 'Shipped', 'Delivered', 'Cancelled',
    ];

    const filteredOrders = mine.filter((order) => {
        const status = String(order.status || 'Pending').toLowerCase();
        const search = searchTerm.trim().toLowerCase();

        const matchesFilter =
            activeFilter === 'All' || status === activeFilter.toLowerCase();

        const matchesSearch =
            String(order.id || '').toLowerCase().includes(search) ||
            (order.items || []).some((item) =>
                String(item.name || '').toLowerCase().includes(search)
            );

        return matchesFilter && matchesSearch;
    });

    const formatDate = (date) => {
        if (!date) return 'Date unavailable';

        const parsedDate = new Date(date);
        if (Number.isNaN(parsedDate.getTime())) return 'Date unavailable';

        return parsedDate.toLocaleString('en-IN', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
        });
    };

    const getStatusStyle = (status) => {
        switch (String(status || 'Pending').toLowerCase()) {
            case 'delivered':
                return 'bg-emerald-50 text-emerald-700 ring-emerald-200';
            case 'shipped':
                return 'bg-blue-50 text-blue-700 ring-blue-200';
            case 'confirmed':
            case 'processing':
                return 'bg-indigo-50 text-indigo-700 ring-indigo-200';
            case 'cancelled':
                return 'bg-red-50 text-red-700 ring-red-200';
            default:
                return 'bg-amber-50 text-amber-700 ring-amber-200';
        }
    };

    const summaryCards = [
        {
            label: 'Total Orders',
            value: mine.length,
            description: 'All your purchases',
            icon: ShoppingBag,
            iconStyle: 'bg-[#800020]/10 text-[#800020]',
        },
        {
            label: 'In Progress',
            value: activeCount,
            description: 'Orders being processed',
            icon: Truck,
            iconStyle: 'bg-blue-50 text-blue-700',
        },
        {
            label: 'Delivered',
            value: deliveredCount,
            description: 'Orders received',
            icon: PackageCheck,
            iconStyle: 'bg-emerald-50 text-emerald-700',
        },
    ];

    return (
        <main className="min-h-screen w-full overflow-x-hidden bg-[#f7f7f9] pb-10 sm:pb-16">

            {/* Hero */}
            <section className="relative overflow-hidden bg-[#800020] text-white">
                <div className="pointer-events-none absolute -right-16 -top-24 h-56 w-56 rounded-full border border-white/10 sm:h-96 sm:w-96" />
                <div className="pointer-events-none absolute -right-4 -top-12 h-40 w-40 rounded-full border border-white/10 sm:h-72 sm:w-72" />

                <div className="relative w-full px-3 py-7 sm:px-5 sm:py-12 lg:px-6 lg:py-14">
                    <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center sm:gap-6">
                        <div className="max-w-2xl">
                            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/90 sm:mb-4 sm:text-xs">
                                <PackageCheck size={14} />
                                Your DK Account
                            </div>

                            <h1 className="text-2xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                                Your orders,
                                <span className="block font-medium text-[#f3d8b3]">
                                    your game plan.
                                </span>
                            </h1>

                            <p className="mt-3 max-w-xl text-xs leading-5 text-white/75 sm:mt-4 sm:text-base sm:leading-7">
                                Track your purchases, check delivery progress, and revisit
                                your favourite sports gear — all in one place.
                            </p>
                        </div>

                        <Link
                            to="/shop"
                            className="inline-flex w-fit shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-[#800020] shadow-lg transition hover:bg-[#fff4e6] sm:px-6 sm:py-3 sm:text-sm"
                        >
                            Continue Shopping
                            <ArrowRight size={16} />
                        </Link>
                    </div>

                    <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/15 pt-4 text-[11px] text-white/70 sm:mt-9 sm:gap-x-5 sm:pt-5 sm:text-sm">
                        <span className="inline-flex items-center gap-2">
                            <ShoppingBag size={14} />
                            {mine.length} {mine.length === 1 ? 'order' : 'orders'} placed
                        </span>
                        <span className="hidden h-4 w-px bg-white/20 sm:block" />
                        <span className="inline-flex items-center gap-2">
                            <Truck size={15} />
                            Track your order status
                        </span>
                    </div>
                </div>
            </section>

            {/* Main content */}
            <div className="w-full px-2 sm:px-4 lg:px-6">

                {/* Summary cards */}
                <section className="relative -mt-4 grid grid-cols-3 gap-2 sm:-mt-7 sm:gap-4">
                    {summaryCards.map((card) => {
                        const Icon = card.icon;

                        return (
                            <div
                                key={card.label}
                                className="min-w-0 rounded-xl border border-gray-100 bg-white p-2.5 shadow-sm sm:rounded-2xl sm:p-5 lg:p-6"
                            >
                                <div className="flex flex-col-reverse items-start justify-between gap-2 sm:flex-row sm:gap-3">
                                    <div className="min-w-0">
                                        <p className="text-[10px] font-medium leading-4 text-gray-500 sm:text-sm">
                                            {card.label}
                                        </p>
                                        <p className="mt-1.5 text-2xl font-bold tracking-tight text-gray-900 sm:mt-2 sm:text-3xl">
                                            {card.value}
                                        </p>
                                        <p className="mt-1 hidden text-xs text-gray-500 sm:block">
                                            {card.description}
                                        </p>
                                    </div>

                                    <div className={`flex h - 8 w - 8 shrink - 0 items - center justify - center rounded - lg sm: h - 11 sm: w - 11 sm: rounded - xl ${ card.iconStyle } `}>
                                        <Icon size={18} className="sm:hidden" />
                                        <Icon size={22} className="hidden sm:block" />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </section>

                {/* Heading and search */}
                <section className="mt-7 sm:mt-12">
                    <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end sm:gap-4">
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#800020] sm:text-xs sm:tracking-[0.2em]">
                                Order Management
                            </p>
                            <h2 className="mt-1.5 text-xl font-bold tracking-tight text-gray-900 sm:mt-2 sm:text-3xl">
                                Your order history
                            </h2>
                            <p className="mt-1.5 text-xs leading-5 text-gray-500 sm:mt-2 sm:text-sm sm:leading-6">
                                Find an order and check its latest status.
                            </p>
                        </div>

                        <div className="relative w-full sm:max-w-xs">
                            <Search
                                size={16}
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 sm:left-3.5 sm:h-[18px] sm:w-[18px]"
                            />
                            <input
                                type="search"
                                value={searchTerm}
                                onChange={(event) => setSearchTerm(event.target.value)}
                                placeholder="Search order or product..."
                                aria-label="Search orders or products"
                                className="w-full rounded-xl border border-gray-200 bg-white py-2.5 pl-9 pr-3 text-xs text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#800020] focus:ring-4 focus:ring-[#800020]/10 sm:py-3 sm:pl-10 sm:pr-4 sm:text-sm"
                            />
                        </div>
                    </div>

                    {/* Filter buttons */}
                    <div className="mt-4 overflow-x-auto pb-2 sm:mt-6">
                        <div className="flex min-w-max items-center gap-2">
                            {filters.map((filter) => {
                                const selected = activeFilter === filter;

                                return (
                                    <button
                                        key={filter}
                                        type="button"
                                        onClick={() => setActiveFilter(filter)}
                                        className={`shrink - 0 rounded - full px - 3 py - 2 text - xs font - semibold transition sm: px - 4 sm: py - 2.5 sm: text - sm p-3 ${
    selected
        ? 'bg-[#800020] text-white shadow-sm'
        : 'border border-gray-200 bg-white text-gray-600 hover:border-[#800020]/30 hover:text-[#800020]'
} `}
                                    >
                                        {filter}
                                        {filter === 'All' && (
                                            <span className="ml-1.5 opacity-75 sm:ml-2">
                                                {mine.length}
                                            </span>
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Order grid */}
                    {filteredOrders.length > 0 ? (
                        <div className="mt-3 grid grid-cols-1 items-stretch gap-4 sm:mt-5 sm:grid-cols-2 xl:grid-cols-3 xl:gap-5">
                            {filteredOrders.map((order) => {
                                const status = order.status || 'Pending';
                                const items = order.items || [];

                                return (
                                    <article
                                        key={order.id}
                                        className="flex min-w-0 flex-col overflow-hidden rounded-xl border border-gray-200/80 bg-white shadow-sm transition duration-300 hover:border-gray-300 hover:shadow-md sm:rounded-2xl"
                                    >
                                        {/* Order header */}
                                        <div className="border-b border-gray-100 px-3 py-4 sm:px-4 sm:py-5">
                                            <div className="flex flex-col items-start gap-3">
                                                <div className="flex w-full min-w-0 items-start gap-2.5">
                                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#800020]/10 text-[#800020] sm:h-10 sm:w-10 sm:rounded-xl">
                                                        <Package size={18} />
                                                    </div>

                                                    <div className="min-w-0 flex-1">
                                                        <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 sm:text-xs">
                                                            Order ID
                                                        </p>
                                                        <h3 className="mt-1 break-all text-sm font-bold text-gray-900 sm:text-base">
                                                            {order.id}
                                                        </h3>
                                                        <p className="mt-1.5 flex items-start gap-1.5 text-[11px] leading-4 text-gray-500 sm:text-xs">
                                                            <CalendarDays size={13} className="mt-0.5 shrink-0" />
                                                            <span>{formatDate(order.createdAt)}</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <span
                                                    className={`inline - flex w - fit max - w - full items - center gap - 1.5 rounded - full px - 2.5 py - 1.5 text - [10px] font - bold capitalize ring - 1 ring - inset sm: text - xs ${ getStatusStyle(status) } `}
                                                >
                                                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-current" />
                                                    {status}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Items */}
                                        <div className="flex-1 px-3 py-4 sm:px-4 sm:py-5">
                                            <div className="mb-3 flex items-center justify-between gap-2">
                                                <p className="text-xs font-semibold text-gray-800 sm:text-sm">
                                                    Items in this order
                                                </p>
                                                <span className="shrink-0 text-[10px] text-gray-500 sm:text-xs">
                                                    {items.length} {items.length === 1 ? 'item' : 'items'}
                                                </span>
                                            </div>

                                            <div className="space-y-3 sm:space-y-4">
                                                {items.map((item, index) => (
                                                    <div
                                                        key={item.id ?? `${ order.id } -${ index } `}
                                                        className="flex min-w-0 items-center gap-2.5"
                                                    >
                                                        <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-gray-100 bg-[#f8f8fa] p-1 sm:h-16 sm:w-16 sm:rounded-xl">
                                                            {item.image ? (
                                                                <img
                                                                    src={item.image}
                                                                    alt={item.name || 'Product'}
                                                                    loading="lazy"
                                                                    className="h-full w-full object-contain"
                                                                />
                                                            ) : (
                                                                <Package size={23} className="text-gray-300" />
                                                            )}
                                                        </div>

                                                        <div className="min-w-0 flex-1">
                                                            <p className="line-clamp-2 break-words text-xs font-semibold leading-5 text-gray-900 sm:text-sm">
                                                                {item.name || 'Product'}
                                                            </p>
                                                            <p className="mt-1 text-[11px] text-gray-500 sm:text-xs">
                                                                Quantity: {item.qty ?? 1}
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Footer */}
                                        <div className="mt-auto border-t border-gray-100 bg-gray-50/80 px-3 py-3.5 sm:px-4 sm:py-4">
                                            <div className="flex flex-col gap-3">
                                                <div className="flex items-center justify-between gap-2">
                                                    <span className="inline-flex min-w-0 items-center gap-1.5 text-[10px] font-medium text-gray-600 sm:text-xs">
                                                        <Clock3 size={14} className="shrink-0 text-gray-400" />
                                                        Cash on Delivery
                                                    </span>

                                                    <div className="shrink-0 text-right">
                                                        <p className="text-[10px] text-gray-500 sm:text-xs">
                                                            Order total
                                                        </p>
                                                        <p className="mt-0.5 text-lg font-bold text-[#800020] sm:text-xl">
                                                            ₹{(Number(order.total) || 0).toLocaleString('en-IN')}
                                                        </p>
                                                    </div>
                                                </div>

                                                <Link
                                                    to={`/ orders / ${ order.id } `}
                                                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#800020] px-3 py-2.5 text-xs font-semibold text-white transition hover:bg-[#600018] sm:px-4 sm:py-3 sm:text-sm"
                                                >
                                                    View Order Details
                                                    <ArrowUpRight size={15} />
                                                </Link>
                                            </div>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="mt-4 rounded-xl border border-gray-200 bg-white px-3 py-10 text-center sm:mt-5 sm:rounded-2xl sm:px-8 sm:py-16">
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-[#800020]/10 text-[#800020] sm:h-16 sm:w-16 sm:rounded-2xl">
                                {mine.length === 0 ? (
                                    <PackageCheck size={26} />
                                ) : (
                                    <Search size={25} />
                                )}
                            </div>

                            <h3 className="mt-4 text-lg font-bold text-gray-900 sm:mt-5 sm:text-2xl">
                                {mine.length === 0
                                    ? 'No orders just yet'
                                    : 'No matching orders found'}
                            </h3>

                            <p className="mx-auto mt-2 max-w-md text-xs leading-5 text-gray-500 sm:text-sm sm:leading-6">
                                {mine.length === 0
                                    ? 'Your next favourite sports essential is waiting for you. Explore our collection and place your first order.'
                                    : 'Try another search term or select a different status to find your orders.'}
                            </p>

                            {mine.length === 0 ? (
                                <Link
                                    to="/shop"
                                    className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-[#800020] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-[#600018] sm:mt-6 sm:px-6 sm:py-3 sm:text-sm"
                                >
                                    Explore the Collection
                                    <ArrowRight size={16} />
                                </Link>
                            ) : (
                                <button
                                    type="button"
                                    onClick={() => {
                                        setActiveFilter('All');
                                        setSearchTerm('');
                                    }}
                                    className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 py-2.5 text-xs font-semibold text-gray-700 transition hover:border-[#800020] hover:text-[#800020] sm:mt-6 sm:px-5 sm:py-3 sm:text-sm"
                                >
                                    <RotateCcw size={14} />
                                    Clear Filters
                                </button>
                            )}
                        </div>
                    )}
                </section>

                {/* Shopping CTA */}
                <section className="mt-6 flex flex-col gap-3 rounded-xl border border-[#eadfe2] bg-[#fff9f4] p-3 sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:rounded-2xl sm:p-6">
                    <div>
                        <p className="text-base font-bold text-gray-900 sm:text-lg">
                            Ready for your next win?
                        </p>
                        <p className="mt-1 text-xs leading-5 text-gray-600 sm:text-sm sm:leading-6">
                            Discover sports gear that keeps you moving.
                        </p>
                    </div>

                    <Link
                        to="/shop"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#800020]/20 bg-white px-4 py-2.5 text-xs font-bold text-[#800020] transition hover:bg-[#800020] hover:text-white sm:w-auto sm:px-5 sm:py-3 sm:text-sm"
                    >
                        Shop Sports Gear
                        <ChevronRight size={16} />
                    </Link>
                </section>
            </div>
        </main>
    );
}
