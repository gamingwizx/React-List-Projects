import styled from "styled-components";
import LoginLayout from "./LoginLayout";
import Img from "../../ui/Img";
const StyledLogin = styled.div`
    display: flex;
    align-items: center;
    gap: var(--spacing);
    flex-direction: column;
    width: 50%;

`
function Login() {
    return (
        <StyledLogin>
            <Img src="/logo-light.png"></Img>
            <LoginLayout></LoginLayout>
        </StyledLogin>
    )
}

export default Login