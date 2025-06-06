import ModalProvider from "./modal/ModalProvider";
import SearchPanelProvider from "./searchPanel/SearchPanelProvider";

const AppContextsProvider = ({ children }) => {
    return (
        <ModalProvider>
            <SearchPanelProvider>
                {children}
            </SearchPanelProvider>
        </ModalProvider>
    );
};

export default AppContextsProvider;
