import Http from "@/mixins/Http";
import { ref, type Ref } from "vue";

type Image = {
    title:string,
    path:string
}

const images: Ref<Image[]> = ref([]);

const getImages = async () => {
    const res = await Http.get('content/images');
    images.value = res;
    console.log(images.value)
}

export { getImages, images };