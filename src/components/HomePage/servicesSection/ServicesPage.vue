<script setup lang="ts">
import SingleService from './SingleService.vue';
import { services } from './Services';
import Carousel from '@/components/sharedComponents/Carousel.vue';

</script>
<template>
    <div class="container">
        <h1 class="sectionHeader-m">Services</h1>

        <Carousel class="carousel">
            <SingleService class="singleService" v-for="service in services" :service="service" />
        </Carousel>

    </div>
</template>

<style scoped lang="scss">
.container {
    .carousel {
        height:clamp(30rem, 40vw, 70rem);
        @media screen and (max-width: 500px) {
            @include pagePadding;
        }
        .singleService {
            @include carouselItem(100%)
        }
    }
}
</style>