import axios from "axios";


const Http = {
    url: (() => {
        switch (import.meta.env.VITE_ENV) {
            case 'development':
                return import.meta.env.VITE_API_URL;
            case 'staging':
                return import.meta.env.VITE_API_STAGING_URL;
            case 'production':
                return import.meta.env.VITE_API_PRODUCTION_URL;
            default:
                throw new Error('Unknown environment');
        }
    })(),
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
                console.log(response);
                return response.data;
            } catch (error: any) {
                console.error(error);
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