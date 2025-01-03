import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import styled, {css} from "styled-components"
import Loader from "./Spinner"

const test = (isSelected) => {
    if (isSelected === 'true') {
        return css`
            color: white;
            padding: calc(var(--spacing) / 4);
            background-color: var(--bg-indigo-700);
        `
    } else {
        return css`
        `
    }
}
const StyledBody = styled.div`
    background-color: yellow;
    display: flex;
    align-items: center;
    background-color: white;
    gap: calc(var(--spacing) / 2);
    list-style-type: none;
    box-shadow: 0.8px 2px 6px 0.8px var(--bg-gray-300);
    border-radius: calc(var(--border-radius) / 2);
    height: 100%;

    @media (max-width: 800px) {
        height: 100px;
    }

`
const FilterOption = styled.li`
color: black;
font-weight: bold;
border-radius: var(--border-radius);
cursor: pointer;
font-size: var(--fs-11);
padding: var(--spacing);
${(props) => test(props.isselected)}

@media (max-width: 800px) {
}
`

export default function Filter1({options, filterKey}) {
    const [searchParams, setSearchParams] = useSearchParams()
    const handleFilterClick = (option) => {
        searchParams.set(filterKey, option.value)
        setSearchParams(searchParams)
        
    }
    useEffect(() => {
        if(!searchParams.get(filterKey)) {
            searchParams.set(filterKey, options[0].value)
            setSearchParams(searchParams)
        }
    }, [])
    return (
        <StyledBody>
            {options ? options.map(option => (
                <FilterOption key={option.value} isselected={`${searchParams.get(filterKey) === option.value}`} onClick={() => handleFilterClick(option)}>
                    {option.label}
                </FilterOption>
            )) : <Loader></Loader>}
        </StyledBody>
        
    )
}