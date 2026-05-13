import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
    title: "Photographe Événementiel à Auch (Gers) | Steven Dufour",
    description: "Photographe événementiel professionnel à Auch et dans le Gers (32). Galas, conférences, fêtes d'entreprise, événements privés. Steven Dufour couvre vos événements avec discrétion en Occitanie.",
    alternates: { canonical: "https://www.lensbysteven.fr/photographe-evenementiel" },
    openGraph: {
        title: "Photographe Événementiel à Auch (Gers) | Steven Dufour",
        description: "Couverture événementielle à Auch et dans le Gers. Galas, conférences, cocktails, fêtes — des souvenirs visuels inoubliables.",
        url: "https://www.lensbysteven.fr/photographe-evenementiel",
        images: [{ url: "/portfolio/evenement-bouteilles-parasol.jpg", width: 1200, height: 630, alt: "Photographe événementiel Auch — Steven Dufour" }],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Photographie Événementielle",
    "provider": { "@id": "https://www.lensbysteven.fr" },
    "description": "Couverture photo d'événements à Auch et dans le Gers : galas, conférences, cocktails, fêtes d'entreprise, événements associatifs.",
    "areaServed": { "@type": "AdministrativeArea", "name": "Gers, Occitanie" },
    "url": "https://www.lensbysteven.fr/photographe-evenementiel",
};

export default function PhotographeEvenementielPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <ServicePageLayout
                heroSrc="/portfolio/evenement-bouteilles-parasol.jpg"
                heroAlt="Photographe événementiel à Auch — cocktail et reportage par Steven Dufour"
                badge="Événementiel · Auch, Gers"
                h1="Photographe Événementiel à Auch"
                intro="Chaque événement mérite d'être immortalisé. Avec discrétion et sensibilité, je capture l'ambiance, les émotions et les moments clés de vos événements dans le Gers."
                body={[
                    "Qu'il s'agisse d'un gala d'entreprise, d'une conférence, d'un cocktail ou d'une fête associative, je couvre votre événement avec une présence discrète et un regard toujours en éveil. Mon objectif : que vous retrouviez dans vos photos l'ambiance et les émotions vécues ce jour-là.",
                    "Je m'adapte à tous les contextes : intérieur ou extérieur, lumière naturelle ou artificielle, grand rassemblement ou événement intime. Chaque mission fait l'objet d'un briefing en amont pour anticiper les moments forts à ne pas manquer.",
                ]}
                bullets={[
                    "Galas, dîners de gala et soirées de prestige",
                    "Conférences, séminaires et salons professionnels",
                    "Cocktails, inaugurations et événements d'entreprise",
                    "Fêtes associatives, événements culturels et municipaux",
                    "Anniversaires et événements privés dans le Gers",
                ]}
                photos={[
                    { src: "/portfolio/evenement-bouteilles-parasol.jpg", alt: "Cocktail événementiel Auch — Steven Dufour" },
                    { src: "/portfolio/event-table.jpg", alt: "Décoration événementielle Gers — Steven Dufour" },
                    { src: "/portfolio/evenement-mains.jpg", alt: "Détail émotion événement Auch — Steven Dufour" },
                    { src: "/portfolio/evenement-conference-nb.jpg", alt: "Conférence corporate Auch — Steven Dufour" },
                    { src: "/portfolio/evenement-sourire.jpg", alt: "Reportage sourires événement Gers — Steven Dufour" },
                ]}
                faq={[
                    {
                        q: "Quels types d'événements couvrez-vous ?",
                        a: "Je couvre tous types d'événements : galas, cocktails, conférences, séminaires, fêtes d'entreprise, inaugurations, événements associatifs, anniversaires et événements privés à Auch et dans tout le Gers.",
                    },
                    {
                        q: "Comment se passe la préparation avant un événement ?",
                        a: "Avant chaque mission, nous échangeons sur le déroulement de l'événement, les moments clés à ne pas rater, le nombre d'invités et les contraintes logistiques. Cela me permet d'être au bon endroit au bon moment.",
                    },
                    {
                        q: "Combien de photos sont livrées après l'événement ?",
                        a: "Le nombre dépend de la durée de l'événement. Pour une demi-journée, comptez 100 à 150 photos. Pour une journée complète, entre 200 et 400 photos sélectionnées et retouchées.",
                    },
                    {
                        q: "Pouvez-vous intervenir le week-end ou en soirée ?",
                        a: "Oui, la plupart des événements ont lieu en soirée ou le week-end. Je suis disponible selon mes disponibilités — contactez-moi le plus tôt possible pour réserver votre date.",
                    },
                ]}
            />
        </>
    );
}
