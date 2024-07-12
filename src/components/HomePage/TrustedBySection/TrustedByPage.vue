<script setup lang="ts">
import { ref } from 'vue';
 let trustedBy = ref(20);

</script>

<template>
    <div class="trustedBy-container">
        <h1>Trusted by</h1>
        <div class="trustBy-carousel">
            <div class="item" v-for="index in trustedBy" :key="index"></div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .trustedBy-container {
      >h1{
        color:$navy;


        @include pagePadding;
      }
      >.trustBy-carousel{
        display: flex;
        // justify-content: center;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        overflow-x: scroll;
        @include scrollBar;
        @media screen and (max-width: 500px){
            margin-left:2.5rem;
        }
        >.item{
      
            width: 100px;
            height: 100px;
            background: $white;
            // border-radius: 50%;
            flex: 0 0 auto;
            box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
            @media screen and (max-width: 500px){
                width: 50px;
                height: 50px;
            }
        }
      }
    }
</style>