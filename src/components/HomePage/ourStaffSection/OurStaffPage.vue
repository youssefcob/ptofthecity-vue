

<script setup lang="ts">


import { ref } from 'vue';
import StaffMember from './StaffMember.vue';
import {staffMembers} from './StaffMembers';


const staff = ref(null);

const scroll = (direction: number) => {
    if (staff.value) {
        const el = staff.value as HTMLElement;
        if (el) {
            console.log(el.scrollLeft, el.clientWidth, el.scrollWidth)
            const width = el.clientWidth;

            const threshold = 100; 
            const isNearEnd = el.scrollLeft + threshold >= el.scrollWidth - el.clientWidth;

            if (direction === 1 && (isNearEnd || el.scrollLeft + el.clientWidth >= el.scrollWidth)) {
                el.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                // Otherwise, scroll as normal
                el.scrollTo({
                    left: el.scrollLeft + width * direction,
                    behavior: 'smooth'
                });
            }
        }
    }
};

</script>
<template>
    <div class="container">
        <div class="title-wrapper">
            <h1>Meet Our Staff</h1>
            <p>Physical Therapists you can trust</p>
        </div>
        <div class="staff-container">

            <div class="btn left" @click="scroll(-1)"> <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7"
                    viewBox="0 0 12 7" fill="none">
                    <path d="M1 1L6 6L11 1" stroke="black" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg></div>

            <div class="staff" ref="staff" >
                <StaffMember v-for="staffMember in staffMembers" :staffMember="staffMember" />

            </div>

            <div class="btn right" @click="scroll(1)"> <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7"
                    viewBox="0 0 12 7" fill="none">
                    <path d="M1 1L6 6L11 1" stroke="black" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg></div>

        </div>
        <div class="btn-transparent btnfont">Learn More</div>
    </div>
</template>

<style scoped lang="scss">
.container {
    margin-top:12rem;
    width: 100%;
    height: 87%;
    @include flexDirection(column);
    .btn-transparent{
        align-self: flex-end;
        margin:$pagePadding;
        color:$black;
    }

.title-wrapper {
    padding:$pagePadding;
    align-self: flex-start;
    h1{
        color:$navy
    }
}

    .staff-container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .staff {
            width: 90%;
            height: 90%;
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            border-radius:1.25rem;

            &::-webkit-scrollbar {
                display: none;
            }

            .single-service {
                flex: 0 0 100%;
                scroll-snap-align: start;
            }
        }

        .btn {
            width: 4%;
            height: 90%;
            background-color: $navy;
            color: $white;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            transition: background-color 0.3s ease-in-out;

            &:hover {
                background-color: darken($navy, 10%);
                transition: background-color 0.3s ease-in-out;
            }

            &.left {
                border-radius: 0 1.25rem 1.25rem 0;

                &>svg {
                    transform: rotate(90deg);

                    >path {
                        stroke: $grey;

                    }
                }
            }

            &.right {
                border-radius: 1.125rem 0rem 0rem 1.125rem;

                &>svg {
                    transform: rotate(270deg);

                    >path {
                        stroke: $grey;

                    }
                }
            }
        }
    }

}
</style>