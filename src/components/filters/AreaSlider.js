import { changeArea } from './filtersSlice';
import SliderWithLabel from './SliderWithLabel';
import { useDispatch, useSelector } from "react-redux";

const AreaSlider = () => {
    const dispatch = useDispatch();
    const { area } = useSelector(state => state.filters);

    const onChange = (value) => {
        dispatch(changeArea(value));
    };

    return (
        <ul className="filters__filter-items">
            <li className="filters__filter-item">
                <div className="slider-container">
                    <div className="slider-label min">10</div>
                    <div className="slider-label max">500</div>
                    <SliderWithLabel
                        min={10}
                        max={500}
                        step={1}
                        value={area}
                        setValue={onChange}
                    />
                </div>
            </li>
        </ul>
    );
};

export default AreaSlider;
