import { useSearchParams } from "react-router-dom"
import { useEffect, useState, useRef } from "react"
import styled, {css} from "styled-components"
import { HiChevronDoubleLeft, HiChevronLeft, HiChevronDoubleRight, HiChevronRight } from "react-icons/hi2";
import createPaginationSystem from "../utils/createPaginationSystem";
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
    border: ${(props) => props.iscurrentpage === 'true' ? 'black 1px solid' : 'var(--bg-zinc-300) 1px solid'};
    background-color: white;
    
    &:hover,
    &:active,
    &:focus {
        outline: 0;
        box-shadow: none;
        background-color: var(--bg-zinc-100);
        border: ${(props) => props.iscurrentpage === 'true' ? 'black 1px solid' : 'var(--bg-zinc-300) 1px solid'};
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


export default function Page1({visibleRange, numRecords}) {
    const [searchParams, setSearchParams] = useSearchParams()
    const [pageNumberArr, setPageNumberArr] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const totalPages = numRecords ? Math.ceil(numRecords / visibleRange) : 1
    const isRan = useRef(false)
    const currentPage = Number(searchParams.get("page"))


    useEffect(() => {
        try {
            if (!isRan.current && numRecords) {
                const pageArray = createPaginationSystem(totalPages, currentPage, visibleRange)
                setPageNumberArr(() => pageArray)
        } }catch(error) {
            console.error(error)
        } finally {
            setIsLoading(() => false)
        }
    }, [setPageNumberArr, numRecords, visibleRange, currentPage])


    const handlePageClick = (pageCase) => {
        
        if (pageCase === FIRST_PAGE && currentPage === 1) return
        if (pageCase === PREVIOUS_PAGE && currentPage === 1) return
        
        if (pageCase === NEXT_PAGE && currentPage === totalPages) return
        if (pageCase === LAST_PAGE && currentPage === totalPages) return

        switch(pageCase) {
            case NEXT_PAGE:

                searchParams.set('page', currentPage + 1)
                break;
            case PREVIOUS_PAGE:
                searchParams.set('page', currentPage - 1)
                break;
            case FIRST_PAGE:
                searchParams.set('page', 1)
                break;
            case LAST_PAGE:
                searchParams.set('page', totalPages)
                break;
        }
        setSearchParams(searchParams)
    }

    const handleNumberedPageClick = (num) => {
        searchParams.set('page', num)
        setSearchParams(searchParams)
    }

    return (
        <StyledPageLayout>
            <StyledTest onClick={() => handlePageClick(FIRST_PAGE)} pagenumber={currentPage} action={FIRST_PAGE}>
                <HiChevronDoubleLeft/>
            </StyledTest>
            <StyledTest onClick={() => handlePageClick(PREVIOUS_PAGE)} pagenumber={currentPage} action={PREVIOUS_PAGE}>
                <HiChevronLeft/>
            </StyledTest>
            {pageNumberArr.map(pageNumber => (
                <StyledPageNumberButton iscurrentpage={`${pageNumber === currentPage}`} key={pageNumber} onClick={() => handleNumberedPageClick(pageNumber)}>{pageNumber}</StyledPageNumberButton>
                
            ))}
                <StyledTest onClick={() => handlePageClick(NEXT_PAGE)} action={NEXT_PAGE} pagenumber={currentPage} lastpage={totalPages}>
                    <HiChevronRight/>
                </StyledTest>
            <StyledTest onClick={() => handlePageClick(LAST_PAGE)} action={LAST_PAGE} pagenumber={currentPage} lastpage={totalPages}>
                <HiChevronDoubleRight/>
            </StyledTest>
        </StyledPageLayout>
    )
}