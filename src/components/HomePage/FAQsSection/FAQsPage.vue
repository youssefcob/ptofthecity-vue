<script setup lang="ts">
import QuestionAccordion from '@/components/sharedComponents/FAQs/QuestionAccordion.vue';
import Http from '@/mixins/Http';
import { onMounted, ref } from 'vue';

const faqs = ref([]);
const getFaqs = async () => {
    let data = await Http.get('content/faqs/main');
    faqs.value = data;
}
onMounted(() => {
    getFaqs();
})
const isFirstItem=(index:number)=>{
    return (index===0);
}


</script>

<template>
    <div class="container">
        <h1 class="sectionHeader">{{ $translate('faqs') }}</h1>
        <div class="questionsContainer">
            <QuestionAccordion v-for="(faq,index) in faqs" :faq="faq" :key="index" :active="isFirstItem(index)" />
        </div>
        <router-link to="/FAQs" class="btn transparent responsive main">{{$translate('learn_more')}}</router-link>
    </div>
</template>

<style scoped lang="scss">

.container{
    display: flex;
    flex-direction: column;
    @include pagePadding;
    .sectionHeader{
        width:100%;
    }

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