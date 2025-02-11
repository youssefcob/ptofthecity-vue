import type { Clinic } from "@/interfaces/content";
import Http from "@/mixins/Http";
import { reactive, ref, type Ref } from "vue";

type HttpClinics = {
    [key: string]: Clinic[];
};



let clinics:HttpClinics = reactive({});
let clinicNames: Ref<string[]> = ref([]);
const getClinics = async () => {
    if(clinicNames.value.length > 0) return;
    let data = await Http.get('clinic/groupByLocation');
    clinics = data;
    console.log(data)
    // console.log(clinics);
    clinicNames.value =  Object.keys(clinics);
    console.log(clinicNames.value);
    

}

let clinic: Ref<Clinic | null> = ref(null);


export { clinics, clinicNames, getClinics};

// export type { StaffMember };
// export { staffMembers };