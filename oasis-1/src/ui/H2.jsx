import styled from "styled-components";

const StyledH2 = styled.h2`
    font-size: var(--fs-8);
    font-weight: bold;
`

function H2({children}) {
    return (
        <StyledH2>{children}</StyledH2>
    )
}

export default H2