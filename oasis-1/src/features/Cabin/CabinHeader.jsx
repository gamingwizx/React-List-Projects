import styled from "styled-components"
import Label from "../../ui/Label"
import Filter from "../../ui/Filter"
import Select from "../../ui/Select"
const StyledCabinHeader = styled.div`
    display: flex;
    gap: calc(var(--spacing) / 2);
`

const StyledOptions = styled.div`
    display: flex;
    gap: var(--spacing);
    height: 2.5rem;
    align-items: stretch;
`

function CabinHeader() {
    const options = [
        {value: "all", label: "All"},
        {value: "discount-false", label: "No Discount"},
        {value: "discount-true", label: "With Discount"},
    ]
    const selectOptions = [
        {value: "name-asc",  label: "Sort by name (A-Z)"},
        {value: "name-desc",  label: "Sort by name (Z-A)"},
        {value: "price-asc",  label: "Sort by price (low first)"},
        {value: "price-desc",  label: "Sort by price (high first)"},
        {value: "capacity-asc",  label: "Sort by capacity (low first)"},
        {value: "capacity-desc",  label: "Sort by capacity (high first)"},
    ]
    return (
        <StyledCabinHeader>
            <StyledOptions>
                <Filter options={options} filterKey="filterBy"></Filter>
                <Select options={selectOptions} selectLabel="Sort by name (A-Z)"></Select>
            </StyledOptions>
        </StyledCabinHeader>
    )
}

export default CabinHeader