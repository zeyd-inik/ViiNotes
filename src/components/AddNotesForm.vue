<script setup>
import { uuid } from 'vue-uuid';
import { useNotesStore } from '@/stores/notesStore.js';
import { ref } from 'vue';

const notesStore = useNotesStore();

const userInput = ref('');

function addNote() {
    const note = {
        id: uuid.v4(),
        text: userInput.value,
    };
    notesStore.addNoteToStore(note);
    userInput.value = '';
}
</script>
<template>
    <form @submit.prevent="addNote">
        <textarea v-model="userInput" placeholder="Add a new note"></textarea>
        <button class="btn" :class="{ btn_disabled: !userInput }" type="submit" :disabled="!userInput">
            add new note
        </button>
    </form>
</template>

<style lang="scss" scoped>
form {
    background-color: rgb(25, 117, 56);
    width: 100%;
    min-height: 240px;
    padding: 1rem;
    border-radius: 5px;
    textarea {
        height: 160px;
        width: 100%;
        border-radius: 5px;
        resize: vertical;
        padding: 1rem;
        outline: none;
        font-size: larger;
        font-family: 'Raleway', sans-serif;

        &::placeholder {
            color: rgb(211, 208, 208);
            font-size: large;
        }
    }
    .btn {
        display: block;
        margin-left: auto;
        border-radius: 5px;
        border: none;
        padding: 0.7rem 0.9rem;
        font-size: 16px;
        color: white;
        background-color: #48c78e;
        margin-top: 16px;
        text-transform: capitalize;
    }
    &:hover {
        cursor: pointer;
    }
    .btn_disabled {
        background-color: rgb(175, 169, 169);
        &:hover {
            cursor: not-allowed;
        }
    }
}
</style>
