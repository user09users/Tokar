
import { lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetFilters } from "components/filters/filtersSlice";

const Page404 = lazy(() => import('../pages/404'));
const MainPage = lazy(() => import('../pages/MainPage'));
const CatalogPage = lazy(() => import('../pages/CatalogPage'));
const CasesPage = lazy(() => import('../pages/CasesPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));
const CardPage = lazy(() => import('../pages/CardPage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const WorksPage = lazy(() => import('../pages/WorksPage'));


const AppRoutesWrapper = () => {
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!location.pathname.startsWith('/catalog')) {
            dispatch(resetFilters());
        }
    }, [location.pathname]);

    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/:cardId" element={<CardPage />} />
            <Route path="/cases/:casesCardId" element={<CasesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/works" element={<WorksPage />} />
            <Route path="/404" element={<Page404 />} />
            <Route path="*" element={<Page404 />} />
        </Routes>
    );
};

export default AppRoutesWrapper;
