import { useEffect, useState } from 'react';
import useTocarService from 'services/TocarService';
import setContent from 'utils/setContent';
import './variations.scss';

const Variations = () => {
    const [itemsList, setItemsList] = useState([]);

    const { process, setProcess, clearError, getData } = useTocarService();

    useEffect(() => {
        clearError();
        getData('variations')
            .then(res => setItemsList(res))
            .then(() => setProcess('confirmed'));
    }, []);

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
                {setContent(process, renderItems, itemsList)}
            </div>
        </section>
    );
};

export default Variations;
