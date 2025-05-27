import { useEffect, useState } from "react";
import './processes.scss';
import useTocarService from "services/services";
import Spinner from 'components/spinner/Spinner';
import ErrorMessage from 'components/errorMessage/ErrorMessage';

const Processes = () => {
    const { loading, error, getData } = useTocarService();
    const [itemsList, setItemsList] = useState([]);
    const [openIndexes, setOpenIndexes] = useState([]);  // <-- multiple open

    useEffect(() => {
        getData('processes').then(setItemsList);
    }, []);

    const toggleAccordion = (index) => {
        setOpenIndexes(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)   // close it
                : [...prev, index]                 // open it
        );
    };

    if (loading) return <Spinner />;
    if (error) return <ErrorMessage message={error} />;

    return (
        <section className="processes" id="work-processes">
            <div className="container">
                <h2 className="processes__title title-fw800">Процесс работы</h2>
                <div className="processes__wrapper">
                    {itemsList.map((item, index) => {
                        const isOpen = openIndexes.includes(index);

                        return (
                            <div className="processes__block" key={item.id}>
                                <div className="processes__block-left">
                                    <div
                                        className={`processes__block-header ${isOpen ? 'active' : ''}`}
                                        onClick={() => toggleAccordion(index)}
                                    >
                                        <div>{item.title}</div>
                                        <span className="icon-down-open processes__arrow"></span>
                                    </div>
                                    <div
                                        className={`processes__block-subtitle title-fw700 ${isOpen ? 'active' : ''}`}
                                    >
                                        {item.subtitle}
                                    </div>
                                </div>
                                <ul className={`processes__block-content ${isOpen ? 'active' : ''}`} id="horizontal">
                                    {item.steps.map((step, i) => (
                                        <li className="processes__item" key={i}>
                                            <img
                                                className="processes__item-img"
                                                src={step.image}
                                                alt={step.alt}
                                            />
                                            <div className="processes__item-text">{step.text}</div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Processes;
