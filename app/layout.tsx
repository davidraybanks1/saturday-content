import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.saturdaycontent.co"),
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
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <header className="site-header">
          <div className="wrap">
            <Link href="/" className="wordmark">
              saturday content
            </Link>
            <nav className="nav">
              <Link href="/templates">Templates</Link>
              <Link href="/#about">About</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <div className="wrap">
            <span>saturday content</span>
            <span>Free templates for content teams.</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
