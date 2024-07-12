<script setup lang="ts">
import QuestionAccordion from '@/components/sharedComponents/FAQs/QuestionAccordion.vue';
import { faqs } from '../../sharedComponents/FAQs/FAQs';




</script>

<template>
    <div class="container">
        <h1 class="sectionHeader">FAQs</h1>
        <div class="questionsContainer">
            <QuestionAccordion v-for="faq in faqs" :faq="faq" />
        </div>
        <div class="btn transparent responsive main">learn more</div>
    </div>
</template>

<style scoped lang="scss">

.container{
    display: flex;
    flex-direction: column;
    @include pagePadding;


    .main{
        @media screen and (min-width: 500px){
            align-self: flex-end;
            width:20%;
            
        }
  
    }
}

</style>