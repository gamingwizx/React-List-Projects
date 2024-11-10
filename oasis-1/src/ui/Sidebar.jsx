import styled from "styled-components";
import Img from "./Img"
import { useNavigate } from "react-router-dom"; 
import Label from "./Label"
import SidebarRow from "./SidebarRow"
import {
    HiOutlineHome,
    HiOutlineBookOpen,
    HiOutlineHomeModern,
    HiOutlineUsers,
    HiOutlineCog6Tooth
} from "react-icons/hi2"
const StyledSidebar = styled.nav`
    grid-area: sidebar;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing);
    padding: var(--spacing) calc(var(--spacing) / 2);
    
`



function Sidebar() {
    const navigate = useNavigate()
    return (
        <StyledSidebar>
            <Img src="/logo-light.png"></Img>
            <SidebarRow onClick={() => navigate("/home/dashboard")}>
                <HiOutlineHome />
                <Label fs="medium" fw="bold">Home</Label>
            </SidebarRow>
            <SidebarRow onClick={() => navigate("/home/booking")}>
                <HiOutlineBookOpen />
                <Label fs="medium" fw="bold">Bookings</Label>
            </SidebarRow>
            <SidebarRow onClick={() => navigate("/home/cabin")}>
                <HiOutlineHomeModern />
                <Label fs="medium" fw="bold">Cabins</Label>
            </SidebarRow>
            <SidebarRow onClick={() => navigate("/home/user")}>
                <HiOutlineUsers />
                <Label fs="medium" fw="bold">Users</Label>
            </SidebarRow>
            <SidebarRow onClick={() => navigate("/home/settings")}>
                <HiOutlineCog6Tooth />
                <Label fs="medium" fw="bold">Settings</Label>
            </SidebarRow>
        </StyledSidebar>

    )
}

export default Sidebar