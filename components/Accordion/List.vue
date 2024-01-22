
import type ItemVue from './Item.vue';
<template>
    <div>
        <div class="accordion-list__main-wrapper">
            <ul class="accordion-list__wrapper">
                <li v-for="(item) in dataList" :key="item.id">
                    <AccordionItem
                        :id="item.id"
                        :header="item.accordionHeader"
                        :content="item.accordionContent"
                        :isActive="isActiveItem(item.id)"
                        content-class="col-8"
                        @toogle-item="toogleActiveItem"
                    ></AccordionItem>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
const activeItemIndex = ref(-1)
const props = defineProps({
    dataList: Array
})

const toogleActiveItem = (id) => {
    if(id == activeItemIndex.value){
        activeItemIndex.value = -1
    }
    else {
        activeItemIndex.value = id
    }
}

const isActiveItem = (id) => {
    return id == activeItemIndex.value
}
</script>

<style lang="scss" scoped>
.accordion-list {
    &__wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
}
</style>