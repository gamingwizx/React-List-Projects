import { useLayoutEffect, useState } from "react";
export default function useWindowSize() {
    const [size, setSize] = useState({})
    useLayoutEffect(() => {
        console.log("HEllo")
        function updateSize() {
            setSize({width: window.innerWidth, height: window.innerHeight})
        }
        window.addEventListener("resize", updateSize)
        updateSize()
        return window.removeEventListener("resize", updateSize)
    },[])
    return size
}