import { NextResponse } from "next/server";

export function middleware(req) {
  const admin = req.cookies.get("admin");

  const isAdminRoute = req.nextUrl.pathname.startsWith("/admin");
  const isLoginPage = req.nextUrl.pathname === "/admin/login";

  // ✅ Allow login page always
  if (isLoginPage) {
    return NextResponse.next();
  }

  // ❌ Protect other admin routes
  if (isAdminRoute && !admin) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  return NextResponse.next();
}