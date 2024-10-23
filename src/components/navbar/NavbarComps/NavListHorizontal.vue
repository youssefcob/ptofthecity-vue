<script setup lang="ts">
import { RouterLink } from 'vue-router';

import { services, getServices } from '@/components/HomePage/servicesSection/Services';
import { clinics, getClinics, clinicNames } from '@/components/HomePage/clinicsSection/Clinics';
import { onMounted, ref } from 'vue';

const props = defineProps({
    navOnLanding: {
        type: Boolean,
        required: true
    }
})
onMounted(async () => {
    await getServices();
    await getClinics();
    // console.log('clinics', clinics);
    // console.log('clinicNames', clinicNames);

})

</script>

<template>
    <ul :class="props.navOnLanding ? 'main' : 'secondary'">
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
        <li class="dropdown">
            <RouterLink class="list-item dropbtn" active-class="navbar-link" to="/#Clinics">
                {{ $translate('Clinics') }}
            </RouterLink>
            <div class="dropdown-content clinics">
                <div class="clinic" v-for="(clinic, index) in clinicNames" :key="clinic">
                    <strong>{{ clinic }}</strong>

                    <router-link class="dropdown-item" v-for=" title in clinics[clinic as keyof typeof clinics]"
                        :to="`/clinic/${title.id.toString()}`">{{ title.name }}</router-link>
                </div>
            </div>
        </li>


        <li>
            <RouterLink class="list-item" active-class="navbar-link" to="/#Insurance">
                Insurance choices
            </RouterLink>
        </li>
        <li>
            <RouterLink class="list-item" active-class="navbar-link" to="/#WhoWeAre">
                {{ $translate('whoWeAre') }}
            </RouterLink>
        </li>
        <li>
            <RouterLink class="list-item" active-class="navbar-link" to="/Blog">
                {{ $translate('blog') }}
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
        <li>
            <RouterLink class="list-item" active-class="navbar-link" to="/#ContactUs">
                {{ $translate('contactUs') }}
            </RouterLink>
        </li>


    </ul>
</template>

<style scoped lang="scss">
ul {
    list-style-type: none;
    display: flex;
    gap: 0.2rem;
    align-items: center;
    padding: 0.6rem 1.5rem;

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
                .clinic {
                    display: flex;
                    flex-direction: column;
                }

                strong {
                    display: block;
                }
            }
        }

        &:hover .dropdown-content {
            display: grid;
        }
    }

    .list-item {
        display: block;
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