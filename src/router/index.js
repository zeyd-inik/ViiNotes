import { createRouter, createWebHistory } from 'vue-router';
import ViewNotes from '../views/ViewNotes.vue';
import ViewStats from '../views/ViewStats.vue';
import ViewEditNote from '../views/ViewEditNote.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'ViewNotes',
            component: ViewNotes,
        },
        {
            path: '/stats',
            name: 'ViewStats',
            component: ViewStats,
        },
        {
            path: '/EditNote/:id',
            name: 'ViewEditNote',
            component: ViewEditNote,
        },
    ],
});

export default router;
