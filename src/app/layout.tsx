import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gent Ascend Collective | Modern Digital Infrastructure for Real Businesses",
  description:
    "Gent Ascend Collective helps select local businesses modernize their identity, presence, intelligence, and infrastructure through premium websites, intelligent workflows, and digital ecosystems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
