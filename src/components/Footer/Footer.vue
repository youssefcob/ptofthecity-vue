<script setup lang="ts">
import Modal from '../sharedComponents/modal.vue';
import Contact from './Contact.vue';
import Logo from './logo.vue';
import PrivacyPractices from './PrivacyPractices.vue';
import Socials from './Socials.vue';
import { ref, type Ref } from 'vue';

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

const privacy: Ref<InstanceType<typeof Modal> | null> = ref(null);

const openModal = () => {
    if (privacy.value) {
        privacy.value.openModal();
    }
};

const closeModal = () => {
    if (privacy.value) {
        privacy.value.closeModal();
    }
};
</script>
<template>
    <Modal ref="privacy">
        <PrivacyPractices @close="closeModal()" />
    </Modal>
    <div class="container">
        <div class="top">
            <Logo />
            <span class="text-t">
                PT of the city© 2024
            </span>
            <Socials />
        </div>
        <div class="mid">

            <span @click="openModal()" class="text underline">Notice Of Privacy Practices</span>

            <!-- <a href="https://drive.google.com/file/d/1I1-VVrKMdIKeRLm2KYsLVNTgNhCTnRXY/view?usp=drive_link"
                class="text underline">Notice Of Privacy Practices</a> -->
            <span class="text click" @click="scrollToTop">Back to top</span>



        </div>
        <div class="bot">
            <Contact />
        </div>
    </div>
</template>

<style scoped lang="scss">
.container {
    margin-top: 12.5rem;

    width: 100%;
    background: linear-gradient(90deg, #236681 0%, #07151B 100%);
    padding: 3.12rem 6.25rem;
    display: flex;
    flex-direction: column;

    >.top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1.25rem;
        flex-wrap: wrap;
        gap: 3rem;


        >.text-t {
            color: white;
        }

        padding-bottom:2.9rem;
        border-bottom: 1px solid white;
    }

    >.mid {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1.25rem;
        margin: 4rem 0;

        >.text {
            color: white;

            &.click {
                cursor: pointer;
            }

            &.underline {
                text-decoration-line: underline;
                cursor: pointer;
            }
        }

    }
}
</style>