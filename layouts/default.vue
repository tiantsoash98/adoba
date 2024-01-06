<template>
    <div class="page__cursor" data-cursor="-exclusion">
        <Header/>

        <!-- output the page content -->
        <main class="page__wrapper">
            <slot />
        </main>

        <Footer/>
    </div>
</template>

<!-- <style scoped>
    .router-link-exact-active {
        color: green;
    }
</style> -->