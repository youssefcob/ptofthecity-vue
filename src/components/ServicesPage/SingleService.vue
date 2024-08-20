<script setup lang="ts">
import { type Service } from '@/components/HomePage/servicesSection/Services';
import { lang } from '@/mixins/Translate';
import router from '@/router';

const props = defineProps({
    service: {
        type: Object as () => Service
    }
});


    
const emits = defineEmits(['navigate']);

const reRoute = () => {
    emits('navigate',props.service?.id);
    router.push({ name: 'service', params: { id: props.service?.id } });
}
const trans = (languagesObject:any) => {
    if(!languagesObject) return;
    return languagesObject[lang()];
}


</script>

<template>
    <div  @click="reRoute" class="image" :style="{ backgroundImage: `url(${props.service?.path})` }">
        <h3 class="title">{{ $props.service?.title }}</h3>
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
            padding:1.5rem;
            @media screen and (max-width: 500px){
                font-size:3rem;
            padding:3rem;

            }
        }
    }

</style>