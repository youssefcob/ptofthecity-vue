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
}
</style>