import styled from "styled-components"
import Label from "../Label"



const StyledFormRow = styled.div`
    display: flex;
    flex-direction: ${(props) => props.alignment === "horizontal" ? "row" : "column"};
    padding: 0 0 var(--spacing) 0;
    align-items: center;
    justify-content: flex-start;
    border-bottom: ${(props) => props.auth === "false" ? "1px solid var(--bg-gray-200);" : "none;"}
    gap: var(--spacing);
    `
    
    const StyledFirstSection = styled.div`
        display: flex;
        justify-content: flex-start;
        width: 100%;
        flex-basis: ${(props) => props.alignment === "horizontal" ? "50%" : "100%"};
    `
    const StyledSecondSection = styled.div`
    flex-basis: ${(props) => props.alignment === "horizontal" ? "50%" : "100%"};
    width: 100%;
`

StyledFormRow.defaultProps = {
    alignment: "vertical",
    auth: "false"
}

function FormRow({children, label, auth, alignment}) {
    return (
        <StyledFormRow auth={auth} alignment={alignment}>
            <StyledFirstSection>{label && <Label>{label}</Label>}</StyledFirstSection>
            <StyledSecondSection>{children}</StyledSecondSection>
        </StyledFormRow>
    )
}

export default FormRow