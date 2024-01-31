<template>
    <div class="footer__section col-6 col-xs-6 col-md-3 col-lg-3 mt-9 mt-xs-0">
        <div class="footer__section-title paragraph-text--medium mb-3 mb-sm-3">Liens</div>
        <ul class="footer__links">
            <li class="mt-4 mt-sm-4 mt-md-1"><NuxtLink to="/" aria-label="Page accueil">Accueil</NuxtLink></li>
            <li class="mt-4 mt-sm-5 mt-md-1"><NuxtLink to="/studio" aria-label="Page le studio">Le studio</NuxtLink></li>
            <li class="mt-4 mt-sm-5 mt-md-1"><NuxtLink to="/realisations" aria-label="Page réalisations">Réalisations</NuxtLink></li>
            <li class="mt-4 mt-sm-5 mt-md-1"><NuxtLink to="/blog" aria-label="Page blog">Blog</NuxtLink></li>
            <li class="mt-4 mt-sm-5 mt-md-1"><NuxtLink to="/faq" aria-label="Page FAQ">FAQ</NuxtLink></li>
            <li class="mt-4 mt-sm-5 mt-md-1"><NuxtLink to="/jobs" aria-label="Page jobs">Jobs</NuxtLink></li>
            <li class="mt-4 mt-sm-5 mt-md-1"><NuxtLink to="/contact" aria-label="Page contact">Contact</NuxtLink></li>
        </ul>
    </div>
    <div class="footer__section col-6 col-xs-6 col-md-3 col-lg-3 mt-9 mt-lg-0">
        <div class="footer__section-title paragraph-text--medium mb-3 mb-sm-3">Nos services</div>
        <ul class="footer__links">
            <li class="mt-4 mt-sm-5 mt-md-1"><NuxtLink to="/perspective-3d" aria-label="Page perspective 3D">Perspective 3D</NuxtLink></li>
            <li class="mt-4 mt-sm-5 mt-md-1"><NuxtLink to="/home-staging" aria-label="Page home staging">Home staging</NuxtLink></li>
            <li class="mt-4 mt-sm-5 mt-md-1"><NuxtLink to="/film-architecture-3d" aria-label="Page film d'architecture 3D">Film d'architecture 3D</NuxtLink></li>
            <li class="mt-4 mt-sm-5 mt-md-1"><NuxtLink to="/visite-virtuelle" aria-label="Page visite virtuelle">Visite virtuelle</NuxtLink></li>
            <li class="mt-4 mt-sm-5 mt-md-1"><NuxtLink to="/maquette-orbitale-3d" aria-label="Page maquette orbitale">Maquette orbitale</NuxtLink></li>
        </ul>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.footer {
    &__links {
        & a {
            color: var(--color-neutral-70);
        }
        & li {
            transition: opacity 0.3s var(--alias-default-ease);

            &:hover {
                opacity: 0.5;
            }
        }
    }
}
</style>