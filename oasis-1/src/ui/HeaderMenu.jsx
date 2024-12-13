import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
    HiOutlineUser,
    HiOutlineMoon,
    HiArrowRightOnRectangle
} from "react-icons/hi2";

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
    const navigate = useNavigate()
    const [isDarkMode, setIsDarkMode] = useState(false)
    const imageElements = document.querySelectorAll("img")

    if (isDarkMode) {
        root.style.setProperty("filter", "invert(0%)")
        setPropertyToElements(imageElements, "filter", "invert(100%)")
    } else {
        root.style.setProperty("filter", "invert(100%)")
        setPropertyToElements(imageElements, "filter", "invert(0%)")
    }


    return (
        <StyledHeaderMenu className="avatar-image-parent">
            <HiOutlineUser onClick={() => navigate("/home/auth/update")}/>
            <HiOutlineMoon onClick={() => setIsDarkMode(!isDarkMode)}/>
            <HiArrowRightOnRectangle />
        </StyledHeaderMenu>
    )
}

export default HeaderMenu