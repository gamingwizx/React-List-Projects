import styled from "styled-components";
import {FilterBody, FilterOption} from "../../ui/Filter"
function DashboardHeader() {
    return (
        <FilterBody>
            <FilterOption>
                Last 7 days
            </FilterOption>
            <FilterOption>
                Last 30 days
            </FilterOption>
            <FilterOption>
                Last 90 days
            </FilterOption>
        </FilterBody>
    )
}

export default DashboardHeader