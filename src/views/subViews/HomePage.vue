<script setup lang="ts">
import LandingPage from '@/components/HomePage/landingSection/LandingPage.vue';
import LandinggPage from '@/components/HomePage/landingSection/LandingPage.vue';
import ClinicsPageNew from '@/components/HomePage/clinicsSectionNew/ClinicsPage.vue';
import ServicesPage from '@/components/HomePage/servicesSection/ServicesPage.vue';
import InsurancePage from '@/components/HomePage/insuranceSection/InsurancePage.vue';
import WhoWeArePage from '@/components/HomePage/whoWeAreSection/WhoWeArePage.vue';
import ClinicsPage from '@/components/HomePage/clinicsSection/ClinicsPage.vue';
import OurStaffPage from '@/components/HomePage/ourStaffSection/OurStaffPage.vue';
import CareersPage from '@/components/HomePage/careersSection/CareersPage.vue';
import TrustedByPage from '@/components/HomePage/TrustedBySection/TrustedByPage.vue';
// import TestimonialsPage from '.@/components/HomePage/ClinicPage/Testimonials/Testimonials.vue';
import FAQsPage from '@/components/HomePage/FAQsSection/FAQsPage.vue';
import ContactUsPage from '@/components/HomePage/ContactUsSection/ContactUsPage.vue';
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
        <!-- <section class="landing-page-container">
            <LandinggPage />
        </section> -->
        <section class="landing-page-container">
            <LandingPage />
        </section>
        <!-- <section class="clinicsSection" >
            <ClinicsPage />
        </section> -->

        <section class="clinicsSection" id="Clinics">
            <ClinicsPageNew />
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