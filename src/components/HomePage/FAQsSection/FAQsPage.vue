<script setup lang="ts">
import QuestionAccordion from '@/components/sharedComponents/FAQs/QuestionAccordion.vue';
import { faqs } from '../../sharedComponents/FAQs/FAQs';




</script>

<template>
    <div class="container">
        <h1>FAQs</h1>
        <div class="questionsContainer">
            <QuestionAccordion v-for="faq in faqs" :faq="faq" />
        </div>
        <div class="btn-transparent main">learn more</div>
    </div>
</template>

<style scoped lang="scss">

.container{
    display: flex;
    flex-direction: column;
    @include pagePadding;
    gap: 2.56rem;
    >h1{
        color:$navy;
    }
    .btn-transparent{
        margin-top: 0;
    }
}

</style>