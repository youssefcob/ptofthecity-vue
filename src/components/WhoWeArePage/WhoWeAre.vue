<script setup lang="ts">

import Carousel from '../sharedComponents/Carousel.vue';
import { staff, getStaff } from '@/components/HomePage/ourStaffSection/StaffMembers';
import SingleStaffMember from '../StaffPage/SingleStaffMember.vue';
import ServicesPage from '../HomePage/servicesSection/ServicesPage.vue';
import infoSection from './InfoSection.vue';
import { onMounted, ref } from 'vue';

onMounted(() => {
    getStaff();
})
</script>

<template>
    <div class="whoWeAre-container">
 

        <infoSection />
        <div class="service">
            <h3 class="header-t">Our Services</h3>
            <ServicesPage NoTitle />
        </div>
        <Carousel NoIndicator class="carousel">
            <SingleStaffMember class="s-staff" v-for="member in staff" :staffMember="member" />
        </Carousel>
        <div class="btns-container">
            <router-link active-class="navbar-link" class="btn btnfont" to="/booking" >
                Book Now
            </router-link>
            <router-link active-class="navbar-link" class="btn transparent btnfont" to="/">
                Back to Home Page
            </router-link>
        </div>
    </div>
</template>

<style scoped lang="scss">
.whoWeAre-container {
    width: 100%;
    padding-top: calc(8vh + 7.5vh);
    overflow: hidden;


    .header-t {
        margin-bottom: 1.25rem;
    }




    .service {
        >.header-t {
            @include padding(left);

        }

        margin-top: 3rem;
    }

    .carousel {
        margin-top: 3rem;


        height: 300px;
        width: 100%;

        @media screen and (max-width: 500px) {
            // @include pagePadding;
            margin-left: $resMargin;

        }

        .s-staff {
            @include carouselItem2(7);

            @media screen and (max-width: 1024px) {
                @include carouselItem2(4);

            }

            @media screen and (max-width: 800px) {
                @include carouselItem2(3);

            }

            @media screen and (max-width: 500px) {
                @include carouselItem2(2.8);

            }

        }
    }

    .btns-container {
        @include pagePadding;
        width: 30%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1rem;
        margin-top: 3rem;

        @media screen and (max-width: 500px) {
            display: none;

        }



    }
}
</style>