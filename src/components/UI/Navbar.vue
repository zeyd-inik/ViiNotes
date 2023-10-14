<script setup>
/* icon library */
import { Icon } from '@iconify/vue';
import { RouterLink, RouterView } from 'vue-router';
import { onMounted, ref } from 'vue';

onMounted(() => {
    resize();
    window.addEventListener('resize', resize);
});

function resize() {
    if (window.innerWidth >= 1024) {
        mobile.value = false;
    } else {
        mobile.value = true;
    }
}

const mobile = ref(true);
const isNavOpen = ref(false);
</script>

<template>
    <nav>
        <div class="navbar">
            <div class="navbar-A">
                <RouterLink :to="{ name: 'ViewNotes' }">
                    <p class="app-name">ViiNotes</p>
                </RouterLink>
                <div v-if="mobile" class="nav-icons">
                    <Icon icon="uis:bars" class="icon" v-if="!isNavOpen" @click="isNavOpen = !isNavOpen" />
                    <Icon icon="ph:x" class="icon" v-if="isNavOpen" @click="isNavOpen = !isNavOpen" />
                </div>
                <div v-else>
                    <div class="desktop-links">
                        <RouterLink :to="{ name: 'ViewNotes' }">Notes</RouterLink>
                        <RouterLink :to="{ name: 'ViewStats' }">Stats</RouterLink>
                    </div>
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
    font-family: 'Poppins', sans-serif;
    background-color: #48c78e;
    position: relative;
    padding: 0.4rem;

    &-A {
        font-size: larger;
        padding: 0.5rem 1rem;
        letter-spacing: 0.8px;
        color: white;
        letter-spacing: 0.8px;
        max-width: 1024px;
        margin: 0 auto;

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
        .desktop-links a {
            margin-left: 12px;
            font-size: 17px;

            height: 100%;
            width: auto;
            &.router-link-active {
                padding-bottom: 2px;
                border-bottom: 3px solid rgb(207, 236, 204);
            }
        }
    }
    &-B {
        position: fixed;
        right: 0;
        left: 0;
        display: flex;
        flex-direction: column;

        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        transform-origin: top center;
        background-color: white;
        @media (min-width: 1024px) {
            position: absolute;
            right: 5px;
            top: 5px;
        }

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
    opacity: 0;
}
</style>
