<script setup lang="ts">
import Http from '@/mixins/Http';
import ClinicAccordion from './ClinicAccordion.vue';
// import { clinicLocations } from './Clinics';
import { onMounted, reactive, ref, type Ref } from 'vue';

const isFirstItem=(index:number)=>{
    return (index===0);
}

let clinics= reactive({});
let clinicNames: Ref<string[]> = ref([]);
const getClinics = async () => {
    let data = await Http.get('clinic/groupByLocation');
    clinics = data;
    console.log(clinics);
    clinicNames.value =  Object.keys(clinics);
    console.log(clinicNames.value);
}
onMounted(() => {
    getClinics();

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