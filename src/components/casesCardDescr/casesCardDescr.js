import './casesCardDescr.scss';

const CasesCardDescr = ({ itemDescr }) => {
    if (!itemDescr) return null;

    const { intro, description, features } = itemDescr;

    return (
        <section className="casesCardDescr">
            <div className="container">
                <h2 className="casesCardDescr title-fw800">Характеристики:</h2>

                <div className="casesCardDescr__intro">
                    <div className="casesCardDescr__intro-block">
                        <img src="/icons/characteristics/technologies.svg" alt="Технологии" />
                        <div>
                            Технологии: <br />
                            <span>{intro.technologies}</span>
                        </div>
                    </div>
                    <div className="casesCardDescr__intro-block">
                        <img src="/icons/characteristics/Clock.svg" alt="Сроки строительства" />
                        <div>
                            Сроки строительства: <br />
                            <span>{intro.constructionTime}</span>
                        </div>
                    </div>
                </div>

                <div className="casesCardDescr__descr-ul">
                    {description.map(({ label, value }) => (
                        <div className="casesCardDescr__descr-item" key={label}>
                            <div>{label}</div>
                            <span>{value}</span>
                        </div>
                    ))}
                </div>

                <ul className="casesCardDescr__images-ul">
                    {features.map(({ icon, alt, text }) => (
                        <li className="casesCardDescr__images-item" key={alt || text}>
                            <img src={icon} alt={alt} />
                            <div>{text}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default CasesCardDescr;
