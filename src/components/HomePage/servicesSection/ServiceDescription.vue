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
        <div class="learn-more btnfont">Learn More</div>
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
    .learn-more{
        color:$white;
        padding:1.25rem 4.06rem;
        cursor: pointer;
        max-width:70%;
        text-align: center;
        border-radius: 1.125rem;
        border: 1px solid $blue;
        transition: all .3s ease-in-out;
        &:hover{
            background-color: rgba(43, 192, 212,0.2);
            transition: all .3s ease-in-out;
        }
    }



}
</style>