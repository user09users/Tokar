import { useDispatch, useSelector } from "react-redux";
import { useGetFiltersDataQuery } from 'api/apiSlice';
import QueryWrapper from "utils/QueryWrapper";

import FilterBlock from './FilterBlock';
import CategoryBlock from './CategoryBlock';
import SortBlock from './SortBlock';
import AreaSlider from './AreaSlider';
import PriceSlider from './PriceSlider';
import {
    uploadFilterItemsData,
    uploadSortOptionsData,
    toggleFiltersOpen
} from "./filtersSlice";

import './filters.scss';
import { useEffect } from "react";

const Filters = () => {

    const dispatch = useDispatch();
    const { filterMenuBtn } = useSelector(state => state.filters);

    const {
        data: filtersData = [],
        isFetching,
        isLoading,
        isError
    } = useGetFiltersDataQuery();

    const filters = filtersData.filters || [];
    const sortOptions = filtersData.sortOptions || [];

    useEffect(() => {
        if (filters.length > 0 && sortOptions.length > 0) {
            dispatch(uploadFilterItemsData(filters));
            dispatch(uploadSortOptionsData(sortOptions));
        }
    }, [filters, sortOptions]);

    const renderFilters = () => (
        <div className={`filters ${filterMenuBtn ? 'active' : ''}`}>
            <div className="filters__header">
                <div className="filters__header-name">Фильтры</div>
                <span className="icon-cancel filters__header-cancel" onClick={() => dispatch(toggleFiltersOpen(false))} />
            </div>

            <div className="filters__wrapper">
                <nav>
                    <ul className="filters__blocks">

                        <FilterBlock title="Подкатегория">
                            <CategoryBlock />
                        </FilterBlock>

                        <FilterBlock title="Сортировать по:">
                            <SortBlock />
                        </FilterBlock>

                        <FilterBlock title="Площадь (м²):">
                            <AreaSlider />
                        </FilterBlock>

                        <FilterBlock title="Цена (грн):">
                            <PriceSlider />
                        </FilterBlock>
                    </ul>
                </nav>
            </div>
        </div>
    );

    return (
        <div className="catalogSecondPage__blocks-block">
            <QueryWrapper
                isLoading={isLoading}
                isFetching={isFetching}
                isError={isError}
                data={filtersData}>

                {renderFilters()}
            </QueryWrapper>
        </div>
    );
};

export default Filters;