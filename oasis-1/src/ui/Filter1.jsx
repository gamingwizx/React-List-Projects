import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import styled, {css} from "styled-components"
import Loader from "./Spinner"

const test = (isSelected) => {
    if (isSelected === 'true') {
        return css`
            color: white;
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
    padding: calc(var(--spacing) / 4);
    list-style-type: none;
    box-shadow: 0.8px 2px 6px 0.8px var(--bg-gray-300);
    border-radius: calc(var(--border-radius) / 2);

`
const FilterOption = styled.li`
color: black;
font-weight: bold;
border-radius: var(--border-radius);
padding: var(--spacing) calc(var(--spacing) / 2);
cursor: pointer;
${(props) => test(props.isselected)}
`

export default function Filter1({options}) {
    const [searchParams, setSearchParams] = useSearchParams()
    const handleFilterClick = (option) => {
        if (!searchParams.get("filterBy")) {
            const params = window.location.search
            const param = new URLSearchParams(params)
            param.append("filterBy", option.value)
            setSearchParams(param)

        }
        console.log(option.value)
        
    }
    useEffect(() => {
        options.map(option => {
            if (option.value === searchParams.get("filterBy")) {
                console.log("Same!")
            }
        })
    }, [])
    return (
        <StyledBody>
            {options ? options.map(option => (
                <FilterOption key={option.value} isselected={`${searchParams.get("filterBy") === option.value}`} onClick={() => handleFilterClick(option)}>
                    {option.label}
                </FilterOption>
            )) : <Loader></Loader>}
        </StyledBody>
        
    )
}