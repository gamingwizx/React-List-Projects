import styled, {css} from "styled-components"

const backgroundColor = {
    blue: css`
        background-color: var(--bg-blue-200);
    `,
    green: css`
        background-color: var(--bg-green-200);
    `,
    indigo: css`
        background-color: var(--bg-indigo-200);
    `,
    yellow: css`
        background-color: var(--bg-yellow-200);
    `,
    red: css`
        background-color: var(--bg-red-200);
    `,
    orange: css`
        background-color: var(--bg-orange-200);
    `
}

const color = {
    blue: css`
        color: var(--bg-blue-800);
    `,
    green: css`
        color: var(--bg-green-800);
    `,
    indigo: css`
        color: var(--bg-indigo-800);
    `,
    yellow: css`
        color: var(--bg-yellow-800);
    `,
    red: css`
        color: var(--bg-red-800);
    `,
    orange: css`
        color: var(--bg-orange-800);
    `
}

const StyledActivity = styled.div`
    padding: calc(var(--spacing) /3) calc(var(--spacing) * 1.5);
    white-space: nowrap;
    display: flex;
    align-items: center;
    border-radius: calc(var(--border-radius) * 4);
    ${(props) => backgroundColor[props.color]}
    ${(props) => color[props.color]}
    font-weight: bold;
    font-size: var(--fs-12)
`

export default StyledActivity;