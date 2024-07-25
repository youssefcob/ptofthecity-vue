import { reactive } from "vue";

interface bar{
    show: boolean,
    message: string,
    color: string

}
const snackbar = {
    bar: reactive({
        show: false,
        message: '',
        color: '#F58E8E'
    }),
    add(snack:bar): void {
        for (let key of Object.keys(snack)) {
            if(!this.bar[key as keyof bar]) return;
            (this.bar as any)[key] = snack[key as keyof bar];

        }
        this.bar.show = true;
        setTimeout(() => {
            this.bar.show = false;
        }, 3000);
    }
}

export default snackbar;