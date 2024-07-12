<script setup lang="ts">
// import router from '@/router';
import { useRouter } from 'vue-router';
import ServiceDescription from './ServiceDescription.vue';
import type { Service } from './Services';
const props = defineProps({
    service: {
        type: Object as () => Service
    }
});

const router = useRouter()


const reRoute = () => {
    const x = window.matchMedia("(max-width: 750px)")
    if (x.matches) {
        router.push({ name: 'service', params: { id: props.service?.id } });
    }
}

</script>

<template>
    <div  @click="reRoute" class="single-service" :style="{ backgroundImage: `url(${props.service?.path})` }">
        <div class="service-description">
            <ServiceDescription :service="props.service" />
        </div>

    </div>
</template>

<style scoped lang="scss">
.single-service {
    overflow: hidden;
    @include flex(center, flex-end);
    background-size: cover;
    background-position: center;


    .service-description {
        width: clamp(17rem,35%,50rem);
        height: 100%;

  

    }


}
</style>