<script setup lang="ts">
import insurances from "./Insurances";
import EligibilityFormResponsive from './EligibiltyFormResponsive.vue';

import DropDownInputField from '@/components/sharedComponents/DropDownInputField.vue';
import InputField from '@/components/sharedComponents/InputField.vue';
import FileInputField from '@/components/sharedComponents/FileInputField.vue';
</script>


<template>
    <div class="eligibility-container">
        <h1 class="sectionHeader">Check eligibility</h1>
        <!-- <EligibilityFormResponsive class="responsive-form-container" /> -->

        <div class="form-image-container">
            <div class="image" :style="{ backgroundImage: `url('images/eligibilityFormImage.jpg')` }">
            </div>
            <div class="form-container">
                <div class="form">
                    <span>
                        Check your benefits and eligibility and our team will get back to you within 30 mintues
                    </span>
                    <div class="input-fields-container">
                        <div class="left">
                            <div class="split">
                                <InputField placeHolder="First Name" id="firstName" required />
                                <InputField placeHolder="Last Name" id="lastName" required />
                            </div>
                            <DropDownInputField :list="insurances" id="insurances" placeHolder="Insurance" required />
                            <InputField placeHolder="Member ID" id="memberId" required />
                            <InputField placeHolder="Member ID" id="MemberId" />
                            <div class="split">
                                <InputField placeHolder="Medicare ID" />
                                <InputField placeHolder="Medicaid ID" />
                            </div>
                        </div>

                        <div class="right">
                            <InputField placeHolder="Date of Birth" id="dob" required />
                            <DropDownInputField :list="['male', 'female', 'other']" id="gender" placeHolder="Gender"
                                required />
                            <FileInputField placeHolder="Inusrance Card Front" />
                            <FileInputField placeHolder="Inusrance Card Back" />
                            <button class="btn responsive">Submit</button>

                        </div>
                        <!-- <DropDownInputField :list="insurances" id="insurances" placeHolder="Insurance Plan" required />

                        <FileInputField placeHolder="Inusrance Card Front" />

                        <InputField placeHolder="Member ID" id="memberId" required />
                        <FileInputField placeHolder="Inusrance Card Back" />

                        -->
                    </div>


                </div>

            </div>


        </div>

    </div>
</template>

<style scoped lang="scss">
.responsive-form-container {
    display: none;
}

$formGap: 1.2rem;

.eligibility-container {
    margin-top: $section-margin;
    @include pagePadding;

    >.form-image-container {
        // height: 35.4375rem;
        display: flex;
        justify-content: space-between;

        @media screen and (max-width: 426px) {
            // display: none;

        }

        >.image {
            @media screen and (max-width: 800px) {
                display: none;

            }

            width: 30%;
            // height: 100%;
            @include image(shadow);
        }

        .form-container {
       
            width: 60%;
            display: flex;
            align-items: center;
            justify-content: center;
            @media screen and (max-width: 800px) {
                width: 100%;

            }

            .form {
                width: 100%;
                >span{
                    display: block;
                    margin-bottom: $formGap;
                };
            }

            .input-fields-container {
                // flex-shrink: 0;
                display: flex;
                gap:$formGap;

                // width:100%;
                @media screen and (max-width: 426px) {
                    flex-direction: column;

                }
                .left{
                    width:55%;
                    display: flex;
                    flex-direction: column;
                    gap:$formGap;


                }
                .right{
                    width:45%;
                    display: flex;
                    flex-direction: column;
                    gap:$formGap;
                }
                .split{
                    display:flex;
                    gap:$formGap;
                }
                @media screen and (max-width: 800px) {
             .left,.right{
                    width:100%;
             }

            }
            }
        }
    }




}

// @media screen and (max-width: 800px) {

//     .eligibility-container {
//         @media screen and (max-width: 426px) {
//             .responsive-form-container {
//                 display: block;
//             }
//         }

//         .form-image-container {
//             .image-container {
//                 display: none;
//             }

//             .form-container {
//                 @media screen and (max-width: 426px) {
//                     display: none;
//                 }

//                 width:100%;
//                 height:100%;

//                 .form {
//                     width: 100%;
//                     height: 100%;
//                 }
//             }
//         }
//     }
// }</style>