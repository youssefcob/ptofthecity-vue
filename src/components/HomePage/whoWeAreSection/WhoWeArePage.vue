<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { getContent } from '@/mixins/Content';

const formatText = (text: string | undefined): string => {
    if (!text) return '';
    return text.replace(/\n/g, '<br>');
}

const content = ref({
    clinics: 25,
    successful_cases: 6666,
    employees: 67,
    our_story: 'Our story of success started with Dr. Mahmoud`s simple dream of being the best physical therapy clinic in town. It grew over the years into a dream that came true with the establishment of the PT of the city in 2020. We reached 14 locations in a few years, all over New York, with the dedication of our partners and team and the trust of our patients. And to more success, we go.',
    our_technique: 'We offer you a treatment plan specialized for each case to achieve the most effective results. You will be given detailed information about the nature of the case and injury, the treatment plan, tools, and devices you will use, as well as the expected outcome from the treatment. Our main concern is your comfort and wellness. You will be treated with the most recent evidence guidelines and the most advanced tools, techniques, and devices that will help you reach the treatment goal in the most convenient way and in the shortest duration of time.'

});

// console.log('smth');

const getWhoWeAre = async () => {
    content.value = await getContent("Who We Are");
    console.log('smth');
}
onMounted(async () => {
    await getWhoWeAre();
})

const statsCounter = reactive({
    clinics: 0,
    successful_cases: 0,
    employees: 0,
})

const stats = ref<HTMLElement | null>(null);

const startCounting = () => {

    const count = (target: number, property: string) => {
        let currentCount = 0;
        const increment = target / 70; // Adjust the increment for smoother animation
        const interval = setInterval(() => {
            currentCount += increment;
            if (currentCount >= target) {
                currentCount = target;
                clearInterval(interval);
            }
            statsCounter[property as keyof typeof statsCounter] = Math.ceil(currentCount);
        }, 20);
    }

    count(content.value.clinics, 'clinics');
    count(content.value.successful_cases, 'successful_cases');
    count(content.value.employees, 'employees');
};


onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                startCounting();
                observer.unobserve(entry.target);
            }
        });
    });

    if (stats.value) {
        observer.observe(stats.value);
    }
});
</script>

<template>
    <div class="container">

        <h1 class="sectionHeader">{{ $translate('whoWeAre') }}</h1>


        <div class="whoWeAreContainer">
             <div class="stats" ref="stats">

                <div class="box">
                    <div>
                        <h1>{{ statsCounter.clinics }}</h1>
                    </div>
                    <div>
                        <h3 class="header-q">{{ $translate('clinics') }}</h3>
                    </div>
                </div>
                <div class="box">
                    <div>
                        <h1>{{ statsCounter.successful_cases }}</h1>
                    </div>
                    <div>
                        <h3 class="header-q">{{ $translate('satisfied_patients') }}</h3>
                    </div>
                </div>
                <div class="box">
                    <div>
                        <h1>{{ statsCounter.employees }}</h1>
                    </div>
                    <div>
                        <h3 class="header-q">{{ $translate('employees') }}</h3>
                    </div>
                </div>
            </div> 

            <div class="infocontainer">
                <h3 class="header-t">{{ $translate('our_story') }}</h3>
                <div class="wrapper">
                    <div class="info">
                        <div class="infowrapper">
                            <!-- <p class="text-s" v-html="formatText($translate('our_story_text'))"> -->
                            <p class="text-s" v-html="formatText(content.our_story)">

                            </p>
                        </div>
                        <div>
                            <h3 class="header-t">{{ $translate('our_technique') }}</h3>
                            <div class="infowrapper">
                                <p class="text-s">
                                    <!-- {{ $translate('our_technique_text') }} -->
                                    {{ content.our_technique }}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="image-wrapper">

                    </div>
                </div>
                <router-link to="/WhoWeAre" class="btn transparent responsive main">{{ $translate('learn_more')
                    }}</router-link>
            </div>
        </div>
    </div>

</template>

<style scoped lang="scss">
.container {
    @include pagePadding();

    .text-s {}

    .stats {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(calc(33% - 3rem), 1fr));

        gap: 3rem;
        // padding: 3rem 0;
        padding-bottom: 3rem;

        .header-q {
            font-weight: bold;
        }

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

        .header-t {
            margin-bottom: 1.25rem;
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