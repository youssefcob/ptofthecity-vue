<script setup lang="ts">
import { GoogleMap, Marker, InfoWindow } from 'vue3-google-map'

// import { clinicLocations } from './Clinics';
import { onMounted } from 'vue';

import { clinics, clinicNames, getClinics } from './Clinics';
import ClinicsMap from './ClinicsMap.vue';

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
    <div class="clinics-container">
        <div class="clinics-wrapper">
            <h1>Our {{getClinicsCount()}} Clinics</h1>
            <div class="clinics">
                <template v-for="(clinic,index) in clinicNames" :key="clinic">
                    <div class="single-clinic">
                    <h2>{{clinic}}</h2>
                    <span>{{clinics[clinic as keyof typeof clinics].length}} Clinics</span>
                </div>
            </template>
            </div>
            <div class="btns-wrapper">
                <div class="btn">See all clinics</div>
                <div class="btn transparent">find your nearest location</div>

            </div>
        </div>
        <div class="map-wrapper">
            <ClinicsMap :clinics="clinics" :clinicNames="clinicNames"/>
        </div>
    </div>
</template>

<style scoped lang="scss">
.clinics-container {
    background: linear-gradient(90deg, #22647F 0%, #07151B 100%);
    @include pagePadding;
    // height: clamp(35rem, 40vw, 70rem);
    display: flex;
    justify-content: space-between;

    .clinics-wrapper {
        padding:1.7rem 0 3rem 0 ;
        width:50%;
        padding-right:17rem;
        display: flex;
        flex-direction: column;
        gap:3rem;
        >.clinics{
            display: flex;
            flex-direction: column;
            gap:1rem;
            .single-clinic{
                display:flex;
                align-items: first baseline;
                justify-content: space-between;
                border-bottom: 1px solid white;
                cursor: pointer;
                h2{
                    color:white;
                }
                span{
                    color:white;
                    font-weight:200;
                }
            }
        }
        >.btns-wrapper{
            width:70%;
            display: flex;
            flex-direction: column;
            gap:1rem;
            margin-top:1rem;
            >.btn.transparent{
                background: rgba(42, 192, 212, 0.20);
                color:white;

            }
        }
        h1 {
            color: white;
        }

    }

    .map-wrapper {
        width: 50%;
        background-color: red;
    }

}
</style>