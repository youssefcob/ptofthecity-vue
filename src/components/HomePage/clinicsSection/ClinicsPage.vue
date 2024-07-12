<script setup lang="ts">
import ClinicAccordion from './ClinicAccordion.vue';
import { clinicLocations } from './Clinics';
</script>

<template>
    <div class="container">
        <h1 class="sectionHeader">Clinics</h1>
        <p>22 clinics all over New York</p>
        <div class="accordionsContainer">
            <template v-for="location in clinicLocations" :key="location">
                <ClinicAccordion :location="location" />
            </template>
        </div>
        <div class="btn transparent responsive main">find your nearest location</div>
    </div>
</template>

<style scoped lang="scss">
.container {
    @include pagePadding;

    >p {
        @media screen and (max-width: 500px) {
            display: none;
        }
    }

    .btn {
        @media screen and (min-width: 450px) {

            width: 30%;
            margin-left: auto;
        }
    }


}
</style>