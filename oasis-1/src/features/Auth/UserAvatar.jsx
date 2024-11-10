import styled from "styled-components";
import Img from "../../ui/Img";
import Label from "../../ui/Label"
import { useNavigate } from "react-router-dom";
const StyledUserAvatar = styled.div`
    display: flex;
    align-items: center;
    gap: var(--spacing);
    padding: calc(var(--spacing) / 2);
`

function UserAvatar() {
    const navigate = useNavigate()
    return (
        <StyledUserAvatar>
            <Img onClick={() => console.log("Hello")} src="/default-user.jpg" borderradius="rounded" size="small"></Img>
            <Label>Ng Pheng Loong</Label>
            
        </StyledUserAvatar>
    )
}

export default UserAvatar