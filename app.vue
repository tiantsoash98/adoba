<template>
    <lenis
      :options="lenisOptions"
    >
        <NuxtLayout>
            <NuxtPage/>
        </NuxtLayout>
    </lenis>
</template>
  
<script setup>
    const lenisOptions = useLenis()  
    
    onMounted(() => {
        const { cursor } = useCursor();  
    });
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 1s var(--alias-default-ease);
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>