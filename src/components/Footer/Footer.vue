<script setup lang="ts">
import Contact from './Contact.vue';
import Logo from './logo.vue';
import Socials from './Socials.vue';
</script>
<template>
    <div class="container">
        <div class="top">
            <Logo />
            <span class="text-t">
                PT of the city© 2024
            </span>
            <Socials />
        </div>
        <div class="mid">
            <span class="text underline">Notice Of Privacy Practices</span>
            <span class="text">Back to top</span>

        </div>
        <div class="bot">
            <Contact />
        </div>
    </div>
</template>

<style scoped lang="scss">
.container {
  margin-top: 12.5rem;

    width: 100%;
    background: linear-gradient(90deg, #236681 0%, #07151B 100%);
    padding: 3.12rem 6.25rem;
    display: flex;
    flex-direction: column;

    >.top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1.25rem;
        flex-wrap: wrap;
        gap:3rem;


        >.text-t {
            color: white;
        }

        padding-bottom:2.9rem;
        border-bottom: 1px solid white;
    }

    >.mid {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1.25rem;
        margin: 4rem 0;

        >.text {
            color: white;

            &.underline {
                text-decoration-line: underline;
            }
        }

    }
}
</style>