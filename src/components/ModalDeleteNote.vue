<script setup>
import { Icon } from '@iconify/vue';
const props = defineProps({});
const emit = defineEmits(['']);
</script>
<template>
    <div class="overlay"></div>
    <div class="modal">
        <div class="modal-box modal-A">
            <p>Delete Note?</p>
            <i class="delete-icon">
                <Icon icon="typcn:delete" color="#f14668" width="30" height="30" />
            </i>
        </div>
        <div class="modal-box modal-B">Are you sure you want to delete this note?</div>
        <div class="modal-box modal-C">
            <button class="btn">Cancel</button>
            <button class="btn">Delete</button>
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
    width: 450px;
    height: 200px;
    border-radius: 6px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
