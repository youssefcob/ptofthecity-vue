<script setup lang="ts">
// import { defineProps } from 'vue';
import type { Service } from './Services';
const props = defineProps({
    service: {
        type: Object as () => Service
    }
});
</script>

<template>
    <div class="ser">
        <h1>{{ props.service?.title }}</h1>
        <p>{{ props.service?.description }}</p>
        <ul v-if="props.service?.list"> 
            <li v-for="list_item in props.service.list"> {{ list_item }}</li>
        </ul>
        <div class="learn-more btn-transparent btnfont">Learn More</div>
    </div>
</template>

<style scoped lang="scss">
.ser {
    width: 100%;
    height: 100%;
    fill: rgba(44, 50, 51, 0.20);
    backdrop-filter: blur(50px);
    padding:0 3.13rem ;
    padding-top:3rem;
    padding-bottom:2.13rem;

    >h1 , p{
            color:$white;
        }
    >ul>li{
        color:$white;
        list-style-position: inside;
        text-indent: -1.4em;
        padding-left: 1.4em;

    }
   



}
</style>