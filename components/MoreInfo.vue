<template>
    <div>
        <section :class="['section more', {'more--dark': theme == 'dark'}]">
            <div class="container">
                <div class="row">
                    <div class="more__title-wrapper col-12 col-sm-6 col-md-7 pr-7">
                        <h3 class="text-visually-hidden">{{ title }}</h3>
                        <div class="more__title title-h1">{{ title }}</div>
                    </div>
                    <div class="more__content-wrapper col-12 col-sm-6 col-md-5 mt-5">
                        <h6 class="more__description pb-7">{{ description }}</h6>
                        <NuxtLink 
                            :to="`/${buttonRedirect}`" 
                            v-if="buttonRedirectType == 'internal'"
                            :aria-label="title"
                        >
                            <Button :text="buttonLabel" ></Button>
                        </NuxtLink>
                        <a 
                            aria-label="Envoyer un email"
                            :href="`mailto:${ buttonRedirect }`" 
                            target="_blank" 
                            v-else-if="buttonRedirectType == 'mail'"
                        >
                            <Button :text="buttonLabel" icon="arrow-up-right" class="button--tertiary button--white title-h5"></Button>
                        </a>
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
    buttonRedirectType: {
        type: String,
        default: 'internal'
    },
    buttonType: {
        type: String,
        default: ''
    },
    buttonStyle: {
        type: String,
        default: ''
    },
    theme: String
})
</script>

<style lang="scss" scoped>
.more {
    background-color: var(--color-neutral-10);
    $root:&;

    &--dark {
        background-color: var(--brand-secondary);

        #{$root}__description  {
            color: var(--color-neutral-20);
        }
    }
    &__content-wrapper  {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
}
</style>