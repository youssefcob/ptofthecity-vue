<script setup lang="ts">


import { ref, onMounted, type Ref } from 'vue';
import SingleTestimonial from './SingleTestimonial.vue';
import { testimonials } from './Testimonial';

const singleTestimonial: Ref<HTMLElement | null> = ref(null);

let currentIndex = ref(0);

onMounted(() => {
    if (singleTestimonial.value) {
        singleTestimonial.value.addEventListener('scroll', updateCurrentIndexBasedOnScroll);
    }
});

const updateCurrentIndexBasedOnScroll = () => {
  if (!singleTestimonial.value) return;
  const el = singleTestimonial.value;
  // Example logic to update currentIndex based on scroll position
  // This needs to be adjusted based on your actual requirements
  const totalScroll = el.scrollWidth - el.clientWidth;
  const currentScroll = el.scrollLeft;
  // Update currentIndex based on the scroll position
  // For simplicity, dividing the scrollable area into equal parts based on the number of testimonials
  const parts = testimonials.length;
  const scrollPerPart = totalScroll / parts;
  currentIndex.value = Math.min(parts - 1, Math.floor(currentScroll / scrollPerPart));

  console.log(currentIndex.value);
};

const scroll = (direction: number) => {
    if (singleTestimonial.value) {
        const el = singleTestimonial.value as HTMLElement;
        if (el) {
            // console.log(el.scrollLeft, el.clientWidth, el.scrollWidth)
            const width = el.clientWidth;

            const threshold = 100; 
            const isNearEnd = el.scrollLeft + threshold >= el.scrollWidth - el.clientWidth;

            if (direction === 1 && (isNearEnd || el.scrollLeft + el.clientWidth >= el.scrollWidth)) {
                currentIndex.value = 0;
                el.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                // Otherwise, scroll as normal
                if(direction === -1 && currentIndex.value === 0){
                    currentIndex.value= 0;
                } else if(direction === 1 && currentIndex.value === testimonials.length - 1){
                    currentIndex.value = 0;
                } else {
                    currentIndex.value += direction;
                }
                el.scrollTo({
                    left: el.scrollLeft + width * direction,
                    behavior: 'smooth'
                });

            }
        }
    }
    console.log(currentIndex.value);
};

</script>

<template>
    <div class="container">
        <h1>Testimonials</h1>

        <div class="testimonials-container">
            <div class="btn left" @click="scroll(-1)"> <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7"
                    viewBox="0 0 12 7" fill="none">
                    <path d="M1 1L6 6L11 1" stroke="black" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg></div>

            <div class="testimonials" ref="singleTestimonial">
                <!-- <StaffMember v-for="staffMember in staffMembers" :staffMember="staffMember" /> -->
                <SingleTestimonial v-for="testimonial in testimonials" :testimonial="testimonial" />

            </div>

            <div class="btn right" @click="scroll(1)"> <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7"
                    viewBox="0 0 12 7" fill="none">
                    <path d="M1 1L6 6L11 1" stroke="black" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg></div>

        </div>
        <div class="indicator-container">
            <div class="indicator" v-for="(testimonial, index) in testimonials" :key="index" :class="{active: index === currentIndex}"></div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.container {
    .indicator-container {
        display: flex;
        justify-content: center;
        gap: 0.5rem;
        margin-top: 1.2rem;
        .indicator{
            width: 1rem;
            height: 1rem;
            max-width: 7px;
            max-height: 7px;
            min-width: 5px;
            min-height:5px ;
            border-radius: 50%;
            background-color: $darkgrey;
            transition: background-color 0.3s ease-in-out;
            &.active {
                background-color: $blue;
            }
        }
    }


    margin-top: 12.5rem;
    width: 100%;
    @include flexDirection(column);


    >h1 {
        color: $navy;
        @include pagePadding;
        align-self: flex-start;
    }

    .testimonials-container {
        width: 100%;
        height: 100%;
        height: 300px;
        display: flex;
        justify-content: space-between;

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

        align-items: center;

        .testimonials {

            width: 90%;
            height: 90%;
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            border-radius: 1.25rem;
            @include scrollBar;
            gap: 1.25rem;

            @media screen and (max-width: 800px) {
                width: 100%;
                height: 100%;

            }

            &::-webkit-scrollbar {
                @media screen and (min-width: 800px) {
                    display: none;
                }

            }


        }

        .btn {
            @media screen and (max-width: 800px) {
                display: none;
            }

            width: 4%;
            height: 90%;
            background-color: $navy;
            color: $white;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            transition: background-color 0.3s ease-in-out;

            &:hover {
                background-color: darken($navy, 10%);
                transition: background-color 0.3s ease-in-out;
            }

            &.left {
                border-radius: 0 1.25rem 1.25rem 0;

                &>svg {
                    transform: rotate(90deg);

                    >path {
                        stroke: $grey;

                    }
                }
            }

            &.right {
                border-radius: 1.125rem 0rem 0rem 1.125rem;

                &>svg {
                    transform: rotate(270deg);

                    >path {
                        stroke: $grey;

                    }
                }
            }
        }
    }

}
</style>