# Md Jonaed Joshim — Portfolio

A modern, responsive, and interactive developer portfolio built with **Next.js, TypeScript, and Tailwind CSS**.

This website showcases my development journey, technical skills, projects, competitive programming activities, education, credentials, and contact information.

The design focuses on simplicity, accessibility, performance, and meaningful interactions.

### 🌐 Live Website

**[md-jonaed-joshim.vercel.app](https://md-jonaed-joshim.vercel.app/)**

---

## About

I'm **Md Jonaed Joshim**, a **Web Developer & Competitive Programmer** from Bangladesh.

This portfolio serves as a central place to explore my work, learn about my technical background, and connect with me.

For detailed information, visit the **[About Page](https://md-jonaed-joshim.vercel.app/about)**.

---

## Features

- Fully responsive layouts for mobile, tablet, and desktop
- Persistent dark and light themes with system preference support
- Circular reveal animation when switching themes
- Theme-aware professional portraits and branding
- Interactive constellation background in the Hero section
- Animated typing effect for professional roles
- Featured projects and dedicated project detail pages
- Project development stories
- Searchable and filterable project collection
- Categorized technical skills with visual icons
- Competitive programming profiles and learning focus areas
- Formal education and ongoing technical learning
- Searchable credentials gallery with certificate previews
- Resume viewing and downloading
- Contact options with email, phone, WhatsApp, and social links
- Responsive navigation with active link highlighting
- Scroll progress indicator and back-to-top button
- Smooth page transitions and scroll animations
- Custom 404 page
- Accessibility features, including reduced-motion support

---

## Tech Stack

| Category | Technologies |
|----------|-------------|
| Framework | Next.js (App Router) |
| Language | TypeScript |
| UI | React |
| Styling | Tailwind CSS v4 |
| Icons | Lucide React, Devicon |
| Theme Management | next-themes |
| Notifications | Sonner |
| Animations | CSS, Web Animations API, View Transitions API |
| Deployment | Vercel |
| Version Control | Git & GitHub |

Portfolio content is managed through local JSON and TypeScript files.

No database, custom backend, or external API is required.

---

## Project Structure

```text
public/
├── certificates/
├── icons/
├── images/
├── logo/
├── platform/
├── pss/
└── resume/

src/
├── app/
│   ├── about/
│   ├── credentials/
│   ├── problem-solving/
│   ├── projects/
│   │   └── [slug]/
│   │       └── story/
│   ├── globals.css
│   ├── icon.svg
│   ├── layout.tsx
│   ├── not-found.tsx
│   ├── page.tsx
│   └── template.tsx
│
├── components/
│   ├── about/
│   ├── contact/
│   ├── credentials/
│   ├── education/
│   ├── hero/
│   ├── layout/
│   ├── problem-solving/
│   ├── projects/
│   ├── providers/
│   ├── skills/
│   └── ui/
│
├── data/
│   ├── about.json
│   ├── certificates.json
│   ├── education.json
│   ├── problem-solving.json
│   ├── project-details.json
│   ├── project-stories.json
│   ├── projects.ts
│   ├── skills.json
│   └── skills.ts
│
└── lib/
    └── seo.ts
```

---

## Getting Started

### Prerequisites

- Node.js 20.9 or later
- npm
- Git

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/jonaedjoshim/Portfolio.git
```

**2. Navigate to the project directory**

```bash
cd Portfolio
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Commands

```bash
npm run dev
npm run lint
npm run build
npm run start
```

---

## Website Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage and featured sections |
| `/about` | Personal background and development journey |
| `/projects` | Searchable project collection |
| `/projects/[slug]` | Individual project details |
| `/projects/[slug]/story` | Project development stories |
| `/problem-solving` | Competitive programming activities and profiles |
| `/credentials` | Certificates and credentials gallery |

Invalid routes display a custom 404 page.

---

## Design Approach

The portfolio follows a clean, developer-focused design with a graphite and muted teal color palette.

Key considerations include:

- Clear typography and visual hierarchy
- Consistent spacing and reusable components
- Responsive design across screen sizes
- Subtle animations and interactive elements
- Keyboard accessibility and visible focus indicators
- Reduced-motion preferences
- Readable content in both light and dark themes

---

## Deployment

The portfolio is deployed on **Vercel** with GitHub integration.

Changes pushed to the production branch are deployed through the connected Vercel project.

**Live Website:** [md-jonaed-joshim.vercel.app](https://md-jonaed-joshim.vercel.app/)

---

## Contact

**Md Jonaed Joshim**  
Web Developer & Competitive Programmer

- **Portfolio:** [Visit Website](https://md-jonaed-joshim.vercel.app/)
- **GitHub:** [@jonaedjoshim](https://github.com/jonaedjoshim)
- **LinkedIn:** [Md Jonaed Joshim](https://www.linkedin.com/in/jonaed-joshim/)
- **Email:** [mdjonaedjoshim@gmail.com](mailto:mdjonaedjoshim@gmail.com)

---

## Usage

This repository is publicly available for exploring the implementation and learning from the source code.

Personal photographs, resume, certificates, and branding are included for portfolio presentation and should not be reused as someone else's identity or credentials.

Third-party logos and trademarks belong to their respective owners.

---

<p align="center">
  Built with Next.js, TypeScript, and Tailwind CSS.
  <br />
  © 2026 Md Jonaed Joshim
</p>
