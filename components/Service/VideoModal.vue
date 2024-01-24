<template>
    <div
        :class="{
            'video-modal': true, 
            'video-modal--open': isOpen,
            'video-modal--close': !isOpen,
        }">
        <div class="video-modal__backdrop" @click="close"></div>
        <div class="video-modal__icon-wrapper " @click="close">
            <IconXClose icon-class="video-modal__icon video-modal__close-icon"></IconXClose>
        </div>
        <div class="video-modal__wrapper">
            <vue-vimeo-player 
                class="video-modal__player"
                ref="player" 
                :video-url="videoUrl"
                :options="playerOptions"
                @ready="playerReady = true"
            />
        </div>
       
    </div>
</template>

<script setup>
    import { vueVimeoPlayer } from 'vue-vimeo-player'
    const { gsap } = useGsap();
    const player = ref(null)
    const playerReady = ref(false)
    const playerOptions = { muted: true, autoplay: false, loop: true } 
    const isClickable = ref(true)
    const isOpen = ref(false)

    const props = defineProps({
        videoUrl: String,
        toogleState: String,
    })
    const emit = defineEmits([
        'animationOpenComplete', 
        'animationCloseComplete'
    ])

    watch(() => props.toogleState, (newVal) => {
        if(newVal == "opening"){
            open();
        }
    });
    
    // Toogle animations
    const open = () => {
        isClickable.value = false

        // start open animation
        gsap.timeline({
            onComplete: () => {
                isClickable.value = true
                isOpen.value = true
                emit('animationOpenComplete')
                if(playerReady.value == true){
                    player.value.play()
                }
            },
            defaults: {
                duration: 0.8,
                ease: "power2.inOut"
            },
        })
        .set('.video-modal', { display: 'flex'})
        .set('.video-modal__backdrop', { display: 'flex', opacity: 0, pointerEvents: 'all'})
        .set('.video-modal__wrapper', { display: 'flex', opacity: 0, pointerEvents: 'all' })
        .to('.video-modal__backdrop', { 
            opacity: 0.9,
            duration: 0.6,
        })
        .to('.video-modal__wrapper', { 
            opacity: 1,
            duration: 0.6,
        }, '<')
    }

    const close = () => {
        if(isClickable.value == true) {
            isClickable.value = false

            // start close animation
            gsap.timeline({
                onComplete: () => {
                    if(playerReady.value == true){
                        player.value.pause()
                    }
                    isClickable.value = true
                    isOpen.value = false
                    emit('animationCloseComplete')
                },
                defaults: {
                    duration: 0.8,
                    ease: "power2.inOut"
                },
            })
            .to('.video-modal__wrapper', { 
                opacity: 0,      
            }, '<')
            .to('.video-modal__backdrop', { 
                opacity: 0,      
            }, '<+0.1s')
            .set('.video-modal__backdrop', { display: 'none', pointerEvents: 'none'})
            .set('.video-modal__wrapper', { display: 'none', pointerEvents: 'none'})
            .set('.video-modal', { display: 'none'})
        }
    }
</script>

<style lang="scss">
.video-modal {
    $root: &;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: calc(var(--z-index-nav) + 1);
    display: none;
    color: var(--brand-primary);
    justify-content: center;
    align-items: center;

    &__backdrop {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background-color: var(--brand-secondary);
        opacity: 0.8;
    }
    &__wrapper {
        width: 100%;
        height: 100%;
        padding: var(--r-space-lg);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    &__player {
        width: 100%;
        height: 100%;
        
        & iframe {
            width: 100%;
            height: 100%;
        }
    }
    &__icon-wrapper {
        position: absolute;
        top: var(--r-space-sm);
        right: var(--r-space-sm);
        z-index: 1;
        padding: var(--r-space-xs);
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: var(--r-space-md);
        cursor: pointer;
    }
    &__close-icon {
        transition: transform 0.3s var(--alias-default-ease);

        &:hover {
            transform: rotate(90deg);
        }
    }
    &__icon{
        width: 100%;
        fill: currentColor;
    }
}
</style>