import { useState, useEffect } from "react";

function useFetch(url) {
    // loading
    // error
    // data
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((usersData) => {
                usersData = usersData.map((u) => {
                    return { name: u.name, email: u.email };
                });
                setData(usersData);
            })
            .catch(() => {
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return [data, loading, error];
}

export default useFetch;
