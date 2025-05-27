import Filters from "../filters/Filters";
import CatalogSecondPage from "../catalogSecondPage/CatalogSecondPage";
import SearchPanel from '../searchPanel/SearchPanel';
import { useContext } from "react";
import FiltersContext from "Context/filters/FiltersContext";
import SearchPanelContext from "Context/searchPanel/SearchPanelContext";

const CatalogPage = () => {

     const { inputValue, setInputValue } = useContext(FiltersContext);

     const { searchBtnActive, setSearchBtnActive } = useContext(SearchPanelContext);

     return (
          <>
               <div className="container" >
                    <div className="page__nav" style={{ marginTop: 30 }}>Главная страница / Жилое </div>
                    <h1 className="catalogSecondPage__title title-fw800">Каталог жилых строений</h1>
                    <div className={`catalogSecondPage__search ${searchBtnActive ? 'active' : ''}`}>
                         <span className="icon-search"></span>
                         <input
                              required
                              type="text"
                              id="search"
                              name="search"
                              placeholder="Поиск по жилым строениям..."
                              value={inputValue}
                              onChange={(e) => setInputValue(e.target.value)}
                         />
                    </div>
               </div>

               <section className="catalogSecondPage">
                    <div className="container">
                         <div className="catalogSecondPage__blocks">
                              <SearchPanel />
                              <Filters />
                              <CatalogSecondPage />
                         </div>
                    </div>
               </section>
          </>
     );
};

export default CatalogPage;