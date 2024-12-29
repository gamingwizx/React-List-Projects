import styled from "styled-components"
import Arrow from "./Arrow"
import Label from "../../ui/Label"
import Select from "../../ui/Select"
const StyledSortByFilterDropdown = styled.nav`
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding: calc(var(--spacing) / 3);
    box-shadow: 0.8px 2px 6px 0.8px var(--bg-gray-300);
    border-radius: calc(var(--border-radius) / 2);
    position: relative;
    `
    const StyledSortByFilterMenu = styled.ul`
        top: 100%;   
        margin: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        position: absolute;
        background-color: white;
        width: 100%;
        border-radius: calc(var(--border-radius) / 2);
        padding: calc(var(--spacing) / 3);
        list-style-type: none;
        
        `
    const StyledSortByFilterItem = styled.li`
        padding: calc(var(--spacing) / 3);

    `
function SortByFilterDropdown() {
    const options = [
        {value: 'startdate-asc', label: 'Sort by date (earlier first)'},
        {value: 'startdate-desc', label: 'Sort by amount (high first)'},
        {value: 'totalprice-asc', label: 'Sort by amount (low first)'},
        {value: 'totalprice-desc', label: 'Sort by amount (high first)'}
    ]
    const selectLabel = "Sort by date (recent first)"
    return (
         <Select options={options} selectLabel={selectLabel}/>
    )
}

export default SortByFilterDropdown