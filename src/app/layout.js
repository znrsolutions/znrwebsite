import "./../styles/globals.scss";

import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";

export const metadata = {
  title: "ZNR Tech",
  description: "Fintech & Retail Redefined",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        {/* 🔥 Navbar */}
        <Navbar />

        {/* 🔥 MAIN CONTENT FIX */}
        <main
          style={{
            flex: 1,
            // paddingTop: "100px", // 👈 pushes content below fixed navbar
          }}
        >
          {children}
        </main>

        {/* 🔥 Footer */}
        <Footer />
      </body>
    </html>
  );
}