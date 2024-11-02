<script setup lang="ts">

import { onMounted, ref, type Ref } from 'vue';
import { GoogleMap, Marker, InfoWindow, CustomMarker } from 'vue3-google-map'
import { type ClinicPosition } from '../HomePage/clinicsSectionNew/Clinics';
import type { Clinic } from '@/interfaces/content';

const props = defineProps({
    positions: {
        type: Object as () => Clinic[] | null,
        required: true
    },
    center: {
        type: Object as () => { lat: number, lng: number },
        default: { lat: 40.729995453917276, lng: -73.95794147644851 }
    },
    zoom:{
        type:Number,
        default:9
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

    <GoogleMap :api-key="google_api_key" style="width: 100%; height: 100%" :center="props.center" :zoom="props.zoom">
        <template  v-for="location in props.positions">
            <Marker :options="{ position: {lat:Number(location.lat),lng:Number(location.long)}, title:location.name }" />
        </template>
    </GoogleMap>

</template>
