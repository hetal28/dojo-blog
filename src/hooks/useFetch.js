import { useState, useEffect } from "react";

const useFetch = (url) => {
    const[data, setData] = useState(null);
    const[isLoading, setIsLoading] = useState(true);
    const[error, setError] = useState(null);

    useEffect(() => {

        const abortCont = new AbortController();
        const signal = abortCont.signal;

        console.log(url);
        setTimeout(() => {
            fetch(url, {signal})
            .then(res => {
                if(res.status === 404){
                    throw Error('could not fetch the data for that resource');
                }
                if(res.status === 400){
                    throw Error("URL to fetch the resource is not available");
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsLoading(false);
                setError(null);
            })
            .catch((err) => {
                
                if(err.name === 'AbortError'){
                    console.log('Fetch Aborted');
                }else{
                    setIsLoading(false);
                    setError(err.message);
                }
            })
        }, 3000);

        return () => {
            abortCont.abort();
        }
    }, [url]);

    return {data, isLoading, error}
}

export default useFetch;