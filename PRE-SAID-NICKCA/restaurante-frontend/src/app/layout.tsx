import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sistema de Restaurante",
  description: "Gestión de restaurante",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
      >
        <nav className="bg-blue-600 text-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="font-bold text-xl">
                Restaurante
              </Link>
              <div className="flex gap-6">
                <Link href="/" className="hover:text-blue-200 transition">
                  Dashboard
                </Link>
                <Link href="/platos" className="hover:text-blue-200 transition">
                  Platos
                </Link>
                <Link href="/mesas" className="hover:text-blue-200 transition">
                  Mesas
                </Link>
                <Link href="/pedidos" className="hover:text-blue-200 transition">
                  Pedidos
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
