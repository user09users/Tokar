import { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import Filters from "../filters/Filters";
import CatalogSecondPage from "../catalogSecondPage/CatalogSecondPage";
import SearchPanel from '../searchPanel/SearchPanel';
import FiltersContext from "context/filters/FiltersContext";
import SearchPanelContext from "context/searchPanel/SearchPanelContext";

const CatalogPage = () => {

     const { inputValue, setInputValue } = useContext(FiltersContext);

     const { searchBtnActive } = useContext(SearchPanelContext);

     return (
          <>
               <Helmet>
                    <meta name="description" content="Page with catalog of houses" />

                    <title>Catalog</title>
               </Helmet>
               <div className="container" >
                    <Link className="backButton" to="/">
                         <div className="backButton-circle">
                              <span className="backButton-icon icon-left-open-big"></span>
                         </div>
                         <div className="backButton-text">Вернуться назад</div>
                    </Link>
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