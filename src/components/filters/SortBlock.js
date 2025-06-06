import { useDispatch, useSelector } from "react-redux";
import { changeActiveSort } from "./filtersSlice";

const SortBlock = () => {
    const dispatch = useDispatch();
    const { activeSort, sortOptionsData } = useSelector(state => state.filters);
    const handleClick = (label) => {
        dispatch(changeActiveSort(label))
    };
    return (
        <ul className="filters__filter-items">
            {sortOptionsData.map(opt => (
                <li className="filters__filter-item" key={opt.id}>
                    <span className="icon-right-open-big" />
                    <button
                        className={`sortBtn ${activeSort === opt.label ? 'active' : ''}`}
                        onClick={() => handleClick(opt.label)}
                    >
                        {opt.label}
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default SortBlock;
/* 
import { useDispatch, useSelector } from "react-redux";
import { changeActiveSort } from "./filtersSlice";

const SortBlock = ({ sortOptions }) => {
    const dispatch = useDispatch();
    const activeSort = useSelector(state => state.filters.sort);

    const handleClick = (label) => {
        if (activeSort === label) {
            dispatch(changeActiveSort(null)); // Сброс сортировки
        } else {
            dispatch(changeActiveSort(label)); // Установить сортировку
        }
    };

    return (
        <ul className="filters__filter-items">
            {sortOptions.map(opt => (
                <li className="filters__filter-item" key={opt.id}>
                    <span className="icon-right-open-big" />
                    <button
                        className={`sortBtn ${activeSort === opt.label ? 'active' : ''}`}
                        onClick={() => handleClick(opt.label)}
                    >
                        {opt.label}
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default SortBlock;
 */