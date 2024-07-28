<script setup lang="ts">
import { ref } from 'vue';
 let trustedBy = ref(20);

</script>

<template>
    <div class="trustedBy-container">
        <h1 class="sectionHeader-m" >{{ $translate('trusted_by') }}</h1>
        <div class="trustBy-carousel">
            <div class="item" v-for="index in trustedBy" :key="index"></div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .trustedBy-container {

      >.trustBy-carousel{
        display: flex;
        // justify-content: center;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        overflow-x: scroll;
        @include scrollBar;
        @media screen and (max-width: 500px){
            margin-left:$resMargin;
        }
        >.item{
      
            width: 9rem;
            height: 9rem;
            background-color: $darkgrey;
            border-radius: $border-radius;
            flex: 0 0 auto;
            box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
            
        }
      }
    }
</style>