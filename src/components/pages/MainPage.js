import LastStates from "../lastStates/LastStates";
import Reason from "../reason/Reason";
import Materials from "../materials/Materials";
import Ceo from "../ceo/Ceo";
import AboutStats from "../aboutStats/AboutStats";
import Variations from "../variations/Variations";
import CatalogFirstPage from "../catalogFirstPage/CatalogFirstPage";

import PromoMain from "components/promoMain/PromoMain";
import ErrorBoundary from "components/errorBoundary/ErrorBoundary";
import { Helmet } from "react-helmet";

const MainPage = () => {

    /*     const [show, setShow] = useState(false);
    
        const toggleModal = () => setShow(true);
     */

    return (
        <>
            <Helmet>
                <meta name="description" content="Web site for Tocar company" />

                <title>Tocar company page</title>
            </Helmet>
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