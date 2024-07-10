<script setup lang="ts">
import DropDownInputField from '@/components/sharedComponents/DropDownInputField.vue';
import InputField from '@/components/sharedComponents/InputField.vue';


const subjectsList = [
    "subject",
    'test',
    'smth'
]

</script>

<template>
    <div class="form">
   <DropDownInputField
        id="subject"
        required
        :list="subjectsList"
        placeHolder="Subject"
        asteriskPosition="15%"
        @input="console.log($event)"
    />
    <InputField
    @input="console.log($event)"
    required
    placeHolder="Name"
    />
    <InputField
    @input="console.log($event)"
    placeHolder="Email address"
    required
    />
    <InputField
    @input="console.log($event)"
    placeHolder="Phone number"
    />

    <InputField
    @input="console.log($event)"
    placeHolder="Tell us how can we help you"
    height="12.5rem"
    required

    />
</div>
</template>

<style scoped lang="scss">

.form {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

}

</style>