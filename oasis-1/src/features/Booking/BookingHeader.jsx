import styled from "styled-components"
// import BookingOptions from "./CheckoutStatusFilter"
import SortByFilterDropdown from "./SortByFilterDropdown"
import Filter from "../../ui/Filter"
import Label from "../../ui/Label"
import Select from "../../ui/Select"
import Menu from "../../ui/Menu"
import { HiFunnel, HiMiniBarsArrowDown } from "react-icons/hi2"
import useChangeSearchQueryParams from "../../hooks/useChangeSearchQueryParams"
import checkCurrentMediaQuery from "../../utils/checkCurrentMediaQuery"

const StyledBookingHeader = styled.div`
    display: flex;
    gap: ${(props) => props.istablet === `true` ? 'none' : 'var(--spacing)'};
    align-items: center;
`

const StyledOptions = styled.div`
    display: flex;
    gap: var(--spacing);
    height: 2.5rem;
    align-items: stretch;
`

function BookingHeader() {
    const {modifySearchQueryParams} = useChangeSearchQueryParams()
    const {isTablet} = checkCurrentMediaQuery()
    const sortOptions = [
        {value: 'startdate-asc', label: 'Sort by date (earlier first)'},
        {value: 'startdate-desc', label: 'Sort by date (high first)'},
        {value: 'totalprice-asc', label: 'Sort by amount (low first)'},
        {value: 'totalprice-desc', label: 'Sort by amount (high first)'}
    ]
    const selectLabel = "Sort by date (recent first)"

    const options = [
        {value: "all", label: "All"},
        {value: "checked-out", label: "Check Out"},
        {value: "checked-in", label: "Check In"},
        {value: "unconfirmed", label: "Unconfirmed"},
        {value: "cancelled", label: "Cancelled"}
    ]
    const filterKey = "filterBy"

    const handleFilterOptionClick = (filterKey, value) => {
        modifySearchQueryParams(filterKey, value)
    }

    const handleSortOptionClick = (filterKey, value) => {
        modifySearchQueryParams(filterKey, value)
    }


    return (
        <StyledBookingHeader istablet={`${isTablet}`}>
            {isTablet ? (
                <>
                    <Menu key="filter">
                        <Menu.Toggle icon={<HiFunnel />}>
                        </Menu.Toggle>
                        <Menu.List>
                            {options.map(option => (
                                <Menu.Button key={option.value} onClick={() => handleFilterOptionClick("filterBy", option.value)}>
                                    <Label>{option.label}</Label>
                                </Menu.Button>    
                            ))}
                        </Menu.List>
                    </Menu>
                    <Menu key="sort">
                        <Menu.Toggle icon={<HiMiniBarsArrowDown />}>
                        </Menu.Toggle>
                        <Menu.List>
                            {sortOptions.map(sortOption => (
                                <Menu.Button key={sortOption.value} onClick={() => handleSortOptionClick("sort", sortOption.value)}>
                                    <Label>{sortOption.label}</Label>
                                </Menu.Button>    
                            ))}
                        </Menu.List>
                    </Menu>
                </>
            ) : <StyledOptions>
                <Filter options={options}/>
                <Select options={sortOptions}/>
            </StyledOptions>
            }
            
        </StyledBookingHeader>
    )
}

export default BookingHeader