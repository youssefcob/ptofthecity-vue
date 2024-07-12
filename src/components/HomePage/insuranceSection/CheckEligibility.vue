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
        <EligibilityFormResponsive class="responsive-form-container" />

        <div class="form-image-container">
            <div class="image" :style="{ backgroundImage: `url('images/eligibilityFormImage.jpg')` }">
            </div>
            <div class="form-container">
                <div class="form">
                    <span>Check your benefits and eligibility and our team will get back to you within 30 mintues
                    </span>
                    <div class="input-fields-container">


                        <DropDownInputField :list="insurances" id="insurances" placeHolder="Insurance Plan" required />

                        <FileInputField placeHolder="Inusrance Card Front" />

                        <InputField placeHolder="Member ID" id="memberId" required />
                        <FileInputField placeHolder="Inusrance Card Back" />

                        <InputField placeHolder="Medicare ID" />
                        <InputField placeHolder="Medicaid ID" />
                    </div>

                    <button class="btn">Submit</button>

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
    margin-top: $section-margin;
    @include pagePadding;

    >.form-image-container {
        height: 35.4375rem;
        display: flex;
        justify-content: space-between;

        @media screen and (max-width: 426px) {
            display: none;

        }

        >.image {
            @media screen and (max-width: 800px) {
            display: none;

        }
            width: 30%;
            height: 100%;
            @include image(shadow);
        }

        >.form-container {
            width: 67%;
            @include flex(center, center);
            @include pagePadding;
@media screen and (max-width: 800px) {
    padding:0;
}

            >.form {
                width: 100%;


            

                >span {
                    @extend .text;
                    display: block;
                    width: 33.375rem;

                }

            }
        }

        .input-fields-container {
            padding: 1.87rem 0;
            display: grid;
            grid-template-columns: 1fr 0.8fr;
            gap: 0.63rem;



        }
    }



    .btn {
        width: 42%;
    }



}

@media screen and (max-width: 800px) {

    .eligibility-container {
        @media screen and (max-width: 426px) {
            .responsive-form-container {
                display: block;
            }
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