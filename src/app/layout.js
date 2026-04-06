import "./../styles/globals.scss";
import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";
import ChatWidget from "../components/ChatWidget/ChatWidget";
import { Toaster } from "react-hot-toast";

/* ================= SEO METADATA ================= */
export const metadata = {
  metadataBase: new URL("https://znrsolutions.com"),

  title: {
    default: "ZNR Solutions | Fintech, Retail & Cybersecurity",
    template: "%s | ZNR Solutions",
  },

  description:
    "ZNR Solutions builds secure fintech, retail, and cybersecurity systems. From payment platforms to enterprise solutions, we help businesses scale.",

  keywords: [
    "fintech solutions",
    "retail software",
    "cybersecurity services",
    "payment systems",
    "web development sri lanka",
  ],

  authors: [{ name: "ZNR Solutions" }],

  openGraph: {
    title: "ZNR Solutions",
    description:
      "Secure fintech, retail & cybersecurity solutions for modern businesses.",
    url: "https://znrsolutions.com",
    siteName: "ZNR Solutions",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ZNR Solutions",
    description:
      "Fintech, Retail & Cybersecurity Solutions for modern businesses.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

/* ================= LAYOUT ================= */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ FAVICON */}
        <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* ✅ THEME COLOR */}
        <meta name="theme-color" content="#1710D8" />
         <link rel="canonical" href="https://znrsolutions.com" />
        {/* 🔥 GOOGLE FONTS OPTIMIZED */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        {/* 🔥 STRUCTURED DATA (SEO BOOST) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ZNR Solutions",
              url: "https://znrsolutions.com",
              logo: "https://znrsolutions.com/logo.png",
              sameAs: [
                "https://linkedin.com/company/znrsolutions",
                "https://facebook.com/znrsolutions",
              ],
            }),
          }}
        />
      </head>

      <body
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        {/* 🔥 NAVBAR */}
        <Navbar />

        {/* 🔥 MAIN CONTENT */}
        <main style={{ flex: 1 }}>{children}</main>

        {/* 🔥 FOOTER */}
        <Footer />

        {/* 🔥 CHAT WIDGET */}
        <ChatWidget />

        {/* 🔥 TOAST */}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: "#111",
              color: "#fff",
              borderRadius: "12px",
              padding: "14px 18px",
              fontSize: "14px",
            },
            success: {
              style: {
                background: "#1710D8",
                color: "#fff",
              },
            },
            error: {
              style: {
                background: "#ff4d4f",
                color: "#fff",
              },
            },
          }}
        />
      </body>
    </html>
  );
}
