import Http from "@/mixins/Http";
import { reactive, ref, type Ref } from "vue";


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