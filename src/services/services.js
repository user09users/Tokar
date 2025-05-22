import { useHttp } from "../hooks/http.hook";

const useTocarService = () => {

    const { loading, error, request, clearError } = useHttp();

    const postData = (data) => {
        request(`http://localhost:5000/requests`, 'POST', data);
    }

    const getData = async (url) => {
        const res = await request(`http://localhost:5000/${url}`);

        return res;
    };

    const getCatalog = async (url, start = 0, limit = 4) => {
        const res = await request(`http://localhost:5000/${url}?_start=${start}&_limit=${limit}`);

        return res;
    };

    return {
        postData,
        getData,
        getCatalog,
        loading,
        error,
        clearError
    };
};

export default useTocarService;
