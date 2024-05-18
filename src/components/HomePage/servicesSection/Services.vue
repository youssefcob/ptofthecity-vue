<script setup lang="ts">
import SingleService from './SingleService.vue';
import {services} from './Services';
import type { Service } from './Services';

import { ref } from 'vue';

const service = ref(null);

const scroll = (direction: number) => {
    if (service.value) {
        const el = service.value as HTMLElement;
        if (el) {
            console.log(el.scrollLeft, el.clientWidth, el.scrollWidth)
            const width = el.clientWidth;

            const threshold = 100; 
            const isNearEnd = el.scrollLeft + threshold >= el.scrollWidth - el.clientWidth;

            if (direction === 1 && (isNearEnd || el.scrollLeft + el.clientWidth >= el.scrollWidth)) {
                el.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                // Otherwise, scroll as normal
                el.scrollTo({
                    left: el.scrollLeft + width * direction,
                    behavior: 'smooth'
                });
            }
        }
    }
};

</script>
<template>
    <div class="container">
        <h1>Services</h1>
        <div class="services-container">

            <div class="btn left" @click="scroll(-1)"> <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7"
                    viewBox="0 0 12 7" fill="none">
                    <path d="M1 1L6 6L11 1" stroke="black" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg></div>

            <div class="service" ref="service" >
                <SingleService v-for="service in services" :service="service" />

            </div>

            <div class="btn right" @click="scroll(1)"> <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7"
                    viewBox="0 0 12 7" fill="none">
                    <path d="M1 1L6 6L11 1" stroke="black" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg></div>

        </div>
    </div>
</template>

<style scoped lang="scss">
.container {
    width: 100%;
    height: 80%;
    @include flexDirection(column);

    h1 {
        align-self: baseline;
        margin-left: 10%;
        color: $navy;
    }

    .services-container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .service {
            width: 90%;
            height: 90%;
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            border-radius:1.25rem;

            &::-webkit-scrollbar {
                display: none;
            }

            .single-service {
                flex: 0 0 100%;
                scroll-snap-align: start;
            }
        }

        .btn {
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