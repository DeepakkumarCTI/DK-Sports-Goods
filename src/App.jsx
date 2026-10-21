import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import { StoreProvider } from './context/StoreContext';

import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Orders from './pages/Orders';
import OrderDetails from './pages/OrderDetails';
import OrderSuccess from './pages/OrderSuccess';
import About from './pages/About';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Admin from './pages/Admin';

function Layout() {
  const location = useLocation();

  // Hide Header and Footer on admin dashboard and authentication pages
  const hideLayout =
    location.pathname.startsWith('/admin') ||
    location.pathname === '/login' ||
    location.pathname === '/register';

  return (
    <>
      <ScrollToTop />

      {/* Header */}
      {!hideLayout && <Header />}

      {/* Application Routes */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/shop" element={<Shop />} />

        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/checkout" element={<Checkout />} />

        <Route path="/orders" element={<Orders />} />

        <Route path="/orders/:id" element={<OrderDetails />} />
        
        <Route path="/contact" element={<Contact />} />

        <Route
          path="/order-success/:id"
          element={<OrderSuccess />}
        />

        <Route path="/about" element={<About />} />

        {/* Customer and Admin Login */}
        <Route path="/login" element={<Login />} />

        {/* Customer Registration */}
        <Route path="/register" element={<Register />} />

        {/* Admin Dashboard */}
        <Route path="/admin" element={<Admin />} />

        {/* Fallback Route */}
        <Route path="*" element={<Home />} />
      </Routes>

      {/* Footer */}
      {!hideLayout && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <StoreProvider>
      <Layout />
    </StoreProvider>
  );
}