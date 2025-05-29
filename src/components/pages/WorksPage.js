import Works from "components/works/Works";
import Variations from "components/variations/Variations";
import { Helmet } from "react-helmet";

const WorksPage = () => {

    return (
        <>
            <Helmet>
                <meta name="description" content="Works by Tocar company" />

                <title>Our works</title>
            </Helmet>
            <Works />
            <Variations />
        </>
    )

}

export default WorksPage;