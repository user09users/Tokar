
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from "../footer/Footer";
import HeaderMain from "components/header/HeaderMain";
import Spinner from "components/spinner/Spinner";
import Modal from "components/modal/Modal";
import AppContextProvider from "Context/AppContextProvider ";


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
  /*useNavigate */

  return (
    <AppContextProvider>
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
                <Route path="/cases" element={<CasesPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contacts" element={<ContactsPage />} />
                <Route path="/works" element={<WorksPage />} />
                <Route path="*" element={<Page404 />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <Modal />
        </div>
      </Router>
    </AppContextProvider >
  );
}

export default App;


/*  {
      "id": "d8e2",
      "title": "Характеристики",
      "intro": {
        "technologies": "Дом из газоблока и кирпича",
        "constructionTime": "30 дней"
      },
      "description": [
        {
          "label": "Стиль",
          "value": "Финский"
        },
        {
          "label": "Фундамент",
          "value": "Свайно-винтовой"
        },
        {
          "label": "Утепление стен",
          "value": "RockWool, 150 мм"
        },
        {
          "label": "Кровля",
          "value": "GrandLine"
        },
        {
          "label": "Окна",
          "value": "Двойной стеклопакет Rehau"
        },
        {
          "label": "Отделка фасада",
          "value": "Имитация бруса"
        },
        {
          "label": "Наружная покраска",
          "value": "Tikkurila"
        },
        {
          "label": "Чистовая отделка",
          "value": "Имитация бруса"
        },
        {
          "label": "Отделка парной",
          "value": "Осина"
        },
        {
          "label": "Печь",
          "value": "Термофор Витрувия"
        }
      ],
      "features": [
        {
          "icon": "/icons/sizes/length-big.svg",
          "alt": "length",
          "text": "20м²"
        },
        {
          "icon": "/icons/sizes/floors-big.svg",
          "alt": "floors",
          "text": "2 этажа"
        },
        {
          "icon": "/icons/sizes/area-big.svg",
          "alt": "area",
          "text": "4x5м"
        }
      ]
    } */