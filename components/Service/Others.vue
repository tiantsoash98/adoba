<template>
    <section class="section service-others pt-11 pt-md-9 pb-11 pb-md-9" data-cursor="-inverse">
        <div class="container">
            <div class="service-others__label-wrapper mb-7">
                <h6>Autres services</h6>
            </div>
            <div class="service-others__list-wrapper">
                <ul>
                    <li v-for="(service) in content.serviceOthers.data" :key="service.attributes.serviceSlug">
                        <ServiceOthersItem
                            :title="service.attributes.serviceTitle"
                            :slug="service.attributes.serviceSlug"
                            :img="service.attributes.serviceImg"
                        />
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup>
    const props = defineProps({
        content: Object
    })
</script>

<style lang="scss" scoped>
.service-others {
    background-color: var(--brand-secondary);

    &__label-wrapper {
        color: var(--color-neutral-40);
    }
}
</style>