<script setup lang='ts'>
import ClinicsMap from '@/components/sharedComponents/Map.vue';
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


const filteredClinicPositions = ref(clinicPositions.value)



const debounce = (fn: Function, ms = 300) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return function (this: any, ...args: any[]) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this, args), ms);
    };
};

const convertZipToPosition = async (zip_code: string) => {
    let res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${zip_code}&key=${google_api_key}`)

    return (res.data.results[0].geometry.location);
}


const filterbyZip = async ($event: string) => {
    if ($event.length < 5) return;
    let { lat, lng } = await convertZipToPosition($event);

    const radius = 10;
    filteredClinicPositions.value = filteredClinicPositions.value.filter(location => {
        const distance = calculateDistance(lat, lng, Number(location.lat), Number(location.long));
        console.log(distance)
        return distance <= radius;
    });
    console.log(filteredClinicPositions.value)
}

const filterbyNearest = (cords:{lat:number,lng:number}) => {
    const radius = 10;
    filteredClinicPositions.value = filteredClinicPositions.value.filter(location => {
        const distance = calculateDistance(cords.lat, cords.lng, Number(location.lat), Number(location.long));
        console.log(distance)
        return distance <= radius;
    });
}



function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
    function deg2rad(deg: number) {
        return deg * (Math.PI / 180);
    }
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = deg2rad(lat2 - lat1);
    const
        dLon = deg2rad(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    // Distance in kilometers
    return distance;
}



const debouncedZipToPosition = debounce(async (zip_code: string) => await filterbyZip(zip_code), 400)



const filterClinicsByBorough = (borough: string) => {
    if (borough == 'All Clinics') {
        filteredClinicPositions.value = clinicPositions.value;
    } else if (borough == 'Nearest') {
        if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            let cords = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
        };
            filterbyNearest(cords);
        });
    }
   
    } else if (borough) {
        filteredClinicPositions.value = clinics[borough as keyof typeof clinics]

    }
}

const borough = ref(props.location || 'All Clinics')
const zip_code = ref('')
const filterClinics = () => {
    console.log(borough.value)
    filterClinicsByBorough(borough.value)
    debouncedZipToPosition(zip_code.value)
}


onMounted(async () => {
    await getClinics();
    filterClinicsByBorough(borough.value)
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
                        :list="['All Clinics', ...clinicNames]" @input="filterClinics()" v-model="borough"
                        :default="props.location || 'All Clinics'" />
                    <InputField :background="'#C7E3E8'" :placeHolder="'Zip Code'" @input="filterClinics()"
                        v-model="zip_code" numbersOnly />
                </div>
                <h2 class="desktop">Results</h2>


            </div>
            <div class="map-wrapper">
                <ClinicsMap :positions="filteredClinicPositions" />
            </div>

            <h2 class="mobile">Results</h2>

        </div>
        <div class="results-wrapper">
            <router-link :to="`/clinic/${clinic.id.toString()}`" class="single-result"
                v-for="(clinic, index) in filteredClinicPositions">
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


    h2 {
        color: $navy;
        font-weight: 400;
        line-height: 100%;

        &.mobile {
            display: none;
        }
    }


    .form-map-wrapper {
        display: grid;
        grid-template-columns: 1fr 3fr;
        margin-top: 1.5rem;

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
            padding: 0.5rem 1rem;
            border-radius: 1rem;
            cursor: pointer;

            &:hover {
                background-color: darken($light-green, 10%);
            }

            .name {
                font-weight: 600
            }

            .address.ps {
                margin: 0;
                font-weight: 500;
                color: $black;

            }
        }
    }
}

@media screen and (max-width: 768px) {
    .clinics-wrapper {
        padding-top: calc(10vh + 1rem + 3rem);

        h2 {
            color: $navy;
            font-weight: 400;
            line-height: 100%;

            &.mobile {
                display: block;
                margin-bottom: 1.5rem;
                font-weight: 500;
            }

            &.desktop {
                display: none;
            }
        }

        .form-map-wrapper {
            grid-template-columns: 1fr;
            gap: 2rem;

            .input-wrapper {
                .input-fields {
                    gap: 0.5rem;
                }
            }
        }

        .results-wrapper {
            grid-template-columns: 1fr;

            .single-result {
                padding: 1.2rem;

            }
        }
    }
}
</style>