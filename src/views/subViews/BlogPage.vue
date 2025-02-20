<script setup lang="ts">
import BodyPart from '@/components/BlogPage/BodyPart.vue';
import BodyPartMobile from '@/components/BlogPage/BodyPartMobile.vue';
import { blogInfo } from '@/state/blogSection';
import { ref } from 'vue';
const parts = Object.keys(blogInfo);


</script>

<template>

    <div class="blog-container">
        <div class="body-health">
            <div class="flex">
                <div class="left">
                    <h1>Body Health</h1>
                    <h2>Symptoms & Treatments</h2>
                    <p>Our bodies face numerous challenges,
                        from common injuries to chronic conditions,
                        each affecting our mobility and quality of life.
                        Understanding these ailments, from back pain to wrist issues,
                        is crucial for identifying symptoms early and seeking the right
                        treatment. This guide breaks down the most common conditions for
                        various body parts, helping you recognize signs like pain,
                        stiffness, or numbness. With tailored treatment options,
                        including physical therapy and strengthening exercises,
                        recovery is possible. Explore the sections below to learn more
                        about managing and overcoming these common health concerns</p>
                </div>
                <div class="right">
                    <img src="/images/body/body.png" alt="body health">
                </div>
            </div>
        </div>
        <div class="body-parts-wrapper desktop">
            <template v-for="(part, index) in blogInfo">

                <BodyPart :content="part" :mirrored="(parts.indexOf(index) % 2) ? false : true" :img="index" />
            </template>

            <!-- <BodyPart class="body-part"/> -->
        </div>

        <div class="body-parts-wrapper mobile">
            <template v-for="(part, index) in blogInfo">
                <BodyPartMobile :content="part" :mirrored="(parts.indexOf(index) % 2) ? false : true" :img="index" />
            </template>
        </div>
    </div>
</template>

<style scoped lang="scss">
.blog-container {
    padding-top: calc(5vh + 7.5vh);

    .body-health {
        @include pagePadding;

        margin-bottom: 10rem;

        .flex {
            display: flex;
            gap: 2rem;

            h2 {
                color: $navy;
            }

            .left {
                margin: auto;
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
            }

            .right {
                display: flex;
                justify-content: flex-start;
                align-items: flex-start;
                height: 100%;
                width: 50%;

                img {
                    width: 30rem;
                    height: 100%;

                }
            }
        }
    }

    .body-parts-wrapper {
        &.desktop {
            display: flex;
            flex-direction: column;
            gap: 10rem;
        }

        &.mobile {
            display: none;
        }
    }
}

@media screen and (max-width: 768px) {
    .blog-container .body-health .flex {
        gap: 0;

        img {
            display: none;
        }
    }


    .blog-container .body-parts-wrapper {
        &.desktop {
            display: none;
        }

        &.mobile {
            display: flex;
            flex-direction: column;
            gap: 10rem;
            @include pagePadding;
        }
    }
}
</style>