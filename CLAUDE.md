# Project Context: Anti Gravity CRM

## Overview
This project is a Next.js web application for Customer Relationship Management (CRM).
It handles sales pipeline management, customer/lead tracking, contact management, deal management, and marketing analytics for the Anti Gravity team.

@AGENTS.md

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4, clsx, tailwind-merge
- **UI Components**: Framer Motion, Lucide React
- **Backend/Database**: Firebase (Firestore, Auth)
- **State Management**: React hooks + Context API
- **Charts/Visualization**: Recharts (planned)

## Directory Structure
- `src/app/` — App Router pages and layouts
- `src/components/` — Reusable UI components
- `src/components/ui/` — Base UI primitives (Button, Input, Card, etc.)
- `src/lib/` — Utility functions and helper libraries
- `src/lib/firebase/` — Firebase configuration and service functions
- `src/types/` — TypeScript type definitions
- `src/hooks/` — Custom React hooks
- `src/contexts/` — React Context providers
- `src/data/` — Static data or mock data

## Coding Guidelines
- **Functional Components**: Use React functional components with Hooks.
- **Strict Typing**: Ensure all props and state are strictly typed. Avoid `any`.
- **Styling**: Use Tailwind CSS utility classes. For conditional classes, use `clsx` and `tailwind-merge`.
- **Next.js Best Practices**: Use Server Components by default; add `"use client"` only when interactivity is needed.
- **File Naming**: Use kebab-case for files and directories (e.g., `deal-card.tsx`, `use-contacts.ts`).
- **Component Exports**: Use named exports for components, not default exports.
- **Error Handling**: Always handle loading and error states in UI components.
- **Korean Language**: UI text should be in Korean (한국어) as this is an internal tool for the Korean team.

## Commands
- `npm run dev` — Start dev server (port 3001)
- `npm run build` — Production build
- `npm run lint` — Run ESLint
- `npm run start` — Start production server

## Related Projects
This project is part of the Anti Gravity monorepo workspace:
- **Ashley 2.0** (`../Ashley 2.0/`) — Smart lock management system
- **Translate** (`../Translate/`) — Translation tool
- **Tiro** — Desktop app (Electron) — main product

## Firebase Configuration
- Firebase project config should be stored in `.env.local` (not committed to git)
- Required environment variables:
  ```
  NEXT_PUBLIC_FIREBASE_API_KEY=
  NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
  NEXT_PUBLIC_FIREBASE_PROJECT_ID=
  NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
  NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
  NEXT_PUBLIC_FIREBASE_APP_ID=
  ```
