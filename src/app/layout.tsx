import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Ivan Tang | Portfolio & Blog",
  description: "Welcome to my personal website, where I share my work, projects, and blog posts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>My Portfolio</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="text-blue-500 hover:text-blue-700">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-blue-500 hover:text-blue-700">
                  About
                </a>
              </li>
              <li>
                <a href="/blog" className="text-blue-500 hover:text-blue-700">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="text-blue-500 hover:text-blue-700">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <main>{children}</main>

        <footer>
          <p>© 2025 My Portfolio. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
