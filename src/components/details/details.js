import { useState, useEffect } from 'react';
import useTocarService from 'services/TocarService';
import './details.scss';
import setContent from 'utils/setContent';

const Details = () => {

    const { getData, clearError, process, setProcess } = useTocarService();

    const [itemsList, setItemsList] = useState([]);

    useEffect(() => {
        clearError();
        getData('details')
            .then(res => setItemsList(res))
            .then(() => setProcess('confirmed'));
    }, [itemsList]);

    const renderDetails = (items) => {
        return (
            items.map(({ label, value, id }) => {
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

        )
    }

    return (
        <section className="details">
            <div className="container">
                <div className="details__title title-fw700">Реквизиты компании:</div>
                <div className="details__wrapper">
                    {setContent(process, renderDetails, itemsList)}

                </div>
            </div>
        </section>
    );
};

export default Details;
