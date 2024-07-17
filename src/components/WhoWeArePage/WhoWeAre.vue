<script setup lang="ts">
import { onMounted, type Ref, ref } from 'vue';

import { values, type Values } from './values';
import Service from './Service.vue';
import Carousel from '../sharedComponents/Carousel.vue';
import { staffMembers, type StaffMember } from '@/components/HomePage/ourStaffSection/StaffMembers';
import SingleStaffMember from '../StaffPage/SingleStaffMember.vue';

let valueDesc: Ref<string> = ref('');

onMounted(() => {
    valueDesc.value = values[0].description;

    let valuesEl = document.querySelectorAll('.value');
    valuesEl[0].classList.add('active');
    valuesEl.forEach((value, index) => {
        console.log(value);
        value.addEventListener('click', () => {
            valueDesc.value = values[index].description;
            toggleActive(index);
        });
    });
    const toggleActive = (index: number) => {
        valuesEl.forEach((value, i) => {
            if (i === index) {
                value.classList.add('active');
            } else {
                value.classList.remove('active');
            }
        });
    }
});

const changeDesc = (desc: string) => {
    valueDesc.value = desc;
}
</script>

<template>
    <div class="container">
        <div class="whoWeAre-wrapper">
            <div class="first-wrapper">
                <h1 class="sectionHeader">Who we are</h1>
                <div class="info">
                    <div class="">
                        <h3 class="header-t">Our story</h3>
                        <div class="infowrapper">
                            <p class="text-s">Our story of success started with Dr. Mahmoud`s simple dream of being the
                                best
                                physical
                                therapy clinic in town. It grew over the years into a dream that came true with the
                                establishment of the PT of the city in 2020. We reached 14 locations in a few years, all
                                over New York, with the dedication of our partners and team and the trust of our
                                patients.

                                And to more success, we go.
                            </p>
                        </div>
                    </div>
                    <div>
                        <h3 class="header-t">Our Technique</h3>
                        <div class="infowrapper">
                            <p class="text-s">
                                We offer you a treatment plan specialized for each case to achieve the most
                                effective
                                results.
                                You will be given detailed information about the nature of the case and injury,
                                the
                                treatment plan, tools, and devices you will use, as well as the expected outcome
                                from
                                the
                                treatment.
                                Our main concern is your comfort and wellness. You will be treated with the
                                most
                                recent evidence guidelines and the most advanced tools, techniques, and devices that
                                will
                                help you reach the treatment goal in the most convenient way and in the shortest
                                duration of
                                time.
                            </p>
                        </div>
                    </div>
                    <h3 class="header-t">Vision</h3>

                </div>
            </div>
            <div class="image-values-wrapper">
                <div class="values-info-wrapper">
                    <div class="second-wrapper">
                        <div class="infowrapper">
                            <p class="text-s">Better health and well-being for everyone, now and for future generations.
                                To
                                establish PT of The City as one of the leading physical therapy providers in the USA by
                                being the premier choice with utmost integrity, trust, and respect for our valued
                                patients.
                            </p>
                        </div>
                        <div>
                            <h3 class="header-t">Mission</h3>
                            <div class="infowrapper">

                                <p class="text-s">
                                    “To prepare the best plan of care based on the patient’s unique needs and provide
                                    exceptional physical therapy treatment with deep understanding and sincere
                                    diligence.”
                                </p>
                            </div>

                        </div>
                    </div>
                    <div class="values-wrapper">
                        <h3 class="header-t">Values</h3>
                        <div class="values">
                            <div class="value" v-for="(value, index) in values" :key="index">
                                <h3> {{ value.name }} </h3>
                                <div class="description">
                                    <h3>{{ value.name }}</h3>
                                    <p class="text-t">{{ value.description }}</p>
                                </div>
                            </div>
                            <!-- <div class="value" v-for="(value, index) in values" :key="index"
                                :style="{ backgroundImage: `url(${value.path} )` }">
                                {{ value.path }}
                            </div> -->
                        </div>
                        <div class="res-desc">
                            <p class="text-s">{{ valueDesc }}</p>
                        </div>

                    </div>
                </div>
                <div class="image-wrapper" :style="{ backgroundImage: `url(/images/whoWeArePage.jpg)` }">
                    <div class="btn btnfont">Book Now</div>
                </div>
            </div>

        </div>
        <div class="service">
            <Service></Service>
        </div>
        <Carousel NoIndicator class="carousel">
            <SingleStaffMember class="s-staff" v-for="member in staffMembers" :staffMember="member" />
        </Carousel>
        <div class="btns-container">
            <router-link active-class="navbar-link" class="btn btnfont" to="/contact">
                Book Now
            </router-link>
            <router-link active-class="navbar-link" class="btn transparent btnfont" to="/about">
                Back to Home Page
            </router-link>
        </div>
    </div>
</template>

<style scoped lang="scss">
.container {
    width: 100%;
    padding-top: calc(8vh + 7.5vh);
    overflow: hidden;


    .header-t {
        margin-bottom: 1.25rem;
    }


    .whoWeAre-wrapper {
        width: 100%;

        .first-wrapper {
            @include pagePadding;

        }

        .second-wrapper {
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }

        .info,
        .values-info-wrapper {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }

        .infowrapper {
            background-color: $white;
            padding: 2.25rem;
            border-radius: $border-radius;

        }

        .image-values-wrapper {
            display: flex;
            gap: 3rem;
            width: 100%;
            @include pagePadding;

            @media screen and (max-width: (500px)) {
                padding: 0;

                .second-wrapper {
                    @include pagePadding;
                }

            }

            .values-info-wrapper {
                width: 100%;
            }


            .values-wrapper {

                width: 100%;

                .header-t,
                .values {
                    @media screen and (max-width: 500px) {

                        margin-left: $resMargin;
                    }
                }

                .values {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    grid-template-rows: repeat(2, auto);
                    gap: 1rem;
                    width: 100%;


                    @media screen and (max-width: 500px) {
                        display: flex;
                        gap: 1rem;
                        align-items: center;
                        overflow-x: scroll;
                        @include scrollBar;

                        >.value {
                            width: 18rem;
                        }

                    }


                    .value {
                        flex: 0 0 auto;
                        position: relative;
                        background-color: $navy;
                        height: 16rem;

                        @media screen and (max-width: 500px) {


                            &.active {
                                background-color: $white;

                                >h3 {
                                    color: $navy;

                                }
                            }
                        }

                        border-radius: $border-radius;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        overflow: hidden;

                        @media screen and (min-width: 500px) {

                            &:hover {
                                .description {
                                    opacity: 1;
                                    transition: all 0.3s ease-in-out;

                                }
                            }


                        }


                        h3 {
                            color: $white;
                            padding: 1rem;
                        }

                        >.description {
                            position: absolute;
                            top: 0;
                            left: 0;
                            background-color: $white;
                            height: 100%;
                            width: 100%;
                            padding: 1rem 2rem;
                            opacity: 0;
                            transition: all 0.3s ease-in-out;

                            >h3 {
                                color: $navy;
                                padding-left: 0;

                            }

                            >.text-t {
                                line-height: normal;
                                // font-size:1rem;
                                font-weight: 400;
                                color: $navy;

                            }
                        }
                    }
                }

                .res-desc {
                    @include pagePadding;

                    @media screen and (min-width: 500px) {
                        display: none;
                    }

                    >.text-s {
                        background-color: white;
                        padding: 2rem;
                        height:15rem;
                        display: flex;
                        align-items: center;
                        border-radius: $border-radius;
                    }

                    // padding-top:2rem;
                    // padding-bottom:2rem;
                    // font-size: 1.5rem;
                    // line-height: 200%;
                }
            }

            .image-wrapper {
                width: 60%;
                @include image;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                flex-direction: column;
                >.btn {
                    margin-bottom: 20%;
                    width:70%;
                }
                @media screen and (max-width: 770px) {
                    display: none;

                }
            }
        }
    }

    .service {
        width: 100%;
        @include pagePadding;
        margin-top: 3rem;
    }

    .carousel {
        margin-top: 3rem;


        height: 300px;
        width: 100%;

        @media screen and (max-width: 500px) {
            // @include pagePadding;
            margin-left: $resMargin;

        }

        .s-staff {
            @include carouselItem2(7);

            @media screen and (max-width: 1024px) {
                @include carouselItem2(4);

            }

            @media screen and (max-width: 800px) {
                @include carouselItem2(3);

            }

            @media screen and (max-width: 500px) {
                @include carouselItem2(2.8);

            }

        }
    }

    .btns-container {
        @include pagePadding;
        width:30%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1rem;
        margin-top: 3rem;

        @media screen and (max-width: 500px) {
            display: none;
            
        }

      

}
}
</style>