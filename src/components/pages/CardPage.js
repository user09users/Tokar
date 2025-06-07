import { Navigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Characteristics from 'components/characteristics/Characteristics';
import CardPageSlider from 'components/cardPageSlider/CardPageSlider';
import Consultation from 'components/consultation/Consultation';
import { useGetCardPageDataQuery } from 'api/apiSlice';
import QueryWrapper from 'utils/QueryWrapper';
import Processes from 'components/processes/Processes';

const CardPage = () => {

    const { cardId } = useParams();

    const {
        data: CardPageData,
        isLoading,
        isFetching,
        isError,
        isSuccess
    } = useGetCardPageDataQuery(cardId);

    if (isError) {
        return <Navigate to={'/404'} />
    }
    if (!CardPageData) return null;

    return (
        <>
            {isSuccess && CardPageData && (
                <Helmet>
                    <meta name="description" content={`${CardPageData.characteristics[0].info.name} page`} />
                    <title>{CardPageData.characteristics[0].info.name}</title>
                </Helmet>
            )}
            <QueryWrapper
                isLoading={isLoading}
                isFetching={isFetching}
                isError={isError}
                data={CardPageData}>


                <CardPageSlider thumbs={CardPageData?.cardPageSlides} />

                <Characteristics characteristics={CardPageData.characteristics[0]} />
                <Consultation />
                <Processes />
            </QueryWrapper>
        </>
    );
};

export default CardPage;
