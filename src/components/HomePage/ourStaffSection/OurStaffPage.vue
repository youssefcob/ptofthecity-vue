<script setup lang="ts">


import { ref } from 'vue';
import StaffMember from './StaffMember.vue';
import { staffMembers } from './StaffMembers';
import Carousel from '@/components/sharedComponents/Carousel.vue';



</script>
<template>
    <div class="container">
        <div class="sectionHeader-m">
            <h1>Meet Our Staff</h1>
            <p>Physical Therapists you can trust</p>
        </div>
        <Carousel class="staffMembers">
                <StaffMember v-for="staffMember in staffMembers" :staffMember="staffMember" />
        </Carousel>
      <!-- <div class="btn-wrapper">
        <div class="btn-transparent main btnfont">Learn More</div>
        </div> -->
    </div>
</template>

<style scoped lang="scss">

.container {
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 800px) {
        >.title-wrapper {
            >p {
                display: none;
            }
        }
    }


    .title-wrapper {
        @include pagePadding;
      
    }


    .staffMembers{
        height:30rem;

        @media screen and (max-width:500px) {
            margin-left:$resMargin;
        }

      

    }
  


    .btn-wrapper{
        @include pagePadding;
        display: flex;
        justify-content: flex-end;
    }
}
</style>