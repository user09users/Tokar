import { Component } from 'react';
import TocarService from 'services/services';
import Spinner from 'components/spinner/Spinner';
import ErrorMessage from 'components/errorMessage/ErrorMessage';


import './aboutStats.scss';

class AboutStats extends Component {

    state = {
        itemsList: [],
        loading: true,
        error: false
    }


    tocarService = TocarService();

    componentDidMount() {
        this.tocarService.getData('aboutStats')
            .then(this.onItemsLoaded)
            .catch(this.onError);
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        });
    }

    onItemsLoaded = (itemsList) => {
        this.setState({
            itemsList,
            loading: false
        });
    }


    renderItems(arr) {
        const items = arr.map(item => {
            const { titlePrefix, titleSuffix, titleHighlight, text, id } = item;

            return (
                <div className="about__item" key={id}>
                    <div className="about__item-title">
                        {titlePrefix}  <span className="title-fw400"> {titleHighlight}</span>  {titleSuffix}
                    </div>
                    <span className="divider"></span>
                    <p className="about__item-text text-fw300"> {text}</p>
                </div>
            )
        });

        return (
            <div className="about__items">
                {items}
            </div>
        )
    }



    render() {

        const { itemsList, error, loading } = this.state;

        const items = this.renderItems(itemsList);

        const errorMessage = error ? <ErrorMessage /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = !(loading || error) ? items : null;

        return (

            <section className="about">
                {errorMessage}
                <div className="container">
                    <h2 className="title-fw800">О компании TokarMebel</h2>
                    <div className="about__wrapper">
                        {/* Updated image paths to use /img/ instead of /src/img/ */}
                        <img src="/img/about.bg.png" alt="about-bg" className="about__bg" />
                        <img src="/img/about-man.png" alt="about-man" className="about__man" />
                        <div className="about__label">
                            <div className="about__label-block">
                                {/* Updated icon path to use /icons/ instead of /src/icons/ */}
                                <img src="/icons/quote.svg" alt="quote" className="about__label-img" />
                            </div>
                            <div className="about__label-block">
                                <h3 className="about__label-name">Точилов Александр Николаевич</h3>
                                <p className="about__label-text text-fw300">
                                    Цитата о компании, пару слов от самого лица компании. Цитата о компании, пару слов от самого
                                    лица компании.
                                </p>
                            </div>
                        </div>
                    </div>

                    {errorMessage}
                    {spinner}
                    {content}

                    <div className="button-mix materials__buttons about__btns">
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
};

export default AboutStats;
