import { NextResponse } from "next/server";

export async function middleware(request) {
  const sessionToken = request.cookies.get("better-auth.session_token"); 
  
  const isAuthRoute = request.nextUrl.pathname.startsWith("/login") || request.nextUrl.pathname.startsWith("/register");
  
  
  const isPrivateRoute = 
    request.nextUrl.pathname.match(/^\/courses\/.+/) || 
    request.nextUrl.pathname.startsWith("/my-profile") || 
    request.nextUrl.pathname.startsWith("/update-profile");

  
  if (!sessionToken && isPrivateRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  
  if (sessionToken && isAuthRoute) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/courses/:path*", 
    "/my-profile", 
    "/update-profile", 
    "/login", 
    "/register"
  ],
};