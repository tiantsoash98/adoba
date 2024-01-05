<template>
    <div>
        <header class="header">
            Header here
        </header>

        <!-- output the page content -->
        <main class="page-wrapper">
            <slot />
        </main>

        <footer class="footer">
            Footer here
        </footer>
    </div>
</template>

<!-- <style scoped>
    .router-link-exact-active {
        color: green;
    }
</style> -->