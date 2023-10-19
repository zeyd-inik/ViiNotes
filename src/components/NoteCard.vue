<script setup>
import ModalDeleteNote from '@/components/ModalDeleteNote.vue';
import { useNotesStore } from '@/stores/notesStore.js';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const notesStore = useNotesStore();

const isModalActive = ref(false);

const props = defineProps({
    note: {
        type: Object,
        required: true,
    },
});
</script>
<template>
    <div class="card">
        <div class="note">
            {{ note.text }}
            <div class="counter">{{ note.text.length }} characters</div>
        </div>
        <div class="buttons">
            <div @click="router.push({ name: 'ViewEditNote', params: { id: note.id } })" class="btn">Edit</div>
            <div @click="isModalActive = true" class="btn">Delete</div>
        </div>
        <ModalDeleteNote v-if="isModalActive" :noteId="note.id" @closeModal="isModalActive = false" />
    </div>
</template>

<style lang="scss" scoped>
.card {
    width: 100%;
    height: 150px;
    background-color: white;
    margin: 1rem 0;
    border-radius: 5px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .counter {
        position: absolute;
        bottom: 8px;
        right: 20px;
        padding: 0.5rem;
        color: rgb(180, 175, 175);
    }

    .note {
        flex: 1;
        border-bottom: 3px solid #effaf5;
        padding: 1rem;
        position: relative;
    }
    .buttons {
        display: flex;
        height: 50px;

        .btn {
            flex: 1;
            height: 100%;
            color: #35795a;
            font-weight: 600;

            display: flex;
            align-items: center;
            justify-content: center;
            transition: background-color ease 0.4s;
            &:hover {
                cursor: pointer;
                background-color: rgb(224, 224, 224);
            }

            &:first-child {
                border-right: 4px solid #effaf5;
            }
        }
    }
}
</style>
