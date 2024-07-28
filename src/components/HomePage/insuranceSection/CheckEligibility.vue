<script setup lang="ts">
import insurances from "./Insurances";

import DropDownInputField from '@/components/sharedComponents/DropDownInputField.vue';
import InputField from '@/components/sharedComponents/InputField.vue';
import FileInputField from '@/components/sharedComponents/FileInputField.vue';
import validation from '@/mixins/Validation';
import { useSnackbar } from "vue3-snackbar";
import { reactive } from "vue";
const snackbar = useSnackbar();
// import snackbar from '@/components/snackbar/SnackBar.vue';


const form = reactive({
    firstName: '',
    lastName: '',
    dob: '',
    insurance: '',
    gender: '',
    memberId: '',
    phone: '',
    medicareId: '',
    medicaidId: '',
    insuranceCardFront: new FormData(),
    insuranceCardBack: new FormData(),
})

const formValidation = {
    firstName: {
        rules: ['required', 'letters:only'],
        message: {
            required: 'First Name Is Required',
            letters: 'Name Cannot Contain Numbers Or Special Characters'
        }
    },
    lastName: {
        rules: ['required', 'letters:only'],
        message: {
            required: 'Last Name Is Required',
            letters: 'Name Cannot Contain Numbers Or Special Characters'
        }
    },
    dob: {
        rules: ['required', 'date:past', 'min:10'],
        message: {
            required: 'Date Of Birth Is Required',
            date: 'Date Of Birth Must be Valid And In The Past',
            min: 'Date Of Birth Must Be In The Format MM-DD-YYYY'
        }

    },
    insurance: {
        rules: ['required', { dropdown: insurances }],
        message: {
            required: 'Insurance Is Required',
        }
    },
    gender: {
        rules: ['required', { dropdown: ['Male', 'Female', 'Other'] }],
        message: {
            required: 'Gender Is Required',
            dropdown: 'Please Pick A Valid Gender'
        }

    },
    memberId: {
        rules: ['required'],
    },
    phone: {
        rules: ['required', 'min:14'],

    },

    medicareId: {
        rules: [],
    },
    medicaidId: {
        rules: [],
    },
    insuranceCardFront: {
        rules: ['file:pdf:png:jpg:jpeg'],
    },
    insuranceCardBack: {
        rules: ['file:pdf:png:jpg:jpeg'],
    }



}

const formErrors = reactive({
    firstName: false,
    lastName: false,
    dob: false,
    insurance: false,
    gender: false,
    memberId: false,
    phone: false,
    medicareId: false,
    medicaidId: false,
    insuranceCardFront: false,
    insuranceCardBack: false
});

const validate = () => {
    let v = new validation(formValidation, form)

    v.validate()
    let errors = v.errors;
    console.log(errors);
    if (errors.length) {
        let errorsArr = Object.values(errors[0])
        console.log(errorsArr)
        let keys = v.keys

        errorsArr.forEach((error) => {
            snackbar.add({
                background: '#F58E8E',
                text: error,

            })
        })



        keys.forEach((key) => {
            setTimeout(() => {
                formErrors[key as keyof typeof formErrors] = false

            }, 500)
            formErrors[key as keyof typeof formErrors] = true

        })
    } else {
        snackbar.add({
            background: '#8EF5E8',
            text: 'Form Submitted Successfully',

        })

    }


}

</script>


<template>
    <div class="eligibility-container">
        <h1 class="sectionHeader">{{ $translate('check_eligibility') }}</h1>

        <div class="form-image-container">
            <div class="image" :style="{ backgroundImage: `url('images/eligibilityFormImage.jpg')` }">
            </div>
            <div class="form-container">
                <div class="form">
                    <span :class="$dir()">
                        {{ $translate('eligibility_check_phrase') }} </span>
                    <div class="input-fields-container">
                        <div class="left">
                            <div class="split">
                                <InputField class="field" :error="formErrors.firstName" @input="form.firstName = $event"
                                    :placeHolder="$translate('first_name')" id="firstName" required lettersOnly />
                                <InputField class="field" :error="formErrors.lastName" @input="form.lastName = $event"
                                    :placeHolder="$translate('last_name')" id="lastName" required lettersOnly />
                            </div>
                            <DropDownInputField :error="formErrors.insurance" @input="form.insurance = $event"
                                :list="insurances" id="insurances" :placeHolder="$translate('insurance_provider')" required />
                            <InputField @input="form.memberId = $event" :error="formErrors.memberId"
                                :placeHolder="$translate('member_id')" id="memberId" required />
                            <InputField @input="form.phone = $event" :error="formErrors.phone"
                                :placeHolder="$translate('phone_number')" id="phone" required mask="(###) ###-####" />
                            <div class="split">
                                <InputField @input="form.medicareId = $event" class="field" :placeHolder="$translate('medicare_id')" />
                                <InputField @input="form.medicaidId = $event" class="field" :placeHolder="$translate('medicaid_id')" />
                            </div>
                        </div>

                        <div class="right">
                            <InputField :placeHolder="$translate('date_of_birth')" @input="form.dob = $event" :error="formErrors.dob"
                                id="dob" required mask="##-##-####" date />
                            <DropDownInputField :list="[$translate('Male'),$translate('Female'),$translate('Other')]" @input="form.gender = $event"
                                :error="formErrors.gender" id="gender" :placeHolder="$translate('gender')" required />
                            <FileInputField :placeHolder="$translate('insurance_card_front')" :error="formErrors.insuranceCardFront"
                                @input="form.insuranceCardFront = $event" />
                            <FileInputField :placeHolder="$translate('insurance_card_back')" :error="formErrors.insuranceCardBack"
                                @input="form.insuranceCardBack = $event" />
                            <button @click="validate" class="btn responsive">{{$translate('submit')}}</button>

                        </div>

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

                >span {
                    display: block;
                    margin-bottom: $formGap;
                    &.rtl{
                        direction: rtl;
                    }
                }

                ;
            }

            .input-fields-container {
                // flex-shrink: 0;
                display: flex;
                gap: $formGap;

                // width:100%;
                @media screen and (max-width: 426px) {
                    flex-direction: column;

                }

                .left {
                    width: 55%;
                    display: flex;
                    flex-direction: column;
                    gap: $formGap;


                }

                .right {
                    width: 45%;
                    display: flex;
                    flex-direction: column;
                    gap: $formGap;
                }

                .split {
                    display: flex;
                    gap: $formGap;

                    >.field {
                        width: 100%;
                    }
                }

                @media screen and (max-width: 800px) {

                    .left,
                    .right {
                        width: 100%;
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