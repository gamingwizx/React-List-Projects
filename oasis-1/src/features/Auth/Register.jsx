import RegisterLayout from "./RegisterLayout"
import Img from "../../ui/Img"
import H2 from "../../ui/H2"
import styled from "styled-components"
const StyledLayout = styled.div`
    display: flex;
    flex-direction: column;
    gap: calc(var(--spacing) / 2);
    align-items: center;
    width: 100vw;
    justify-content: center;
    `
const StyledRegisterLayout = styled.div`
    width: 50%;
`

export default function Register() {
    return (
        <StyledLayout>
            <Img src="/logo-light.png"></Img>
            <H2>Log into your account</H2>
            <StyledRegisterLayout>
                <RegisterLayout></RegisterLayout>
            </StyledRegisterLayout>
        </StyledLayout>
    )
}