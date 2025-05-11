import React from "react";

const Reason = () => {
    return (
        <section className="reason">
            <div className="container">
                <div className="reason__wrapper">
                    <h2 className="title-fw700">Почему выбирают нас:</h2>
                    <ul className="reason__list">

                        <li className="reason__item">
                            <img
                                src="/icons/reason/design.svg" // Corrected path
                                alt="design"
                                className="reason__item-img"
                            />
                            <p className="reason__item-text text-fw300">
                                Эксклюзивный дизайн<br />
                                Не имеющий аналогов в Украине
                            </p>
                        </li>

                        <li className="reason__item">
                            <img
                                src="/icons/reason/development.svg" // Corrected path
                                alt="development"
                                className="reason__item-img"
                            />
                            <p className="reason__item-text text-fw300">
                                Разработка модели<br />
                                Индивидуальной с помощью 3D-визуализации в нашем приложении
                            </p>
                        </li>

                        <li className="reason__item">
                            <img
                                src="/icons/reason/certificate.svg" // Corrected path
                                alt="certificate"
                                className="reason__item-img"
                            />
                            <p className="reason__item-text text-fw300">
                                Сертификаты качества<br />
                                Подтверждают наши материалы и комплектующие
                            </p>
                        </li>

                        <li className="reason__item">
                            <img
                                src="/icons/reason/contract.svg" // Corrected path
                                alt="contract"
                                className="reason__item-img"
                            />
                            <p className="reason__item-text text-fw300">
                                Работа под ключ<br />
                                В среднем за Х дней от установки фундамента до сдачи объекта в эксплуатацию
                            </p>
                        </li>

                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Reason;
