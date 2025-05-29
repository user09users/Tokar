import { useState, useEffect } from 'react';
import useTocarService from 'services/services';
import './details.scss';

const Details = () => {

    const { getData, clearError } = useTocarService();

    const [itemsList, setItemsList] = useState([]);

    useEffect(() => {
        clearError();
        getData('details')
            .then(onItemsLoaded)
    }, [itemsList]);


    const onItemsLoaded = (itemsList) => {
        setItemsList(itemsList);
    }

    return (
        <section className="details">
            <div className="container">
                <div className="details__title title-fw700">Реквизиты компании:</div>
                <div className="details__wrapper">
                    {itemsList.map(({ label, value, id }) => {
                        return (
                            <div className="details__block" key={id}>
                                <img
                                    src="/icons/details-mark.svg"
                                    alt="details-mark"
                                    className="details__block-img"
                                />
                                <div className="details__block-subblock">
                                    <div className="details__block-text">
                                        {label}
                                        <br />
                                        <span>{value}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    }

                </div>
            </div>
        </section>
    );
};

export default Details;
