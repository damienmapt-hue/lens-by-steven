import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
    title: "Photographe Sportif à Auch (Gers) | Steven Dufour",
    description: "Photographe sportif professionnel à Auch et dans le Gers (32). Sport collectif, basketball, boxe, compétitions. Steven Dufour immortalise l'action et l'émotion du sport en Occitanie.",
    alternates: { canonical: "https://www.lensbysteven.fr/photographie-sportive" },
    openGraph: {
        title: "Photographe Sportif à Auch (Gers) | Steven Dufour",
        description: "Photographie sportive professionnelle à Auch, Gers. Basketball, boxe, sport collectif — l'action capturée avec précision.",
        url: "https://www.lensbysteven.fr/photographie-sportive",
        images: [{ url: "/portfolio/sport-action-duo-nb.jpg", width: 1200, height: 630, alt: "Photographe sportif Auch — Steven Dufour" }],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Photographie Sportive",
    "provider": { "@id": "https://www.lensbysteven.fr" },
    "description": "Reportages et couvertures sportives professionnelles à Auch et dans le Gers. Basketball, boxe, sport collectif et individuel.",
    "areaServed": { "@type": "AdministrativeArea", "name": "Gers, Occitanie" },
    "url": "https://www.lensbysteven.fr/photographie-sportive",
};

export default function PhotographieSportivePage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <ServicePageLayout
                heroSrc="/portfolio/sport-action-duo-nb.jpg"
                heroAlt="Photographe sportif à Auch — action basketball par Steven Dufour"
                badge="Photographe Sportif · Auch, Gers"
                h1="Photographie Sportive à Auch"
                intro="L'intensité du mouvement, la puissance du geste, l'émotion brute de la victoire — capturés avec précision à Auch et dans tout le Gers."
                body={[
                    "Basé à Auch, je couvre les rencontres sportives avec un équipement professionnel adapté aux conditions de faible luminosité et à l'action rapide. Chaque photo raconte une histoire : un dribble décisif, un effort collectif, une célébration.",
                    "Que vous soyez un club sportif, une fédération, un athlète ou un organisateur d'événement, je m'adapte à vos besoins pour livrer des images qui valorisent votre discipline et vos athlètes. Je me déplace dans tout le Gers et l'Occitanie.",
                ]}
                bullets={[
                    "Basketball, football, rugby, boxe, athlétisme et tous sports collectifs",
                    "Compétitions amateurs et professionnelles dans le Gers (32)",
                    "Reportages de matchs, portraits d'athlètes, photos d'équipe",
                    "Livraison en haute résolution sous 10 jours ouvrés",
                    "Déplacements dans toute l'Occitanie",
                ]}
                photos={[
                    { src: "/portfolio/sport-action-duo-nb.jpg", alt: "Action basketball intense à Auch — Steven Dufour" },
                    { src: "/portfolio/team-huddle.jpg", alt: "Sport collectif à Auch — photographe Steven Dufour" },
                    { src: "/portfolio/basketball-back.jpg", alt: "Basketball Auch — Steven Dufour Photography" },
                    { src: "/portfolio/player-walk.jpg", alt: "Joueur de basketball à Auch — Steven Dufour" },
                    { src: "/portfolio/sport-boxing.jpeg", alt: "Boxe à Auch — shooting sportif Steven Dufour" },
                    { src: "/portfolio/sport-goal-drinking.jpeg", alt: "Célébration sportive dans le Gers — Steven Dufour" },
                ]}
                faq={[
                    {
                        q: "Quels sports photographiez-vous à Auch et dans le Gers ?",
                        a: "Je couvre tous types de sports : basketball, football, rugby, boxe, athlétisme, sports de salle et en extérieur. Je me déplace dans tout le Gers (32) et les départements voisins en Occitanie.",
                    },
                    {
                        q: "Combien de photos sont livrées après un reportage sportif ?",
                        a: "En fonction de la durée de l'événement, je livre entre 50 et 200 photos sélectionnées et retouchées en haute résolution, prêtes à l'impression ou à la diffusion numérique.",
                    },
                    {
                        q: "Quel est le délai de livraison des photos ?",
                        a: "Les photos sont livrées dans un délai de 7 à 10 jours ouvrés après le shooting via un espace de téléchargement privé.",
                    },
                    {
                        q: "Pouvez-vous photographier des matchs en soirée ou en salle ?",
                        a: "Oui, je dispose d'un équipement professionnel adapté aux conditions difficiles d'éclairage : salles sportives, matchs en soirée, éclairage artificiel.",
                    },
                ]}
            />
        </>
    );
}
