import styled from "styled-components"
import UserAvatar from "../features/Auth/UserAvatar";
import HeaderMenu from "../ui/HeaderMenu";
import useRetrieveUserInfo from "../features/Auth/useRetrieveUserInfo1";
import Loader from "./Spinner";
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
    const {data: userInfo, fetchStatus} = useRetrieveUserInfo()
    if (fetchStatus === 'fetching') return <Loader></Loader>
    const {user_metadata} = userInfo
    const {filename, fullname} = user_metadata
    return (
        <StyledHeader>
            <StyledLayout>
                <UserAvatar filename={filename} fullname={fullname}/>
                <HeaderMenu/>
            </StyledLayout>
        </StyledHeader>
    )
}

export default Header;
