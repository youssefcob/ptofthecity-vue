<script setup lang="ts">
const formatText = (text: string | undefined): string => {
    if (!text) return '';
    return text.replace(/\n/g, '<br>');
}
</script>

<template>
    <div class="container">

        <h1 class="sectionHeader">{{$translate('whoWeAre')}}</h1>


        <div class="whoWeAreContainer">
            <div class="stats">

                <div class="box">
                    <div>
                        <h1>22</h1>
                    </div>
                    <div>
                        <h3 class="header-q">{{$translate('clinics')}}</h3>
                    </div>
                </div>
                <div class="box">
                    <div>
                        <h1>6660</h1>
                    </div>
                    <div>
                        <h3 class="header-q">{{$translate('successful_cases')}}</h3>
                    </div>
                </div>
                <div class="box">
                    <div>
                        <h1>68</h1>
                    </div>
                    <div>
                        <h3 class="header-q">{{$translate('employees')}}</h3>
                    </div>
                </div>
            </div>

            <div class="infocontainer">
                <h3 class="header-t">{{$translate('our_story')}}</h3>
                <div class="wrapper">
                    <div class="info">
                        <div class="infowrapper">
                            <p class="text-s" v-html="formatText($translate('our_story_text'))">
                            </p>
                        </div>
                        <div>
                            <h3 class="header-t" >{{$translate('our_technique')}}</h3>
                            <div class="infowrapper">
                                <p class="text-s">
                                    {{ $translate('our_technique_text') }}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="image-wrapper">

                    </div>
                </div>
                <router-link to="/whoWeAre" class="btn transparent responsive main">{{$translate('learn_more')}}</router-link>
            </div>
        </div>
    </div>

</template>

<style scoped lang="scss">
.container {
    @include pagePadding();


    .stats {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(calc(33% - 3rem), 1fr));

        gap: 3rem;
        // padding: 3rem 0;
        padding-bottom: 3rem;

        @media screen and (max-width: 770px) {
            display: flex;
            flex-direction: column;
            gap: 7px
        }

        >.box {
            display: flex;
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
                    }

                    &:last-child {
                        justify-content: flex-start;

                    }
                }

            }
        }

    }

    .infocontainer {
        display: flex;
        flex-direction: column;
        width: 100%;
        .header-t{
            margin-bottom:1.25rem;
        }
      




        .wrapper {
            display: flex;
            gap: 2rem;


            .info {
                display: flex;
                flex-direction: column;
                gap: 2.5rem;
                // width: 69%;

                .infowrapper {
                    background-color: $white;
                    padding: 2.25rem;
                    border-radius: $border-radius;

                }

            }

            .image-wrapper {
                @media screen and (max-width: 768px) {
                    display: none;
                }

                background-image: url("/images/whoweare.jpg");
                width:100%;
                @include image(shadow);

            }
        }


    }
}
</style>