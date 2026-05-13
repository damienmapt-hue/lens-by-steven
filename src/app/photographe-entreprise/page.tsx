import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
    title: "Photographe d'Entreprise à Auch (Gers) | Steven Dufour",
    description: "Photographie corporate et d'entreprise à Auch, Gers (32). Reportages, portraits d'équipe, photos de locaux et produits. Steven Dufour valorise l'image de marque des TPE et PME d'Occitanie.",
    alternates: { canonical: "https://www.lensbysteven.fr/photographe-entreprise" },
    openGraph: {
        title: "Photographe d'Entreprise à Auch (Gers) | Steven Dufour",
        description: "Reportages corporate, portraits d'équipe, photos de locaux à Auch et dans le Gers. Valorisez votre image de marque avec des visuels professionnels.",
        url: "https://www.lensbysteven.fr/photographe-entreprise",
        images: [{ url: "/portfolio/entreprise-bureau.jpg", width: 1200, height: 630, alt: "Photographe entreprise Auch — Steven Dufour" }],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Photographie d'Entreprise et Corporate",
    "provider": { "@id": "https://www.lensbysteven.fr" },
    "description": "Photographie corporate à Auch : reportages d'entreprise, portraits d'équipe, photos de locaux et produits pour TPE, PME et commerces du Gers.",
    "areaServed": { "@type": "AdministrativeArea", "name": "Gers, Occitanie" },
    "url": "https://www.lensbysteven.fr/photographe-entreprise",
};

export default function PhotographeEntreprisePage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <ServicePageLayout
                heroSrc="/portfolio/entreprise-bureau.jpg"
                heroAlt="Photographe d'entreprise à Auch — reportage corporate Steven Dufour"
                badge="Entreprises & Commerces · Auch, Gers"
                h1="Photographe d'Entreprise à Auch"
                intro="Des visuels professionnels et percutants pour valoriser votre image de marque. Reportages, portraits d'équipe, locaux — sur mesure pour les entreprises du Gers."
                body={[
                    "Votre image professionnelle commence par vos photos. Que ce soit pour votre site web, vos réseaux sociaux, vos supports de communication ou vos appels d'offres, des visuels de qualité font la différence. Je travaille avec les TPE, PME et commerces du Gers pour leur fournir du contenu photo professionnel adapté à leurs besoins.",
                    "Chaque mission est préparée en amont : échanges sur vos objectifs, repérage des lieux, identification des visuels prioritaires. Vous recevez un livrable clé en main, utilisable immédiatement sur tous vos canaux de communication.",
                ]}
                bullets={[
                    "Reportages d'entreprise : locaux, ambiance de travail, équipes en action",
                    "Portraits corporate individuels et de groupe pour dirigeants et équipes",
                    "Photos de locaux, boutiques, showrooms et espaces professionnels",
                    "Photographie de produits et visuels pour e-commerce",
                    "Intervention dans tout le Gers (32) et les départements voisins",
                ]}
                photos={[
                    { src: "/portfolio/entreprise-bureau.jpg", alt: "Reportage entreprise Auch — photographe Steven Dufour" },
                    { src: "/portfolio/entreprise-entree.jpg", alt: "Architecture d'entreprise Auch — Steven Dufour" },
                    { src: "/portfolio/entreprise-salon.jpg", alt: "Locaux professionnels Gers — Steven Dufour Photography" },
                    { src: "/portfolio/portrait-coiffeur.jpeg", alt: "Portrait artisan coiffeur Auch — Steven Dufour" },
                ]}
                faq={[
                    {
                        q: "Quel type de contenu pouvez-vous réaliser pour une entreprise ?",
                        a: "Je réalise des reportages d'entreprise complets : photos de locaux et d'ambiance, portraits de dirigeants et d'équipes, photos de produits, couverture d'événements d'entreprise (séminaires, inaugurations, conférences).",
                    },
                    {
                        q: "Intervenez-vous dans tout le Gers ?",
                        a: "Oui, j'interviens dans tout le Gers (32) et les départements voisins : Haute-Garonne (31), Hautes-Pyrénées (65), Lot-et-Garonne (47). Les frais de déplacement sont inclus pour les missions dans un rayon de 50 km autour d'Auch.",
                    },
                    {
                        q: "Combien de temps dure une mission corporate ?",
                        a: "Une demi-journée suffit pour un reportage standard (locaux + portraits d'équipe). Pour des projets plus complets, je propose des formules à la journée entière adaptées à vos besoins.",
                    },
                    {
                        q: "Avez-vous de l'expérience avec les commerces et artisans ?",
                        a: "Oui, j'ai travaillé avec de nombreux commerces et artisans du Gers. Je comprends vos contraintes d'activité et m'adapte pour intervenir aux moments les plus opportuns.",
                    },
                ]}
            />
        </>
    );
}
