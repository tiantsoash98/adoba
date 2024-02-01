
import type { FooterLinks } from '#build/components';
<template>
    <FooterCTA :content="content"></FooterCTA>
    <footer class="footer">
        <div class="container">
            <div class="row footer__main-wrapper pt-9 pt-sm-9">
                <div class="footer__section col-12 col-xs-6 col-md-6 col-lg-3">
                    <div class="footer__logo-wrapper">
                        <NuxtLink to="/">
                            <IconAdobaLogo icon-class="footer__icon"/>
                        </NuxtLink>
                    </div>
                    <div class="footer__infos-wrapper mt-7 mt-sm-7">
                        <div class="footer__email-wrapper">
                            <a :href="`mailto:${ content.footerEmail }`" target="_blank" aria-label="Email">
                                <div class="footer__email title-h6">{{ content.footerEmail }}</div>
                            </a> 
                        </div>
                        <div class="footer__description paragraph-text mt-3 mt-sm-3">{{ content.footerDescription }}</div>
                    </div>
                </div>
                <FooterLinks></FooterLinks>
                <FooterNewsletter
                    class="footer__section col-12 col-xs-6 col-md-6 col-lg-3 mt-9 mt-lg-0"
                    :text="content.footerNewsletterText"
                ></FooterNewsletter>
            </div>
            <div class="footer__end-wrapper mt-11 mt-sm-9 pb-7 pb-sm-5">
                <div class="footer__launched-wrapper">
                    <a 
                        v-if="content.footerNumarenaLink != '' || content.footerNumarenaLink != '#'"
                        :href="content.footerNumarenaLink"
                        target="_blank"
                        aria-label="Site web Numarena"
                    >
                        <span class="paragraph-text" v-html="content.footerCopyrights"></span>
                    </a>
                    <span v-else class="paragraph-text" v-html="content.footerCopyrights"></span>
                </div>
                <ul class="footer__socials-wrapper mt-5 mt-sm-0">
                    <li 
                        v-for="social in activeSocials" 
                        :key="social.attributes.socialLink"
                        class="footer__social mr-7 mr-sm-5 mr-md-3 mt-5 mt-sm-5"
                    >
                        <a :href="social.attributes.socialLink" target="_blank" :aria-label="social.attributes.socialTitle">
                            <IconFacebook v-if="social.attributes.socialIcon == 'icon-facebook'"/>
                            <IconLinkedin v-else-if="social.attributes.socialIcon == 'icon-linkedin'"/>
                            <IconInstagram v-else-if="social.attributes.socialIcon == 'icon-instagram'"/>
                            <IconPinterest v-else-if="social.attributes.socialIcon == 'icon-pinterest'"/>
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

    const activeSocials = computed(() => content.value.socials.data.filter((social) => social.attributes.socialLink != null))
</script>

<style lang="scss">
.footer {
    &__main-wrapper{
        border-top: 1px solid var(--brand-secondary);
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
    &__description {
        color: var(--color-neutral-80);
    }
    &__links {
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
        align-items: flex-end;
    }
    &__launched-wrapper {
        color: var(--color-neutral-70);
    }
    &__socials-wrapper {
        display: flex;
    }
    &__social {
        max-width: var(--r-space-sm);
        transition: opacity 0.3s var(--alias-default-ease);

        &:hover {
            opacity: 0.5;
        }
    }
    &__newsletter-form-wrapper {
        display: flex;
        flex-direction: column;
    }
    &__newsletter-form {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        border-bottom: 1px solid var(--color-neutral-40);
    }
    &__newsletter-input {
        flex-grow: 1;

        & input {
            border-bottom: 0;
        }
    }
}
@media screen and (max-width: 991px){
    .footer {
        &__end-wrapper {
            flex-direction: column;
            align-items: flex-start;
        }
        &__social {
            max-width: var(--r-space-sm-2);
        }
    }
}
@media screen and (max-width: 991px){
    .footer {
        &__end-wrapper {
            flex-direction: column;
            align-items: flex-start;
        }
        &__social {
            max-width: var(--r-space-sm-2);
        }
    }
}
@media screen and (max-width: 576px){
    .footer {
        &__social {
            max-width: var(--r-space-md-2);
        }
    }
}
</style>