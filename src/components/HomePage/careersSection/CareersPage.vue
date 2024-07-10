<script setup lang="ts">

</script>


<template>
    <div class="careers-container">
        <h1>Careers</h1>
        <div class="careers-wrapper">
            <div class="careers-background">
                <div class="careers-content">
                    <div class="text">
                        <h2>Join Us <span>Now</span></h2>
                        <p>We Are Always Hiring</p>
                    </div>
                    <div class="btn">Apply Now</div>
                </div>
            </div>
        </div>
        <div class="btn mobile">Apply Now</div>

    </div>
</template>

<style scoped lang="scss">
.careers-container {
    margin-top: 11.38rem;
    margin-bottom: 11.38rem;

    padding: $pagePadding;

    >.btn.mobile {
        display: none;

        @media screen and (max-width: 500px) {
            display: block;
            font-size: 12px;
            font-weight: 900;
            align-self: center;
            width: 100%;
            max-width: 100%;
            padding: 19px 0;
            margin-top: 20px;
        }
    }

    >h1 {
        color: $navy;
    }

    @media screen and (max-width: 726px) {
        padding: $pagePaddingRes;

    }

    >.careers-wrapper {
        margin-top: 3.12rem;
        width: 100%;
        height: 40.275rem;

        >.careers-background {
            position: relative;
            width: 100%;
            height: 100%;
            background-image: url('/images/careers.png');
            background-size: cover;
            background-position: center;
        border-radius: 20px;
        overflow: hidden;


            >.careers-content {
                position: absolute;
                top: 0;
                right: 0;
                width: 32%;
                height: 100%;
                background: rgba(44, 50, 51, 0.20);
                backdrop-filter: blur(50px);
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 5rem;

                >.text {
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    >h2 {
                        color: white;

                        >span {
                            color: $blue
                        }
                    }

                    >p {
                        color: white;
                    }
                }

                >.btn {
                    display: flex;
                    width: 75%;
                    height: 4.0625rem;
                    // padding: 1.25rem 9.375rem;
                    justify-content: center;
                    align-items: center;
                    gap: 0.625rem;
                    flex-shrink: 0;

                    @media screen and (max-width: 500px) {
                        display: none;

                    }

                }


            }
        }

    }
}
</style>