import styled from "styled-components"
import CabinLayout from "./CabinLayout"
import CabinHeader from "./CabinHeader"
import ContentHeader from "../../ui/ContentHeader"
import Label from "../../ui/Label"
import useGetTotalCabins from "./useGetTotalCabins"
import Page1 from "../../ui/Page1"

const StyledCabin = styled.div`
    display: flex;
    flex-direction: column;
`

function Cabin() {
    const {data: totalCabins, error} = useGetTotalCabins()
    console.log(totalCabins)
    return (
        <StyledCabin>
            <ContentHeader>
                <Label fs="verylarge" fw="bold">All Cabins</Label>
                <CabinHeader />
            </ContentHeader>
            <CabinLayout></CabinLayout>
            <Page1 visibleRange={5} numRecords={totalCabins}></Page1>
        </StyledCabin>
    )
}
export default Cabin