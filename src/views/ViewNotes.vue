<script setup>
import AddNotesForm from '@/components/AddNotesForm.vue';
import NoteCard from '@/components/NoteCard.vue';
import { useNotesStore } from '@/stores/notesStore.js';

const notesStore = useNotesStore();
</script>

<template>
    <AddNotesForm />
    <NoteCard v-for="noteObj in notesStore.notes" :note="noteObj" :key="noteObj.id" />
</template>

<style lang="scss" scoped></style>
