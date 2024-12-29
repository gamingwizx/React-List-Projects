import { createContext, useContext, useState } from "react";
import styled from "styled-components";
import useOutsideMenuClick from "../hooks/useOutsideMenuClick";

const StyledToggle = styled.button`
    background-color: inherit;

    &:focus,
    &:hover,
    &:active{
        border: none;
        outline: 0;
        box-shadow:none;
}
`

const StyledList = styled.div`
`
const StyledListLayout = styled.div`
    position: absolute;
    right: ${(props) => props.position.x}px;
    top: ${(props) => props.position.y}px;
`
const StyledButton = styled.button`
    display: flex;
    align-items: center;
    width: 100%;
    gap: var(--spacing);
    & > *:first-child {
        flex-basis: 10%;
        }
        & > *:last-child {
        text-align: left;
        white-space: nowrap;
        flex-basis: 90%;
    }

`
const MenuContext = createContext("")

function Menu({children}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [position, setPosition] = useState({})
    const closeMenu = () => {
        setIsMenuOpen(false)
    }
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    return (
    <MenuContext.Provider value={{closeMenu, toggleMenu, isMenuOpen, position, setPosition}}>
        {children}
    </MenuContext.Provider>)
}

function Toggle({icon}) {
    const {toggleMenu, setPosition, closeMenu} = useContext(MenuContext)
    const ref = useOutsideMenuClick(closeMenu)
    const handleToggleMenu = (e) => {
        const size = e.target.closest("button").getBoundingClientRect()
        setPosition({
            x: window.innerWidth - size.width - size.x,
            y: size.y + size.height + 8
        })
        toggleMenu()
    }
    return ( 
        <StyledToggle ref={ref} onClick={handleToggleMenu}>
            {icon}
        </StyledToggle>
    )
}

function List({children}) {
    const {isMenuOpen, position} = useContext(MenuContext)
    return (
        <StyledList>
            {isMenuOpen && (<StyledListLayout position={position}>
                {children}
            </StyledListLayout>)}
        </StyledList>
    )
}

Menu.Toggle = Toggle
Menu.List = List
Menu.Button = StyledButton

export default Menu