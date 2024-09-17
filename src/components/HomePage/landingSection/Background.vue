<script setup lang="ts">
import Carousel from '@/components/sharedComponents/Carousel.vue';
import { onMounted, ref, type Ref } from 'vue';
import BackGroundImage from './BackGroundImage.vue';

const background: Ref<typeof BackGroundImage | null> = ref(null);

const initiateScroll = () => {
    background.value?.scroll(1);
}

onMounted(() => {
    setInterval(initiateScroll, 5000);
})
let base = import.meta.env.BASE_URL;
let images = [
    base+'/images/careers.png',
    base+'/images/contactUs.jpg',
    base+'/images/eligibilityFormImage.jpg',
]


</script>

<template>
    <div class="image-container">
        <!-- <div class="image" :style="{ backgroundImage: `url(${getBackgroundImageUrl(image)})` }"></div> -->
         <Carousel ref='background' class="image" NoButtons NoIndicator>
            <BackGroundImage v-for="image in images" :image="image" />
         </Carousel>
        <div class="overlay overlay-light"></div>
        <slot class="content"></slot>

    </div>
</template>

<style scoped lang='scss'>
.image-container {
    position: relative;

    .image {
        position: relative;
        width: 100%;
        height: 100vh;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        transition: opacity 0.2s ease-in-out;

        &:before{
            content:"";

        };
    };
    .overlay{
        position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            transition: all 0.2s ease-in-out;

    };
}

.image.fade-out {
    opacity: 0;
    transition: opacity 0.2s ease-in-out;

}

.overlay-light{
    background: linear-gradient(180deg, rgba(44, 50, 51, 0.20) 0%, rgba(44, 50, 51, 0.80) 100%);
    transition: all 0.2s ease-in-out;

}

.overlay-dark{
    background: linear-gradient(180deg, rgba(44, 50, 51, 0.60) 0%, rgba(44, 50, 51, 1) 100%);
    transition: all 0.2s ease-in-out;

}


</style>