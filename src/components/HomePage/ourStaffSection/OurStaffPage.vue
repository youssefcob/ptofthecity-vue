<script setup lang="ts">


import { ref } from 'vue';
import StaffMember from './StaffMember.vue';
import { staffMembers } from './StaffMembers';
import Carousel from '@/components/sharedComponents/Carousel.vue';



</script>
<template>
    <div class="container">
        <div class="title-wrapper">
            <h1>Meet Our Staff</h1>
            <p>Physical Therapists you can trust</p>
        </div>
        <Carousel class="staffMembers">
                <StaffMember v-for="staffMember in staffMembers" :staffMember="staffMember" />
        </Carousel>
      <div class="btn-wrapper">
        <div class="btn-transparent main btnfont">Learn More</div>
        </div>
    </div>
</template>

<style scoped lang="scss">

.container {
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 800px) {
        margin-top: 5rem;

        >.title-wrapper {
            >p {
                display: none;
            }
        }
    }


    .title-wrapper {
        @include pagePadding;

        >h1 {
            color: $navy;
        }
    }


    .staffMembers{
        height: 540px;
        @media screen and (max-width: 800px) {
            height: 300px;
            padding: 20px 0;
        }

        @media screen and (max-width: 425px) {
            height: 200px;
            padding: 20px 0;
        }

        @media screen and (min-width: 2080px) {
            height: 540px;
            padding: 20px 0;
        }

    }
  

    // .btn-transparent {
    //     align-self: flex-end;
    //     margin-right: 4%;


    // }
    .btn-wrapper{
        @include pagePadding;
        display: flex;
        justify-content: flex-end;
    }
}
</style>