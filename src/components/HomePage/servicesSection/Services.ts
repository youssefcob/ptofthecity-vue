interface Service {
    path: string;
    title: string;
    description: string;
    list: string[];
    LearnMore: string;
}

    const services = [
        {
            path: "./images/servicesCarousel/06df9092a1bfd6cb8df5d3c910637faa.jpg",
            title: "Orthopedic Rehabilitation",
            description:"Orthopedic rehabilitation includes an array of treatments for bone, joint, and muscle problems, such as:",
            list:[
                "Different joint injuries and pain",
                "Pre-operative orthopedic rehabilitation",
                "Post-operative rehabilitation",
                "Musculoskeletal pain and injuries",
                "Chronic pain conditions such as fibromyalgia, chronic back pain, and chronic neck pain"
            ],
            LearnMore:"Learn More"
        },
        {
            path: "./images/servicesCarousel/06df9092a1bfd6cb8df5d3c910637faa.jpg",
            title: "Orthopedic Rehabilitation",
            description:"Orthopedic rehabilitation includes an array of treatments for bone, joint, and muscle problems, such as:",
            list:[
                "Different joint injuries and pain",
                "Pre-operative orthopedic rehabilitation",
                "Post-operative rehabilitation",
                "Musculoskeletal pain and injuries",
                "Chronic pain conditions such as fibromyalgia, chronic back pain, and chronic neck pain"
            ],
            LearnMore:"Learn More"
        },    ] as Service[]
// };

export type { Service };
export { services };