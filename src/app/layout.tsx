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
  title: "Photographe Professionnel à Auch (Gers) | Steven Dufour",
  description: "Steven Dufour, photographe professionnel à Auch, Gers (32). Spécialisé en photographie sportive, portraits, entreprises et événementiel en Occitanie. Devis gratuit.",
  keywords: ["Photographe Auch", "Photographe Gers", "Photographe Occitanie", "Photographie Sportive Auch", "Portrait Auch", "Photographe Entreprise Gers", "Photographe Événementiel Auch", "Steven Dufour"],
  alternates: {
    canonical: "https://www.lensbysteven.fr",
  },
  openGraph: {
    title: "Photographe Professionnel à Auch (Gers) | Steven Dufour",
    description: "Steven Dufour, photographe à Auch, Gers (32). Sport, portrait, entreprise et événementiel en Occitanie. Découvrez le portfolio et contactez-moi pour votre projet.",
    url: "https://www.lensbysteven.fr",
    siteName: "Lens By Steven",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/portfolio/basketball-profile.jpg",
        width: 1200,
        height: 630,
        alt: "Steven Dufour — Photographe Professionnel à Auch, Gers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Photographe Professionnel à Auch (Gers) | Steven Dufour",
    description: "Sport, portrait, entreprise, événementiel — photographe professionnel basé à Auch (Gers), Occitanie.",
    images: ["/portfolio/basketball-profile.jpg"],
  },
  metadataBase: new URL("https://www.lensbysteven.fr"),
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
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "name": "Lens By Steven",
    "image": "https://www.lensbysteven.fr/portfolio/basketball-profile.jpg",
    "@id": "https://www.lensbysteven.fr",
    "url": "https://www.lensbysteven.fr",
    "telephone": "+33672213948",
    "email": "sd.photo32@gmail.com",
    "description": "Photographe professionnel à Auch, Gers (32). Spécialisé en photographie sportive, portraits, entreprises et événementiel en Occitanie.",
    "address": {
      "@type": "PostalAddress",
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
    "areaServed": [
      { "@type": "City", "name": "Auch" },
      { "@type": "AdministrativeArea", "name": "Gers" },
      { "@type": "AdministrativeArea", "name": "Occitanie" }
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "19:00"
    },
    "sameAs": [
      "https://www.instagram.com/lens.bysteve/"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "3",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Morganne F." },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "L'expérience du shooting photo était excellente, une super ambiance. Steven m'a mise à l'aise directement. Les photos sont juste magnifiques !"
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Maelys G." },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "On a énormément rigolé, l'ambiance était super conviviale. Les photos sont incroyables, je suis trop contente du résultat !"
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Guiming L." },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "Quand je fais appel à Steven, tout est clair et efficace. Le rendu est propre et de qualité, et les tarifs sont accessibles."
      }
    ]
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Steven Dufour",
    "jobTitle": "Photographe Professionnel",
    "url": "https://www.lensbysteven.fr",
    "image": "https://www.lensbysteven.fr/images/steven-portrait.jpg",
    "worksFor": { "@id": "https://www.lensbysteven.fr" },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Auch",
      "postalCode": "32000",
      "addressRegion": "Occitanie",
      "addressCountry": "FR"
    },
    "sameAs": [
      "https://www.instagram.com/lens.bysteve/"
    ]
  };

  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
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
