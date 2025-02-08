import { useEffect, useState } from "react";

// https://michaelbradvica.com/mimicking-use-computed-in-react

export default function useComputed<T>(callback: () => T): T {
    const [state, setState] = useState<T>(callback());

    useEffect(() => {
        setState(callback);
    }, [callback]);

    return state;
}
