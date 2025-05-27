import { useState, useCallback } from "react";
import FiltersContext from "./FiltersContext";

const FiltersProvider = ({ children }) => {

    const [inputValue, setInputValue] = useState('');
    const [activeCategories, setActiveCategories] = useState([]);
    const [sort, setSort] = useState('');
    const [area, setArea] = useState(10);         // default min area
    const [price, setPrice] = useState(500000);  // default min price

    // Handlers that just update state
    const onFiltersSelected = (filters) => setActiveCategories(filters);
    const onSortSelected = (sort) => setSort(sort);
    const onAreaChange = (area) => setArea(area);
    const onPriceChange = (price) => setPrice(price);

    return (
        <FiltersContext.Provider value={{
            inputValue,
            setInputValue,
            activeCategories,
            sort,
            area,
            setArea,
            price,
            setPrice,
            onFiltersSelected,
            onSortSelected,
            onAreaChange,
            onPriceChange

        }}>
            {children}
        </FiltersContext.Provider>
    )

}

export default FiltersProvider;