<script setup></script>
<template>
    <form>
        <textarea placeholder="Add a new note"></textarea>
        <button class="btn" type="submit">add new note</button>
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
        &::placeholder {
            color: rgb(204, 198, 198);
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
        &:hover {
            cursor: pointer;
        }
    }
}
</style>
