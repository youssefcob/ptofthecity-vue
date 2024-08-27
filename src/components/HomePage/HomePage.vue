<script setup lang="ts">
import LandingPage from './landingSection/LandingPage.vue';
import ServicesPage from './servicesSection/ServicesPage.vue';
import InsurancePage from './insuranceSection/InsurancePage.vue';
import WhoWeArePage from './whoWeAreSection/WhoWeArePage.vue';
import ClinicsPage from './clinicsSection/ClinicsPage.vue';
import OurStaffPage from './ourStaffSection/OurStaffPage.vue';
import CareersPage from './careersSection/CareersPage.vue';
import TrustedByPage from './TrustedBySection/TrustedByPage.vue';
import TestimonialsPage from '../ClinicPage/Testimonials/Testimonials.vue';
import FAQsPage from './FAQsSection/FAQsPage.vue';
import ContactUsPage from './ContactUsSection/ContactUsPage.vue';
import { dir } from '@/mixins/Translate';
import { onMounted } from 'vue';


onMounted(() => {
    const headers = document.querySelectorAll('.header-q,.secondary-landing-header,.sectionHeader-m,.sectionHeader');

    headers.forEach((header) => {
        dir() === 'rtl' ? header.classList.add('rtl') : '';


    })
})
</script>

<template>
    <div class="home">
        <section class="landing-page-container">
            <LandingPage />
        </section>
        <section class="servicesSection" id="Services">
                <ServicesPage />
        </section>
        <section class="insuranceSection" id="Insurance">
            <InsurancePage />
        </section>

        <section class="whoWeAreSection" id="WhoWeAre">
            <WhoWeArePage />
        </section>

        <section class="clinicsSection" id="Clinics">
            <ClinicsPage />
        </section>

        <section class="ourStaffSection" id="OurStaff">
            <OurStaffPage />
        </section>

        <section class="careersSection" id="Careers">
            <CareersPage />
        </section>


        <section class="TrustedBySection" id="TrustedBy">
            <TrustedByPage />
        </section>
<!-- 
        <section class="TestimonialsSection" id="Testimonials">
            <TestimonialsPage />
        </section> -->

        <section class="FAQsSection" id="FAQs">
            <FAQsPage />
        </section>

        <section class="ContactUsSection" id="ContactUs">
            <ContactUsPage />
        </section>
    </div>
</template>

<style scoped lang="scss">
.home {
    height: fit-content;

    >section {
        &:first-child {
            margin-top: 0;
        }
        &:last-child {
            margin-bottom: 0;
        }

        @include sectionMargin;
    }

}

.landing-page-container {
    width: 100%;
    height: 100vh;

}


.insuranceSection {
    width: 100%;
    // min-height:160vh;
}

// .whoWeAreSection{
//     width:100%;
//     // height:92vh;

// }
.ourStaffSection {
    width: 100%;
    margin-top: 12.5rem;
}

.clinicsSection {
    margin-top: 7.5rem;
    // @media screen and (max-width: 500px){
    //     margin-top:10vh;

    // }
}

.FAQsSection {
    margin-top: 12.5rem;
    height: fit-content;
}

.ContactUsSection {
    margin-top: 12.5rem
}
</style>