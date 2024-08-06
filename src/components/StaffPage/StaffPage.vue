<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue';
// import { staffMembers, type StaffMember } from '@/components/HomePage/ourStaffSection/StaffMembers';
import Carousel from '../sharedComponents/Carousel.vue';
import SingleStaffMember from './SingleStaffMember.vue';

import { getStaff, staff, type Staff } from '@//components/HomePage/ourStaffSection/StaffMembers';
import { get } from 'node_modules/axios/index.cjs';

const props = defineProps({
    id: String,
});
let staffMember: Ref<Staff | undefined> = ref(undefined);
const filteredStaff: Ref<Staff[]> = ref(staff);
    const renderStaff = async () => {
        await getStaff();
        staffMember.value = staff.value.find( member => props.id? member.id == parseInt(props.id):navigatetoHome());
        filteredStaff.value = staff.value.filter(member => props.id? member.id !== parseInt(props.id):navigatetoHome());
    }

    if(staff.value.length==0){
        renderStaff();
    }
    
// onMounted(() => {
    

   
// })
const navigatetoHome = () => {
    window.location.href = '/';
}


const formatText = (text: string | undefined): string => {
    if (!text) return '';
    return text.replace(/\n/g, '<br>');
}
// console.log(service?.path);
// const filteredStaff: Ref<Staff[]> = ref(staff.value.filter(member =>{props.id? member.id !== parseInt(props.id):null}));

const navigateTo = (id: string) => {
    staffMember.value = staff.value.find(member => member.id == parseInt(id));
    filteredStaff.value = staff.value.filter(member => member.id !== parseInt(id));

}
</script>

<template>
    <div class="container">
        <div class="staff-container">
            <h1 class="responsive-header">{{ staffMember?.title }} {{ staffMember?.first_name }} {{ staffMember?.last_name }}</h1>

            <div class="image" :style="{ backgroundImage: `url(${staffMember?.image})` }"></div>
            <!-- <div class="image"></div> -->

            <div class="info">
                <h1>{{ staffMember?.title }} {{ staffMember?.first_name }} {{ staffMember?.last_name }}</h1>
                <p class="text-s" v-html="formatText(staffMember?.bio)"></p>
                <div class="btn responsive main">Book Now</div>
            </div>
            <!-- <div class="image" ></div> -->


        </div>
        <router-link to="/" class="btn transparent responsive main back">Back To Homepage</router-link>
    </div>
    <h1 class="carousel-header">Our Staff</h1>
    <Carousel class="carousel">
        <SingleStaffMember class="s-staff" v-for="member in filteredStaff" :staffMember="member"
            @navigate="navigateTo" />
    </Carousel>
</template>

<style scoped lang="scss">
.container {
    .back {
        @media screen and (min-width: 500px) {
            display: none;
        }

        display:block;
        width:100%;
        margin-top: 2rem;
    }

    width: 100%;
    // background-color: blueviolet;
    @include pagePadding;

    .responsive-header {
        color: $navy;
        display: none;
        margin-bottom: 3rem;
    }

    >.staff-container {
        padding-top: calc(8vh + 7.5vh);


        display: flex;
        gap: 4%;

        @media screen and (max-width: 800px) {
            flex-direction: column;
            padding-top: calc(8vh + 3vh);

            h1 {
                display: none;
            }

            .responsive-header {
                display: block;
            }


        }



        .info {
            // width: 100%;
            // padding:1.7rem 0;

            @media screen and (max-width: 800px) {
                width: 100%;
            }

            display:flex;
            flex-direction: column;
            gap:1.25rem;

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
                width: 30%;

                @media screen and (max-width: 500px) {
                    width: 100%;
                }

            }
        }

        >.image {
            width: 100%;
            height: clamp(300px, 40vw, 40rem);

            @media screen and (max-width: 800px) {
                width: 100%;
                height: 300px;
            }

            border-radius: 1.125rem;
            overflow: hidden;
            background-size: cover;
            background-position: center;
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

    @media screen and (max-width: 500px) {
        margin-top: 5rem;

    }

    height:300px;
    width:100%;

    @media screen and (max-width: 500px) {
        @include pagePadding;
    }

    .s-staff {
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
