<script setup lang="ts">
import ClinicAccordion from './ClinicAccordion.vue';
import { clinicLocations } from './Clinics';

const isFirstItem=(index:number)=>{
    return (index===0);
}
</script>

<template>
    <div class="container">
        <div class="sectionHeader">
            <h1>{{ $translate('clinics') }}</h1>
            <p>{{$translate('clinics_phrase')}}</p>
        </div>

        <div class="accordionsContainer">
            <template v-for="(location,index) in clinicLocations" :key="location">
                <ClinicAccordion :location="location" :active="isFirstItem(index)"/>
            </template>
        </div>
        <div class="btn transparent responsive main">{{$translate('find_your_nearest_location')}}</div>
    </div>
</template>

<style scoped lang="scss">
.container {
    @include pagePadding;

    >p {
        @media screen and (max-width: 500px) {
            display: none;
        }
    }

    .btn {
        @media screen and (min-width: 450px) {

            width: 30%;
            margin-left: auto;
        }
    }


}
</style>