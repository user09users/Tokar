import "purecss/build/grids-min.css";
import "purecss/build/grids-responsive-min.css";

import useTocarServices from "../services/services";

import accordion from "../../utils/accordion";
import { sliders } from "../../utils/slider";

import sliderRange from "../components/filters/sliderRange";
import cardPageSlider from "../components/cardPageSlider/cardPageSlider";
import modal from "/src/components/modal/modal.js";
import catalogSecondPage from "../components/catalogSecondPage/catalog";
import works from "../components/works/works";
import footer from "../components/footer/footer";
import lastStates from "../components/lastStates/lastStates";
import reason from "../components/reason/reason";
import materials from "../components/materials/materials";
import ceo from "../components/ceo/ceoSlider";
import aboutStats from "../components/aboutStats/aboutStats";
import variations from "../components/variations/variations";
import catalogFirstPage from "../components/catalogFirstPage/catalogFirstPage";
import processes from "../components/processes/processes";
import characteristics from "../components/characteristics/characteristics";
import factoryPhotos from "../components/factory/factory";
import menu from "/src/components/menu/menu.js";
import social from "../components/social/social";
import contacts from "../components/contacts/contacts";
import details from "../components/details/details";
import itemDescr from "../components/itemDescr/itemDescr";
import casesPhotos from "../components/casesPhotos/casesPhotos";

document.addEventListener('DOMContentLoaded', () => {
    useTocarServices();

    accordion();
    sliders();

    sliderRange();
    cardPageSlider();
    modal();
    catalogSecondPage();
    works();
    lastStates();
    reason();
    materials();
    ceo();
    aboutStats();
    variations();
    footer();
    catalogFirstPage();
    processes();
    characteristics();
    factoryPhotos();
    menu();
    social();
    contacts();
    details();
    itemDescr();
    casesPhotos();

});

import "/src/sass/style.scss";

