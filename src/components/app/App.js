
import "purecss/build/grids-min.css";
import "purecss/build/grids-responsive-min.css";
import { useState } from "react";

import Footer from "../footer/Footer";
import LastStates from "../lastStates/LastStates";
import Reason from "../reason/Reason";
import Materials from "../materials/Materials";
import Ceo from "../ceo/Ceo";
import AboutStats from "../aboutStats/AboutStats";
import Variations from "../variations/Variations";
import CatalogFirstPage from "../catalogFirstPage/CatalogFirstPage";
import HeaderMain from "components/header/HeaderMain";
import PromoMain from "components/promoMain/PromoMain";
import ErrorBoundary from "components/errorBoundary/ErrorBoundary";
import Modal from "components/modal/Modal";

const App = () => {

  const [show, setShow] = useState(false);

  const toggleModal = () => setShow(true);

  return (
    <div className="App">
      <header>
        <HeaderMain toggleModal={toggleModal} />
      </header>
      <main>
        <PromoMain />
        <ErrorBoundary>
          <Reason />
        </ErrorBoundary>
        <CatalogFirstPage />
        <Materials />
        <AboutStats />
        <Variations />
        <LastStates />
        <Ceo />
        <Footer />
        <Modal
          show={show}
          setShow={setShow}
          onClose={() => setShow(false)}
          onScrollToBottom={() => setShow(true)} />

      </main>
    </div>
  );
}

export default App;