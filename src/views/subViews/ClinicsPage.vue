<script setup lang='ts'>
import ClinicsMap from '@/components/HomePage/clinicsSectionNew/ClinicsMap.vue';
import DropDownInputField from '@/components/sharedComponents/DropDownInputField.vue';
import InputField from '@/components/sharedComponents/InputField.vue';
import { clinics, clinicNames, getClinics, clinicPositions } from '@/components/HomePage/clinicsSectionNew/Clinics';
import { onMounted, ref } from 'vue';

const props = defineProps({
    location: {
        type: String
    }
}

)

const filteredClinicPositions = ref(clinicPositions)

const filterClinicsByBorough = () => {
    if (props.location) {
        filteredClinicPositions.value = clinics[props.location as keyof typeof clinics]
    }
}

onMounted(async () => {
    await getClinics();
    filterClinicsByBorough()
})

</script>

<template>
    <div class="clinics-wrapper">
        <!-- Location:{{ location }} -->

        <h1>locate your closest clinic</h1>
        <div class="form-map-wrapper">
            <div class="input-fields">
                <DropDownInputField :background="'#C7E3E8'" :placeHolder="'Borough'" :list="clinicNames"
                    :default="props.location || ''" />
                <InputField :background="'#C7E3E8'" :placeHolder="'Zip Code'" />

            </div>
            <div class="map-wrapper">
                <ClinicsMap :clinicsPositions="filteredClinicPositions" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.clinics-wrapper {
    @include pagePadding;
    padding-top: calc(10vh + 1rem + 3rem);

    .form-map-wrapper {
        display: grid;
        grid-template-columns: 1fr 3fr;

        .input-fields {
            background-color: red;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 0 0.4rem;
        }

        .map-wrapper {
            background-color: blue;
            height: 35rem;

        }
    }

}
</style>