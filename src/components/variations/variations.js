import QueryWrapper from 'utils/QueryWrapper';
import { useGetVariationsQuery } from 'api/apiSlice';
import './variations.scss';

const Variations = () => {
    const {
        data: variations = [],
        isFetching,
        isLoading,
        isError
    } = useGetVariationsQuery();

    const renderItems = (arr) => {
        return (
            <div className="variations__wrapper">
                {arr.map(({ image, alt, title, links, id }) => {
                    return (
                        <div className="variations__item" key={id}>
                            <div className="variations__item-img">
                                <img src={image} alt={alt} />
                            </div>
                            <div className="variations__item-content">
                                <h3 className="variations__item-title title-fw400">{title}</h3>
                                <ul className="variations__list">
                                    {links.map(({ text, id }) => (
                                        <li key={id}>
                                            <a href="#">
                                                <span className="icon-right-open-big"></span>
                                                <div className="text-fw300">{text}</div>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <section className="variations">
            <div className="container">
                <h2 className="title-fw700">Мы разделяем 3 вида строений</h2>
                <QueryWrapper
                    isLoading={isLoading}
                    isFetching={isFetching}
                    isError={isError}
                    data={variations}>

                    {renderItems(variations)}
                </QueryWrapper>
            </div>
        </section>
    );
};

export default Variations;
