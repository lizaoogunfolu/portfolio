import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elizabeth — Project Manager & AI Builder",
  description:
    "Project manager with a track record of shipping, now building with AI. Case studies, projects, and learning notes.",
};

const nav = [
  { href: "/case-studies", label: "Case Studies" },
  { href: "/projects", label: "AI Projects" },
  { href: "/notes", label: "Notes" },
  { href: "/about", label: "About" },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
        <header className="mx-auto w-full max-w-3xl flex items-center justify-between px-6 py-6">
          <Link href="/" className="font-semibold tracking-tight">
            Elizabeth
          </Link>
          <nav className="flex gap-5 text-sm text-zinc-600 dark:text-zinc-400">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-zinc-900 dark:hover:text-zinc-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </header>
        <main className="mx-auto w-full max-w-3xl flex-1 px-6 pb-24">
          {children}
        </main>
        <footer className="mx-auto w-full max-w-3xl border-t border-zinc-200 px-6 py-8 text-sm text-zinc-500 dark:border-zinc-800">
          © {new Date().getFullYear()} Elizabeth · Built with Next.js — by me, with
          AI as my pair programmer.
        </footer>
      </body>
    </html>
  );
}
