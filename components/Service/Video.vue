<template>
    <div>
        <section class="section service-video">
            <div class="container container--wide service-video__cover">
                <BannerImg
                    class="service-video__thumbnail"
                    imgClass="service-video__img" 
                    :src="imgPath(content.serviceVideo.serviceVideoThumbnail.data.attributes.url)" 
                    role="presentation"
                    @click="openVideoModal"
                />
                <div class="service-video__play-wrapper">
                    <div class="service-video__icon-wrapper service-video__play">
                        <div class="service-video__icon-wrapper" @click="openVideoModal">
                            <IconPlay icon-class="service-video__icon service-video__play"></IconPlay>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <ServiceVideoModal  
            :video-url="content.serviceVideo.serviceVideoUrl"
            :toogleState="toogleModalState"
            @animation-open-complete="modalOpenAnimationComplete"
            @animation-close-complete="modalCloseAnimationComplete"
        ></ServiceVideoModal>
    </div>
</template>

<script setup>
const props = defineProps({
    content: Object,
})
const toogleModalState = ref("")
const openVideoModal = () => {
    toogleModalState.value = "opening"
}

const modalOpenAnimationComplete = () => {
    // Do something on open
}

const modalCloseAnimationComplete = () => {
    toogleModalState.value = ""
}
</script>

<style lang="scss" scoped>
.service {
    &-video {
        $root:&;
        color: var(--brand-primary);
        &__thumbnail {
            cursor: pointer;
        }
        &__play-wrapper {
            cursor: pointer;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: var(--r-space-md);
            border-radius: 50%;
            background-color: var(--color-neutral-50);
            opacity: 0.8;
            transition: opacity .6s var(--alias-default-ease);

            &:hover {
                opacity: 1;

                #{$root}__icon-wrapper {
                    transform: translateX(7%) scale(1.02)
                }
            }
        }
        &__icon-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            max-width: var(--r-space-md);
            transform: translateX(6%);
            transition: transform .6s var(--alias-default-ease);
        }
        &__icon {
            width: 100%;
        }
    }
}
</style>