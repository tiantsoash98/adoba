<template>
    <section class="section services" data-cursor="-inverse">
        <div class="container">
            <div class="services__label-wrapper">
                <span class="title-h6">Nos Services</span>
            </div>
            <div class="services__list-wrapper">
                <ul>
                    <li v-for="(service, index) in services" :key="service.index">
                        <HomeService
                            :slug="service.attributes.serviceSlug"
                            :index="index"
                            :title="service.attributes.serviceTitle"
                            :description="service.attributes.serviceDescription"
                            :img="service.attributes.serviceImg.data.attributes.url"
                            :class="{'service--active': index == isActiveIndex}"
                            :isActive="index == isActiveIndex"
                            @toogle-service="toogleActiveService"
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
        console.log('Toogle active index, ', index)
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