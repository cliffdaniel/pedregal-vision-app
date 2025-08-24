import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_PATHS = ['/login', '/auth/login'];

export function middleware(request: NextRequest) {
    const token = request.cookies.get('auth_token')?.value;
    const isPublic = PUBLIC_PATHS.some((path) => request.nextUrl.pathname.startsWith(path));

    if (!token && !isPublic) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
