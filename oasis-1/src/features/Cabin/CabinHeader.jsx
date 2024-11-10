import styled from "styled-components"
import Label from "../../ui/Label"
const StyledCabinHeader = styled.div`
    display: flex;
    gap: calc(var(--spacing) / 2);
`

function CabinHeader() {
    return (
        <StyledCabinHeader>
            <Label>Filter</Label>/<Label fw="bold">Sort</Label>
        </StyledCabinHeader>
    )
}

export default CabinHeader