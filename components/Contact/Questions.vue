
<template>
    <div>
        <section class="section section--margin-top-md contact-questions">
            <div class="container">
                <div class="row contact-questions__main-wrapper">
                    <div class="contact-questions__content-wrapper col-12 col-md-6 mr-0 mr-md-9 pt-11 pb-11">
                        <div class="contact-questions__title-wrapper">
                            <h2 class="text-visually-hidden">{{ title }}</h2>
                            <div class="more__title title-h2">{{ title }}</div>
                        </div>
                        <div class="contact-questions__description-wrapper">
                            <p class="contact-questions__description title-h6 mt-7 mt-md-3">{{ description }}</p>
                        </div>
                        <NuxtLink :to="`/${buttonRedirect}`" aria-label="Page FAQ" class="contact-questions__button mt-7">
                            <Button :text="buttonLabel"></Button>
                        </NuxtLink>
                    </div>
                    <div class="contact-questions__img-wrapper col-12 col-md-6 mt-5 mt-md-0" ref="imgEl">
                        <NuxtImg
                            :src="imgPath(img.data.attributes.url)"
                            class="contact-questions__img" 
                            sizes="sm:100vw md:90vw 90vw" 
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
const imgEl = ref(null)
const props = defineProps({
    title: String,
    description: String,
    buttonLabel: String,
    buttonRedirect: String,
    img: Object
})
const { imgScrollAnimation } = useImgScrollAnimation();

onMounted(() => {
    imgScrollAnimation(imgEl)
})
</script>

<style lang="scss" scoped>
.contact-questions {
    &__content-wrapper {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        height: 100%;
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
@media screen and (max-width: 991px){
    .contact-questions  {
        &__content-wrapper {
            order: 2;
        }
        &__img-wrapper {
            order: 1;
        }
        
    }
}
</style>