<script setup lang="ts">


import { ref, onMounted, type Ref } from 'vue';
import SingleTestimonial from './SingleTestimonial.vue';
import { testimonials } from './Testimonial';
import Carousel from '@/components/sharedComponents/Carousel.vue';

// const singleTestimonial: Ref<HTMLElement | null> = ref(null);

// let currentIndex = ref(0);

// onMounted(() => {
//     if (singleTestimonial.value) {
//         singleTestimonial.value.addEventListener('scroll', updateCurrentIndexBasedOnScroll);
//     }
// });

// const updateCurrentIndexBasedOnScroll = () => {
//   if (!singleTestimonial.value) return;
//   const el = singleTestimonial.value;
//   // Example logic to update currentIndex based on scroll position
//   // This needs to be adjusted based on your actual requirements
//   const totalScroll = el.scrollWidth - el.clientWidth;
//   const currentScroll = el.scrollLeft;
//   // Update currentIndex based on the scroll position
//   // For simplicity, dividing the scrollable area into equal parts based on the number of testimonials
//   const parts = testimonials.length;
//   const scrollPerPart = totalScroll / parts;
//   currentIndex.value = Math.min(parts - 1, Math.floor(currentScroll / scrollPerPart));

//   console.log(currentIndex.value);
// };

// const scroll = (direction: number) => {
//     if (singleTestimonial.value) {
//         const el = singleTestimonial.value as HTMLElement;
//         if (el) {
//             // console.log(el.scrollLeft, el.clientWidth, el.scrollWidth)
//             const width = el.clientWidth;

//             const threshold = 100; 
//             const isNearEnd = el.scrollLeft + threshold >= el.scrollWidth - el.clientWidth;

//             if (direction === 1 && (isNearEnd || el.scrollLeft + el.clientWidth >= el.scrollWidth)) {
//                 currentIndex.value = 0;
//                 el.scrollTo({ left: 0, behavior: 'smooth' });
//             } else {
//                 // Otherwise, scroll as normal
//                 if(direction === -1 && currentIndex.value === 0){
//                     currentIndex.value= 0;
//                 } else if(direction === 1 && currentIndex.value === testimonials.length - 1){
//                     currentIndex.value = 0;
//                 } else {
//                     currentIndex.value += direction;
//                 }
//                 el.scrollTo({
//                     left: el.scrollLeft + width * direction,
//                     behavior: 'smooth'
//                 });

//             }
//         }
//     }
//     console.log(currentIndex.value);
// };

</script>

<template>
    <div class="container">
        <h1>Testimonials</h1>

        <Carousel class="carousel">
            <SingleTestimonial v-for="testimonial in testimonials" :testimonial="testimonial" />

        </Carousel>
 
    </div>
</template>

<style scoped lang="scss">
.container {
    margin-top: 12.5rem;
    width: 100%;
    @include flexDirection(column);
    >h1 {
        color: $navy;
        @include pagePadding;
        align-self: flex-start;
    }

    .carousel{
        height: 300px;
        width:100%;
        @media screen and (max-width: 800px) {
            height: 300px;
            padding: 20px 0;
        }

        @media screen and (max-width: 500px) {
            height: 300px;
            padding: 20px 0;
        }

        @media screen and (min-width: 2080px) {
            height: 480px;
            padding: 20px 0;
        }
    }


}
</style>