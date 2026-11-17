import type { Metadata } from "next";
import { Noto_Serif, Manrope } from "next/font/google";
import "./globals.css";
import CursorCopeau from "@/components/CursorCopeau";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto-serif",
  display: "swap",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Atelier Marchand | Ébéniste Menuisier depuis 1948 | Uzès",
  description:
    "Atelier Marchand, ébéniste menuisier de 3e génération à Uzès dans le Gard. Meubles sur mesure, restauration et agencement intérieur. Sur commande uniquement depuis 1948.",
  keywords: [
    "ébéniste",
    "menuisier",
    "Uzès",
    "Gard",
    "meubles sur mesure",
    "restauration",
    "agencement intérieur",
    "artisan",
    "bois",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${notoSerif.variable} ${manrope.variable}`}>
      <body className="font-sans antialiased bg-surface text-on-surface">
        <CursorCopeau />
        {children}
      </body>
    </html>
  );
}
