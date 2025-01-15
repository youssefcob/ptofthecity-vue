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

let servicesInitial: Ref<Service[]> = ref([]);

const unshift = (data: Service[]) => {
    const initialCheckupIndex = data.findIndex(service => service.title === 'Initial Check-up');
    if (initialCheckupIndex !== -1) {
        const [initialCheckupService] = data.splice(initialCheckupIndex, 1);
        data.unshift(initialCheckupService);
    }
    return data;
}

const getServices = async () => {
    if (services.value.length > 0) return;
    let data = await Http.get('services');
    servicesInitial.value = unshift(data);
    data = data.filter((service: Service) => service.title !== 'Initial Check-up');
    services.value = data;
}

export { services, getServices, servicesInitial };