import styled from "styled-components"

const Filter = styled.div`

`
const StyledBody = styled.div`
    background-color: yellow;
    display: flex;
    align-items: center;
    background-color: white;
    gap: calc(var(--spacing) / 2);
    padding: calc(var(--spacing) / 4);
    list-style-type: none;
    box-shadow: 0.8px 2px 6px 0.8px var(--bg-gray-300);
    border-radius: calc(var(--border-radius) / 2);

    & li:hover,
    & li:nth-of-type(1) {
        color: white;
        background-color: var(--bg-indigo-700);
    }
`
const StyledOption = styled.li`
color: black;
font-weight: bold;
border-radius: var(--border-radius);
padding: var(--spacing) calc(var(--spacing) / 2);
`

function FilterBody({children}) {
    return (
        <StyledBody>
            {children}
        </StyledBody>
    )
}

function FilterOption({children}) {
    return (
        <StyledOption>
            {children}
        </StyledOption>
    )
}

export {FilterBody, FilterOption}
