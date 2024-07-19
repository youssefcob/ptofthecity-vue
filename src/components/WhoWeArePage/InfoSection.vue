<script setup lang="ts">


import ValuesGrid from './ValuesGrid.vue';



// const changeDesc = (desc: string) => {
//     valueDesc.value = desc;
// }
</script>

<template>
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
                    <ValuesGrid />
                

                </div>
            </div>
            <div class="image-wrapper" :style="{ backgroundImage: `url(/images/whoWeArePage.jpg)` }">
                <div class="btn btnfont">Book Now</div>
            </div>
        </div>

    </div>
</template>

<style scoped lang="scss">
.whoWeAre-wrapper {
    width: 100%;

    .header-t {
        margin-bottom: 1.25rem;
    }

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

            .header-t {
                @media screen and (max-width: 500px) {

                    margin-left: $resMargin;
                }
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
                width: 70%;
            }

            @media screen and (max-width: 770px) {
                display: none;

            }
        }
    }
}
</style>