import { currentUser } from '@clerk/nextjs/server'
import { upsertUser } from '@/lib/supabase/user'
import { NextResponse } from 'next/server'

export async function POST() {
    try {
        const user = await currentUser()

        if (!user) {
            return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
        }

        const primaryEmail = user.emailAddresses.find(
            email => email.id === user.primaryEmailAddressId
        )?.emailAddress

        const name = `${user.firstName || ''} ${user.lastName || ''}`.trim()

        console.log(`Auto-syncing user ${user.id}: ${name} (${primaryEmail})`)

        await upsertUser({
            id: user.id,
            email: primaryEmail,
            name,
        })

        console.log(`Successfully synced user ${user.id}`)

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Error syncing user:', error)
        return NextResponse.json({ error: 'Sync failed' }, { status: 500 })
    }
}
