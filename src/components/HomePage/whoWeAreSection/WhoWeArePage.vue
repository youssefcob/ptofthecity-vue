<script setup lang="ts"></script>

<template>
    <div class="container">

        <h1>Who we are</h1>


        <div class="whoWeAreContainer">
            <div class="stats">

                <div class="box">
                    <div>
                        <h1>22</h1>
                    </div>
                    <div>
                        <h4>Clinics</h4>
                    </div>
                </div>
                <div class="box">
                    <div>
                        <h1>22</h1>
                    </div>
                    <div>
                        <h4>Clinics</h4>
                    </div>
                </div>
                <div class="box">
                    <div>
                        <h1>66600</h1>
                    </div>
                    <div>
                        <h4>Clinics</h4>
                    </div>
                </div>
            </div>

            <div class="infocontainer">
                <h3>Our story</h3>
                <div class="wrapper">
                    <div class="info">
                        <div class="infowrapper">
                            <p>Our story of success started with Dr. Mahmoud`s simple dream of being the best physical
                                therapy clinic in town. It grew over the years into a dream that came true with the
                                establishment of the PT of the city in 2020. We reached 14 locations in a few years, all
                                over New York, with the dedication of our partners and team and the trust of our
                                patients.

                                And to more success, we go.
                            </p>
                        </div>
                        <h3>Our Technique</h3>
                        <div class="infowrapper">
                            <p>
                                We offer you a treatment plan specialized for each case to achieve the most effective
                                results.
                                <br>
                                <br>
                                You will be given detailed information about the nature of the case and injury,
                                the
                                treatment plan, tools, and devices you will use, as well as the expected outcome from
                                the
                                treatment.
                                <br><br>
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
                    <div class="image-wrapper">
                        <img src="@/assets/images/whoweare.jpg" alt="">

                    </div>
                </div>
                <div class="btn-transparent">Learn More</div>
            </div>
        </div>
    </div>

</template>

<style scoped lang="scss">
.container {
    padding: $pagePadding;
    padding-top: 6rem;
    display: flex;
    flex-direction: column;

    h1 {
        color: $navy;
    }
    h4 {
                color: $navy;
            }

    .stats {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(calc(33% - 3rem), 1fr));

        gap: 3rem;
        padding: 3rem 0;

        @media screen and (max-width: 770px) {
            display: flex;
            flex-direction: column;
            gap: 7px
        }

        >.box {
            display: flex;
            // max-width: 33.78569rem;
            height: 13.75rem;
            padding: 2.625rem 3.5625rem;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 1.875rem;
            flex-shrink: 0;
            background-color: $white;
            border-radius: 1.125rem;


            

            @media screen and (max-width: 770px) {
                display: flex;
                flex-direction: row;
                gap: 20px;
                justify-content: space-between;

                >div {
                    width: 50%;
                    display: flex;

                    &:first-child {
                        justify-content: flex-end;

                        >h1 {
                            font-size: 30px;

                        }

                      
                    }
                    &:last-child {
                            justify-content: flex-start;

                            >h4 {
                                font-size: 20px;
                            }
                        }
                }

            }
        }

    }

    .infocontainer {

        h3 {
            color: $navy;
            margin: 1.25rem 0;

        }



        .wrapper {
            display: flex;
            align-items: flex-start;
            justify-items: flex-start;
            gap: 2.5rem;
            margin-bottom: 0;
            margin-bottom: 0;
            padding-top: 0;

            .infowrapper {
                padding: 2.5rem;
                background-color: $white;
                border-radius: 1.25rem;
            }

            .image-wrapper {
                width: 25.875rem;
                height: 41.25rem;
                display: flex;
                align-items: flex-start;
                justify-items: flex-start;
                flex-shrink: 0;

                >img {
                    width: 100%;
                    height: 89%;
                    object-fit: cover;
                    border-radius: 1.125rem;
                }
            }
        }

        .btn-transparent {
            color: $black;
            @extend .btnfont;
            margin-bottom: 1.7rem;
            margin-top: 0;
            max-width: 15%;
            // margin-top:3rem;
        }


    }

}
</style>