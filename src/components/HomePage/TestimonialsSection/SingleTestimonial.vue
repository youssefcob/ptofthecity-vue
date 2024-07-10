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
    width: 32.5%;
    scroll-snap-align: start;

    @media screen and (max-width: 800px) {
        width: 50%;

    }

    @media screen and (max-width: 500px) {
        width: 100%;

    }

    height: 100%;
    flex-shrink: 0;
    border-radius: 1.125rem;
    background: #FFF;
    padding:1rem;
    @media screen and (max-width: 500px) {
                padding:2rem;
    }

    >.header {
        width: 100%;
        display: flex;
        align-items: center;
        padding-bottom:10px;

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
            font-size: 1.2rem;
            font-weight: 500;
            font-family: $helvetica;
            @media screen and (max-width: 500px) {
                font-size:17px;
                margin-left: 2rem;
    }
        }

    }

    >.content {
        width: 100%;
        height: 65%;
        // padding: 1rem 0;
        overflow-y: scroll;
        @include scrollBar;

        p {
            font-size: 1rem;
            font-family: $montserrat;
            color: $black;
            @media screen and (max-width: 500px) {
                font-size:14px;
                // margin-top:1rem;
    }
        }
    }
}
</style>