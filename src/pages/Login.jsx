
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  LockKeyhole,
  Mail,
} from 'lucide-react';

import { useStore } from '../context/StoreContext';
import logo from '../assets/logo.png';

export default function Login() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const { setUser } = useStore();
  const nav = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    setError('');

    const email = form.email.trim().toLowerCase();
    const password = form.password;

    // Admin login
    if (email === 'admin@gmail.com' && password === 'admin123') {
      setUser({
        name: 'Administrator',
        email,
        role: 'admin',
      });

      nav('/admin');
      return;
    }

    // Customer login
    let saved = [];

    try {
      saved = JSON.parse(
        localStorage.getItem('dk_customers') || '[]'
      );

      if (!Array.isArray(saved)) {
        saved = [];
      }
    } catch (err) {
      console.error('Error reading customer data:', err);
      setError('Unable to load customer accounts. Please try again.');
      return;
    }

    const customer = saved.find(
      (item) =>
        item.email?.toLowerCase() === email &&
        item.password === password
    );

    if (customer) {
      setUser({
        name: customer.name,
        email: customer.email,
        role: 'customer',
      });

      nav('/orders');
    } else {
      setError(
        'Account not found. Register as a customer or check your details.'
      );
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fffbed] px-4 py-6 sm:px-6 sm:py-10">

      {/* Background decorations */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#e8c8a9]/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[#8b0025]/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">

        {/* Top navigation */}
        <div className="mb-6 flex items-center justify-between sm:mb-10">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 rounded-lg border border-[#8b0025]/20 bg-white/80 px-4 py-3 text-sm font-bold text-[#8b0025] shadow-sm transition hover:bg-[#8b0025] hover:text-white"
          >
            <ArrowLeft
              size={17}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back to Website
          </Link>

          <span className="hidden text-xs font-extrabold uppercase tracking-[0.18em] text-[#8b0025] sm:block">
            Gear up. Play big.
          </span>
        </div>

        {/* Login card */}
        <div className="mx-auto grid max-w-5xl overflow-hidden rounded-2xl border border-[#e5d8c5] bg-white shadow-xl shadow-[#4b2415]/10 lg:grid-cols-2">

          {/* Brand panel */}
          <section className="relative hidden min-h-[620px] flex-col justify-between overflow-hidden bg-[#800020] p-10 text-[#fffbed] lg:flex xl:p-14">

            {/* Decorative shapes */}
            <div className="pointer-events-none absolute -right-20 top-24 h-72 w-72 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -right-8 top-36 h-48 w-48 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-[#5c0018] blur-2xl" />

            <div className="relative z-10">
              <div className="mb-12 inline-flex rounded-xl bg-[#fffbed] p-3">
                <img
                  src={logo}
                  alt="DK Sports Goods"
                  className="h-20 w-40 object-contain"
                />
              </div>

              <p className="mb-5 flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.24em] text-[#f3d9bc]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#f3d9bc]" />
                Your game. Your gear.
              </p>

              <h2 className="text-4xl font-black leading-tight tracking-tight xl:text-5xl">
                Made for the
                <span className="mt-1 block font-serif font-normal italic text-[#f3d9bc]">
                  love of the game.
                </span>
              </h2>

              <p className="mt-7 max-w-sm text-base leading-8 text-white/75">
                Find the essentials that help you show up, push harder,
                and enjoy every minute.
              </p>
            </div>

            <div className="relative z-10 border-t border-white/20 pt-6">
              <p className="text-sm font-bold">
                For every kind of athlete
              </p>
              <p className="mt-2 text-sm text-white/65">
                From first practice to game day.
              </p>
              <p className="mt-8 text-xs font-extrabold tracking-[0.25em] text-[#f3d9bc]">
                01 / PLAY YOUR WAY
              </p>
            </div>
          </section>

          {/* Login form */}
          <section className="flex items-center justify-center px-6 py-10 sm:px-10 sm:py-14 lg:px-12 xl:px-16">
            <div className="w-full max-w-md">

              {/* Mobile logo */}
              <Link
                to="/"
                className="mb-8 flex justify-center lg:hidden"
                aria-label="DK Sports Goods home"
              >
                <img
                  src={logo}
                  alt="DK Sports Goods"
                  className="h-20 w-44 object-contain"
                />
              </Link>

              {/* Heading */}
              <div className="mb-8">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#800020] text-[#fffbed] shadow-md shadow-[#800020]/20">
                  <LockKeyhole size={22} />
                </div>

                <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.24em] text-[#8b0025]">
                  Welcome back
                </p>

                <h1 className="text-3xl font-black leading-tight tracking-tight text-[#30221f] sm:text-4xl">
                  Good to see
                  <span className="mt-1 block font-serif font-normal italic text-[#8b0025]">
                    you again.
                  </span>
                </h1>

                <p className="mt-4 text-sm leading-7 text-[#796b65]">
                  Sign in to check your orders and get back to your game.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={submit} className="space-y-5">

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-bold text-[#30221f]"
                  >
                    Email address
                  </label>

                  <div className="group flex items-center rounded-xl border border-[#e5d8c5] bg-[#fffdf7] transition focus-within:border-[#8b0025] focus-within:ring-4 focus-within:ring-[#8b0025]/10">
                    <Mail
                      size={19}
                      className="ml-4 shrink-0 text-[#9b8880] transition group-focus-within:text-[#8b0025]"
                    />

                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          email: e.target.value,
                        })
                      }
                      placeholder="you@example.com"
                      autoComplete="email"
                      className="w-full bg-transparent px-3 py-4 text-sm text-[#30221f] outline-none placeholder:text-[#b5a69e]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-bold text-[#30221f]"
                  >
                    Password
                  </label>

                  <div className="group flex items-center rounded-xl border border-[#e5d8c5] bg-[#fffdf7] transition focus-within:border-[#8b0025] focus-within:ring-4 focus-within:ring-[#8b0025]/10">
                    <LockKeyhole
                      size={19}
                      className="ml-4 shrink-0 text-[#9b8880] transition group-focus-within:text-[#8b0025]"
                    />

                    <input
                      id="password"
                      type="password"
                      required
                      value={form.password}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          password: e.target.value,
                        })
                      }
                      placeholder="Enter your password"
                      autoComplete="current-password"
                      className="w-full bg-transparent px-3 py-4 text-sm text-[#30221f] outline-none placeholder:text-[#b5a69e]"
                    />
                  </div>
                </div>

                {error && (
                  <p
                    role="alert"
                    className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700"
                  >
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#800020] px-5 py-4 text-sm font-extrabold text-white shadow-lg shadow-[#800020]/15 transition duration-300 hover:bg-[#650019] focus:outline-none focus:ring-4 focus:ring-[#800020]/20"
                >
                  Sign in
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </form>

              {/* Registration */}
              <div className="mt-7 border-t border-[#eee4d7] pt-6 text-center">
                <p className="text-sm text-[#796b65]">
                  New around here?{' '}
                  <Link
                    to="/register"
                    className="font-extrabold text-[#8b0025] underline-offset-4 transition hover:underline"
                  >
                    Create an account
                  </Link>
                </p>
              </div>

              <p className="mt-8 text-center text-xs text-[#a5968e]">
                © {new Date().getFullYear()} DK Sports Goods. All rights reserved.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
