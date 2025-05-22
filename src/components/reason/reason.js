import { useState, useEffect } from 'react';
import useTocarService from 'services/services';
import Spinner from 'components/spinner/Spinner';
import ErrorMessage from 'components/errorMessage/ErrorMessage';

import './reason.scss';

const Reason = () => {
    const [itemsList, setItemsList] = useState([]);

    const { loading, error, getData } = useTocarService();

    useEffect(() => {
        getData('reasons')
            .then(onItemsLoaded);
    }, []);

    const onItemsLoaded = (items) => setItemsList(items);

    const renderItems = (arr) => {
        const items = arr.map(item => {
            const { icon, alt, title, text, id } = item;
            return (
                <li className="reason__item" key={id}>
                    <img src={icon} alt={alt} className="reason__item-img" />
                    <h3 className='reason__item-title'>{title}</h3>
                    <p className="reason__item-text text-fw300">{text}</p>
                </li>
            );
        });

        return <ul className="reason__list">{items}</ul>;
    };

    const items = renderItems(itemsList);

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
};

export default Reason;
