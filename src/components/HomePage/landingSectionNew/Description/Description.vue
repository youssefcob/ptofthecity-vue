<script lang="ts" setup>
import Slogan from './Slogan.vue';


const props = defineProps({
    title: {
        type: String,
        default: 'Default Title'
    },
    description: {
        type: Array as () => string[],
        default: ['Default Description']
    },
    animation: {
        type: String,
        default: 'default-animation'
    },
    interval: {
        type: Number,
        default: 3000
    },
    buttonLink: {
        type: String,
        default: '/default-link'
    },
    buttonText: {
        type: String,
        default: 'Default Button Text'
    }
})


</script>

<template>

    <div class="main-image-content">
        <div class="info">
            <h1 class="landing-header">{{ props.title }}</h1>
            <!-- <h2 class="secondary-landing-header">{{$translate('where_healing_happens')}}</h2> -->
            <div class="slogan-wrapper">
                <Slogan :description="props.description" :animation="props.animation" :interval="props.interval" />
            </div>
            <div class="btn-container">
                <router-link :to="props.buttonLink">
                    <div to="booking" class="btn bigScreen">{{ props.buttonText }}</div>
                </router-link>


            </div>
        </div>
        <router-link :to="props.buttonLink" class="btn responsive main">{{ props.buttonText }}</router-link>


    </div>

</template>
<style scoped lang="scss">
.main-image-content{
    width:100%;
}
h1,
h2 {
    color: white;
    line-height: 100%;
}

.btn.bigScreen {
    width:20rem;
}

.info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.responsive {
    display: none;
}

.btn-container {
    width: 75%;
}


@media only screen and (max-width: 600px) {

    .main-image-content {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 60%;
        padding: 0 2rem;

        .number {
            display: flex;
            align-items: center;
        }

        .btn {
            &.bigScreen {
                display: none;
            }

            &.responsive {
                display: block;
                margin-top:15rem;

            }
        }

        .number {
            margin-top: 0rem;
        }
    }
}
</style>