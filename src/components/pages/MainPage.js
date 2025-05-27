import { useState } from "react";


import LastStates from "../lastStates/LastStates";
import Reason from "../reason/Reason";
import Materials from "../materials/Materials";
import Ceo from "../ceo/Ceo";
import AboutStats from "../aboutStats/AboutStats";
import Variations from "../variations/Variations";
import CatalogFirstPage from "../catalogFirstPage/CatalogFirstPage";

import PromoMain from "components/promoMain/PromoMain";
import ErrorBoundary from "components/errorBoundary/ErrorBoundary";

const MainPage = () => {

    /*     const [show, setShow] = useState(false);
    
        const toggleModal = () => setShow(true);
     */

    return (
        <>
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
        </>
    )
}

export default MainPage;