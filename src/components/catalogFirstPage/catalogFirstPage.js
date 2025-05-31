import { useState, useEffect } from 'react';
import useTocarService from 'services/TocarService';

import './catalogFirstPage.scss';
import setContent from 'utils/setContent';

const CatalogFirstPage = () => {

    const [itemsList, setItemsList] = useState([]);

    const { process, setProcess, getData } = useTocarService();

    useEffect(() => {
        getData('catalogFirstPage')
            .then(res => { setItemsList(res) })
            .then(() => setProcess('confirmed'));
    }, []);

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
                        <a href={linkHref} className="button-circe">
                            <div className="button-circe__circle">
                                <span className="icon-right-open-big"></span>
                            </div>
                            <div className="button-circe__text">{linkText}</div>
                        </a>
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
                {setContent(process, renderItems, itemsList)}
            </div>
        </section>
    );
};

export default CatalogFirstPage;
