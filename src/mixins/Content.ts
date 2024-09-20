import { reactive } from "vue";
import Http from "./Http";

type Content = {
    title: string,
    body: string
}

let content:Content[] = reactive([]);

export const getContent = async (title:string) => {
    if(content.length > 0) return content.filter((item: any) => item.title === title)[0].body || [];
    let data = await Http.get('content')
    content = data;
    console.log(content)
    return data.filter((item: any) => item.title === title)[0].body || [];
}