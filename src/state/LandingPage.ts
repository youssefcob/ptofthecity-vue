import Http from "@/mixins/Http";
import { reactive, ref, type Ref } from "vue";

// const campaign = reactive([
//     {
//         images: [
//             '/images/careers.png',
//             '/images/contactUs.jpg',
//             '/images/eligibilityFormImage.jpg',
//         ],
//         title: 'PTOf the City',
//         slogans: ['not description', 'smth', 'slogan'],
//         animation: 'fade',
//         slogans_animation: 'transitioningSlogans',
//         animation_interval: 2000,
//         buttonLink: 'service/1',
//         buttonText: 'button',
//     },
//     {
//         images: [
//             '/images/eligibilityFormImage.jpg',
//             '/images/careers.png',
//             '/images/contactUs.jpg',
//         ],
//         title: 'PTOf the City',
//         slogans: ['description', 'not description', 'smth', 'slogan'],
//         animation: 'fade',
//         slogans_animation: 'transitioningSlogans',
//         animation_interval: 2000,
//         buttonLink: 'service/2',
//         buttonText: 'button 2',

//     }
// ])
type Campaign = {
    id: number,
    title: string,
    slogans: string[],
    images: {
        path: string
    }[],
    slogans_animation: string,
    animation_interval: number,
    buttonLink: string,
    buttonText: string,
    animation: string
};

let campaign : Ref<Campaign[]> = ref([]);

const getCampaigns = async () => {
    if(campaign.value.length > 0) return;
    let data = await Http.get('content/campaign');
    campaign.value = data;
    
}
export {campaign, getCampaigns};