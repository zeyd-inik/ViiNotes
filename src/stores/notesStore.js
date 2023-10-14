import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useNotesStore = defineStore('notes', () => {
    const notes = ref([]);

    function addNoteToStore(userNote) {
        notes.value.unshift(userNote);
    }
    /* const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  } */

    return { notes, addNoteToStore /*  doubleCount, increment */ };
});
