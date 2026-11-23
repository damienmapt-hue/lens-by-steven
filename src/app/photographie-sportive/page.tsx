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
                heroSrc="/portfolio/series/sport/sport-40.jpg"
                heroPosition="50% 55%"
                priceFrom="Dès 25 €"
                galleryHref="/portfolio/sport"
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
                    { src: "/portfolio/series/sport/sport-40.jpg", alt: "Joueur de football en plein coup de pied sous les projecteurs — Steven Dufour, photographe sportif à Auch" },
                    { src: "/portfolio/series/sport/sport-34.jpg", alt: "Le gardien de but, sourire avant le match — photographe sportif Gers" },
                    { src: "/portfolio/series/sport/sport-35.jpg", alt: "Le plongeon du gardien — photographie sportive à Auch, Steven Dufour" },
                    { src: "/portfolio/series/sport/sport-38.jpg", alt: "Duel au milieu du terrain — photographe sportif Gers, Steven Dufour" },
                    { src: "/portfolio/series/sport/sport-39.jpg", alt: "Le ballon disputé — photographie sportive Auch, Steven Dufour" },
                    { src: "/portfolio/series/sport/sport-36.jpg", alt: "La déception, mains sur le visage — reportage sportif Gers, Steven Dufour" },
                    { src: "/portfolio/series/sport/sport-37.jpg", alt: "L'équipe de foot au complet — photo d'équipe à Auch, Steven Dufour" },
                    { src: "/portfolio/series/sport/sport-41.jpg", alt: "L'équipe en bleu avant le match — photographe sportif Occitanie, Steven Dufour" },
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
