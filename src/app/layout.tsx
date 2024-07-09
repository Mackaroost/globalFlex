import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@fortawesome/fontawesome-svg-core/styles.css'; // Estilos de Font Awesome
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; // Di a Font Awesome que no inyecte automáticamente el CSS

import '../lib/fontawesone'; 





const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GlobalFlex",
  description: "Logistica App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {children}
      </body>
    </html>
  );
}
