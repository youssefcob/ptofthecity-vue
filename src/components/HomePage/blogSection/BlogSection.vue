<script setup lang="ts">
import BodyHealth from '@/components/sharedComponents/Body/Body.vue';
import { reactive, ref } from 'vue';
import { blogInfo } from './blogSection';
import Instructions from './Instructions.vue';
let blog = reactive({
    neck:false,
    shoulder:false,
    back:false,
    abdomen:false,
    lowerBack:false,
    hands:false,
    elbows:false,
    knees:false,
    feet:false
})

let show = ref(false);
const showInfo = (event: any) => {
    blog[event.id as keyof typeof blog] = event.show;
    console.log(blog);
    show.value = event.show;
}
</script>

<template>

<h1 :style="`position:absolute`" v-if="show">neck</h1>
    <div class="blog-container">
       <Instructions v-if="!show"/>
       
        <div class="figure">
            <BodyHealth @hover="showInfo($event)" />
        </div>
    </div>
</template>

<style scoped lang="scss">
.blog-container {
    @include pagePadding;

    display: grid;
    grid-template-columns: repeat(2, 1fr);



    .figure {
        // width:50%;
        // flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }

}
</style>