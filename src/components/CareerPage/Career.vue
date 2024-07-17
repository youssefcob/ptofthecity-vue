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
    <div class="container">
        <div class="sectionHeader">
            <h1>Join our team</h1>
            <p>We Are Always Hiring</p>
        </div>
        <div class="careers-container">
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
                <div class="btn responsive main" style="margin-top: 0;">submit</div>
                <div class="btn responsive main transparent" style="margin-top: 0;">Back to Homepage</div>
            </div>
            <div class="options-wrapper">
                <p>Check Responsabilties and duties</p>

                <div class="wrapper">
                    <div class="option">
                        <div class="wrap">
                            <h1>PT</h1>
                        </div>
                        <p>Physical Therapy</p>
                    </div>
                    <div class="option">
                        <div class="wrap">
                            <h1>PT AIDE</h1>

                        </div>
                        <p>Physical Therapy</p>
                    </div>
                    <div class="option">
                        <div class="wrap">
                            <h1>PT ASSIST</h1>

                        </div>
                        <p>Physical Therapy</p>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="option">
                        <div class="wrap">
                            <h1>OT</h1>

                        </div>
                        <p>Physical Therapy</p>
                    </div>
                    <div class="option">
                        <div class="wrap">
                            <h1>OT ASSIST</h1>

                        </div>
                        <p>Physical Therapy</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
$formgap: 1.25rem;

.container {
    @include pagePadding;
    padding-top: calc(8vh + 7.5vh);
    display: flex;
    flex-direction: column;
    width: 100%;

    .careers-container {
        display: flex;
        width: 100%;
        gap: 5rem;

        @media screen and (max-width: 800px) {
            flex-direction: column;

        }

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

        .options-wrapper {

            display: flex;
            flex-direction: column;
            // flex-wrap: wrap;
            align-items: flex-start;
            // justify-content: center;
            gap: 1.5rem;


            @media screen and (min-width: 800px) {
                width: 57%;
            }

            >.wrapper {
                width: 100%;
                height: 16rem;
                display: flex;
                gap: 1.5rem;
                justify-content: center;

                .option {
                    height: 100%;
                    width: 33%;
                    

                    .wrap{
                        height:87%;
                        width: 100%;
                        background-color: $navy;
                        display: flex;
                        border-radius: $border-radius;
                        justify-content: center;
                        align-items: center;
                        >h1{
                            color:$white;
                            text-align: center;
                        }
                    }
                    p{
                        text-align: center;
                    
                    }
                }
            }

            // .option {
            //     width: 33%;
            //     flex-shrink: 0;
            //     height: 10rem;
            //     background-color: $darkgrey;
            //     border-radius: $border-radius;
            // }
        }
    }
}
</style>