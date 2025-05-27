import ModalProvider from "./modal/ModalProvider";
import FiltersProvider from "./filters/FiltersProvider";
import SearchPanelProvider from "./searchPanel/SearchPanelProvider";

const AppContextProvider = ({ children }) => {
    return (
        <ModalProvider>
            <FiltersProvider>
                <SearchPanelProvider>
                    {children}
                </SearchPanelProvider>
            </FiltersProvider>
        </ModalProvider>
    );
};

export default AppContextProvider;
