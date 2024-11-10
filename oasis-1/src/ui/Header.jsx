import styled from "styled-components"
import UserAvatar from "../features/Auth/UserAvatar";
import HeaderMenu from "../ui/HeaderMenu";
const StyledHeader = styled.div`
    grid-area: header;
    background-color: white;    
    display: flex;
    gap: var(--spacing);
`

const StyledLayout = styled.div`
    width: 95%;
    display: flex;
    justify-content: flex-end;
`

function Header() {
    return (
        <StyledHeader>
            <StyledLayout>
                <UserAvatar/>
                <HeaderMenu/>
            </StyledLayout>
        </StyledHeader>
    )
}

export default Header;
