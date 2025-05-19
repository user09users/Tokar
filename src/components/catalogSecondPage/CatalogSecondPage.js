import { Component } from 'react';
import TocarService from 'services/services';
import Spinner from 'components/spinner/Spinner';
import ErrorMessage from 'components/errorMessage/ErrorMessage';

import './catalogSecondPage.scss';

class CatalogSecondPage extends Component {
    state = {
        itemsList: [],
        loading: true,
        error: false,
        newItemsLoading: false,
        start: 0,
        itemsEnded: false
    };

    tocarService = TocarService();

    componentDidMount() {
        const { start } = this.state;
        this.onRequest('catalog', start);
    }

    onRequest = (url, start) => {
        this.onItemsLoading();

        this.tocarService.getCatalog(url, start, 4)
            .then(newItems => this.onItemsLoaded(newItems))
            .catch(this.onError);
    };

    onItemsLoading = () => {
        this.setState({ newItemsLoading: true });
    };

    onItemsLoaded = (newItems) => {
        this.setState(({ itemsList, start }) => {
            const itemsEnded = newItems.length < 4;

            return {
                itemsList: [...itemsList, ...newItems],
                loading: false,
                newItemsLoading: false,
                start: start + 4,
                itemsEnded
            };
        });
    };

    onError = () => {
        this.setState({
            error: true,
            loading: false
        });
    };

    renderItems = (arr) => {
        const items = arr.map(item => {
            const { title, subtitle, category, price, popularity, area, dimensions, image, id } = item;

            return (
                <div
                    className="catalogSecondPage__item"
                    key={id}
                    data-popularity={popularity}
                    data-price={price}
                    data-category={category}
                    data-area={area}
                    data-dimensions={dimensions}
                >
                    <img className="catalogSecondPage__item-img" src={image} alt={subtitle} />
                    <div className="catalogSecondPage__item-content">
                        <h3 className="catalogSecondPage__item-title">{title} <span>{subtitle}</span></h3>
                        <div className="catalogSecondPage__item-content-wrapper">
                            <div className="catalogSecondPage__item-size">
                                <div><img src="/src/icons/sizes/area.svg" alt="area" /></div>
                                <span>{dimensions}</span>
                            </div>
                            <div className="catalogSecondPage__item-size">
                                <div><img src="/src/icons/sizes/length.svg" alt="length" /></div>
                                <span>{area} м2</span>
                            </div>
                            <a href="#" className="button-item catalogSecondPage__item-btn">Ознакомиться</a>
                            <div className="catalogSecondPage__item-price">{price} грн</div>
                        </div>
                    </div>
                </div>
            );
        });

        return (
            <div className="catalogSecondPage__wrapper">
                {items}
            </div>
        );
    };

    render() {
        const { itemsList, loading, error, newItemsLoading, start, itemsEnded } = this.state;

        const errorMessage = error ? <ErrorMessage /> : null;
        const spinner = loading && !newItemsLoading ? <Spinner /> : null;
        const content = !(loading || error) ? this.renderItems(itemsList) : null;

        return (
            <section className="catalogSecondPage">
                <div className="container">
                    <div className="page__nav">Главная страница / Жилое</div>
                    <h1 className="catalogSecondPage__title title-fw800">Каталог жилых строений</h1>
                    <div className="catalogSecondPage__search">
                        <span className="icon-search"></span>
                        <input required type="text" id="search" name="search" placeholder="Поиск по жилым строениям..." />
                    </div>

                    {errorMessage}
                    {spinner}
                    {content}

                    {!itemsEnded && !loading && (
                        <button className="button-item catalogSecondPage__item-btn"
                            disabled={newItemsLoading}
                            onClick={() => this.onRequest('catalog', start)}>
                            Ознакомиться</button>
                    )}
                </div>
            </section>
        );
    }
}

/* CatalogSecondPage.propTypes = {
    item: PropTypes.object
}
 */
export default CatalogSecondPage;
