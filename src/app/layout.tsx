import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/site/Navbar";

export const metadata: Metadata = {
  title: "Gleric Studio — Premium websites voor Nederlandse bedrijven",
  description:
    "Gleric Studio bouwt snelle, moderne en conversiegerichte websites voor ambitieuze Nederlandse bedrijven. Vaste prijs. Oplevering in 2–5 weken.",
  openGraph: {
    title: "Gleric Studio",
    description: "Premium websites voor Nederlandse bedrijven die opvallen.",
    locale: "nl_NL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
