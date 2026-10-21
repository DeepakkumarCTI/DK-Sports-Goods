# DK Sports Goods E-Commerce Website

A responsive React + Vite + Tailwind CSS frontend demo using browser localStorage.

## Run locally
1. Extract the ZIP.
2. Open a terminal inside `dk-sports-goods`.
3. Run `npm install`
4. Run `npm run dev`
5. Open the local URL shown by Vite.

## Admin demo login
- Email: `admin@gmail.com`
- Password: `admin123`

## Included
- Home page and category tiles
- Product search, category filtering, and sorting
- Product details and shopping cart
- Checkout with cash on delivery (no online payment integration)
- Customer registration/login demo and order history/status
- Admin dashboard for product management, order status updates, and customer list
- Responsive mobile layout
- Vercel SPA rewrite configuration (`vercel.json`)

## Project structure
- `src/components/` shared header, footer, product card
- `src/pages/` each website page
- `src/context/StoreContext.jsx` localStorage-based app state
- `src/data/products.js` demo product data and image URLs
- `src/styles.css` Tailwind directives and custom responsive styling

## Important demo notes
- All app data is stored in the current browser's localStorage. It is not a real backend, and clearing browser storage removes demo data. Admin credentials are hard-coded for frontend demonstration only; do not use this setup for a production store.
- Demo product images use external Unsplash/placeholder URLs. Replace the URLs in `src/data/products.js` with your own images when ready.
- Product/customer/order data is not shared between different browsers or devices.
