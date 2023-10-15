<script setup>
import Navbar from '@/components/UI/Navbar.vue';
</script>

<template>
    <header>
        <Navbar />
    </header>
    <main>
        <div class="wrapper">
            <RouterView />
        </div>
    </main>
</template>

<style>
main {
    min-height: calc(100vh - 55.78px);
    background-color: #effaf5;
    .wrapper {
        max-width: 1024px;
        margin: 0 auto;
        padding: 1rem 2rem;
    }
}
</style>
