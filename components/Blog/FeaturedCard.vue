<template>
    <div>
        <article :class="cardFullClass">
            <div class="featured-article__header-wrapper col-12 col-sm-7 col-md-6 mt-7 mt-sm-0">
                <span class="featured-article__date callout-text">{{ dateFormat(date) }}</span>
                <NuxtLink :to="`/blog/${ url }`">
                    <h4 class="featured-article__title mb-5">{{ title }}</h4>
                </NuxtLink>
                <NuxtLink :to="`/blog/${ url }`" class="featured-article__button">
                    <Button :text="buttonLabel" class="button--tertiary"></Button>
                </NuxtLink>
            </div>
            <NuxtLink :to="`/blog/${ url }`" class="featured-article__figure-wrapper col-12 col-sm-5 col-md-6">
                <figure class="featured-article__figure" role="presentation"  data-cursor-text="Lire">
                    <nuxt-img
                        :width="img.data.attributes.width"
                        :height="img.data.attributes.height"
                        format="webp"
                        :class="['featured-article__img img', {'img--loaded':imgIsLoaded}]"
                        :src="imgPath(img.data.attributes.url)"
                        :sizes="'sm:90vw md:40vw lg:40vw 90vw'"
                        :loading="'lazy'"
                        quality="70"
                        @load="imgIsLoaded = true"
                    />
                </figure>
            </NuxtLink>
        </article>
    </div>
</template>

<script setup>
const imgIsLoaded = ref(false)
const props = defineProps({
    title: String,
    date: String,
    url: String,
    img: Object,
    articleClass: String,
    buttonLabel: String,
    isInverted: Boolean
})

const cardFullClass = computed(() => {
    const baseClass = "row featured-article mb-9"
    if(props.isInverted) return `${baseClass} featured-article--inverted`
    return baseClass
})
</script>

<style lang="scss" scoped>
.featured-article {
    $root:&;

    &--inverted {
        #{$root}__header-wrapper {
            order: 2;
            padding: 0 0 0 var(--r-space-lg);
        }
        #{$root}__figure-wrapper {
            order: 1;
        }
    }
    &__header-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 var(--r-space-lg) 0 0;
    }
    &__date {
        color: var(--color-neutral-70);
    }
    &__figure {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }
    &__img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: opacity 1s var(--alias-default-ease), transform 1s var(--alias-default-ease);

        &:hover {
            transform: scale(1.05);
        }
    }
}
@media screen and (max-width: 767px){
    .featured-article  {
        $root:&;
        &__header-wrapper {
            order: 2;
        }   
        &__figure {
            order: 1;
        }    
        
        &--inverted { 
            #{$root}__header-wrapper {
                padding: 0;
            }
        }
    }
}
</style>