<template>
    <section class="section service-others" data-cursor="-inverse">
        <div class="container">
            <div class="service-others__label-wrapper">
                <h6>{{ content.serviceOthers.serviceOthersLabel }}</h6>
            </div>
            <div class="service-others__list-wrapper">
                <ul>
                    <li v-for="(service) in content.serviceOthers.serviceOthersList.data" :key="service.attributes.serviceSlug">
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
        content: Array
    })
</script>

<style lang="scss" scoped>
.service-others {
    background-color: var(--brand-secondary);

    &__label-wrapper {
        color: var(--color-neutral-40);
        margin-bottom: var(--r-space-md);
    }
}
</style>