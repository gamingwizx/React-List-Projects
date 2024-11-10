import styled from "styled-components"

const StyledCheckoutStatusFilterOption = styled.li`
    color: black;
    font-weight: bold;
    border-radius: var(--border-radius);
    padding: var(--spacing) calc(var(--spacing) / 2);
`

function CheckoutStatusFilterOption({children}) {
    return (
        <StyledCheckoutStatusFilterOption>
            {children}
        </StyledCheckoutStatusFilterOption>
    )
}

export default CheckoutStatusFilterOption