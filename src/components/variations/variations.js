import { Component } from 'react';
import TocarService from 'services/services';
import Spinner from 'components/spinner/Spinner';
import ErrorMessage from 'components/errorMessage/ErrorMessage';

import './variations.scss';

class Variations extends Component {

    state = {
        itemsList: [],
        error: false,
        loading: true
    };
    tocarService = TocarService();

    componentDidMount() {
        this.tocarService.getData('variations')
            .then(this.onItemsLoaded)
            .catch(this.onError);
    }

    onItemsLoaded = (itemsList) => {
        this.setState({
            itemsList,
            loading: false
        })
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    renderItems = (arr) => {
        const items = arr.map(item => {

            const { image, alt, title, links, id } = item;

            const itemLinks = links.map(({ text, id }) => {
                return (
                    <li key={id}>
                        <a href="#">
                            <span className="icon-right-open-big"></span>
                            <div className="text-fw300">{text}</div>
                        </a>
                    </li>
                )
            });

            return (
                <div className="variations__item" key={id}>
                    <div className="variations__item-img">
                        <img
                            src={image}
                            alt={alt}
                        />
                    </div>
                    <div className="variations__item-content">
                        <h3 className="variations__item-title title-fw400">{title}</h3>
                        <ul className="variations__list">
                            {itemLinks}
                        </ul>
                    </div>
                </div>
            )
        });

        return (
            <div className="variations__wrapper">
                {items}
            </div>
        )
    }


    render() {

        const { itemsList, error, loading } = this.state;

        const items = this.renderItems(itemsList);

        const spinner = loading ? <Spinner /> : null;
        const errorMessage = error ? <ErrorMessage /> : null;
        const content = !(error || loading) ? items : null;

        return (
            <section className="variations">
                <div className="container">
                    <h2 className="title-fw700">Мы разделяем 3 вида строений</h2>
                    {errorMessage}
                    {spinner}
                    {content}
                </div>
            </section>
        );
    }
};

export default Variations;
