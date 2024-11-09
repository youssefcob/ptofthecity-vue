<script setup lang="ts">

import SearchBar from '../NavbarComps/SearchBar.vue';
import NavListVertical from '../NavbarComps/NavListVertical.vue';
import LanguageDropDown from './LanguageDropDownResponsive.vue';
import SearchBarNew from '../NavbarComps/SearchBarNew.vue';

const emit = defineEmits(['dropdown']);

const toggleDropDown = () => {
    emit('dropdown');
}
</script>

<template>
    <div class="menu">
        <div class="header">
            <div>
                <h3>{{ $translate('menu') }}</h3>
            </div>
            <div class="CloseDropDown" @click="toggleDropDown">
                <h3>X</h3>
            </div>
        </div>
        <div class="content">

            <div class="list-search-container">
                <div class="search-bar">
                    <SearchBarNew :navOnLanding="false" />
                </div>
                <div class="navList">
                    <NavListVertical @dropdown="toggleDropDown" />
                </div>
            </div>
            <LanguageDropDown class="lang" />
        </div>
    </div>
</template>

<style scoped lang="scss">
.menu {
    height: 100lvh;
    overflow: hidden;
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
        font-size: 2rem;
        font-weight: 400;
    }

    >.content {
        width: 100%;
        height: 92vh;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        @include pagePadding;

        >.list-search-container {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 2rem;

            .search-bar{
                height:5rem;
            }

        }

        >.lang {
            align-self: center;
        }


    }

    .header {
        background-color: $grey;
        width: 100%;
        height: 8vh;
        min-height: 50px;
        box-shadow: 0px 8px 50px 0px rgba(42, 192, 212, 0.15);
        padding: 1.25rem 2.7rem;
        // @include pagePadding;
        user-select: none;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .CloseDropDown {
            cursor: pointer;
        }
    }


}
</style>