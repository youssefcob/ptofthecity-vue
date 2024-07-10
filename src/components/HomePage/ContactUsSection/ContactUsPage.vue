<script setup lang="ts">
import ContactForm from './ContactForm.vue';
import ContactUsImage from './ContactUsImage.vue';
</script>

<template>
    <div class="container">
        <div class="header">
            <h1>Contact us</h1>
            <p>We would love to hear from you!</p>
        </div>
        <div class="form-image-container">
            <div class="form-container">
                <ContactForm />
            </div>
            <div class="image-container">
                <ContactUsImage />
            </div>
        </div>
        <div class="btn-transparent main">submit</div>

    </div>
</template>

<style scoped lang="scss">
.container {
    display: flex;
    flex-direction: column;
    margin-bottom: 500px;
    @include pagePadding;

    .header {
        >h1 {
            color: $navy;
        }
    }

    .form-image-container {
        display: flex;
        justify-content: space-between;
        margin-top: 2.56rem;
        height: fit-content;
        gap: 1.25rem;

        .form-container {
            width: 55%;

            @media screen and (max-width: 768px) {
                width: 100%;

            }
        }

        .image-container {
            width: 45%;
            // height:100%;
            // background-color: blue;
            overflow: hidden;
            border-radius: 1.25rem;
            border: 1px solid $blue;

            @media screen and (max-width: 768px) {
                display: none;
                width: 0%;

            }

        }
    }

    .main {
        align-self: flex-start;
        color: $black;
        background-color: $blue;
        width: 24%;
        padding: 20px;

        @media screen and (max-width: 800px) {
            width: 100%;
        }
    }

}
</style>