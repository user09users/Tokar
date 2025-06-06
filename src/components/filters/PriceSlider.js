
import { useDispatch, useSelector } from "react-redux";

import SliderWithLabel from './SliderWithLabel';
import { changePrice } from './filtersSlice';



const PriceSlider = () => {
    const dispatch = useDispatch();
    const { price } = useSelector(state => state.filters);

    const onChange = (value) => {
        dispatch(changePrice(value));
    };
    console.log(price)

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
