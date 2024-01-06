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
    const lenisOptions = useLenis();  
    const {data: fetchedServices }  = await useFetch('/api/services')
    const services = useAdobaServices()
    services.value = fetchedServices
    
    onMounted(() => {
        const cursor = useCursor();  
        document.querySelectorAll('[data-cursor="-neutral"]').forEach(item => {
            item.addEventListener('mouseenter', () => {
                cursor.removeState('-exclusion');
            });
            item.addEventListener('mouseleave', () => {
                cursor.addState('-exclusion');
            });
        }) 
    });
</script>