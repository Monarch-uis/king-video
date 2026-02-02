import { createClient } from '@supabase/supabase-js'

/**
 * Service Role client to bypass RLS for administrative tasks
 */
const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
        auth: {
            autoRefreshToken: false,
            persistSession: false
        }
    }
)

export async function upsertUser(userData: {
    id: string
    email: string | undefined
    name: string
}) {
    const { id, email, name } = userData

    const { data, error } = await supabaseAdmin
        .from('users')
        .upsert({
            user_id: id,
            email,
            name,
        }, { onConflict: 'user_id' })
        .select()
        .single()

    if (error) {
        console.error('Error upserting user:', error)
        throw error
    }

    return data
}

export async function getUserById(id: string) {
    const { data, error } = await supabaseAdmin
        .from('users')
        .select('*')
        .eq('id', id)
        .single()

    if (error) {
        console.error('Error fetching user:', error)
        return null
    }

    return data
}
