<script setup lang="ts">
import Carousel from '@/components/sharedComponents/Carousel.vue';
import { onMounted, reactive, ref, type Ref } from 'vue';

import BackGroundImage from '../landingSection/BackGroundImage.vue';
import Fade from './Animations/Fade.vue';
import Description from './Description/Description.vue';



const carousel: Ref<typeof Carousel | null> = ref(null);

// onMounted(async () => {
//     // await getCarousel();
//     setInterval(initiateScroll, 1000);
// })
// let bas
const campaign = reactive([
    {
        images: [
            '/images/careers.png',
            '/images/contactUs.jpg',
            '/images/eligibilityFormImage.jpg',
        ],
        title: 'PTOf the City',
        description: [ 'not description', 'smth', 'slogan'],
        animation: {
            background: 'fade',
            description: 'transitioningSlogans',
            interval: 2000
        },
        button: 'service/1',
        buttonText: 'button',
    },
    {
        images: [
            '/images/eligibilityFormImage.jpg',
            '/images/careers.png',
            '/images/contactUs.jpg',
        ],
        title: 'PTOf the City',
        description: ['description', 'not description', 'smth', 'slogan'],
        animation: {
            background: 'fade',
            description: 'transitioningSlogans',
            interval: 2000
        },
        buttonLink: 'service/2',
        buttonText: 'button 2',

    }
])

const initiateScroll = () => {

    carousel.value?.scroll(1);
}

onMounted(async () => {
    // await getCarousel();
    setInterval(initiateScroll, 10000);
})



</script>

<template>

    <div class="container">
        <Carousel NoIndicator NoButtons ref="carousel" class="carousel">
            <div v-for="(item, index) in campaign" class="carousel-item" :key="index">
                <Fade :interval="item.animation.interval" :images="item.images" >

                    <Description class="description" :title="item.title" :description="item.description"
                        :animation="item.animation.description" :interval="item.animation.interval"
                        :buttonLink="item.buttonLink" :buttonText="item.buttonText" />
                </Fade>
            </div>
          
              

        </Carousel>
    </div>
</template>

<style scoped lang='scss'>
.carousel-item {
    position: relative;
    @include carouselItem2(1);

}

.description {
    // position: absolute;
    // top: 55%;
    // left: 13%;
    // margin-top:30%;
    padding-top:25%;
    padding-left:10%;
    // margin-left:20%;
    z-index: 1;
}

@media only screen and (max-width: 600px) {
    .description {
        padding-top:60%;
        padding-left:10%;
    }
}
</style>