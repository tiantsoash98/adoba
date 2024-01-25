<template>
    <div>
        <div :class="['accordion-item accordion-item__main-wrapper pb-8 pb-sm-6', {'accordion-item--dark': theme == 'dark'}]" @click="toogleItem">
            <div class="accordion-item__border"></div>
            <div class="accordion-item__header-wrapper pt-8 pt-sm-6">
                <p class="accordion-item__header title-h6">{{ header }}</p>
                <div class="accordion-item__icon-wrapper ml-7 ml-sm-5">
                    <IconPlus :icon-class="getIconClass(!isActive)"/>
                    <IconMinus :icon-class="getIconClass(isActive)"/>
                </div>
            </div>
            <div class="accordion-item__overflow-wrapper" ref="wrapperEl">
                <div class="row accordion-item__content-wrapper content-element pt-7 pt-sm-5 pb-7 pb-sm-5">
                    <div :class="contentFullClass" v-html="$mdRenderer.render(content)"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { gsap } = useGsap()
const isClickable = ref(true)
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
        default: 'col-12'
    },
    theme: String
})

const emit = defineEmits([
    'toogleItem', 
])

const toogleItem = () => {
    if(isClickable.value == true){
        emit('toogleItem', props.id)
    }
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
    isClickable.value = false

    gsap.timeline({
        defaults: {
            duration: 0.6,
            ease: "power2.inOut"
        },
        onComplete: () => {
            isClickable.value = true
        }
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
        onComplete: () => {
            isClickable.value = true
        }
    })
    .to(wrapperEl.value, { 
        height: 0 
    })
}

const getIconClass = (isItemActive) => {
    const baseClass = 'accordion-item__icon';
    if(isItemActive) return `${baseClass} accordion-item__icon--active`
    else return baseClass
}

const contentFullClass = computed(() => `rich-text accordion-item__content ${props.contentClass}`)
</script>

<style lang="scss">
.accordion-item {
    $root:&;

    &--dark {
        #{$root}__border {
            background-color: var(--color-neutral-70);
        }
        & p {
            color: var(--color-neutral-10);
        }
    }
    &__main-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        cursor: pointer;
    }
    &__border {
        width: 100%;
        height: 1px;
        background-color: var(--color-neutral-20);
    }
    &__header-wrapper {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    &__header {
        transition: opacity .3s var(--alias-default-ease);

        &:hover {
            opacity: 0.7;
        }
    }
    &__icon-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 1.25rem;
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
}
@media screen and (max-width: 1280px){
    .accordion-item  {
        &__icon-wrapper {
            min-width: 1rem;
            max-width: 1rem;
        }
    }
}
</style>