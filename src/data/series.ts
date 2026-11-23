// Fichier généré à partir de la sélection Lightroom. Une série = un chapitre du portfolio.

export interface Photo {
    id: string
    src: string
    w: number
    h: number
    caption: string
    alt: string
    series: SeriesSlug
}

export type SeriesSlug = 'mariage' | 'scene' | 'sport' | 'portraits'

export interface Series {
    slug: SeriesSlug
    index: string
    title: string
    kicker: string
    tagline: string
    description: string
    seoTitle: string
    seoDescription: string
    coverPosition: string
    photos: Photo[]
    preview: Photo[]
}

function p(series: SeriesSlug, label: string, n: number, src: string, w: number, h: number, caption: string): Photo {
    return { id: `${series}-${n}`, src, w, h, caption, series, alt: `${caption} — ${label}, Steven Dufour photographe à Auch` }
}

const mk = (slug: SeriesSlug, label: string, rows: [string, number, number, string][]): Photo[] =>
    rows.map(([src, w, h, caption], i) => p(slug, label, i + 1, src, w, h, caption))

const mariagePhotos = mk("mariage", "mariage", [
    ["/portfolio/series/mariage/mariage-24.jpg", 1333, 2000, "Le baiser, près de la voiture de collection"],
    ["/portfolio/series/mariage/mariage-27.jpg", 1333, 2000, "Sous le voile"],
    ["/portfolio/series/mariage/mariage-28.jpg", 1333, 2000, "Sous le voile, le baiser"],
    ["/portfolio/series/mariage/mariage-26.jpg", 1333, 2000, "Le voile dans le vent"],
    ["/portfolio/series/mariage/mariage-31.jpg", 1332, 2000, "Dans ses bras, en noir et blanc"],
    ["/portfolio/series/mariage/mariage-32.jpg", 1333, 2000, "Main dans la main devant la bâtisse en pierre"],
    ["/portfolio/series/mariage/mariage-25.jpg", 1333, 2000, "Les mains et le bouquet de callas"],
    ["/portfolio/series/mariage/mariage-01.jpg", 1333, 2000, "La mariée, en noir et blanc"],
    ["/portfolio/series/mariage/mariage-13.jpg", 1332, 2000, "Le marié, bouquet en main"],
    ["/portfolio/series/mariage/mariage-14.jpg", 2000, 1333, "Les mariés dans l'escalier"],
    ["/portfolio/series/mariage/mariage-15.jpg", 1333, 2000, "Le couple, simplement"],
    ["/portfolio/series/mariage/mariage-16.jpg", 1333, 2000, "Regards complices"],
    ["/portfolio/series/mariage/mariage-02.jpg", 1333, 2000, "Les mariés et les enfants d'honneur"],
    ["/portfolio/series/mariage/mariage-03.jpg", 1333, 2000, "Un baiser de la famille"],
    ["/portfolio/series/mariage/mariage-19.jpg", 1333, 2000, "Le détail de la montre"],
    ["/portfolio/series/mariage/mariage-17.jpg", 1333, 2000, "Un invité photographe"],
    ["/portfolio/series/mariage/mariage-23.jpg", 1333, 2000, "La mariée dans la voiture de collection"],
    ["/portfolio/series/mariage/mariage-22.jpg", 2000, 1333, "Les témoins autour de la voiture"],
    ["/portfolio/series/mariage/mariage-21.jpg", 2000, 1333, "Le cortège devant la voiture"],
    ["/portfolio/series/mariage/mariage-20.jpg", 2000, 1333, "Toute la famille réunie"],
    ["/portfolio/series/mariage/mariage-29.jpg", 1333, 2000, "Promenade dans le parc"],
    ["/portfolio/series/mariage/mariage-30.jpg", 1333, 2000, "Main dans la main en plein champ"],
    ["/portfolio/series/mariage/mariage-18.jpg", 1333, 2000, "L'ouverture de bal"],
]);

const scenePhotos = mk("scene", "concert et événement", [
    ["/portfolio/series/scene/scene-09.jpg", 1333, 2000, "Guitariste dans la fumée colorée"],
    ["/portfolio/series/scene/scene-10.jpg", 1333, 2000, "La chanteuse et les projecteurs"],
    ["/portfolio/series/scene/scene-11.jpg", 1333, 2000, "Voix et lumières"],
    ["/portfolio/series/scene/scene-07.jpg", 1333, 2000, "Chanteur au micro, lumière violette"],
    ["/portfolio/series/scene/scene-08.jpg", 1333, 2000, "Guitare sur scène"],
    ["/portfolio/series/scene/scene-05.jpg", 1333, 2000, "Élection de Miss, la lauréate sur scène"],
    ["/portfolio/series/scene/scene-06.jpg", 2000, 1333, "Miss et dauphine, bouquets en main"],
    ["/portfolio/series/scene/scene-04.jpg", 1333, 2000, "Le drapeau au vent"],
    ["/portfolio/series/scene/scene-12.jpg", 2000, 1333, "Mains jointes, bracelets de festival"],
]);

const sportPhotos = mk("sport", "sport", [
    ["/portfolio/series/sport/sport-40.jpg", 1333, 2000, "Un coup de pied sous les projecteurs"],
    ["/portfolio/series/sport/sport-34.jpg", 1600, 2000, "Le gardien, sourire avant le match"],
    ["/portfolio/series/sport/sport-35.jpg", 1333, 2000, "Le plongeon du gardien"],
    ["/portfolio/hero-basketball-bw.jpg", 682, 1024, "Rebond sous le panier"],
    ["/portfolio/series/sport/sport-38.jpg", 1333, 2000, "Duel au milieu du terrain"],
    ["/portfolio/series/sport/sport-39.jpg", 1333, 2000, "Le ballon disputé"],
    ["/portfolio/sport-three-players.jpeg", 1366, 2048, "Trois joueurs avant le coup d'envoi"],
    ["/portfolio/series/sport/sport-36.jpg", 1333, 2000, "La déception, mains sur le visage"],
    ["/portfolio/basketball-profile.jpg", 682, 1024, "Le numéro 10"],
    ["/portfolio/series/sport/sport-33.jpg", 1333, 2000, "Course en noir et blanc"],
    ["/portfolio/sport-u16-player.jpeg", 1366, 2048, "Jeune espoir U16"],
    ["/portfolio/series/sport/sport-37.jpg", 2000, 1333, "L'équipe de foot au complet"],
    ["/portfolio/sport-boxing.jpeg", 1066, 1600, "À l'entraînement, boxe"],
    ["/portfolio/team-huddle.jpg", 1024, 682, "Le cercle d'équipe"],
    ["/portfolio/series/sport/sport-41.jpg", 2000, 1333, "L'équipe en bleu"],
    ["/portfolio/basketball-back.jpg", 682, 1024, "Concentration avant le match"],
]);

const portraitsPhotos = mk("portraits", "portrait et entreprise", [
    ["/portfolio/portrait-rose-doree.jpeg", 1366, 2048, "La rose dorée"],
    ["/portfolio/portrait-fourrure.jpeg", 1366, 2048, "Élégance en fourrure"],
    ["/portfolio/portrait-duo-amies.jpeg", 1366, 2048, "Complicité"],
    ["/portfolio/portrait-allonge-nb.jpg", 683, 1024, "Sérénité monochrome"],
    ["/portfolio/portrait-wicker-chair.jpg", 683, 1024, "Le fauteuil en osier"],
    ["/portfolio/portrait-coiffeur.jpeg", 1279, 1600, "Le coiffeur, ciseaux en main"],
    ["/portfolio/entreprise-bureau.jpg", 683, 1024, "Espace de travail"],
    ["/portfolio/entreprise-entree.jpg", 683, 1024, "Façade vitrée"],
    ["/portfolio/entreprise-salon.jpg", 683, 1024, "Salon d'attente"],
]);

export const series: Series[] = [
    {
        slug: "mariage",
        index: "01",
        title: "Mariages",
        kicker: "Reportages",
        tagline: "Les regards, les mains, les silences. Tout ce qui reste du jour J.",
        description: "Du premier regard à l'ouverture de bal : un reportage discret et sincère, pensé pour que vous retrouviez l'émotion de votre journée, pas seulement ses images.",
        seoTitle: "Photographe mariage à Auch et dans le Gers",
        seoDescription: "Reportages de mariage dans le Gers et en Occitanie par Steven Dufour : cérémonie, couple, famille, soirée. Découvrez la série.",
        coverPosition: "50% 30%",
        photos: mariagePhotos,
        preview: [0, 1, 4].map((i) => mariagePhotos[i]),
    },
    {
        slug: "scene",
        index: "02",
        title: "Sous les projecteurs",
        kicker: "Concerts & événements",
        tagline: "Concerts, élections, soirées : la lumière change, l'émotion reste.",
        description: "Photographier une scène, c'est saisir l'instant où l'artiste lâche tout. Concerts, élections de Miss, soirées : des images qui gardent l'énergie de la salle.",
        seoTitle: "Photographe concert et événementiel à Auch",
        seoDescription: "Photographie de concerts, spectacles et événements en Occitanie par Steven Dufour. Découvrez la série.",
        coverPosition: "50% 40%",
        photos: scenePhotos,
        preview: [0, 1, 3, 5].map((i) => scenePhotos[i]),
    },
    {
        slug: "sport",
        index: "03",
        title: "Sur le terrain",
        kicker: "Sport",
        tagline: "Football, basket, boxe : l'effort, le duel, la joie.",
        description: "Le sport vit en une fraction de seconde. Des matchs, des entraînements et des portraits d'équipe, pour garder l'intensité d'une saison.",
        seoTitle: "Photographe sportif à Auch et dans le Gers",
        seoDescription: "Photographie sportive (football, basket, boxe) dans le Gers par Steven Dufour : matchs, entraînements, portraits d'équipe.",
        coverPosition: "50% 35%",
        photos: sportPhotos,
        preview: [0, 11, 3].map((i) => sportPhotos[i]),
    },
    {
        slug: "portraits",
        index: "04",
        title: "Portraits & Entreprise",
        kicker: "Studio & lieux",
        tagline: "Des visages et des lieux, avec une vraie présence.",
        description: "En studio ou chez vous : des portraits qui ressemblent à la personne, et des images d'entreprise qui racontent un lieu de travail.",
        seoTitle: "Photographe portrait et entreprise à Auch",
        seoDescription: "Portraits en studio et photographie d'entreprise à Auch par Steven Dufour. Découvrez la série.",
        coverPosition: "50% 25%",
        photos: portraitsPhotos,
        preview: [0, 1, 2].map((i) => portraitsPhotos[i]),
    },
]

export const getSeries = (slug: string) => series.find((s) => s.slug === slug)
