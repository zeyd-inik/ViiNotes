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
    min-height: calc(100vh - 49.7812px);
    background-color: #effaf5;
    @media (max-width: 1024px) {
        min-height: calc(100vh - 57.7812px);
    }
    .wrapper {
        max-width: 1024px;
        margin: 0 auto;
        padding: 1rem 2rem;
    }
}
</style>
