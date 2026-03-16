# InvenTree Next UI

A premium, standalone Next.js 15 frontend for [InvenTree](https://inventree.org/) — built with **Shadcn/ui** (New York style), **Tailwind CSS**, and the **Next.js App Router**.

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 15.5.12 | React framework with App Router |
| React | 19 | UI library |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 3 | Utility-first styling |
| Shadcn/ui | New York | Premium UI component library |
| Radix UI | Latest | Accessible primitives |
| Zustand | 5 | Client-side state management |
| Axios | 1 | HTTP API client |
| next-themes | 0.4 | Dark / light mode |
| lucide-react | Latest | Icon library |

## Getting Started

### Prerequisites

- Node.js 20+
- An InvenTree backend running (default: `http://localhost:8000`)

### Setup

```bash
# 1. Install dependencies
npm install

# 2. Configure the API host
cp .env.example .env.local
# Edit .env.local and set NEXT_PUBLIC_API_HOST

# 3. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `NEXT_PUBLIC_API_HOST` | `http://localhost:8000` | InvenTree backend API URL |

Create a `.env.local` file:

```
NEXT_PUBLIC_API_HOST=http://localhost:8000
```

## Project Structure

```
inventree-next-ui/
├── app/                        # Next.js App Router
│   ├── layout.tsx              # Root layout (ThemeProvider)
│   ├── page.tsx                # Root redirect
│   ├── globals.css             # Tailwind + Shadcn CSS variables
│   ├── (auth)/                 # Auth route group (no sidebar)
│   │   ├── layout.tsx
│   │   ├── login/page.tsx
│   │   └── register/page.tsx
│   └── (dashboard)/            # Protected dashboard route group
│       ├── layout.tsx          # Sidebar + Header shell
│       ├── home/page.tsx
│       ├── part/page.tsx
│       ├── stock/page.tsx
│       ├── purchasing/page.tsx
│       ├── sales/page.tsx
│       └── manufacturing/page.tsx
├── components/
│   ├── ui/                     # Shadcn/ui primitives
│   ├── layout/                 # Header, Sidebar, Footer
│   └── auth/                   # Login form, auth wrapper
├── lib/
│   ├── utils.ts                # cn() helper
│   └── api.ts                  # Axios client & API helpers
├── hooks/
│   └── use-auth.ts             # Auth state hook (Zustand)
├── tailwind.config.ts
├── components.json             # Shadcn CLI config
└── next.config.ts
```

## Adding More Shadcn Components

```bash
npx shadcn@latest add <component>
# e.g.
npx shadcn@latest add table
npx shadcn@latest add tabs
npx shadcn@latest add select
```

## Building for Production

```bash
npm run build
npm start
```

## Migrating from Vite/Mantine

This project replaces the original Vite + Mantine InvenTree frontend with a Next.js + Shadcn stack. Key differences:

| Old (Vite + Mantine) | New (Next.js + Shadcn) |
|----------------------|------------------------|
| `src/frontend/src/pages/` | `app/(dashboard)/*/page.tsx` |
| `src/frontend/src/components/` | `components/` |
| React Router v6 | Next.js App Router |
| Mantine UI | Shadcn/ui (Radix UI + Tailwind) |
| Vite build | Next.js build (Turbopack) |
| `@mantine/core` theming | CSS variables + next-themes |

## License

MIT
