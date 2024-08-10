<script setup lang="ts">
import QuestionAccordion from '@/components/sharedComponents/FAQs/QuestionAccordion.vue';
import ContactForm from '../HomePage/ContactUsSection/ContactForm.vue';
import ContactUsPage from '../HomePage/ContactUsSection/ContactUsPage.vue';
import { onMounted, ref, type Ref } from 'vue';
import Http from '@/mixins/Http';

const isFirstItem = (index: number) => {
    return (index === 0);
}

const faqs = ref([]);
const faqsHeaders: Ref<string[]> = ref([]);
const getFaqs = async () => {
    let data = await Http.get('content/faqs');
    faqs.value = data;
    faqsHeaders.value = (Object.keys(data));
}
onMounted(() => {
    getFaqs();
})


</script>
<template>
    <div class="page-container">
        <div class="questions">
            <template v-for="(header, index) in faqsHeaders">
                <div class="wrapper">
                    <h1 class="sectionHeader">
                        {{ header }}
                    </h1>
                    <div class="questionsContainer">
                        <QuestionAccordion v-for="(faq, index) in faqs[header as keyof typeof faqs]" :faq="faq" :key="index"
                            :active="isFirstItem(index)" />
                    </div>
                </div>
                </template>
   
         

        
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