<script setup>
import { useNotesStore } from '@/stores/notesStore.js';

const notesStore = useNotesStore();
</script>
<template>
    <div v-for="note in notesStore.notes" class="card">
        <div class="note">{{ note.text }}</div>
        <div class="buttons">
            <div class="btn">Edit</div>
            <div class="btn">Delete</div>
        </div>
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

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .note {
        flex: 1;
        border-bottom: 3px solid #effaf5;
        padding: 1rem;
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
