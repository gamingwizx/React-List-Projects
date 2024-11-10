import {useLocation, Outlet} from "react-router-dom"
import ContentLayout from "./ui/ContentLayout"
import styled from "styled-components"
import Sidebar from "./ui/Sidebar"
import Header from "./ui/Header"
import Test from "./ui/Test"

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
    background-color: sidebar
`
export default function AppLayout() {
    const location = useLocation()
    return (
        <StyledLayout>
            <Sidebar></Sidebar>
            <Header/>
            <ContentLayout />
        </StyledLayout>
    )
}