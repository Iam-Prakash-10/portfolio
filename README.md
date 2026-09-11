# Modern AI & Full-Stack Developer Portfolio

A sleek, modern, high-performance portfolio website built with **React**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lucide Icons** — inspired by leading AI engineer portfolios (like [Prince Chidera's Portfolio](https://prince-portfolio-omega.vercel.app/)).

---

## 🌟 Key Features

- **Modern Dark UI / Glassmorphism**: Clean dark aesthetic with ambient gradient glowing mesh, subtle grid overlay, and glassmorphic cards.
- **Hero Section**: Live "Available for Work" pulsing indicator, animated avatar ring, tech stack tags, and quick CTAs.
- **About Me & Pillars**: Story narrative, core engineering pillars (Applied AI/RAG, Full-Stack, High Performance), and checklist.
- **Interactive Tech Stack**: Categorized toolkit (AI & Machine Learning, Frontend, Backend & DB, DevOps & Cloud) with live filter tabs.
- **Selected Projects Showcase**: Category filtering (`All`, `AI / ML`, `Full Stack`, `Web Apps`), hover zoom screenshot previews, metrics badges, bullet highlights, Live Demo, and GitHub links.
- **Experience & Education Timeline**: Career and university milestones with date and location badges.
- **Interactive Contact Section**: Direct email copy button with one-click clipboard feedback, social channels, functional contact form with **confetti celebration**.
- **Fully Responsive**: Optimized for ultra-wide displays, laptops, tablets, and mobile smartphones.

---

## 🚀 Getting Started

### 1. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 2. Build for Production
```bash
npm run build
```
Creates an optimized static production build inside the `dist/` directory.

---

## 🛠️ How to Customize Your Info

All content (name, tagline, bio, social links, stats, skills, projects, and work experience) is cleanly structured in a single file:

📂 `src/data/portfolioData.ts`

Simply edit this file to update:
- `personalInfo`: Your name, role, bio, email, GitHub/LinkedIn links, and stats.
- `techStack`: Add or remove skills and proficiency levels.
- `projects`: Update project titles, descriptions, metrics, live URLs, GitHub repositories, and preview images.
- `experienceData`: Update your work history, freelance projects, and education.

---

## 🌐 Free 1-Click Deployment

### Deploy to Vercel
```bash
npx vercel
```
Or push this repository to GitHub and import it directly on [Vercel](https://vercel.com).

### Deploy to Netlify
```bash
npx netlify deploy --prod --dir=dist
```
