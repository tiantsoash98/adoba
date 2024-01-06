export default defineEventHandler((event) => {
    const services = [
        {
            "index": 1,
            "slug": "perspective-3d",
            "title": "Perspective 3D",
            "description": "Créez l’enchantement et facilitez le processus de décision de vos clients en leur offrant une perspective fidèle en 3D de leur projet de construction.",
            "img": "perspective-3D.jpg"
        },
        {
            "index": 2,
            "slug": "home-staging",
            "title": "Home staging",
            "description": "Aidez vos prospects à se projeter directement dans leurs futurs biens en bénéficiant de nos solutions de homestaging dans un environnement 3D ultraréaliste.",
            "img": "home-staging.jpg"
        },
        {
            "index": 3,
            "slug": "film-architecture-3d",
            "title": "Film d’architecture 3D",
            "description": "Optez pour un film d’animation 3D pour explorer et faire découvrir vos projets dans leurs moindres détails",
            "img": "film-architecture-3d.jpg"
        },
        {
            "index": 4,
            "slug": "visite-virtuelle",
            "title": "Visite virtuelle",
            "description": "Proposez une véritable expérience immersive à 360 degrés à vos futurs acquéreurs en leur permettant de vivre la visite virtuelle dans un rendu proche du réalisme.",
            "img": "visite-virtuelle.png"
        },
        {
            "index": 5,
            "slug": "maquette-orbitale-3d",
            "title": "Maquette orbitale 3D",
            "description": "Séduisez vos leads en présentant votre programme immobilier via la maquette 3D.",
            "img": "maquette-orbitale.jpg"
        }
    ]

    return services;
  })
  