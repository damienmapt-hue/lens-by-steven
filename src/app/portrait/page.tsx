import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
    title: "Photographe Portrait à Auch (Gers) | Steven Dufour",
    description: "Portraits professionnels et artistiques à Auch, Gers (32). Séances individuelles, en duo, portraits corporate. Steven Dufour révèle votre personnalité avec élégance en Occitanie.",
    alternates: { canonical: "https://www.lensbysteven.fr/portrait" },
    openGraph: {
        title: "Photographe Portrait à Auch (Gers) | Steven Dufour",
        description: "Portraits authentiques et élégants à Auch. Séances individuelles, corporate, artistiques — Steven Dufour, photographe dans le Gers.",
        url: "https://www.lensbysteven.fr/portrait",
        images: [{ url: "/portfolio/portrait-allonge-nb.jpg", width: 1200, height: 630, alt: "Portrait artistique Auch — Steven Dufour" }],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Portraits Authentiques",
    "provider": { "@id": "https://www.lensbysteven.fr" },
    "description": "Portraits professionnels et artistiques à Auch. Séances individuelles, duo, corporate, artistiques.",
    "areaServed": { "@type": "AdministrativeArea", "name": "Gers, Occitanie" },
    "url": "https://www.lensbysteven.fr/portrait",
};

export default function PortraitPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <ServicePageLayout
                heroSrc="/portfolio/portrait-allonge-nb.jpg"
                heroAlt="Portrait artistique noir et blanc à Auch par Steven Dufour photographe"
                badge="Portraits · Auch, Gers"
                h1="Portraits Authentiques à Auch"
                intro="Des portraits naturels, élégants et intemporels qui révèlent ce que vous êtes vraiment. Pour un usage professionnel ou personnel."
                body={[
                    "Chaque séance portrait commence par un échange pour comprendre vos attentes, définir le style et choisir le cadre idéal. Je vous guide tout au long de la séance pour des poses naturelles et des expressions authentiques.",
                    "Que vous soyez entrepreneur, artiste, salarié en quête d'une photo professionnelle ou simplement curieux de vous découvrir à travers l'objectif, je propose des séances sur mesure en extérieur ou en intérieur à Auch et dans le Gers.",
                ]}
                bullets={[
                    "Portraits professionnels pour LinkedIn, CV et communication d'entreprise",
                    "Séances individuelles, en duo ou en groupe",
                    "Portraits artistiques et créatifs en studio ou en extérieur",
                    "Portraits de métier : artisans, commerçants, professions libérales",
                    "Disponible à Auch et dans tout le Gers (32)",
                ]}
                photos={[
                    { src: "/portfolio/portrait-allonge-nb.jpg", alt: "Portrait artistique noir et blanc à Auch — Steven Dufour" },
                    { src: "/portfolio/portrait-wicker-chair.jpg", alt: "Portrait professionnel à Auch — Steven Dufour" },
                    { src: "/portfolio/portrait-rose-doree.jpeg", alt: "Portrait artistique rose dorée — photographe Auch" },
                    { src: "/portfolio/portrait-coiffeur.jpeg", alt: "Portrait métier coiffeur Auch — Steven Dufour" },
                    { src: "/portfolio/portrait-duo-amies.jpeg", alt: "Portrait duo à Auch — Steven Dufour Photography" },
                    { src: "/portfolio/portrait-fourrure.jpeg", alt: "Portrait mode élégance Auch — Steven Dufour" },
                ]}
                faq={[
                    {
                        q: "Comment se déroule une séance portrait à Auch ?",
                        a: "On échange d'abord sur vos attentes et le style souhaité, puis la séance dure généralement 1h à 2h. Je vous guide tout au long pour des poses naturelles et des résultats qui vous ressemblent.",
                    },
                    {
                        q: "Faut-il un studio ou peut-on faire des portraits en extérieur ?",
                        a: "Les deux sont possibles. Je propose des séances en extérieur (parcs, rues, espaces naturels autour d'Auch) ou en intérieur selon vos préférences et le rendu souhaité.",
                    },
                    {
                        q: "Combien de photos retouchées sont incluses ?",
                        a: "La prestation inclut 20 à 50 photos sélectionnées et retouchées livrées en haute résolution, dans un espace de téléchargement privé sous 10 jours.",
                    },
                    {
                        q: "Puis-je utiliser les photos pour mon profil LinkedIn ou mon site web ?",
                        a: "Oui, vous recevez les fichiers haute résolution libres d'utilisation pour tous vos usages personnels et professionnels : réseaux sociaux, site web, print, etc.",
                    },
                ]}
            />
        </>
    );
}
