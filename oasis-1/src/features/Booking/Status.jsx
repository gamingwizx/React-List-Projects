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
}
const padding = {
    small: css`
        padding: calc(var(--spacing) / 5) calc(var(--spacing) / 2);   
    `,
    normal: css`
        padding: calc(var(--spacing) /3) calc(var(--spacing) * 1.5);
    `,
    large: css`
        padding: calc(var(--spacing)) calc(var(--spacing) * 3);
    `
}
const StyledActivity = styled.label`
white-space: nowrap;
width: 80%;
    ${(props) => padding[props.padding]}
    text-align:  center;
    border-radius: calc(var(--border-radius) * 4);
    ${(props) => backgroundColor[props.color]}
    ${(props) => color[props.color]}
    font-weight: bold;
    font-size: var(--fs-12)
`

StyledActivity.defaultProps = {
    padding: "normal"
}

export default StyledActivity;