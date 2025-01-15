<script setup lang="ts">
import { onMounted, ref, render,watch, type Ref } from 'vue';
import { type Service, services, getServices } from '@/components/HomePage/servicesSection/Services';
import Carousel from '../sharedComponents/Carousel.vue';
import SingleService from './SingleService.vue';
import { lang } from '@/mixins/Translate';
import ServiceClinics from './ServiceClinics.vue';

const props = defineProps({
    id: String,
});
// let services: Ref<Service[] | null> = ref(null);
let service: Ref<Service | undefined> = ref(undefined);
let filteredServices: Ref<Service[]> = ref(services.value || []);

watch(() => props.id, (newId, oldId) => {
    if(newId)navigateTo(newId);
});
const renderServices = async (id = props.id) => {
    await getServices();
    service.value = services.value?.find(service => id ? service.id == id : navigatetoHome());
    filteredServices.value = services.value?.filter(service => id ? service.id != id : navigatetoHome());
}
const navigatetoHome = () => {
    window.location.href = '/';
}
onMounted(() => {
    renderServices();
})

const navigateTo = (id: string) => {
    renderServices(id);

}
onMounted(() => {
    getServices();
})



const formatText = (text: any): string => {
    if (!text) return '';
    return text.replace(/\n/g, '<br>');
}

const trans = (languagesObject: any) => {
    if (!languagesObject) return;
    return languagesObject[lang()];
}

</script>

<template>
    <div class="container">
        <div class="service-container">
            <h1>{{ service?.title }}</h1>

            <div class="info-image">
                <div class="info">
                    <p class="text-s" v-html="service?.description"></p>
                    <ServiceClinics :clinics="service?.clinics" :serviceName="service?.title" />
                    <!-- <router-link to="/booking" class="btn responsive main">Book Now</router-link> -->
                </div>

                <div class="image" :style="{ backgroundImage: `url(${service?.path})` }"></div>
            </div>
            <h1 class="responsive-header">{{ service?.title }}</h1>

        </div>
        <router-link to="/" class="btn transparent responsive main back">Back To Homepage</router-link>
    </div>
    <h1 class="carousel-header">Other Services</h1>
    <Carousel class="carousel">
        <SingleService class="singleService" v-for="service in filteredServices" :service="service"
            @navigate="navigateTo(service.id)" />
    </Carousel>
</template>

<style scoped lang="scss">
.container {
    width: 100%;
    @include pagePadding;

    .back {
        @media screen and (min-width: 500px) {
            display: none;
        }

        display:block;
        width:100%;
    }

    .responsive-header {
        color: $navy;
        display: none;
        margin-bottom: 3rem;
    }

    >.service-container {
        padding-top: calc(8vh + 7.5vh);
        display: flex;
        flex-direction: column;
        gap: 4%;

        >h1{
            margin-bottom:3rem;
        }
        .info-image{
            display:flex;
            gap:3rem;
            @media screen and (max-width: 800px) {
                flex-direction: column-reverse;

                
            }
        }

        @media screen and (max-width: 800px) {
            flex-direction: column-reverse;
            padding-top: calc(8vh + 3vh);

            h1 {
                display: none;
            }

            .responsive-header {
                display: block;
            }


        }



        .info {
            width: 70%;
            display:flex;
            flex-direction: column;
            gap:1.25rem;
            @media screen and (max-width: 800px) {
                width: 100%;
            }

      

            >h1 {
                color: $navy
            }

            >p {
                @media screen and (max-width: 500px) {
                    margin-top: 2rem;
                    font-size: 16px;

                }
            }

            >.btn {
                align-self: flex-start;
                width: 30rem;
                // min-width:30rem;

                @media screen and (max-width: 500px) {
                    width: 100%;
                }

            }
        }

        .image {
            width: 50%;
            height: clamp(300px, 40vw, 40rem);
            border-radius: 1.125rem;
            overflow: hidden;
            background-size: cover;
            background-position: center;

            @media screen and (max-width: 800px) {
                width: 100%;
                height: 300px;
            }

    
        }
    }

}

.carousel-wrapper {
    height: fit-content;
}

.carousel-header {
    @include pagePadding;
    color: $navy;
    margin-top: 2rem;

    @media screen and (max-width: 500px) {
        margin-top: 10rem;

    }
}

.carousel {
    margin-top: 2rem;
    height:300px;
    width:100%;
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
</style>