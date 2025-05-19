import './details.scss';

const Details = () => {
    return (
        <section className="details">
            <div className="container">
                <div className="details__title title-fw700">Реквизиты компании:</div>
                <div className="details__wrapper">
                    <div className="details__block">
                        <img
                            src="/img/icons/details-mark.svg"
                            alt="details-mark"
                            className="details__block-img"
                        />
                        <div className="details__block-subblock">
                            <div className="details__block-text">
                                Наименование компании
                                <br />
                                <span>Tokar Mebel</span>
                            </div>
                        </div>
                    </div>

                    <div className="details__block">
                        <img
                            src="/img/icons/details-mark.svg"
                            alt="details-mark"
                            className="details__block-img"
                        />
                        <div className="details__block-subblock">
                            <div className="details__block-text">
                                КПП
                                <br />
                                <span>644901001</span>
                            </div>
                        </div>
                    </div>

                    <div className="details__block">
                        <img
                            src="/img/icons/details-mark.svg"
                            alt="details-mark"
                            className="details__block-img"
                        />
                        <div className="details__block-subblock">
                            <div className="details__block-text">
                                БИК
                                <br />
                                <span>046526969</span>
                            </div>
                        </div>
                    </div>

                    <div className="details__block">
                        <img
                            src="/img/icons/details-mark.svg"
                            alt="details-mark"
                            className="details__block-img"
                        />
                        <div className="details__block-subblock">
                            <div className="details__block-text">
                                Юридический адрес
                                <br />
                                <span>г. Тячев, ТЦ "Стиль"</span>
                            </div>
                        </div>
                    </div>

                    <div className="details__block">
                        <img
                            src="/img/icons/details-mark.svg"
                            alt="details-mark"
                            className="details__block-img"
                        />
                        <div className="details__block-subblock">
                            <div className="details__block-text">
                                ИНН
                                <br />
                                <span>027811001</span>
                            </div>
                        </div>
                    </div>

                    <div className="details__block">
                        <img
                            src="/img/icons/details-mark.svg"
                            alt="details-mark"
                            className="details__block-img"
                        />
                        <div className="details__block-subblock">
                            <div className="details__block-text">
                                Корреспондентский счет
                                <br />
                                <span>30101810600002500957</span>
                            </div>
                        </div>
                    </div>

                    <div className="details__block">
                        <img
                            src="/img/icons/details-mark.svg"
                            alt="details-mark"
                            className="details__block-img"
                        />
                        <div className="details__block-subblock">
                            <div className="details__block-text">
                                Регистрационный номер
                                <br />
                                <span>02428896</span>
                            </div>
                        </div>
                    </div>

                    <div className="details__block">
                        <img
                            src="/img/icons/details-mark.svg"
                            alt="details-mark"
                            className="details__block-img"
                        />
                        <div className="details__block-subblock">
                            <div className="details__block-text">
                                Расчетный счет
                                <br />
                                <span>40602810206000050025</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Details;
