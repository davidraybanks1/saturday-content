import type { Metadata } from "next";
import Link from "next/link";
import Countdown from "./Countdown";
import "@fontsource/host-grotesk/400.css";
import "@fontsource/host-grotesk/500.css";
import "@fontsource/host-grotesk/600.css";
import "@fontsource/host-grotesk/700.css";
import "@fontsource/geist-mono/400.css";
import "@fontsource/geist-mono/500.css";
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
