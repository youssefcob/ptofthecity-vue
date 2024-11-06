type BlogInfoDetail = {
    title: string;
    availableTreatment: string[];
    illness: { head: string, content: string }[];
    symptoms: { head: string, content: string }[];
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
            'Strengthening Exercises',
            'Posture Training',
            'Body Mechanics Education',
            'Activity Modification'
        ],
        illness: [
                  {
                head: 'Disc Bulge/Herniation/Deterioration.',
                content: 'Disc bulge is a condition in which the disc is pushed out of its normal position and is bulging into the spinal canal.'
            },
            {
                head: 'Sciatica',
                content: 'Disc bulge is a condition in which the disc is pushed out of its normal position and is bulging into the spinal canal.'
            },
            {
                head: 'Osteoarthritis',
                content: 'Disc bulge is a condition in which the disc is pushed out of its normal position and is bulging into the spinal canal.'
            },
        ],
        symptoms: [
            {
                head: 'Pain',
                content: 'In Back diseases you might experience pain that radiates to different parts including neck, middle back, and lower back.'
            },
            {
                head: 'Stiffness',
                content: 'Difficulty in back movement and standing up from a seated position may be experienced in back problems.'
            },
            {
                head: 'Muscle Tension',
                content: 'Back problems cause muscle tension that occurs as muscle knots with trigger points that causes aggravated pain.'
            },
            {
                head: 'Limited Range of Motion',
                content: 'The inability to move your body parts within its normal range of motion'
            },
            {
                head: 'Radiating Pain',
                content: 'Back pain is linked to other body parts, as the back problems will cause pain to radiate to other body parts that are linked to the back'
            },
            {
                head: 'Numbness or Tingling',
                content: 'Back problems cause numbness in your feet and legs'
            },
            {
                head: 'Weakness',
                content: 'Refers to the loss of back muscle strength.'
            }
        ]
    },
    shoulder: {
        title: 'Shoulders',
        availableTreatment: [
            'Pain Management',
            'Manual Therapy',
            'Stretching and Flexibility Exercises',
            'Strengthening Exercises',
            'Posture Training',
            'Body Mechanics Education',
            'Activity Modification'
        ],
        illness: [
                  {
                head: 'Disc Bulge/Herniation/Deterioration.',
                content: 'Disc bulge is a condition in which the disc is pushed out of its normal position and is bulging into the spinal canal.'
            },
            {
                head: 'Sciatica',
                content: 'Disc bulge is a condition in which the disc is pushed out of its normal position and is bulging into the spinal canal.'
            },
            {
                head: 'Osteoarthritis',
                content: 'Disc bulge is a condition in which the disc is pushed out of its normal position and is bulging into the spinal canal.'
            },
        ],
        symptoms: [
            {
                head: 'Pain',
                content: 'In Back diseases you might experience pain that radiates to different parts including neck, middle back, and lower back.'
            },
            {
                head: 'Stiffness',
                content: 'Difficulty in back movement and standing up from a seated position may be experienced in back problems.'
            },
            {
                head: 'Muscle Tension',
                content: 'Back problems cause muscle tension that occurs as muscle knots with trigger points that causes aggravated pain.'
            },
            {
                head: 'Limited Range of Motion',
                content: 'The inability to move your body parts within its normal range of motion'
            },
            {
                head: 'Radiating Pain',
                content: 'Back pain is linked to other body parts, as the back problems will cause pain to radiate to other body parts that are linked to the back'
            },
            {
                head: 'Numbness or Tingling',
                content: 'Back problems cause numbness in your feet and legs'
            },
            {
                head: 'Weakness',
                content: 'Refers to the loss of back muscle strength.'
            }
        ]
    },
    neck: {
        title: 'Neck',
        availableTreatment: [
            'Pain Management',
            'Manual Therapy',
            'Stretching and Flexibility Exercises',
            'Strengthening Exercises',
            'Posture Training',
            'Body Mechanics Education',
            'Activity Modification'
        ],
        illness: [
                  {
                head: 'Disc Bulge/Herniation/Deterioration.',
                content: 'Disc bulge is a condition in which the disc is pushed out of its normal position and is bulging into the spinal canal.'
            },
            {
                head: 'Sciatica',
                content: 'Disc bulge is a condition in which the disc is pushed out of its normal position and is bulging into the spinal canal.'
            },
            {
                head: 'Osteoarthritis',
                content: 'Disc bulge is a condition in which the disc is pushed out of its normal position and is bulging into the spinal canal.'
            },
        ],
        symptoms: [
            {
                head: 'Pain',
                content: 'In Back diseases you might experience pain that radiates to different parts including neck, middle back, and lower back.'
            },
            {
                head: 'Stiffness',
                content: 'Difficulty in back movement and standing up from a seated position may be experienced in back problems.'
            },
            {
                head: 'Muscle Tension',
                content: 'Back problems cause muscle tension that occurs as muscle knots with trigger points that causes aggravated pain.'
            },
            {
                head: 'Limited Range of Motion',
                content: 'The inability to move your body parts within its normal range of motion'
            },
            {
                head: 'Radiating Pain',
                content: 'Back pain is linked to other body parts, as the back problems will cause pain to radiate to other body parts that are linked to the back'
            },
            {
                head: 'Numbness or Tingling',
                content: 'Back problems cause numbness in your feet and legs'
            },
            {
                head: 'Weakness',
                content: 'Refers to the loss of back muscle strength.'
            }
        ]
    },
    knees: {
        title: 'Knees',
        availableTreatment: [
            'Pain Management',
            'Manual Therapy',
            'Stretching and Flexibility Exercises',
            'Strengthening Exercises',
            'Posture Training',
            'Body Mechanics Education',
            'Activity Modification'
        ],
        illness: [
                  {
                head: 'Disc Bulge/Herniation/Deterioration.',
                content: 'Disc bulge is a condition in which the disc is pushed out of its normal position and is bulging into the spinal canal.'
            },
            {
                head: 'Sciatica',
                content: 'Disc bulge is a condition in which the disc is pushed out of its normal position and is bulging into the spinal canal.'
            },
            {
                head: 'Osteoarthritis',
                content: 'Disc bulge is a condition in which the disc is pushed out of its normal position and is bulging into the spinal canal.'
            },
        ],
        symptoms: [
            {
                head: 'Pain',
                content: 'In Back diseases you might experience pain that radiates to different parts including neck, middle back, and lower back.'
            },
            {
                head: 'Stiffness',
                content: 'Difficulty in back movement and standing up from a seated position may be experienced in back problems.'
            },
            {
                head: 'Muscle Tension',
                content: 'Back problems cause muscle tension that occurs as muscle knots with trigger points that causes aggravated pain.'
            },
            {
                head: 'Limited Range of Motion',
                content: 'The inability to move your body parts within its normal range of motion'
            },
            {
                head: 'Radiating Pain',
                content: 'Back pain is linked to other body parts, as the back problems will cause pain to radiate to other body parts that are linked to the back'
            },
            {
                head: 'Numbness or Tingling',
                content: 'Back problems cause numbness in your feet and legs'
            },
            {
                head: 'Weakness',
                content: 'Refers to the loss of back muscle strength.'
            }
        ]
    },
    abdomen: {
        title: 'Abdomen',
        availableTreatment: [
            'Pain Management',
            'Manual Therapy',
            'Stretching and Flexibility Exercises',
            'Strengthening Exercises',
            'Posture Training',
            'Body Mechanics Education',
            'Activity Modification'
        ],
        illness: [
                  {
                head: 'Disc Bulge/Herniation/Deterioration.',
                content: 'Disc bulge is a condition in which the disc is pushed out of its normal position and is bulging into the spinal canal.'
            },
            {
                head: 'Sciatica',
                content: 'Disc bulge is a condition in which the disc is pushed out of its normal position and is bulging into the spinal canal.'
            },
            {
                head: 'Osteoarthritis',
                content: 'Disc bulge is a condition in which the disc is pushed out of its normal position and is bulging into the spinal canal.'
            },
        ],
        symptoms: [
            {
                head: 'Pain',
                content: 'In Back diseases you might experience pain that radiates to different parts including neck, middle back, and lower back.'
            },
            {
                head: 'Stiffness',
                content: 'Difficulty in back movement and standing up from a seated position may be experienced in back problems.'
            },
            {
                head: 'Muscle Tension',
                content: 'Back problems cause muscle tension that occurs as muscle knots with trigger points that causes aggravated pain.'
            },
            {
                head: 'Limited Range of Motion',
                content: 'The inability to move your body parts within its normal range of motion'
            },
            {
                head: 'Radiating Pain',
                content: 'Back pain is linked to other body parts, as the back problems will cause pain to radiate to other body parts that are linked to the back'
            },
            {
                head: 'Numbness or Tingling',
                content: 'Back problems cause numbness in your feet and legs'
            },
            {
                head: 'Weakness',
                content: 'Refers to the loss of back muscle strength.'
            }
        ]
    },
    lowerBack: {
        title: 'Lower Back',
        availableTreatment: [
            'Pain Management',
            'Manual Therapy',
            'Stretching and Flexibility Exercises',
            'Strengthening Exercises',
            'Posture Training',
            'Body Mechanics Education',
            'Activity Modification'
        ],
        illness: [
                  {
                head: 'Disc Bulge/Herniation/Deterioration.',
                content: 'Disc bulge is a condition in which the disc is pushed out of its normal position and is bulging into the spinal canal.'
            },
            {
                head: 'Sciatica',
                content: 'Disc bulge is a condition in which the disc is pushed out of its normal position and is bulging into the spinal canal.'
            },
            {
                head: 'Osteoarthritis',
                content: 'Disc bulge is a condition in which the disc is pushed out of its normal position and is bulging into the spinal canal.'
            },
        ],
        symptoms: [
            {
                head: 'Pain',
                content: 'In Back diseases you might experience pain that radiates to different parts including neck, middle back, and lower back.'
            },
            {
                head: 'Stiffness',
                content: 'Difficulty in back movement and standing up from a seated position may be experienced in back problems.'
            },
            {
                head: 'Muscle Tension',
                content: 'Back problems cause muscle tension that occurs as muscle knots with trigger points that causes aggravated pain.'
            },
            {
                head: 'Limited Range of Motion',
                content: 'The inability to move your body parts within its normal range of motion'
            },
            {
                head: 'Radiating Pain',
                content: 'Back pain is linked to other body parts, as the back problems will cause pain to radiate to other body parts that are linked to the back'
            },
            {
                head: 'Numbness or Tingling',
                content: 'Back problems cause numbness in your feet and legs'
            },
            {
                head: 'Weakness',
                content: 'Refers to the loss of back muscle strength.'
            }
        ]
    },
    hands: {
        title: 'Hands',
        availableTreatment: [
            'Pain Management',
            'Manual Therapy',
            'Stretching and Flexibility Exercises',
            'Strengthening Exercises',
            'Posture Training',
            'Body Mechanics Education',
            'Activity Modification'
        ],
        illness: [
                  {
                head: 'Disc Bulge/Herniation/Deterioration.',
                content: 'Disc bulge is a condition in which the disc is pushed out of its normal position and is bulging into the spinal canal.'
            },
            {
                head: 'Sciatica',
                content: 'Disc bulge is a condition in which the disc is pushed out of its normal position and is bulging into the spinal canal.'
            },
            {
                head: 'Osteoarthritis',
                content: 'Disc bulge is a condition in which the disc is pushed out of its normal position and is bulging into the spinal canal.'
            },
        ],
        symptoms: [
            {
                head: 'Pain',
                content: 'In Back diseases you might experience pain that radiates to different parts including neck, middle back, and lower back.'
            },
            {
                head: 'Stiffness',
                content: 'Difficulty in back movement and standing up from a seated position may be experienced in back problems.'
            },
            {
                head: 'Muscle Tension',
                content: 'Back problems cause muscle tension that occurs as muscle knots with trigger points that causes aggravated pain.'
            },
            {
                head: 'Limited Range of Motion',
                content: 'The inability to move your body parts within its normal range of motion'
            },
            {
                head: 'Radiating Pain',
                content: 'Back pain is linked to other body parts, as the back problems will cause pain to radiate to other body parts that are linked to the back'
            },
            {
                head: 'Numbness or Tingling',
                content: 'Back problems cause numbness in your feet and legs'
            },
            {
                head: 'Weakness',
                content: 'Refers to the loss of back muscle strength.'
            }
        ]
    },
    elbows: {
        title: 'Elbows',
        availableTreatment: [
            'Pain Management',
            'Manual Therapy',
            'Stretching and Flexibility Exercises',
            'Strengthening Exercises',
            'Posture Training',
            'Body Mechanics Education',
            'Activity Modification'
        ],
        illness: [
                  {
                head: 'Disc Bulge/Herniation/Deterioration.',
                content: 'Disc bulge is a condition in which the disc is pushed out of its normal position and is bulging into the spinal canal.'
            },
            {
                head: 'Sciatica',
                content: 'Disc bulge is a condition in which the disc is pushed out of its normal position and is bulging into the spinal canal.'
            },
            {
                head: 'Osteoarthritis',
                content: 'Disc bulge is a condition in which the disc is pushed out of its normal position and is bulging into the spinal canal.'
            },
        ],
        symptoms: [
            {
                head: 'Pain',
                content: 'In Back diseases you might experience pain that radiates to different parts including neck, middle back, and lower back.'
            },
            {
                head: 'Stiffness',
                content: 'Difficulty in back movement and standing up from a seated position may be experienced in back problems.'
            },
            {
                head: 'Muscle Tension',
                content: 'Back problems cause muscle tension that occurs as muscle knots with trigger points that causes aggravated pain.'
            },
            {
                head: 'Limited Range of Motion',
                content: 'The inability to move your body parts within its normal range of motion'
            },
            {
                head: 'Radiating Pain',
                content: 'Back pain is linked to other body parts, as the back problems will cause pain to radiate to other body parts that are linked to the back'
            },
            {
                head: 'Numbness or Tingling',
                content: 'Back problems cause numbness in your feet and legs'
            },
            {
                head: 'Weakness',
                content: 'Refers to the loss of back muscle strength.'
            }
        ]
    },
    feet: {
        title: 'Feet',
        availableTreatment: [
            'Pain Management',
            'Manual Therapy',
            'Stretching and Flexibility Exercises',
            'Strengthening Exercises',
            'Posture Training',
            'Body Mechanics Education',
            'Activity Modification'
        ],
        illness: [
            {
                head: 'Disc Bulge/Herniation/Deterioration.',
                content: 'Disc bulge is a condition in which the disc is pushed out of its normal position and is bulging into the spinal canal.'
            },
            {
                head: 'Sciatica',
                content: 'Disc bulge is a condition in which the disc is pushed out of its normal position and is bulging into the spinal canal.'
            },
            {
                head: 'Osteoarthritis',
                content: 'Disc bulge is a condition in which the disc is pushed out of its normal position and is bulging into the spinal canal.'
            },
        ],
        symptoms: [
            {
                head: 'Pain',
                content: 'In Back diseases you might experience pain that radiates to different parts including neck, middle back, and lower back.'
            },
            {
                head: 'Stiffness',
                content: 'Difficulty in back movement and standing up from a seated position may be experienced in back problems.'
            },
            {
                head: 'Muscle Tension',
                content: 'Back problems cause muscle tension that occurs as muscle knots with trigger points that causes aggravated pain.'
            },
            {
                head: 'Limited Range of Motion',
                content: 'The inability to move your body parts within its normal range of motion'
            },
            {
                head: 'Radiating Pain',
                content: 'Back pain is linked to other body parts, as the back problems will cause pain to radiate to other body parts that are linked to the back'
            },
            {
                head: 'Numbness or Tingling',
                content: 'Back problems cause numbness in your feet and legs'
            },
            {
                head: 'Weakness',
                content: 'Refers to the loss of back muscle strength.'
            }
        ]
    }
}

export { blogInfo, type BlogInfoDetail };