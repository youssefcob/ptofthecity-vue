<script setup lang="ts">
import LandingPage from './landingSection/LandingPage.vue';
import ServicesPage from './servicesSection/ServicesPage.vue';
import InsurancePage from './insuranceSection/InsurancePage.vue';
import WhoWeArePage from './whoWeAreSection/WhoWeArePage.vue';
import ClinicsPage from './clinicsSection/ClinicsPage.vue';
import OurStaffPage from './ourStaffSection/OurStaffPage.vue';
import CareersPage from './careersSection/CareersPage.vue';
import TrustedByPage from './TrustedBySection/TrustedByPage.vue';
import TestimonialsPage from './TestimonialsSection/TestimonialsPage.vue';
import FAQsPage from './FAQsSection/FAQsPage.vue';
import ContactUsPage from './ContactUsSection/ContactUsPage.vue';
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

    <section class="clinicsSection" id="clinicsSection">
        <ClinicsPage/>
    </section>

    <section class="ourStaffSection" id="ourStaffSection">
        <OurStaffPage/>
    </section>

    <section class="careersSection" id="careersSection">
        <CareersPage/>
    </section>

    
    <section class="TrustedBySection" id="TrustedBySection">
        <TrustedByPage/>
    </section>

    <section class="TestimonialsSection" id="TestimonialsSection">
        <TestimonialsPage/>
    </section>
    <section class="FAQsSection" id="FAQsSection">
        <FAQsPage/>
    </section>

    <section class="ContactUsSection" id="ContactUsSection">
        <ContactUsPage/>
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
    // height:60vh;
    @media screen and (max-width: 800px){
    height:fit-content;        
    }

    // display: flex;
    // justify-content: center;
    // align-items: center;
}

.clinicsSection{
    margin-top:12.5rem;
    // @media screen and (max-width: 500px){
    //     margin-top:10vh;
        
    // }
}

.FAQsSection{
  margin-top:12.5rem;
    height:fit-content;
}

.ContactUsSection{
    margin-top:12.5rem
}
</style>