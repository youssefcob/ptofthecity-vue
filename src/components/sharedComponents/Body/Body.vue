<script setup lang="ts">
import { onMounted, ref } from 'vue';


const emit = defineEmits(['hover']);
const toggleVisibility = (id: string, show: boolean) => {
    const element = document.getElementById(`${id}-img`);
    if (element) {
        element.classList.toggle('hidden', !show);
        emit('hover', {
            id: id,
            show: show
        });

    }

};

const toggleVisibilityMobile = (part:string) => {
    visiblePart.value = part;
    emit('hover', {
        id: part,
        show: true
    });
}

const visiblePart = ref('');

onMounted(() => {
    if(window.innerWidth < 768){
        toggleVisibilityMobile('neck');
    }
});
</script>

<template>
    <div class="container">

        <div class="figure-container">
            <img class="body" src="/images/body/body.png" alt="">
            <img :class="`body ${visiblePart =='neck'? '':'hidden'}`" id="neck-img" src="/images/body/neck.png" alt="">
            <img :class="`body ${visiblePart =='shoulder'? '':'hidden'}`" id="shoulder-img" src="/images/body/shoulder.png" alt="">
            <img :class="`body ${visiblePart =='back'? '':'hidden'}`" id="back-img" src="/images/body/back.png" alt="">
            <img :class="`body ${visiblePart =='abdomen'? '':'hidden'}`" id="abdomen-img" src="/images/body/abdomen.png" alt="">
            <img :class="`body ${visiblePart =='lowerBack'? '':'hidden'}`" id="lowerBack-img" src="/images/body/lowerBack.png" alt="">
            <img :class="`body ${visiblePart =='hands'? '':'hidden'}`" id="hands-img" src="/images/body/hands.png" alt="">
            <img :class="`body ${visiblePart =='elbows'? '':'hidden'}`" id="elbows-img" src="/images/body/elbows.png" alt="">
            <img :class="`body ${visiblePart =='knees'? '':'hidden'}`" id="knees-img" src="/images/body/knees.png" alt="">
            <img :class="`body ${visiblePart =='feet'? '':'hidden'}`" id="feet-img" src="/images/body/feet.png" alt="">


            <div class="body-grid">

                <router-link to="blog/#neck" class="neck" @mouseenter="toggleVisibility('neck', true)"
                    @mouseleave="toggleVisibility('neck', false)" id="neck"></router-link>

                <router-link to="blog/#shoulder" class="shoulder" @mouseenter="toggleVisibility('shoulder', true)"
                    @mouseleave="toggleVisibility('shoulder', false)" id="shoulder"></router-link>

                <router-link to="blog/#lowerBack" class="lower-back" @mouseenter="toggleVisibility('lowerBack', true)"
                    @mouseleave="toggleVisibility('lowerBack', false)" id="lower-back"></router-link>
                <router-link to="blog/#back" class="back" @mouseenter="toggleVisibility('back', true)"
                    @mouseleave="toggleVisibility('back', false)" id="back"></router-link>

                <router-link to="blog/#abdomen" class="abdomen" @mouseenter="toggleVisibility('abdomen', true)"
                    @mouseleave="toggleVisibility('abdomen', false)" id="abdomen"></router-link>

                <router-link to="blog/#hands" class="hand" @mouseenter="toggleVisibility('hands', true)"
                    @mouseleave="toggleVisibility('hands', false)" id="left-hand"></router-link>
                <router-link to="blog/#hands" class="hand" @mouseenter="toggleVisibility('hands', true)"
                    @mouseleave="toggleVisibility('hands', false)" id="right-hand"></router-link>

                <router-link to="blog/#elbows" class="elbow" @mouseenter="toggleVisibility('elbows', true)"
                    @mouseleave="toggleVisibility('elbows', false)" id="right-elbow"></router-link>
                <router-link to="blog/#elbows" class="elbow" @mouseenter="toggleVisibility('elbows', true)"
                    @mouseleave="toggleVisibility('elbows', false)" id="left-elbow"></router-link>

                <router-link to="blog/#knees" class="knees" @mouseenter="toggleVisibility('knees', true)"
                    @mouseleave="toggleVisibility('knees', false)" id="right-knee"></router-link>
                <router-link to="blog/#knees" class="knees" @mouseenter="toggleVisibility('knees', true)"
                    @mouseleave="toggleVisibility('knees', false)" id="left-knee"></router-link>

                <router-link to="blog/#feet" class="feet" @mouseenter="toggleVisibility('feet', true)"
                    @mouseleave="toggleVisibility('feet', false)" id="right-foot"></router-link>
                <router-link to="blog/#feet" class="feet" @mouseenter="toggleVisibility('feet', true)"
                    @mouseleave="toggleVisibility('feet', false)" id="left-foot"></router-link>
            </div>




        </div>
        <div class="grid">
            <div :class="`body-btn ${visiblePart == 'neck'? 'active':''}`" @click="toggleVisibilityMobile('neck')"><span>Neck</span></div>
            <div :class="`body-btn ${visiblePart == 'shoulder'? 'active':''}`" @click="toggleVisibilityMobile('shoulder')"><span>Shoulder</span></div>
            <div :class="`body-btn ${visiblePart == 'back'? 'active':''}`" @click="toggleVisibilityMobile('back')"><span>Back</span></div>
            <div :class="`body-btn ${visiblePart == 'abdomen'? 'active':''}`" @click="toggleVisibilityMobile('abdomen')"><span>Abdomen</span></div>
            <div :class="`body-btn ${visiblePart == 'lowerBack'? 'active':''}`" @click="toggleVisibilityMobile('lowerBack')"><span>Hip</span></div>
            <div :class="`body-btn ${visiblePart == 'hands'? 'active':''}`" @click="toggleVisibilityMobile('hands')"><span>Hand</span></div>
            <div :class="`body-btn ${visiblePart == 'elbows'? 'active':''}`" @click="toggleVisibilityMobile('elbows')"><span>Elbow</span></div>
            <div :class="`body-btn ${visiblePart == 'knees'? 'active':''}`" @click="toggleVisibilityMobile('knees')"><span>Knee</span></div>
            <div :class="`body-btn ${visiblePart == 'feet'? 'active':''}`" @click="toggleVisibilityMobile('feet')"><span>Foot</span></div>
        </div>
    </div>
</template>

<style scoped lang="scss">
$height: 42rem;
$width: 35rem;

.figure-container {
    width: $width;
    height: $height;
    // background-color: red;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    // background-color: red;

    .body {
        position: absolute;
        width: 100%;
        height: 100%;

        &.hidden {
            display: none;
        }
    }

    .body-grid {

        >* {
            // background-color: rgba(0, 0, 0, 0.3);
            // border: 1px solid red;

            // &:hover {
            //     background-color: rgba(0, 0, 0, 0);
            // }
            cursor: pointer;
        }

        #neck {
            position: absolute;
            top: 17%;
            left: 31%;
            width: 9%;
            height: 3%;
            transform: rotate(-26deg);
        }

        #shoulder {
            position: absolute;
            top: 18%;
            left: 37%;
            width: 11%;
            height: 7%;
            border-radius: 40%;



            // transform: rotate(-26deg);
        }

        #lower-back {
            position: absolute;
            top: 42%;
            left: 35%;
            width: 16%;
            height: 6%;
            transform: rotate(-9deg);

        }

        #back {
            position: absolute;
            top: 25%;
            left: 41%;
            width: 8%;
            height: 17.5%;
            border-radius: 0% 0% 50% 50%;
            transform: rotate(-6deg);


        }

        #abdomen {
            position: absolute;
            top: 40.9%;
            left: 34%;
            width: 11%;
            height: 5%;
            transform: rotate(-20deg);


        }

        #right-hand {
            position: absolute;
            top: 25%;
            left: 10%;
            width: 10%;
            height: 8%;
            border-radius: 100%;
        }

        #left-hand {
            position: absolute;
            top: 36%;
            left: 52%;
            width: 9%;
            height: 9%;
            border-radius: 100%;
            transform: rotate(30deg);
        }

        #right-elbow {
            position: absolute;
            top: 32%;
            left: 25%;
            width: 6%;
            height: 7%;
            border-radius: 100% 100% 0% 0%;
            transform: rotate(-15deg);

        }

        #left-elbow {
            position: absolute;
            top: 22%;
            left: 55%;
            width: 10%;
            height: 9%;
            border-radius: 100% 100% 0% 0%;
            transform: rotate(-110deg);
        }

        #right-knee {
            position: absolute;
            top: 63%;
            left: 21.3%;
            width: 8.5%;
            height: 9%;
            transform: rotate(-65deg);

        }

        #left-knee {
            position: absolute;
            top: 63%;
            left: 52%;
            width: 8.1%;
            height: 10%;
            transform: rotate(-115deg);
            border-radius: 100% 0 0% 0%;
        }

        #right-foot {
            position: absolute;
            top: 85%;
            left: 2%;
            width: 21%;
            height: 9%;
            border-radius: 100%;
            transform: rotate(30deg);
        }

        #left-foot {
            position: absolute;
            top: 57%;
            left: 76%;
            width: 21%;
            height: 11%;
            border-radius: 100%;
            transform: rotate(45deg);
        }

    }
}

.grid {
    display:none;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-top: 2rem;

    .body-btn {
        border-radius: 1rem;
        padding: 1rem;
        border: 1px solid #A6CAD3;
        background: #C7E3E8;
        text-align: center;
        color:$black;

        &.active {
            background: #CAE1CC;


        }
    }
    @media screen and (max-width: 768px) {
        display: grid;
        
    }
}
</style>