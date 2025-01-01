import {useLocation, useNavigate} from "react-router-dom"
import ContentLayout from "./ui/ContentLayout"
import styled from "styled-components"
import Sidebar from "./ui/Sidebar"
import Header from "./ui/Header"
import useGetUser from "./features/Auth/useGetUser"
import { useAppLayout } from "./context/AppLayoutProvider"
import { useEffect, createContext, useContext } from "react"

const StyledLayout = styled.div`
    width: 100vw;
    box-sizing: border-box;
    min-height: 100vh;
    z-index: 1;
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr 5fr;
    grid-template-areas: 
        "sidebar header"
        "sidebar contentLayout";

    @media(max-width: 800px) {
        grid-template-columns: 1fr;
        grid-template-areas: "header"
                             "contentLayout";
    }
`
const Overlay = styled.div`
    display: ${(props) => props.isdisplay === `true` ? 'block' : 'none'};
    height: 100vh;
    width: 100vw;
    opacity: 0.2;
    background-color: black;
    z-index: 10;
    top: 0;
    position: fixed;
`
export default function AppLayout() {
    const {isSidebarToggled, toggleSidebar} = useAppLayout()

    const handleToggleSidebar = () => {

        toggleSidebar()
    }

    return (
        <>
        <StyledLayout>
            <Sidebar></Sidebar>
            <Header/>
            <ContentLayout/>
        </StyledLayout>
        <Overlay isdisplay={`${isSidebarToggled}`} onClick={() => handleToggleSidebar()}></Overlay>
        
        </>

    )
}