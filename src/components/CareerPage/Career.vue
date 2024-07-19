<script setup lang="ts">

import careerForm from './careerForm.vue';
import careerOptions from './careerOptions.vue';


</script>
<template>
    <div class="Ccontainer">
        <div class="sectionHeader">
            <h1 class="pageHeader">Join our team</h1>
            <p>We Are Always Hiring</p>
        </div>
        <div class="careers-container">

            <careerForm />
            <careerOptions />

          
        </div>
    </div>
</template>
<style scoped lang="scss">
$formgap: 1.25rem;

.Ccontainer {
    @include pagePadding();
    padding-top: calc(8vh + 7.5vh);
    @media screen and (max-width: 800px) {
        padding-top: 10vh;
        
    }
    display: flex;
    flex-direction: column;
    width: 100%;

    .careers-container {
        display: flex;
        width: 100%;
        gap: 5rem;

        @media screen and (max-width: 800px) {
            flex-direction: column;

        }


  
    }
}
</style>