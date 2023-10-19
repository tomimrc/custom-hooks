import { useEffect, useState } from "react";



export const useFetch = (url) => {
    
const [estado, setEstado] = useState({
    data:null,
    isLoading: true,
    error:null
});

    const getFetch = async() => {
        setEstado({
            ...estado,
            isLoading:"hola"
        })

        const resp = await fetch(url);
        const data = await resp.json();

        setEstado({
            data,
            isLoading: false,
            error:null
        })
    }
    
    useEffect(() => {
        getFetch()

    }, [url]);
    
    
    
    return {
        data:estado.data,
        isLoading:estado.isLoading,
        error:estado.error
    };
}
