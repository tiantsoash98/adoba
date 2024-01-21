export default defineEventHandler((event) => {
    const data = [
        {
            "id": 1,
            "faqQuestion": "Comment vous fonctionnez ?",
            "faqAnswer": "Avant de construire le flux de travail d'un projet spécifique, nous déterminons les besoins du client. Nous examinons la mission technique, clarifions ce que nous devons savoir et approuvons avec vous l'algorithme du projet, étape par étape, avec les dates et les jalons. Ainsi, vous savez à quoi vous attendre à chaque étape, vous pouvez demander des corrections avant que l'animation 3D ne soit prête et vous êtes sûr d'obtenir les résultats escomptés tout au long du projet.",
        },
        {
            "id": 2,
            "faqQuestion": "Qu’ai-je besoin de vous fournir comme document avant le démarrage d’un projet ?",
            "faqAnswer": "De manière générale, nous vous demanderons de nous envoyer tous les fichiers que vous avez à disposition qui nous permettront de mieux comprendre vos attentes : esquisses, mood board. briefing vidéo, fichiers aux formats CAO, pdf ou tout autres formats vectoriels. ",
        },
        {
            "id": 3,
            "faqQuestion": "Proposez-vous un test avant une collaboration ?",
            "faqAnswer": "Nous proposons un projet d’essai lorsque nous travaillons avec une entreprise pour la première fois. Nous faisons une remise de 10% pour ce projet d’essai.",
        },
    ]

    return {
        data
    }
  })
  