
/* import './App.css'; */
import "purecss/build/grids-min.css";
import "purecss/build/grids-responsive-min.css";

import useTocarServices from "../../services/services";

import accordion from "../../utils/accordion";
import { sliders } from "../../utils/slider";

import SliderRange from "../filters/SliderRange";
import CardPageSlider from "../cardPageSlider/CardPageSlider";
import Modal from "../modal/Modal";
import CatalogSecondPage from "components/catalogSecondPage/CatalogSecondPage";
import Works from "../works/Works";
import Footer from "../footer/Footer";
import LastStates from "../lastStates/LastStates";
import Reason from "../reason/Reason";
import Materials from "../materials/Materials";
import Ceo from "../ceo/CeoSlider";
import AboutStats from "../aboutStats/AboutStats";
import Variations from "../variations/Variations";
import CatalogFirstPage from "../catalogFirstPage/CatalogFirstPage";
import Rrocesses from "../processes/Processes";
import Characteristics from "../characteristics/Characteristics";
import FactoryPhotos from "../factory/Factory";
import Menu from "../menu/Menu";
import Social from "../social/Social";
import Contacts from "../contacts/Contacts";
import Details from "../details/Details";
import ItemDescr from "../itemDescr/ItemDescr";
import CasesPhotos from "../casesPhotos/CasesPhotos";
import HeaderMain from "components/header/HeaderMain";
import PromoMain from "components/promoMain/PromoMain";

document.addEventListener('DOMContentLoaded', () => {
  useTocarServices();

  accordion();
  sliders();

  SliderRange();
  CardPageSlider();
  Modal();
  CatalogSecondPage();
  Works();
  LastStates();
  Reason();
  Materials();
  Ceo();
  AboutStats();
  Variations();
  Footer();
  CatalogFirstPage();
  Rrocesses();
  Characteristics();
  FactoryPhotos();
  Menu();
  Social();
  Contacts();
  Details();
  ItemDescr();
  CasesPhotos();

});




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderMain />
      </header>
      <main>
        <PromoMain />
        <Reason />
        <CatalogFirstPage />
        <Materials />
        <AboutStats />
        <Variations />
        <LastStates />
        <Ceo />
        <Footer />
      </main>
    </div>
  );
}

export default App;



/*          initializeSwiper('.lastStates__slider', ".lastStates__slider-nav", {
                    breakpoints: {
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 3,
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1900: {
                            spaceBetween: 35,
                        },
                    },
                }); */

