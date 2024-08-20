<script setup lang="ts">
import { Vue3Snackbar } from "vue3-snackbar";
// import  SnackBar  from "@/components/snackbar/SnackBar.vue";

</script>

<template>
<div :lang="$lang()">
    <RouterView />

    <!-- <SnackBar/> -->
    <vue3-snackbar :iconPresets="{
        path: ` M10 18L8 12L10 6L14 12L10 18Z`
    }" bottom :duration="1500"
    limit="1" />
</div>
    <!-- <font-awesome-icon :icon="['fas', 'minus']" /> -->
</template>