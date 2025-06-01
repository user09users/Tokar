
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from "../footer/Footer";
import HeaderMain from "components/header/HeaderMain";
import Spinner from "components/spinner/Spinner";
import Modal from "components/modal/Modal";
import AppContextsProvider from "context/AppContextsProvider";


import "../../sass/libs/modern-normalize.min.css";
import "../../sass/libs/grids-min.css";
import "../../sass/libs/fontello.css";
import "../../sass/libs/grids-responsive-min.css";

const Page404 = lazy(() => import('../pages/404'));
const MainPage = lazy(() => import('../pages/MainPage'));
const CatalogPage = lazy(() => import('../pages/CatalogPage'));
const CasesPage = lazy(() => import('../pages/CasesPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));
const CardPage = lazy(() => import('../pages/CardPage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const WorksPage = lazy(() => import('../pages/WorksPage'));


const App = () => {


  /*
   json-server --watch db.json --port 5000
   */

  return (
    <AppContextsProvider>
      <Router>
        <div className="App">
          <header>
            <HeaderMain />

          </header>
          <main>
            <Suspense fallback={<Spinner />}>
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/catalog" element={<CatalogPage />} />
                <Route path="/catalog/:cardId" element={<CardPage />} />
                <Route path="/cases/:casesCardId" element={<CasesPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contacts" element={<ContactsPage />} />
                <Route path="/works" element={<WorksPage />} />
                <Route path="/404" element={<Page404 />} />
                <Route path="*" element={<Page404 />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <Modal />
        </div>
      </Router>
    </AppContextsProvider >
  );
}

export default App;