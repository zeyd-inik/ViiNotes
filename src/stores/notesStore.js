import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useNotesStore = defineStore('notes', () => {
    const notes = ref([]);

    function addNoteToStore(userNote) {
        notes.value.unshift(userNote);
    }
    function deleteNote(id) {
        notes.value = notes.value.filter((note) => {
            return note.id != id;
        });
    }

    const numberOfNotes = computed(() => {
        return notes.value.length;
    });
    const numberofCharacters = computed(() => {
        let chars = 0;
        notes.value.forEach((note) => {
            chars += note.text.length;
        });
        return chars;
    });
    /* const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  } */

    return { notes, addNoteToStore, numberOfNotes, numberofCharacters, deleteNote };
});
