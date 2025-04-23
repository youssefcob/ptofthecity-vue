<script setup lang="ts">
import { RouterLink } from 'vue-router';

import { services } from '@/components/HomePage/servicesSection/Services';
import { clinics, clinicNames } from '@/components/HomePage/clinicsSectionNew/Clinics';
import { computed, onMounted } from 'vue';

const props = defineProps({
    navOnLanding: {
        type: Boolean,
        required: true
    }
})
// let rearrangedClinicsNames:Ref<string[]> = ref([]);
onMounted(async () => {
    // await getClinics();
})

let rearrangedClinicsNames = computed(() => {
    return clinicNames.value.filter((clinic) => clinic !== 'Brooklyn').concat('Brooklyn');
})



</script>

<template>
    <ul :class="props.navOnLanding ? 'main' : 'secondary'">

        <li class="dropdown">
            <RouterLink class="list-item dropbtn" active-class="navbar-link" to="/#Clinics">
                {{ $translate('Clinics') }}
            </RouterLink>
            <div v-if="clinicNames.length > 0" class="dropdown-content clinics">
                <template class="clinic" v-for="(clinic, index) in rearrangedClinicsNames" :key="clinic">
                    <strong>{{ clinic }}</strong>

                    <router-link class="dropdown-item" v-for=" title in clinics[clinic as keyof typeof clinics]"
                        :to="`/clinic/${title.id.toString()}`">{{ title.name }}</router-link>
                </template>
            </div>
        </li>

        <li class="dropdown">
            <RouterLink class="list-item dropbtn" active-class="navbar-link" to="/#Services">
                {{ $translate('services') }}
            </RouterLink>
            <div class="dropdown-content">
                <router-link class="dropdown-item" v-for="service in services" :key="service.id"
                    :to="{ name: `service`, params: { id: service?.id } }">
                    {{ service.title }}
                </router-link>
            </div>
        </li>






        <li>
            <RouterLink class="list-item" active-class="navbar-link" to="/#Insurance">
                Insurance choices
            </RouterLink>
        </li>
        <!-- <li>
            <RouterLink class="list-item" active-class="navbar-link" to="/#WhoWeAre">
                {{ $translate('whoWeAre') }}
            </RouterLink>
        </li> -->
        <li>
            <RouterLink class="list-item" active-class="navbar-link" to="/#Blog">
                {{ $translate('Conditions') }}
            </RouterLink>
        </li>
        <li>
            <RouterLink class="list-item" active-class="navbar-link" to="/#Careers">
                {{ $translate('careers') }}
            </RouterLink>
        </li>
        <li>
            <RouterLink class="list-item" active-class="navbar-link" to="/#TrustedBy">
                {{ $translate('trustedBy') }}
            </RouterLink>
        </li>
        <li>
            <RouterLink class="list-item" active-class="navbar-link" to="/#FAQs">
                {{ $translate('faqs') }}
            </RouterLink>
        </li>
        <!-- <li>
            <RouterLink class="list-item" active-class="navbar-link" to="/booking">
                Book Now
            </RouterLink>
        </li> -->


    </ul>
</template>

<style scoped lang="scss">
ul {
    list-style-type: none;
    display: flex;
    gap: clamp(0px, 0.5vw, 1rem);
    align-items: center;
    padding: 0.4rem 1.5rem;

    border-radius: $border-radius;
    height: 100%;

    transition: all .5s ease-in-out;

    &.main {
        transition: all .5s ease-in-out;

        background-color: rgba(238, 236, 237, 0.80);
        backdrop-filter: blur(200px);
    }

    &.secondary {
        transition: all .5s ease-in-out;

        background: rgba(42, 192, 212, 0.20);
        backdrop-filter: blur(200px);

        .list-item {
            color: #236681;
        }
    }

    .dropdown {
        position: relative;
        display: inline-block;
        border-radius: 0.5rem 0.5rem 0 0;

        &:hover {
            background-color: $blue;
        }

        .dropdown-content {
            display: none;
            position: absolute;
            background-color: rgba(43, 192, 212, .9);
            grid-template-columns: auto auto auto;
            grid-gap: 0.2rem 0.5rem;
            padding: 1rem;
            border-radius: $border-radius;
            border-top-left-radius: 0;
            text-align: left;

            .dropdown-item {
                white-space: nowrap;
                cursor: pointer;
                padding: 0.5rem;
                border-radius: $border-radius;


                &:hover {
                    background-color: $navy;
                    color: $blue;
                }


            }

            &.clinics {
                display: none;
                flex-direction: column;
                flex-wrap: wrap;
                width: 40vw;
                height: 58vh;

                .clinic {
                    display: flex;
                    flex-direction: column;
                    flex-wrap: wrap;
                    max-height: fit-content;
                }

                strong {
                    display: block;
                }
            }
        }

        &:hover .dropdown-content {
            display: grid;

            &.clinics {
                display: flex;
            }
        }
    }

    li {
        margin-left: 0;
        height: 100%;
        text-align: center;

    }

    .list-item {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.3125rem 0.4125rem;
        height: 100%;
        position: relative;
        border-radius: 0.5rem;
        font-size: 1.125rem;
        font-weight: 400;
        letter-spacing: 0.01406rem;

        // width:100%;
        // height:100%;
        &:hover {
            background-color: $blue;
        }
    }

    a {
        @extend .nav-font;

    }

}

// .navbar-link:focus{
//   color:red;
// }</style>