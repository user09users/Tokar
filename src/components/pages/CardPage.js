import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import useTocarService from 'services/TocarService';

import Characteristics from 'components/characteristics/Characteristics';
import CardPageSlider from 'components/cardPageSlider/CardPageSlider';
import Consultation from 'components/consultation/Consultation';
import Processes from 'components/processes/Processes';
import setContent from 'utils/setContent';

const CardPage = () => {
    const [data, setData] = useState(null);
    const { getHouseInfo, process, setProcess, clearError } = useTocarService();

    const { cardId } = useParams();

    useEffect(() => {
        clearError();

        getHouseInfo(cardId)
            .then(res => {
                if (!res || !res.characteristics || res.characteristics.length === 0) {
                    setProcess('error');
                } else {
                    setData(res);
                    setProcess('confirmed');
                }
            })
            .catch(() => setProcess('error'));
    }, [cardId]);


    if (process === 'error') {
        return <Navigate to={'/404'} />
    }

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
