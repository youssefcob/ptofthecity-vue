<script setup lang="ts">
import type { StaffMember } from './StaffMembers';
import { useRouter } from 'vue-router';



const props = defineProps({
    staffMember: {
        type: Object as () => StaffMember
    }
});

const router = useRouter()

const reRoute = () => {
    router.push({ name: 'staff', params: { id: props.staffMember?.id } });
}

</script>

<template>
    <div class="staffMember" @click="reRoute" :style="{ backgroundImage: `url(${props.staffMember?.image})` }">
        <div class="staffMemberDescription">
            <h2>{{ props.staffMember?.name }}</h2>
            <div class="desc">
                <p>{{ props.staffMember?.name }}</p>
            </div>
        </div>

    </div>
</template>

<style scoped lang="scss">
.staffMember {
    cursor: pointer;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 0 0 calc(33% - 0.33rem);
    background-size: cover;
    background-position: center;
    border-radius: 1.125rem;
    scroll-snap-align: start;
    justify-content: flex-end;
    overflow: hidden;
    &:hover {
           .staffMemberDescription .desc{
                height:auto;
                max-height: 10rem;
            transition: all 0.8s ease-in-out;

            }
        }

    .staffMemberDescription {
        padding: 5%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        p,h2{
            color:white;
        }
       
        .desc{
            max-height:0;
            overflow:hidden;
            transition: all 0.8s ease-in-out;

        }
        @include backDrop;
    }
}
</style>