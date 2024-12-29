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
export default function Select({options, selectLabel}) {
    const [searchParams, setSearchParams] = useSearchParams()
    const handleClickMenuItem = (sortName) => {
        let getUrlParams = {}
        searchParams.forEach((value, key) => {
            getUrlParams = {
                ...getUrlParams,
                [key]: value
            }
        })
        setSearchParams({ ...getUrlParams, sort: sortName})
    }
    return (
            <Test>
                {options.map(option => (
                    <Test1 key={option.value} onClick={() => handleClickMenuItem(option.value)}>{option.label}</Test1>
                ))}
            </Test>
    )
}