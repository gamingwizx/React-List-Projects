import { useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Filter from "../../ui/Filter"
import updateListByIterationAndSpecificElementByCondition from "../../utils/updateListByIterationAndSpecificElementByCondition"
function DashboardHeader() {
    const options = [
        {value: "7", label: "Last 7 days"},
        {value: "30", label: "Last 30 days"},
        {value: "90", label: "Last 90 days"},
    ]
    const filterKey = "last"
    return (
        <Filter options={options} filterKey={filterKey}></Filter>
    )
}

export default DashboardHeader