import { useEffect, useState } from 'react';
import useTocarService from 'services/services';

import Characteristics from 'components/characteristics/Characteristics';
import CardPageSlider from 'components/cardPageSlider/CardPageSlider';
import Consultation from 'components/consultation/Consultation';
import Processes from 'components/processes/Processes';
import Spinner from 'components/spinner/Spinner';
import ErrorMessage from 'components/errorMessage/ErrorMessage';
import { useParams } from 'react-router-dom';

const CardPage = () => {
    const [data, setData] = useState(null);
    const { getHouseInfo, loading, error, clearError } = useTocarService();

    const { cardId } = useParams();

    useEffect(() => {
        clearError();
        getHouseInfo(cardId)
            .then(setData);
    }, [cardId, getHouseInfo, clearError]);

    if (loading) return <Spinner />;
    if (error || !data) return <ErrorMessage message={error} />;

    return (
        <>
            <CardPageSlider
                slides={data?.cardPageSlides}
                loading={loading}
                error={error}
            />
            <Characteristics
                characteristics={data?.characteristics?.[0]}
                loading={loading}
                error={error}
            />
            <Consultation />
            <Processes />
        </>
    );
};

export default CardPage;
