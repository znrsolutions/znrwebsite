import "./../styles/globals.scss";

export const metadata = {
  title: "ZNR Tech",
  description: "Fintech & Retail Redefined",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Inter */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Poppins */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}