import { Link } from 'react-router-dom';
import { useCatalogData } from 'hooks/catalogData.hook';
import setCatalog from 'utils/setCatalog';
import './works.scss';

const Works = () => {
    const { dataList, dataEnded, newDataLoading, onRequest, process } = useCatalogData({
        initialOffset: 0,
        catalogBaseName: 'works',
        limit: 3
    });


    const renderItems = (arr) => {
        return arr.map(({ title, area, image, alt, id, ...props }) => (
            <div className={`works__card ${props.class || ''}`} key={id}>
                <img src={image} alt={alt} className="works__card-img" />
                <div className="works__card-content">
                    <h3 className="works__card-title title-card">{title}</h3>
                    <div className="works__card-wrapper">
                        <Link to={`/cases/${id}`} className="works__card-btn button-works">Подробнее</Link>
                        <div className="works__card-size">
                            <div><img src="/icons/sizes/area.svg" alt="width-height" /></div>
                            <span>{area}м²</span>
                        </div>
                    </div>
                </div>
            </div>
        ));
    };

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
                    {setCatalog(process, renderItems, dataList, newDataLoading)}
                </div>

                {!dataEnded && (
                    <button
                        className="button-more"
                        disabled={newDataLoading}
                        onClick={onRequest}>
                        <span className="icon-arrows-cw"></span>
                        <div>Показать еще больше</div>
                    </button>
                )}
            </div>
        </section>
    );
};

export default Works;
