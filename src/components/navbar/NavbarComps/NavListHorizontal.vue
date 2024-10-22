<script setup lang="ts">
import { RouterLink } from 'vue-router';

import { services, getServices } from '@/components/HomePage/servicesSection/Services';
import { onMounted, ref } from 'vue';

onMounted(() => {
    getServices();
})

</script>

<template>
    <ul>
        <li class="dropdown">
            <RouterLink class="list-item dropbtn" active-class="navbar-link" to="/#Services">
                {{ $translate('services') }}
            </RouterLink>
            <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div>
        </li>
        <li class="dropdown">
            <RouterLink class="list-item dropbtn" active-class="navbar-link" to="/#Clinics">
                {{ $translate('Clinics') }}
            </RouterLink>
            <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
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
    padding: 0.6rem 2.5rem;
    background-color: rgba(238, 236, 237, 0.80);
    backdrop-filter: blur(200px);
    border-radius: $border-radius;
    height: 100%;

    .dropdown {
        position: relative;
        display: inline-block;

        .dropdown-content {
            display: none;
            position: absolute;

        }
       
        &:hover .dropdown-content {
            display: block;
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