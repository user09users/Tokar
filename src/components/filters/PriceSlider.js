import SliderWithLabel from './SliderWithLabel';
import { useContext } from "react";
import FiltersContext from "Context/filters/FiltersContext";


const PriceSlider = () => {

    const { price, setPrice } = useContext(FiltersContext);
    const onChange = (value) => {
        setPrice(value);
    };

    return (
        <ul className="filters__filter-items">
            <li className="filters__filter-item">
                <div className="slider-container">
                    <div className="slider-label min">100000</div>
                    <div className="slider-label max">3000000</div>
                    <SliderWithLabel
                        min={100000}
                        max={3000000}
                        step={10000}
                        value={price}
                        setValue={onChange}
                    />
                </div>
            </li>
        </ul>
    );
};

export default PriceSlider;
