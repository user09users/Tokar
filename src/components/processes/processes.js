import { useState } from 'react';

import QueryWrapper from 'utils/QueryWrapper';
import { useGetProcessesQuery } from 'api/apiSlice';

import './processes.scss';

const Processes = () => {

    const {
        data: processes = [],
        isFetching,
        isLoading,
        isError
    } = useGetProcessesQuery();

    const [openIndexes, setOpenIndexes] = useState([]);

    const toggleAccordion = (index) => {
        setOpenIndexes(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };


    const renderProcesses = (items) => {
        return (
            <div className="processes__wrapper">
                {items.map((item, index) => {
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
        )
    }

    return (
        <section className="processes" id="work-processes">
            <div className="container">
                <h2 className="processes__title title-fw800">Процесс работы</h2>
                <QueryWrapper
                    isLoading={isLoading}
                    isFetching={isFetching}
                    isError={isError}
                    data={processes}>

                    {renderProcesses(processes)}
                </QueryWrapper>
            </div>
        </section>
    );
};

export default Processes;
