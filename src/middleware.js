import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request) {
  const token = await getToken({ req: request });
  const { pathname, origin, searchParams } = request.nextUrl;

  // If user is not logged in and trying to access protected routes
  if (!token) {
    if (pathname.startsWith('/dashboard') || pathname.startsWith('/products/')) {
      const callbackUrl = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '');
      return NextResponse.redirect(new URL(`/login?callbackUrl=${encodeURIComponent(callbackUrl)}`, origin));
    }
  }

  // If user is logged in and trying to access auth pages
  if (token) {
    if (pathname === '/login' || pathname === '/register') {
      return NextResponse.redirect(new URL('/products', origin));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/products/:path*',
    '/login',
    '/register'
  ],
};
