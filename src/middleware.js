import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request) {
  const token = await getToken({ 
    req: request,
    secret: process.env.NEXTAUTH_SECRET 
  });
  
  const { pathname, origin } = request.nextUrl;

  // If user is not logged in and trying to access protected routes
  if (!token) {
    if (pathname.startsWith('/dashboard') || pathname.startsWith('/all-products')) {
      return NextResponse.redirect(new URL('/login', origin));
    }
  }

  // If user is logged in and trying to access auth pages
  if (token) {
    if (pathname === '/login' || pathname === '/register') {
      return NextResponse.redirect(new URL('/all-products', origin));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/login',
    '/register'
  ],
};
