import { NextResponse } from "next/server";

export async function POST() {
  try {
    const response = NextResponse.json({ success: true });

    // 🔥 DELETE COOKIE
    response.cookies.set("admin", "", {
      expires: new Date(0),
      path: "/",
    });

    return response;

  } catch (error) {
    return NextResponse.json(
      { error: "Logout failed" },
      { status: 500 }
    );
  }
}