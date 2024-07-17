<script setup lang="ts">

</script>


<template>
    <div class="careers-container">
        <h1 class="sectionHeader">Careers</h1>
        <div class="careers-wrapper">
            <div class="careers-background">
                <div class="careers-content">
                    <div class="text">
                        <h2>Join Us <span>Now</span></h2>
                        <p>We Are Always Hiring</p>
                    </div>
                    <router-link to="careers" class="btn">Apply Now</router-link>
                </div>
            </div>
        </div>
        <router-link to="careers" class="btn mobile responsive main">Apply Now</router-link>

    </div>
</template>

<style scoped lang="scss">
.careers-container {

@include pagePadding;

    >.btn.mobile {
        display: none;
        @media screen and (max-width: 500px) {
            display: block;
        }
    }

   

 

    >.careers-wrapper {
        width: 100%;
        height: clamp(22rem, 40vw, 37rem);

        >.careers-background {
            // position: relative;
            width: 100%;
            height: 100%;
            background-image: url('/images/careers.png');
            @include image;
            overflow: hidden;
            @include flex(inherit,flex-end);


            >.careers-content {
               @include backDrop;
               @include flexDirection(column,center);
               padding:1.25rem;
               width:clamp(17rem,30%,35rem);
               gap:1.25rem;
               text-align: center;


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