<script setup lang="ts">
import ClinicAccordion from './ClinicAccordion.vue';
import {clinicLocations} from './Clinics';
</script>

<template>
    <div class="container">
        <h1>Clinics</h1>
        <p>22 clinics all over New York</p>
        <div class="accordionsContainer">
            <template v-for="location in clinicLocations" :key="location">
            <ClinicAccordion :location="location" />
            </template>
        </div>
    </div>
</template>

<style scoped lang="scss">
.container {
    padding: $pagePadding;
    // height: 90vh;

    h1 {
        color: $navy;
    }

    .accordionsContainer {
        margin-top: 2.44rem;

    }
}
</style>