import React from "react";

const Processes = () => {
    return (
        <section className="processes">
            <div className="container">
                <h2 className="processes__title title-fw800">Процесс работы</h2>
                <div className="processes__wrapper">
                    {/* Process 1 */}
                    <div className="processes__block">
                        <div className="processes__block-wrapper">
                            <div className="processes__block-header">
                                <div>Процесс 1</div>
                                <span className="icon-down-open processes__arrow"></span>
                            </div>
                            <div className="processes__block-subtitle title-fw700">
                                Общение с экспертами
                            </div>
                        </div>
                        <ul className="processes__block-content">
                            <li className="processes__item">
                                <img
                                    className="processes__item-img"
                                    src="/icons/processes/processes-1/meeting.svg" // Corrected path
                                    alt="meeting"
                                />
                                <div className="processes__item-text">
                                    Ваше знакомство с представителем компании.
                                </div>
                            </li>
                            <li className="processes__item">
                                <img
                                    className="processes__item-img"
                                    src="/icons/processes/processes-1/interests.svg" // Corrected path
                                    alt="interests"
                                />
                                <div className="processes__item-text">
                                    Ваше знакомство с представителем компании.
                                </div>
                            </li>
                            <li className="processes__item">
                                <img
                                    className="processes__item-img"
                                    src="/icons/processes/processes-1/agreement.svg" // Corrected path
                                    alt="agreement"
                                />
                                <div className="processes__item-text">
                                    Ваше знакомство с представителем компании.
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Process 2 */}
                    <div className="processes__block">
                        <div className="processes__block-wrapper">
                            <div className="processes__block-header">
                                <div>Процесс 2</div>
                                <span className="icon-down-open processes__arrow"></span>
                            </div>
                            <div className="processes__block-subtitle title-fw700">
                                Подбор варианта
                            </div>
                        </div>
                        <ul className="processes__block-content">
                            <li className="processes__item">
                                <img
                                    className="processes__item-img"
                                    src="/icons/processes/processes-2/create.svg" // Corrected path
                                    alt="create"
                                />
                                <div className="processes__item-text">
                                    Создание индивидуального 3D-макета вашего проекта.
                                </div>
                            </li>
                            <li className="processes__item">
                                <img
                                    className="processes__item-img"
                                    src="/icons/processes/processes-2/contract.svg" // Corrected path
                                    alt="contract"
                                />
                                <div className="processes__item-text">
                                    Заключение договора по выбранному варианту.
                                </div>
                            </li>
                            <li className="processes__item">
                                <img
                                    className="processes__item-img"
                                    src="/icons/processes/processes-2/payment.svg" // Corrected path
                                    alt="payment"
                                />
                                <div className="processes__item-text">
                                    Оплата предоплаты проекта.
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Process 3 */}
                    <div className="processes__block">
                        <div className="processes__block-wrapper">
                            <div className="processes__block-header">
                                <div>Процесс 3</div>
                                <span className="icon-down-open processes__arrow"></span>
                            </div>
                            <div className="processes__block-subtitle title-fw700">
                                Процесс работы и сдача проекта
                            </div>
                        </div>
                        <ul className="processes__block-content">
                            <li className="processes__item">
                                <img
                                    className="processes__item-img"
                                    src="/icons/processes/processes-3/prepare.svg" // Corrected path
                                    alt="prepare"
                                />
                                <div className="processes__item-text">
                                    Подготовка фундамента и материалов, конструкции.
                                </div>
                            </li>
                            <li className="processes__item">
                                <img
                                    className="processes__item-img"
                                    src="/icons/processes/processes-3/delivery.svg" // Corrected path
                                    alt="delivery"
                                />
                                <div className="processes__item-text">
                                    Доставка на место и монтажные работы.
                                </div>
                            </li>
                            <li className="processes__item">
                                <img
                                    className="processes__item-img"
                                    src="/icons/processes/processes-3/result.svg" // Corrected path
                                    alt="result"
                                />
                                <div className="processes__item-text">
                                    Сдача проекта на месте и оплата оставшейся части суммы.
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Processes;
