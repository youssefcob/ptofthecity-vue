<script setup lang="ts">
import type { Clinic, HttpReview, Review } from '@/interfaces/content';
import Http from '@/mixins/Http';
import { onMounted, ref, render, watch, type Ref } from 'vue';
import { GoogleMap, Marker, InfoWindow } from 'vue3-google-map'
import Carousel from '../sharedComponents/Carousel.vue';
import SingleService from '../ServicesPage/SingleService.vue';
import Testimonials from './Testimonials/Testimonials.vue';
import { clinics, clinicNames } from '../HomePage/clinicsSection/Clinics';
import ClinicsMap from '../sharedComponents/Map.vue';
import Moments from './Moments.vue';
const center: Ref<{ lat: number, lng: number }> = ref({ lat: 0, lng: 0 })

const google_api_key = import.meta.env.VITE_GOOGLE_API_KEY as string;
const props = defineProps({
    id: {
        type: String,
        required: true
    },
});

let clinic: Ref<Clinic | null> = ref(null);

watch(() => props.id, (newId, oldId) => {
    if (newId) renderClinic();
});

const getClinicFromState = async () => {
    // console.log(clinics);
    for (const city of clinicNames.value) {
        // console.log(city);
        const foundClinic = clinics[city as keyof typeof clinics].find((clinic: Clinic) => clinic.id === parseInt(props.id));

        // console.log(foundClinic);
        if (foundClinic) {
            clinic.value = foundClinic;
            if (clinic.value) {
                center.value = { lat: parseFloat(clinic.value?.lat), lng: parseFloat(clinic.value?.long) }
            }
            break;
        }
    }
};
const getClinicReviews = async () => {


    let data = await Http.get(`clinic/${props.id}`);
    // console.log(props.id);
    // console.log(data)
    clinic.value = data;
    // console.log(clinic.value);
    if (clinic.value) {
        center.value = { lat: parseFloat(clinic.value?.lat), lng: parseFloat(clinic.value?.long) }
    }
    // console.log(center.value);

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
        const minutesStr = minutes ? `:${minutes}` : '';
        return `${hours12}${minutesStr} ${ampm}`;
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
            if (hours.isOff) {
                workingHours += `<span ><strong>${dayAcr}</strong>: Off </span>`;
            } else {
                workingHours += `<span ><strong>${dayAcr}</strong>: ${convertToAmPm(hours.start)} - ${convertToAmPm(hours.end)} </span>`;
            }
        });
    }
    return workingHours;
}
const renderClinic = async () => {
    await getClinicFromState();
    await getClinicReviews();
}

const momentsCarousel : Ref<InstanceType<typeof Carousel> | null> = ref(null);

const setMomentsInterval = () => {
    if (momentsCarousel.value) {
        setInterval(() => {
            momentsCarousel.value?.scroll(1);
        }, 5000);
    }
}
onMounted(async () => {
    await renderClinic();

    setMomentsInterval();
})
const infowindow = ref(true); // Will be open when mounted

const markerOptions = { position: center, label: 'L', title: 'LADY LIBERTY' }


</script>

<template>

    <div class="container">

        <div class="clinic-container">
            <div class="desc-wrapper">
                <h1 class="desktop">{{ clinic?.name }}</h1>
                <p v-html="clinic?.summary">

                </p>
                <div class="schedule">
                    <h2 class="smallHeader">Working Hours:</h2>
                    <div class="hours">
                        <p v-html="getWorkingHours()"></p>
                    </div>
                </div>
                <div class="btns-wrapper">
                    <router-link :to="`/booking/${clinic?.name}/${'Initial Check-up'}`" class="btn responsive">
                        {{ $translate('book_now') }}
                    </router-link>
                </div>
            </div>
            <div class="map-info-wrapper">
                <div class="info mobile">
                    <h1>{{ clinic?.name }}</h1>
                    <div class="address-phone-wrapper">
                        <a target="_blank" :href="`https://maps.google.com/?q=${clinic?.lat},${clinic?.long}`"
                            class="ps address">
                            <strong>Location: </strong>{{ clinic?.street_address }}, {{ clinic?.city }}, {{
                                clinic?.state }}, {{ clinic?.zip_code
                            }}
                        </a>
                        <p class="ps calls">
                            <strong> Calls: </strong>{{ clinic?.phone }}
                        </p>
                    </div>

                </div>
                <div class="map">
                    <template v-if="clinic">
                        <ClinicsMap :positions="[clinic]" :zoom="12"
                            :center="{ lat: Number(clinic.lat), lng: Number(clinic.long) }" />
                    </template>
                    <template v-else>
                        <ClinicsMap :positions="null" />

                    </template>
                </div>
                <div class="info desktop">
                    <div class="address-phone-wrapper">
                        <a target="_blank" :href="`https://maps.google.com/?q=${clinic?.lat},${clinic?.long}`"
                            class="ps address">
                            <strong>Location: </strong>{{ clinic?.street_address }}, {{ clinic?.city }}, {{
                                clinic?.state }}, {{
                                clinic?.zip_code
                            }}
                        </a>
                        <p class="ps calls">
                            <strong> Calls: </strong>{{ clinic?.phone }}
                        </p>
                    </div>

                </div>
            </div>
        </div>

        <div class="services">
            <h2 class="sectionHeader-m">
                {{ clinic?.name }} Clinic Services
            </h2>
            <Carousel class="carousel" v-if="clinic && clinic.services">
                <SingleService class="singleService" v-for="service in clinic?.services" :service="service" />
            </Carousel>
        </div>

        <div class="moments">
            <h2 class="sectionHeader">Clinic Moments</h2>
            <Carousel ref="momentsCarousel" class="moment_carousel" v-if="clinic && clinic.media" NoButtons NoIndicator>
                <Moments class="singleMoment" v-for="moment in clinic?.media" :moment="moment" />
            </Carousel>
        </div>

        <div class="reviews">
            <Testimonials :rating="clinic?.rating" :reviews="clinic?.reviews"
                :user_ratings_total="clinic?.user_ratings_total" />
        </div>
    </div>





</template>

<style scoped lang="scss">
a {
    color: $navy;
    text-decoration: none;
}

.btn.locationBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    @media screen and (min-width: 500px) {
        width: 30%;
    }


}

.container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5.56rem;

    @media screen and (max-width: 500px) {
        padding-top: 10rem;

    }

    .clinic-container {
        @include pagePadding;

        padding-top: calc(8vh + 7.5vh);
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;

        .desc-wrapper {
            display: flex;
            flex-direction: column;
            // width:50%;

            .smallHeader {
                color: $navy;
            }

            .hours {
                >p {
                    display: grid;
                    grid-template-rows: repeat(4, 1fr);
                    grid-auto-flow: column;
                }
            }

            p {
                margin-top: 1rem;
                // background-color: red;
            }

            .btns-wrapper {
                padding-top: 5rem;
                margin-top: auto;

                width: 60%;
            }
        }

        .map-info-wrapper {
            min-height: 40vh;

            .info.mobile {
                display: none;
            }

            >.map {
                height: 30vh;
                min-height: 40vh;
                margin-bottom: 2rem;

            }

            .info {
                display: flex;
                gap: 1rem;
                flex-wrap: wrap;

                .address-phone-wrapper {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .ps {
                    margin: 0;
                    color: $black;
                    font-weight: 500;

                    &.address {
                        text-decoration: underline;
                    }
                }


                .schedule {
                    .hours {}
                }
            }
        }
    }

    .address-container {
        margin-top: 2rem;
        display: grid;
        grid-template-columns: 1fr 3fr;
        gap: 2.5rem;

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
    height: 300px;
    width: 100%;

    @media screen and (max-width: 500px) {
        margin-top: 5rem;

    }



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

.moments{
    @include pagePadding;
    // border-radius: 1rem;
    // overflow: hidden;

    .moment_carousel{
        height:40rem;
    }
    .singleMoment {
        @include carouselItem2(1);

 

    }
}

@media screen and (max-width: 950px) {
    .container .clinic-container {
        display: flex;
        flex-direction: column-reverse;

        .desktop,
        .info.desktop {
            display: none;
        }

        .map-info-wrapper {
            .info.mobile {
                display: flex;

            }
        }
    }
}
</style>