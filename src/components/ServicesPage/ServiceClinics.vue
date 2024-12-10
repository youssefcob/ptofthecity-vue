<script setup lang="ts">
import type { Clinic } from '@/interfaces/content';


const props = defineProps({
    clinics: Object as () => Clinic[],
});

</script>

<template>
    <div class="results-wrapper">
        <router-link :to="`/clinic/${clinic.id.toString()}`" class="single-result"
            v-for="(clinic, index) in props.clinics">
            <span class="name"> {{ clinic.name }} </span>
            <br>
            <span class="address ps"> {{ clinic.street_address }}</span>
        </router-link>
    </div>
</template>

<style lang="scss" scoped>
.results-wrapper {
    margin-top: 0.5rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(22%, 1fr));
    grid-auto-rows: 1fr;
    gap: 0.5rem;

    width: 100%;

    .single-result {
        background-color: $light-green;
        flex-grow: 1;
        padding: 0.5rem 1rem;
        border-radius: 1rem;
        max-width: 25rem;
        cursor: pointer;

        &:hover {
            background-color: darken($light-green, 10%);
        }

        .name {
            font-weight: 600
        }

        .address.ps {
            margin: 0;
            font-weight: 500;
            color: $black;

        }
    }
}

@media screen and (max-width: 768px) {

    .results-wrapper {
        grid-template-columns: 1fr;

        .single-result {
            padding: 1.2rem;

        }
    }

}
</style>