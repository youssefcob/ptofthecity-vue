<script setup lang="ts">
import type { Testimonial } from './Testimonial';



const props = defineProps({
    testimonial: {
        type: Object as () => Testimonial
    }
});

</script>

<template>

    <div class="testimonial">
        <div class="header">
            <div class="image"></div>
            <span class="headline">{{ $props.testimonial?.headline }}</span>
        </div>
        <div class="content">
            <p>{{$props.testimonial?.comment}} </p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.testimonial {
    // width: 32.5%;
    @include carouselItem2(3.01);
    scroll-snap-align: start;

    @media screen and (max-width: 800px) {
        @include carouselItem2(2);

    }

    @media screen and (max-width: 500px) {
        @include carouselItem2(1);
        display:flex;

    }

    height: 100%;
    flex-shrink: 0;
    border-radius: $border-radius;
    background: #FFF;
    padding:1rem;
    @media screen and (max-width: 500px) {
                padding:2rem;
    }

    >.header {
        display: flex;
        align-items: center;
        padding-bottom:10px;
        @media screen and (max-width: 500px) {
        display:flex;
        flex-direction: column;
        padding-right:1rem;


    }

        >.image {
            width: 5rem;
            height: 5rem;
            background-color: $blue;
            border-radius: 1.125rem;
            @media screen and (max-width: 500px) {
                width: 10rem;
                height: 10rem;
    }

        }

        >.headline {
            margin-left: 1rem;
            @extend .text;
            @media screen and (max-width: 500px) {
                margin-top:1rem;
    }
        }

    }

    >.content {
        height: 65%;
        @media screen and (max-width: 500px) {
                height:90%;
    }
        overflow-y: scroll;
        @include scrollBar;

        p {
            // font-size: 1rem;
            // font-family: $montserrat;
            // color: $black;
            @extend .text-s;
            @media screen and (max-width: 500px) {
                font-size:14px;
                // margin-top:1rem;
    }
        }
    }
}
</style>