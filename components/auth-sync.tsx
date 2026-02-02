'use client'

import { useUser } from '@clerk/nextjs'
import { useEffect, useRef } from 'react'

export function AuthSync() {
    const { isSignedIn, user } = useUser()
    const syncedUserIdRef = useRef<string | null>(null)

    useEffect(() => {
        // Reset when user signs out
        if (!isSignedIn) {
            syncedUserIdRef.current = null
            return
        }

        // Only sync if we have a user and haven't synced this specific user yet
        if (user?.id && syncedUserIdRef.current !== user.id) {
            fetch('/api/auth/sync', {
                method: 'POST',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
                        syncedUserIdRef.current = user.id
                        console.log('User synced to Supabase')
                    }
                })
                .catch(err => console.error('Failed to sync user:', err))
        }
    }, [isSignedIn, user?.id])

    return null
}
