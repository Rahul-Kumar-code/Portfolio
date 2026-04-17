# Rahul Kumar — Futuristic Portfolio

Ultra-modern, Web3-inspired portfolio for Rahul Kumar, built with React, Tailwind CSS, and Framer Motion. The layout pairs glassmorphism, gradient atmospherics, and rich microinteractions to showcase his projects, education, experience, and contact touchpoints.

## ✨ Highlights

- Sticky, glassmorphic header with smooth in-page navigation and theme toggle.
- Full-screen hero with animated typewriter intro and gradient CTA buttons.
- Filterable project grid with motion-powered transitions and hover halos.
- Narrative about section featuring floating profile card, skill badges, and animated progress meters.
- Contact hub including social icon interactions and a Tailwind-styled form.
- Responsive, mobile-first layouts and scroll-based reveal animations throughout.

## 🛠️ Tech Stack

- [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/) with custom tokens and component layers
- [Framer Motion](https://www.framer.com/motion/) for motion choreography
- [React Icons](https://react-icons.github.io/react-icons/) for vector social glyphs
- Express + Nodemailer email endpoint for the contact form

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Visit the printed local URL (default `http://localhost:5173`) to explore the live experience. Press `Ctrl+C` to stop the dev server.
The `dev` command now starts both the Vite frontend and the local email API on port `3001`.

## 📦 Available Scripts

- `npm run dev` – Start the Vite frontend and local email API together with HMR.
- `npm run server` – Start the email API by itself.
- `npm run build` – Generate an optimized production build.
- `npm run preview` – Preview the production build locally.
- `npm run lint` – Run ESLint across the project.

## 🗂️ Project Structure

```
src/
  components/   Reusable section components (Hero, Projects, About, Contact, Footer, Header)
  data/         Project and skills data objects
  main.jsx      Entry point
  index.css     Tailwind directives and custom utility layers
server/         Express API that delivers contact form submissions by email
```

## 📧 Contact Form Setup

Create a `.env` file with SMTP credentials before using the contact form in a real inbox workflow:

```bash
PORT=3001
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-user@example.com
SMTP_PASS=your-password
CONTACT_TO=your-inbox@example.com
CONTACT_FROM="Rahul Kumar Portfolio <your-user@example.com>"
```

The form posts to `/api/contact`, which the Vite dev server proxies to the Express mail API during development.

## 📄 License

All assets are placeholders—replace with your own imagery and links before publishing. Use freely for personal or commercial portfolio work.
