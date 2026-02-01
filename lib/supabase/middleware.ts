import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

/**
 * Create a Supabase client for use in Middleware
 * This client handles session refresh and cookie updates
 */
export async function updateSession(request: NextRequest) {
    let supabaseResponse = NextResponse.next({
        request,
    })

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll()
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value, options }) => {
                        request.cookies.set(name, value)
                        supabaseResponse.cookies.set(name, value, options)
                    })
                },
            },
        }
    )

    // IMPORTANT: Avoid writing any logic between createServerClient and
    // supabase.auth.getUser(). A simple mistake could make it very hard to debug
    // issues with users being randomly logged out.

    const { data } = await supabase.auth.getClaims()
    const claims = data?.claims

    // You can add route protection logic here
    // For example, redirect to /login if user is not authenticated
    // if (!user && !request.nextUrl.pathname.startsWith('/login')) {
    //   const url = request.nextUrl.clone()
    //   url.pathname = '/login'
    //   return NextResponse.redirect(url)
    // }

    // IMPORTANT: You *must* return the supabaseResponse object as it is.
    // If you're creating a new response object with NextResponse.next() make sure to:
    // 1. Pass the request in it, like so: NextResponse.next({ request })
    // 2. Copy over the cookies, like so: supabaseResponse.cookies.getAll().forEach(...)
    // 3. Change the supabaseResponse object to your new response object

    return supabaseResponse
}
