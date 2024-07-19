<script setup lang="ts">
import { onMounted, onUnmounted, ref, type Ref } from 'vue';

import Lang from './NavbarComps/LanguageDropDown.vue';
import NavList from './NavbarComps/NavListHorizontal.vue';
import NavLogo from './NavbarComps/NavLogo.vue';
import ProfileSignup from './NavbarComps/ProfileSignup.vue';
import SearchBar from './NavbarComps/SearchBar.vue';
import ResponsiveDropdown from './ResponsiveDropDown/ResponsiveDropdown.vue';
import DropDownButton from './ResponsiveDropDown/DropDownButton.vue';

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
                nav.value.style.top = "-8vh";
            }
            prevScrollpos = currentScrollPos;
        } else {
            if (mobileNav.value === null) return;
            if (prevScrollpos > currentScrollPos) {
                mobileNav.value.style.top = "0";
            } else {
                mobileNav.value.style.top = "-8vh";
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
    <nav class="navbar horizontal" ref="nav">
        <div class="left-container">
            <router-link to="/">
                <NavLogo />
            </router-link>
            <NavList />
        </div>

        <div class="right-container">
            <SearchBar />
            <!-- <ProfileSignup /> -->
            <Lang />
        </div>
    </nav>

    <nav class="navbar mobile" ref="mobileNav">
        <router-link to="/">
            <NavLogo />
        </router-link>
        <DropDownButton @dropdown="handleDropdownUpdate" />
        <ResponsiveDropdown responsive @dropdown="handleDropdownUpdate" v-if="menuState" />

    </nav>

</template>

<style scoped lang="scss">
.navbar {
    background-color: $grey;
    width: 100%;
    height: 8vh;
    min-height: 50px;
    box-shadow: 0px 8px 50px 0px rgba(42, 192, 212, 0.15);
    padding: 1.25rem 0rem;
    user-select: none;
    position: fixed;
    z-index: 12;
    transition: all 0.5s ease-in-out;

}

.navbar.horizontal {
    display: flex;
    justify-content: space-around;

}


.right-container {
    height: 100%;
    @include flex();
    // justify-content: space-around;
    gap: 1.56rem;

}

.left-container {
    height: 100%;
    @include flex();
    justify-content: space-between;
    width: 70%;
}

.mobile {
    display: none;
    justify-content: space-between;
    padding: 1.25rem 2rem;
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
            padding: 0rem 5rem;
        }
    }
}
</style>