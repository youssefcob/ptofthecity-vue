<script setup lang="ts">
import LandingPage from './landingSection/LandingPage.vue';
import ServicesPage from './servicesSection/ServicesPage.vue';
import InsurancePage from './insuranceSection/InsurancePage.vue';
import WhoWeArePage from './whoWeAreSection/WhoWeArePage.vue';
import ClinicsPage from './clinicsSection/ClinicsPage.vue';

</script>

<template>
    <div class="home">
    <section class="landing-page-container">
        <LandingPage />
    </section>
    <section class="servicesSection">
        <ServicesPage />
    </section>
    <section class="insuranceSection">
        <InsurancePage />
    </section>

     <section class="whoWeAreSection">
        <WhoWeArePage />
    </section> 

    <section class="clinicsSection">
        <ClinicsPage/>
    </section>
</div>
</template>

<style scoped lang="scss">

.home{
    height:fit-content;
}
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
    // min-height:160vh;
}

// .whoWeAreSection{
//     width:100%;
//     // height:92vh;

// }
</style>