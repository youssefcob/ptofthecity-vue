<script setup lang="ts">
import LandingPage from './landingSection/LandingPage.vue';
import Services from './servicesSection/Services.vue';
import InsurancePage from './insuranceSection/InsurancePage.vue';

</script>

<template>
    <section class="landing-page-container">
        <LandingPage />
    </section>
    <section class="servicesSection">
        <Services />
    </section>
    <section class="insuranceSection">
        <InsurancePage />
    </section>

</template>

<style scoped lang="scss">
.landing-page-container {
    width:100%;
    height:100vh;
}
.servicesSection {
    width:100%;
    height:92vh;
    display: flex;
    justify-content: center;
    align-items: center;

}

.insuranceSection{
    width:100%;
    min-height:160vh;
}
</style>