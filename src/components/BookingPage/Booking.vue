<script setup lang="ts">
import { reactive, ref, type Ref } from 'vue';
import Calender from '../sharedComponents/Calender.vue';
import DropDownInputField from '../sharedComponents/DropDownInputField.vue';
import InputField from '../sharedComponents/InputField.vue';
import RadioInputField from '../sharedComponents/RadioInputField.vue';
import insurances from '../HomePage/insuranceSection/Insurances';
import validation from '@/mixins/Validation';
import { useSnackbar } from "vue3-snackbar";
const snackbar = useSnackbar();

const form = reactive({
    location: '',
    firstName: '',
    lastName: '',
    dob: '',
    gender: '',
    phone: '',
    payment: '',
    insurance: '',
    memberId: '',
    pain: '',
    date: '',
    time: ''

})

const locations = [
    "location1",
    'location2',
    'location3'
]


const inusrances = [
    "Insurance1",
    'Insurance2',
    'Insurance3'
]


let Availablehours: Ref<string[]> = ref([])

const formValidation = {
    location: {
        rules: ['required', { dropdown: locations }],
        message: {
            required: 'Please select a location',
            dropdown: 'Please select a valid location'
        }
    },
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
        rules: ['required','date:past',  'min:10'],
        message: {
            required: 'Date Of Birth Is Required',
            date: 'Date Of Birth Must be Valid And In The Past',
            min: 'Date Of Birth Must Be In The Format MM-DD-YYYY'
        }

    },
    gender: {
        rules: ['required', { dropdown: ['Male', 'Female', 'Other'] }],

    },
    phone: {
        rules: ['required', 'min:14'],

    },
    payment: {
        rules: ['required', { dropdown: ['Insurance', 'Self Pay'] }],

    },
    insurance: {
        rules: ['required:if:payment:Insurance', { dropdown: insurances }],

    },
    memberId: {
        rules: ['required:if:payment:Insurance'],
    },
    pain: {
    },
    date: {
        rules: ['required', 'date:future'],

    },
    time: {
        rules: ['required', { dropdown: Availablehours.value }],
    }

}

const formErrors = reactive({
    location: false,
    firstName: false,
    lastName: false,
    dob: false,
    gender: false,
    phone: false,
    payment: false,
    insurance: false,
    memberId: false,
    pain: false,
    date: false,
    time: false
});

const validate = () => {
    let v = new validation(formValidation, form)

    v.validate()
    let errors = v.errors;
    console.log(errors);
    if(errors.length){
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
const updateHours = (date: { day: number, month: number, year: number }) => {
    let time = new Date().getHours()
    let month = new Date().getMonth()
    let day = new Date().getDate()
    let year = new Date().getFullYear()
    let hours = [];
    for (let i = 8; i < 16; i++) {
        if (i < time && month === date.month && day === date.day && year === date.year) continue
        hours.push(`${i}:00`)
    }
    Availablehours.value = hours

}
const updateDate = (date: { day: number, month: number, year: number }) => {
    form.date = `${date.month}-${date.day}-${date.year}`;
    updateHours(date);
}

const assignPayment = (e: string) => {
    form.payment = e
}
const isSelfPay = () => {
    return form.payment !== 'Insurance'

}


</script>
<template>
    <div class="booking-container">
        <h1 class="sectionHeader">Booking</h1>

        <div class="form-container">
            <div class="left">
                <div>

                    <DropDownInputField id="location" :list="locations" placeHolder="Find Your nearest clinic"
                        @input="form.location = $event" required :error="formErrors.location" />
                    <div class="ps">Make sure to allow location access</div>

                </div>
                <div>
                    <div class="split name">
                        <InputField required class="field" placeHolder="First Name" id="firstName"
                            @input="form.firstName = $event" :error="formErrors.firstName" lettersOnly />
                        <InputField required class="field" placeHolder="Last Name" id="lastName"
                            @input="form.lastName = $event" :error="formErrors.lastName" lettersOnly />
                    </div>
                    <div class="ps">Your legal name as shown in the photo ID</div>

                </div>
                <div class="split">
                    <div class="field">
                        <InputField placeHolder="Date of Birth" mask="##-##-####" id="dob" required
                            @input="form.dob = $event" :error="formErrors.dob" date minYear="-100" maxYear="+10"/>
                        <div class="ps">MM-DD-YYYY</div>
                    </div>
                    <DropDownInputField class='field' :list="['Male', 'Female', 'Other']" required id="gender"
                        placeHolder="Gender" @input="form.gender = $event" :error="formErrors.gender" />
                </div>
                <div class="split reverse">
                    <div class="field coverage">
                        <RadioInputField @change="assignPayment($event)" style="width:100%;" title="Coverage"
                            :options="['Insurance', 'Self Pay']" id="payment" :error="formErrors.payment" />
                    </div>
                    <div class="field">
                        <InputField placeHolder="Phone Number" mask="(###) ###-####" id="phone" required
                            @input="form.phone = $event" :error="formErrors.phone" />
                    </div>
                </div>
                <DropDownInputField id="insurance" :list="inusrances" placeHolder="Insurance company name"
                    @input="form.insurance = $event" :disabled="isSelfPay()" :error="formErrors.insurance" />
                <InputField @input="form.memberId = $event" placeHolder="Member ID" id="MemberId"
                    :disabled="isSelfPay()" :error="formErrors.memberId" />
                <InputField @input="form.pain = $event" height="15rem" placeHolder="Tell us more about your pain"
                    id="pain" optional :error="formErrors.pain" />
            </div>
            <div class="right">
                <Calender @input="updateDate($event)" />
                <DropDownInputField @input="form.time = $event" id="time" :list="Availablehours" placeHolder="When"
                    :error="formErrors.time" />
                <div @click="validate()" class="btn responsive">Book Appointment</div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.booking-container {
    @include pagePadding;
    padding-top: calc(8vh + 7.5vh) !important;



    .form-container {
        display: flex;
        gap: 5rem;

        @media screen and (max-width: 870px) {
            flex-direction: column;
            gap: 2.5rem;

        }

        .left {
            width: 100%;

            display: flex;
            flex-direction: column;
            gap: 1.25rem;

            .split {
                display: flex;
                gap: 1.25rem;

                >.field {
                    width: 50%;

                }

                >.coverage {
                    display: flex;
                    align-items: center;
                }

                @media screen and (max-width: 800px) {
                    flex-direction: column;

                    >.field {
                        width: 100%;
                    }

                    &.reverse {
                        flex-direction: column-reverse;
                    }
                }
            }
        }

        .right {
            display: flex;
            flex-direction: column;
            gap: 1.25rem;

            .btn {
                margin-top: auto;

                @media screen and (max-width: 800px) {
                    padding: 2.5rem 0rem;
                    font-size: 1.5rem;
                }
            }
        }
    }


}
</style>
