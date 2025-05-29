import { useState, useEffect } from "react";
import { useContext } from "react";
import FiltersContext from "context/filters/FiltersContext";

const CategoryBlock = ({ filters }) => {

    const { onFiltersSelected } = useContext(FiltersContext);

    const [activeCategories, setActiveCategories] = useState([]);

    const handleCategoryClick = (label) => {
        const category = label.toLowerCase().trim();
        setActiveCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    // Call parent callback only when `activeCategories` changes
    useEffect(() => {
        onFiltersSelected(activeCategories);
    }, [activeCategories, onFiltersSelected]);

    return (
        <>
            {filters.map(group => (
                <div className="filters__filter-content" key={group.filterName}>
                    <div className="filters__filter-name">{group.filterName}</div>
                    <ul className="filters__filter-items">
                        {group.items.map(item => {
                            const category = item.label.toLowerCase();
                            const isActive = activeCategories.includes(category);

                            return (
                                <li className="filters__filter-item" key={item.id}>
                                    <span className="icon-right-open-big" />
                                    <button
                                        className={`filtersCategoryButton ${isActive ? 'active' : ''}`}
                                        onClick={() => handleCategoryClick(item.label)}
                                    >
                                        {item.label}
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
