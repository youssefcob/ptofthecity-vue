<script setup lang="ts">
import QuestionAccordion from '@/components/sharedComponents/FAQs/QuestionAccordion.vue';
import { faqs } from '../../sharedComponents/FAQs/FAQs';

const isFirstItem=(index:number)=>{
    return (index===0);
}


</script>

<template>
    <div class="container">
        <h1 class="sectionHeader">FAQs</h1>
        <div class="questionsContainer">
            <QuestionAccordion v-for="(faq,index) in faqs.home" :faq="faq" :key="index" :active="isFirstItem(index)" />
        </div>
        <router-link to="/FAQs" class="btn transparent responsive main">learn more</router-link>
    </div>
</template>

<style scoped lang="scss">

.container{
    display: flex;
    flex-direction: column;
    @include pagePadding;

    .questionsContainer{
        display: flex;
        flex-direction: column;
        gap:0.7rem;
    }


    .main{
        @media screen and (min-width: 500px){
            align-self: flex-end;
            width:20%;
            
        }
  
    }
}

</style>