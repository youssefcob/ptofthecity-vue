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

    <div class="staffMember" @click="reRoute">
        <div class="image" :style="{ backgroundImage: `url(${props.staffMember?.image})` }">
            <div class="staffMemberDescription">
                <h2>{{ props.staffMember?.name }}</h2>
                <div class="desc">
                    <p>{{ props.staffMember?.name }}</p>
                </div>
            </div>
        </div>

        <h4 class="responsive-name">{{ props.staffMember?.name }}</h4>

    </div>
</template>

<style scoped lang="scss">
.staffMember {
    cursor: pointer;
    flex: 0 0 calc(33% - 0.33rem);
    scroll-snap-align: start;
    overflow: hidden;
    .responsive-name{
        display:none;
        @media screen and (max-width: 425px){
            display:block;
            text-align: center;
            margin-top: 1rem;
            font-family: $montserrat;
            font-weight:400;
            font-size: 1.5rem;
        }
    }

    .image {
        height: 100%;
        @include image;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        @media screen and (max-width: 425px){
            height:82%;
        }
    }

    &:hover {
        .staffMemberDescription .desc {
            height: auto;
            max-height: 10rem;
            transition: all 0.8s ease-in-out;

        }
    }

    .staffMemberDescription {
        padding: 5%;
        text-align: center;
        @media screen and (max-width: 425px) {
            display: none;
        }

        p,
        h2 {
            color: white;
        }

        .desc {
            max-height: 0;
            overflow: hidden;
            transition: all 0.8s ease-in-out;

        }

        @include backDrop;
    }
}
</style>