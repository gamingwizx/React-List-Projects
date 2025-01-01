import {createContext, useContext, useState} from "react"
const AppLayoutContext = createContext()

function AppLayoutProvider({children}) {
    const [isSidebarToggled, setIsSidebarToggled] = useState(false)
    const toggleSidebar = () => {
        setIsSidebarToggled(!isSidebarToggled)
    }


    return <AppLayoutContext.Provider value={{isSidebarToggled, toggleSidebar}}>{children}</AppLayoutContext.Provider>
}

const useAppLayout = () => {
    const context = useContext(AppLayoutContext)
    if (!context) {
        throw new Error("AppLayout Context is used outside of Applayout component!")
    }
    return context
}

export {AppLayoutProvider, useAppLayout}