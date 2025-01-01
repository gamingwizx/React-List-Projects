import { useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Filter from "../../ui/Filter"
import FilterAndSelect from "../../ui/FilterAndSelect"
import updateListByIterationAndSpecificElementByCondition from "../../utils/updateListByIterationAndSpecificElementByCondition"
import checkCurrentMediaQuery from "../../utils/checkCurrentMediaQuery"
function DashboardHeader() {
    const {isTablet} = checkCurrentMediaQuery()
    const options = [
        {value: "7", label: "Last 7 days"},
        {value: "30", label: "Last 30 days"},
        {value: "90", label: "Last 90 days"},
    ]
    const filterKey = "last"
    return (
        <>
            <FilterAndSelect filterOptions={options} filterKey={filterKey}/>
        </>
    )
}

export default DashboardHeader