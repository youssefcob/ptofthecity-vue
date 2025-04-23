<script setup lang="ts">

import { onMounted, ref, type Ref } from 'vue';
import careerForm from './careerForm.vue';
import careerOptions from './careerOptions.vue';
import type { Job } from '@/interfaces/content';
import Http from '@/mixins/Http';


let httpJobs: Ref<Job[]> = ref([]);
let jobs: Ref<string[]> = ref([]);

const careerFormRef = ref<InstanceType<typeof careerForm> | null>(null);

const getJobs = async () => {
    let data = await Http.get('career/jobs');
    httpJobs.value = data;
    jobs.value = data.filter((job: any) => job.isAvailable == 1).map((job: any) => job.title);
}
onMounted(() => {
    getJobs();
})

const assignJob = (j:string) => {
    if (careerFormRef.value) {
        careerFormRef.value.selectCareer(j);
    }
}
</script>
<template>
    <div class="Ccontainer">
        <div class="sectionHeader">
            <h1 class="pageHeader">Join our team</h1>
            <p>We Are Always Hiring</p>
        </div>
        <div class="careers-container">

            <careerForm ref="careerFormRef" :jobs="jobs"/>
            <careerOptions @apply="assignJob($event)"  :jobs="httpJobs"/>


        </div>
    </div>
</template>
<style scoped lang="scss">
$formgap: 1.25rem;

.Ccontainer {
    @include pagePadding();
    padding-top: calc(8vh + 7.5vh);

    @media screen and (max-width: 800px) {
        padding-top: 10vh;

    }

    display: flex;
    flex-direction: column;
    width: 100%;

    .careers-container {
        display: flex;
        width: 100%;
        gap: 5rem;

        @media screen and (max-width: 800px) {
            flex-direction: column;

        }



    }
}
</style>