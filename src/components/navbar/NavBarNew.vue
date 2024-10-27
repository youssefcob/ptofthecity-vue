<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch, type Ref } from 'vue';

import NavList from './NavbarComps/NavListHorizontal.vue';
import NavLogo from './NavbarComps/NavLogo.vue';
import ResponsiveDropdown from './ResponsiveDropDown/ResponsiveDropdown.vue';
import DropDownButton from './ResponsiveDropDown/DropDownButton.vue';
import SearchBarNew from './NavbarComps/SearchBarNew.vue';
import Mobile from './NavbarComps/Mobile.vue';

import { useWindowScroll } from '@vueuse/core';

let menuState = ref(false); // menuState is now a reactive reference
const handleDropdownUpdate = () => {
    // console.log('Dropdown value updated:', newValue);
    menuState.value = !menuState.value; // Update the reactive reference value
    // console.log(menuState.value);
}
const nav = ref<HTMLElement | null>(null);
const mobileNav = ref<HTMLElement | null>(null);
// onMounted(() => {
//     var x = window.matchMedia("(max-width: 950px)")

//     let prevScrollpos = window.scrollY;
//     const handleScroll = () => {
//         const currentScrollPos = window.scrollY;
//         if (!x.matches) {
//             if (nav.value === null) return;
//             if (prevScrollpos > currentScrollPos) {
//                 nav.value.style.top = "0";
//             } else {
//                 nav.value.style.top = "-9.5vh";
//             }
//             prevScrollpos = currentScrollPos;
//         } else {
//             if (mobileNav.value === null) return;
//             if (prevScrollpos > currentScrollPos) {
//                 mobileNav.value.style.top = "0";
//             } else {
//                 mobileNav.value.style.top = "-9.5vh";
//             }
//             prevScrollpos = currentScrollPos;
//         }

//     };

//     window.addEventListener('scroll', handleScroll);

//     onUnmounted(() => {
//         window.removeEventListener('scroll', handleScroll);
//     });
// });

const { x, y } = useWindowScroll()

const navOnLanding = ref(true);

watch(y, (newValue) => {
    if (newValue > 880 && window.location.pathname === '/') {
        navOnLanding.value = false;
        // console.log(newValue, window.location.pathname)
    } else if(window.location.pathname !== '/'){
        navOnLanding.value = false;

    } else {
        navOnLanding.value = true;
        // console.log(newValue, window.location.pathname)


    }
});
</script>


<template>
    <nav :class="`navbar horizontal ${navOnLanding ? 'main' : 'secondary'}`">
        <div class="logo">
            <router-link to="/">
                <NavLogo />
            </router-link>
        </div>
        <div class="navlist">
            <NavList :navOnLanding="navOnLanding"/>
        </div>

        <div class="util-wrapper">
            <!-- smth -->
            <SearchBarNew :navOnLanding="navOnLanding" />
            <Mobile />
            <!-- <Lang /> -->
        </div>
    </nav>

    <nav class="navbar mobile">
        <div class="logo">
            <router-link to="/">
                <NavLogo />
            </router-link>
        </div>
        <DropDownButton @dropdown="handleDropdownUpdate" />
        <ResponsiveDropdown responsive @dropdown="handleDropdownUpdate" v-if="menuState" />

    </nav>

</template>


<style scoped lang="scss">
.navbar {
    height: calc(10vh + 1rem);
    padding: 1rem 3.12rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: fixed;
    z-index: 2;
    transition: all .5s ease-in-out;



    .logo {
        align-self: center;
    }

    &.main {
    transition: all .5s ease-in-out;

        background-color: transparent;

    }

    &.secondary {
    transition: all .5s ease-in-out;

        background-color: rgba(238, 236, 237, 0.20);
        backdrop-filter: blur(200px);
    }

    &.horizontal {

        .logo {
            height: 80%;
        }
    }

    &.mobile {
        display: none;

        .logo {
            height: 90%;
        }
    }
}



.util-wrapper {
    display: flex;
    gap: 1rem;
    align-items: center;
}

@media (max-width: 950px) {
    .navbar.horizontal {
        display: none;
    }

    .navbar.mobile {
        display: flex;
        align-items: center;

        @media screen and (max-width: 426px) {
            .logo {
                height: 70%;
            }
        }
    }
}
</style>
