<template>
  <button class="button" :disabled="disabled" :aria-label="text">
    <div class="button__frame"></div>
    <span class="button__label title-h6">{{ text }}</span>
    <div class="button__icon-wrapper ml-5 ml-sm-3" v-if="icon != 'none'">
        <IconArrowRight icon-class="button__icon" v-if="icon == 'arrow-right'"/>
        <IconArrowUpRight icon-class="button__icon" v-else-if="icon == 'arrow-up-right'"/>
        <IconSuccess icon-class="button__icon" v-else-if="icon == 'success'"/>
        <IconClock icon-class="button__icon" v-else-if="icon == 'clock'"/>
    </div>
  </button>
</template>

<script>
export default {
    props: {
        text: String,
        disabled: Boolean,
        icon: {
            type: String,
            default: 'arrow-right'
        }
    },
}
</script>


<style scoped lang="scss">
.button {
    --button-color: var(--brand-secondary);
    --button-color-opposite: var(--brand-primary);
    $root:&;

    color: var(--button-color);
    padding: calc(0.75 * var(--r-base-unit));
    border: 1px solid var(--button-color);
    border-radius: 50px;
    overflow: hidden;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    transition: color 0.3s var(--alias-default-ease);
    cursor: pointer; 
    transition: color 0.5s var(--alias-default-ease) .2s,
                border 0.5s var(--alias-default-ease) .2s,
                background-color 0.6s var(--alias-default-ease) .1s; 

    &:hover {
        #{$root}__icon-wrapper {
            transform: translateX(0.3vw);
        }
    }

    &--small {
        border: 1px solid var(--button-color);
        padding: calc(0.3 * var(--r-base-unit)) calc(0.5 * var(--r-base-unit));

        #{$root}__icon-wrapper {
            display: none;
        }
        #{$root}__label {
            font-size: calc( var(--paragraph-text) * var(--unit-fx)); 
        }

        &:hover {
            background-color: var(--button-color);
            color: var(--button-color-opposite);
        }
    }

    &--primary {
        background-color: var(--brand-primary);

        &:hover {
            background-color: var(--brand-secondary);
            color: var(--brand-primary);
        }
    } 
    &--tertiary {
        padding: 0;
        border: none;
        overflow: visible;
    }
    &--white {
        --button-color: var(--brand-primary);
        --button-color-opposite: var(--brand-secondary);
    }
    &__frame {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--brand-secondary);
        transform: scaleY(0);
        transform-origin: top;
        transition: transform 0.8s var(--alias-default-ease); 
    }
    &__icon-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: transform 0.5s var(--alias-default-ease); 
        width: 1.25rem;
    }
    &__icon {
        transform: translateY(50%);
        fill: currentColor;
    }
}
@media screen and (max-width: 1280px){
    .button {
        padding: calc(1 * var(--r-base-unit));

        &__icon-wrapper {
            width: 1rem;
        }
        &--small {
            padding: calc(0.5 * var(--r-base-unit)) calc(0.5 * var(--r-base-unit));
        }
        &--tertiary {
            padding: 0;
        }
    }
}
@media screen and (max-width: 576px){
    .button {
        padding: calc(1.5 * var(--r-base-unit));

        &--tertiary {
            padding: 0;
        }
    }
}
</style>
