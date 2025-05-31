import { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import useTocarService from 'services/TocarService';
import setContent from 'utils/setContent';

import CasesPhotos from 'components/casesPhotos/CasesPhotos';
import CasesThumbsSlider from 'components/casesThumbsSlider/CasesThumbsSlider';
import CasesCardDescr from 'components/casesCardDescr/casesCardDescr';

const CasesPage = () => {
    const { casesCardId } = useParams();
    const { getCasesHouseInfo, process, setProcess, clearError } = useTocarService();

    const [data, setData] = useState(null);

    useEffect(() => {
        clearError();

        getCasesHouseInfo(casesCardId)
            .then(res => {
                // если данных нет — идем на 404
                if (!res || !res.casesCardDescr?.length) {
                    setProcess('error');
                    return;
                }

                setData(res);
                setProcess('confirmed');
            })
            .catch(() => setProcess('error'));
    }, [casesCardId]);

    if (process === 'error') {
        return <Navigate to="/404" />;
    }

    return (
        <>
            {process === 'confirmed' && data && (
                <Helmet>
                    <meta name="description" content="Case by Tocar company" />
                    <title>{data.casesCardDescr[0]?.title || 'Our case'}</title>
                </Helmet>
            )}

            {setContent(process, () => (
                <>
                    <CasesThumbsSlider thumbs={data.casesCardThumbs} process={process} />
                    <CasesCardDescr itemDescr={data.casesCardDescr[0]} />
                    <CasesPhotos photos={data.casesCardSlides} process={process} />
                </>
            ), data)}
        </>
    );
};

export default CasesPage;
