<script setup lang="ts">
import type { Clinic } from '@/interfaces/content';
import Http from '@/mixins/Http';
import { onMounted, ref, type Ref } from 'vue';
import { GoogleMap, Marker, InfoWindow } from 'vue3-google-map'
const center:Ref<{lat:number,lng:number}> = ref({ lat: 0, lng: 0 })

const props = defineProps({
    id: {
        type: String
    },
});

let clinic: Ref<Clinic | null> = ref(null);

const getClinic = async () => {
    let data = await Http.get(`clinic/${props.id}`);
    clinic.value = data;
    if(clinic.value){
        center.value = { lat: parseInt(clinic.value?.lat), lng: parseInt(clinic.value?.long) }
    }
    // console.log(clinic);
}

// const getGeoLocation = async () => {
//     let data = await Http.get(`maps.googleapis.com/maps/api/place/details/json?placeid=ChIJuxgJK2REwokR-1lY8_OqM0Y`);
//     console.log(data);
// }

// https://maps.googleapis.com/maps/api/place/details/json?placeid= ChIJuxgJK2REwokR-1lY8_OqM0Y&key=AIzaSyDolB5zXSKaL7Y3e08W9WLSwQYWaXVfYIQ
onMounted(() => {
    getClinic();
    // getGeoLocation();
})
const infowindow = ref(true); // Will be open when mounted

const markerOptions = { position: center, label: 'L', title: 'LADY LIBERTY' }

// const geocoder = new google.maps.Geocoder();

</script>

<template>

    <div class="container">
        <div class="clinic-container">
            <h1 class="responsive-header">{{ clinic?.name }}</h1>
            <div class="address-container">
                <div class="address ">
                    <div class="street-address">
                        <svg fill="#236681" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" width="30px" height="30px"
                            viewBox="0 0 395.71 395.71" xml:space="preserve" stroke="#236681">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <g>
                                    <path
                                        d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738 c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388 C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191 c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z">
                                    </path>
                                </g>
                            </g>
                        </svg>
                        <h3>
                            {{ clinic?.street_address }},
                            {{ clinic?.city }},
                            {{ clinic?.state }},
                            {{ clinic?.zip_code }}
                        </h3>
                    </div>
                    <div class="map">
                        <GoogleMap api-key="AIzaSyDolB5zXSKaL7Y3e08W9WLSwQYWaXVfYIQ" style="width: 100%; height: 500px"
                            :center="center" :zoom="4">
                            <Marker :options="{ position: center }" />
                        </GoogleMap>
                    </div>


                </div>
                <div class="phone-hours">
                    <div class="phone">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <g clip-path="url(#clip0_813_892)">
                                <path
                                    d="M24.2866 17.666L18.8179 15.3223C18.5843 15.2227 18.3246 15.2017 18.078 15.2625C17.8315 15.3232 17.6113 15.4625 17.4507 15.6592L15.0288 18.6182C11.2279 16.8261 8.16904 13.7672 6.37695 9.96631L9.33594 7.54443C9.53305 7.38412 9.67256 7.16395 9.73335 6.91726C9.79414 6.67057 9.7729 6.41079 9.67285 6.17725L7.3291 0.708496C7.21929 0.456742 7.02508 0.251194 6.77996 0.127294C6.53483 0.00339424 6.25416 -0.0310909 5.98633 0.0297849L0.908203 1.20166C0.649985 1.26129 0.419602 1.40668 0.254656 1.6141C0.0897096 1.82153 -5.94829e-05 2.07874 2.95713e-08 2.34375C2.95713e-08 14.8682 10.1514 25 22.6562 25C22.9213 25.0002 23.1787 24.9104 23.3862 24.7455C23.5937 24.5805 23.7392 24.3501 23.7988 24.0918L24.9707 19.0137C25.0312 18.7445 24.996 18.4627 24.8711 18.2168C24.7463 17.9708 24.5396 17.776 24.2866 17.666Z"
                                    fill="#236681" />
                            </g>

                        </svg>
                        <h3>(718) 648-0888</h3>
                    </div>
                    <div class="hours"></div>
                </div>
            </div>

        </div>
    </div>




</template>

<style scoped lang="scss">
.container {
    @include pagePadding;
    width: 100%;

    .clinic-container {
        padding-top: calc(8vh + 7.5vh);
        width: 100%;

    }

    .address-container {
        padding-top: 2.5rem;
        // display: flex;
        display: grid;
        grid-template-columns: auto-fit, minmax(20.5rem, 1fr);
        gap: 5rem;

        >.phone-hours {
            display: flex;
            flex-direction: column;

            >.phone {
                display: flex;
                align-items: center;


                >h3 {
                    color: $navy;
                }

                >svg {
                    margin-right: 1rem;
                }
            }
        }

        >.address {
            // width: 70%;

            >.street-address {
                display: flex;
                align-items: center;

                >h3 {
                    color: $navy;

                }

                >svg {
                    margin-right: 1rem;
                }
            }

            >.map {
                width: 100%;
                // height: 500px;
            }
        }
    }
}
</style>