<template>
    <div>
        <Header/>

        <!-- output the page content -->
        <main class="page-wrapper">
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