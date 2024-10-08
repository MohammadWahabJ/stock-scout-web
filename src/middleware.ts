import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
const { pathname } = request.nextUrl;

  if (pathname === '/logout') {
    const response = NextResponse.redirect(new URL('/', request.url));
    
    // Remove the authToken cookie
    response.cookies.set('authToken', '', { path: '/', expires: new Date(0) });
    
    return response;
  }
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
