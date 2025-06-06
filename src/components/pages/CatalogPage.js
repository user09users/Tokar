import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Filters from "../filters/Filters";
import Catalog from "../catalog/catalog";
import SearchPanel from '../searchPanel/SearchPanel';
import { changeInputValue } from "components/filters/filtersSlice";

const CatalogPage = () => {

     const dispatch = useDispatch();
     const { searchBtnActive, inputValue } = useSelector(state => state.filters);

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
                    <h1 className="catalog__title title-fw800">Каталог жилых строений</h1>
                    <div className={`catalog__search ${searchBtnActive ? 'active' : ''}`}>
                         <span className="icon-search"></span>
                         <input
                              required
                              type="text"
                              id="search"
                              name="search"
                              placeholder="Поиск по жилым строениям..."
                              value={inputValue}
                              onChange={(e) => dispatch(changeInputValue(e.target.value))}
                         />
                    </div>
               </div>

               <section className="catalog">
                    <div className="container">
                         <div className="catalog__blocks">
                              <SearchPanel />
                              <Filters />
                              <Catalog />
                         </div>
                    </div>
               </section>
          </>
     );
};

export default CatalogPage;