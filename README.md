# parsim

**Context Optimization for AI Agents**

Marketing site for parsim — a product that compresses, deduplicates, and prunes unnecessary context for AI agents, cutting inference costs while preserving essential intelligence.

Built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.

## Tech stack

- [Vite](https://vitejs.dev/) — fast dev server and production builds
- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) — utility-first styling
- [Lucide React](https://lucide.dev/) — icons
- [Clerk](https://clerk.com/) — optional authentication (`@clerk/clerk-react`)
- [Vercel Analytics](https://vercel.com/analytics) — usage analytics

## Getting started

### Prerequisites

- Node.js 18+
- [pnpm](https://pnpm.io/) (this project uses `pnpm-lock.yaml`)

### Install

```bash
pnpm install
```

### Environment variables

Copy the example env file and add your Clerk publishable key if you want auth enabled:

```bash
cp .env.example .env
```

```env
VITE_CLERK_PUBLISHABLE_KEY=
```

Without a key, the site still runs; Clerk UI falls back gracefully.

### Develop

```bash
pnpm dev
```

Opens the app at [http://localhost:3000](http://localhost:3000).

### Build & preview

```bash
pnpm build
pnpm preview
```

### Other scripts

| Command             | Description                            |
| ------------------- | -------------------------------------- |
| `pnpm typecheck`    | Run TypeScript checks (`tsc --noEmit`) |
| `pnpm format`       | Check Prettier formatting              |
| `pnpm format:write` | Apply Prettier formatting              |

## Project structure

```
src/
├── assets/fonts/          # Local fonts (SF Pro Display)
├── components/
│   ├── layout/            # Navbar, footer
│   └── ui/                # Reusable UI (logo, link, icons)
├── hooks/                 # Custom React hooks
├── lib/                   # Auth, constants, utilities
├── sections/              # Landing page sections
├── App.tsx                # Page composition
├── main.tsx               # React entry
└── index.css              # Global styles + Tailwind
public/                    # Static assets (favicon, logo, robots, sitemap)
index.html                 # Vite HTML entry
```

### Landing sections

Hero → Problem → Solution → How it works → Developer experience → Benefits → Analytics → Integrations → Security → Pricing → FAQ → Final CTA

## License

See [LICENSE.md](./LICENSE.md).
