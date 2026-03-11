import type { Metadata } from "next";
import { Bodoni_Moda, Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import PageLoader from "@/components/PageLoader";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  display: 'swap',
});
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: 'swap',
});
const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Lens By Steven | Photographe Professionnel à Auch & Gers",
  description: "Steven Dufour Photography. Photographe professionnel à Auch, Gers (32). Spécialiste portraits, sport, entreprises et événementiel en Occitanie.",
  keywords: ["Photographe Auch", "Photographe Gers", "Photographe Occitanie", "Photographie Sportive Auch", "Portraitiste Auch", "Photographe Entreprise Gers", "Steven Dufour"],
  alternates: {
    canonical: "https://lensbysteven.fr",
  },
  openGraph: {
    title: "Lens By Steven | Photographe Professionnel à Auch & Gers",
    description: "Steven Dufour Photography. Photographe professionnel à Auch, Gers (32). Spécialiste portraits, sport, entreprises et événementiel en Occitanie.",
    url: "https://lensbysteven.fr",
    siteName: "Lens By Steven",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/portfolio/basketball-profile.jpg",
        width: 1200,
        height: 630,
        alt: "Lens By Steven — Photographe Professionnel à Auch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lens By Steven | Photographe Professionnel à Auch",
    description: "Photographe à Auch, Occitanie — sport, portrait, entreprise, événementiel.",
    images: ["/portfolio/basketball-profile.jpg"],
  },
  metadataBase: new URL("https://lensbysteven.fr"),
  icons: {
    icon: [
      { url: "/icon.png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-icon.png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Lens By Steven",
    "image": "https://lensbysteven.fr/portfolio/basketball-profile.jpg",
    "@id": "https://lensbysteven.fr",
    "url": "https://lensbysteven.fr",
    "telephone": "+33600000000", // À mettre à jour si nécessaire
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Auch",
      "postalCode": "32000",
      "addressRegion": "Occitanie",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.6465,
      "longitude": 0.5841
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "19:00"
    },
    "sameAs": [
      // Ajouter les réseaux sociaux ici
    ]
  };

  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${bodoni.variable} ${cormorant.variable} ${jost.variable} font-sans bg-dark text-white antialiased`}
      >
        <PageLoader />
        <SmoothScrollProvider>
          {/* Grain Texture Overlay */}
          <div
            className="fixed inset-0 z-[9997] pointer-events-none opacity-[0.02] mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundSize: "150px 150px",
            }}
          />

          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
