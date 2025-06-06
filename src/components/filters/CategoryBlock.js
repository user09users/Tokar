import { changeActiveFilters } from "./filtersSlice";
import { useDispatch, useSelector } from "react-redux";

const CategoryBlock = () => {

    const dispatch = useDispatch();
    const filters = useSelector(state => state.filters.filterItemsData);
    const activeFilters = useSelector(state => state.filters.activeFilters);
    const handleFilterClick = (label) => {
        dispatch(changeActiveFilters(label));
    };
    return (
        <>
            {filters.map(group => (
                <div className="filters__filter-content" key={group.filterName}>
                    <div className="filters__filter-name">{group.filterName}</div>
                    <ul className="filters__filter-items">
                        {group.items.map(({ id, label }) => {
                            const filter = label.toLowerCase();
                            const isActive = activeFilters.includes(filter);

                            return (
                                <li className="filters__filter-item" key={id}>
                                    <span className="icon-right-open-big" />
                                    <button
                                        className={`filtersCategoryButton ${isActive ? 'active' : ''}`}
                                        onClick={() => handleFilterClick(label)}
                                    >
                                        {label}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            ))}
        </>
    );
};

export default CategoryBlock;