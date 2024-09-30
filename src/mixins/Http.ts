import axios from "axios";


const Http = {
    // url: (window.location.hostname === 'localhost')?
    //   import.meta.env.VITE_API_URL 
    // : import.meta.env.VITE_API_PRODUCTION_URL,
    url: import.meta.env.VITE_API_PRODUCTION_URL,
    methods: {
        async get(url: string) {
            url = Http.url + url;
            try {
                const response = await axios.get(url);
                return response.data;
            } catch (error: any) {
                throw (error.response.data.message);
            }
        },
        async post(url: string, data: any) {
            url = Http.url + url;

            try {
                const response = await axios.post(url, data);
                return response.data;
            } catch (error: any) {
                throw (error.response.data.message);
            }
        },
        async put(url: string, data: any) {
            url = Http.url + url;

            try {
                const response = await axios.put(url, data);
                return response.data;
            } catch (error: any) {
                console.error(error.response.data.message);
            }
        },
        async delete(url: string) {
            url = Http.url + url;

            try {
                const response = await axios.delete(url);
                return response.data;
            } catch (error: any) {
                console.error(error.response.data.message);
            }
        },
    }

}

export default Http.methods as any;