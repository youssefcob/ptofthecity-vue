<script setup lang='ts'>
import ClinicsMap from '@/components/HomePage/clinicsSectionNew/ClinicsMap.vue';
import DropDownInputField from '@/components/sharedComponents/DropDownInputField.vue';
import InputField from '@/components/sharedComponents/InputField.vue';
import { clinics, clinicNames, getClinics, clinicPositions } from '@/components/HomePage/clinicsSectionNew/Clinics';
import { onMounted, ref } from 'vue';
import axios from 'axios';

const props = defineProps({
    location: {
        type: String
    }
}

)

const google_api_key = import.meta.env.VITE_GOOGLE_API_KEY as string;


const convertZipToPosition = async () => {
    let res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=10001&key=${google_api_key}`)

    console.log(res.data.results);
}
const filteredClinicPositions = ref(clinicPositions.value)

const filterClinicsByBorough = (borough: string = props.location || 'All Clinics') => {
    if (borough == 'All Clinics') {
        filteredClinicPositions.value = clinicPositions.value;
    } else if (borough) {
        filteredClinicPositions.value = clinics[borough as keyof typeof clinics]
        console.log(clinicPositions.value)

    }
}

onMounted(async () => {
    await getClinics();
    filterClinicsByBorough()
    convertZipToPosition()
})

</script>

<template>
    <div class="clinics-wrapper">
        <!-- Location:{{ location }} -->

        <h1>locate your closest clinic</h1>
        <div class="form-map-wrapper">
            <div class="input-wrapper">
                <div class="input-fields">
                    <DropDownInputField :background="'#C7E3E8'" :placeHolder="'Borough'"
                        :list="[ 'All Clinics' , ...clinicNames]" @input="filterClinicsByBorough($event)"
                        :default="props.location || 'All Clinics'" />
                    <InputField :background="'#C7E3E8'" :placeHolder="'Zip Code'" />
                </div>
                <h2>Results</h2>


            </div>
            <div class="map-wrapper">
                <ClinicsMap :clinicsPositions="filteredClinicPositions" />
            </div>
        </div>
        <div class="results-wrapper">
            <router-link :to="`/clinic/${clinic.id.toString()}`" class="single-result" v-for="(clinic, index) in filteredClinicPositions">
                <span class="name"> {{ clinic.name }} </span>
                <br>
                <span class="address ps"> {{ clinic.street_address }}</span>
            </router-link>
        </div>
    </div>
</template>

<style scoped lang="scss">
.clinics-wrapper {
    @include pagePadding;
    padding-top: calc(10vh + 1rem + 3rem);

    .form-map-wrapper {
        display: grid;
        grid-template-columns: 1fr 3fr;

        .input-wrapper {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 0 0.4rem;

            .input-fields {
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }

            h2 {
                color: $navy;
                font-weight: 400;
                line-height: 100%;
            }
        }

        .map-wrapper {
            background-color: blue;
            height: 35rem;

        }
    }

    .results-wrapper {
        margin-top: 0.5rem;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(22%, 1fr));
        grid-auto-rows: 1fr;
        gap: 0.5rem;

        width: 100%;

        .single-result {
            background-color: $light-green;
            flex-grow: 1;
            padding: 5px 10px;
            border-radius: 1rem;
            cursor: pointer;
            &:hover{
                background-color: darken($light-green,10%);
            }
            .name{
                font-weight:600
            }
        
            .address.ps{
                margin:0;
                font-weight:500;
                color:$black;

            }
        }
    }
}
</style>