<script setup lang="ts">
import { Vue3Snackbar } from "vue3-snackbar";
// import  SnackBar  from "@/components/snackbar/SnackBar.vue";

</script>

<template>
  
<RouterView/>

<!-- <SnackBar/> -->
<vue3-snackbar	 bottom :duration="2000"/>

</template>