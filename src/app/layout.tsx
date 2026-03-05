import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Solea Dashboard",
  description: "A warm, elegant dashboard built with the Solea design system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
