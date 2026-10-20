# Khaate Peete Pashu — Next.js 16 starter

A responsive multi-page farm essentials storefront built with Next.js App Router, TypeScript and custom CSS.

## Run locally
1. Install Node.js 20.9+ (or the version required by your selected Next.js 16 release).
2. Extract this project and open the folder in a terminal.
3. Run `npm install`
4. Run `npm run dev`
5. Open http://localhost:3000

Production check: `npm run build`; then `npm start`.

## Routes
- `/` Home
- `/products` Search, category filter, sort
- `/products/[slug]` Product detail
- `/cart` Browser-persisted demo cart and quantity controls
- `/about` About
- `/contact` Contact form demo
- `/blog` Farm journal
- `/blog/[slug]` Article pages
- `/faq` FAQs
- `/shipping`, `/returns`, `/privacy` policy templates

## Included
- Responsive navigation and layout
- Reusable product cards and product data
- Search, category filtering, price sorting
- Cart with localStorage persistence
- Dynamic product/article routes and metadata
- Accessible labels, empty states, 404 page
- Starter SEO metadata and semantic HTML

## Important before production
This is a starter implementation inspired by the requested brand/category, not a verified pixel-perfect clone of the live website. Product names, prices, claims and illustrations are illustrative placeholders. Replace with actual business-approved data and assets.

Cart checkout and payment are intentionally **not live**. Before accepting orders, implement a trusted server-side database and inventory, authentication if required, order creation, payment gateway (e.g. Razorpay/Stripe depending on your market), webhook signature verification, shipping integration, email/SMS notifications, rate limiting, validation and logging. Do not trust client-side prices or totals.

Contact form currently confirms locally only; connect a server action/API and email/CRM provider. Add real support details, shipping/returns/privacy policies, analytics consent as appropriate, sitemap/robots, image assets and production environment variables. Have animal nutrition and veterinary claims reviewed by qualified professionals.

## Suggested next phase
- PostgreSQL + Prisma/Drizzle
- Admin dashboard for products/orders
- Customer accounts and order history
- Razorpay checkout with verified webhooks
- Product inventory and stock alerts
- Real WhatsApp support and transactional email
- Product image upload and optimized `next/image`
- Tests (Playwright) and deployment
