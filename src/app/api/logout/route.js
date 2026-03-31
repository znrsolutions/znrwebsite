export async function POST() {
  const res = Response.json({ success: true });

  res.cookies.set("admin", "", {
    expires: new Date(0),
    path: "/",
  });

  return res;
}