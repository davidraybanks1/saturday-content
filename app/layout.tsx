import type { Metadata } from "next";
import Link from "next/link";
import Countdown from "./Countdown";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://saturdaycontent.co"),
  title: {
    default: "saturday content",
    template: "%s — saturday content",
  },
  description:
    "Free content marketing templates and frameworks for Notion, ClickUp, and Airtable — the ones you need but never have time to build.",
  openGraph: { siteName: "saturday content", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Host+Grotesk:wght@400;500;600;700&family=Geist+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <header className="site-header">
          <div className="col">
            <Link href="/" className="logo">
              saturday <span>content</span>
            </Link>
            <Countdown />
          </div>
        </header>
        <nav className="site-nav">
          <div className="col">
            <Link href="/#templates">Templates</Link>
            <Link href="/#how">How it works</Link>
            <Link href="/#about">About</Link>
          </div>
        </nav>
        <main id="top">{children}</main>
        <footer className="site-footer">
          <div className="col mono-label">saturday content — tools for content teams</div>
        </footer>
      </body>
    </html>
  );
}
