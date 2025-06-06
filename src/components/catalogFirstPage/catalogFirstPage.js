import QueryWrapper from 'utils/QueryWrapper';
import { useGetCatalogFirstPageQuery, useGetFiltersDataQuery } from 'api/apiSlice';

import './catalogFirstPage.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeActiveFilters } from 'components/filters/filtersSlice';

const CatalogFirstPage = () => {
    const {
        data: catalogFirstPage = [],
        isLoading,
        isFetching,
        isError } = useGetCatalogFirstPageQuery();
    const {
        data: filterItemsData = [],
        isLoading: isLoadingFilers,
        isFetching: isFetchingFilers,
        isError: isErrorFilers } = useGetFiltersDataQuery();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = (title) => {
        if (!filterItemsData?.filters) return;

        switch (title) {
            case 'Жилое':
                filterItemsData.filters[0].items.forEach(filter => {
                    dispatch(changeActiveFilters(filter.label));
                });
                break;
            case 'Коммерческое':
                filterItemsData.filters[1].items.forEach(filter => {
                    dispatch(changeActiveFilters(filter.label));
                });
                break;
            case 'Садовое':
                filterItemsData.filters[2].items.forEach(filter => {
                    dispatch(changeActiveFilters(filter.label));
                });
                break;
            default:
                break;
        }

        navigate('/catalog');
    };

    function renderItems(arr) {
        const items = arr.map(item => {

            const { title, description, image, alt, linkText, linkHref, id, layout } = item;

            const itemClazz = `catalogFirstPage__item ${layout === 'horizontal' ? 'horizontal' : null}`;

            return (
                <div className={itemClazz} key={id}>
                    <img src={image} alt={alt} className="catalogFirstPage__item-img" />
                    <div className="catalogFirstPage__item-wrapper">
                        <div className="title-fz400">{title}</div>
                        <p className="catalogFirstPage__item-text text-fw300">
                            {description}
                        </p>
                        <button className="button-circe" onClick={() => handleClick(title)}>
                            <div className="button-circe__circle">
                                <span className="icon-right-open-big"></span>
                            </div>
                            <div className="button-circe__text">{linkText}</div>
                        </button>
                    </div>
                </div>
            )
        });

        return (
            <div className="catalogFirstPage__wrapper">
                {items}
            </div>
        )
    }

    return (
        <section className="catalogFirstPage">
            <img src="/img/catalog-gazebo.jpeg" alt="gazebo" className="catalogFirstPage__bg" />
            <div className="container">
                <h2 className="title-fw700">Каталог проектов</h2>
                <QueryWrapper
                    isLoading={isLoading}
                    isFetching={isFetching}
                    isError={isError}
                    data={catalogFirstPage}>

                    {renderItems(catalogFirstPage)}
                </QueryWrapper>
            </div>
        </section>
    );
};

export default CatalogFirstPage;
