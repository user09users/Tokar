import AboutIntro from "components/aboutIntro/AboutIntro";
import AboutStats from "components/aboutStats/AboutStats";
import Reason from "components/reason/Reason";
import Consultation from "components/consultation/Consultation";
import Factory from "components/factory/Factory";
import LastStates from "components/lastStates/LastStates";
import { Helmet } from "react-helmet";

const AboutPage = () => {


    return (
        <>
            <Helmet>
                <meta name="description" content="About tocar company page" />

                <title>About tocar company</title>
            </Helmet>

            <AboutIntro />
            <AboutStats />
            <Reason />
            <Consultation />
            <Factory />
            <LastStates />
        </>
    )
}

export default AboutPage;