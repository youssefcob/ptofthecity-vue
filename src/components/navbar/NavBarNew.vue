<script setup lang="ts">
import { onMounted, onUnmounted, ref, type Ref } from 'vue';

import Lang from './NavbarComps/LanguageDropDown.vue';
import NavList from './NavbarComps/NavListHorizontal.vue';
import NavLogo from './NavbarComps/NavLogo.vue';
import ProfileSignup from './NavbarComps/ProfileSignup.vue';
import SearchBar from './NavbarComps/SearchBar.vue';
import ResponsiveDropdown from './ResponsiveDropDown/ResponsiveDropdown.vue';
import DropDownButton from './ResponsiveDropDown/DropDownButton.vue';
import SearchBarNew from './NavbarComps/SearchBarNew.vue';
import Mobile from './NavbarComps/Mobile.vue';

let menuState = ref(false); // menuState is now a reactive reference
const handleDropdownUpdate = () => {
    // console.log('Dropdown value updated:', newValue);
    menuState.value = !menuState.value; // Update the reactive reference value
    console.log(menuState.value);
}
const nav = ref<HTMLElement | null>(null);
const mobileNav = ref<HTMLElement | null>(null);
onMounted(() => {
    var x = window.matchMedia("(max-width: 950px)")

    let prevScrollpos = window.scrollY;
    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        if (!x.matches) {
            if (nav.value === null) return;
            if (prevScrollpos > currentScrollPos) {
                nav.value.style.top = "0";
            } else {
                nav.value.style.top = "-9.5vh";
            }
            prevScrollpos = currentScrollPos;
        } else {
            if (mobileNav.value === null) return;
            if (prevScrollpos > currentScrollPos) {
                mobileNav.value.style.top = "0";
            } else {
                mobileNav.value.style.top = "-9.5vh";
            }
            prevScrollpos = currentScrollPos;
        }

    };

    window.addEventListener('scroll', handleScroll);

    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll);
    });
});

</script>


<template>
    <nav class="navbar horizontal">
        <div class="logo">
            <router-link to="/">
                <NavLogo />
            </router-link>
        </div>
        <div class="navlist">
            <NavList />
        </div>

        <div class="util-wrapper">
            <!-- smth -->
            <SearchBarNew />
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
    height: calc(10vh + 2.5rem);
    padding: 2rem 3.12rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: fixed;
    z-index: 2;
    background: rgba(43, 192, 212, 0.25);
    backdrop-filter: blur(200px);

    &.horizontal {
        background: rgba(43, 192, 212, 0.25);
        backdrop-filter: blur(200px);
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
