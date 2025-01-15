<script setup lang="ts">
import Carousel from '@/components/sharedComponents/Carousel.vue';
import { onMounted, reactive, ref, type Ref } from 'vue';

import BackGroundImage from '../landingSection/BackGroundImage.vue';
import Fade from './Animations/Fade.vue';
import Description from './Description/Description.vue';
import {campaign, getCampaigns} from '@/state/LandingPage';



const carousel: Ref<typeof Carousel | null> = ref(null);


const initiateScroll = () => {

    carousel.value?.scroll(1);
}

onMounted(async () => {
    await getCampaigns();
    setInterval(initiateScroll, 10000);

})



</script>

<template>

    <div class="container">
        <Carousel NoIndicator NoButtons ref="carousel" class="carousel">
            <div v-for="(item, index) in campaign" class="carousel-item" :key="index">
                <Fade :interval="Number(item.animation_interval)" :images="item.images" >

                    <Description class="description" :title="item.title" :description="item.slogans"
                        :animation="item.slogans_animation" :interval="item.animation_interval"
                        :buttonLink="item.buttonLink" :buttonText="item.buttonText" />
                </Fade>
            </div>
          
              

        </Carousel>
    </div>
</template>

<style scoped lang='scss'>
.carousel-item {
    @include carouselItem2(1);
    height:$landinPageHeight;

}

.description {
    position: absolute;
    top: 55%;
    left: 13%;
    // margin-top:30%;
    // padding-top:25%;
    // padding-left:10%;
    // margin-left:20%;
    // z-index: 1;
}

@media only screen and (max-width: 600px) {

    .description {
        top:20%;
        left:0;
    }
}
</style>