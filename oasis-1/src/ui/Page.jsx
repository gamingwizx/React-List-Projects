import { useSearchParams } from "react-router-dom"
import { useEffect, useState, useRef } from "react"
import styled, {css} from "styled-components"
import { HiChevronDoubleLeft, HiChevronLeft, HiChevronDoubleRight, HiChevronRight } from "react-icons/hi2";
import Loader from "./Spinner";

const FIRST_PAGE = "FIRST_PAGE"
const LAST_PAGE = "LAST_PAGE"
const PREVIOUS_PAGE = "PREVIOUS_PAGE"
const NEXT_PAGE = "NEXT_PAGE"

const handleCursorCss = (action, pageNumber, lastPage) => {
    let isReachedPageLimit = false;

    if (action === FIRST_PAGE && pageNumber === 1) isReachedPageLimit = true
    if (action === PREVIOUS_PAGE && pageNumber === 1) isReachedPageLimit = true
    if (action === NEXT_PAGE && pageNumber === lastPage) isReachedPageLimit = true
    if (action === LAST_PAGE && pageNumber === lastPage) isReachedPageLimit = true

    if (isReachedPageLimit) {
    return css`
            cursor: not-allowed;
    `} else {
        return css`
            cursor: pointer
        `
    }
}

const StyledPageLayout = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: white;
    gap: calc(var(--spacing) / 2);
    padding: 0 var(--spacing);
`
const StyledPageNumberButton = styled.button`
    text-align: center;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    justify-content: center;
    align-items: center;
    display: flex;
    border: var(--bg-zinc-300) 1px solid;
    background-color: white;
    
    &:hover,
    &:active,
    &:focus {
        outline: 0;
        box-shadow: none;
        background-color: var(--bg-zinc-100);
        border: var(--bg-zinc-300) 1px solid;
    }
`
    const StyledTest = styled.p`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 35px;
        height: 35px;
        line-height: 35px;
        text-align: center;
        border-radius: 50%;
        border: var(--bg-zinc-300) 1px solid;
        ${(props) => handleCursorCss(props.action, props.pagenumber, props.lastpage)}

        &:hover,
        &:focus,
        &:active {
            outline: 0;
            box-shadow: none;
            background-color: var(--bg-zinc-100);
            border: var(--bg-zinc-300) 1px solid;
    }
`


export default function Page({numPageShown, numRecords}) {
    const FIRST_PAGE_NUM = 1
    const LAST_PAGE_NUM = Math.floor(numRecords / numPageShown)
    const [searchParams, setSearchParams] = useSearchParams()
    const [pageNumberArr, setPageNumberArr] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const isRan = useRef(false)
    const pageNumber = Number(searchParams.get("page"))

    const calcNumPageShown = Math.floor(numRecords / numPageShown)
    useEffect(() => {
        try {
            if (!isRan.current && numRecords) {
                const actualNumPageShown = calcNumPageShown > numPageShown ? numPageShown : calcNumPageShown
                const actualPageNumber = numPageShown > actualNumPageShown ? 1 : numPageShown
                const newPageNumArr = Array.from({length: actualNumPageShown}, (_,i) => i + actualPageNumber)
                setPageNumberArr(() => newPageNumArr)
                isRan.current = true
        } }catch(error) {
            console.error(error)
        } finally {
            setIsLoading(() => false)
        }
    }, [setPageNumberArr, pageNumber, numRecords, calcNumPageShown, numPageShown])


    const handlePageClick = (pageCase) => {
        
        if (pageCase === FIRST_PAGE && pageNumber === 1) return
        if (pageCase === PREVIOUS_PAGE && pageNumber === 1) return
        
        if (pageCase === NEXT_PAGE && pageNumber === LAST_PAGE_NUM) return
        if (pageCase === LAST_PAGE && pageNumber === LAST_PAGE_NUM) return

        switch(pageCase) {
            case NEXT_PAGE:
                searchParams.set('page', pageNumber + 1)
                break;
            case PREVIOUS_PAGE:
                searchParams.set('page', pageNumber - 1)
            case FIRST_PAGE:
                searchParams.set('page', 0)
            case LAST_PAGE:
                searchParams.set('page', actualPageNum)
        }
        setSearchParams(searchParams)
    }

    const handleNumberedPageClick = (num) => {
        searchParams.set('page', num)
        setSearchParams(searchParams)
    }

    return (
        <StyledPageLayout>
            <StyledTest onClick={() => handlePageClick(FIRST_PAGE)} pagenumber={pageNumber} action={FIRST_PAGE}>
                <HiChevronDoubleLeft/>
            </StyledTest>
            <StyledTest onClick={() => handlePageClick(PREVIOUS_PAGE)} pagenumber={pageNumber} action={PREVIOUS_PAGE}>
                <HiChevronLeft/>
            </StyledTest>
            {pageNumberArr.map(pageNumber => (
                <StyledPageNumberButton key={pageNumber} onClick={() => handleNumberedPageClick(pageNumber)}>{pageNumber}</StyledPageNumberButton>
                
            ))}
                <StyledTest onClick={() => handlePageClick(NEXT_PAGE)} action={NEXT_PAGE} pagenumber={pageNumber} lastpage={LAST_PAGE_NUM}>
                    <HiChevronRight/>
                </StyledTest>
            <StyledTest onClick={() => handlePageClick(LAST_PAGE)} action={LAST_PAGE} pagenumber={pageNumber} lastpage={LAST_PAGE_NUM}>
                <HiChevronDoubleRight/>
            </StyledTest>
        </StyledPageLayout>
    )
}