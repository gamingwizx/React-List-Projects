import styled from "styled-components"
import {FilterBody, FilterOption} from "../../ui/Filter.jsx"
import CheckoutStatusFilterOption from "./CheckoutStatusFilterOption.jsx"
const CheckoutStatusFilter = styled.ul`
    display: flex;
    align-items: center;
    background-color: white;
    gap: calc(var(--spacing) / 2);
    padding: calc(var(--spacing) / 3);
    list-style-type: none;
    box-shadow: 0.8px 2px 6px 0.8px var(--bg-gray-300);
    border-radius: calc(var(--border-radius) / 2);

    & li:hover,
    & li:nth-of-type(1) {
        color: white;
        background-color: var(--bg-indigo-700);
    }
`

function BookingOptions() {
    return (
        <FilterBody>
            <FilterOption>
                All
            </FilterOption>
            <FilterOption>
                Check out
            </FilterOption>
            <FilterOption>
                Check in
            </FilterOption>
            <FilterOption>
                Unconfirmed
            </FilterOption>
        </FilterBody>  
    )
}

export default BookingOptions