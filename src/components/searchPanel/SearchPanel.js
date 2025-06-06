import './searchPanel.scss';
import { useDispatch } from 'react-redux';
import { toggleSearchBtnActive, toggleFiltersOpen } from 'components/filters/filtersSlice';
const SearchPanel = () => {

    const dispatch = useDispatch();

    const handleSearchBtn = () => {
        dispatch(toggleSearchBtnActive())   // ✅ call the action creator
    }

    const handleFiltersBtn = () => {
        dispatch(toggleFiltersOpen())       // ✅ call the action creator
    }
    return (
        <section className="searchPanel">
            <div className="searchPanel__wrapper">
                <button
                    className="searchPanel__wrapper-item"
                    onClick={() => handleFiltersBtn()}
                ><span
                    className="icon-filter"></span></button>

                <button
                    className="searchPanel__wrapper-item 
                            searchPanel__wrapper-item-search"
                    onClick={() => handleSearchBtn()}
                ><span
                    className="icon-search"></span></button>
            </div>
        </section>
    )
}

export default SearchPanel;