import Spinner from "components/spinner/Spinner";
import ErrorMessage from "components/errorMessage/ErrorMessage";

const setCatalog = (process, renderFunction, data, newDataLoading) => {

    switch (process) {
        case 'waiting':
            return <Spinner />;
        case 'loading':
            return newDataLoading ? renderFunction(data) : <Spinner />;
        case 'error':
            return <ErrorMessage />;
        case 'confirmed':
            return data.length > 0
                ? renderFunction(data)
                : <div className="no-results">Ничего не найдено по фильтрам.</div>;
        default:
            throw new Error('Unexpected process state');
    }
}


export default setCatalog;