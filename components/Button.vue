<template>
  <button class="button">
    <div class="button__frame"></div>
    <span class="button__label">{{ text }}</span>
    <div class="button__icon-wrapper">
        <svg class="button__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.41 14.83">
            <polygon points="11 14.83 9.59 13.41 14.59 8.41 0 8.41 0 6.41 14.59 6.41 9.59 1.41 11 0 18.41 7.41 11 14.83"/>
        </svg>
    </div>
  </button>
</template>

<script setup>

const { text } = defineProps(['text'])

</script>


<style scoped lang="scss">
.button {
    $root:&;
    font-family: var(--font-family-primary), 'Arial', serif; 
    letter-spacing: 0;
    line-height: 1.4;
    font-weight: 350;

    color: var(--brand-secondary);
    padding: calc(0.75 * var(--r-base-unit));
    padding-right: var(--r-space-sm);
    border: 1px solid var(--brand-secondary);
    border-radius: 50px;
    overflow: hidden;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    transition: color 0.3s var(--alias-default-ease);
    cursor: pointer; 
    transition: color 0.6s var(--alias-default-ease),
                background-color 0.6s var(--alias-default-ease) .1s; 

    &:hover {
        #{$root}__icon-wrapper {
            transform: translateX(0.3vw);
        }
    }

    &--small {
        border: 1px solid var(--brand-primary);
        padding: calc(0.3 * var(--r-base-unit)) calc(0.5 * var(--r-base-unit));

        #{$root}__icon-wrapper {
            display: none;
        }

        &:hover {
            background-color: var(--brand-primary);
            color: var(--brand-secondary);
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

        #{$root}__icon {
            width: calc(0.5 * var(--r-base-unit));
            transform: translateY(80%);
        }
    }
    &--white {
        color: var(--brand-primary);
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
        margin-left: var(--r-space-xs);
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: transform 0.5s var(--alias-default-ease); 
    }
    &__icon {
        transform: translateY(50%);
        width: calc(0.65 * var(--r-base-unit));
        fill: currentColor;
    }
}
</style>
