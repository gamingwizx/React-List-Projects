import { AuthError } from "@supabase/supabase-js";
import { createContext } from "react";
import styled, {css} from "styled-components"
const TableContext = createContext()

const align = {
    left: css`
        text-align: left;
    `,
    center: css`
        text-align: center;
    `,
    right: css`
        text-align: right;
    `,
}

const width = {
    auto: css`
        width: auto;
    `,
    small: css`
        width: 3rem;
    `,
    normal: css`
        width: 6rem;
    `,
    large: css`
        width: 9rem;
    `,
}

const paddingvertical = {
    none: css`
        padding: 0;
    `,
    small: css`
        padding: calc(var(--spacing) / 2) 0;
    `,
    normal: css`
        padding: calc(var(--spacing)) 0;
    `,
    large: css`
        padding: calc(var(--spacing) * 2) 0;
    `
}
const paddinghorizontal = {
    none: css`
        padding: 0;
    `,
    small: css`
        padding: 0 calc(var(--spacing) / 2);
    `,
    normal: css`
        padding: 0 calc(var(--spacing));
    `,
    large: css`
        padding: 0 calc(var(--spacing) * 2);
    `
}
const paddingright = {
    none: css`
        padding-right: 0;
    `,
    small: css`
        padding-right: calc(var(--spacing) / 2);
    `,
    normal: css`
        padding-right: calc(var(--spacing));
    `,
    large: css`
        padding-right: calc(var(--spacing) * 2);
    `
}
const StyledTable = styled.table`
    border-collapse: collapse;
    width: 100%;
`
const StyledHeader = styled.tr`
    background-color: var(--bg-gray-200);
    padding: calc(var(--spacing));

    & > * {
        padding: calc(var(--spacing)) 0;
        text-align: left;
    }

    & >*:first-child {
        text-align: center;
    }
`
const StyledBody = styled.tbody`
`
const StyledRow = styled.tr`
height: 2rem;

`

const StyledCell = styled.td`
    ${(props) => align[props.align]}
    ${(props) => paddingvertical[props.paddingvertical]}
    ${(props) => paddinghorizontal[props.paddinghorizontal]}
    ${(props) => paddingright[props.paddingright]}
    ${(props) => width[props.width]}
    line-height: ${(props) => props.stacked ? `calc(var(--spacing) * 2)` : "0px"};
    border-bottom: 1px solid var(--bg-gray-200);
    &:first-child {
        text-align: center;
    }
    & > :first-child {
        font-weight: bold;
    }

`
StyledCell.defaultProps = {
    align: "left",
    paddingvertical: "none",
    paddinghorizontal: "none",
    paddingright: "none",
    width: "auto"
}
function Table({children}) {
    return (<TableContext.Provider value="Hello">
        <StyledTable>{children}</StyledTable>
    </TableContext.Provider>)
}

function Body({data, render}) {
    return (
        <StyledBody>
            {data.map(render)}
        </StyledBody>
    )
}

function Header({children}) {
    return (
        <thead>
            <StyledHeader>
                {children}
            </StyledHeader>
        </thead>
    )
}

function Row({children}) {
    return <StyledRow>
        {children}
    </StyledRow>
}

function Cell({children, stacked, secondRow, align, paddinghorizontal, paddingright, paddingvertical, width}) {
    if (stacked === "stacked") {
        return <StyledCell stacked={stacked} paddinghorizontal={paddinghorizontal} paddingright={paddingright} paddingvertical={paddingvertical} align={align} width={width}>
            <label>{children}</label>
            <br></br>
            <label>{secondRow}</label>
        </StyledCell>
    }
    return (
        <StyledCell stacked={stacked} paddinghorizontal={paddinghorizontal} paddingright={paddingright} paddingvertical={paddingvertical} align={align} width={width}>
            {children}
        </StyledCell>
    )
}

Table.Row = Row
Table.Header = Header
Table.Body = Body
Table.Cell = Cell
export default Table