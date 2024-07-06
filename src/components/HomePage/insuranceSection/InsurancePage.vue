<script setup lang="ts">
import CheckEligibility from './CheckEligibility.vue';
import InsuranceWeAccept from './InsuranceWeAccept.vue';


</script>

<template>
    <div class="insuranceLayout">
        <InsuranceWeAccept />
        <CheckEligibility />
    </div>

</template>

<style scoped lang="scss">
.insuranceLayout{
    width:100%;
    display: flex;
    flex-direction: column;
    padding:0 6.25rem;
    @media screen and (max-width: 500px){
        padding:0;
        
    }
}
</style>