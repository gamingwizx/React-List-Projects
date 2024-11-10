import styled from "styled-components"
import { useNavigate } from "react-router-dom";
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



function HeaderMenu() {
    const navigate = useNavigate()
    return (
        <StyledHeaderMenu>
            <HiOutlineUser onClick={() => navigate("/home/auth/update")}/>
            <HiOutlineMoon />
            <HiArrowRightOnRectangle />
        </StyledHeaderMenu>
    )
}

export default HeaderMenu