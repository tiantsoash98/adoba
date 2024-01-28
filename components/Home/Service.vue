<template>
    <div class="service">
        <div class="service__border mb-9 mb-sm-7"></div>
        <div class="service__content-wrapper">
            <div class="service__left-wrapper col-12 col-sm-6 col-md-7" @click="toogleService">
                <span class="service__id callout-text pt-2">{{ serviceId }}</span>
                <div class="service__title-wrapper ml-0 ml-sm-5 mt-2 mt-sm-0">
                    <h5 class="service__title">{{ title }}</h5>
                </div>
            </div>
            <div class="service__right-wrapper col-12 col-sm-6 col-md-5 mt-5 mt-sm-0">
                <p @click="toogleService">{{ description }}</p>
                <NuxtLink :to="slug">
                    <Button text="Voir Plus" class="button--tertiary button--white mt-8 mt-sm-7"></Button>
                </NuxtLink>
            </div>
        </div>
        <div class="service__img-container mt-9 mt-sm-8">
            <div class="service__img-wrapper pb-6" :data-cursor-text="isActive ? 'Fermer' : 'Ouvrir'">
                <NuxtPicture
                    @click="toogleService"
                    :src="imgPath(img)"
                    format="webp"
                    :class="'service__img'" 
                    sizes="90vw md:870px lg:1093px" 
                    :alt="title"
                    loading="lazy"
                    quality="70"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        index: Number,
        slug: String,
        title: String,
        description: String,
        img: String,
        isActive: Boolean
    })
    const emit = defineEmits([
        'toogleService', 
    ])

    const toogleService = () => {
        console.log(props.index)
        emit('toogleService', props.index)
    }

    const serviceId = computed(() => `0${props.index + 1}.`)
</script>


<style scoped lang="scss">
.service {
    --service-img-height: clamp(700px, 70vh, 900px);
    $root:&;
    cursor: pointer;
    overflow: hidden;

    &:not(.service--active):hover {
        #{$root}__img-wrapper  {
            transform: translateY(-4%);
        }
    }
    &--active {
        #{$root}__img-container  {
            height: var(--service-img-height);
        }
    }
    &__border {
        width: 100%;
        height: 1px;
        background-color: var(--color-neutral-70);
    }
    &__content-wrapper {
        display: grid;
        grid-template-columns: repeat(12, minmax(0, 1fr));
        column-gap: var(--r-space-sm);
    }
    &__left-wrapper {
        display: flex;
    }
    &__id {
        color: var(--color-neutral-50);
    }
    & p {
        color: var(--color-neutral-20);
    }
    &__img-container {
        width: 100%;
        height: 0vh;
        transition: height 1s var(--alias-default-ease);
    }
    &__img-wrapper {
        width: 100%;
        height: var(--service-img-height);
        overflow: hidden;
        transition: transform .6s var(--alias-default-ease);
    }
    &__img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: 1rem;
        overflow: hidden;
    }
}
@media screen and (max-width: 767px){
    .service {
        --service-img-height: clamp(300px, 60vh, 500px);

        &__left-wrapper {
            flex-direction: column;
        }
        &__img-container  {
            height: var(--service-img-height);
        }
    }
}
</style>
