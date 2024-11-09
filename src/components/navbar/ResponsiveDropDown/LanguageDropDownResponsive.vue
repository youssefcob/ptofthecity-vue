<script setup lang="ts">
import NavLogoInverted from './NavLogoInverted.vue';

import { ref, onMounted, onUnmounted } from 'vue';
import type { Ref } from 'vue';


const show: Ref<boolean> = ref(false);
const lang: Ref<string> = ref(localStorage.getItem('lang') || 'EN');

const changeLang = (language: string): void => {
    lang.value = language;
    localStorage.setItem('lang', language);
    show.value = false;
    window.location.reload();
}

let handleClickOutside: (e: Event) => void;

onMounted(() => {
    handleClickOutside = (e: Event) => {
        const dropdownElement = document.querySelector('.language-dropdown-responsive');
        if (dropdownElement && !dropdownElement.contains(e.target as Node)) {
            show.value = false;

        }
    };
    document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
    <div class="lang-container">
        <NavLogoInverted class="logo"/>

        <!-- <div class="language">
            <div class="language-dropdown-responsive">
                <div class="language-btn" @click="show = !show">
                    <span>
                    {{ lang }}
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 12 7" fill="none">
                        <path d="M1 1L6 6L11 1" stroke="black" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </span>

                </div>
                <div class="language-list-responsive" v-if="show">
                    <div class="language-item" @click="changeLang('EN')">EN</div>
                    <div class="language-item" @click="changeLang('AR')">AR</div>
                    <div class="language-item" @click="changeLang('ES')">ES</div>
                </div>
            </div>
        </div> -->

    </div>
</template>

<style scoped lang="scss">
.lang-container {
    padding:3rem 0 3rem 0 ; 
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-items: space-between;
    background-color: $blue;
    margin-bottom: calc(100lvh - 100svh + 2rem);
    border-radius: 1.5rem;

    >.logo{
    margin-left:2.5rem;

    }
    >.language {
        >.language-dropdown-responsive {
            position: relative;
            .language-btn {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 2.5rem 5rem;

                height: 100%;
                width: 45px;
                font-size: 12px;
                font-family: $montserrat;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                letter-spacing: 0.01094rem;
                margin-right:1rem;
                >span{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap:1rem;
                }


            }

            .language-list-responsive {
                position: absolute;
                bottom:3rem;
                right: 0;
                background-color: $white;
                border-radius: 0.5rem;
                box-shadow: 0px 8px 50px 0px rgba(42, 192, 212, 0.15);
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
                padding: 0.5rem;

                .language-item {
                    padding: 0.5rem;
                    cursor: pointer;

                    &:hover {
                        background-color: $grey;
                    }
                }
            }
        }
    }
}
</style>