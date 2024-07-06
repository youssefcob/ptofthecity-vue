<script setup lang="ts">
import LandingPage from './landingSection/LandingPage.vue';
import ServicesPage from './servicesSection/ServicesPage.vue';
import InsurancePage from './insuranceSection/InsurancePage.vue';
import WhoWeArePage from './whoWeAreSection/WhoWeArePage.vue';
import ClinicsPage from './clinicsSection/ClinicsPage.vue';
import OurStaffPage from './ourStaffSection/OurStaffPage.vue';


</script>

<template>
    <div class="home">
    <section class="landing-page-container">
        <LandingPage />
    </section>
   <section class="servicesSection" id="servicesSection">
        <ServicesPage />
    </section>
   <section class="insuranceSection" id="insuranceSection">
        <InsurancePage />
    </section>
     <section class="whoWeAreSection" id="whoWeAreSection">
        <WhoWeArePage />
    </section> 
   <!--

    <section class="clinicsSection">
        <ClinicsPage/>
    </section>

    <section class="ourStaffSection">
        <OurStaffPage/>
    </section> -->
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
    transition: all 0.5s ease-in-out;

    @media screen and (max-width: 550px){
        height:80vh;
    }

    @media screen and (max-width: 500px){
        height:70vh;
    }
    @media screen and (max-width: 450px){
        height:60vh;
    }

}

.insuranceSection{
    width:100%;
    // min-height:160vh;
}

// .whoWeAreSection{
//     width:100%;
//     // height:92vh;

// }
.ourStaffSection{
    width:100%;
    height:92vh;
    // display: flex;
    // justify-content: center;
    // align-items: center;
}
</style>