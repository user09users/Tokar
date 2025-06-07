import QueryWrapper from 'utils/QueryWrapper';
import './factory.scss';
import { useGetFactoryPhotosQuery } from 'api/apiSlice';
const Factory = () => {

    const {
        data: factoryPhotos = [],
        isLoading,
        isError,
        isFetching
    } = useGetFactoryPhotosQuery();

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
                    <QueryWrapper
                        isLoading={isLoading}
                        isFetching={isFetching}
                        isError={isError}
                        data={factoryPhotos}>

                        {renderPhotos(factoryPhotos)}
                    </QueryWrapper>
                </div>
            </div>
        </section>
    );
};

export default Factory;
