# Supabase Setup

This directory contains all Supabase-related utilities and configurations for the king-video application.

## Files Overview

- **`client.ts`** - Browser-side Supabase client for Client Components
- **`server.ts`** - Server-side Supabase client for Server Components and Server Actions
- **`middleware.ts`** - Helper for Next.js proxy to handle authentication
- **`types.ts`** - TypeScript type definitions for your database schema
- **`examples.tsx`** - Usage examples for different contexts (reference only, do not import)

## Quick Start

### 1. Configure Environment Variables

Update `.env.local` in the project root with your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

Get these values from your Supabase project settings: **Project Settings** → **API**

### 2. Usage

#### Client Components

```typescript
'use client'
import { createClient } from '@/lib/supabase/client'

const supabase = createClient()
```

#### Server Components

```typescript
import { createClient } from '@/lib/supabase/server'

const supabase = await createClient()
```

#### Server Actions

```typescript
'use server'
import { createClient } from '@/lib/supabase/server'

export async function myAction() {
  const supabase = await createClient()
  // ...
}
```

## Generating Types

After creating your database schema in Supabase, generate TypeScript types:

```bash
npx supabase gen types typescript --project-id YOUR_PROJECT_ID > lib/supabase/types.ts
```

## Authentication

The proxy in `proxy.ts` automatically handles session refresh on route changes. To protect routes, you can modify the proxy logic in `middleware.ts`.

## Resources

- [Supabase Docs](https://supabase.com/docs)
- [Next.js + Supabase Guide](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)
- [Usage Examples](./examples.tsx)
