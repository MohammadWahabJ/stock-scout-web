import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const token = request.cookies.get('authToken')?.value || null
    let currentUser;
    if (token == 'undefined') {
        currentUser = null
    } else {
        currentUser = token
    }
    if (currentUser && request.nextUrl.pathname.startsWith('/auth')) {
        return Response.redirect(new URL('/dashboard', request.url))
    }

    if (!currentUser && request.nextUrl.pathname.startsWith('/dashboard')) {
        return Response.redirect(new URL('/auth/login', request.url))
    }
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
