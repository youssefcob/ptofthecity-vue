<script setup lang="ts">

import SingleTestimonial from './SingleTestimonial.vue';
import { testimonials } from './Testimonial';
import Carousel from '@/components/sharedComponents/Carousel.vue';



</script>

<template>
    <div class="container">
        <h1 class="sectionHeader">{{$translate('testimonials')}}</h1>

        <Carousel class="carousel">
            <SingleTestimonial v-for="testimonial in testimonials" :testimonial="testimonial" />

        </Carousel>
 
    </div>
</template>

<style scoped lang="scss">
.container {
    margin-top: 12.5rem;
    width: 100%;
    @include flexDirection(column);
    >.sectionHeader {
        width:100%;
    }
    >h1 {
        color: $navy;
        @include pagePadding;
        align-self: flex-start;
    }

    .carousel{
        height: 18vw;
        min-height: 300px;
        width:100%;
        // @media screen and (max-width: 800px) {
        //     height: 300px;
        //     padding: 20px 0;
        // }

        // @media screen and (max-width: 500px) {
        //     height: 300px;
        //     padding: 20px 0;
        // }

        // @media screen and (min-width: 2080px) {
        //     height: 480px;
        //     padding: 20px 0;
        // }
    }


}
</style>