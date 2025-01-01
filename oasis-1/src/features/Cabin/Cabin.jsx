import styled from "styled-components"
import CabinLayout from "./CabinLayout"
import CabinHeader from "./CabinHeader"
import ContentHeader from "../../ui/ContentHeader"
import Label from "../../ui/Label"
import useGetTotalCabins from "./useGetTotalCabins"
import Page1 from "../../ui/Page1"
import FilterAndSelect from "../../ui/FilterAndSelect"

const StyledCabin = styled.div`
    display: flex;
    flex-direction: column;
`

function Cabin() {
    const {data: totalCabins, error} = useGetTotalCabins()
    const filterOptions = [
        {value: "all", label: "All"},
        {value: "discount-false", label: "No Discount"},
        {value: "discount-true", label: "With Discount"},
    ]
    const filterKey = "filterBy"
    const sortOptions = [
        {value: "name-asc",  label: "Sort by name (A-Z)"},
        {value: "name-desc",  label: "Sort by name (Z-A)"},
        {value: "price-asc",  label: "Sort by price (low first)"},
        {value: "price-desc",  label: "Sort by price (high first)"},
        {value: "capacity-asc",  label: "Sort by capacity (low first)"},
        {value: "capacity-desc",  label: "Sort by capacity (high first)"},
    ]
    return (
        <StyledCabin>
            <ContentHeader>
                <Label fs="verylarge" fw="bold">All Cabins</Label>
                <FilterAndSelect sortOptions={sortOptions} filterKey={filterKey} filterOptions={filterOptions}/>
            </ContentHeader>
            <CabinLayout></CabinLayout>
            <Page1 visibleRange={5} numRecords={totalCabins}></Page1>
        </StyledCabin>
    )
}
export default Cabin