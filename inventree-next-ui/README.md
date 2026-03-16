# inventree-next-ui

A standalone **Next.js 16** + **Tailwind CSS v4** frontend for [InvenTree](https://inventree.org) — the open-source inventory management system.

## Stack

| Technology | Version | Notes |
|---|---|---|
| **Next.js** | 16.1.6 | App Router, React Server Components |
| **Tailwind CSS** | v4.2.1 | CSS-first configuration — no `tailwind.config.js` |
| **Shadcn/ui** | New York theme | Radix UI primitives, fully typed |
| **next-themes** | 0.4.6 | System-aware dark/light mode via `class` strategy |
| **Zustand** | 5.0.12 | Auth store (localStorage-persisted, non-sensitive identity only) |
| **Axios** | 1.13.6 | CSRF cookie injection for InvenTree Django backend |
| **React** | 19.1.0 | Concurrent features, Server Components |

## Key changes vs. Tailwind v3

Tailwind CSS v4 moves to a **CSS-first** configuration model:

- **No `tailwind.config.js`** — design tokens are declared in CSS using the `@theme` directive inside `app/globals.css`.
- **`@import "tailwindcss"`** replaces the old `@tailwind base; @tailwind components; @tailwind utilities` directives.
- **PostCSS plugin**: `@tailwindcss/postcss` (not `tailwindcss` directly).
- **OKLCH color space** for all design tokens — wider gamut, perceptually uniform.
- **`@layer base`** for global resets and base styles.

See `app/globals.css` for the full token definitions.

## Project structure

```
inventree-next-ui/
├── app/
│   ├── globals.css          # Tailwind v4 CSS-first config + design tokens
│   ├── layout.tsx           # Root layout — ThemeProvider, system font
│   ├── page.tsx             # Redirects → /dashboard
│   ├── (auth)/
│   │   ├── login/page.tsx   # Split-panel login
│   │   └── register/page.tsx
│   └── (dashboard)/
│       ├── layout.tsx       # DashboardShell (auth guard + sidebar + header)
│       ├── page.tsx         # Home / overview
│       ├── parts/page.tsx
│       ├── stock/page.tsx
│       ├── purchasing/page.tsx
│       ├── sales/page.tsx
│       └── manufacturing/page.tsx
├── components/
│   ├── ui/                  # Shadcn/ui primitives (button, card, input, badge, label, separator)
│   ├── layout/              # Sidebar · Header · DashboardShell · ThemeProvider
│   └── auth/                # LoginForm · RegisterForm
├── hooks/
│   └── use-auth.ts          # Zustand auth store
├── lib/
│   ├── api.ts               # Axios instance with CSRF injection
│   └── utils.ts             # cn() — clsx + tailwind-merge
├── components.json          # Shadcn CLI config (Tailwind v4 compatible)
├── next.config.ts
├── postcss.config.mjs       # @tailwindcss/postcss v4
└── tsconfig.json
```

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Configure environment
cp .env.example .env.local
# Edit .env.local — set NEXT_PUBLIC_API_HOST to your InvenTree backend URL

# 3. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configuration

| Variable | Default | Description |
|---|---|---|
| `NEXT_PUBLIC_API_HOST` | `http://localhost:8000` | InvenTree backend base URL |

## Adding Shadcn/ui components

```bash
npx shadcn@latest add <component>
```

The `components.json` is already configured for Tailwind v4 (empty `config` path, CSS variables).
