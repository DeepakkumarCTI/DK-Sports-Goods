
import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import {
  Package,
  ShoppingCart,
  Users,
  Plus,
  Trash2,
  LogOut,
  LayoutDashboard,
  Search,
  Clock,
  Box,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
  Store,
  Menu,
  X,
  TrendingUp,
  CalendarDays,
  Mail,
  Phone,
  Eye,
} from 'lucide-react';

import { useStore } from '../context/StoreContext';
import logo from '../assets/logo.png';

const money = (value) =>
  `₹${ Number(value || 0).toLocaleString('en-IN') } `;

const MAROON = '#800020';
const CREAM = '#fffbed';

const tabs = [
  { key: 'overview', label: 'Overview', Icon: LayoutDashboard },
  { key: 'products', label: 'Products', Icon: Package },
  { key: 'orders', label: 'Orders', Icon: ShoppingCart },
  { key: 'customers', label: 'Customers', Icon: Users },
];

const titles = {
  overview: 'Overview',
  products: 'Product management',
  orders: 'Order management',
  customers: 'Customer directory',
};

export default function Admin() {
  const {
    user,
    setUser,
    products,
    setProducts,
    orders,
    setOrders,
  } = useStore();

  const nav = useNavigate();

  const [tab, setTab] = useState('overview');
  const [search, setSearch] = useState('');
  const [expandedOrders, setExpandedOrders] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [form, setForm] = useState({
    name: '',
    category: 'Cricket',
    price: '',
    oldPrice: '',
    stock: '10',
    image:
      'https://placehold.co/800x700/fff8e7/800020?text=DK+Sports+Product',
    description: 'Demo product description',
    tag: 'NEW',
  });

  if (user?.role !== 'admin') {
    return <Navigate to="/login" replace />;
  }

  let customers = [];

  try {
    const parsed = JSON.parse(
      localStorage.getItem('dk_customers') || '[]'
    );

    customers = Array.isArray(parsed) ? parsed : [];
  } catch {
    customers = [];
  }

  const revenue = orders.reduce(
    (sum, order) => sum + Number(order.total || 0),
    0
  );

  const filteredOrders = orders.filter((order) =>
    `${ order.id || '' } ${ order.customer?.name || '' } ${
    order.customer?.email || ''
} `
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const updateOrder = (id, status) => {
    setOrders((previous) =>
      previous.map((order) =>
        order.id === id ? { ...order, status } : order
      )
    );
  };

  const addProduct = (event) => {
    event.preventDefault();

    const newProduct = {
      ...form,
      id: `p${ Date.now() } `,
      price: Number(form.price),
      oldPrice: Number(form.oldPrice || form.price),
      stock: Number(form.stock),
      rating: 4.8,
    };

    setProducts((previous) => [newProduct, ...previous]);

    setForm((previous) => ({
      ...previous,
      name: '',
      price: '',
      oldPrice: '',
      stock: '10',
    }));

    setTab('products');
  };

  const deleteProduct = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts((previous) =>
        previous.filter((product) => product.id !== id)
      );
    }
  };

  const toggleOrder = (id) => {
    setExpandedOrders((previous) =>
      previous.includes(id)
        ? previous.filter((itemId) => itemId !== id)
        : [...previous, id]
    );
  };

  const changeTab = (key) => {
    setTab(key);
    setMobileMenuOpen(false);
  };

  const signOut = () => {
    setUser(null);
    nav('/');
  };

  const inputClass =
    'mt-1.5 w-full min-w-0 rounded-lg border border-[#e5d8ca] bg-white px-3 py-2.5 text-sm text-[#2d2020] outline-none transition placeholder:text-gray-400 focus:border-[#800020] focus:ring-2 focus:ring-[#800020]/10';

  const cardClass =
    'min-w-0 rounded-xl border border-[#eadfd3] bg-white p-3 shadow-sm sm:p-5';

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7f3ee] text-[#2d2020] lg:flex">

      {/* Mobile header */}
      <header className="sticky top-0 z-40 flex items-center justify-between border-b border-white/10 bg-[#28191b] px-4 py-3 text-white lg:hidden">
        <Link to="/" className="flex min-w-0 items-center gap-2.5">
          <img
            src={logo}
            alt="DK Sports Goods"
            className="h-10 w-10 shrink-0 rounded-md bg-white object-contain p-1"
          />

          <span className="min-w-0">
            <span className="block text-sm font-black tracking-wide">
              DK SPORTS
            </span>
            <span className="block text-[9px] font-bold tracking-[0.15em] text-[#e6b9c5]">
              ADMIN WORKSPACE
            </span>
          </span>
        </Link>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/15 transition hover:bg-white/10"
        >
          {mobileMenuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      {/* Desktop sidebar */}
      <aside className="hidden min-h-screen w-[245px] shrink-0 flex-col bg-[#28191b] px-4 py-6 text-white lg:sticky lg:top-0 lg:flex lg:h-screen">
        <Link
          to="/"
          className="mb-8 flex items-center gap-3 rounded-lg p-2"
        >
          <img
            src={logo}
            alt="DK Sports Goods"
            className="h-12 w-12 shrink-0 rounded-md bg-white object-contain p-1"
          />

          <span className="min-w-0">
            <b className="block text-sm tracking-wide">DK SPORTS</b>
            <small className="mt-1 block text-[9px] font-bold tracking-[0.15em] text-[#e6b9c5]">
              ADMIN WORKSPACE
            </small>
          </span>
        </Link>

        <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#c4a7a8]">
          Workspace
        </p>

        <nav className="space-y-1.5">
          {tabs.map(({ key, label, Icon }) => (
            <button
              key={key}
              type="button"
              onClick={() => changeTab(key)}
              className={`flex w - full items - center gap - 3 rounded - lg px - 3 py - 3 text - sm font - semibold transition ${
    tab === key
        ? 'bg-[#800020] text-white shadow-sm'
        : 'text-[#e9dfe0] hover:bg-white/10'
} `}
            >
              <Icon size={18} className="shrink-0" />
              <span>{label}</span>

              {key === 'orders' && orders.length > 0 && (
                <span className="ml-auto rounded-full bg-white/15 px-2 py-0.5 text-xs">
                  {orders.length}
                </span>
              )}
            </button>
          ))}
        </nav>

        <div className="mt-auto border-t border-white/10 pt-5">
          <p className="text-xs text-[#c4a7a8]">Signed in as</p>
          <p className="mt-1 text-sm font-bold">Administrator</p>

          <button
            type="button"
            onClick={signOut}
            className="mt-4 flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-[#f2dfe4] transition hover:bg-white/10"
          >
            <LogOut size={16} />
            Sign out
          </button>

          <Link
            to="/"
            className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg border border-white/20 px-3 py-2.5 text-sm font-bold transition hover:bg-white/10"
          >
            <ArrowLeft size={16} />
            Back to Website
          </Link>
        </div>
      </aside>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 lg:hidden">
          <div className="absolute right-0 top-0 flex h-full w-[min(290px,85vw)] flex-col bg-[#28191b] p-5 text-white shadow-2xl">
            <div className="mb-7 flex items-center justify-between">
              <span className="text-sm font-bold">Admin Menu</span>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
                className="rounded-lg p-2 hover:bg-white/10"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="space-y-2">
              {tabs.map(({ key, label, Icon }) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => changeTab(key)}
                  className={`flex w - full items - center gap - 3 rounded - lg px - 3 py - 3 text - sm font - semibold ${
    tab === key
        ? 'bg-[#800020]'
        : 'text-[#e9dfe0] hover:bg-white/10'
} `}
                >
                  <Icon size={19} />
                  {label}

                  {key === 'orders' && orders.length > 0 && (
                    <span className="ml-auto rounded-full bg-white/15 px-2 py-0.5 text-xs">
                      {orders.length}
                    </span>
                  )}
                </button>
              ))}
            </nav>

            <div className="mt-auto space-y-2 border-t border-white/10 pt-5">
              <p className="text-xs text-[#c4a7a8]">
                Signed in as Administrator
              </p>

              <button
                type="button"
                onClick={signOut}
                className="flex w-full items-center gap-2 rounded-lg px-3 py-3 text-sm hover:bg-white/10"
              >
                <LogOut size={17} />
                Sign out
              </button>

              <Link
                to="/"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#800020] px-3 py-3 text-sm font-bold"
              >
                <ArrowLeft size={17} />
                Back to Website
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Main dashboard */}
      <section className="min-w-0 flex-1">

        {/* Top navigation */}
        <header className="flex min-w-0 items-center justify-between gap-3 border-b border-[#e7dbcf] bg-[#f7f3ee] px-4 py-4 sm:px-6 lg:px-8">
          <div className="min-w-0">
            <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-[#800020] sm:text-[11px] sm:tracking-[0.2em]">
              DK SPORTS GOODS / ADMIN
            </p>

            <h1 className="mt-1 text-xl font-bold tracking-tight sm:text-2xl">
              {titles[tab]}
            </h1>
          </div>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <Link
              to="/"
              className="inline-flex min-h-9 items-center justify-center gap-1.5 rounded-lg border border-[#800020] px-2.5 py-2 text-[10px] font-bold text-[#800020] transition hover:bg-[#800020] hover:text-white sm:gap-2 sm:px-4 sm:text-xs"
            >
              <ArrowLeft size={15} />
              <span className="hidden min-[400px]:inline">
                Back to Website
              </span>
              <span className="min-[400px]:hidden">Website</span>
            </Link>

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#800020] text-sm font-bold text-white sm:h-10 sm:w-10">
              DK
            </div>
          </div>
        </header>

        <div className="mx-auto w-full min-w-0 max-w-[1600px] space-y-4 px-3 py-4 sm:space-y-5 sm:px-6 sm:py-6 lg:px-8 lg:py-7">

          {/* OVERVIEW */}
          {tab === 'overview' && (
            <>
              <section className="flex min-w-0 flex-col gap-4 rounded-xl bg-[#800020] p-4 text-white sm:flex-row sm:items-center sm:justify-between sm:p-6 lg:p-7">
                <div className="min-w-0">
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#f2d5dd] sm:text-[10px]">
                    Your store at a glance
                  </p>

                  <h2 className="mt-2 text-xl font-bold leading-tight tracking-tight sm:text-2xl lg:text-3xl">
                    Small steps.{' '}
                    <i className="font-normal text-[#f2c1ce]">
                      Big wins.
                    </i>
                  </h2>

                  <p className="mt-2 text-xs leading-5 text-white/80 sm:text-sm">
                    Manage products and customer orders.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => changeTab('products')}
                  className="inline-flex min-h-10 shrink-0 items-center justify-center gap-2 self-start rounded-lg bg-[#fffbed] px-4 py-2.5 text-xs font-bold text-[#800020] transition hover:bg-white sm:self-center sm:px-5 sm:text-sm"
                >
                  <Plus size={17} />
                  Add product
                </button>
              </section>

              {/* Statistics */}
              <section className="grid grid-cols-2 gap-2.5 sm:gap-4 xl:grid-cols-4">
                {[
                  {
                    label: 'Products',
                    value: products.length,
                    note: 'Listed products',
                    Icon: Package,
                  },
                  {
                    label: 'Total orders',
                    value: orders.length,
                    note: 'Customer orders',
                    Icon: ShoppingCart,
                  },
                  {
                    label: 'Customers',
                    value: customers.length,
                    note: 'Registered users',
                    Icon: Users,
                  },
                  {
                    label: 'Order value',
                    value: money(revenue),
                    note: 'Total order value',
                    Icon: Box,
                  },
                ].map(({ label, value, note, Icon }) => (
                  <article
                    key={label}
                    className="min-w-0 rounded-xl border border-[#eadfd3] bg-white p-3 shadow-sm sm:p-5"
                  >
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-[11px] font-medium text-[#786969] sm:text-sm">
                        {label}
                      </span>

                      <Icon
                        size={18}
                        className="shrink-0 text-[#800020] sm:h-5 sm:w-5"
                      />
                    </div>

                    <p className="mt-3 break-words text-xl font-bold tracking-tight text-[#28191b] sm:mt-4 sm:text-2xl lg:text-3xl">
                      {value}
                    </p>

                    <p className="mt-1 text-[9px] leading-4 text-[#897b75] sm:text-xs">
                      {note}
                    </p>
                  </article>
                ))}
              </section>

              {/* Recent orders */}
              <section className={cardClass}>
                <div className="mb-4 flex min-w-0 items-center justify-between gap-2">
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold sm:text-lg">
                      Recent orders
                    </h3>
                    <p className="mt-1 text-[10px] text-[#897b75] sm:text-xs">
                      Customers and purchased items
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => changeTab('orders')}
                    className="shrink-0 rounded-lg px-2 py-2 text-[10px] font-bold text-[#800020] hover:bg-[#800020]/5 sm:px-3 sm:text-xs"
                  >
                    View all →
                  </button>
                </div>

                <OrderList
                  orders={orders.slice(0, 5)}
                  updateOrder={updateOrder}
                  expandedOrders={expandedOrders}
                  toggleOrder={toggleOrder}
                />
              </section>

              {/* Product catalogue */}
              <section className={cardClass}>
                <div className="mb-4 flex min-w-0 items-center justify-between gap-2">
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold sm:text-lg">
                      Product catalogue
                    </h3>
                    <p className="mt-1 text-[10px] text-[#897b75] sm:text-xs">
                      Your listed sports gear
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => changeTab('products')}
                    className="shrink-0 rounded-lg px-2 py-2 text-[10px] font-bold text-[#800020] hover:bg-[#800020]/5 sm:px-3 sm:text-xs"
                  >
                    Manage →
                  </button>
                </div>

                {products.length ? (
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-4">
                    {products.slice(0, 4).map((product) => (
                      <div
                        key={product.id}
                        className="flex min-w-0 items-center gap-3 rounded-lg border border-[#eee4d9] p-2.5 sm:flex-col sm:items-stretch sm:p-3"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-14 w-14 shrink-0 rounded-lg bg-[#fffbed] object-contain sm:h-32 sm:w-full"
                        />

                        <div className="min-w-0 flex-1 sm:mt-1">
                          <p className="break-words text-xs font-bold sm:text-sm">
                            {product.name}
                          </p>
                          <p className="mt-1 text-[10px] text-[#897b75] sm:text-xs">
                            {product.category}
                          </p>
                          <p className="mt-1 text-xs font-bold text-[#800020] sm:text-sm">
                            {money(product.price)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <EmptyState
                    message="No products available."
                    action="Add your first product"
                    onAction={() => changeTab('products')}
                  />
                )}
              </section>
            </>
          )}

          {/* PRODUCTS */}
          {tab === 'products' && (
            <>
              <section className={cardClass}>
                <div className="mb-5">
                  <h3 className="text-base font-bold sm:text-lg">
                    Add a product
                  </h3>
                  <p className="mt-1 text-xs text-[#897b75]">
                    New products appear in your shop.
                  </p>
                </div>

                <form
                  onSubmit={addProduct}
                  className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3"
                >
                  <label className="block min-w-0 text-xs font-semibold">
                    Product name
                    <input
                      className={inputClass}
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="Match day football"
                    />
                  </label>

                  <label className="block min-w-0 text-xs font-semibold">
                    Category
                    <select
                      className={inputClass}
                      value={form.category}
                      onChange={(e) =>
                        setForm({ ...form, category: e.target.value })
                      }
                    >
                      {[
                        'Cricket',
                        'Football',
                        'Fitness',
                        'Badminton',
                        'Accessories',
                      ].map((category) => (
                        <option key={category}>{category}</option>
                      ))}
                    </select>
                  </label>

                  <label className="block min-w-0 text-xs font-semibold">
                    Price (₹)
                    <input
                      className={inputClass}
                      type="number"
                      min="1"
                      required
                      value={form.price}
                      onChange={(e) =>
                        setForm({ ...form, price: e.target.value })
                      }
                    />
                  </label>

                  <label className="block min-w-0 text-xs font-semibold">
                    Old price (₹)
                    <input
                      className={inputClass}
                      type="number"
                      min="1"
                      value={form.oldPrice}
                      onChange={(e) =>
                        setForm({ ...form, oldPrice: e.target.value })
                      }
                    />
                  </label>

                  <label className="block min-w-0 text-xs font-semibold">
                    Stock quantity
                    <input
                      className={inputClass}
                      type="number"
                      min="0"
                      value={form.stock}
                      onChange={(e) =>
                        setForm({ ...form, stock: e.target.value })
                      }
                    />
                  </label>

                  <label className="block min-w-0 text-xs font-semibold">
                    Product tag
                    <input
                      className={inputClass}
                      value={form.tag}
                      onChange={(e) =>
                        setForm({ ...form, tag: e.target.value })
                      }
                      placeholder="NEW"
                    />
                  </label>

                  <label className="block min-w-0 text-xs font-semibold sm:col-span-2 xl:col-span-3">
                    Image URL
                    <input
                      className={inputClass}
                      value={form.image}
                      onChange={(e) =>
                        setForm({ ...form, image: e.target.value })
                      }
                      placeholder="https://example.com/product.jpg"
                    />
                  </label>

                  <label className="block min-w-0 text-xs font-semibold sm:col-span-2 xl:col-span-3">
                    Description
                    <textarea
                      className={`${ inputClass } min - h - 24 resize - y`}
                      value={form.description}
                      onChange={(e) =>
                        setForm({ ...form, description: e.target.value })
                      }
                      rows={3}
                    />
                  </label>

                  <div className="sm:col-span-2 xl:col-span-3">
                    <button
                      type="submit"
                      className="inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-lg bg-[#800020] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#650019] sm:w-auto"
                    >
                      <Plus size={17} />
                      Add product
                    </button>
                  </div>
                </form>
              </section>

              <section className={cardClass}>
                <div className="mb-4">
                  <h3 className="text-base font-bold sm:text-lg">
                    All products ({products.length})
                  </h3>
                  <p className="mt-1 text-xs text-[#897b75]">
                    Review stock and remove products.
                  </p>
                </div>

                {products.length ? (
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
                    {products.map((product) => (
                      <article
                        key={product.id}
                        className="min-w-0 overflow-hidden rounded-xl border border-[#eadfd3] bg-[#fffdf9]"
                      >
                        <div className="flex items-center gap-3 p-3">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="h-16 w-16 shrink-0 rounded-lg bg-[#fffbed] object-contain sm:h-20 sm:w-20"
                          />

                          <div className="min-w-0 flex-1">
                            <p className="break-words text-xs font-bold sm:text-sm">
                              {product.name}
                            </p>
                            <p className="mt-1 text-[10px] text-[#897b75] sm:text-xs">
                              {product.category}
                            </p>
                            <p className="mt-1 text-sm font-bold text-[#800020]">
                              {money(product.price)}
                            </p>
                            <p className="mt-1 text-[10px] text-[#897b75] sm:text-xs">
                              Stock: {product.stock ?? '—'}
                            </p>
                          </div>
                        </div>

                        <div className="border-t border-[#eadfd3] p-2.5">
                          <button
                            type="button"
                            onClick={() => deleteProduct(product.id)}
                            className="inline-flex min-h-9 w-full items-center justify-center gap-2 rounded-lg border border-red-200 px-3 py-2 text-xs font-bold text-red-700 transition hover:bg-red-50"
                          >
                            <Trash2 size={15} />
                            Delete product
                          </button>
                        </div>
                      </article>
                    ))}
                  </div>
                ) : (
                  <EmptyState message="No products have been added yet." />
                )}
              </section>
            </>
          )}

          {/* ORDERS */}
          {tab === 'orders' && (
            <section className={cardClass}>
              <div className="mb-4 flex min-w-0 flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                  <h3 className="text-base font-bold sm:text-lg">
                    All orders ({orders.length})
                  </h3>
                  <p className="mt-1 text-xs text-[#897b75]">
                    View purchased items and update order status.
                  </p>
                </div>

                <label className="flex min-h-10 w-full min-w-0 items-center gap-2 rounded-lg border border-[#e5d8ca] bg-white px-3 sm:max-w-xs">
                  <Search
                    size={16}
                    className="shrink-0 text-[#897b75]"
                  />
                  <input
                    className="w-full min-w-0 border-0 bg-transparent py-2 text-xs outline-none"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search order or customer"
                    aria-label="Search orders"
                  />
                </label>
              </div>

              <OrderList
                orders={filteredOrders}
                updateOrder={updateOrder}
                expandedOrders={expandedOrders}
                toggleOrder={toggleOrder}
              />
            </section>
          )}

          {/* CUSTOMERS */}
          {tab === 'customers' && (
            <section className={cardClass}>
              <div className="mb-4">
                <h3 className="text-base font-bold sm:text-lg">
                  Registered customers ({customers.length})
                </h3>
                <p className="mt-1 text-xs text-[#897b75]">
                  Customer profiles saved in this browser.
                </p>
              </div>

              {customers.length ? (
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {customers.map((customer, index) => (
                    <article
                      key={customer.email || index}
                      className="min-w-0 rounded-xl border border-[#eadfd3] bg-[#fffdf9] p-3 sm:p-4"
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#800020]/10 text-sm font-bold text-[#800020]">
                          {customer.name?.charAt(0)?.toUpperCase() || 'C'}
                        </div>

                        <div className="min-w-0">
                          <p className="break-words text-sm font-bold">
                            {customer.name || 'Customer'}
                          </p>
                          <p className="mt-0.5 break-all text-[10px] text-[#897b75] sm:text-xs">
                            {customer.email}
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 space-y-2 border-t border-[#eadfd3] pt-3">
                        <p className="flex items-center gap-2 text-xs text-[#685b55]">
                          <Phone size={14} className="shrink-0 text-[#800020]" />
                          <span className="break-all">
                            {customer.phone || 'No phone number'}
                          </span>
                        </p>

                        <p className="flex items-center gap-2 text-xs text-[#685b55]">
                          <Mail size={14} className="shrink-0 text-[#800020]" />
                          <span className="break-all">
                            {customer.email || 'No email'}
                          </span>
                        </p>

                        <p className="flex items-center gap-2 text-xs text-[#685b55]">
                          <CalendarDays
                            size={14}
                            className="shrink-0 text-[#800020]"
                          />
                          Joined:{' '}
                          {customer.createdAt
                            ? new Date(customer.createdAt).toLocaleDateString(
                                'en-IN'
                              )
                            : '—'}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <EmptyState message="No registered customers yet." />
              )}
            </section>
          )}

          {/* Footer */}
          <footer className="flex flex-col items-center justify-between gap-2 border-t border-[#e7dbcf] py-4 text-center text-[10px] text-[#897b75] sm:flex-row sm:text-xs">
            <p>© {new Date().getFullYear()} DK Sports Goods</p>

            <Link
              to="/"
              className="inline-flex items-center gap-1.5 font-bold text-[#800020] hover:underline"
            >
              <Store size={14} />
              Back to Website
            </Link>
          </footer>
        </div>
      </section>
    </main>
  );
}

function OrderList({
  orders,
  updateOrder,
  expandedOrders,
  toggleOrder,
}) {
  if (!orders.length) {
    return (
      <EmptyState
        message="No orders found."
        description="Customer orders will appear here."
      />
    );
  }

  return (
    <div className="space-y-3">
      {orders.map((order) => {
        const items = Array.isArray(order.items) ? order.items : [];
        const expanded = expandedOrders.includes(order.id);
        const status = order.status || 'Confirmed';

        const statusColors = {
          confirmed: 'bg-blue-50 text-blue-700 border-blue-200',
          processing: 'bg-amber-50 text-amber-700 border-amber-200',
          shipped: 'bg-purple-50 text-purple-700 border-purple-200',
          delivered: 'bg-emerald-50 text-emerald-700 border-emerald-200',
          cancelled: 'bg-red-50 text-red-700 border-red-200',
        };

        const statusClass =
          statusColors[status.toLowerCase()] ||
          'bg-gray-50 text-gray-700 border-gray-200';

        return (
          <article
            key={order.id}
            className="min-w-0 overflow-hidden rounded-xl border border-[#eadfd3] bg-[#fffdf9]"
          >
            {/* Order summary */}
            <div className="grid min-w-0 grid-cols-2 gap-x-3 gap-y-4 p-3 sm:grid-cols-3 sm:gap-4 sm:p-4 xl:grid-cols-6">
              <div className="col-span-2 min-w-0 sm:col-span-1">
                <p className="text-[9px] font-bold tracking-wide text-[#897b75] sm:text-[10px]">
                  ORDER
                </p>

                <p className="mt-1 break-all text-xs font-bold sm:text-sm">
                  {order.id || '—'}
                </p>

                <p className="mt-1 text-[10px] text-[#897b75] sm:text-xs">
                  {items.length} item{items.length === 1 ? '' : 's'}
                </p>
              </div>

              <div className="min-w-0">
                <p className="text-[9px] font-bold tracking-wide text-[#897b75] sm:text-[10px]">
                  CUSTOMER
                </p>

                <p className="mt-1 break-words text-xs font-bold sm:text-sm">
                  {order.customer?.name || 'Guest'}
                </p>

                <p className="mt-1 break-all text-[10px] text-[#897b75] sm:text-xs">
                  {order.customer?.email || 'No email'}
                </p>
              </div>

              <div className="min-w-0">
                <p className="text-[9px] font-bold tracking-wide text-[#897b75] sm:text-[10px]">
                  DATE
                </p>

                <p className="mt-1 text-xs sm:text-sm">
                  {order.createdAt
                    ? new Date(order.createdAt).toLocaleDateString('en-IN')
                    : '—'}
                </p>
              </div>

              <div className="min-w-0">
                <p className="text-[9px] font-bold tracking-wide text-[#897b75] sm:text-[10px]">
                  TOTAL
                </p>

                <p className="mt-1 break-words text-sm font-bold text-[#800020]">
                  {money(order.total)}
                </p>
              </div>

              <div className="min-w-0">
                <p className="text-[9px] font-bold tracking-wide text-[#897b75] sm:text-[10px]">
                  STATUS
                </p>

                <span
                  className={`mt - 1 inline - flex max - w - full items - center rounded - full border px - 2 py - 1 text - [9px] font - bold sm: text - [10px] ${ statusClass } `}
                >
                  <span className="break-words">{status}</span>
                </span>
              </div>

              <div className="min-w-0">
                <label className="block text-[9px] font-bold tracking-wide text-[#897b75] sm:text-[10px]">
                  UPDATE STATUS
                  <select
                    className="mt-1.5 w-full min-w-0 rounded-lg border border-[#e5d8ca] bg-white px-2 py-2 text-[10px] outline-none focus:border-[#800020] sm:text-xs"
                    value={status}
                    onChange={(e) =>
                      updateOrder(order.id, e.target.value)
                    }
                  >
                    <option>Confirmed</option>
                    <option>Processing</option>
                    <option>Shipped</option>
                    <option>Delivered</option>
                    <option>Cancelled</option>
                  </select>
                </label>
              </div>

              <button
                type="button"
                onClick={() => toggleOrder(order.id)}
                aria-expanded={expanded}
                className="col-span-2 flex min-h-10 min-w-0 items-center justify-center gap-2 rounded-lg border border-[#800020]/20 bg-[#800020]/5 px-3 py-2.5 text-xs font-bold text-[#800020] transition hover:bg-[#800020]/10 sm:col-span-3 xl:col-span-6"
              >
                {expanded ? (
                  <>
                    <ChevronUp size={16} />
                    Hide ordered items
                  </>
                ) : (
                  <>
                    <Eye size={15} />
                    View ordered items ({items.length})
                    <ChevronDown size={15} />
                  </>
                )}
              </button>
            </div>

            {/* Purchased items */}
            {expanded && (
              <div className="border-t border-[#eadfd3] bg-[#fffbed] p-3 sm:p-4">
                <div className="mb-3 flex items-center justify-between gap-2">
                  <h4 className="text-xs font-bold sm:text-sm">
                    Ordered item details
                  </h4>

                  <span className="text-[10px] text-[#897b75] sm:text-xs">
                    {items.length} product{items.length === 1 ? '' : 's'}
                  </span>
                </div>

                {items.length > 0 ? (
                  <>
                    <div className="grid min-w-0 grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-3">
                      {items.map((item, index) => {
                        const quantity = Math.max(
                          0,
                          Number(item.quantity ?? item.qty ?? 1)
                        );

                        const price = Number(
                          item.price ?? item.salePrice ?? item.unitPrice ?? 0
                        );

                        const itemName =
                          item.name || item.title || 'Unnamed product';

                        const itemImage =
                          item.image ||
                          (Array.isArray(item.images) ? item.images[0] : '') ||
                          'https://placehold.co/120x120/fff8e7/800020?text=DK';

                        return (
                          <div
                            key={
                              item.id ||
                              item.productId ||
                              `${ order.id } -${ index } `
                            }
                            className="grid min-w-0 grid-cols-[60px_minmax(0,1fr)] gap-3 rounded-lg border border-[#eadfd3] bg-white p-3 sm:grid-cols-[72px_minmax(0,1fr)]"
                          >
                            <img
                              src={itemImage}
                              alt={itemName}
                              className="h-[60px] w-[60px] rounded-lg bg-[#fffbed] object-contain sm:h-[72px] sm:w-[72px]"
                              onError={(event) => {
                                event.currentTarget.onerror = null;
                                event.currentTarget.src =
                                  'https://placehold.co/120x120/fff8e7/800020?text=DK';
                              }}
                            />

                            <div className="min-w-0">
                              <p className="break-words text-xs font-bold sm:text-sm">
                                {itemName}
                              </p>

                              {item.category && (
                                <p className="mt-1 text-[10px] text-[#897b75] sm:text-xs">
                                  {item.category}
                                </p>
                              )}

                              <p className="mt-1.5 text-[10px] text-[#685b55] sm:text-xs">
                                Unit price: {money(price)}
                              </p>

                              <div className="mt-1.5 flex flex-wrap items-center justify-between gap-2">
                                <span className="rounded-md bg-[#f7f3ee] px-2 py-1 text-[10px] font-semibold sm:text-xs">
                                  Qty: {quantity}
                                </span>

                                <b className="text-xs text-[#800020] sm:text-sm">
                                  {money(price * quantity)}
                                </b>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-4 flex items-center justify-between gap-3 border-t border-[#eadfd3] pt-3">
                      <span className="text-xs font-semibold sm:text-sm">
                        Order total
                      </span>

                      <b className="text-base font-bold text-[#800020] sm:text-lg">
                        {money(order.total)}
                      </b>
                    </div>
                  </>
                ) : (
                  <div className="rounded-lg border border-dashed border-[#ddc9b8] bg-white p-4">
                    <p className="text-xs font-semibold text-[#800020]">
                      No item details saved
                    </p>

                    <p className="mt-1 text-[11px] leading-5 text-[#897b75] sm:text-xs">
                      This order contains no product list. Update the checkout
                      code to save each product's name, image, price and
                      quantity when the order is placed.
                    </p>
                  </div>
                )}
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}

function EmptyState({ message, description, action, onAction }) {
  return (
    <div className="flex min-w-0 flex-col items-center justify-center rounded-xl border border-dashed border-[#ddc9b8] bg-[#fffdf9] px-4 py-8 text-center sm:py-10">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#800020]/5 text-[#800020]">
        <Clock size={21} />
      </div>

      <p className="mt-3 text-xs font-bold sm:text-sm">{message}</p>

      {description && (
        <p className="mt-1 text-[10px] text-[#897b75] sm:text-xs">
          {description}
        </p>
      )}

      {action && onAction && (
        <button
          type="button"
          onClick={onAction}
          className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#800020] px-4 py-2.5 text-xs font-bold text-white transition hover:bg-[#650019]"
        >
          <Plus size={15} />
          {action}
        </button>
      )}
    </div>
  );
}
