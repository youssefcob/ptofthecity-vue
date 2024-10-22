<script setup lang="ts">
// import { type StaffMember } from '@/components/HomePage/ourStaffSection/StaffMembers';

const props = defineProps({
    image: {
        type: String
    }
});

</script>

<template>
    <div class="background" :style="{ backgroundImage: `url(${props.image})` }">
    </div>
</template>

<style scoped lang="scss">
.background{
    width:100%;
    height:100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    @include carouselItem2(1);
    border-radius: 0px;
}
</style>