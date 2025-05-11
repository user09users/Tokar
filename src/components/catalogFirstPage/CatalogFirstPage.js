const CatalogFirstPage = () => {
    return (
        <section className="catalogFirstPage">
            <img src="/img/catalog-gazebo.jpeg" alt="gazebo" className="catalogFirstPage__bg" />
            <div className="container">
                <h2 className="title-fw700">Каталог проектов</h2>
                <div className="catalogFirstPage__wrapper">

                    {/* First Catalog Item */}
                    <div className="catalogFirstPage__item">
                        <img src="/img/houses/catalog/commerical.jpeg" alt="commerical" className="catalogFirstPage__item-img" />
                        <div className="catalogFirstPage__item-wrapper">
                            <div className="title-fz400">Жилое</div>
                            <p className="catalogFirstPage__item-text text-fw300">
                                Раздел с домами, дачами, коттеджами, виллами, усадьбами и особняками
                            </p>
                            <a href="javascript:void(0)" className="button-circe">
                                <div className="button-circe__circle">
                                    <span className="icon-right-open-big"></span>
                                </div>
                                <div className="button-circe__text">Ознакомиться с проектами</div>
                            </a>
                        </div>
                    </div>

                    {/* Second Catalog Item */}
                    <div className="catalogFirstPage__item">
                        <img src="/img/houses/catalog/garden.jpeg" alt="garden" className="catalogFirstPage__item-img" />
                        <div className="catalogFirstPage__item-wrapper">
                            <div className="title-fz400">Коммерческое</div>
                            <p className="catalogFirstPage__item-text text-fw300">
                                Раздел с базами отдыха, гостиницами, ресторанами, кафе и магазинами
                            </p>
                            <a href="javascript:void(0)" className="button-circe">
                                <div className="button-circe__circle">
                                    <span className="icon-right-open-big"></span>
                                </div>
                                <div className="button-circe__text">Ознакомиться с проектами</div>
                            </a>
                        </div>
                    </div>

                    {/* Third Catalog Item */}
                    <div className="catalogFirstPage__item horizontal">
                        <img src="/img/houses/catalog/residential.jpeg" alt="residential" className="catalogFirstPage__item-img" />
                        <div className="catalogFirstPage__item-wrapper">
                            <div className="title-fz400">Садовое</div>
                            <p className="catalogFirstPage__item-text text-fw300">
                                Раздел с банями, беседками, альтанками, гаражами, кухнями, площадками, мангальными зонами и барбекю
                            </p>
                            <a href="javascript:void(0)" className="button-circe">
                                <div className="button-circe__circle">
                                    <span className="icon-right-open-big"></span>
                                </div>
                                <div className="button-circe__text">Ознакомиться с проектами</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CatalogFirstPage;
