<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Http from '@/mixins/Http';

let insurances:any = ref([]);

const getInsurances = async () => {
    insurances.value = await Http.get('images/insurance');
    // console.log(insurances.value);
}
onMounted(() => {
    getInsurances();
})


let showmore = ref(false);
let showMore = () => {
    let insurances = document.querySelector('.insurances');
    let arrow = document.querySelector('.arrow');
    insurances?.classList.toggle('show-more');
    // insurances?.classList.toggle('some-hidden');
    showmore.value = !showmore.value;
    arrow?.classList.toggle('flip-arrow');
}
</script>

<template>
    <div class="insuranceContainer">
        <h1 :class="`sectionHeader ${$dir()}`">{{$translate('insurances_we_accept')}}</h1>
        <div class="insurances some-hidden">
            
            <div class="single-insurance" v-for="insurance in insurances" :key="insurance.title">
                <img :src="insurance.path" alt="">
                <div><span>{{ insurance.title }}</span></div>
            </div>
        </div>
        <div class="show-btn" @click="showMore()">
            <template v-if="!showmore">{{$translate('show_more')}}</template>
            <template v-else>{{$translate('show_less')}}</template>
            <svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
                <path d="M1 1L6 6L11 1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div>

    </div>
</template>
<style scoped lang="scss">
.insuranceContainer {
    @include pagePadding();
    @media screen and (max-width: 500px) {
        @include pageNoPadding;
    }
    >.show-btn {
        margin-top: 1.25rem;
        color: $navy;
        cursor: pointer;
        @extend .btnfont;
        text-align: end;

        >svg {
            margin-left: 0.625rem;

            >path {
                stroke: $navy;
            }
        }
    }

    >.insurances {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(12.375rem, 1fr));
        gap: 1.25rem;
        transition: all 0.5s ease-in-out;
        max-height:28.2rem;
        overflow: hidden;


        >.single-insurance {
            width: 13.375rem;
            height: 13.375rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap:.75rem;
            // margin-right:1.25rem;

            >img {
                width: 90%;
                height: 90%;
            }
            >span{
                display:block;
            }

        }
    }

    .some-hidden {
        
        transition: all 0.5s ease-in-out;
    }

    .show-more {
        max-height: 100rem;
        transition: all 0.5s ease-in-out;


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