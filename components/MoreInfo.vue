<template>
    <div>
        <section :class="['section more', {'more--dark': theme == 'dark'}]">
            <div class="container">
                <div class="row">
                    <div class="more__title-wrapper">
                        <h3 class="text-visually-hidden">{{ title }}</h3>
                        <div class="more__title title-h1">{{ title }}</div>
                    </div>
                    <div class="more__content-wrapper">
                        <h6 class="more__description">{{ description }}</h6>
                        <NuxtLink :to="`/${buttonRedirect}`" v-if="buttonRedirectType == 'internal'">
                            <Button :text="buttonLabel" ></Button>
                        </NuxtLink>
                        <a :href="`mailto:${ buttonRedirect }`" target="_blank" v-else-if="buttonRedirectType == 'mail'">
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
    &__title-wrapper {
        grid-column: span 5;
        padding-right: var(--r-space-md);
    }
    &__content-wrapper  {
        grid-column: 8/span 5;
        display: flex;
        flex-direction: column;
    }
    &__description {
        margin-bottom: var(--r-space-md);
    }
}
</style>