import Http from "@/mixins/Http";
import { ref, type Ref } from "vue";
import type { Clinic } from "@/interfaces/content";

interface Lang {
    en: string;
    ar: string;
    es: string;
}
interface ListLang {
    en: string[];
    ar: string[];
    es: string[];
}
export interface Service {
    id: string;
    path: string;
    title: string;
    description: Lang;
    listHeader: Lang;
    list: ListLang;
    clinics: Clinic[];
    
}

let services: Ref<Service[]> = ref([]);

const getServices = async () => {
    if (services.value.length > 0) return;
    let data = await Http.get('services');
    services.value = data;
    console.log(data);
}

export { services, getServices };