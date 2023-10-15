<script setup>
import { useNotesStore } from '@/stores/notesStore';
const noteStore = useNotesStore();
</script>
<template>
    <table>
        <thead>
            <tr>
                <th>Stats</th>
                <th>Value</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Number of Notes</td>
                <td>{{ noteStore.numberOfNotes }}</td>
            </tr>
            <tr>
                <td>Number of Characters (of all notes)</td>
                <td>{{ noteStore.numberofCharacters }}</td>
            </tr>
        </tbody>
    </table>
</template>

<style lang="scss" scoped>
table {
    background-color: white;
    width: 100%;
    border-collapse: collapse;
    tr {
        display: flex;
        padding: 0.5rem;
        border-bottom: 1px solid lightgray;
    }
    th,
    td {
        text-align: justify;
        border-spacing: 5px 5px;
        &:first-of-type {
            flex-basis: 90%;
        }
    }

    thead {
        border-bottom: 1.5px solid rgb(161, 159, 159);
    }
}
</style>
