import { NextResponse } from "next/server";

export async function middleware(request) {
  const sessionToken = request.cookies.get("better-auth.session_token"); // Better Auth এর ডিফল্ট কুকি
  
  const isAuthRoute = request.nextUrl.pathname.startsWith("/login") || request.nextUrl.pathname.startsWith("/register");
  
  // যেসব রাউট প্রটেক্টেড হবে
  const isPrivateRoute = 
    request.nextUrl.pathname.match(/^\/courses\/.+/) || // Course Details pages
    request.nextUrl.pathname.startsWith("/my-profile") || 
    request.nextUrl.pathname.startsWith("/update-profile");

  // যদি লগইন করা না থাকে এবং প্রাইভেট রাউটে যাওয়ার চেষ্টা করে, তাহলে লগইনে পাঠাবে
  if (!sessionToken && isPrivateRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // যদি লগইন করা থাকে এবং লগইন/রেজিস্টার পেজে যাওয়ার চেষ্টা করে, তাহলে হোমে পাঠাবে
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