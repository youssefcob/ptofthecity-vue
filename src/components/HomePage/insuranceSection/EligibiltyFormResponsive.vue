<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import type { Ref } from 'vue';
import insurances from "./Insurances";
import EligibilityFormResponsive from './EligibiltyFormResponsive.vue';
import DropDownInputField from '@/components/sharedComponents/DropDownInputField.vue';
import InputField from '@/components/sharedComponents/InputField.vue';
import FileInputField from '@/components/sharedComponents/FileInputField.vue';


const show: Ref<boolean> = ref(false);
const company: Ref<string> = ref('');
const insurancesList = insurances;
let filteredList = ref(insurancesList);



</script>
<template>
    <div class="resposive-form-container">
        <span>Check your benefits and eligibility and our team will get back to you within 30 mintues
        </span>
        <form action="">

            <DropDownInputField :list="insurances" id="insurances" placeHolder="Insurance Plan" required />
            <InputField placeHolder="Member ID" id="memberId" required />
            <InputField placeHolder="Medicare ID" />
            <InputField placeHolder="Medicaid ID" />

            <FileInputField
            placeHolder="Inusrance Card Front"/>
            <FileInputField
            placeHolder="Inusrance Card Back"/>

            <button class="btn">Submit</button>

        </form>
    </div>
</template>
<style scoped lang="scss">
.resposive-form-container {
    margin: 5%;

    >span {
        font-family: $montserrat;
        font-size: 13px;
        font-weight: 400;
        line-height: 200%;
    }

    form {
        display: flex;
        flex-direction: column;
        gap:5px;
    }

    .input-field {
        height: 45px;
        padding: 18px;
        flex-shrink: 0;
        width: 100%;

        &::placeholder {
            font-family: $montserrat;
            font-size: 13px;
            font-weight: 400;
            line-height: 200%;
        }

        &[type="file"] {

            // height: 3.75rem;
            padding: 0;

            &::file-selector-button {

                height: 100%;
                outline: none;
                border: none;
                border-radius: 0 1.125rem 1.125rem 0;
                width: 50px;


                background-color: $blue;
                @extend .btnfont;

            }

        }
    }

    .file-input-container {
        position: relative;

        .btn-holder {
            position: absolute;
            top: 10%;
            left: 2%;
            width: 40px;
            border-radius: 1.125rem;

            background-color: $blue;
            height: 90%;
            display: flex;
            align-items: center;
            justify-content: center;
            // text-align: center;

        }

        .placeHolder {
            position: absolute;
            height: 30px;
            color: black;
            display: flex;
            align-items: center;
            justify-content: center;
            top: 26%;
            left: 19%;

            @media screen and (max-width: 500px) {
                left: 14%;

            }

            @media screen and (max-width: 380px) {
                left: 16%;

            }

            @media screen and (max-width: 325px) {
                left: 19%;

            }

            padding:7px;
            font-family: $montserrat;
            font-size: 13px;
            font-weight: 400;
            line-height: 200%;
            background-color: white;
        }
    }

    .required {
        position: relative;
        display: flex;

        .asterisk {
            position: absolute;
            left: 38%;
            top: 50%;
            transform: translateY(-50%);
            font-size: 13px;
            font-family: $montserrat;
            color: red;
        }

        .arrowdown {
            position: absolute;
            right: 20px;
            top: 55%;
            transform: translateY(-50%);
        }
    }

    .btn {
        width: 100%;
        height: 45px;
        background-color: $blue;
        color: black;
        font-family: $montserrat;
        font-size: 13px;
        font-weight: 700;
        line-height: 200%;
        border: none;
        border-radius: 1.125rem;
        margin-top: 10px;
    }

    .dropdown-wrapper {
        // position: absolute;
        border-radius: 1.125rem;
        border: 1px solid $blue;
        width: 100%;
        height: fit-content;
        max-height: 100px;
        overflow-y: scroll;
        background-color: $white;
        z-index: 1;
        @include flex();
        justify-content: flex-start;

        .dropdown-list {

            height: 95%;
            width: 98%;

            .dropdown-item {
                padding: 10px;
                font-family: $montserrat;
                font-size: 13px;
                margin-left: 6px;

                &:hover {
                    background-color: $blue;
                }
            }
        }
    }
}
</style>