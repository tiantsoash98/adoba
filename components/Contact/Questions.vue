
import type { clamp } from 'photoswipe/dist/types/util/util';
<template>
    <div>
        <section class="section section--margin-top-md contact-questions">
            <div class="container">
                <div class="row contact-questions__main-wrapper">
                    <div class="contact-questions__content-wrapper col-6">
                        <div class="contact-questions__title-wrapper">
                            <h2 class="text-visually-hidden">{{ title }}</h2>
                            <div class="more__title title-h2">{{ title }}</div>
                        </div>
                        <div class="contact-questions__description-wrapper">
                            <p class="contact-questions__description title-h6">{{ description }}</p>
                        </div>
                        <NuxtLink :to="`/${buttonRedirect}`" class="contact-questions__button">
                            <Button :text="buttonLabel"></Button>
                        </NuxtLink>
                    </div>
                    <div class="contact-questions__img-wrapper col-6">
                        <nuxt-img
                            :src="imgPath(img.data.attributes.url)"
                            class="contact-questions__img" 
                            sizes="sm:100vw md:50vw 50vw" 
                            role="presentation"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
const props = defineProps({
    title: String,
    description: String,
    buttonLabel: String,
    buttonRedirect: String,
    img: Object
})
</script>

<style lang="scss" scoped>
.contact-questions {
    &__main-wrapper {
        height: clamp(600px, 80vh, 1000px);
    }
    &__content-wrapper {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        height: 100%;
        margin: 0 var(--r-space-xl) 0 0;
    }
    &__button {
        margin-top: var(--r-space-sm);
    }
    &__img-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }
    &__img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>