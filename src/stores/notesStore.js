import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useNotesStore = defineStore('notes', () => {
    const notes = ref([]);
    const noteToUpdate = ref(null);

    function addNoteToStore(userNote) {
        notes.value.unshift(userNote);
    }
    function deleteNote(id) {
        notes.value = notes.value.filter((note) => {
            return note.id != id;
        });
    }
    function updateNote(updatedNote, noteId) {
        const index = notes.value.findIndex((note) => {
            return note.id === noteId;
        });
        notes.value[index].text = updatedNote;
    }

    const numberOfNotes = computed(() => {
        return notes.value.length;
    });
    const selectedNote = computed(() => {
        return (noteId) => {
            return notes.value.filter((note) => {
                return note.id === noteId;
            });
        };
    });

    const numberofCharacters = computed(() => {
        let chars = 0;
        notes.value.forEach((note) => {
            chars += note.text.length;
        });
        return chars;
    });

    return { notes, addNoteToStore, selectedNote, numberOfNotes, numberofCharacters, updateNote, deleteNote };
});
