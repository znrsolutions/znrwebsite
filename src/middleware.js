import { NextResponse } from "next/server";

export function middleware(req) {
  const adminCookie = req.cookies.get("admin")?.value;

  const { pathname } = req.nextUrl;

  const isAdminRoute = pathname.startsWith("/admin");
  const isLoginPage = pathname === "/admin/login";

  // ✅ If logged in and trying to access login → redirect to dashboard
  if (isLoginPage && adminCookie) {
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  // ❌ If NOT logged in → block admin pages
  if (isAdminRoute && !adminCookie && !isLoginPage) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  return NextResponse.next();
}