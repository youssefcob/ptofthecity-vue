<script setup lang="ts">

// import { clinicLocations } from './Clinics';
import { onMounted } from 'vue';

import { clinics, clinicNames, getClinics, clinicPositions } from './Clinics';
import ClinicsMap from '../../sharedComponents/Map.vue';

const getClinicsCount = () => {
    let count = 0;
    for (const city in clinics) {
        count += clinics[city as keyof typeof clinics].length;
    }
    return count;
}

onMounted(async () => {
    await getClinics();

})
</script>

<template>
        <h1 class="responsive">Our {{ getClinicsCount() }} Clinics</h1>

    <div class="clinics-container">

        <div class="clinic-map">
            <div class="clinics-wrapper">
                <h1>Our {{ getClinicsCount() }} Clinics</h1>
                <div class="clinics">
                    <template v-for="(clinic, index) in clinicNames" :key="clinic">
                        <router-link :to="`/clinics/${clinic}`">
                            <div class="single-clinic">
                                <h2>{{ clinic }}</h2>
                                <span>{{ clinics[clinic as keyof typeof clinics].length }} Clinics</span>
                            </div>
                        </router-link>
                    </template>
                </div>
                <!-- <div class="btns-wrapper mobile">
                    <router-link :to="`/clinics`">
                        <div class="btn main">See all clinics</div>
                    </router-link>
                    <div class="btn main transparent">find your nearest location</div>

                </div> -->
                <div class="btns-wrapper">
                    <router-link :to="`/clinics`">
                        <div class="btn responsive">See all clinics</div>
                    </router-link>
                    <div class="btn responsive transparent">find your nearest location</div>

                </div>
            </div>
            <div class="map-wrapper">
                <ClinicsMap :positions="clinicPositions" />


            </div>
        </div>


    </div>
</template>

<style scoped lang="scss">
.clinics-container {
    background: linear-gradient(90deg, #22647F 0%, #07151B 100%);
    @include pagePadding;

    .clinic-map {
        display: flex;
        justify-content: space-between;

        h1 {
            color: $white;
        }

        .clinics-wrapper {
            padding: 1.7rem 0 3rem 0;
            width: 50%;
            width: clamp(35rem, 40vw, 70rem);

            padding-right: 17rem;
            display: flex;
            flex-direction: column;
            gap: 3rem;

            >.clinics {
                display: flex;
                flex-direction: column;
                gap: 1rem;

                .single-clinic {
                    display: flex;
                    align-items: first baseline;
                    justify-content: space-between;
                    border-bottom: 1px solid white;
                    cursor: pointer;

                    h2 {
                        color: white;
                    }

                    span {
                        color: white;
                        font-weight: 200;
                    }
                }
            }
        }

        .map-wrapper {
            width: 50%;
        }
    }

    .btns-wrapper {
        width: 70%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-top: 1rem;
        align-self: first baseline;

        >.btn.transparent {
            background: rgba(42, 192, 212, 0.20);
            color: white;

        }

        &.mobile {
            display: none;
        }
    }



    @media screen and (max-width: 990px) {
        padding: 0;

        .clinic-map {
            flex-direction: column-reverse;

            .clinics-wrapper {
                width: 100%;
                @include pagePadding;

                h1{
                    display:none;
                }

                @media screen and (max-width: 500px) {
                    padding-top: 3rem;
                    padding-bottom: 3rem;
                }

                .btns-wrapper {
                    width: 100%;
                    gap: 1rem;

                    .btn {
                        margin: 0;
                        width: 100%;
                    }
                }

            }

            .map-wrapper {
                width: calc(100vw);
                height: 40vh;
                justify-self: flex-end;

            }
        }
    }
}

h1.responsive{
    display:none;
    @media screen and (max-width: 990px) {
        display:block;
        color:$navy;
        @include pagePadding;
        margin-bottom:2rem;
        
    }
}

// .clinics-container {
//     background: linear-gradient(90deg, #22647F 0%, #07151B 100%);
//     @include pagePadding;

//     .clinic-map{
//         display: flex;
//         justify-content: space-between;
//         @media screen and (max-width: 990px) {
//             flex-direction: column;
//             .clinics-wrapper{
//                 width:100%;
//             }

//         }
//         .clinics-wrapper {
//         padding: 1.7rem 0 3rem 0;
//         width: 50%;
//         width: clamp(35rem, 40vw, 70rem);

//         padding-right: 17rem;
//         display: flex;
//         flex-direction: column;
//         gap: 3rem;



//         >.clinics {
//             display: flex;
//             flex-direction: column;
//             gap: 1rem;

//             .single-clinic {
//                 display: flex;
//                 align-items: first baseline;
//                 justify-content: space-between;
//                 border-bottom: 1px solid white;
//                 cursor: pointer;

//                 h2 {
//                     color: white;
//                 }

//                 span {
//                     color: white;
//                     font-weight: 200;
//                 }
//             }
//         }

//         >.btns-wrapper {
//             @media screen and (max-width: 990px) {
//                 display: none;
//             }
//         }

//         h1 {
//             color: white;
//         }

//     }

//     }

//     .btns-wrapper {
//         width: 70%;
//         display: flex;
//         flex-direction: column;
//         gap: 1rem;
//         margin-top: 1rem;
//         align-self: first baseline;

//         >.btn.transparent {
//             background: rgba(42, 192, 212, 0.20);
//             color: white;

//         }

//         &.mobile {
//             display: none;
//         }
//     }

//     .map-wrapper {
//         width: 50%;
//         // background-color: red;
//     }

//     @media screen and (max-width: 990px) {

//         flex-direction: column;
//         align-items: center;

//         padding: 3rem 11rem;

//         .btns-wrapper.mobile {
//             display: flex;
//         }

//         .clinics-wrapper {
//             width: calc(100vw - 22rem);
//             padding-right: 0;
//         }

//         .map-wrapper {
//             width: calc(100vw - 22rem);
//             height: 40vh;
//             margin: 1.5rem 0;
//         }

//     }

// }</style>