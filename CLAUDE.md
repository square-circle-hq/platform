# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the SquareCircle Platform - a Next.js 16.0.0 application built with React 19.2.0 and TypeScript. It's a monitoring/dashboard application for workflow traces and logs management.

## Development Commands

### Core Development
- `bun dev` - Start development server on port 3001
- `bun build` - Create production build
- `bun start` - Start production server
- `bun lint` - Run ESLint checks

### Code Quality
- Format code with Biome: `bunx @biomejs/biome format --write .`
- Lint code with Biome: `bunx @biomejs/biome lint .`
- Check types: `bunx tsc --noEmit`

## Architecture

### Technology Stack
- **Framework**: Next.js 16.0.0 (Pages Router)
- **Language**: TypeScript 5 with strict mode
- **Styling**: Tailwind CSS 4 + shadcn/ui component library
- **Data Fetching**: SWR for client-side data
- **UI Components**: Radix UI primitives with custom shadcn/ui implementation
- **State Management**: React hooks + SWR
- **Icons**: Tabler Icons + Lucide React
- **Charts**: Recharts
- **Tables**: TanStack React Table
- **Drag & Drop**: @dnd-kit

### Project Structure
- `/pages/` - Next.js pages and API routes (Pages Router)
- `/components/` - React components organized by feature
- `/components/ui/` - shadcn/ui design system components
- `/lib/` - Utilities, fetchers, and shared logic
- `/hooks/` - Custom React hooks
- `/styles/` - Global CSS and theming
- `/public/` - Static assets

### Key Configuration Files
- `next.config.ts` - Next.js config with API rewrites to external backend
- `tsconfig.json` - TypeScript with path aliases (`@/*` maps to root)
- `components.json` - shadcn/ui component configuration
- `biome.json` - Biome formatting and linting configuration

## Development Patterns

### Component Architecture
- Use shadcn/ui components as base building blocks
- Custom components follow shadcn/ui patterns with CVA (Class Variance Authority)
- File naming: kebab-case for files, PascalCase for components
- Props interfaces defined inline with TypeScript

### Styling System
- Tailwind CSS 4 with custom CSS variables for theming
- Dark/light theme support via CSS custom properties
- Use `cn()` utility from `lib/utils.ts` for conditional className merging
- Follow shadcn/ui "new-york" design style

### Data Fetching
- Use SWR hooks for client-side data fetching
- Centralized fetcher functions in `lib/fetchers.ts`
- API routes are proxied to external backend via rewrite rules in next.config.ts
- Environment variable `API_BASE_URL` configures backend endpoint

### State Management
- Local UI state: React hooks (`useState`, `useEffect`)
- Server state: SWR for data fetching and caching
- No global state management library - prefer component composition

## Key Features

### Main Application Areas
- **Dashboard** (`/`) - Overview with charts and metrics
- **Logs** (`/logs`) - Log management interface
- **Traces** (`/traces`) - Workflow trace monitoring
- **Trace Detail** (`/traces/[id]`) - Individual trace inspection

### UI Components
- Responsive sidebar navigation that collapses on mobile
- Data tables with TanStack React Table
- Charts with Recharts
- Drag & drop interfaces with @dnd-kit
- Form components with validation

## Development Guidelines

### Code Quality
- All code must pass TypeScript compilation
- Follow Biome formatting rules (2-space indentation, double quotes)
- Use path aliases (`@/components/*`) for imports
- Write descriptive commit messages

### Component Development
- Create components in `/components/` directory
- Use shadcn/ui components as base when possible
- Implement proper TypeScript interfaces for props
- Follow responsive design principles
- Use Tailwind CSS for styling

### API Integration
- API calls go through rewrite proxy to external backend
- Use SWR hooks for data fetching with proper error handling
- Implement loading states for async operations
- Handle API errors gracefully with user feedback

### Theming
- Support both dark and light themes via next-themes
- Use CSS custom properties for theme-aware styling
- Test components in both theme modes