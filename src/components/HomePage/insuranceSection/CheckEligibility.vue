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
    <div class="eligibility-container">
        <h1>Check eligibility</h1>
        <EligibilityFormResponsive class="responsive-form-container" />

        <div class="form-image-container">
            <div class="image-container">
                <div class="image">
                    <img src="@/assets/images/eligibilityFormImage.jpg" alt="insurance form">
                </div>
            </div>
            <div class="form-container">
                <div class="form">
                    <span>Check your benefits and eligibility and our team will get back to you within 30 mintues
                    </span>
                    <form action="">
                        <div class="input-fields-container">
                     

                            <DropDownInputField 
                            :list="insurances" 
                            id="insurances" 
                            placeHolder="Insurance Plan"
                            required  
                            />

                            <FileInputField
                            placeHolder="Inusrance Card Front"/>
                  
                            <InputField
                            placeHolder="Member ID"
                            id="memberId"
                            required
                            />
                            <FileInputField
                            placeHolder="Inusrance Card Back"/>
                          
                            <InputField
                            placeHolder="Medicare ID"
                            />     
                            <InputField
                            placeHolder="Medicaid ID"
                            />
                        </div>

                        <button class="btn">Submit</button>

                    </form>
                </div>

            </div>


        </div>

    </div>
</template>

<style scoped lang="scss">
.responsive-form-container {
    display: none;
}

.eligibility-container {
    margin-top: 9rem;
    // padding: $pagePadding;

    width: 100%;


    >h1 {
        color: $navy;
    }

    >.form-image-container {
        height: 36.4375rem;
        margin-top: 3.13rem;
        display: flex;
        align-items: center;
        @media screen and (max-width: 426px){
            display:none;
            
        }

        >.image-container {
            width: 25%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            >.image {
                width: 100%;
                height: 100%;

                >img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 1.125rem;
                }
            }
        }

        >.form-container {
            height: 100%;
            width: 75%;
            @include flex(center, center);

            >.form {
                width: 70%;
                height: 70%;

                >form {
                    margin-top: 1.33rem;
                }

                >span {
                    @extend h4;
                    display: block;
                    width: 33.375rem;

                }

            }
        }
    }

    .input-fields-container {
        padding: 1.87rem 0;
        display: grid;
        grid-template-columns: 1fr 0.8fr;
        gap: 0.63rem;

        .dropdown-btn {
            position: relative;

            .dropdown-wrapper {
                position: absolute;
                top: calc(100% + 0.63rem);
                border-radius: 1.125rem;
                border: 1px solid $blue;
                width: 100%;
                height: 10rem;
                background-color: $white;
                z-index: 1;
                @include flex();
                justify-content: flex-start;

                .dropdown-list {
                    overflow-y: scroll;

                    height: 95%;
                    width: 98%;



                    &::-webkit-scrollbar {
                        width: 10px;

                        background-color: white;
                        // border-radius:rem;
                    }

                    /* Track */
                    &::-webkit-scrollbar-track {
                        border-radius: 1.125rem;
                    }

                    /* Handle */
                    &::-webkit-scrollbar-thumb {
                        background: $navy;
                        border-radius: 1.125rem;
                    }


                    // /* Handle on hover */
                    // &::-webkit-scrollbar-thumb:hover {
                    //     background: #555;
                    // }


                    .dropdown-item {
                        cursor: pointer;
                        padding: 1rem 1rem;
                        border-radius: 1.25rem;
                        border: none;
                        @extend h4;

                        &:hover {
                            background-color: lighten($blue, 30%);
                            // color: $white;
                        }

                    }
                }
            }

        }

    }

    .btn {
        width: 42%;
    }

    .required {
        position: relative;

        .arrowdown,
        .asterisk {
            position: absolute;
        }

        .asterisk {
            left: 11.5rem;
            top: 25%;
            color: red;
        }

        .arrowdown {
            left: 90%;
            top: 34%;
        }
    }

    .file-input {
        position: relative;

        >label {
            position: absolute;
            left: 7rem;
            bottom: 30%;
            background-color: $white;
            font-family: $montserrat;
            font-size: 1.125rem;
            font-style: normal;
            font-weight: 500;
        }
    }
}

@media screen and (max-width: 800px) {

    .eligibility-container {
        @media screen and (max-width: 426px) {
            .responsive-form-container {
                display: block;
            }
        }

        >h1 {
            margin-left: 5%;
        }

        .form-image-container {
            .image-container {
                display: none;
            }

            .form-container {
                @media screen and (max-width: 426px) {
                    display: none;
                }

                width:100%;
                height:100%;

                .form {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
}
</style>