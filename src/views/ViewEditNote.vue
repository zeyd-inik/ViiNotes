<script setup>
import { ref, onMounted, toRaw } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useNotesStore } from '@/stores/notesStore.js';

const notesStore = useNotesStore();

const route = useRoute();
const router = useRouter();
const noteId = route.params.id;

const textareaRef = ref(null);
onMounted(() => {
    textareaRef.value.focus();
});

const noteText = ref(null);
const proxyObj = notesStore.selectedNote(noteId);
noteText.value = toRaw(proxyObj[0].text);

function updateHandle() {
    notesStore.updateNote(noteText.value, noteId);
    router.push({ name: 'ViewNotes' });
}
</script>
<template>
    <form @submit.prevent="updateHandle">
        <p class="title">Edit Note</p>
        <textarea ref="textareaRef" v-model="noteText"></textarea>
        <div class="buttons">
            <button @click="$router.push({ name: 'ViewNotes' })" class="btn">Cancel</button>
            <button type="submit" class="btn">Save Note</button>
        </div>
    </form>
</template>

<style lang="scss" scoped>
form {
    background-color: #3850b7;
    width: 100%;
    min-height: 240px;
    padding: 1rem;
    border-radius: 5px;
    .title {
        color: white;
        font-weight: 600;
        font-size: larger;
        padding-bottom: 1rem;
    }
    textarea {
        height: 160px;
        width: 100%;
        border-radius: 5px;
        resize: vertical;
        padding: 1rem;
        outline: none;
        font-size: larger;

        &::placeholder {
            color: rgb(211, 208, 208);
            font-size: large;
        }
    }
    .buttons {
        display: flex;
        justify-content: end;
        align-items: center;
        .btn {
            border-radius: 5px;
            border: none;
            padding: 0.7rem 0.9rem;
            font-size: 16px;
            color: white;

            margin-top: 1rem;
            text-transform: capitalize;
            &:nth-of-type(1) {
                background-color: white;
                color: #3850b7;
            }
            &:nth-of-type(2) {
                margin-left: 6px;
                background-color: #627df3;
            }
            &:hover {
                cursor: pointer;
            }
        }
    }
}
</style>
