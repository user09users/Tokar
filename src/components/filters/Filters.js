import { useEffect, useState, useContext } from 'react';
import Spinner from 'components/spinner/Spinner';
import ErrorMessage from 'components/errorMessage/ErrorMessage';
import useTocarService from 'services/services';
import FiltersContext from 'context/filters/FiltersContext';
import SearchPanelContext from 'context/searchPanel/SearchPanelContext';

import FilterBlock from './FilterBlock';
import CategoryBlock from './CategoryBlock';
import SortBlock from './SortBlock';
import AreaSlider from './AreaSlider';
import PriceSlider from './PriceSlider';

import './filters.scss';

const Filters = () => {
    const [filters, setFilters] = useState([]);
    const [sortOptions, setSortOptions] = useState([]);
    const { loading, error, getData } = useTocarService();
    const { onSortSelected } = useContext(FiltersContext);
    const { filtersBtnActive, setFiltersBtnActive } = useContext(SearchPanelContext);

    useEffect(() => {
        getData('filters').then(setFilters);
        getData('sortOptions').then(setSortOptions);
    }, []);

    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;

    return (
        <div className="catalogSecondPage__blocks-block">
            <div className={`filters ${filtersBtnActive ? 'active' : ''}`}>
                <div className="filters__header">
                    <div className="filters__header-name">Фильтры</div>
                    <span className="icon-cancel filters__header-cancel" onClick={() => setFiltersBtnActive(false)} />
                </div>

                <div className="filters__wrapper">
                    <nav>
                        <ul className="filters__blocks">
                            {spinner}
                            {errorMessage}

                            <FilterBlock title="Подкатегория">
                                <CategoryBlock filters={filters} />
                            </FilterBlock>

                            <FilterBlock title="Сортировать по:">
                                <SortBlock
                                    sortOptions={sortOptions}
                                    onSortSelected={onSortSelected}
                                />
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
        </div>
    );
};

export default Filters;