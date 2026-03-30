import "./../styles/globals.scss";
import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";
import ChatWidget from "../components/ChatWidget/ChatWidget"; // ✅ already imported

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

        {/* 🔥 ADD THIS LINE (THIS WAS MISSING) */}
        <ChatWidget />
      </body>
    </html>
  );
}