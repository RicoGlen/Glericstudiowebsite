import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gleric Studio | Premium websites voor moderne bedrijven",
  description:
    "Gleric Studio bouwt moderne, snelle en professionele websites voor Nederlandse ondernemers.",
  keywords: ["webdesign", "website laten maken", "webbureau Nederland", "Next.js", "Gleric Studio"],
  authors: [{ name: "Gleric Studio" }],
  openGraph: {
    title: "Gleric Studio | Premium websites voor moderne bedrijven",
    description:
      "Gleric Studio bouwt moderne, snelle en professionele websites voor Nederlandse ondernemers.",
    url: "https://glericstudio.nl",
    siteName: "Gleric Studio",
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gleric Studio | Premium websites voor moderne bedrijven",
    description:
      "Gleric Studio bouwt moderne, snelle en professionele websites voor Nederlandse ondernemers.",
  },
  metadataBase: new URL("https://glericstudio.nl"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
