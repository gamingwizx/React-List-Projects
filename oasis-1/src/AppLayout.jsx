import {useLocation, useNavigate} from "react-router-dom"
import ContentLayout from "./ui/ContentLayout"
import styled from "styled-components"
import Sidebar from "./ui/Sidebar"
import Header from "./ui/Header"
import useGetUser from "./features/Auth/useGetUser"
import { useEffect } from "react"

const StyledLayout = styled.div`
    width: 99vw;
    box-sizing: border-box;
    min-height: 100vh;
    z-index: 1;
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr 5fr;
    grid-template-areas: 
        "sidebar header"
        "sidebar contentLayout";
`
export default function AppLayout() {
    const {data: userInfo, fetchStatus} = useGetUser()
    const navigate = useNavigate()
    if (fetchStatus === "fetching") return <Loader></Loader>

    return (
        <StyledLayout>
            <Sidebar></Sidebar>
            <Header/>
            <ContentLayout />
        </StyledLayout>
    )
}