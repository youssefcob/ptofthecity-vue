<script setup lang="ts">
const list = [
    'In- Home Therapy',
    'sports rehabilitation',
    ' Orthopedic rehabilitation',
    ' Stroke And Neurological Rehabilitation',
    ' Vestibular Rehabilitation and much more....'
]
</script>
<template>

    <div class="image" :style="{ backgroundImage: `url(/images/1.jpg)` }">
        <div class="service-description">
            <h1 class="title">Our Services</h1>
            <p class="description">Our comprehensive range of physical therapy services is designed to meet your unique
                rehabilitation needs.</p>
            <div class="list" v-if="list">
                <li v-for="list_item in list"> {{ list_item }}</li>
            </div>
            <router-link active-class="navbar-link" class="learn-more btn transparent btnfont"
                :to="{ name: `service`, params: { id: '1' } }">
                Learn More
            </router-link>
        </div>
    </div>

</template>
<style scoped lang="scss">
.image {
    width: 100%;
    height: 40rem;
    height: clamp(17rem, 40vw, 45rem);

    @include image;
    overflow: hidden;
    display: flex;
    justify-content: flex-end;

    .service-description {
        width: clamp(17rem, 35%, 50rem);
        height: 100%;
        @include backDrop();
        padding: 0 3.13rem;
        padding-top: 3rem;
        padding-bottom: 2.13rem;
        display: flex;
        flex-direction: column;
        gap:2rem;

        @media screen and (max-width: 500px) {
            display: none;
        }

        >.description {
            color: $white;
        }

        >.title {
            color: $white;

            @media screen and (max-width: 800px) {
                font-size: 2rem;
                // align-self: center;
                margin: auto;

            }
        }

        >.list li {
            @extend .text;
            color: $white;
            list-style-position: inside;


        }

        .learn-more {
            align-self: flex-end;
            margin-top: auto;
            width: 50%;
            color: $white;

        }

        // >h1,


        @media (max-width: 800px) {

            .description,
            .list,
            .learn-more {
                display: none;
            }

        }



    }
}
</style>