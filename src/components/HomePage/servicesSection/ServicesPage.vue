<script setup lang="ts">
import SingleService from './SingleService.vue';
import {services} from './Services';
import Carousel from '@/components/sharedComponents/Carousel.vue';

</script>
<template>
    <div class="container">
        <h1>Services</h1>
       
        <Carousel class="carousel">
            <SingleService class="singleService" v-for="service in services" :service="service" />
        </Carousel>

    </div>
</template>

<style scoped lang="scss">
.container {

    width: 100%;
    height: 100%;
    @include flexDirection(column);
    @media screen and (max-width: 500px){
                height: 67%;
        }

    h1 {
        align-self: baseline;
        margin-left: 6.25rem;
        margin-bottom:1.25rem;
        @media screen and (max-width: 500px){
            margin-left: 5%;
        }
        color: $navy;
    }

    .carousel{
        height:80%;
        width:100%;
        @media screen and (max-width: 500px){
                @include pagePadding;
        }
        .singleService{
        @include carouselItem(100%)
    }
    }



}
</style>