import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import {
  ShoppingBag,
  Menu,
  X,
  Search,
  UserRound,
  ShieldCheck,
  LogOut,
  LayoutDashboard,
} from 'lucide-react';

import logo from '../assets/logo.png';
import { useStore } from '../context/StoreContext';

export default function Header() {
  const { cart, user, setUser } = useStore();

  const [open, setOpen] = useState(false);
  const nav = useNavigate();

  const count = cart.reduce((total, item) => total + item.qty, 0);

  const isAdmin = user?.role === 'admin';
  const isLoggedIn = Boolean(user);

  const links = [
    ['Home', '/'],
    ['Shop', '/shop'],
    ['Our Story', '/about'],
    ['Order Tracking', '/orders'],
    ['Contact', '/contact'],
  ];

  // Logout
  const handleLogout = () => {
    setUser(null);
    setOpen(false);
    nav('/');
  };

  // Account navigation
  const handleAccount = () => {
    setOpen(false);

    if (isAdmin) {
      nav('/admin');
    } else if (user) {
      nav('/orders');
    } else {
      nav('/login');
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-black/5 bg-cream/95 backdrop-blur-md">

      {/* Announcement Bar */}
      <div className="topline w-full">
        FREE DELIVERY ON ORDERS
        <span>•</span>
        BUILT FOR YOUR NEXT WIN
      </div>

      {/* Main Header */}
      <div className="mx-auto flex h-[76px] w-full items-center justify-between gap-3 px-3 sm:px-5 lg:px-8">

        {/* Logo */}
        <Link
          to="/"
          className="brand flex shrink-0 items-center gap-2 sm:gap-3"
          aria-label="DK Sports Goods Home"
        >
          <img
            src={logo}
            alt="DK Sports Goods Logo"
            className="h-12 w-auto object-contain sm:h-14"
          />

          <span>
            <b>DK SPORTS GOODS</b>
            <small>GEAR UP. PLAY BIG.</small>
          </span>
        </Link>

        {/* Desktop Navigation */}



        <nav className="hidden items-center gap-6 text-2xl font-semibold lg:flex xl:gap-8">
          {links.map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `nav-link whitespace-nowrap transition-colors duration-200 ${isActive ? 'active' : ''
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>




        {/* Header Actions */}
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">

          {/* Search */}
          <button
            type="button"
            aria-label="Search products"
            title="Search products"
            onClick={() => nav('/shop')}
            className="icon-button hidden sm:grid"
          >
            <Search size={19} />
          </button>

          {/* Account */}
          <button
            type="button"
            aria-label="Account"
            title={user?.name || 'My Account'}
            onClick={handleAccount}
            className="icon-button hidden sm:grid"
          >
            <UserRound size={19} />
          </button>

          {/* Admin Login */}
          {!isLoggedIn && (
            <button
              type="button"
              onClick={() => nav('/login?role=admin')}
              title="Admin Login"
              aria-label="Admin Login"
              className="hidden items-center justify-center rounded-lg border border-[#800020] p-2 text-[#800020] transition duration-300 hover:bg-[#800020] hover:text-white sm:inline-flex"
            >
              <ShieldCheck size={19} />
            </button>
          )}

          {/* Admin Dashboard */}
          {isAdmin && (
            <button
              type="button"
              onClick={() => nav('/admin')}
              title="Admin Dashboard"
              className="hidden items-center gap-2 rounded-lg bg-[#800020] px-3 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-[#600018] sm:inline-flex"
            >
              <LayoutDashboard size={18} />
              <span>Dashboard</span>
            </button>
          )}

          {/* Shopping Cart */}
          <button
            type="button"
            aria-label="Shopping cart"
            onClick={() => nav('/cart')}
            className="cart-button"
          >
            <ShoppingBag size={19} />
            <span>Bag</span>
            <em>{count}</em>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="icon-button md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      {/* Logged-in User Information */}
      {user && (
        <div className="w-full border-t border-black/5 bg-white">
          <div className="mx-auto flex w-full flex-wrap items-center justify-between gap-3 px-3 py-3 sm:px-5 lg:px-8">

            {/* User Details */}
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#800020]/10 text-[#800020]">
                {isAdmin ? (
                  <ShieldCheck size={21} />
                ) : (
                  <UserRound size={21} />
                )}
              </div>

              <div className="min-w-0">
                <p className="text-xs text-gray-500">
                  {isAdmin ? 'Administrator' : 'Welcome back'}
                </p>

                <p className="truncate text-sm font-semibold text-[#800020]">
                  {user.name || user.email}
                </p>
              </div>
            </div>

            {/* User Actions */}
            <div className="flex flex-wrap items-center gap-2">
              {!isAdmin && (
                <button
                  type="button"
                  onClick={() => nav('/orders')}
                  className="rounded-lg border border-[#d8cfc5] px-3 py-2 text-sm font-medium text-[#800020] transition hover:bg-[#fff8e7]"
                >
                  My Orders
                </button>
              )}

              <button
                type="button"
                onClick={handleLogout}
                className="inline-flex items-center gap-2 rounded-lg border border-[#d8cfc5] px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-[#fff8e7] hover:text-[#800020]"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Navigation */}
      {open && (
        <nav
          className="mobile-menu"
          aria-label="Mobile navigation"
        >
          {links.map(([label, path]) => (
            <Link
              key={path}
              onClick={() => setOpen(false)}
              to={path}
            >
              {label}
            </Link>
          ))}

          <Link
            onClick={() => setOpen(false)}
            to="/cart"
          >
            Shopping Bag ({count})
          </Link>

          {!isLoggedIn && (
            <>
              <Link
                onClick={() => setOpen(false)}
                to="/login"
              >
                Customer Login
              </Link>

              <Link
                onClick={() => setOpen(false)}
                to="/register"
              >
                Create Account
              </Link>

              <Link
                onClick={() => setOpen(false)}
                to="/login?role=admin"
                className="font-semibold text-[#800020]"
              >
                <ShieldCheck
                  size={17}
                  className="mr-2 inline"
                />
                Admin Login
              </Link>
            </>
          )}

          {user && (
            <>
              {/* Mobile User Details */}
              <div className="border-t border-black/10 px-4 py-3">
                <p className="text-xs text-gray-500">
                  Logged in as
                </p>

                <p className="font-semibold text-[#800020]">
                  {user.name || user.email}
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  {isAdmin ? 'Administrator' : 'Customer'}
                </p>
              </div>

              {isAdmin ? (
                <Link
                  onClick={() => setOpen(false)}
                  to="/admin"
                >
                  Admin Dashboard
                </Link>
              ) : (
                <Link
                  onClick={() => setOpen(false)}
                  to="/orders"
                >
                  My Orders
                </Link>
              )}

              <button
                type="button"
                onClick={handleLogout}
                className="w-full px-4 py-3 text-left font-medium text-[#800020]"
              >
                <LogOut
                  size={16}
                  className="mr-2 inline"
                />
                Logout
              </button>
            </>
          )}
        </nav>
      )}
    </header>
  );
}