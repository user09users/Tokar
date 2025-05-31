import { useState, useEffect } from 'react';

import setContent from 'utils/setContent';
import useTocarService from 'services/TocarService';
import './factory.scss';

const Factory = () => {

    const [photos, setPhotos] = useState([]);

    const { clearError, getData, process, setProcess } = useTocarService();

    useEffect(() => {
        clearError();
        getData('factoryPhotos')
            .then(res => setPhotos(res))
            .then(() => setProcess('confirmed'));
    }, []);

    const renderPhotos = (photos) => {
        return (
            photos.map(({ src, alt, id }) => {
                return (
                    <img
                        src={src}
                        alt={alt}
                        className="factory__img"
                        key={id}
                    />
                )
            })
        )
    }

    return (
        <section className="factory">
            <div className="container">
                <h2 className="factory__title title-fw700">Фотографии производства</h2>
                <div className="factory__wrapper">
                    {setContent(process, renderPhotos, photos)}
                </div>
            </div>
        </section>
    );
};

export default Factory;
