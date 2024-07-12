<script setup lang="ts">
import { ref } from 'vue';


let glob = import.meta.glob('@/assets/images/insurances/*.png', { eager: true })
let keys = Object.keys(glob).map(key => key.replace('/public', ''));

let showmore = ref(false);
let showMore = () => {
    let insurances = document.querySelector('.insurances');
    let arrow = document.querySelector('.arrow');
    insurances?.classList.toggle('show-more');
    insurances?.classList.toggle('some-hidden');
    showmore.value = !showmore.value;
    arrow?.classList.toggle('flip-arrow');
}
</script>

<template>
    <div class="insuranceContainer">
        <h1>Insurance we accept</h1>
        <div class="insurances some-hidden">
            <div class="single-insurance" v-for="key in keys" :key="key">
                <img :src="key" alt="">
            </div>
        </div>
        <span class="show-btn" @click="showMore()">
            <template v-if="!showmore">Show more</template>
            <template v-else>Show less</template>
            <svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
                <path d="M1 1L6 6L11 1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </span>

    </div>
</template>
<style scoped lang="scss">
.insuranceContainer {
    width: 100%;
    display: flex;
    flex-direction: column;

    >h1 {
        color: $navy;
        @media screen and (max-width: 500px){
            margin-left: 5%;
            
        }
    }

    >.show-btn {
        margin-top: 1.25rem;
        color: $navy;
        cursor: pointer;
        align-self: flex-end;
        @extend .btnfont;

        >svg {
            margin-left: 0.625rem;

            >path {
                stroke: $navy;
            }
        }
    }

    >.insurances {
        // background-color: red;
        display: grid;

        margin-top: 2.13rem;
        grid-template-columns: repeat(auto-fit, minmax(12.375rem, 1fr));
        gap: 1.25rem;


        >.single-insurance {
            // width: 12.375rem;
            height: 12.375rem;
            // margin-right:1.25rem;

            >img {
                width: 100%;
                height: 100%;
            }

        }
    }

    .some-hidden {
        max-height: calc(12.375rem + 12.375rem + 1.25rem);
        overflow: hidden;
    }

    .show-more {
        max-height: fit-content;

    }

    .flip-arrow {
        transform: rotate(180deg);
    }

    @media screen and (max-width: 500px) {

        .insurances {
            display: flex;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            /* Smooth scrolling on touch devices */
            scrollbar-width: thin;

            /* For Firefox */
            &::-webkit-scrollbar {
                height: 4px;
                /* For WebKit browsers */
            }

            &::-webkit-scrollbar-thumb {
                background: #ccc;
                /* Scrollbar thumb color */
            }

            .single-insurance {
            flex: 0 0 auto;
            width:85px;
            height: 85px;
        }


        }
        .show-btn{
            display: none;
        }

        
    }

}
</style>