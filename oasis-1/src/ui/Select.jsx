import styled from "styled-components"; 
import Arrow from "./Arrow"
import Label from "./Label";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
const StyledSelect = styled.div`
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding: calc(var(--spacing) / 3);
    box-shadow: 0.8px 2px 6px 0.8px var(--bg-gray-300);
    border-radius: calc(var(--border-radius) / 2);
    position: relative;
    `


const Test = styled.select`
    border: none;
    font-weight: bold;
    font-size: var(--fs-11);
    // padding: calc(var(--spacing) / 4);
    box-shadow: 0.8px 2px 6px 0.8px var(--bg-gray-300);
    border-radius: calc(var(--border-radius) / 2);
    height: 100%;
    &:focus,
    &:active,
    &:hover {
        outline: 0;
        box-shadow: none;
        border: none;
    }
`

const Test1 = styled.option`
    &:focus,&:active,&:hover {
        border: none;
    }
`
export default function Select({options}) {
    const searchQueryKey = "sort"
    const [searchParams, setSearchParams] = useSearchParams()
    const handleClickMenuItem = (sortName) => {
        const option = options.find(option => option.label === sortName)
        searchParams.set(searchQueryKey, option.value)
        setSearchParams(searchParams)
    }
    return (
            <Test onChange={(e) => handleClickMenuItem(e.target.value)}>
                {options.map(option => (
                    <Test1 key={option.value}>{option.label}</Test1>
                ))}
            </Test>
    )
}