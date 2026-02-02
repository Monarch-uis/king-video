'use client'

import { useUser } from '@clerk/nextjs'
import { useEffect, useRef } from 'react'

export function AuthSync() {
    const { isSignedIn, user } = useUser()
    const syncedRef = useRef(false)

    useEffect(() => {
        if (isSignedIn && user && !syncedRef.current) {
            syncedRef.current = true

            fetch('/api/auth/sync', {
                method: 'POST',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
                        console.log('User synced to Supabase')
                    }
                })
                .catch(err => console.error('Failed to sync user:', err))
        }
    }, [isSignedIn, user])

    return null
}
