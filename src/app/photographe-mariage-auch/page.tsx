import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
    title: "Photographe Mariage à Auch (Gers) | Steven Dufour",
    description: "Photographe de mariage professionnel à Auch et dans le Gers (32). Steven Dufour immortalise votre jour J avec discrétion et émotion. Devis gratuit pour votre mariage en Occitanie.",
    alternates: { canonical: "https://www.lensbysteven.fr/photographe-mariage-auch" },
    openGraph: {
        title: "Photographe Mariage à Auch (Gers) | Steven Dufour",
        description: "Photographe de mariage à Auch, Gers (32). Des souvenirs authentiques et émouvants de votre jour J en Occitanie.",
        url: "https://www.lensbysteven.fr/photographe-mariage-auch",
        images: [{ url: "/portfolio/evenement-sourire.jpg", width: 1200, height: 630, alt: "Photographe mariage Auch — Steven Dufour" }],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Photographie de Mariage",
    "provider": { "@id": "https://www.lensbysteven.fr" },
    "description": "Photographie de mariage professionnelle à Auch et dans le Gers. Reportage complet de votre jour J avec discrétion et sensibilité.",
    "areaServed": { "@type": "AdministrativeArea", "name": "Gers, Occitanie" },
    "url": "https://www.lensbysteven.fr/photographe-mariage-auch",
};

export default function PhotographeMariagePage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <ServicePageLayout
                heroSrc="/portfolio/evenement-sourire.jpg"
                heroAlt="Photographe mariage à Auch dans le Gers — Steven Dufour"
                badge="Mariage · Auch, Gers"
                h1="Photographe Mariage à Auch"
                intro="Votre jour J mérite des photos qui racontent votre histoire. Des images authentiques, émouvantes et intemporelles de votre mariage dans le Gers et en Occitanie."
                body={[
                    "Photographe de mariage basé à Auch, j'accompagne les mariés avec discrétion tout au long de leur journée — des préparatifs à la soirée. Mon approche est fondée sur le reportage naturel : capturer les vrais sourires, les larmes d'émotion, les regards complices, sans mettre en scène l'instant.",
                    "Chaque mariage est unique. Avant votre jour J, nous échangeons sur votre vision, le lieu, le programme et les moments qui comptent le plus pour vous. Je me déplace dans tout le Gers (32), les Hautes-Pyrénées (65), la Haute-Garonne (31) et toute l'Occitanie.",
                ]}
                bullets={[
                    "Reportage complet : préparatifs, cérémonie, vin d'honneur, soirée",
                    "Style naturel et reportage — aucune mise en scène forcée",
                    "Livraison d'une galerie privée en haute résolution",
                    "Réunion de préparation incluse avant le mariage",
                    "Déplacements dans tout le Gers et l'Occitanie",
                ]}
                photos={[
                    { src: "/portfolio/evenement-sourire.jpg", alt: "Émotion de mariage dans le Gers — Steven Dufour" },
                    { src: "/portfolio/evenement-mains.jpg", alt: "Détail mains mariage Auch — Steven Dufour" },
                    { src: "/portfolio/evenement-bouteilles-parasol.jpg", alt: "Vin d'honneur mariage Auch — Steven Dufour" },
                    { src: "/portfolio/event-table.jpg", alt: "Décoration mariage dans le Gers — Steven Dufour" },
                    { src: "/portfolio/portrait-duo-amies.jpeg", alt: "Portrait duo mariage Auch — Steven Dufour" },
                    { src: "/portfolio/evenement-conference-nb.jpg", alt: "Cérémonie mariage Auch — Steven Dufour" },
                ]}
                faq={[
                    {
                        q: "Combien de photos sont livrées pour un mariage ?",
                        a: "Pour un reportage mariage complet (journée entière), je livre entre 400 et 600 photos sélectionnées et retouchées, remises via une galerie privée en ligne sous 3 à 4 semaines.",
                    },
                    {
                        q: "Couvrez-vous les mariages en dehors d'Auch ?",
                        a: "Oui, je me déplace dans tout le Gers (32), la Haute-Garonne (31), les Hautes-Pyrénées (65) et toute l'Occitanie. Pour les mariages à plus de 100 km, des frais de déplacement peuvent s'appliquer.",
                    },
                    {
                        q: "Proposez-vous une formule demi-journée ?",
                        a: "Oui, je propose des formules demi-journée (cérémonie + vin d'honneur) et journée complète. Contactez-moi pour un devis personnalisé selon votre programme.",
                    },
                    {
                        q: "Comment réserver sa date de mariage ?",
                        a: "Contactez-moi dès que possible via le formulaire ou par email. Les dates se réservent souvent 6 à 12 mois à l'avance. Un acompte confirme la réservation.",
                    },
                    {
                        q: "Votre style est-il plutôt classique ou reportage ?",
                        a: "Mon style privilégie le reportage naturel : je capture les moments vrais sans trop diriger. Je réalise aussi quelques portraits de couple guidés pour avoir de belles photos posées en complément.",
                    },
                ]}
            />
        </>
    );
}
