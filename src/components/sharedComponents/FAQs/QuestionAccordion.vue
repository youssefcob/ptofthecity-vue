<script setup lang="ts">
import { ref, onMounted, } from 'vue';
import type { Ref } from 'vue';

import { type FAQs } from './FAQs';
const accordionItemsContainer = ref<any>(null);
const accordion = ref<any>(null);

const props = defineProps({
    faq: {
        type: Object as () => FAQs
    }
})
const formatAnswer = (answer: string | undefined): string => {
    if (!answer) return '';
    return answer.replace(/\n/g, '<br>');
}
const expandItems = () => {

    accordionItemsContainer.value.classList.toggle('expand');
    accordion.value.classList.toggle('invert');

}

</script>


<template>
    <div class="accordion" ref="accordion" @click="expandItems">
        <span>{{ props.faq?.question }}</span>

    </div>
    <div class="accordionItemsContainer" ref="accordionItemsContainer">

        <div class="item" v-html="formatAnswer(props.faq?.answer)"></div>

    </div>
</template>

<style scoped lang="scss">
h2 {
    color: $navy;
}

.accordion {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 1.88rem;
    height: 6.5rem;
    flex-shrink: 0;
    border-radius: $border-radius;



    @media screen and (max-width: 500px) {
        height: 9rem;
    }

    >span {
        @extend .text;
        // font-family: $helvetica;
        // font-size: 1.75rem;

        // @media screen and (max-width: 800px) {
        //     font-size: 2rem;
        // }

        @media screen and (max-width: 500px) {
            font-size: 2.2rem;
        }

    }


    @media screen and (max-width: 500px) {
        border-radius: 10px;
    }

    background: $white;
    transition: all .3s ease-in-out;
    box-shadow: 0px 4px 4px 0px rgba(35, 102, 129, 0.30);
    cursor: pointer;
}

// @media screen and (min-width: 500px) {
.accordionItemsContainer {
    display: grid;
    width: 100%;
    max-height: 0;
    overflow: hidden;
    transition: all .3s ease-in-out;





    margin: 0.75rem 0;
    grid-template-columns: repeat(auto-fit, minmax(20.5rem, 1fr));
    gap: 1.25rem;

    .item {
        flex-shrink: 0;
        border-radius: 1.125rem;

        padding: 2rem 1.88rem;
       @extend .text-s;
     
    }
}



.accordionItemsContainer.expand {
    max-height: 200rem;
    transition: all 0.3s ease-in-out;

    @media screen and (max-width: 500px) {
        padding: 10px 10px;

        >.item {
            display: block;
        }

    }
}

.accordion.invert {
    background-color: $navy;
    transition: all .3s ease-in-out;
    box-shadow: none;

    span {
        color: $white;
        transition: all .3s ease-in-out;

    }
}
</style>