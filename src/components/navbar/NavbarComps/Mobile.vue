<script setup lang="ts">
const props = defineProps({
    inverted:{
        type: Boolean
    },
    navOnLanding: {
        type: Boolean,
    }
})

</script>

<template>
    <a href="tel:+17186480888">
        <div :class="`icon-wrapper ${props.inverted? 'inverted':''} ${props.navOnLanding ? 'main' : 'secondary'}`">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <g clip-path="url(#clip0_813_892)">
                    <path
                        d="M24.2866 17.666L18.8179 15.3223C18.5843 15.2227 18.3246 15.2017 18.078 15.2625C17.8315 15.3232 17.6113 15.4625 17.4507 15.6592L15.0288 18.6182C11.2279 16.8261 8.16904 13.7672 6.37695 9.96631L9.33594 7.54443C9.53305 7.38412 9.67256 7.16395 9.73335 6.91726C9.79414 6.67057 9.7729 6.41079 9.67285 6.17725L7.3291 0.708496C7.21929 0.456742 7.02508 0.251194 6.77996 0.127294C6.53483 0.00339424 6.25416 -0.0310909 5.98633 0.0297849L0.908203 1.20166C0.649985 1.26129 0.419602 1.40668 0.254656 1.6141C0.0897096 1.82153 -5.94829e-05 2.07874 2.95713e-08 2.34375C2.95713e-08 14.8682 10.1514 25 22.6562 25C22.9213 25.0002 23.1787 24.9104 23.3862 24.7455C23.5937 24.5805 23.7392 24.3501 23.7988 24.0918L24.9707 19.0137C25.0312 18.7445 24.996 18.4627 24.8711 18.2168C24.7463 17.9708 24.5396 17.776 24.2866 17.666Z"
                        :fill="props.inverted? `#2bc0d4`: `#2C3233`" />

                </g>

            </svg>
        </div>
    </a>
</template>

<style scoped lang="scss">
a{
    display:block;
    height:100%;
}
.icon-wrapper {
    border-radius: 1.125rem;
    background: #2AC0D4;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0.3125rem 0.625rem;
    cursor: pointer;

    &.inverted{
        background:white;

    }
    &.secondary:not(.inverted) {
        opacity:0.8;
    }
}

</style>