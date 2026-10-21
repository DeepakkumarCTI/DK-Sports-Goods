
import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import { StoreProvider } from './context/StoreContext';

import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Loading from './components/Loading';
import WhatsAppPopup from './components/WhatsAppPopup';

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
  const [isLoading, setIsLoading] = useState(true);

  // Initial website loading screen
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => window.clearTimeout(timer);
  }, []);

  // Hide header and footer on admin and authentication pages
  const hideLayout =
    location.pathname.startsWith('/admin') ||
    location.pathname === '/login' ||
    location.pathname === '/register';

  // Hide WhatsApp on every admin route
  const isAdminPage = location.pathname.startsWith('/admin');

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <ScrollToTop />

      {/* Website Header */}
      {!hideLayout && <Header />}

      {/* Application Routes */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/shop" element={<Shop />} />

        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />

        <Route path="/cart" element={<Cart />} />

        <Route path="/checkout" element={<Checkout />} />

        <Route path="/orders" element={<Orders />} />

        <Route
          path="/orders/:id"
          element={<OrderDetails />}
        />

        <Route
          path="/order-success/:id"
          element={<OrderSuccess />}
        />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        {/* Customer Login */}
        <Route path="/login" element={<Login />} />

        {/* Customer Registration */}
        <Route path="/register" element={<Register />} />

        {/* Admin Dashboard */}
        <Route path="/admin" element={<Admin />} />

        {/* Fallback Route */}
        <Route path="*" element={<Home />} />
      </Routes>

      {/* Website Footer */}
      {!hideLayout && <Footer />}

      {/* WhatsApp Popup - Bottom Right */}
      {!isAdminPage && <WhatsAppPopup />}
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
