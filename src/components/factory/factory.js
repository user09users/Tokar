import './factory.scss';

const Factory = () => {
    return (
        <section className="factory">
            <div className="container">
                <h2 className="factory__title title-fw700">Фотографии производства</h2>
                <div className="factory__wrapper">
                    <img
                        src="/img/factory/factory-1.jpeg"
                        alt="factory-1"
                        className="factory__img"
                    />
                    <img
                        src="/img/factory/factory-2.jpeg"
                        alt="factory-2"
                        className="factory__img"
                    />
                    <img
                        src="/img/factory/factory-3.jpeg"
                        alt="factory-3"
                        className="factory__img"
                    />
                </div>
            </div>
        </section>
    );
};

export default Factory;
