interface StaffMember { 
    id:string;
    image: string;
    name: string;
}

const staffMembers = [
    {
        id: '1',
        name: "Dr. John Doe",
        image: "./images/staff/doctor.png"
    },
    {
        id: '2',

        name: "Dr. Jane Doe",
        image: "./images/staff/doctor.png"
    },
    {
        id: '3',

        name: "Dr. John Doe",
        image: "./images/staff/doctor.png"
    },
    {
        id: '4',

        name: "Dr. Jane Doe",
        image: "./images/staff/doctor.png"
    },
    {
        id: '5',

        name: "Dr. John Doe",
        image: "./images/staff/doctor.png"
    },
    {
        id: '6',

        name: "Dr. Jane Doe",
        image: "./images/staff/doctor.png"
    },
    {
        id: '7',

        name: "Dr. John Doe",
        image: "./images/staff/doctor.png"
    },
   
] as StaffMember[];

export type { StaffMember };
export { staffMembers };
