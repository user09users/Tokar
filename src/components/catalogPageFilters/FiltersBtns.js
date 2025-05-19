import { Component } from "react";

import './search.scss';

class FiltersBtns extends Component {

    render() {
        return (
            <section class="searchPanel">
                <div class="searchPanel__wrapper">
                    <button class="searchPanel__wrapper-item"><span class="icon-filter"></span></button>
                    <button class="searchPanel__wrapper-item searchPanel__wrapper-item-search"><span
                        class="icon-search"></span></button>
                </div>
            </section>
        )
    }
}

export default FiltersBtns;