<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import type { Ref } from 'vue';
import insurances from "./Insurances";
import EligibilityFormResponsive from './EligibiltyFormResponsive.vue';


const show: Ref<boolean> = ref(false);
const company: Ref<string> = ref('');
const insurancesList = insurances;
let filteredList = ref(insurancesList);

const changeCompany = (insurance: string) => {
    company.value = insurance;
    show.value = false;

}

const showDropDown = () => {
    show.value = true;
    console.log(show.value);
}

const filterCompanies = () => {
    filteredList.value = insurancesList.filter(insurance => insurance.startsWith(company.value));
}
let handleClickOutside: (e: Event) => void;

onMounted(() => {
    handleClickOutside = (e: Event) => {
        const dropdownElement = document.querySelector('.responsive-dropdown-btn');
        if (dropdownElement && !dropdownElement.contains(e.target as Node)) {
            show.value = false;
        }
    };
    document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
});

</script>
<template>
    <div class="resposive-form-container">
        <span>Check your benefits and eligibility and our team will get back to you within 30 mintues
        </span>
        <form action="">
            <div class="responsive-dropdown-btn" @click.stop="showDropDown">

                <div class="required">
                    <input class="input-field " @input="filterCompanies()" v-model="company" type="text"
                        placeholder="Insurance Company">
                    <label class="asterisk" v-show="!company">*</label>
                    <label class="arrowdown" ref="arrowdown">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 7" fill="none">
                            <path d="M1 1L6 6L11 1" stroke="#000000" stroke-width="1" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </label>

                </div>
                <div class="dropdown-wrapper" v-if="show">
                    <div class="dropdown-list">
                        <div class="dropdown-item " v-for="insurance in filteredList" :key="insurance"
                            @click.stop="changeCompany(insurance)">{{ insurance }}</div>

                    </div>
                </div>
            </div>
            <div class="required">
                <input class="input-field " type="text" placeholder="Member ID">
                <label class="asterisk" style="left:24%" v-show="!company">*</label>

            </div>
            <input class="input-field " type="text" placeholder="Medicare ID">
            <input class="input-field " type="text" placeholder="Medicaid ID">
            <div class="file-input-container">
                <input class="input-field" type="file">
                <label for="files" class="btn-holder"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="11"
                        viewBox="0 0 16 16" fill="none">
                        <path
                            d="M10.67 7.053L6.68004 11.315C6.34156 11.6932 5.85986 11.9119 5.35236 11.9178C4.84487 11.9237 4.35821 11.7162 4.01104 11.346C3.24412 10.5454 3.257 9.27885 4.04004 8.494L9.39904 2.763C9.99015 2.10491 10.8315 1.72677 11.7161 1.72163C12.6006 1.71649 13.4463 2.08482 14.045 2.736C15.3222 4.14736 15.3131 6.29949 14.024 7.7L8.34204 13.771C7.53339 14.5827 6.42651 15.0261 5.28113 14.9971C4.13575 14.9682 3.05268 14.4695 2.28604 13.618C0.533695 11.6414 0.577053 8.6549 2.38604 6.73L7.75304 1"
                            stroke="#2C3233" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </label>
                <label for="files" class="placeHolder">Insurance Card Front
                </label>

            </div>
            <div class="file-input-container">
                <input class="input-field" type="file">
                <label for="files" class="btn-holder"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="11"
                        viewBox="0 0 16 16" fill="none">
                        <path
                            d="M10.67 7.053L6.68004 11.315C6.34156 11.6932 5.85986 11.9119 5.35236 11.9178C4.84487 11.9237 4.35821 11.7162 4.01104 11.346C3.24412 10.5454 3.257 9.27885 4.04004 8.494L9.39904 2.763C9.99015 2.10491 10.8315 1.72677 11.7161 1.72163C12.6006 1.71649 13.4463 2.08482 14.045 2.736C15.3222 4.14736 15.3131 6.29949 14.024 7.7L8.34204 13.771C7.53339 14.5827 6.42651 15.0261 5.28113 14.9971C4.13575 14.9682 3.05268 14.4695 2.28604 13.618C0.533695 11.6414 0.577053 8.6549 2.38604 6.73L7.75304 1"
                            stroke="#2C3233" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </label>
                <label for="files" class="placeHolder">Insurance Card Back
                </label>

            </div>
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

    form {}

    .input-field {
        height: 45px;
        padding: 18px;
        flex-shrink: 0;
        margin-top: 5px;
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
            width:40px;
            border-radius: 1.125rem ;

            background-color: $blue;
            height:90%;
            display:flex;
            align-items: center;
            justify-content: center;
            // text-align: center;

        }
        .placeHolder {
            position: absolute;
            height:30px;
            color:black;
            display: flex;
            align-items: center;
            justify-content: center;
            top: 26%;
            left: 19%;

            @media screen and (max-width: 500px){
            left: 14%;
                
            }
            @media screen and (max-width: 380px){
            left: 16%;
                
            }
            @media screen and (max-width: 325px){
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
    .btn{
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