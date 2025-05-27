import { useState } from "react";

const FilterBlock = ({ title, children }) => {
    const [active, setActive] = useState(false);

    return (
        <li className={`filters__filter ${active ? 'active' : ''}`}>
            <div
                className="filters__filter-header"
                onClick={() => setActive(prev => !prev)}
            >
                <div>{title}</div>
                <span className="icon-down-open filters__filter-corner" />
            </div>
            {active && (
                <div className="filters__filter-content">
                    {children}
                </div>
            )}
        </li>
    );
};

export default FilterBlock;
