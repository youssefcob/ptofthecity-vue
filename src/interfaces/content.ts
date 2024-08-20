export type Media = {
    id: number,
    clinic_id: number,
    title: null | string,
    media_type: "image" | "video" | "audio",
    path: string,
}

export type Clinic = {
    // [key: string]:[
        // {
            id:number,
            name:string,
            street_address:string,
            city:string,
            state:string,
            zip_code:string,
            long:string,
            lat:string,
            summary:string,
            phone:string,
            opening_time:string,
            closing_time:string,
            capacity:number,
            rating:number|string|null,
            number_of_ratings:number|string|null,
            days_off:String[]|null,
            holidays:String[]|null,
            media:Media[],
        // }
    // ]
}
