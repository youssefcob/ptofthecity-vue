<script setup lang="ts">
import BodyHealth from '@/components/sharedComponents/Body/Body.vue';
import { reactive, ref, type Ref } from 'vue';
import { blogInfo, type BlogInfoDetail } from './blogSection';
import Instructions from './Instructions.vue';
import BodyPartInfo from './BodyPartInfo.vue';
let blog = reactive({
    neck: false,
    shoulder: false,
    back: false,
    abdomen: false,
    lowerBack: false,
    hands: false,
    elbows: false,
    knees: false,
    feet: false
})

const show = ref(false);
const infoValue: Ref<BlogInfoDetail | null> = ref(null);

const showInfo = (event: any) => {
    blog[event.id as keyof typeof blog] = event.show;
    show.value = event.show;

    updateInfo(event.id, event.show);
}

const updateInfo = (id: string, show: boolean) => {
    if (show) {
        infoValue.value = blogInfo[id as keyof typeof blogInfo];
    } else {
        infoValue.value = null;
    }
}

</script>

<template>

    <!-- <h1 :style="`position:absolute`" v-if="show">neck</h1> -->
    <div class="blog-container">
        <div class="info-wrapper">
            <Instructions v-if="!show" />
             <BodyPartInfo :data="infoValue" v-if="show" /> 
            <router-link to="/blog" class="btn">Our Blog</router-link>

        </div>

        <div class="figure">
            <BodyHealth @hover="showInfo($event)" />
        </div>
    </div>
</template>

<style scoped lang="scss">
.blog-container {
    @include pagePadding;

    display: grid;
    grid-template-columns: 3fr 1fr;


    .info-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;

        .btn {
            width: 50%;
            margin-top: 2rem;
            align-self: flex-start;
        }
    }

    .figure {
        display: flex;
        justify-content: center;
        align-items: center;
    }

}
</style>