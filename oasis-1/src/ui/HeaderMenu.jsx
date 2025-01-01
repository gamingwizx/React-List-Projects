import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
    HiOutlineUser,
    HiOutlineMoon,
    HiArrowRightOnRectangle
} from "react-icons/hi2";
import useLogout from "../features/Auth/useLogout";
import { useDarkMode } from "../context/DarkMode";

const StyledHeaderMenu = styled.div`
    display: flex;
    align-items: center;
    gap: var(--spacing);
`

const setPropertyToElements = (elements, property, value) => {
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.setProperty(property, value);
    }
} 

function HeaderMenu() {
    const {logout, isLoading} = useLogout()
    const navigate = useNavigate()
    const {toggleDarkMode} = useDarkMode()

    const handleLogout = () => {
        logout()
    }

    return (
        <StyledHeaderMenu className="avatar-image-parent">
            <HiOutlineUser onClick={() => navigate("/home/auth/update")}/>
            <HiOutlineMoon onClick={() => toggleDarkMode()}/>
            <HiArrowRightOnRectangle onClick={() => handleLogout()}/>
        </StyledHeaderMenu>
    )
}

export default HeaderMenu