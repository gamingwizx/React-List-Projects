// import styled from "styled-components"
// import {FilterBody, FilterOption} from "../../ui/Filter.jsx"
// import { useSearchParams } from "react-router-dom"
// import { useState, useEffect } from "react"
// import CheckoutStatusFilterOption from "./CheckoutStatusFilterOption.jsx"
// import updateListByIterationAndSpecificElementByCondition from "../../utils/updateListByIterationAndSpecificElementByCondition.js"
// const CheckoutStatusFilter = styled.ul`
//     display: flex;
//     align-items: center;
//     background-color: white;
//     gap: calc(var(--spacing) / 2);
//     padding: calc(var(--spacing) / 3);
//     list-style-type: none;
//     box-shadow: 0.8px 2px 6px 0.8px var(--bg-gray-300);
//     border-radius: calc(var(--border-radius) / 2);

//     & li:hover,
//     & li:nth-of-type(1) {
//         color: white;
//         background-color: var(--bg-indigo-700);
//     }
// `

// function BookingOptions() {
//     const FIRST_OPTION = "All"
//     const SECOND_OPTION = "Check out"
//     const THIRD_OPTION = "Check in"
//     const FORTH_OPTION = "Unconfirmed"
//     const [searchParams, setSearchParams] = useSearchParams()
//     const [selectedItems, setSelectedItems] = useState({[FIRST_OPTION]: true, [SECOND_OPTION]: false, [THIRD_OPTION]: false, [FORTH_OPTION]: false})
//     let filterBy = "all"
//     const handleFilterDuration = (duration) => {
//         let getUrlParams = {}
//         searchParams.forEach((value, key) => {
//             getUrlParams = {
//                 ...getUrlParams,
//                 [key]: value
//             }
//         })
//         switch(duration) {
//             case FIRST_OPTION:
//                 filterBy = "all"
//                 setSelectedItems(() => updateListByIterationAndSpecificElementByCondition(selectedItems, FIRST_OPTION, true, false))
                
//                 break;
//             case SECOND_OPTION:
//                 filterBy = "checked-out"
//                 setSelectedItems(() => updateListByIterationAndSpecificElementByCondition(selectedItems, SECOND_OPTION, true, false))
//                 break;
//             case THIRD_OPTION: 
//                 setSelectedItems(() => updateListByIterationAndSpecificElementByCondition(selectedItems, THIRD_OPTION, true, false))
//                 filterBy = "checked-in"
//                 break;
//             case FORTH_OPTION:
//                 setSelectedItems(() => updateListByIterationAndSpecificElementByCondition(selectedItems, FORTH_OPTION, true, false))
//                 filterBy = "unconfirmed"
//                 break;
//             default:
//                 filterBy = "all"
//         }
//         setSearchParams({ ...getUrlParams, filterBy })
//     }
//     useEffect(() => {
//         handleFilterDuration(FIRST_OPTION)
//     }, [])
//     return (
//         <FilterBody>
//             <FilterOption isselected={`${selectedItems[FIRST_OPTION]}`} onClick={() => handleFilterDuration(FIRST_OPTION)}>
//                 All
//             </FilterOption>
//             <FilterOption isselected={`${selectedItems[SECOND_OPTION]}`} onClick={() => handleFilterDuration(SECOND_OPTION)}>
//                 Check out
//             </FilterOption>
//             <FilterOption isselected={`${selectedItems[THIRD_OPTION]}`} onClick={() => handleFilterDuration(THIRD_OPTION)}>
//                 Check in
//             </FilterOption>
//             <FilterOption isselected={`${selectedItems[FORTH_OPTION]}`} onClick={() => handleFilterDuration(FORTH_OPTION)}>
//                 Unconfirmed
//             </FilterOption>
//         </FilterBody>  
//     )
// }

// export default BookingOptions