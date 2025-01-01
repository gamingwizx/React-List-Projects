import styled from "styled-components"
import Filter from "./Filter"
import Label from "./Label"
import Select from "./Select"
import Menu from "./Menu"
import { HiFunnel, HiMiniBarsArrowDown } from "react-icons/hi2"
import useChangeSearchQueryParams from "../hooks/useChangeSearchQueryParams"
import checkCurrentMediaQuery from "../utils/checkCurrentMediaQuery"

const StyledFilterAndSelectLayout = styled.div`
    display: flex;
    gap: ${(props) => props.istablet === `true` ? 'none' : 'var(--spacing)'};
    align-items: center;
`

const StyledOptions = styled.div`
    display: flex;
    gap: var(--spacing);
    height: 2.5rem;
    align-items: stretch;
`

function FilterAndSelect({sortOptions = [], filterOptions = [], filterKey}) {
    const {modifySearchQueryParams} = useChangeSearchQueryParams()
    const {isTablet} = checkCurrentMediaQuery()

    const handleFilterOptionClick = (filterKey, value) => {
        modifySearchQueryParams(filterKey, value)
    }

    const handleSortOptionClick = (filterKey, value) => {
        modifySearchQueryParams(filterKey, value)
    }


    return (
        <StyledFilterAndSelectLayout istablet={`${isTablet}`}>
            {isTablet ? (
                <>
                    {filterOptions.length > 0 && <Menu key="filter">
                        <Menu.Toggle icon={<HiFunnel />}>
                        </Menu.Toggle>
                        <Menu.List>
                            {filterOptions.map(option => (
                                <Menu.Button key={option.value} onClick={() => handleFilterOptionClick("filterBy", option.value)}>
                                    <Label>{option.label}</Label>
                                </Menu.Button>    
                            ))}
                        </Menu.List>
                    </Menu>}
                    {sortOptions.length > 0 && <Menu key="sort">
                        <Menu.Toggle icon={<HiMiniBarsArrowDown />}>
                        </Menu.Toggle>
                        <Menu.List>
                            {sortOptions.map(sortOption => (
                                <Menu.Button key={sortOption.value} onClick={() => handleSortOptionClick("sort", sortOption.value)}>
                                    <Label>{sortOption.label}</Label>
                                </Menu.Button>    
                            ))}
                        </Menu.List>
                    </Menu>}
                </>
            ) : <StyledOptions>
                {filterOptions.length > 0 && <Filter options={filterOptions} filterKey={filterKey}/>}
                {sortOptions.length > 0 && <Select options={sortOptions}/>}
            </StyledOptions>
            }
            
        </StyledFilterAndSelectLayout>
    )
}

export default FilterAndSelect