import { Component } from 'react';
import TocarService from 'services/services';
import Spinner from 'components/spinner/Spinner';
import ErrorMessage from 'components/errorMessage/ErrorMessage';

import './reason.scss';
class Reason extends Component {
    state = {
        itemsList: [],
        error: false,
        loading: true
    };
    tocarService = TocarService();

    componentDidMount() {
        this.tocarService.getData('reasons')
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
            const { icon, alt, title, text, id } = item;
            return (

                <li className="reason__item" key={id}>
                    <img
                        src={icon}
                        alt={alt}
                        className="reason__item-img"
                    />
                    <h3 className='reason__item-title'>{title}</h3>
                    <p className="reason__item-text text-fw300">
                        {text}
                    </p>
                </li>
            )
        });
        return (
            <ul className="reason__list" >
                {items}
            </ul>
        )
    }

    render() {

        const { itemsList, error, loading } = this.state;

        const items = this.renderItems(itemsList);

        const errorMessage = error ? <ErrorMessage /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = !(loading || error) ? items : null;

        return (
            <section className="reason">
                <div className="container">
                    <div className="reason__wrapper">
                        <h2 className="title-fw700">Почему выбирают нас:</h2>
                        {errorMessage}
                        {spinner}
                        {content}
                    </div>
                </div>
            </section>
        );
    }
};

export default Reason;
