<template>
    <section class="pre-footer" data-header-state="default">
        <div class="container pre-footer__main-wrapper">
            <NuxtLink to="/contact">
                <div class="pre-footer__label title-h6">{{ content.footerCtaLabel }}</div>
                <div class="pre-footer__content-wrapper" data-cursor-text="Nous contacter" data-cursor="-neutral">
                    <div class="pre-footer__title-wrapper">
                        <h6 class="text-visually-hidden">{{ content.footerCtaText }}</h6>
                        <div class="pre-footer__title title-h1">Donnons vie à votre</div>
                        <div class="pre-footer__title title-h1">imaginaire architectural</div>
                    </div>
                    <div class="pre-footer__icon-wrapper">
                        <IconArrowNarrowUpRight icon-class="pre-footer__icon"/>
                    </div>
                </div>
            </NuxtLink>
        </div>
    </section>
    <footer class="footer">
        <div class="container">
            <div class="footer__main-wrapper">
                <div class="footer__section">
                    <div class="footer__logo-wrapper">
                        <NuxtLink to="/">
                            <IconAdobaLogo icon-class="footer__icon"/>
                        </NuxtLink>
                    </div>
                    <div class="footer__infos-wrapper">
                        <div class="footer__email-wrapper">
                            <span class="title-h6">{{ content.footerEmail }}</span>
                        </div>
                        <div class="footer__description callout-text">{{ content.footerDescription }}</div>
                    </div>
                </div>
                <div class="footer__section">
                    <div class="footer__section-title paragraph-text--medium">Liens</div>
                    <ul class="footer__links">
                        <li><NuxtLink to="/">Accueil</NuxtLink></li>
                        <li><NuxtLink to="/studio">Le Studio</NuxtLink></li>
                        <li><NuxtLink to="/realisations">Réalisations</NuxtLink></li>
                        <li><NuxtLink to="/blog">Blog</NuxtLink></li>
                        <li><NuxtLink to="/faq">FAQ</NuxtLink></li>
                        <li><NuxtLink to="/jobs">Jobs</NuxtLink></li>
                        <li><NuxtLink to="/contact">Contact</NuxtLink></li>
                    </ul>
                </div>
                <div class="footer__section">
                    <div class="footer__section-title paragraph-text--medium">Nos services</div>
                    <ul class="footer__links">
                        <li><NuxtLink to="/perspective-3d">Perspective 3D</NuxtLink></li>
                        <li><NuxtLink to="/home-staging">Home staging</NuxtLink></li>
                        <li><NuxtLink to="/film-architecture-3d">Film d'architecture 3D</NuxtLink></li>
                        <li><NuxtLink to="/visite-virtuelle">Visite virtuelle</NuxtLink></li>
                        <li><NuxtLink to="/maquette-orbitale-3d">Maquette orbitale</NuxtLink></li>
                    </ul>
                </div>
                <div class="footer__section">
                    <div class="footer__section-title paragraph-text--medium">Newsletter</div>
                    <span class="footer__newsletter-text">{{ content.footerNewsletterText }}</span>
                </div>
            </div>
            <div class="footer__end-wrapper">
                <div class="footer__launched-wrapper">
                    <span class="footnote-text" v-html="content.footerCopyrights[0].children[0].text"></span>
                </div>
                <ul class="footer__socials-wrapper">
                    <li class="footer__social footer__social--facebook">
                        <a href="#">
                            <IconFacebook/>
                        </a>
                    </li>
                    <li class="footer__social footer__social--linkedin">
                        <a href="#">
                            <IconLinkedin/>
                        </a>
                    </li>
                    <li class="footer__social footer__social--instagram">
                        <a href="#">
                            <IconInstagram/>
                        </a>
                    </li>
                    <li class="footer__social footer__social--pinterest">
                        <a href="#">
                            <IconPinterest/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script setup>
    const { data: content }  = await useFetch('/api/footer', {
        transform: (_content) => _content.data.data.attributes
    })
</script>

<style scoped lang="scss">
.pre-footer {
    $root: &;
    padding-top: var(--r-space-lg);
    padding-bottom: var(--r-space-lg);

    &__content-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;

        &:hover {
            #{$root}__icon {
                transform: translate(1vw, -1vw);
            }
        }
    }
    &__title-wrapper {
        padding-top: var(--r-space-xs);
    }
    &__icon-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: var(--r-space-lg);
    }
    &__icon {
        width: 100%;
        fill: currentColor;
        transition: transform .8s var(--alias-default-ease); 
    }
}
.footer {
    &__main-wrapper{
        border-top: 1px solid var(--brand-secondary);
        padding-top: var(--r-space-lg);
        display: grid;
        grid-template-columns: repeat(12, minmax(0, 1fr));
        column-gap: var(--r-space-sm);
    }
    &__section {
        grid-column: span 3;
    }
    &__section-title {
        margin-bottom: var(--r-space-xs);
    }
    &__logo-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: var(--r-space-xl);
    }
    & svg {
        width: 100%;
        fill: currentColor;
    }
    &__infos-wrapper {
        margin-top: var(--r-space-md);
    }
    &__description {
        margin-top: var(--r-space-xs);
        color: var(--color-neutral-80);
    }
    &__links {
        & li {
            margin-top: var(--r-space-xxs);
        }
        & a {
            color: var(--color-neutral-70);
        }
    }
    &__newsletter-text {
        color: var(--color-neutral-70);
    }
    &__end-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: var(--r-space-md);
        padding-bottom: var(--r-space-sm);
    }
    &__launched-wrapper {
        color: var(--color-neutral-70);
    }
    &__socials-wrapper {
        display: flex;
    }
    &__social {
        max-width: var(--r-space-sm);
        margin-left: var(--r-space-xs);
    }
}
</style>