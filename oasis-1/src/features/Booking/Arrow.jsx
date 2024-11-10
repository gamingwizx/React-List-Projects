import styled from "styled-components"

const StyledArrow = styled.div`
    display: flex;
    padding: 0 calc(var(--spacing) / 2);
    font-weight: bold;
    color: var(--bg-gray-500);
`

function Arrow() {
    return (<StyledArrow>
        ˅
    </StyledArrow>)
}

export default Arrow