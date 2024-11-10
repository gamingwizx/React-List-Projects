import styled from "styled-components"
import Label from "../Label"



const StyledFormRow = styled.div`
    display: flex;
    flex-direction: ${(props) => props.alignment === "horizontal" ? "row" : "column"};
    padding: 0 0 var(--spacing) 0;
    align-items: center;
    border-bottom: 1px solid var(--bg-gray-200);
    gap: var(--spacing);
    `
    
    const StyledFirstSection = styled.div`
    flex-basis: ${(props) => props.alignment === "horizontal" ? "50%" : "100%"};
    `
    const StyledSecondSection = styled.div`
    flex-basis: ${(props) => props.alignment === "horizontal" ? "50%" : "100%"};
`

StyledFormRow.defaultProps = {
    alignment: "vertical"
}

function FormRow({children, label, alignment}) {
    return (
        <StyledFormRow alignment={alignment}>
            <StyledFirstSection>{label && <Label>{label}</Label>}</StyledFirstSection>
            <StyledSecondSection>{children}</StyledSecondSection>
        </StyledFormRow>
    )
}

export default FormRow