import { useEffect, useState, useContext } from 'react';
import useTocarService from 'services/TocarService';
import FiltersContext from 'context/filters/FiltersContext';
import SearchPanelContext from 'context/searchPanel/SearchPanelContext';

import FilterBlock from './FilterBlock';
import CategoryBlock from './CategoryBlock';
import SortBlock from './SortBlock';
import AreaSlider from './AreaSlider';
import PriceSlider from './PriceSlider';

import setContent from 'utils/setContent';

import './filters.scss';

const Filters = () => {
    const [filters, setFilters] = useState([]);
    const [sortOptions, setSortOptions] = useState([]);
    const { getData, process, setProcess, clearError } = useTocarService();
    const { onSortSelected } = useContext(FiltersContext);
    const { filtersBtnActive, setFiltersBtnActive } = useContext(SearchPanelContext);

    useEffect(() => {
        clearError();
        getData('filters')
            .then(data => {
                setFilters(data);
                return getData('sortOptions');
            })
            .then(data => {
                setSortOptions(data);
                setProcess('confirmed');
            });
    }, []);

    const renderFilters = () => (
        <div className={`filters ${filtersBtnActive ? 'active' : ''}`}>
            <div className="filters__header">
                <div className="filters__header-name">Фильтры</div>
                <span className="icon-cancel filters__header-cancel" onClick={() => setFiltersBtnActive(false)} />
            </div>

            <div className="filters__wrapper">
                <nav>
                    <ul className="filters__blocks">

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
    );

    return (
        <div className="catalogSecondPage__blocks-block">
            {setContent(process, renderFilters)}
        </div>
    );
};

export default Filters;
