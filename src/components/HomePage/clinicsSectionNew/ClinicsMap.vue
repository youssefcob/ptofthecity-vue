<script setup lang="ts">

import { onMounted, ref, type Ref } from 'vue';
import { GoogleMap, Marker, InfoWindow, CustomMarker } from 'vue3-google-map'
import { type HttpClinics, clinicNames, clinics, clinicPositions } from './Clinics';

const props = defineProps({
    clinics: {
        type: Object as () => HttpClinics,
        required: true
    }
})

const google_api_key = import.meta.env.VITE_GOOGLE_API_KEY as string;

const center: Ref<{ lat: number, lng: number }> = ref({ lat: 40.729995453917276, lng: -73.95794147644851 })


// const contructMarkers = () => {
//     const markers = [];
//    for (const location in clinicNames){
//     console.log(clinics[location as keyof typeof clinics]);
//    }
// }

onMounted(() => {
    // contructMarkers();
})
</script>


<template>

    <!-- <template v-for="clinic in deconstructedClinics">{{ clinic.long }}</template> -->

    <GoogleMap :api-key="google_api_key" style="width: 100%; height: 100%" :center="center" :zoom="9">
        <template v-for="clinic in clinicPositions">
            <Marker :options="{ position: clinic.position, title:clinic.name }" />
        </template>
    </GoogleMap>

</template>
