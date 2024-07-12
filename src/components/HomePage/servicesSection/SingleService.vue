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
    width: 100%;
    height: 100%;
    overflow: hidden;
    // background-image: url(@/assets/images/servicesCarousel/06df9092a1bfd6cb8df5d3c910637faa.jpg);
    @include flex(center, flex-end);
    background-size: cover;

    .img-container {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .service-description {
        width: 32rem;
        height: 100%;

        @media (max-width: 750px) {
            width: 50%;
        }

    }


}
</style>