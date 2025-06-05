import { useGetReasonsQuery } from 'api/apiSlice';
import QueryWrapper from 'utils/QueryWrapper';

import './reason.scss';

const Reason = () => {
    const { data: reasons = [], isLoading, isFetching, isError } = useGetReasonsQuery();

    const renderItems = (arr) => (
        <ul className="reason__list">
            {arr.map(({ icon, alt, title, text, id }) => (
                <li key={id} className="reason__item">
                    <img src={icon} alt={alt} className="reason__item-img" />
                    <h3 className="reason__item-title">{title}</h3>
                    <p className="reason__item-text text-fw300">{text}</p>
                </li>
            ))}
        </ul>
    );

    return (
        <section className="reason">
            <div className="container">
                <div className="reason__wrapper">
                    <h2 className="title-fw700">Почему выбирают нас:</h2>
                    <QueryWrapper
                        isLoading={isLoading}
                        isFetching={isFetching}
                        isError={isError}
                        data={reasons}
                    >
                        {renderItems(reasons)}
                    </QueryWrapper>
                </div>
            </div>
        </section>
    );
};


export default Reason;