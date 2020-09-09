import { useState, useEffect } from 'react';

export default function usePaginationService(fetch) {
    const [data, setData] = useState([]);
    const [error, setError] = useState([]);

    useEffect(() => {
        fetch(0)
            .then((res) => {
                setData(res);
            })
            .catch((error) => {
                setError(error);
            });
    }, [fetch]);

    const newPage = (e, value) => {
        fetch(value - 1)
            .then((res) => {
                setData(res);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    return { data, error, newPage };
}
