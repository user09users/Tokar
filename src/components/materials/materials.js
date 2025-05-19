import { Component } from 'react';
import TocarService from 'services/services';
import Spinner from 'components/spinner/Spinner';
import ErrorMessage from 'components/errorMessage/ErrorMessage';
import { initializeSwiper } from 'utils/slider';

import './materials.scss';

class Materials extends Component {
    state = {
        itemsList: [],
        sliderList: [],
        error: false,
        loading: true,
        swiperInitialized: false // track if initialized
    };

    tocarService = TocarService();

    requestData = (link, onSuccess) => {
        this.tocarService.getData(link)
            .then(onSuccess)
            .catch(this.onError);
    };

    handleDataLoaded = (key, data) => {
        this.setState({
            [key]: data,
            loading: false
        });
    };

    onError = () => {
        this.setState({
            error: true,
            loading: false
        });
    };

    componentDidMount() {
        this.requestData('materials', (data) => this.handleDataLoaded('itemsList', data));
        this.requestData('materialsSlider', (data) => this.handleDataLoaded('sliderList', data));
    }

    componentDidUpdate(prevProps, prevState) {
        const { sliderList, swiperInitialized, loading, error } = this.state;

        if (
            !swiperInitialized &&
            !loading &&
            !error &&
            sliderList.length > 0
        ) {
            initializeSwiper('.materials__slider', '.materials__slider-nav');
            this.setState({ swiperInitialized: true }); // prevent reinitialization§    
        }
    }

    renderItems(arr) {
        return (
            <div className="materials__wrapper">
                {arr.map(({ image, alt, title, text, number, numberAlt, id }) => (
                    <div className="materials__item" key={id}>
                        <img className="materials__item-img" src={image} alt={alt} />
                        <h3 className="title-fw400 materials__item-title">{title}</h3>
                        <p className="text-fw300 materials__item-text">{text}</p>
                        <img className="materials__item-number" src={number} alt={numberAlt} />
                    </div>
                ))}
            </div>
        );
    }

    renderSlides(arr) {
        return (
            <div className="swiper-wrapper">
                {arr.map(({ image, alt, id }) => (
                    <div className="swiper-slide" key={id}>
                        <img className="materials__slider-img" src={image} alt={alt} />
                    </div>
                ))}
            </div>
        );
    }

    render() {
        const { itemsList, sliderList, error, loading } = this.state;

        const items = this.renderItems(itemsList);
        const renderedSlider = this.renderSlides(sliderList);

        const errorMessage = error ? <ErrorMessage /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = !(loading || error) ? items : null;
        const slider = !(loading || error) ? renderedSlider : null;

        return (
            <section className="materials">
                <div className="container">
                    <h2 className="title-fw800">Из чего состоят наши строения?</h2>

                    {errorMessage}
                    {spinner}
                    {content}

                    <div className="materials__slider-wrapper">
                        <div className="swiper materials__slider">
                            <div className="materials__nav">
                                <span className="materials__slider-prev icon-left-big"></span>
                                <div className="swiper-pagination materials__slider-nav"></div>
                                <span className="materials__slider-next icon-right-big"></span>
                            </div>
                            {slider}
                        </div>
                    </div>

                    <div className="button-mix materials__buttons">
                        <a href="#" className="button-big">Перейти в каталог домов</a>
                        <a href="#" className="button-circe">
                            <div className="button-circe__circle">
                                <span className="icon-right-open-big"></span>
                            </div>
                            <div className="button-circe__text">Каталог бань</div>
                        </a>
                    </div>
                </div>
            </section>
        );
    }
}

export default Materials;
