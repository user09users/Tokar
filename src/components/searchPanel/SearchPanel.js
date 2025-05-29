
import './searchPanel.scss';
import { useContext } from 'react';
import SearchPanelContext from 'context/searchPanel/SearchPanelContext';

const SearchPanel = () => {

    const { setFiltersBtnActive, setSearchBtnActive } = useContext(SearchPanelContext);

    return (
        <section className="searchPanel">
            <div className="searchPanel__wrapper">
                <button
                    className="searchPanel__wrapper-item"
                    onClick={() => setFiltersBtnActive(true)}
                ><span
                    className="icon-filter"></span></button>

                <button
                    className="searchPanel__wrapper-item 
                            searchPanel__wrapper-item-search"
                    onClick={() => setSearchBtnActive(prev => !prev)}
                ><span
                    className="icon-search"></span></button>
            </div>
        </section>
    )
}

export default SearchPanel;