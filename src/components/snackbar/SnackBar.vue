<script setup lang="ts">

import snackbar from './snackbar';


</script>


<template>

    <div :class="`snackBar-wrapper ${snackbar.bar.show? `show`:``}`" :style="`background-color:${snackbar.bar.color}`" @click="snackbar.bar.show = false">

        <div class="snackBar-content">
            <p><svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
                    <path d="M1 1L6 6L11 1" stroke="black" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg></p>
            <p>smth</p>
        </div>

    </div>
</template>

<style scoped lang="scss">
.snackBar-wrapper {
    position: fixed;
    bottom: -15vh;
    right: 0;
    z-index: 9999;
    min-height: 10vh;
    background-color: #F58E8E;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 6rem;
    border-radius: 6.25rem 6.25rem 0rem 0rem;
    border: 4px solid rgba(255, 0, 0, 0.40);
    transition: all 0.5s ease-in-out;


    &.show{
        bottom:0;
        transition: all 0.5s ease-in-out;
    }
    .snackBar-content {
        height: 100%;
        text-align: center;

        >p {
            font-size: clamp(11px,1vw,20px);
            font-weight: 700;

        }
    }



}
</style>