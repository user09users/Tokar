
import "purecss/build/grids-min.css";
import "purecss/build/grids-responsive-min.css";
import { Component } from "react";

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



class App extends Component {

  state = {
    show: false
  }

  toggleModal = () => {
    this.setState({
      show: true
    })
  }

  render() {

    return (
      <div className="App">
        <header>
          <HeaderMain toggleModal={this.toggleModal} />
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
            show={this.state.show}
            onClose={() => this.setState({ show: false })}
            onScrollToBottom={() => this.setState({ show: true })} />

        </main>
      </div>
    );
  }
}

export default App;