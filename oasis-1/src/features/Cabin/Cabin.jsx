import styled from "styled-components"
import CabinLayout from "./CabinLayout"
import CabinHeader from "./CabinHeader"
import ContentHeader from "../../ui/ContentHeader"
import Label from "../../ui/Label"
const StyledCabin = styled.div`
    display: flex;
    flex-direction: column;
`

function Cabin() {
    return (
        <StyledCabin>
            <ContentHeader>
                <Label fs="verylarge" fw="bold">All Cabins</Label>
                <CabinHeader />
            </ContentHeader>
            <CabinLayout></CabinLayout>
        </StyledCabin>
    )
}
export default Cabin