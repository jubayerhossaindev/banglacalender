# 📅 Bangla Calendar

![CI](https://github.com/jubayerhossaindev/banglacalender/actions/workflows/ci.yml/badge.svg)
![License](https://img.shields.io/github/license/jubayerhossaindev/banglacalender)
![Node](https://img.shields.io/badge/node-%3E%3D20-green)
![pnpm](https://img.shields.io/badge/pnpm-9+-orange) ![PRs
Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen)

A modern, professional-grade web application for displaying and managing
Bengali/Bangla calendar dates, months, seasons, and cultural
information.

Built with **React, TypeScript, Vite, and Tailwind CSS**, following
enterprise-level architecture, testing, and CI/CD practices.

---

# 🌐 Live Demo

👉 https://banglacalendar.vercel.app

_(Replace this with your deployed URL)_

---

# 📸 Screenshots

![Bangla Calendar UI](./docs/screenshot.png)

---

# 🎯 Project Overview

The Bangla Calendar application provides:

- 📅 Real-time Bangla date display
- 🌍 Gregorian + Bangla + Hijri date support
- 📊 Monthly interactive calendar
- 🌤️ Bengali seasons information
- 🎪 Bengali holidays and national days
- 🕌 Islamic prayer times
- ⏰ Live multi-timezone clock
- 📱 Fully responsive UI
- 🌙 Dark / Light mode
- ⚡ Fast performance with Vite

---

# ✨ Key Features

## Core Features

- 🗓️ Bengali Date System
- 🕌 Prayer Times (Namaz Times)
- 🌍 Multi-Timezone Clock
- 📊 Interactive Monthly Calendar
- 🎪 Bangla Holidays
- 📜 Historical Events
- 🌤️ Bangla Seasons
- ⏰ Live Clock
- 📱 Mobile Responsive
- 🌙 Dark Mode Support

---

# 🧬 Tech Stack

## Frontend

- React
- TypeScript
- Vite

## UI & Styling

- Tailwind CSS
- shadcn-ui
- Radix UI
- Lucide Icons
- Sonner Toast

## Routing & Forms

- React Router
- React Hook Form
- Zod

## Date Utilities

- date-fns
- react-day-picker

---

# 🏗️ Project Structure

    src
    ├── components
    │   ├── ui
    │   │   ├── accordion.tsx
    │   │   ├── button.tsx
    │   │   ├── label.tsx
    │   │   ├── toast.tsx
    │   │   ├── toaster.tsx
    │   │   └── tooltip.tsx
    │
    │   ├── HeroSection.tsx
    │   ├── BanglaMonths.tsx
    │   ├── BanglaSeasons.tsx
    │   ├── MonthlyCalendar.tsx
    │   ├── Holidays.tsx
    │   ├── HistoricalEvents.tsx
    │   ├── PrayerTimes.tsx
    │   ├── LiveClock.tsx
    │   ├── TodaySummary.tsx
    │   ├── QuickLinks.tsx
    │   ├── AboutCalendar.tsx
    │   ├── Navbar.tsx
    │   └── Footer.tsx
    │
    ├── hooks
    │   ├── use-mobile.ts
    │   ├── use-toast.ts
    │   ├── useTheme.ts
    │   └── useScrollAnimation.ts
    │
    ├── lib
    │   ├── banglaDate.ts
    │   └── utils.ts
    │
    ├── pages
    │   ├── Index.tsx
    │   └── NotFound.tsx
    │
    ├── test
    │   ├── setup.ts
    │   └── example.test.ts
    │
    ├── App.tsx
    ├── main.tsx
    └── index.css

---

# 🚀 Getting Started

## 1️⃣ Clone Repository

```bash
git clone https://github.com/jubayerhossaindev/banglacalender.git
cd banglacalender
```

## 2️⃣ Install Dependencies

```bash
pnpm install
```

## 3️⃣ Run Development Server

```bash
pnpm dev
```

Open:

    http://localhost:5173

---

# 📦 Available Scripts

Script Purpose

---

pnpm dev Start dev server
pnpm build Production build
pnpm preview Preview build

---

# 🧪 Testing

Testing powered by **Vitest**.

    pnpm test
    pnpm test:watch
    pnpm test:coverage

---

# 🧹 Code Quality

Tools used:

- ESLint
- Prettier
- TypeScript strict mode
- Husky git hooks
- commitlint

Run:

    pnpm check

---

# 🔄 CI/CD

GitHub Actions automate:

- Linting
- Type checking
- Unit tests
- Build verification
- Dependency security checks
- Automated releases

---

# 🤝 Contributing

1.  Fork repository
2.  Create branch

```{=html}
<!-- -->
```

    git checkout -b feat/new-feature

3.  Commit

```{=html}
<!-- -->
```

    git commit -m "feat: add new feature"

4.  Push

```{=html}
<!-- -->
```

    git push origin feat/new-feature

5.  Open Pull Request

---

# 🗺️ Roadmap

- Bangla festival calendar
- Offline PWA support
- Bangla astrology data
- Public Bangla date API
- Mobile app version

---

# 🔒 Security

See **SECURITY.md** for vulnerability reporting.

---

# 📄 License

Licensed under the **MIT License**.

See the LICENSE file for details.

---

# 💬 Support

Issues\
https://github.com/jubayerhossaindev/banglacalender/issues

Discussions\
https://github.com/jubayerhossaindev/banglacalender/discussions

---

# 👨‍💻 Contributors

https://github.com/jubayerhossaindev/banglacalender/graphs/contributors

---

Made with ❤️ by Jubayer Hossain
