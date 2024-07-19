<script setup lang="ts">
import InputField from '../sharedComponents/InputField.vue';
import DropDownInputField from '../sharedComponents/DropDownInputField.vue';
import FileInputField2 from '../sharedComponents/FileInputField2.vue';

const jobs = [
    "doctor",
    "nurse",
    "receptionist",
    "cleaner",
    "security",
    "driver",
]

const states = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",

]
</script>
<template>
      <div class="form-wrapper">
                <div>
                    <div class="ps">Fields marked with an <span style="color:red">*</span> are required</div>
                    <DropDownInputField placeHolder="Job you're applying for" required :list="jobs" id="jobs" />
                </div>
                <div class="name-wrapper">
                    <InputField class="field" placeHolder="First Name" required />
                    <InputField class="field" placeHolder="Last Name" required />
                </div>
                <InputField placeHolder="Email adress" required />
                <InputField placeHolder="Phone number" required />
                <div>
                    <FileInputField2 placeHolder="Upload your CV" required />
                    <div class="ps">Please upload your document in PDF format (`.pdf`).</div>
                </div>
                <InputField placeHolder="Street address" />
                <div class="location-wrapper">
                    <InputField class="field" placeHolder="City" />
                    <DropDownInputField class="field" placeHolder="State" :list="states" id="states" />
                    <InputField class="field" placeHolder="Zip code" />
                </div>
                <div class="recaptcha"></div>
                <div class="btn responsive main btnfont" style="margin-top: 0;">Submit</div>
                <div class="btn responsive main transparent" style="margin-top: 0;">Back to Homepage</div>
            </div>
</template>

<style scoped lang="scss">
$formgap: 1.25rem;

.form-wrapper {
            width: 60%;

            @media screen and (max-width: 800px) {
                width: 100%;

            }

            display: flex;
            flex-direction: column;
            gap: $formgap;

            .name-wrapper {
                width: 100%;
                display: flex;
                gap: $formgap;

                @media screen and (max-width: 500px) {
                    flex-direction: column;


                }

                >.field {
                    @media screen and (min-width: 501px) {
                        width: 50%;
                    }


                }
            }

            .location-wrapper {
                width: 100%;
                display: flex;
                gap: $formgap;

                @media screen and (max-width: 501px) {
                    flex-direction: column;
                }

                >.field {
                    @media screen and (min-width: 501px) {
                        width: 33.33%;
                    }
                }
            }

            .recaptcha {
                @media screen and (max-width: 501px) {
                    width: 100%;
                    height: 6rem;

                }

                width: 14rem;
                height: 4rem;
                background-color: $darkgrey;
                border-radius: $border-radius;

            }

            .btn {
                @media screen and (min-width: 501px) {
                    width: 40%;


                }
            }
        }

</style>