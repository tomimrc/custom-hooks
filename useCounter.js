import { useState } from "react";

export const useCounter = (valor = 10) => {
    
    const [counter, setCounter] = useState(valor)

    const increment = ( value = 1 ) => {
        setCounter(counter + value)
    }
    const decrement = (value) => {
        counter >0 && setCounter(counter - value)
    }
    const reset = () => {
        setCounter(valor)
    }

    return{ counter, increment, decrement, reset}

}