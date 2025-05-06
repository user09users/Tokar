import "purecss/build/grids-min.css";
import "purecss/build/grids-responsive-min.css";

import useTocarServices from "../services/services";

import hamburger from "./hamburger";
import { sliders } from "./slider";
import filters from "./filters";
import sliderRange from "./sliderRange";
import cardPageSlider from "./cardPageSlider";
import accordion from "./accordion";
import modal from "./modal";
import catalogCards from "./catalog";
import works from "./works";
import lastStates from "./lastStates";
import reason from "./reason";
import materials from "./materials";
import ceoSlider from "./ceoSlider";
import aboutStats from "./aboutStats";
import variations from "./variations";
import footer from "./footer";
import catalogFirstPage from "./catalogFirstPage";
import processes from "./processes";
import characteristics from "./characteristics";
import factoryPhotos from "./factoryPhotos";
import menu from "./menu";
import social from "./social";
import contacts from "./contacts";
import details from "./details";
import itemDescr from "./itemDescr";
import casesPhotos from "./casesPhotos";

document.addEventListener('DOMContentLoaded', () => {
    useTocarServices();

    hamburger();
    sliders();
    filters();
    sliderRange();
    cardPageSlider();
    accordion();
    modal();
    catalogCards();
    works();
    lastStates();
    reason();
    materials();
    ceoSlider();
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

