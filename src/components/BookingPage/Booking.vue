<script setup lang="ts">
import { reactive, ref, type Ref } from 'vue';
import Calender from '../sharedComponents/Calender.vue';
import DropDownInputField from '../sharedComponents/DropDownInputField.vue';
import InputField from '../sharedComponents/InputField.vue';
import RadioInputField from '../sharedComponents/RadioInputField.vue';

const form = reactive({
    location: '',
    firstName: '',
    lastName: '',
    date: {
        day: 0,
        month: 0,
        year: 0
    },
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
let refreshList: number = 0;
const updateHours = () => {
    let time = new Date().getHours()
    let month = new Date().getMonth()
    let day = new Date().getDate()
    let year = new Date().getFullYear()
    let hours = [];
    const date = form.date
    for (let i = 8; i < 16; i++) {
        if (i < time && month === date.month && day === date.day && year === date.year) continue
        hours.push(`${i}:00`)
    }
    Availablehours.value = hours
    refreshList++;
    console.log(Availablehours.value)
    // return hours
}
const updateDate = (date: { day: number, month: number, year: number }) => {
    form.date = date;
    updateHours();
}

</script>
<template>
    <div class="booking-container">
        <h1 class="sectionHeader">Booking</h1>

        <div class="form-container">
            <div class="left">
                <div>

                    <DropDownInputField id="locations" :list="locations" placeHolder="Find Your nearest clinic"
                        @input="console.log($event)" required />
                    <div class="ps">Make sure to allow location access</div>

                </div>
                <div>
                    <div class="split">
                        <InputField required class="field" placeHolder="First Name" id="firstName" />
                        <InputField required class="field" placeHolder="Last Name" id="lastName" />
                    </div>
                    <div class="ps">Your legal name as shown in the photo ID</div>

                </div>
                <div class="split">
                    <div class="field">
                        <InputField  placeHolder="Date of Birth" mask="##-##-####" id="dob" />
                        <div class="ps">MM-DD-YYYY</div>
                    </div>
                    <RadioInputField @change="console.log($event)" class="field" title="Gender"
                        :options="['Male', 'Female', 'Other']" />
                </div>
                <div class="coverage">
                    <RadioInputField @change="console.log($event)" class="field" title="Coverage"
                        :options="['Insurance', 'Self Pay']" />
                </div>
                <DropDownInputField id="insurance" :list="inusrances" placeHolder="Insurance company name"
                    @input="console.log($event)" />
                <InputField placeHolder="Member ID" id="MemberId" />
                <InputField height="15rem" placeHolder="Tell us more about your pain" id="pain" optional />
            </div>
            <div class="right">
                <Calender @input="updateDate($event)" />
                <DropDownInputField id="time" :list="Availablehours" :refreshList="refreshList" placeHolder="When"
                    @input="console.log($event)" />
                <div class="btn responsive">Book Appointment</div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.booking-container {
    @include pagePadding;
    padding-top: calc(8vh + 7.5vh);

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
