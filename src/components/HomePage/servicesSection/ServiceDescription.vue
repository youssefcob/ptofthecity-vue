<script setup lang="ts">
import { defineProps } from 'vue';
import type { Service } from './Services';
const props = defineProps({
    service: {
        type: Object as () => Service
    }
});
</script>

<template>
        <div class="ser">
            smth smth smth
        </div>
</template>

<style scoped lang="scss">
    .ser {
        width:100%;
        height:100%;
        fill: rgba(44, 50, 51, 0.20);

backdrop-filter: blur(50px);
        @include flex();
    }
</style>