import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import CasesPhotos from 'components/casesPhotos/CasesPhotos';
import CasesThumbsSlider from 'components/casesThumbsSlider/CasesThumbsSlider';
import CasesCardDescr from 'components/casesCardDescr/casesCardDescr';

import QueryWrapper from 'utils/QueryWrapper';
import { useGetCasesPageDataQuery } from 'api/apiSlice';

const CasesPage = () => {
    const { casesCardId } = useParams();

    const {
        data: CasesPageData,
        isLoading,
        isFetching,
        isError,
        isSuccess
    } = useGetCasesPageDataQuery(casesCardId);

    // Redirect to 404 if error OR data is confirmed but empty
    if (isError || (isSuccess && (!CasesPageData || !CasesPageData.casesCardDescr?.length))) {
        return <Navigate to="/404" />;
    }

    return (
        <>
            {isSuccess && CasesPageData && (
                <Helmet>
                    <meta name="description" content="Case by Tocar company" />
                    <title>{CasesPageData.casesCardDescr[0]?.title || 'Our case'}</title>
                </Helmet>
            )}

            <QueryWrapper
                isLoading={isLoading}
                isFetching={isFetching}
                isError={isError}
                data={CasesPageData}
            >
                {/* Проверяем, что данные точно есть перед использованием */}
                {isSuccess && CasesPageData && (
                    <>
                        <CasesThumbsSlider
                            thumbs={CasesPageData.casesCardThumbs}
                        />
                        <CasesCardDescr itemDescr={CasesPageData.casesCardDescr[0]} />
                        <CasesPhotos
                            photos={CasesPageData.casesCardSlides}
                        />
                    </>
                )}
            </QueryWrapper>
        </>
    );
};

export default CasesPage;
