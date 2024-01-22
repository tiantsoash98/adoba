<template>
    <div>
        <div class="accordion-item accordion-item__main-wrapper" @click="toogleItem">
            <div class="accordion-item__border"></div>
            <div class="accordion-item__header-wrapper">
                <p class="accordion-item__header title-h6">{{ header }}</p>
                <div class="accordion-item__icon-wrapper">
                    <IconPlus :icon-class="{'accordion-item__icon': true, 'accordion-item__icon--active': !isActive }"/>
                    <IconMinus :icon-class="{'accordion-item__icon': true, 'accordion-item__icon--active': isActive }"/>
                </div>
            </div>
            <div class="accordion-item__overflow-wrapper" ref="wrapperEl">
                <div class="row accordion-item__content-wrapper content-element">
                    <div :class="contentFullClass">
                        <p>{{ content }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { gsap } = useGsap();
const wrapperEl = ref(null)
const contentEl = ref(null)
const contentHeight = ref(0)
const props = defineProps({
    id: Number,
    header: String,
    content: String,
    isActive: Boolean,
    contentClass: {
        type: String,
        default: 'col'
    }
})

const emit = defineEmits([
    'toogleItem', 
])

const toogleItem = () => {
    emit('toogleItem', props.id)
}

onMounted(() => {
    contentEl.value = wrapperEl.value.querySelector('.content-element')
    if(contentEl.value){
        contentHeight.value = contentEl.value.offsetHeight

        window.addEventListener("resize", function () {
            contentHeight.value = contentEl.value.offsetHeight
        })
    }    
})

watch(() => props.isActive, (newVal) => {
    if(newVal == true){
        open()
    }
    else {
        close()
    }
})

const open = () => {
    gsap.timeline({
        defaults: {
            duration: 0.6,
            ease: "power2.inOut"
        },
    })
    .to(wrapperEl.value, { 
        height: contentHeight.value 
    })
    .from(contentEl.value, { 
        opacity: 0
    }, '<+0.2')
}

const close = () => {
    gsap.timeline({
        defaults: {
            duration: 0.6,
            ease: "power2.inOut"
        },
    })
    .to(wrapperEl.value, { 
        height: 0 
    })
}

const contentFullClass = computed(() => `accordion-item__content ${props.contentClass}`)
</script>

<style lang="scss" scoped>
.accordion-item {
    --accordion-default-padding: var(--r-space-sm);

    &__main-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding-bottom: var(--accordion-default-padding);
        cursor: pointer;
    }
    &__border {
        width: 100%;
        height: 1px;
        background-color: var(--color-neutral-30);
    }
    &__header-wrapper {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-top: var(--accordion-default-padding);
    }
    &__icon-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: var(--r-space-xs-2);
        margin-left: var(--r-space-md);
    }
    &__icon {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 100%;
        opacity: 0;

        transition: opacity .6s var(--alias-default-ease) .1s;
                    
        &--active {
            opacity: 1;
        }
    }
    &__overflow-wrapper {
        overflow: hidden;
        height: 0;
    }
    &__content-wrapper {
        padding-top: var(--r-space-sm);
    }
}
</style>