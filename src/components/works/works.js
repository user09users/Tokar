import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useGetCatalogQuery } from 'api/apiSlice';
import {
    setWorksData,
    addWorksData,
    setWorksEnded,
    incrementOffset,
    selectWorksCards,
} from './worksSlice';
import QueryWrapper from 'utils/QueryWrapper'; // Your loading/error wrapper
import './works.scss';

const Works = () => {
    const dispatch = useDispatch();

    const { offset, isWorksDataEnded } = useSelector((state) => state.works);
    const worksCards = useSelector(selectWorksCards);

    const { data = [], isFetching, isLoading, isError } = useGetCatalogQuery({
        catalogBaseName: 'works',
        offset,
        limit: 3,
    });

    // When data changes, update Redux store
    useEffect(() => {
        if (!data.length) return;

        if (offset === 0) {
            dispatch(setWorksData(data)); // first load: replace data
        } else {
            dispatch(addWorksData(data)); // load more: append data
        }

        // If fetched data count less than limit, no more data
        if (data.length < 3) {
            dispatch(setWorksEnded(true));
        } else {
            dispatch(setWorksEnded(false));
        }
    }, [data, dispatch, offset]);

    const handleLoadMore = () => {
        dispatch(incrementOffset(3)); // increase offset by limit
    };

    const renderItems = (arr) =>
        arr.map(({ title, area, image, alt, id, ...props }) => (
            <div className={`works__card ${props.class || ''}`} key={id}>
                <img src={image} alt={alt} className="works__card-img" />
                <div className="works__card-content">
                    <h3 className="works__card-title title-card">{title}</h3>
                    <div className="works__card-wrapper">
                        <Link to={`/cases/${id}`} className="works__card-btn button-works">
                            Подробнее
                        </Link>
                        <div className="works__card-size">
                            <div>
                                <img src="/icons/sizes/area.svg" alt="width-height" />
                            </div>
                            <span>{area}м²</span>
                        </div>
                    </div>
                </div>
            </div>
        ));

    return (
        <section className="works">
            <div className="container">
                <div className="page__nav">Главная страница / Наши работы</div>
                <div className="title-wrapper">
                    <h1 className="about__introduction-title title-fw800">Примеры выполненных работ</h1>
                    <Link to={'/'} className="backButton">
                        <div className="backButton-circle">
                            <span className="backButton-icon icon-left-open-big"></span>
                        </div>
                        <div className="backButton-text">Вернуться назад</div>
                    </Link>
                </div>

                <div className="works__wrapper">
                    <QueryWrapper
                        isLoading={isLoading}
                        isFetching={isFetching}
                        isError={isError}
                        data={worksCards}>
                        {renderItems(worksCards)}
                    </QueryWrapper>
                </div>

                {!isWorksDataEnded && (
                    <button
                        className="button-more"
                        disabled={isFetching || isLoading}
                        onClick={handleLoadMore}
                        onKeyDown={(e) => {
                            if (e.key === ' ' || e.key === 'Enter') {
                                e.preventDefault();
                                handleLoadMore();
                            }
                        }}
                    >
                        <span className="icon-arrows-cw"></span>
                        <div>Показать еще больше</div>
                    </button>
                )}
            </div>
        </section>
    );
};

export default Works;
