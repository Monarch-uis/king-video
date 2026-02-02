/**
 * Supabase Usage Examples
 * 
 * This file demonstrates how to use the Supabase clients in different contexts.
 * DO NOT import this file - these are just examples for reference.
 */

// ============================================
// Example 1: Using Supabase in a Client Component
// ============================================
'use client'

import { createClient } from '@/lib/supabase/client'
import { useEffect, useState } from 'react'

export function ClientComponentExample() {
    const [user, setUser] = useState(null)
    const supabase = createClient()

    useEffect(() => {
        // Get current user
        const getUser = async () => {
            const { data: { user } } = await supabase.auth.getUser()
            setUser(user)
        }
        getUser()

        // Listen to auth changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            (event, session) => {
                setUser(session?.user ?? null)
            }
        )

        return () => subscription.unsubscribe()
    }, [])

    // Example: Sign in with email
    const signIn = async (email: string, password: string) => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })
        if (error) console.error('Error signing in:', error)
    }

    // Example: Sign out
    const signOut = async () => {
        const { error } = await supabase.auth.signOut()
        if (error) console.error('Error signing out:', error)
    }

    // Example: Query data
    const fetchData = async () => {
        const { data, error } = await supabase
            .from('your_table')
            .select('*')
        if (error) console.error('Error fetching data:', error)
        return data
    }

    return <div>Client Component Example</div>
}

// ============================================
// Example 2: Using Supabase in a Server Component
// ============================================
import { createClient as createServerClient } from '@/lib/supabase/server'

export async function ServerComponentExample() {
    const supabase = await createServerClient()

    // Get current user
    const { data: { user } } = await supabase.auth.getUser()

    // Query data
    const { data, error } = await supabase
        .from('your_table')
        .select('*')

    if (error) {
        console.error('Error fetching data:', error)
    }

    return (
        <div>
            <h1>Server Component Example</h1>
            {user ? <p>Logged in as: {user.email}</p> : <p>Not logged in</p>}
            {/* Render your data */}
        </div>
    )
}

// ============================================
// Example 3: Using Supabase in a Server Action
// ============================================
'use server'

import { createClient as createServerClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export async function createItem(formData: FormData) {
    const supabase = await createServerClient()

    // Get form data
    const name = formData.get('name') as string

    // Insert data
    const { data, error } = await supabase
        .from('your_table')
        .insert({ name })
        .select()
        .single()

    if (error) {
        return { error: error.message }
    }

    // Revalidate the page
    revalidatePath('/your-page')
    return { data }
}

export async function updateItem(id: string, updates: any) {
    const supabase = await createServerClient()

    const { data, error } = await supabase
        .from('your_table')
        .update(updates)
        .eq('id', id)
        .select()
        .single()

    if (error) {
        return { error: error.message }
    }

    revalidatePath('/your-page')
    return { data }
}

export async function deleteItem(id: string) {
    const supabase = await createServerClient()

    const { error } = await supabase
        .from('your_table')
        .delete()
        .eq('id', id)

    if (error) {
        return { error: error.message }
    }

    revalidatePath('/your-page')
    return { success: true }
}

// ============================================
// Example 4: Using Supabase in a Route Handler
// ============================================
import { createClient as createServerClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET() {
    const supabase = await createServerClient()

    const { data, error } = await supabase
        .from('your_table')
        .select('*')

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ data })
}

export async function POST(request: Request) {
    const supabase = await createServerClient()
    const body = await request.json()

    const { data, error } = await supabase
        .from('your_table')
        .insert(body)
        .select()
        .single()

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ data })
}

// ============================================
// Example 5: Protected Route Pattern
// ============================================
import { createClient as createServerClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export async function ProtectedPage() {
    const supabase = await createServerClient()

    // Check if user is authenticated
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        redirect('/login')
    }

    // User is authenticated, render protected content
    return (
        <div>
            <h1>Protected Page</h1>
            <p>Welcome, {user.email}!</p>
        </div>
    )
}
