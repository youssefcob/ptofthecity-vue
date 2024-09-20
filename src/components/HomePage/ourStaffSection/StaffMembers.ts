import Http from "@/mixins/Http";
import { ref, type Ref } from "vue";



export type Staff = {
    id: number;
    title: string;
    first_name: string;
    last_name: string;
    bio: string;
    schedule: string;
    image: string;
};

let staff: Ref<Staff[]> = ref([])

const getStaff = async () => {
    if (staff.value.length > 0) return;
    let data = await Http.get('content/staff');
    // console.log(data);
    staff.value = data;
}

export { staff, getStaff };

// export type { StaffMember };
// export { staffMembers };