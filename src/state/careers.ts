// import Career from "./Career.vue"

const careers = {
    pt:{
    title:`Physical Therapy`,
    description:`Identify and meet patients’ goals and needs. Offer cost-effective treatments that help improve clients’ motion and mobility. Reduce the need for medications and provide alternatives to surgery. Develop care plans using a variety of treatment techniques. Create fitness- and wellness-oriented programs tailored to patients’ specific needs. Provide quality, personalized, and evidence-based care and proven interventions. Motivate patients during treatment to help them function optimally. Promote clients’ healthy lifestyles by improving strength, flexibility, balance, and coordination. Consult and practice with other health professionals. Evaluate effects, track progress, and communicate results. Document patient care services.
`
    },
    ptAide:{
        title:`Physical Therapy Aide`,
        description:`Responsible for calling patients into the treatment from the waiting room. Maintains clean facilities throughout the day. Provides hot packs and ice packs to the Physical Therapist when asked. Washing and drying laundry, making sure towels are clean and available. Assists patients with therapeutic exercise programs. Works as a team member to make sure patients receive a positive experience. Maintains a positive, professional demeanor at all times. Keeps a safe and orderly work environment. Able to answer phone calls and schedule patients as needed. Other duties as assigned`
    },
    ptAssist:{
        title:`Physical Therapy Assistant`,
        description:`Demonstrate and articulate sound clinical reasoning in treatment planning, implementation, and monitoring of patient progress. Recognize when standard patient protocols or treatment plans need modification to meet individual patient needs and report to the Physical Therapist. Understand the role of therapy in the context of the patient’s age, total needs perspective, and environment. Perform age-appropriate advanced competency skills in practice and concerning individual patients’ problems. Assess the learning needs and capabilities of patients and caregivers regarding age, level of understanding, and emotional status. Consistently report to the Physical Therapist progress/status to allow for an update on goals and a modification of the treatment program. Utilize appropriate methods and materials for effective learning, monitor responses to education, and adapt the program appropriately.`

    },
    ot:{
        title:`Occupational Therapy`,
        description:`Demonstrate and articulate sound clinical reasoning in treatment planning, implementation, and monitoring of patient progress. Recognize when standard patient protocols or treatment plans need modification to meet individual patient needs and report to the Occupational Therapist. Understand the role of therapy in the context of the patient’s age, total needs perspective, and environment. Perform age-appropriate advanced competency skills in practice and concerning individual patients’ problems. Assess the learning needs and capabilities of patients and caregivers regarding age, level of understanding, and emotional status. Consistently report to the Occupational Therapist progress/status to allow for an update of goals and modification of the treatment program. Utilize appropriate methods and materials for effective learning, monitor responses to education, and adapt the program appropriately.`
    },
    otAssist:{
        title:`Occupational Therapy Assistant`,
        description:`Demonstrate and articulate sound clinical reasoning in treatment planning, implementation, and monitoring of patient progress. Recognize when standard patient protocols or treatment plans need modification to meet individual patient needs and report to the Occupational Therapist. Understand the role of therapy in the context of the patient’s age, total needs perspective, and environment. Perform age-appropriate advanced competency skills in practice and concerning individual patients’ problems. Assess the learning needs and capabilities of patients and caregivers regarding age, level of understanding, and emotional status. Consistently report to the Occupational Therapist progress/status to allow for an update of goals and modification of the treatment program. Utilize appropriate methods and materials for effective learning, monitor responses to education, and adapt the program appropriately.`
    }
    

}
interface Career {
    title: string;
    description: string;
}
export type { Career };
export { careers };