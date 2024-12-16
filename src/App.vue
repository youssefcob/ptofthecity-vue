<script setup lang="ts">
import { Vue3Snackbar } from "vue3-snackbar";
import { useHead } from "@vueuse/head";
import { onMounted, ref } from "vue";
import Http from "./mixins/Http";

import data from "../public/data.json";

import {getImages} from '@/state/Images'

const jsonData = ref(data);



useHead({
    title: jsonData.value.title,
    meta: [
        {
            name: "description",
            content: "Vue3 Snackbar"
        }
    ]
});
const checkMobile = () => {
    let onMobile = false;
    if (window.innerWidth < 600) {
        onMobile = true;
    }
    return onMobile;
}



onMounted(()=>{
getImages()
})

</script>

<template>
<div :lang="$lang()">
    <RouterView />

    <!-- <SnackBar/> -->
    <vue3-snackbar :iconPresets="{
        path: ` M10 18L8 12L10 6L14 12L10 18Z`
    }" :bottom="!checkMobile()" :top="checkMobile()" :duration="1500"
    :limit="1" />
</div>
    <!-- <font-awesome-icon :icon="['fas', 'minus']" /> -->
</template>