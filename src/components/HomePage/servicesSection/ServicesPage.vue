<script setup lang="ts">
import SingleService from './SingleService.vue';
import { services, getServices } from './Services';
import Carousel from '@/components/sharedComponents/Carousel.vue';
import Http from '@/mixins/Http';
import { onMounted, ref } from 'vue';

// let services:any = ref([]);

// const getServices = async () => {
//     services.value = await Http.get('services');
//     // console.log(services);
// }
onMounted(() => {
    // getServices();
})

const props = defineProps({
    NoTitle: Boolean,
});
</script>
<template>
    <div class="container">
        <h1 class="sectionHeader-m" v-if="!NoTitle">{{$translate('services')}}</h1>

        <Carousel NoIndicator class="carousel" v-slot="scope">
            <SingleService  class="singleService" v-for="service in services" :service="service" />
        </Carousel>

    </div>
</template>

<style scoped lang="scss">
.container {
    .carousel {
        height:clamp(35rem, 30vw, 70rem);
        @media screen and (max-width: 500px) {
            @include padding(left);
      
        }
        .singleService {
            @media screen and (min-width: 500px) {
            @include carouselItem2(1);
                
            }
        }

    }
}
</style>