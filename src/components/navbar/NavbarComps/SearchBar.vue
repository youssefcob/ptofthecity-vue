<script setup lang="ts">

</script>

<template>
    <div class="search-bar">
        <div class="search-icon-mobile">
            <img src="@/assets/icons/SearchIcon.svg" alt="">
        </div>
        <input lang="ar" :dir="$dir()" class='search-input' type="text" :placeholder="$translate('search')">

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
    gap: 0.625rem;
    flex-shrink: 0;
    border-radius: 1.125rem;
    transition: all .5s ease-in-out;

    >.search-icon-mobile {
        display: none;
    }

    >.search-icon {
        justify-self: flex-end;
        padding-right: 1rem;
    }

    >.search-input {
        max-width: 0;
        outline: none;
        border: none;
        background-color: transparent;
        transition: all 0s ease-in-out;
    }

    &:hover {
        background: rgba(44, 50, 51, 0.30);

        >.search-input {
            height: 100%;
            width: 100%;
            max-width: 75%;
            transition: all .5s ease-in-out;

        }
    }


}

@media (max-width: 950px) {
    .search-bar {
        width: 100%;
        background: rgba(44, 50, 51, 0.30);
        padding-left: 1rem;
        @media (max-width: 530px){
            height: 4.5rem;
            border-radius: 2rem;
        } 


        >.search-input {
            width: 100%;
            max-width: 100%;
            height: 100%;
            outline: none;
            border: none;
            background-color: transparent;
        }

        &:hover {
            >.search-input {
                height: 100%;
                max-width: 100%;
                transition: all .5s ease-in-out;

            }
        }

        >.search-icon-mobile {
            display: block;
            padding-right: 1rem;
        }

        >.search-icon {
            display: none;
        }


    }

}
</style>
