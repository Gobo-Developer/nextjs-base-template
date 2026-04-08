import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Base Web Moderna",
    template: "%s | Base Web",
  },
  description:
    "Plantilla web moderna reutilizable con Next.js, optimizada para rendimiento, diseño y escalabilidad.",
  keywords: [
    "nextjs template",
    "landing page",
    "web moderna",
    "plantilla web",
    "desarrollo web",
  ],
  authors: [{ name: "Tu Empresa" }],
  creator: "Tu Empresa",

  openGraph: {
    title: "Base Web Moderna",
    description:
      "Plantilla reutilizable para crear páginas web modernas con Next.js.",
    url: "https://tusitio.com",
    siteName: "Base Web",
    images: [
      {
        url: "https://tusitio.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Base Web",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Base Web Moderna",
    description:
      "Plantilla moderna y reutilizable con Next.js.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}