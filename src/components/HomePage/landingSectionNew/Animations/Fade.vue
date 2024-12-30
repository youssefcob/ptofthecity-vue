<script setup lang="ts">
import { ref, onMounted, onUnmounted, type Ref } from 'vue';

const props = defineProps({
    images: {
        type: Array as () => {path:string}[],
        default: () => [
            '/images/careers.png',
            '/images/contactUs.jpg',
            '/images/eligibilityFormImage.jpg',
        ]
    },
    interval: {
        type: Number,
        default: 3000
    }
});


let currentIndex: Ref<number> = ref(0);

const nextImage = () => {
    currentIndex.value = (currentIndex.value + 1) % props.images.length;
};

let intervalId: number | undefined;

onMounted(() => {
    intervalId = setInterval(nextImage, props.interval) as unknown as number; // Change image every 3 seconds
});

onUnmounted(() => {
    if (intervalId) {
        clearInterval(intervalId);
    }
});
</script>

<template>
    <div class="image-container">
        <div class="background-image" :style="{ backgroundImage: `url(${props.images[currentIndex].path})` }">
            <div class="desc">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.image-container {
    width: 100%;
    height: 100%;
    position: relative;
    /* Ensure the container is positioned relatively */

    .background-image {
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        overflow: hidden;

        width: 100%;
        height: 100vh;
        position: absolute;
        /* Position the images absolutely */
        top: 0;
        left: 0;
        transition: background-image 0.25s ease-in-out;

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(180deg, rgba(44, 50, 51, 0.20) 0%, rgba(44, 50, 51, 0.80) 100%);
            z-index: 1;
        }
        .desc{
            position: relative;
            height:100%;
            width:100%;
            z-index:1;
          
        }

        ::-webkit-scrollbar {
            display: none;
        }
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: all 0.5s ease-in-out;
}


.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>