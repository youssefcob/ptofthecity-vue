import type { Clinic } from "@/interfaces/content";
import Http from "@/mixins/Http";
import { reactive, ref, type Ref } from "vue";

type HttpClinics = {
    [key: string]: Clinic[];
};


type ClinicPosition = {
    position: {
        lat: string | number;
        lng: string | number;
    };
    name: string;
    address: string;
};

let clinicPositions: Ref<Clinic[]> = ref([]);
let clinics:HttpClinics = reactive({});
let clinicNames: Ref<string[]> = ref([]);

// let clinicPositions: Ref<Clinic[]> = ref([]);
const getClinics = async () => {
    let data = await Http.get('clinic/groupByLocation');
    clinics = data;
    console.log(clinics);
    clinicNames.value =  Object.keys(clinics);
    // console.log(clinicNames.value)

    deconstructClinics();
   


}

const deconstructClinics = () => {
    let temp: Clinic[] = [];
    clinicNames.value.forEach((name) => {
        clinics[name].forEach((clinic) => {
            temp.push(clinic);
        })
    })
    let positions = temp.map((clinic) => {
        return {
            position: {
            lat: Number(clinic.lat),
            lng: Number(clinic.long)
            },
            name: clinic.name,
            address: clinic.street_address,
        }
    })
    // console.log(temp)
    clinicPositions.value = temp;
    
}

let clinic: Ref<Clinic | null> = ref(null);


export { clinics, clinicNames,clinicPositions ,getClinics, deconstructClinics};

export type { ClinicPosition };
// export { staffMembers };