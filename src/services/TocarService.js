import { useCallback } from "react";
import { useHttp } from "../hooks/http.hook";

const useTocarService = () => {
    const { request, clearError, process, setProcess } = useHttp();

    const postData = useCallback((data) => {
        return request(`http://localhost:5000/requests`, 'POST', data);
    }, [request]);

    const getData = useCallback(async (url) => {
        const res = await request(`http://localhost:5000/${url}`);
        return res;
    }, [request]);

    const getCatalog = useCallback(async (url, start = 0, limit = 4) => {
        const res = await request(`http://localhost:5000/${url}?_start=${start}&_limit=${limit}`);
        return res;
    }, [request]);

    const getHouseInfo = useCallback(async (id) => {
        const res = await request(`http://localhost:5000/catalogCardsInfo?id=${id}`);
        return res[0]; // json-server returns array for query
    }, [request]);

    const getCasesHouseInfo = useCallback(async (id) => {
        const res = await request(`http://localhost:5000/casesCardsInfo?id=${id}`);
        return res[0]; // json-server returns array for query
    }, [request]);


    return {
        process,
        setProcess,
        postData,
        getData,
        getCatalog,
        clearError,
        getHouseInfo,
        getCasesHouseInfo
    };
};

export default useTocarService;
