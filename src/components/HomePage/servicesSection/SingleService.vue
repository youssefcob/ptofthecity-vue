<script setup lang="ts">
// import { defineProps } from 'vue';
import ServiceDescription from './ServiceDescription.vue';
import type { Service } from './Services';



const props = defineProps({
    service: {
        type: Object as () => Service
    }
});

</script>

<template>
    <div class="single-service" :style="{ backgroundImage: `url(${props.service?.path})` }">
        <div class="service-description">
            <ServiceDescription :service="$props.service"/>
        </div>

    </div>
</template>

<style scoped lang="scss">
.single-service {
    width: 100%;
    height: 100%;
    overflow: hidden;
    // background-image: url(@/assets/images/servicesCarousel/06df9092a1bfd6cb8df5d3c910637faa.jpg);
    @include flex(center,flex-end);
    background-size:cover;
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
        width:30%;
        height:100%;
    }
}
</style>