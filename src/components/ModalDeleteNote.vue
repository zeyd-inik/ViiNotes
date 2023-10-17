<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
import { onClickOutside } from '@vueuse/core';
import { useNotesStore } from '@/stores/notesStore.js';
const notesStore = useNotesStore();

const modalRef = ref(null);
onClickOutside(modalRef, closeModal);

function closeModal() {
    emit('closeModal');
}

const props = defineProps(['noteId']);
const emit = defineEmits(['closeModal']);
</script>
<template>
    <div class="overlay"></div>
    <div ref="modalRef" class="modal">
        <div class="modal-box modal-A">
            <p>Delete Note?</p>
            <i class="delete-icon">
                <Icon
                    class="icon"
                    color="#f14668"
                    height="30"
                    icon="typcn:delete"
                    width="30"
                    @click="$emit('closeModal')"
                />
            </i>
        </div>
        <div class="modal-box modal-B">Are you sure you want to delete this note?</div>
        <div class="modal-box modal-C">
            <button @click="$emit('closeModal')" class="btn">Cancel</button>
            <button @click="notesStore.deleteNote(noteId)" class="btn">Delete</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.overlay {
    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    z-index: 2;
    background-color: black;
    opacity: 0.8;
}
.modal {
    position: fixed;
    top: calc(50vh - 100px);
    left: calc(50vw - 225px);
    z-index: 99;

    background-color: rgb(240, 234, 234);
    border-radius: 6px;
    width: 450px;
    max-width: 94vw;
    height: 200px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .icon {
        cursor: pointer;
    }
    &-box {
        padding: 1rem;
        display: flex;
    }
    &-A {
        align-items: center;
        justify-content: space-between;
        font-size: 22px;
        font-weight: 600;
    }
    &-B {
        align-items: center;
        background-color: white;
        font-size: 16px;
    }
    &-C {
        flex: 2;
        display: flex;
        align-items: center;
        justify-content: end;
        .btn {
            font-size: 16px;
            margin-left: 0.4rem;
            border: none;
            padding: 0.6rem 1rem;
            box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
            border-radius: 3px;
            &:hover {
                cursor: pointer;
            }
            &:nth-of-type(2) {
                background-color: #f14668;
                color: white;
            }
        }
    }
}
</style>
