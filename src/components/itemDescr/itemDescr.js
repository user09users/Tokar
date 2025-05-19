import './itemDescr.scss';

const ItemDescr = () => {
    return (
        <section className="itemDescr">
            <div className="container">
                <h2 className="itemDescr title-fw800">Характеристики:</h2>

                <div className="itemDescr__intro">
                    <div className="itemDescr__intro-block">
                        <img src="/icons/characteristics/technologies.svg" alt="Технологии" />
                        <div>
                            Технологии: <br />
                            <span>Дом из газоблока и кирпича</span>
                        </div>
                    </div>
                    <div className="itemDescr__intro-block">
                        <img src="/icons/characteristics/Clock.svg" alt="Сроки строительства" />
                        <div>
                            Сроки строительства: <br />
                            <span>30 дней</span>
                        </div>
                    </div>
                </div>

                <dl className="itemDescr__descr-ul">
                    <div className="itemDescr__descr-item">
                        <dt>Стиль</dt>
                        <dd>Финский</dd>
                    </div>
                    <div className="itemDescr__descr-item">
                        <dt>Фундамент</dt>
                        <dd>Свайно-винтовой</dd>
                    </div>
                    <div className="itemDescr__descr-item">
                        <dt>Утепление стен</dt>
                        <dd>RockWool, 150 мм</dd>
                    </div>
                    <div className="itemDescr__descr-item">
                        <dt>Кровля</dt>
                        <dd>GrandLine</dd>
                    </div>
                    <div className="itemDescr__descr-item">
                        <dt>Окна</dt>
                        <dd>Двойной стеклопакет Rehau</dd>
                    </div>
                    <div className="itemDescr__descr-item">
                        <dt>Отделка фасада</dt>
                        <dd>Имитация бруса</dd>
                    </div>
                    <div className="itemDescr__descr-item">
                        <dt>Наружная покраска</dt>
                        <dd>Tikkurila</dd>
                    </div>
                    <div className="itemDescr__descr-item">
                        <dt>Чистовая отделка</dt>
                        <dd>Имитация бруса</dd>
                    </div>
                    <div className="itemDescr__descr-item">
                        <dt>Отделка парной</dt>
                        <dd>Осина</dd>
                    </div>
                    <div className="itemDescr__descr-item">
                        <dt>Печь</dt>
                        <dd>Термофор Витрувия</dd>
                    </div>
                </dl>

                <ul className="itemDescr__images-ul">
                    <li className="itemDescr__images-item">
                        <img src="/icons/sizes/length-big.svg" alt="Размер" />
                        <div>20м²</div>
                    </li>
                    <li className="itemDescr__images-item">
                        <img src="/icons/sizes/floors-big.svg" alt="Этажи" />
                        <div>2 этажа</div>
                    </li>
                    <li className="itemDescr__images-item">
                        <img src="/icons/sizes/area-big.svg" alt="Площадь" />
                        <div>4x5м</div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default ItemDescr;
