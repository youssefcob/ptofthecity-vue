import { reactive } from "vue";
import Http from "./Http";

let content = reactive([]);

export const getContent = async () => {
    if(content.length > 0) return content;
    let data = await Http.get('content')
    content = data;
    console.log(content);
    return data;
}