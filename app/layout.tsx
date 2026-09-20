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
  title: "Elizabeth Klamm — Technical Project Manager & AI Builder",
  description:
    "Technical Project Manager with 5+ years leading enterprise cloud migrations, SAP integrations, and data platform initiatives — now building with AI.",
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
      <body className="min-h-full flex flex-col bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
        <header className="sticky top-0 z-10 border-b border-zinc-100 bg-white/80 backdrop-blur dark:border-zinc-900 dark:bg-zinc-950/80">
          <div className="mx-auto flex w-full max-w-4xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-2xl font-extrabold tracking-tight">
              Elizabeth{" "}
              <span className="text-sky-700 dark:text-sky-400">
                Klamm
              </span>
            </Link>
            <nav className="flex gap-5 text-sm font-medium text-zinc-600 dark:text-zinc-400">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-sky-600 dark:hover:text-sky-400"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <main className="mx-auto w-full max-w-4xl flex-1 px-6 pb-24">
          {children}
        </main>
        <footer className="border-t border-zinc-100 dark:border-zinc-900">
          <div className="mx-auto flex w-full max-w-4xl flex-wrap items-center justify-between gap-3 px-6 py-8 text-sm text-zinc-500">
            <span>© {new Date().getFullYear()} Elizabeth Klamm</span>
            <span>
              Built with Next.js — by me, with AI as my pair programmer.
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
