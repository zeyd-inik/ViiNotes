<script setup>
/* icon library */
import { Icon } from '@iconify/vue';
import { RouterLink, RouterView } from 'vue-router';
import { ref } from 'vue';

const mobil = ref(true);
const isNavOpen = ref(false);
</script>

<template>
    <nav>
        <div class="navbar">
            <div class="navbar-A">
                <RouterLink :to="{ name: 'ViewNotes' }"><p class="app-name">ViiNotes</p></RouterLink>

                <div class="nav-icons">
                    <Icon icon="uis:bars" class="icon" v-if="!isNavOpen" @click="isNavOpen = !isNavOpen" />
                    <Icon icon="ph:x" class="icon" v-if="isNavOpen" @click="isNavOpen = !isNavOpen" />
                </div>
            </div>
            <Transition name="nav">
                <div class="navbar-B" v-if="isNavOpen">
                    <RouterLink :to="{ name: 'ViewNotes' }">Notes</RouterLink>
                    <RouterLink :to="{ name: 'ViewStats' }">Stats</RouterLink>
                </div>
            </Transition>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
.navbar {
    font-family: 'Open Sans', sans-serif;
    font-family: 'Poppins', sans-serif;

    &-A {
        font-size: larger;
        padding: 0.5rem 1rem;
        letter-spacing: 0.8px;
        background-color: #48c78e;
        color: white;

        letter-spacing: 0.8px;

        display: flex;
        justify-content: space-between;
        a {
            text-decoration: none;
            color: white;
        }
        .nav-icons {
            .icon {
                font-size: 24px;
                transition: transform 0.2s ease;

                &:hover {
                    cursor: pointer;
                    transform: scale(1.18);
                }
            }
        }
    }
    &-B {
        position: fixed;
        right: 0;
        left: 0;
        z-index: 3;

        display: flex;
        flex-direction: column;

        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

        a {
            text-decoration: none;
            color: black;
            font-weight: lighter;
            padding: 0.5rem 1rem;
            &.router-link-active {
                background-color: rgb(248, 243, 243);
            }
        }
    }
}
/* transition */
.nav-enter-active,
.nav-leave-active {
    transition: all ease-in-out 0.8s;
}
.nav-enter-from,
.nav-leave-to {
    transform: rotateX(-90deg);
}
</style>
