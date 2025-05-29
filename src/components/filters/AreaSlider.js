import SliderWithLabel from './SliderWithLabel';
import { useContext } from "react";
import FiltersContext from "context/filters/FiltersContext";

const AreaSlider = () => {

    const { area, setArea } = useContext(FiltersContext);

    const onChange = (value) => {
        setArea(value);
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
