import "./../styles/globals.scss";
import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";
import ChatWidget from "../components/ChatWidget/ChatWidget";
import { Toaster } from "react-hot-toast"; // ✅ ADD THIS

export const metadata = {
  title: "ZNR Tech",
  description: "Fintech & Retail Redefined",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>

      <body
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Navbar />

        <main style={{ flex: 1 }}>
          {children}
        </main>

        <Footer />

        {/* 🔥 CHAT */}
        <ChatWidget />

        {/* 🔥 TOAST NOTIFICATIONS */}
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
                background: "#1710D8", // ZNR brand color
                color: "#fff",
              },
              iconTheme: {
                primary: "#fff",
                secondary: "#1710D8",
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