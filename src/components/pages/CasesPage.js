import { Helmet } from "react-helmet";
import CasesPhotos from "components/casesPhotos/CasesPhotos";
import CasesSection from "components/cases/CasesCardSlider";
const CasesPage = () => {

    return <>
        <Helmet>
            <meta name="description" content="Cases by Tocar company" />

            <title>Our cases</title>
        </Helmet>
        <CasesPhotos />
        <CasesPhotos />
    </>

}

export default CasesPage;