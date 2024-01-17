<template>
    <div>
        <NuxtLink :to="slug">
            <div class="service-others-item">
                <div class="service-others-item__img-wrapper">
                    <nuxt-img
                        class="service-others-item__img" 
                        sizes="md:30vw lg:30vw 30vw"
                        :src="imgPath(img.data.attributes.url)" 
                        :alt="title"
                        loading="lazy"
                        />
                </div>
                <div class="service-others-item__content-wrapper">
                    <div class="service-others-item__title title-h5">{{ title }}</div>
                    <div class="service-others-item__icon-wrapper">
                        <IconArrowUpRight icon-class="service-others-item__icon"></IconArrowUpRight>
                    </div>
                </div>
            </div>
        </NuxtLink>
    </div>
    
</template>

<script setup>
const props = defineProps({
    title: String,
    slug: String,
    img: Object
})
</script>

<style lang="scss" scoped>
.service-others-item {
    $root:&;
    padding-top: var(--r-space-sm-2);
    padding-bottom: var(--r-space-sm-2);
    border-top: 1px solid var(--color-neutral-70);
    color: var(--color-neutral-30);

    &:hover {
        #{$root}__img {
            opacity: 1;
        }
        #{$root}__title {
            color: var(--color-neutral-10);
            transform: translateX(8%);
        }
        #{$root}__icon {
            transform: translate(25%, -25%);
        }
    }
    
    &__content-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    &__title {
        transition: color .6s var(--alias-default-ease) .1s,
                    transform .6s var(--alias-default-ease) .1s; 
    }
    &__icon-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: var(--r-space-xs-2);
        margin-top: auto;
    }
    &__icon {
        transition: transform .6s var(--alias-default-ease) .1s; 
    }
    &__img-wrapper {
        width: 25vw;
        overflow: hidden;
        position: absolute;
        top: 0%;
        right: 10%;
        transform: translateY(-25%);
        z-index: 1;
    }
    &__img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0;
        transition: opacity 1s var(--alias-default-ease) .1s; 
    }
}
</style>