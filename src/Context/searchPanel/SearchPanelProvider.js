import { useState } from "react";
import SearchPanelContext from "./SearchPanelContext";

const SearchPanelProvider = ({ children }) => {
    const [filtersBtnActive, setFiltersBtnActive] = useState(false);
    const [searchBtnActive, setSearchBtnActive] = useState(false);

    return (
        <SearchPanelContext.Provider
            value={{
                filtersBtnActive,
                setFiltersBtnActive,
                searchBtnActive,
                setSearchBtnActive
            }}>
            {children}
        </SearchPanelContext.Provider>
    )

}

export default SearchPanelProvider;