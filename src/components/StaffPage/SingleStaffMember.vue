<script setup lang="ts">
import { type StaffMember } from '@/components/HomePage/ourStaffSection/StaffMembers';
import router from '@/router';

const props = defineProps({
    staffMember: {
        type: Object as () => StaffMember
    }
});


    
const emits = defineEmits(['navigate']);

const reRoute = () => {
    emits('navigate',props.staffMember?.id);
    router.push({ name: 'staff', params: { id: props.staffMember?.id } });
}



</script>

<template>
    <div  @click="reRoute" class="image" :style="{ backgroundImage: `url(${props.staffMember?.image})` }">
        <h3 class="title">{{ $props.staffMember?.name }}</h3>
    </div>
</template>

<style scoped lang="scss">
    .image{
        width:500px;
        height:100%;
        cursor: pointer;
        background-position: center;
        background-size: cover;
        display:flex;
        justify-content:center;
        align-items: flex-end;
        overflow: hidden;
        .title{
            @include backDrop;
            width:100%;
            text-align: center;
            color:$white;
            padding:0.75rem;
            font-size:1.2rem;

            @media screen and (max-width: 500px){
                font-size:1.5rem;
            padding:1rem;

            }
        }
    }

</style>