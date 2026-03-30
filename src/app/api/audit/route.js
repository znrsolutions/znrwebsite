export async function POST(req) {
  try {
    const { url } = await req.json();

    if (!url) {
      return Response.json({ error: "URL is required" }, { status: 400 });
    }

    const apiKey = process.env.GOOGLE_PAGESPEED_API_KEY;

    const formattedUrl = url.startsWith("http")
      ? url
      : `https://${url}`;

    const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
      formattedUrl
    )}&strategy=mobile&category=performance&category=seo&category=accessibility&category=best-practices&key=${apiKey}`;

    console.log("Calling API:", apiUrl);

    const res = await fetch(apiUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
    });

    const text = await res.text();

    if (!res.ok) {
      console.error("Google API ERROR:", text);
      return Response.json(
        { error: "Google API failed", details: text },
        { status: 500 }
      );
    }

    const data = JSON.parse(text);

    return Response.json(data);
  } catch (err) {
    console.error("Audit Error:", err);
    return Response.json({ error: err.message }, { status: 500 });
  }
}