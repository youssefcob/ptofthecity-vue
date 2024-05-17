<script setup lang="ts">
import LandingPage from './landingSection/LandingPage.vue';
import Services from './servicesSection/Services.vue';



</script>

<template>
    <section class="landing-page-container">
        <LandingPage />
    </section>
    <section class="services">
        <Services />
    </section>

</template>

<style scoped lang="scss">
.landing-page-container {
    width:100%;
    height:100vh;
}
.services {
    width:100%;
    height:92vh;
    display: flex;
    justify-content: center;
    align-items: center;

}
</style>