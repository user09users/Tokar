import { useState, useEffect, useRef, useCallback } from 'react';
import useTocarService from 'services/TocarService';

export const useCatalogData = ({ initialOffset = 0, catalogBaseName, limit }) => {
    const { getCatalog, clearError, process, setProcess } = useTocarService();

    const [dataList, setDataList] = useState([]);
    const [dataEnded, setDataEnded] = useState(false);
    const [newDataLoading, setNewDataLoading] = useState(false);

    const offsetRef = useRef(initialOffset); // вместо useState для offset

    const onRequest = useCallback(() => {
        clearError();
        setNewDataLoading(true);
        getCatalog(catalogBaseName, offsetRef.current, limit)
            .then(newData => {
                setDataList(prevList => [...prevList, ...newData]);
                setDataEnded(newData.length < limit);
                setNewDataLoading(false);
                offsetRef.current += limit;
            })
            .then(setProcess('confirmed'));
    }, [catalogBaseName, getCatalog, clearError, limit]);

    useEffect(() => {
        onRequest();
    }, [onRequest]);

    return {
        dataList,
        dataEnded,
        newDataLoading,
        onRequest,
        process,
        setProcess
    };
};
