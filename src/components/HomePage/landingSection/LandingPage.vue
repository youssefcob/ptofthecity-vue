<script setup lang="ts">
import Background from './Background.vue';
import BookNow from './BookNow.vue';

</script>

<template>

    <Background class="container">
        <BookNow class="booknow-container"/>
    </Background>
    <!-- <BookNow /> -->


</template>

<style scoped lang='scss'>
.container{
    position: relative;
}
    .booknow-container {
        position: absolute;
        top: 50%;
        left: 12%;
        z-index: 1;
    }
</style>