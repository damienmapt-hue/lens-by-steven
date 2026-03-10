export type Category = 'tous' | 'sport' | 'portraits' | 'evenementiel' | 'entreprises'

export interface Photo {
    id: string
    src: string
    alt: string
    title?: string // Optionnel: un titre pour le projet
    category: Exclude<Category, 'tous'>
    size: 'sm' | 'md' | 'lg' // contrôle la hauteur dans la masonry
    objectPosition?: string // contrôle le point focal (ex: 'top', 'center', '50% 30%')
}

export const photos: Photo[] = [
    // --- TOP 6 POUR LA VUE "TOUS" (Mix harmonieux) ---
    {
        id: 's2',
        src: '/portfolio/sport-action-duo-nb.jpg',
        alt: 'Action basketball intense en noir et blanc par Steven Dufour',
        title: 'Duel au Panier',
        category: 'sport',
        size: 'md',
        objectPosition: '50% 45%',
    },
    {
        id: 'p1',
        src: '/portfolio/portrait-allonge-nb.jpg',
        alt: 'Portrait artistique noir et blanc par Steven Dufour',
        title: 'Sérénité Monochrome',
        category: 'portraits',
        size: 'md',
        objectPosition: 'center',
    },
    {
        id: 'ev1',
        src: '/portfolio/evenement-bouteilles-parasol.jpg',
        alt: 'Cocktail en extérieur par Steven Dufour',
        title: 'Cocktail Sunset',
        category: 'evenementiel',
        size: 'md',
        objectPosition: 'center',
    },
    {
        id: 's4',
        src: '/portfolio/team-huddle.jpg',
        alt: 'Esprit d\'équipe huddle par Steven Dufour',
        category: 'sport',
        size: 'md',
        objectPosition: '50% 30%',
    },
    {
        id: 'p2',
        src: '/portfolio/portrait-wicker-chair.jpg',
        alt: 'Portrait sur chaise en osier par Steven Dufour',
        category: 'portraits',
        size: 'md',
        objectPosition: 'top',
    },
    {
        id: 's1',
        src: '/portfolio/basketball-back.jpg',
        alt: 'Action basketball par Steven Dufour',
        category: 'sport',
        size: 'md',
        objectPosition: 'center',
    },

    // --- RESTE DES PORTRAITS ---
    {
        id: 'p3',
        src: '/portfolio/portrait-rose-doree.jpeg',
        alt: 'Portrait avec rose dorée par Steven Dufour',
        category: 'portraits',
        size: 'lg',
        objectPosition: 'center',
    },
    {
        id: 'p4',
        src: '/portfolio/portrait-coiffeur.jpeg',
        alt: 'Portrait professionnel coiffeur par Steven Dufour',
        category: 'portraits',
        size: 'sm',
        objectPosition: 'center',
    },
    {
        id: 'p5',
        src: '/portfolio/portrait-duo-amies.jpeg',
        alt: 'Portrait complice noir et blanc par Steven Dufour',
        category: 'portraits',
        size: 'md',
        objectPosition: 'center',
    },
    {
        id: 'p6',
        src: '/portfolio/portrait-fourrure.jpeg',
        alt: 'Portrait élégance et mode par Steven Dufour',
        category: 'portraits',
        size: 'lg',
        objectPosition: 'center',
    },

    // --- RESTE DU SPORT ---
    {
        id: 's3',
        src: '/portfolio/player-walk.jpg',
        alt: 'Marche avant le match par Steven Dufour',
        category: 'sport',
        size: 'md',
        objectPosition: 'center',
    },
    {
        id: 's5',
        src: '/portfolio/sport-boxing.jpeg',
        alt: 'Action boxe intense par Steven Dufour',
        category: 'sport',
        size: 'lg',
        objectPosition: 'center',
    },
    {
        id: 's6',
        src: '/portfolio/sport-goal-drinking.jpeg',
        alt: 'Gardien de but s\'hydratant par Steven Dufour',
        category: 'sport',
        size: 'lg',
        objectPosition: 'center',
    },

    // --- ENTREPRISE ---
    {
        id: 'ent1',
        src: '/portfolio/entreprise-bureau.jpg',
        alt: 'Atmosphère de travail par Steven Dufour',
        category: 'entreprises',
        size: 'lg',
        objectPosition: 'center',
    },
    {
        id: 'ent2',
        src: '/portfolio/entreprise-entree.jpg',
        alt: 'Extérieur architecture entreprise par Steven Dufour',
        category: 'entreprises',
        size: 'lg',
        objectPosition: 'center',
    },
    {
        id: 'ent3',
        src: '/portfolio/entreprise-salon.jpg',
        alt: 'Espace accueil professionnel par Steven Dufour',
        category: 'entreprises',
        size: 'lg',
        objectPosition: 'center',
    },

    // --- RESTE DE L'ÉVÉNEMENTIEL ---
    {
        id: 'ev2',
        src: '/portfolio/event-table.jpg',
        alt: 'Décoration de table événementielle par Steven Dufour',
        category: 'evenementiel',
        size: 'md',
        objectPosition: 'center',
    },
    {
        id: 'ev3',
        src: '/portfolio/evenement-mains.jpg',
        alt: 'Détail émotionnel mains par Steven Dufour',
        category: 'evenementiel',
        size: 'lg',
        objectPosition: 'center',
    },
    {
        id: 'ev4',
        src: '/portfolio/evenement-conference-nb.jpg',
        alt: 'Captation de conférence par Steven Dufour',
        category: 'evenementiel',
        size: 'lg',
        objectPosition: 'center',
    },
    {
        id: 'ev5',
        src: '/portfolio/evenement-sourire.jpg',
        alt: 'Émotion et partage événementiel par Steven Dufour',
        category: 'evenementiel',
        size: 'lg',
        objectPosition: 'center',
    },
    {
        id: 'ev6',
        src: '/portfolio/wine-bottles.jpg',
        alt: 'Détail art de vivre bouteilles par Steven Dufour',
        category: 'evenementiel',
        size: 'lg',
        objectPosition: 'center',
    },
]
