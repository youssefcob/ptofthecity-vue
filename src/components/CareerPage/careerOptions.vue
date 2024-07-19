<script setup lang="ts">
import { ref } from 'vue';
import Modal from '../sharedComponents/modal.vue';
import {careers , type Career}from './careers';
import Careerinfo from './careerinfo.vue';
const modal = ref<InstanceType<typeof Modal> | null>(null);
 
    const selectedCareer = ref<Career>(careers.pt);
const openModal = () => {
    if (modal.value) modal.value.openModal();
}
const changeCareer = (career: Career) => {
    selectedCareer.value = career;
}

const handleModal=(career: Career)=>{
    changeCareer(career);
    openModal();

}

const closeModal = () => {
    if (modal.value) modal.value.closeModal();
}
</script>

<template>
    <modal ref="modal">
        <Careerinfo @close="closeModal" :career="selectedCareer"/>
    </modal>

    <div class="options-wrapper">
        <p>Check Responsabilties and duties</p>

        <div class="wrapper">
            <div class="option">
                <div class="wrap" @click="handleModal(careers.pt)">
                    <h1>PT</h1>
                </div>
                <p>Physical Therapy</p>
            </div>
            <div class="option">
                <div class="wrap" @click="handleModal(careers.ptAide)">
                    <h1>PT AIDE</h1>

                </div>
                <p>Physical Therapy</p>
            </div>
            <div class="option">
                <div class="wrap" @click="handleModal(careers.ptAssist)">
                    <h1>PT ASSIST</h1>

                </div>
                <p>Physical Therapy</p>
            </div>
        </div>
        <div class="wrapper">
            <div class="option">
                <div class="wrap" @click="handleModal(careers.ot)">
                    <h1>OT</h1>

                </div>
                <p>Physical Therapy</p>
            </div>
            <div class="option">
                <div class="wrap" @click="handleModal(careers.otAssist)">
                    <h1>OT ASSIST</h1>

                </div>
                <p>Physical Therapy</p>
            </div>
        </div>

    </div>
</template>


<style scoped lang="scss">
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


            .wrap {
                height: 87%;
                width: 100%;
                background-color: $navy;
                display: flex;
                border-radius: $border-radius;
                justify-content: center;
                align-items: center;
                cursor: pointer;

                >h1 {
                    color: $white;
                    text-align: center;
                    // font-size: 370%;
                    // font-size: 3.7rem;
                    // font-size: 3.3vw;
                    font-size: clamp(2.5rem, 3.3vw, 3.7rem);
                }
            }

            p {
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
</style>