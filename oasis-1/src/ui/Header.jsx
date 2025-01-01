import styled from "styled-components"
import UserAvatar from "../features/Auth/UserAvatar";
import HeaderMenu from "../ui/HeaderMenu";
import useRetrieveUserInfo from "../features/Auth/useRetrieveUserInfo1";
import Loader from "./Spinner";
import { useAppLayout } from "../context/AppLayoutProvider";
import { HiBars3 } from "react-icons/hi2";
import { useState } from "react";

const StyledHeader = styled.div`
    grid-area: header;
    background-color: white;    
    display: flex;
    gap: var(--spacing);
    align-items: center;
    `
    
    const StyledLayout = styled.div`
    width: 95%;
    display: flex;
    justify-content: flex-end;
`

const StyledSidebarButton = styled.p`

    @media(max-width: 800px) {
        align-self: flex-start;
        padding: 0 var(--spacing);
        font-size: var(--fs-9);
    }
`

function Header() {
    const {toggleSidebar} = useAppLayout()
    const [windowSize, setWindowSize] = useState(() => {
        return window.innerWidth
    })
    const {data: userInfo, fetchStatus} = useRetrieveUserInfo()

    if (fetchStatus === 'fetching') return <Loader></Loader>
    const {user_metadata} = userInfo
    const {filename, fullname} = user_metadata

    return (
        <StyledHeader>
            <StyledSidebarButton>{windowSize < 800 && <HiBars3 onClick={() => toggleSidebar()}/>}</StyledSidebarButton>
            <StyledLayout>
                <UserAvatar filename={filename} fullname={fullname}/>
                <HeaderMenu/>
            </StyledLayout>
        </StyledHeader>
    )
}

export default Header;
