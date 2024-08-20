import Http from "@/mixins/Http";
import { ref, type Ref } from "vue";

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
    title: Lang;
    description: Lang;
    listHeader: Lang;
    list: ListLang;
    
}

let services: Ref<Service[]> = ref([]);

const getServices = async () => {
    if (services.value.length > 0) return;
    let data = await Http.get('services');
    services.value = data;
}

export { services, getServices };