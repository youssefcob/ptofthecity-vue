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
        const dropdownElement = document.querySelector('.dropdown-btn');
        if (dropdownElement && !dropdownElement.contains(e.target as Node)) {
            // if (e.target !== dropdownElement) {
                show.value = false;
                console.log(show.value);
            // }

        }
    };
    document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
});

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
                            <!-- <div class="input-field dropdown-btn">
                                <span>{{company}}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 7"
                                    fill="none">
                                    <path d="M1 1L6 6L11 1" stroke="black" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                                <div class="dropdown-container">

                                </div>

                            </div> -->
                            <div class="dropdown-btn" @click.stop="showDropDown">

                                <div class="required">
                                    <input class="input-field " @input="filterCompanies()" v-model="company"
                                        style="width:100%;" type="text" placeholder="Insurance Company">
                                    <label class="asterisk" v-show="!company">*</label>
                                    <label class="arrowdown" ref="arrowdown">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13"
                                            viewBox="0 0 12 7" fill="none">
                                            <path d="M1 1L6 6L11 1" stroke="black" stroke-width="0.5"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </label>

                                </div>
                                <div class="dropdown-wrapper" v-if="show">
                                    <div class="dropdown-list">
                                        <div class="dropdown-item " v-for="insurance in filteredList" :key="insurance"
                                            @click="changeCompany(insurance)">{{ insurance }}</div>

                                    </div>
                                </div>

                            </div>


                            <div class="file-input">
                                <input class="input-field" style="width:100%;" type="file">
                                <label>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="11" viewBox="0 0 16 16"
                                        fill="none">
                                        <path
                                            d="M10.67 7.053L6.68004 11.315C6.34156 11.6932 5.85986 11.9119 5.35236 11.9178C4.84487 11.9237 4.35821 11.7162 4.01104 11.346C3.24412 10.5454 3.257 9.27885 4.04004 8.494L9.39904 2.763C9.99015 2.10491 10.8315 1.72677 11.7161 1.72163C12.6006 1.71649 13.4463 2.08482 14.045 2.736C15.3222 4.14736 15.3131 6.29949 14.024 7.7L8.34204 13.771C7.53339 14.5827 6.42651 15.0261 5.28113 14.9971C4.13575 14.9682 3.05268 14.4695 2.28604 13.618C0.533695 11.6414 0.577053 8.6549 2.38604 6.73L7.75304 1"
                                            stroke="#2C3233" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                    Insurance Card front</label>
                            </div>
                            <div class="required">

                                <input class="input-field" style="width:100%;" type="text" placeholder="Member ID">
                                <label class="asterisk" style="left:7rem;">*</label>
                            </div>
                            <div class="file-input">
                                <input class="input-field" style="width:100%;" type="file">
                                <label>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="11" viewBox="0 0 16 16"
                                        fill="none">
                                        <path
                                            d="M10.67 7.053L6.68004 11.315C6.34156 11.6932 5.85986 11.9119 5.35236 11.9178C4.84487 11.9237 4.35821 11.7162 4.01104 11.346C3.24412 10.5454 3.257 9.27885 4.04004 8.494L9.39904 2.763C9.99015 2.10491 10.8315 1.72677 11.7161 1.72163C12.6006 1.71649 13.4463 2.08482 14.045 2.736C15.3222 4.14736 15.3131 6.29949 14.024 7.7L8.34204 13.771C7.53339 14.5827 6.42651 15.0261 5.28113 14.9971C4.13575 14.9682 3.05268 14.4695 2.28604 13.618C0.533695 11.6414 0.577053 8.6549 2.38604 6.73L7.75304 1"
                                            stroke="#2C3233" stroke-width="1.3" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                    Insurance Card back</label>
                            </div>
                            <input class="input-field" type="text" placeholder="Medicare ID">
                            <input class="input-field" type="text" placeholder="Medicaid ID">
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