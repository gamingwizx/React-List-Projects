import {useRef, useEffect} from "react"
function useOutsideMenuClick(handler, useCapture = false) {
    const ref = useRef()
    useEffect(() => {
        const handleEvent = (e) => {
            if (ref.current && ref.current.contains(e.target)) {
            } else {
                handler()
            }
        }
    
        document.addEventListener("click", handleEvent, useCapture)
    
        return () => {
            document.removeEventListener("click", handleEvent, useCapture)
        }
    }, [handler])
    return ref
}

export default useOutsideMenuClick