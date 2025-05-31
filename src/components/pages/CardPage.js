import { useEffect, useState } from 'react';
import useTocarService from 'services/TocarService';

import Characteristics from 'components/characteristics/Characteristics';
import CardPageSlider from 'components/cardPageSlider/CardPageSlider';
import Consultation from 'components/consultation/Consultation';
import Processes from 'components/processes/Processes';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import setContent from 'utils/setContent';

const CardPage = () => {
    const [data, setData] = useState(null);
    const { getHouseInfo, process, setProcess, clearError } = useTocarService();

    const { cardId } = useParams();

    useEffect(() => {
        clearError();

        getHouseInfo(cardId)
            .then(res => {
                setData(res);
                setProcess('confirmed');
            })
    }, [cardId, getHouseInfo, clearError, setProcess]);

    // Render content based on `process` state via setContent utility
    return (
        <>
            {process === 'confirmed' && data && (
                <Helmet>
                    <meta name="description" content={`${data.characteristics[0].info.name} page`} />
                    <title>{data.characteristics[0].info.name}</title>
                </Helmet>
            )}

            {setContent(process, () => (
                <>

                    <CardPageSlider thumbs={data?.cardPageSlides} process={process} />

                    <Characteristics characteristics={data.characteristics[0]} />
                    <Consultation />
                    <Processes />
                </>
            ), data)}
        </>
    );
};

export default CardPage;
