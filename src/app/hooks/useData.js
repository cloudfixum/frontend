import { useState, useEffect } from 'react';

export default function useData(fetch) {
    const [data, setData] = useState([]);
    const [error, setError] = useState([]);

    useEffect(() => {
        fetch()
            .then((res) => {
                setData(res);
            })
            .catch((error) => {
                setError(error);
            });
    }, [fetch]);

    return { data, error };
}
