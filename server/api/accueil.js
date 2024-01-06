export default defineEventHandler((event) => {
    const data = {
        "presentation": "Adoba a pour ambition de proposer des solutions immersives visuelles, digitales innovantes dans l’univers de l’architecture, l’immobilier et la construction.",
        "advantages": [
            {
                "title": "Solutions sur mesure",
                "description": "Votre besoin et vos goûts sont unique, notre studio vous fourni une offre hyper personnalisée adaptée à vos attentes.",
                "icon": "icon-solution"
            },
            {
                "title": "Les clients d'abord",
                "description": "Nous donnons vie et mettons en lumière les projets de chacun nos clients, nous sommes à l’écoute et nous donnons le meilleur de nous-même sur chaque réalisations.",
                "icon": "icon-clients-first"
            },
            {
                "title": "Qualité premium",
                "description": "Notre définition de la qualité premium c’est un savoir-faire au service d’expériences visuelles, immersives personnalisées.",
                "icon": "icon-quality"
            },
            {
                "title": "Délais respectés",
                "description": "Nous nous engageons à respecter délais de livraison convenus ! Si nous ne respectons pas cet engagement, nous vous offrons la prestation.",
                "icon": "icon-time"
            }
        ]
    }

    return data;
  })
  