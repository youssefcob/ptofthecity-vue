<script setup lang="ts">

const emit = defineEmits(['hover']);
const toggleVisibility = (id: string, show: boolean) => {
    const element = document.getElementById(`${id}-img`);
    if (element) {
        element.classList.toggle('hidden', !show);
        emit('hover',{
            id:id,
            show:show
        });

    }

};

</script>

<template>

    <div class="figure-container">
        <img class="body" src="/images/body/body.png" alt="">
        <img class="body hidden" id="neck-img" src="/images/body/neck.png" alt="">
        <img class="body hidden" id="shoulder-img" src="/images/body/shoulder.png" alt="">
        <img class="body hidden" id="back-img" src="/images/body/back.png" alt="">
        <img class="body hidden" id="abdomen-img" src="/images/body/abdomen.png" alt="">
        <img class="body hidden" id="lowerBack-img" src="/images/body/lowerBack.png" alt="">
        <img class="body hidden" id="hands-img" src="/images/body/hands.png" alt="">
        <img class="body hidden" id="elbows-img" src="/images/body/elbows.png" alt="">
        <img class="body hidden" id="knees-img" src="/images/body/knees.png" alt="">
        <img class="body hidden" id="feet-img" src="/images/body/feet.png" alt="">


        <div class="grid">

            <div class="neck" @mouseenter="toggleVisibility('neck', true)" @mouseleave="toggleVisibility('neck', false)"
                id="neck"></div>

            <div class="shoulder" @mouseenter="toggleVisibility('shoulder', true)"
                @mouseleave="toggleVisibility('shoulder', false)" id="shoulder"></div>

            <div class="lower-back" @mouseenter="toggleVisibility('lowerBack', true)"
                @mouseleave="toggleVisibility('lowerBack', false)" id="lower-back"></div>
            <div class="back" @mouseenter="toggleVisibility('back', true)" @mouseleave="toggleVisibility('back', false)"
                id="back"></div>

            <div class="abdomen" @mouseenter="toggleVisibility('abdomen', true)"
                @mouseleave="toggleVisibility('abdomen', false)" id="abdomen"></div>

            <div class="hand" @mouseenter="toggleVisibility('hands', true)" @mouseleave="toggleVisibility('hands', false)"
                id="left-hand"></div>
            <div class="hand" @mouseenter="toggleVisibility('hands', true)" @mouseleave="toggleVisibility('hands', false)"
                id="right-hand"></div>

            <div class="elbow" @mouseenter="toggleVisibility('elbows', true)"
                @mouseleave="toggleVisibility('elbows', false)" id="right-elbow"></div>
            <div class="elbow" @mouseenter="toggleVisibility('elbows', true)"
                @mouseleave="toggleVisibility('elbows', false)" id="left-elbow"></div>

            <div class="knee" @mouseenter="toggleVisibility('knees', true)" @mouseleave="toggleVisibility('knees', false)"
                id="right-knee"></div>
            <div class="knee" @mouseenter="toggleVisibility('knees', true)" @mouseleave="toggleVisibility('knees', false)"
                id="left-knee"></div>

            <div class="feet" @mouseenter="toggleVisibility('feet', true)" @mouseleave="toggleVisibility('feet', false)"
                id="right-foot"></div>
            <div class="feet" @mouseenter="toggleVisibility('feet', true)" @mouseleave="toggleVisibility('feet', false)"
                id="left-foot"></div>
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

    .grid {

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
</style>