import styled, {css} from "styled-components"
const color = {
    secondary: css`
        color: var(--bg-gray-800);
        background-color: white;
        border: var(--bg-gray-400) 1px solid;   
    `,
    primary: css`
        background-color: var(--bg-blue-500);
        border-radius: calc(var(--border-radius) / 2);
        color: white;
    `
}
const Button = styled.button`
    ${(props) => color[props.color]}
    width: auto;
    
    white-space: nowrap;
`

Button.defaultProps = {
    color: "primary"
}

export default Button;