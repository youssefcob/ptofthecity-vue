<script setup lang="ts">
import QuestionAccordion from '@/components/sharedComponents/FAQs/QuestionAccordion.vue';
import { faqs } from '@/components/sharedComponents/FAQs/FAQs';
import ContactForm from '../HomePage/ContactUsSection/ContactForm.vue';
import ContactUsPage from '../HomePage/ContactUsSection/ContactUsPage.vue';

const isFirstItem = (index: number) => {
    return (index === 0);
}


</script>
<template>
    <div class="page-container">
        <div class="questions">
            <div class="wrapper">
                <h1 class="sectionHeader">
                    General Questions
                </h1>
                <div class="questionsContainer">
                    <QuestionAccordion v-for="(faq, index) in faqs.general" :faq="faq" :key="index"
                        :active="isFirstItem(index)" />
                </div>
            </div>
            <div class="wrapper">
                <h1 class="sectionHeader">
                    Physical Therapy FAQs
                </h1>
                <div class="questionsContainer">
                    <QuestionAccordion v-for="(faq, index) in faqs.pt" :faq="faq" :key="index"
                        :active="isFirstItem(index)" />
                </div>
            </div>
            <div class="wrapper">
                <h1 class="sectionHeader">
                    Pelvic FAQs
                </h1>
                <div class="questionsContainer">
                    <QuestionAccordion v-for="(faq, index) in faqs.pel" :faq="faq" :key="index"
                        :active="isFirstItem(index)" />
                </div>
            </div>
            <div class="wrapper">
                <h1 class="sectionHeader">
                    Billing-Insurance FAQs
                </h1>
                <div class="questionsContainer">
                    <QuestionAccordion v-for="(faq, index) in faqs.billing" :faq="faq" :key="index"
                        :active="isFirstItem(index)" />
                </div>
            </div>
         

        
        </div>
        <ContactUsPage class="contactForm" header="Still have a question?"/>



    </div>
</template>

<style scoped lang="scss">
.page-container {
    padding-top: calc(8vh + 7.5vh);
    .questions{
    @include pagePadding;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    }
    .questionsContainer {
        display: flex;
        flex-direction: column;
        gap: 0.7rem;
    }

    .contactForm{
        margin-top: 2rem;
    }



}
</style>