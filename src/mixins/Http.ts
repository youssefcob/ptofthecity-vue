import axios from "axios";


const Http = {
    url: "http://localhost:8000/api/",
    methods: {
        async get(url: string) {
            url = Http.url + url;
            try {
                const response = await axios.get(url);
                return response.data;
            } catch (error) {
                console.error(error);
            }
        },
        async post(url: string, data: any) {
            url = Http.url + url;

            try {
                const response = await axios.post(url, data);
                return response.data;
            } catch (error) {
                console.error(error);
            }
        },
        async put(url: string, data: any) {
            url = Http.url + url;

            try {
                const response = await axios.put(url, data);
                return response.data;
            } catch (error) {
                console.error(error);
            }
        },
        async delete(url: string) {
            url = Http.url + url;

            try {
                const response = await axios.delete(url);
                return response.data;
            } catch (error) {
                console.error(error);
            }
        },
    }
    
}

export default Http.methods as any;