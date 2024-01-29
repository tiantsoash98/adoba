<template>
    <section class="section pre-footer" ref="triggerEl">
        <div class="container pre-footer__main-wrapper">
            <NuxtLink to="/contact">
                <div class="pre-footer__label title-h6">{{ content.footerCtaLabel }}</div>
                <div class="pre-footer__content-wrapper" data-cursor-text="Nous contacter" data-cursor="-neutral">
                    <div class="pre-footer__title-wrapper mt-5 mt-sm-5">
                        <span class="pre-footer__title title-h1">{{ content.footerCtaText }}</span>
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
            <div class="row footer__main-wrapper pt-9 pt-sm-9">
                <div class="footer__section col-12 col-xs-6 col-md-6 col-lg-3">
                    <div class="footer__logo-wrapper">
                        <NuxtLink to="/">
                            <IconAdobaLogo icon-class="footer__icon"/>
                        </NuxtLink>
                    </div>
                    <div class="footer__infos-wrapper mt-7 mt-sm-7">
                        <div class="footer__email-wrapper">
                            <a :href="`mailto:${ content.footerEmail }`" target="_blank">
                                <div class="footer__email title-h6">{{ content.footerEmail }}</div>
                            </a> 
                        </div>
                        <div class="footer__description paragraph-text mt-3 mt-sm-3">{{ content.footerDescription }}</div>
                    </div>
                </div>
                <div class="footer__section col-6 col-xs-6 col-md-3 col-lg-3 mt-9 mt-xs-0">
                    <div class="footer__section-title paragraph-text--medium mb-3 mb-sm-3">Liens</div>
                    <ul class="footer__links">
                        <li class="mt-4 mt-sm-4 mt-md-1"><NuxtLink to="/">Accueil</NuxtLink></li>
                        <li class="mt-4 mt-sm-5 mt-md-1"><NuxtLink to="/studio">Le studio</NuxtLink></li>
                        <li class="mt-4 mt-sm-5 mt-md-1"><NuxtLink to="/realisations">Réalisations</NuxtLink></li>
                        <li class="mt-4 mt-sm-5 mt-md-1"><NuxtLink to="/blog">Blog</NuxtLink></li>
                        <li class="mt-4 mt-sm-5 mt-md-1"><NuxtLink to="/faq">FAQ</NuxtLink></li>
                        <li class="mt-4 mt-sm-5 mt-md-1"><NuxtLink to="/jobs">Jobs</NuxtLink></li>
                        <li class="mt-4 mt-sm-5 mt-md-1"><NuxtLink to="/contact">Contact</NuxtLink></li>
                    </ul>
                </div>
                <div class="footer__section col-6 col-xs-6 col-md-3 col-lg-3 mt-9 mt-lg-0">
                    <div class="footer__section-title paragraph-text--medium mb-3 mb-sm-3">Nos services</div>
                    <ul class="footer__links">
                        <li class="mt-4 mt-sm-5 mt-md-1"><NuxtLink to="/perspective-3d">Perspective 3D</NuxtLink></li>
                        <li class="mt-4 mt-sm-5 mt-md-1"><NuxtLink to="/home-staging">Home staging</NuxtLink></li>
                        <li class="mt-4 mt-sm-5 mt-md-1"><NuxtLink to="/film-architecture-3d">Film d'architecture 3D</NuxtLink></li>
                        <li class="mt-4 mt-sm-5 mt-md-1"><NuxtLink to="/visite-virtuelle">Visite virtuelle</NuxtLink></li>
                        <li class="mt-4 mt-sm-5 mt-md-1"><NuxtLink to="/maquette-orbitale-3d">Maquette orbitale</NuxtLink></li>
                    </ul>
                </div>
                <div class="footer__section col-12 col-xs-6 col-md-6 col-lg-3 mt-9 mt-lg-0">
                    <div class="footer__section-title paragraph-text--medium mb-3 mb-sm-3">Newsletter</div>
                    <span class="footer__newsletter-text">{{ content.footerNewsletterText }}</span>
                    <div class="footer__newsletter-form-wrapper mt-5 mt-md-0">
                        <form class="form footer__newsletter-form" @submit.prevent="onSubmit">
                            <FormInput 
                                v-model="newsletterEmail" 
                                :custom-class="'footer__newsletter-input'"
                                :name="'newsletter'"
                                :placeholder="'Adresse email'"
                                :type="'email'"
                                :required="false"
                            ></FormInput>
                            <Button
                                :text="''"
                                :type="'submit'"
                                class="button--tertiary"
                            ></Button>
                        </form>
                        <div class="footer__newsletter-validation mt-5" v-show="newsletterFeedback != ''">
                            <div v-if="newsletterFeedback === 'error'" class="form-validation form-validation--error">
                                Une erreur s'est produite, veuillez réessayer.
                            </div>
                            <div v-if="newsletterFeedback === 'invalid'" class="form-validation form-validation--error">
                                Veuillez spécifier un email valide
                            </div>
                            <div v-else-if="newsletterFeedback === 'success'" class="form-validation form-validation--success">
                                Merci pour l'inscription !
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer__end-wrapper mt-9 mt-sm-9 pb-7 pb-sm-5">
                <div class="footer__launched-wrapper">
                    <span class="paragraph-text" v-html="content.footerCopyrights[0].children[0].text"></span>
                </div>
                <ul class="footer__socials-wrapper">
                    <li 
                        v-for="social in activeSocials" 
                        :key="social.attributes.socialLink"
                        class="footer__social mr-5 mr-sm-5 mr-md-3 mt-5 mt-sm-5"
                    >
                        <a :href="social.attributes.socialLink" target="_blank">
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
    const { getRecaptchaToken } = useRecaptchaInit()
    const { data: content }  = await useFetch('/api/footer', {
        transform: (_content) => _content.data.data.attributes
    })

    const newsletterEmail = ref('')
    const newsletterFeedback = ref('')
    const success = ref(false)
    const activeSocials = computed(() => content.value.socials.data.filter((social) => social.attributes.socialLink != null))
    
    const onSubmit = async(event) => {
        await getRecaptchaToken('newsletter')

        success.value = false
        newsletterFeedback.value = ''

        // Form validation
        // https://dev.to/michaelsynan/nuxt3-form-with-feedback-25b9
        if(!newsletter.value.trim()) {
            newsletterFeedback.value = 'error'
            success.value = false
            return
        }

        if (!emailValidator(newsletterEmail.value)) {
            newsletterFeedback.value = 'invalid'
            success.value = false
            return
        }
        
        // Subscribe to mailChimp
        // const { data } = await useFetch("/api/send-mail", {
        //     method: "POST",
        //     body: {
        //         "name": name,
        //         "firstname": firstName,
        //         "email": email,
        //         "message": message
        //     }
        // })

        // Send mail success
        newsletterEmail.value = ""
        newsletterFeedback.value = 'success'
        success.value = true

        // Error
        // newsletterFeedback.value = 'error'
        // success.value = false
    }
</script>

<style lang="scss">
.pre-footer {
    $root: &;

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
        max-width: 75ch;
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
        align-items: center;
    }
    &__launched-wrapper {
        color: var(--color-neutral-70);
    }
    &__socials-wrapper {
        display: flex;
    }
    &__social {
        max-width: var(--r-space-sm);
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
    .pre-footer {
        &__title-wrapper {
            max-width: 38ch;
        }
    }
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
    .pre-footer {
        &__title-wrapper {
            max-width: 20ch;
        }
    }
}
</style>