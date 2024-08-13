import Http from "@/mixins/Http";
import { ref, type Ref } from "vue";

export type Insurance = {
    id: number;
    title: string;
    description: string;
    path: string;
};

let insurances: Ref<Insurance[]> = ref([])

let insurancesArr:Ref<string[]> = ref([]);
const getInsurances = async () => {
    if (insurances.value.length > 0) return;
    let data = await Http.get('images/insurance');
    insurances.value = data;

    insurancesArr = data.map((insurance: Insurance) => insurance.title);
}

export { insurances, getInsurances, insurancesArr };