<script setup>
import AddNotesForm from '@/components/AddNotesForm.vue';
import NoteCard from '@/components/NoteCard.vue';
</script>

<template>
    <div class="container">
        <div class="wrapper">
            <AddNotesForm />
            <NoteCard />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    min-height: calc(100vh - (55.78px + 2rem));
    background-color: #effaf5;
    .wrapper {
        max-width: 1024px;
        margin: 0 auto;
        padding: 1rem 2rem;
    }
}
</style>
