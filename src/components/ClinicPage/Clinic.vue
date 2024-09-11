<script setup lang="ts">
import type { Clinic, HttpReview, Review } from '@/interfaces/content';
import Http from '@/mixins/Http';
import { onMounted, ref, type Ref } from 'vue';
import { GoogleMap, Marker, InfoWindow } from 'vue3-google-map'
import Carousel from '../sharedComponents/Carousel.vue';
import SingleService from '../ServicesPage/SingleService.vue';
import Testimonials from './Testimonials/Testimonials.vue';
const center: Ref<{ lat: number, lng: number }> = ref({ lat: 0, lng: 0 })

const props = defineProps({
    id: {
        type: String
    },
});

let clinic: Ref<Clinic | null> = ref(null);
const getClinic = async () => {
    
    let data = await Http.get(`clinic/${props.id}`);
    clinic.value = data;
    console.log(clinic.value);
    if (clinic.value) {
        center.value = { lat: parseFloat(clinic.value?.lat), lng: parseFloat(clinic.value?.long) }
    }
    console.log(center.value);

}

const getWorkingHours = () => {
    const capitalizeFirstLetter = (string: string) => {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    };
    const convertToAmPm = (time: string) => {
        if (!time) return 'Off';
        const [hours, minutes] = time.split(':');
        const ampm = parseInt(hours) >= 12 ? 'PM' : 'AM';
        const hours12 = parseInt(hours) % 12 || 12;
        return `${hours12}:${minutes} ${ampm}`;
    };
    let schedule = clinic.value?.schedule;
    // console.log(schedule);
    let days;
    let workingHours: string = '';

    if (schedule) {
        days = Object.keys(schedule);
        days.forEach((day: any) => {
            let hours = schedule[day as keyof typeof schedule];
            let dayAcr = capitalizeFirstLetter(day.slice(0, 3));
            if (hours.off) {
                workingHours += `<span style="font-weight: bold;">${dayAcr}</span>: Off <br>`;
            } else {
                workingHours += `<span style="font-weight: bold;">${dayAcr}</span>: ${convertToAmPm(hours.start)} - ${convertToAmPm(hours.end)} <br>`;
            }
        });
    }
    return workingHours;
}

onMounted(() => {
    getClinic();
})
const infowindow = ref(true); // Will be open when mounted

const markerOptions = { position: center, label: 'L', title: 'LADY LIBERTY' }


</script>

<template>

    <div class="container">
        <div class="clinic-container">
            <h1 class="responsive-header">{{ clinic?.name }} <br></h1>
            <p>
                {{ clinic?.street_address }}, {{ clinic?.city }}, {{ clinic?.state }}, {{ clinic?.zip_code
                }}
            </p>
            <div class="address-container">

                <div class="info-wrapper">
                    <div class="info">
                        <!-- <h3>Location: </h3> -->

                    </div>
                    <div class="info schedule">
                        <h3>Working Hours: </h3>
                        <div class="hours">
                            <p v-html="getWorkingHours()"></p>
                        </div>
                    </div>
                    <div class="info">
                        <h3>Calls: </h3>
                        <p>{{ clinic?.phone }}</p>
                    </div>
                    <router-link :to="`/booking/${clinic?.name}`" class="btn responsive">{{ $translate('book_now') }}</router-link>



                </div>
                <div class="map-wrapper">
                    <GoogleMap api-key="AIzaSyDolB5zXSKaL7Y3e08W9WLSwQYWaXVfYIQ" style="width: 100%; height: 30rem"
                        :center="center" :zoom="15">
                        <Marker :options="{ position: center }" />
                    </GoogleMap>
                </div>
            </div>

        </div>
        <div class="services">
            <h2 class="sectionHeader-m">
                Clinic Services
            </h2>
            <Carousel class="carousel" v-if="clinic && clinic.services">
                <SingleService class="singleService" v-for="service in clinic?.services" :service="service" />
            </Carousel>
        </div>

        <div class="reviews">
            <Testimonials :rating="clinic?.rating" :reviews="clinic?.reviews"
                :user_ratings_total="clinic?.user_ratings_total" />
        </div>
    </div>





</template>

<style scoped lang="scss">
.container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5.56rem;

    .clinic-container {
        @include pagePadding;

        padding-top: calc(8vh + 7.5vh);
        width: 100%;

    }

    .address-container {
        margin-top: 2rem;
        display: grid;
        grid-template-columns: 1fr 3fr;
        gap:2.5rem;

        @media screen and (max-width: 768px) {
            display: flex;

            flex-direction: column-reverse;


        }

        >.info-wrapper {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            >.info {
                margin-bottom: 1rem;

                h3 {
                    font-size: 1.5rem;
                    font-weight: bold;

                    &:not(.schedule h3) {
                        display: inline;

                    }
                }

                p {
                    display: inline;
                    font-size: 1.2rem;
                }
            }
        }

        >.map-wrapper {
            width: 100%;
            // height: 30rem;
            // margin-top: 2rem;
        }
    }


}

.carousel {
    margin-top: 2rem;

    @media screen and (max-width: 500px) {
        margin-top: 5rem;

    }

    height:300px;
    width:100%;

    @media screen and (max-width: 500px) {
        @include pagePadding;
    }

    .singleService {
        @include carouselItem2(5);

        @media screen and (max-width: 1024px) {
            @include carouselItem2(4);

        }

        @media screen and (max-width: 800px) {
            @include carouselItem2(3);

        }

        @media screen and (max-width: 500px) {
            @include carouselItem2(1);

        }

    }
}
</style>