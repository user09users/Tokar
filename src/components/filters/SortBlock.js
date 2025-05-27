import { useState } from "react";

const SortBlock = ({ sortOptions, onSortSelected }) => {
    const [activeLabel, setActiveLabel] = useState(null);

    const handleClick = (label) => {
        if (activeLabel === label) {
            setActiveLabel(null);           // Remove active
            onSortSelected(null);           // Clear filter
        } else {
            setActiveLabel(label);          // Set new active
            onSortSelected(label);          // Apply filter
        }
    };

    return (
        <ul className="filters__filter-items">
            {sortOptions.map(opt => (
                <li className="filters__filter-item" key={opt.id}>
                    <span className="icon-right-open-big" />
                    <button
                        className={`sortBtn ${activeLabel === opt.label ? 'active' : ''}`}
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
