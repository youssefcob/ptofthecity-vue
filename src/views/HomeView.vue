<script setup lang="ts">
import NavBar from '@/components/navbar/NavBar.vue';
// import { RouterLink, RouterView } from 'vue-router'



</script>

<template>
        <div class="main-container">
                <NavBar />
                <router-view />
        </div>
</template>
<style scoped lang="scss">
.main-container{
 width:100%;
 overflow: hidden;
}       
</style>
