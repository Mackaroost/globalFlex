
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import "../lib/fontawesone";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GlobalFlex | Soluciones de Logística y Distribución",
  description:
    "GlobalFlex ofrece servicios de logística, transporte y distribución eficientes para empresas de todos los tamaños. Optimiza tus envíos con nuestra plataforma moderna y confiable.",
  keywords: [
    "logística",
    "envíos",
    "transporte",
    "distribución",
    "paquetería",
    "supply chain",
    "GlobalFlex",
  ],
  authors: [{ name: "GlobalFlex Team" }],
  openGraph: {
    title: "GlobalFlex | Soluciones de Logística y Distribución",
    description:
      "Servicios de logística, transporte y distribución a medida. Rápidos, confiables y profesionales.",
    url: "https://globalflex.com", // cámbialo por tu dominio real
    siteName: "GlobalFlex",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GlobalFlex - Servicios de Logística",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GlobalFlex | Soluciones de Logística y Distribución",
    description:
      "Servicios de logística moderna para empresas. Optimiza tu cadena de suministro con GlobalFlex.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
