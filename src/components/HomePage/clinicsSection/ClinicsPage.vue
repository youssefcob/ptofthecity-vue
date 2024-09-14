<script setup lang="ts">
import Http from '@/mixins/Http';
import ClinicAccordion from './ClinicAccordion.vue';
// import { clinicLocations } from './Clinics';
import { onMounted } from 'vue';

import { clinics, clinicNames, getClinics } from './Clinics';
const isFirstItem=(index:number)=>{
    return (index===0);
}


onMounted(async () => {
    await getClinics();

})
</script>

<template>
    <div class="container">
        <div class="sectionHeader">
            <h1>{{ $translate('clinics') }}</h1>
            <p>{{$translate('clinics_phrase')}}</p>
        </div>

        <div class="accordionsContainer" v-if="clinics">
            <template v-for="(clinic,index) in clinicNames" :key="clinic">
                <ClinicAccordion :clinic="clinics[clinic as keyof typeof clinics]" :location="clinic" :active="isFirstItem(index)"/>
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