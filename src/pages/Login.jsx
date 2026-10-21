import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
import { useStore } from '../context/StoreContext';

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
        email: email,
        role: 'admin',
      });

      nav('/admin');
      return;
    }

    // Customer login
    let saved = [];

    try {
      saved = JSON.parse(localStorage.getItem('dk_customers') || '[]');

      if (!Array.isArray(saved)) {
        saved = [];
      }
    } catch (error) {
      console.error('Error reading customer data:', error);
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
    <main className="container-shell page-wrap">
      <div className="auth-card">
        <div className="auth-mark">
          <ShieldCheck size={25} />
        </div>

        <p className="eyebrow">WELCOME BACK</p>

        <h1>
          Good to see <i>you.</i>
        </h1>

        <p className="auth-intro">
          Sign in to check your orders and get back to your game.
        </p>

        <form onSubmit={submit} className="auth-form">
          <label>
            Email address

            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => {
                setForm({
                  ...form,
                  email: e.target.value,
                });
              }}
              placeholder="you@example.com"
              autoComplete="email"
            />
          </label>

          <label>
            Password

            <input
              type="password"
              required
              value={form.password}
              onChange={(e) => {
                setForm({
                  ...form,
                  password: e.target.value,
                });
              }}
              placeholder="Enter your password"
              autoComplete="current-password"
            />
          </label>

          {error && (
            <p className="form-error" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="btn-primary w-full justify-center"
          >
            Sign in
          </button>
        </form>

        <p className="auth-switch">
          New around here? <Link to="/register">Create an account</Link>
        </p>

        <div className="admin-hint">
          <b>Demo admin access</b>
          <span>admin@gmail.com</span>
          <span>admin123</span>
        </div>
      </div>
    </main>
  );
}