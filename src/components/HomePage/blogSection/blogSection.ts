type BlogInfoDetail = {
    title: string;
    availableTreatment: string[];
    illness: string[];
    symptoms: string[];
}

type BlogInfo = {
    back: BlogInfoDetail;
    shoulder: BlogInfoDetail;
    neck: BlogInfoDetail;
    knees: BlogInfoDetail;
    abdomen: BlogInfoDetail;
    lowerBack: BlogInfoDetail;
    hands: BlogInfoDetail;
    elbows: BlogInfoDetail;
    feet: BlogInfoDetail;
}

const blogInfo: BlogInfo = {
    back: {
        title: 'Back',
        availableTreatment: [
            'Pain Management',
            'Manual Therapy',
            'Stretching and Flexibility Exercises',
            'Strengthening Exercises' ,
            'Posture Training',
            ' Body Mechanics Education',
            ' Activity Modification'
        ],
        illness:[
            'Disc Bulge/Herniation/Deterioration.',' Sciatica',' Osteoarthritis'
        ],
        symptoms:[
            'Pain',
            'Stiffness',
            'Muscle Tension',
            'Limited Range of Motion',
            'Radiating Pain',
            'Numbness or Tingling',
            'Weakness'
        ]
    },
    shoulder: {
        title: 'Shoulders',
        availableTreatment: [
            'Pain Management',
            'Manual Therapy',
            'Stretching and Flexibility Exercises',
            'Strengthening Exercises' ,
            'Posture Training',
            ' Body Mechanics Education',
            ' Activity Modification'
        ],
        illness:[
            'Disc Bulge/Herniation/Deterioration.',' Sciatica',' Osteoarthritis'
        ],
        symptoms:[
            'Pain',
            'Stiffness',
            'Muscle Tension',
            'Limited Range of Motion',
            'Radiating Pain',
            'Numbness or Tingling',
            'Weakness'
        ]
    },
    neck: {
        title: 'Neck',
        availableTreatment: [
            'Pain Management',
            'Manual Therapy',
            'Stretching and Flexibility Exercises',
            'Strengthening Exercises' ,
            'Posture Training',
            ' Body Mechanics Education',
            ' Activity Modification'
        ],
        illness:[
            'Disc Bulge/Herniation/Deterioration.',' Sciatica',' Osteoarthritis'
        ],
        symptoms:[
            'Pain',
            'Stiffness',
            'Muscle Tension',
            'Limited Range of Motion',
            'Radiating Pain',
            'Numbness or Tingling',
            'Weakness'
        ]
    },
    knees: {
        title: 'Knees',
        availableTreatment: [
            'Pain Management',
            'Manual Therapy',
            'Stretching and Flexibility Exercises',
            'Strengthening Exercises' ,
            'Posture Training',
            ' Body Mechanics Education',
            ' Activity Modification'
        ],
        illness:[
            'Disc Bulge/Herniation/Deterioration.',' Sciatica',' Osteoarthritis'
        ],
        symptoms:[
            'Pain',
            'Stiffness',
            'Muscle Tension',
            'Limited Range of Motion',
            'Radiating Pain',
            'Numbness or Tingling',
            'Weakness'
        ]
    },
    abdomen:{
        title: 'Abdomen',
        availableTreatment: [
            'Pain Management',
            'Manual Therapy',
            'Stretching and Flexibility Exercises',
            'Strengthening Exercises' ,
            'Posture Training',
            ' Body Mechanics Education',
            ' Activity Modification'
        ],
        illness:[
            'Disc Bulge/Herniation/Deterioration.',' Sciatica',' Osteoarthritis'
        ],
        symptoms:[
            'Pain',
            'Stiffness',
            'Muscle Tension',
            'Limited Range of Motion',
            'Radiating Pain',
            'Numbness or Tingling',
            'Weakness'
        ]
    },
    lowerBack:{
        title: 'Lower Back',
        availableTreatment: [
            'Pain Management',
            'Manual Therapy',
            'Stretching and Flexibility Exercises',
            'Strengthening Exercises' ,
            'Posture Training',
            ' Body Mechanics Education',
            ' Activity Modification'
        ],
        illness:[
            'Disc Bulge/Herniation/Deterioration.',' Sciatica',' Osteoarthritis'
        ],
        symptoms:[
            'Pain',
            'Stiffness',
            'Muscle Tension',
            'Limited Range of Motion',
            'Radiating Pain',
            'Numbness or Tingling',
            'Weakness'
        ]
    },
    hands:{
        title: 'Hands',
        availableTreatment: [
            'Pain Management',
            'Manual Therapy',
            'Stretching and Flexibility Exercises',
            'Strengthening Exercises' ,
            'Posture Training',
            ' Body Mechanics Education',
            ' Activity Modification'
        ],
        illness:[
            'Disc Bulge/Herniation/Deterioration.',' Sciatica',' Osteoarthritis'
        ],
        symptoms:[
            'Pain',
            'Stiffness',
            'Muscle Tension',
            'Limited Range of Motion',
            'Radiating Pain',
            'Numbness or Tingling',
            'Weakness'
        ]
    },
    elbows:{
        title: 'Elbows',
        availableTreatment: [
            'Pain Management',
            'Manual Therapy',
            'Stretching and Flexibility Exercises',
            'Strengthening Exercises' ,
            'Posture Training',
            ' Body Mechanics Education',
            ' Activity Modification'
        ],
        illness:[
            'Disc Bulge/Herniation/Deterioration.',' Sciatica',' Osteoarthritis'
        ],
        symptoms:[
            'Pain',
            'Stiffness',
            'Muscle Tension',
            'Limited Range of Motion',
            'Radiating Pain',
            'Numbness or Tingling',
            'Weakness'
        ]
    },
    feet:{
        title: 'Feet',
        availableTreatment: [
            'Pain Management',
            'Manual Therapy',
            'Stretching and Flexibility Exercises',
            'Strengthening Exercises' ,
            'Posture Training',
            ' Body Mechanics Education',
            ' Activity Modification'
        ],
        illness:[
            'Disc Bulge/Herniation/Deterioration.',' Sciatica',' Osteoarthritis'
        ],
        symptoms:[
            'Pain',
            'Stiffness',
            'Muscle Tension',
            'Limited Range of Motion',
            'Radiating Pain',
            'Numbness or Tingling',
            'Weakness'
        ]
    }

}

export { blogInfo };