/**
 * Database type definitions
 * 
 * This file contains TypeScript types for your Supabase database schema.
 * You can generate these types automatically using the Supabase CLI:
 * 
 * npx supabase gen types typescript --project-id YOUR_PROJECT_ID > lib/supabase/types.ts
 * 
 * Or from a local Supabase instance:
 * npx supabase gen types typescript --local > lib/supabase/types.ts
 */

export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export interface Database {
    public: {
        Tables: {
            // Add your table definitions here
            // Example:
            // users: {
            //   Row: {
            //     id: string
            //     email: string
            //     created_at: string
            //   }
            //   Insert: {
            //     id?: string
            //     email: string
            //     created_at?: string
            //   }
            //   Update: {
            //     id?: string
            //     email?: string
            //     created_at?: string
            //   }
            // }
        }
        Views: {
            // Add your view definitions here
        }
        Functions: {
            // Add your function definitions here
        }
        Enums: {
            // Add your enum definitions here
        }
    }
}
