<script setup lang="ts">
import type { Service } from './Services';
const props = defineProps({
    service: {
        type: Object as () => Service,
    }
});
</script>

<template>
    <div class="ser">
        <h1 class="title">{{ props.service?.title }}</h1>
        <!-- <p class="description">{{ props.service?.listHeader }}</p> -->
        <div class="list" v-if="props.service?.list">
            <li v-for="list_item in props.service.list"> {{ list_item }}</li>
        </div>
        <router-link active-class="navbar-link" class="learn-more btn transparent btnfont"
            :to="{ name: `service`, params: { id: $props.service?.id } }">
            Learn More
        </router-link>
    </div>
</template>

<style scoped lang="scss">
.ser {
    height: 100%;
    @include backDrop();
    padding: 0 3.13rem;
    padding-top: 3rem;
    padding-bottom: 2.13rem;
    display: flex;
    flex-direction: column;

    >.title {
        color: $white;

        @media screen and (max-width: 800px) {
            font-size: 2rem;
            // align-self: center;
            margin: auto;

        }
    }

    >.list li {
        @extend .text;
        color: $white;
        list-style-position:inside;


    }

    .learn-more {
        align-self: flex-end;
        margin-top: auto;
        width:50%;
        color:$white;
        
    }

    // >h1,
 

    @media (max-width: 800px) {
        .description,
        .list,
        .learn-more {
            display: none;
        }

    }



}
</style>