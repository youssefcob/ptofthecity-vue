<script setup lang="ts">
import type { StaffMember } from './StaffMembers';



const props = defineProps({
    staffMember: {
        type: Object as () => StaffMember
    }
});

</script>

<template>
    <div class="staffMember" :style="{ backgroundImage: `url(${props.staffMember?.image})` }">
        <div class="staff-name">
            <h2>{{ props.staffMember?.name }}</h2>
        </div>

    </div>
</template>

<style scoped lang="scss">
.staffMember {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-size: cover;
    flex: 0 0 33%;
    margin-right:1%;
    scroll-snap-align: start;
    border-radius: 1.25rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    .staff-name {
        width: 100%;
        height: 5.3125rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(44, 50, 51, 0.20);
        backdrop-filter: blur(50px);
        h2 {
            color: $white;
        }
    }
}
</style>