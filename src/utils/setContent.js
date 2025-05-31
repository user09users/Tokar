import Spinner from "components/spinner/Spinner";
import ErrorMessage from "components/errorMessage/ErrorMessage";

const setContent = (process, renderFunction, data) => {
    switch (process) {
        case 'waiting':
            return <Spinner />;
        case 'loading':
            return <Spinner />;
        case 'error':
            return <ErrorMessage />
        case 'confirmed':
            return renderFunction(data);
        default:
            throw new Error('Unexpected process state');
    }
}
export default setContent;