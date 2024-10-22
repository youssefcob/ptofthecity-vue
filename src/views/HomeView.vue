<script setup lang="ts">
import NavBar from '@/components/navbar/NavBar.vue';
// import { RouterLink, RouterView } from 'vue-router'
import Footer from '@/components/Footer/Footer.vue';
import NavBarNew from '@/components/navbar/NavBarNew.vue';


</script>

<template>
        <div class="main-container">
                <NavBarNew />
                <router-view />
                <Footer />
        </div>
</template>
<style scoped lang="scss">
.main-container {
        width: 100%;
        overflow: hidden;
}
</style>
