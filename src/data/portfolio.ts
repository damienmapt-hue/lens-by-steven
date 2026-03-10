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
        alt: 'Action basketball intense à Auch par le photographe Steven Dufour',
        title: 'Duel au Panier',
        category: 'sport',
        size: 'md',
        objectPosition: '50% 45%',
    },
    {
        id: 'p1',
        src: '/portfolio/portrait-allonge-nb.jpg',
        alt: 'Portrait artistique noir et blanc réalisé à Auch par Steven Dufour',
        title: 'Sérénité Monochrome',
        category: 'portraits',
        size: 'md',
        objectPosition: 'center',
    },
    {
        id: 'ev1',
        src: '/portfolio/evenement-bouteilles-parasol.jpg',
        alt: 'Reportage événementiel dans le Gers par Steven Dufour',
        title: 'Cocktail Sunset',
        category: 'evenementiel',
        size: 'md',
        objectPosition: 'center',
    },
    {
        id: 's4',
        src: '/portfolio/team-huddle.jpg',
        alt: 'Photographie de sport collectif à Auch - Steven Dufour',
        category: 'sport',
        size: 'md',
        objectPosition: '50% 30%',
    },
    {
        id: 'p2',
        src: '/portfolio/portrait-wicker-chair.jpg',
        alt: 'Séance portrait professionnel à Auch par Steven Dufour',
        category: 'portraits',
        size: 'md',
        objectPosition: 'top',
    },
    {
        id: 's1',
        src: '/portfolio/basketball-back.jpg',
        alt: 'Action basketball Auch - Photographe Steven Dufour',
        category: 'sport',
        size: 'md',
        objectPosition: 'center',
    },

    // --- RESTE DES PORTRAITS ---
    {
        id: 'p3',
        src: '/portfolio/portrait-rose-doree.jpeg',
        alt: 'Portrait artistique avec rose dorée - Steven Dufour Photographe Auch',
        category: 'portraits',
        size: 'lg',
        objectPosition: 'center',
    },
    {
        id: 'p4',
        src: '/portfolio/portrait-coiffeur.jpeg',
        alt: 'Portrait métier artisan coiffeur à Auch par Steven Dufour',
        category: 'portraits',
        size: 'sm',
        objectPosition: 'center',
    },
    {
        id: 'p5',
        src: '/portfolio/portrait-duo-amies.jpeg',
        alt: 'Portrait de duo réalisé en studio à Auch par Steven Dufour',
        category: 'portraits',
        size: 'md',
        objectPosition: 'center',
    },
    {
        id: 'p6',
        src: '/portfolio/portrait-fourrure.jpeg',
        alt: 'Portrait mode et élégance - Photographe Auch Steven Dufour',
        category: 'portraits',
        size: 'lg',
        objectPosition: 'center',
    },

    // --- RESTE DU SPORT ---
    {
        id: 's3',
        src: '/portfolio/player-walk.jpg',
        alt: 'Match de basketball à Auch capturé par Steven Dufour',
        category: 'sport',
        size: 'md',
        objectPosition: 'center',
    },
    {
        id: 's5',
        src: '/portfolio/sport-boxing.jpeg',
        alt: 'Shooting boxe intense à Auch par Steven Dufour',
        category: 'sport',
        size: 'lg',
        objectPosition: 'center',
    },
    {
        id: 's6',
        src: '/portfolio/sport-goal-drinking.jpeg',
        alt: 'Reportage sportif dans le Gers - Steven Dufour Photography',
        category: 'sport',
        size: 'lg',
        objectPosition: 'center',
    },

    // --- ENTREPRISE ---
    {
        id: 'ent1',
        src: '/portfolio/entreprise-bureau.jpg',
        alt: 'Photographe entreprise Auch : reportage en milieu professionnel',
        category: 'entreprises',
        size: 'lg',
        objectPosition: 'center',
    },
    {
        id: 'ent2',
        src: '/portfolio/entreprise-entree.jpg',
        alt: 'Photographie d\'architecture d\'entreprise à Auch - Steven Dufour',
        category: 'entreprises',
        size: 'lg',
        objectPosition: 'center',
    },
    {
        id: 'ent3',
        src: '/portfolio/entreprise-salon.jpg',
        alt: 'Aménagement intérieur entreprise Gers par Steven Dufour',
        category: 'entreprises',
        size: 'lg',
        objectPosition: 'center',
    },

    // --- RESTE DE L'ÉVÉNEMENTIEL ---
    {
        id: 'ev2',
        src: '/portfolio/event-table.jpg',
        alt: 'Décoration événementielle Auch - Photographe Steven Dufour',
        category: 'evenementiel',
        size: 'md',
        objectPosition: 'center',
    },
    {
        id: 'ev3',
        src: '/portfolio/evenement-mains.jpg',
        alt: 'Détail émotionnel lors d\'un événement à Auch par Steven Dufour',
        category: 'evenementiel',
        size: 'lg',
        objectPosition: 'center',
    },
    {
        id: 'ev4',
        src: '/portfolio/evenement-conference-nb.jpg',
        alt: 'Conférence et événementiel entreprise Auch - Steven Dufour',
        category: 'evenementiel',
        size: 'lg',
        objectPosition: 'center',
    },
    {
        id: 'ev5',
        src: '/portfolio/evenement-sourire.jpg',
        alt: 'Reportage sourires et émotion Gers par Steven Dufour',
        category: 'evenementiel',
        size: 'lg',
        objectPosition: 'center',
    },
    {
        id: 'ev6',
        src: '/portfolio/wine-bottles.jpg',
        alt: 'Photographie culinaire et art de vivre à Auch - Steven Dufour',
        category: 'evenementiel',
        size: 'lg',
        objectPosition: 'center',
    },
]
