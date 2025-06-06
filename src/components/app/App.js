import { Suspense } from "react";
import { BrowserRouter as Router } from 'react-router-dom';

import Footer from "../footer/Footer";
import HeaderMain from "components/header/HeaderMain";
import Spinner from "components/spinner/Spinner";
import Modal from "components/modal/Modal";
import AppRoutesWrapper from "./AppRoutesWrapper"; // 👈 Add this

import "../../sass/libs/modern-normalize.min.css";
import "../../sass/libs/grids-min.css";
import "../../sass/libs/fontello.css";
import "../../sass/libs/grids-responsive-min.css";
import "../../sass/style.scss";

const App = () => {
  return (
    <Router>
      <div className="App">
        <header>
          <HeaderMain />
        </header>
        <main>
          <Suspense fallback={<Spinner />}>
            <AppRoutesWrapper />
          </Suspense>
        </main>
        <Footer />
        <Modal />
      </div>
    </Router>
  );
};

export default App;
