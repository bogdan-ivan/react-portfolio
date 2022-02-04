import { useEffect, useState } from "react";

const useCounter = (ascending = true, step = 1) => {
    const [counter, setCounter] = useState(0);
    let increment;
    if (ascending) {
        increment = step;
    } else {
        increment = -step;
    }
    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prevCounter) => prevCounter + increment);
        }, 1000);

        return () => clearInterval(interval);
    }, [increment]);

    return counter;
}

export default useCounter;