<script setup lang="ts">

import { defineEmits } from 'vue';
import SearchBar from '../NavbarComps/SearchBar.vue';
import NavListVertical from '../NavbarComps/NavListVertical.vue';
import LanguageDropDown from './LanguageDropDown.vue';

const emit = defineEmits(['dropdown']);

const toggleDropDown = () => {
    emit('dropdown');
}
</script>

<template>
    <div class="menu">
        <div class="header">
            <div>
                <h3>Menu</h3>
            </div>
            <div class="CloseDropDown" @click="toggleDropDown">
                <h3>X</h3>
            </div>
        </div>
        <div class="content">

            <div class="list-search-container">
                <SearchBar class="searchbar" />

                <div class="navList">
                    <NavListVertical @dropdown="toggleDropDown" />
                </div>
            </div>
            <LanguageDropDown class="lang"/>
        </div>
    </div>
</template>

<style scoped lang="scss">
.menu {
    height: 100vh;
    width: 100%;
    background-color: $grey;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    h3 {
        font-size: 15px;
    }

    >.content {
        width: 100%;
        height: 92vh;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 4rem 2rem 0 2rem;


        >.list-search-container {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 2rem;

        }
        >.lang{
            align-self: center;
        }


    }

    .header {
        background-color: $grey;
        width: 100%;
        height: 8vh;
        min-height: 50px;
        box-shadow: 0px 8px 50px 0px rgba(42, 192, 212, 0.15);
        padding: 1.25rem 5rem;
        user-select: none;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .CloseDropDown {
            cursor: pointer;
        }
    }

    .navList {
        align-self: flex-start;
        padding-left: 1rem;
        display: flex;
        flex-direction: column;
        align-items: space-between;
    }
}
</style>