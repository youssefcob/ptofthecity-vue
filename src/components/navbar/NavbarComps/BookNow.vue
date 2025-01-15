<script lang="ts" setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
    navOnLanding: {
        type: Boolean,
    }
})
</script>

<template>

    <RouterLink :class="`BookNow ${props.navOnLanding ? 'main' : 'secondary'}`" to="/booking">
        <span class="btnfont">Book Now</span>
    </RouterLink>

</template>

<style scoped lang="scss">
.BookNow {
    display: flex;
    height: 100%;
    padding: 0 5rem;
    justify-content: center;
    align-items: center;
    border-radius: 18px;
    background: $blue;
    transition: all .5s ease-in-out;

    &.secondary {
        opacity: 0.8;
        transition: all .5s ease-in-out;
    }

    @media screen and (max-width: 950px) {
        .btnfont {
            font-size: 1.7rem;
        }

    }
}
</style>