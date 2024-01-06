<template>
    <section class="section services">
        <div class="container">
            <div class="services__label-wrapper">
                <h6>Nos Services</h6>
            </div>
            <div class="services__list-wrapper">
                <ul>
                    <li v-for="(service, index) in services" :key="service.index">
                        <HomeService
                            :index="service.index"
                            :title="service.title"
                            :description="service.description"
                            :img="service.img"
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
    const services = useAdobaServices();
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