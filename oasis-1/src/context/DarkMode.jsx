import { useState, useEffect, createContext, useContext } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components"

const DarkModeContext = createContext()

// const StyledDarkMode = styled.div`
//     filter: invert(100%);
// `

function DarkModeProvider({children}) {
    const [isDarkMode, setIsDarkMode] = useState(false)
    const toggleDarkMode = () => setIsDarkMode(!isDarkMode)

    if (isDarkMode) {
        document.documentElement.classList.add("dark-mode")
        document.documentElement.classList.remove("light-mode")
    } else {
        document.documentElement.classList.add("light-mode")
        document.documentElement.classList.remove("dark-mode")
    }
    
    return (
        <DarkModeContext.Provider value={{isDarkMode, toggleDarkMode}} >
            {children}
        </DarkModeContext.Provider>
    )
}

function useDarkMode() {
    const context = useContext(DarkModeContext)
    if (context === undefined) {
        throw new Error("Dark Mode Context is used outside of Dark Mode Provider")
    }
    return context
}

export {DarkModeProvider, useDarkMode }