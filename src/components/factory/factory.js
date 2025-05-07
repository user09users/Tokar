import useTocarServices from "../../services/services";

const factory = () => {
    if (window.location.pathname === '/about' || window.location.pathname === '/about.html') {
        const { getData } = useTocarServices();

        getData('http://localhost:3000/factoryPhotos')
            .then(data => {

                data.forEach(({ src, alt }) => {
                    const factoryPhotosImg = document.createElement('img'); // Fixed typo
                    factoryPhotosImg.classList.add('factory__img');

                    // Adjust path if needed
                    factoryPhotosImg.src = src;
                    factoryPhotosImg.alt = alt;

                    document.querySelector('.factory__wrapper').appendChild(factoryPhotosImg);
                });
            });
    }
};

export default factory;
