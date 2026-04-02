import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cominges-casal.com"),
  alternates: {
    canonical: "/",
  },
  title: "Cominges Casal · Mentoring de Élite para Jóvenes Profesionales",
  description:
    "Estudio de mentoring personalizado para jóvenes que buscan comenzar su carrera en las mejores firmas legales, financieras y del mundo tech. Madrid.",
  keywords:
    "mentoring, coaching carrera, abogados, banca inversión, startups, Madrid, jóvenes profesionales",
  openGraph: {
    title: "Cominges Casal · Mentoring de Élite",
    description:
      "Estudio de mentoring personalizado para jóvenes que buscan comenzar su carrera en las mejores firmas legales, financieras y del mundo tech. Madrid.",
    locale: "es_ES",
    type: "website",
    url: process.env.NEXT_PUBLIC_SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Cominges Casal · Mentoring de Élite",
    description:
      "Estudio de mentoring personalizado para jóvenes que buscan comenzar su carrera en las mejores firmas legales, financieras y del mundo tech. Madrid.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
