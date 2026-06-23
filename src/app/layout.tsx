import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Sidebar from "./components/sidebar";
import Footer from "./components/footer";

import ParticlesBackground from "./components/ParticlesBackground";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rafael | Full Stack | Portifolio",
  description: "Portifolio do Rafael, Desenvolvedor full stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-shadow-lg">

        <div className="fixed inset-0 -z-10 bg-gradient-portfolio">
          <ParticlesBackground />
        </div>
        
        <main style={{ position: "relative", zIndex: 1,}}>
          {children}

          <Sidebar />
        </main>

        <footer style={{ position: "relative", zIndex: 1 }}>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
