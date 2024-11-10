import { useEffect, useRef } from "react"
function useOutsideModalClick(handler, useCapture = true) {
    const ref = useRef()
    useEffect(() => {
        const handleEvent = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
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

export default useOutsideModalClick