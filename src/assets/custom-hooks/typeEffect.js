import { useState,useEffect,useRef } from "react";

export function useTypeEffect(text, duration,delay) {
    const [currentPosition, setCurrentPosition] = useState(0);
    const currentPositionRef = useRef(0);

    useEffect(() => {
       const newInterval = setInterval(() => {
            setCurrentPosition((value) => value +1)
            currentPositionRef.current = currentPositionRef.current +1;
            if(currentPositionRef.current > text.length) {
                clearInterval(newInterval)
            }


        },duration,delay)
        return () => {
            clearInterval(newInterval);
            currentPositionRef.current = 0;
            setCurrentPosition(0);
        }
    },[duration,text,delay])

    return (text.substring(0, currentPosition))
}
