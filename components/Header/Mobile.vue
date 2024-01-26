<template>
    <nav class="header-mobile">
        <div class="header-mobile__toogler-wrapper">
            <div class="header-mobile__toogle-label header-mobile__toogle-label--menu title-h5">Menu</div>
            <div class="header-mobile__toogle-label header-mobile__toogle-label--close title-h5">Fermer</div>
        </div>
    </nav>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.header-mobile {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    &__toogler-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: flex-end;
        overflow: hidden;
    }
    &__toogle-label {
        &--close {
            position: absolute;
            top: 100%;
        }
    }
}
</style>