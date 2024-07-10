<script setup lang="ts">
import { ref, onMounted, } from 'vue';
import type { Ref } from 'vue';

import type { ClinicLocations } from './Clinics';
const accordionItemsContainer = ref<any>(null);
const accordion = ref<any>(null);

const props = defineProps({
    location: {
        type: Object as () => ClinicLocations
    }
})

const expandItems = () => {

    accordionItemsContainer.value.classList.toggle('expand');
    accordion.value.classList.toggle('invert');

}

</script>

<template>
    <div class="accordion" ref="accordion" @click="expandItems">
        <div class="city">
            <h2>{{ props.location?.name }}</h2>
        </div>
        <div class="number-of-clinics">
            <h2>{{ props.location?.numberOfClinics }} Clinics</h2>
        </div>
    </div>
    <div class="accordionItemsContainer" ref="accordionItemsContainer">

        <div class="item" v-for="index in props.location?.numberOfClinics" :key="index"></div>

    </div>
</template>

<style scoped lang="scss">
h2 {
    color: $navy;
}

.accordion {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 1.88rem;
    height: 7.5rem;
    flex-shrink: 0;
    border-radius: 0.5625rem;

    @media screen and (max-width: 500px) {
        border-radius: 10px;
    }

    background: $white;
    transition: all .3s ease-in-out;
    box-shadow: 0px 4px 4px 0px rgba(35, 102, 129, 0.30);
    cursor: pointer;
}

@media screen and (min-width: 500px) {
    .accordionItemsContainer {
        display: grid;
        width: 100%;
        max-height: 0;
        overflow: hidden;
        transition: all .3s ease-in-out;





        margin: 0.75rem 0;
        grid-template-columns: repeat(auto-fit, minmax(20.5rem, 1fr));
        gap: 1.25rem;

        .item {
            // width: 20.5rem;
            height: 18rem;
            flex-shrink: 0;
            border-radius: 1.125rem;

            background-color: $navy;
        }
    }
}


@media screen and (max-width: 500px) {
.accordionItemsContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    // height: 150px;
    max-height: 0;


    width: 100%;
    gap: 20px;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch; /* For momentum scrolling on mobile devices */
    padding:5px 10px;

    .item {
        width: 150px;
        flex: 0 0 auto;
        height: 150px;
        background-color: $navy;
        border-radius: 1.125rem;
        display:none;

    }
}
}

.accordionItemsContainer.expand {
    max-height: 200rem;
    transition: all 0.3s ease-in-out;
    @media screen and (max-width: 500px){
    padding:10px 10px;

        >.item{
            display:block;
        }
        
    }
}

.accordion.invert {
    background-color: $navy;
    transition: all .3s ease-in-out;
    box-shadow: none;

    h2 {
        color: $white;
        transition: all .3s ease-in-out;

    }
}
</style>