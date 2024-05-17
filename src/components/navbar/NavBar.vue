<script setup lang="ts">
import Lang from './NavbarComps/LanguageDropDown.vue';
import NavList from './NavbarComps/NavListHorizontal.vue';
import NavLogo from './NavbarComps/NavLogo.vue';
import ProfileSignup from './NavbarComps/ProfileSignup.vue';
import SearchBar from './NavbarComps/SearchBar.vue';



</script>

<template>
    <nav class="navbar">
        <div class="left-container">
            <NavLogo />
            <NavList />
        </div>

        <div class="right-container">
            <SearchBar />
            <ProfileSignup />
            <Lang />
        </div>
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
    display: flex;
    // justify-content: space-between;

    .right-container {
        height: 100%;
        @include flex();
        justify-content: space-between;

    }

    .left-container {
        height: 100%;
        @include flex();
        justify-content: space-around;
        width:70%;



    }
}
</style>