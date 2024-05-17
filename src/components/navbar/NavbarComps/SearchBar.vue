<script setup lang="ts"></script>

<template>
    <div class="search-bar">
        <input class='search-input' type="text" placeholder="Search...">

        <div class="search-icon">
            <img src="@/assets/icons/SearchIcon.svg" alt="">
        </div>
    </div>
</template>
<style scoped lang='scss'>
.search-bar {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 15.8125rem;
    padding: 0.3125rem 0.3125rem 0.3125rem 0.3125rem;
    align-items: center;
    gap: 0.625rem;
    flex-shrink: 0;
    border-radius: 1.125rem;
    transition: all .5s ease-in-out;
    > .search-icon {
        justify-self: flex-end;
        padding-right:1rem;
    }
    >.search-input {
        max-width: 0;
        outline: none;
        border: none;
        background-color: transparent;
        transition: all .5s ease-in-out;
    }

    &:hover {
        background: rgba(44, 50, 51, 0.30);
        >.search-input {
            height:100%;
            max-width: 13rem;
            max-width:75%;
            transition: all .5s ease-in-out;

        }
    }


}
</style>
