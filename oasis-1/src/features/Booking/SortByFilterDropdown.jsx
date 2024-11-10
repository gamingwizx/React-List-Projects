import styled from "styled-components"
import Arrow from "./Arrow"
import Label from "../../ui/Label"
const StyledSortByFilterDropdown = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding: calc(var(--spacing) / 3);
    box-shadow: 0.8px 2px 6px 0.8px var(--bg-gray-300);
    border-radius: calc(var(--border-radius) / 2);
`

function SortByFilterDropdown() {
    return (
        <StyledSortByFilterDropdown>
            <Label fw="bold" paddinghorizontal="normal">Sort by date (recent first)</Label>
            <Arrow></Arrow>
        </StyledSortByFilterDropdown>
    )
}

export default SortByFilterDropdown