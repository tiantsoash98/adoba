<template>
    <div class="banner-video__wrapper">
        <video 
            videoClass="banner-video__video"
            :src="src"
            :poster="poster"
            controls
            muted
            playsinline
            autoplay
        ></video>
    </div>
</template>

<script setup>
const props = defineProps({
    src: String,
    poster: String,
    videoClass: String
})
</script>

<style lang="scss" scoped>
.banner-video {
    &__wrapper {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-end;
    }
    &__video{
        width: 100%;
    }
}
</style>