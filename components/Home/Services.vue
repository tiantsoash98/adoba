<template>
    <section class="section services" data-cursor="-inverse">
        <div class="container">
            <div class="services__label-wrapper">
                <h6>Nos Services</h6>
            </div>
            <div class="services__list-wrapper">
                <ul>
                    <li v-for="(service, index) in services" :key="service.index">
                        <HomeService
                            :slug="service.attributes.serviceSlug"
                            :index="index + 1"
                            :title="service.attributes.serviceTitle"
                            :description="service.attributes.serviceDescription"
                            :img="service.attributes.serviceImg.data.attributes.url"
                            :class="{'service--active': index === isActiveIndex}"
                            @click="toogleActiveService(index)"
                        ></HomeService>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup>
    const props = defineProps({
        services: Array
    })

    const isActiveIndex = ref(-1);

    const toogleActiveService = (index) => {
        if(index == isActiveIndex.value){
            isActiveIndex.value = -1;
        }
        else {
            isActiveIndex.value = index;
        }
    }
</script>

<style lang="scss" scoped>
.services {
    background-color: var(--brand-secondary);
    color: var(--brand-primary);

    &__label-wrapper {
        color: var(--color-neutral-40);
        margin-bottom: var(--r-space-md);
    }
}
</style>