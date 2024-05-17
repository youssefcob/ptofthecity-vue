<script setup lang="ts">
import { ref } from 'vue';



let glob = import.meta.glob('@/assets/images/landingPageCarousel/*.jpg', { eager: true })
let keys = Object.keys(glob);

let imageslength = keys.length;

let currentImageIndex = 0;

let image = ref(glob[keys[currentImageIndex]])

// setInterval(() => {
//     let img: any = document.querySelector('.image');
//     let overlay:any = document.querySelector('.overlay');

//     img.classList.add('fade-out');
//     overlay.classList.add('overlay-dark')
//     overlay.classList.remove('overlay-light')

//     setTimeout( ()=> {
//     (currentImageIndex != imageslength - 1) ? currentImageIndex++ : currentImageIndex = 0;
//     image.value = glob[keys[currentImageIndex]];
//     img.classList.remove('fade-out');
//     overlay.classList.remove('overlay-dark')
//     overlay.classList.add('overlay-light')
// },200)

// }, 4000)

let getBackgroundImageUrl = function (src: any) {
    if (typeof src === 'object') {
        return src.default;
    } else {
        console.warn('Invalid image URL in glob data:', src);
        return '';
    }
};

</script>

<template>
    <div class="image-container">
        <div class="image" :style="{ backgroundImage: `url(${getBackgroundImageUrl(image)})` }"></div>
        <div class="overlay overlay-light"></div>
        <slot></slot>

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