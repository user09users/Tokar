import './details.scss';
import { useGetDetailsQuery } from 'api/apiSlice';
import QueryWrapper from 'utils/QueryWrapper';

const Details = () => {

    const {
        data: detailsData = [],
        isFetching,
        isLoading,
        isError
    } = useGetDetailsQuery();

    const renderDetails = (items) => {
        return (
            items.map(({ label, value, id }) => {
                return (
                    <div className="details__block" key={id}>
                        <img
                            src="/icons/details-mark.svg"
                            alt="details-mark"
                            className="details__block-img"
                        />
                        <div className="details__block-subblock">
                            <div className="details__block-text">
                                {label}
                                <br />
                                <span>{value}</span>
                            </div>
                        </div>
                    </div>
                )
            })

        )
    }

    return (
        <section className="details">
            <div className="container">
                <div className="details__title title-fw700">Реквизиты компании:</div>
                <div className="details__wrapper">
                    <QueryWrapper
                        isLoading={isLoading}
                        isFetching={isFetching}
                        isError={isError}
                        data={detailsData}>

                        {renderDetails(detailsData)}
                    </QueryWrapper>
                </div>
            </div>
        </section>
    );
};

export default Details;
