import Spinner from 'components/spinner/Spinner';
import ErrorMessage from 'components/errorMessage/ErrorMessage';

const QueryWrapper = ({ isLoading, isFetching, isError, data, children }) => {
    if (isLoading || isFetching) return <Spinner />;
    if (isError) return <ErrorMessage />;
    if (!data || (Array.isArray(data) && data.length === 0)) return <div>Ничего не найдено.</div>;

    // Render children when data is ready
    return children;
};

export default QueryWrapper;
