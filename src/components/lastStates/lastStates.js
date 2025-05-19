import { Component } from 'react';
import TocarService from 'services/services';
import Spinner from 'components/spinner/Spinner';
import ErrorMessage from 'components/errorMessage/ErrorMessage';
import { initializeSwiper } from 'utils/slider';

import './lastStates.scss';

class LastStates extends Component {

    state = {
        itemsList: [],
        loading: true,
        error: false,
        swiperInitialized: false
    }

    tocarService = TocarService();


    componentDidUpdate(prevProps, prevState) {
        const { sliderList, swiperInitialized, loading, error } = this.state;

        if (
            !swiperInitialized &&
            !loading &&
            !error
        ) {
            initializeSwiper(
                '.lastStates__slider',
                '.lastStates__slider-nav',
                {
                    breakpoints: {
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 3,
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1900: {
                            spaceBetween: 35,
                        },
                    },
                }
            );
            this.setState({ swiperInitialized: true }); // prevent reinitialization
        }
    }

    componentDidMount() {
        this.tocarService.getData('lastStates')
            .then(this.onItemsLoaded)
            .catch(this.onError)
    }

    onItemsLoaded = (itemsList) => {
        this.setState({
            itemsList,
            loading: false
        });
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        });
    }


    renderItems(arr) {
        const items = arr.map(item => {
            const { label, title, description, image, alt, id } = item;

            return (
                <div className="swiper-slide lastStates__item" key={id}>
                    <div className="lastStates__item-img">
                        <div className="lastStates__item-label">{label}</div>
                        <img src={image} alt={alt} />
                    </div>
                    <div className="lastStates__item-content">
                        <h3 className="lastStates__item-title">
                            {title}
                        </h3>
                        <p className="text-fw300">
                            {description}
                        </p>
                    </div>
                </div>
            )
        });
        return (
            <div className="swiper-wrapper lastStates__slider-items">
                {items}
            </div>
        )
    }
    render() {

        const { itemsList, loading, error } = this.state;

        const items = this.renderItems(itemsList);

        const spinner = loading ? <Spinner /> : null;
        const errorMessage = error ? <ErrorMessage /> : null;
        const content = !(loading || error) ? items : null;

        return (
            <section className="lastStates">
                <div className="container">
                    <h2 className="title-fw700">Последние статьи</h2>

                    <div className="lastStates__slider-wrapper">
                        <div className="swiper lastStates__slider">
                            <div className="lastStates__nav">
                                <span className="lastStates__slider-prev icon-left-big"></span>
                                <div className="swiper-pagination lastStates__slider-nav"></div>
                                <span className="lastStates__slider-next icon-right-big"></span>
                            </div>
                            {spinner}
                            {errorMessage}
                            {content}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
};

export default LastStates;
