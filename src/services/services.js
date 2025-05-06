const useTocarServices = () => {
    const postData = async (url, data) => {
        try {
            // Stringify the data object before sending in the body
            let res = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)  // Convert data to a JSON string
            });

            // Check if the response is okay (status code 2xx)
            if (!res.ok) {
                throw new Error(`Failed to post data to ${url}, status = ${res.status}`);
            }

            // Check if the response body is empty
            const json = await res.json();

            // If the response body is empty, handle it
            if (!json) {
                throw new Error('No response data');
            }

            return json;

        } catch (error) {
            console.error('Error in postData:', error);
            throw error;
        }
    };

    const getData = async (url) => {
        try {
            const res = await fetch(url);

            if (!res.ok) {
                throw new Error(`Could not fetch ${url}, status = ${res.status}`);
            }

            const json = await res.json();
            return json;

        } catch (error) {
            console.error('Error in getData:', error);
            throw error;
        }
    };

    return {
        postData,
        getData
    };
};

export default useTocarServices;
