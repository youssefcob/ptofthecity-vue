<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import type { Ref } from 'vue';
// import insurances from "./Insurances";
import EligibilityFormResponsive from './EligibiltyFormResponsive.vue';
import DropDownInputField from '@/components/sharedComponents/DropDownInputField.vue';
import InputField from '@/components/sharedComponents/InputField.vue';
import FileInputField from '@/components/sharedComponents/FileInputField.vue';


const show: Ref<boolean> = ref(false);
const company: Ref<string> = ref('');
// const insurancesList = insurances;
// let filteredList = ref(insurancesList);



</script>
<template>
    <div class="resposive-form-container">
        <span class="text-s">Check your benefits and eligibility and our team will get back to you within 30 mintues
        </span>
        <form action="">

            <!-- <DropDownInputField :list="insurances" id="insurances" placeHolder="Insurance Plan" required /> -->
            <InputField placeHolder="Member ID" id="memberId" required />
            <InputField placeHolder="Medicare ID" />
            <InputField placeHolder="Medicaid ID" />

            <FileInputField
            placeHolder="Inusrance Card Front"/>
            <FileInputField
            placeHolder="Inusrance Card Back"/>

            <button class="btn responsive main">Submit</button>

        </form>
    </div>
</template>
<style scoped lang="scss">
.resposive-form-container {

    form {
        display: flex;
        flex-direction: column;
        gap:0.7rem;
    }
    
}
</style>