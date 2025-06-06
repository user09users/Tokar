import Spinner from 'components/spinner/Spinner';
import ErrorMessage from 'components/errorMessage/ErrorMessage';

const QueryWrapper = ({ isLoading, isError, data, children }) => {
    if (isLoading) return <Spinner />;
    if (isError) return <ErrorMessage />;
    if (!data || (Array.isArray(data) && data.length === 0)) return null; // или <p>Нет результатов</p>

    return children;
};

export default QueryWrapper;
