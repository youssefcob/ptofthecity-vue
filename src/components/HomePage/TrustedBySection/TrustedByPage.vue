<script setup lang="ts">
import InfiniteCarousel from '@/components/sharedComponents/InfiniteCarousel.vue';
import Http from '@/mixins/Http';
import { onMounted, ref, type Ref } from 'vue';


interface TrustedBy {
    id: number;
    name: string;
    path: string;
}
let trustedBy: Ref<TrustedBy[]> = ref([]);


const getTrustedBy = async () => {
    const res = await Http.get('trustedBy');
    trustedBy.value = res;
    console.log(trustedBy.value);
}
onMounted(() => {
    getTrustedBy();
})

</script>

<template>
    <div class="trustedBy-container">
        <h1 class="sectionHeader-m">{{ $translate('trusted_by') }}</h1>
        <InfiniteCarousel :animationDuration="20">
            <div class="item" v-for="(item, index) in trustedBy" :key="index"
            :style="`background-image: url(${item.path})`"></div>
        </InfiniteCarousel>
    </div>
</template>

<style scoped lang="scss">
.trustedBy-container {

    >.trustBy-carousel {
        display: flex;
        // justify-content: center;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        overflow-x: scroll;
        @include scrollBar;

        @media screen and (max-width: 500px) {
            margin-left: $resMargin;
        }

        >.item {

            // @include image();
            background-position: 0%;
            background-size: 100% 100%;
            // background-size: ;
            width: 21rem;
            height: 21rem;
            // background-color: $darkgrey;
            border-radius: $border-radius;
            flex: 0 0 auto;
            box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);

        }
    }

    .item {

        // background-color: red;
        // @include image();
        background-position: 0%;
        background-size: 100% 100%;
        // background-size: ;
        width: 19rem;
        aspect-ratio: 1/1;
        // height: 21rem;
        // background-color: $darkgrey;
        border-radius: $border-radius;
        flex: 0 0 auto;
        // box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);

    }
}
</style>