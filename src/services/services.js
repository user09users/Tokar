const TocarService = () => {
    const postData = async (url, data) => {
        try {
            let res = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            if (!res.ok) {
                throw new Error(`Failed to post data to ${url}, status = ${res.status}`);
            }

            const json = await res.json();

            if (!json) {
                throw new Error('No response data');
            }

            return json;

        } catch (error) {
            console.error('Error in postData:', error);
            throw error;
        }
    };

    const getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    const getData = async (url) => {
        const res = await getResource(`http://localhost:5000/${url}`);

        return res;
    };


    const getCatalog = async (url, start = 0, limit = 4) => {
        const res = await getResource(`http://localhost:5000/${url}?_start=${start}&_limit=${limit}`);

        return res;
    };

    return {
        postData,
        getData,
        getCatalog
    };
};

export default TocarService;
