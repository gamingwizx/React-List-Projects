import styled, {css} from "styled-components"

const width = {
    auto: css`
        width: auto;
    `,
    small: css`
        width: 25%;
    `,
    normal: css`
        width: 50%;
    `,
    full: css`
        width: 100%;
    `,
}
const padding = {
    normal: css`
        padding: calc(var(--spacing) / 2);
    `,
    currency: css`
        padding: calc(var(--spacing) / 2) calc(var(--spacing) / 2) calc(var(--spacing) / 2) calc(var(--spacing) * 1.5);
    `
}

const StyledInput = styled.input`
    font-size: var(--fs-12);
    border-radius: calc(var(--border-radius) / 2);
    ${(props) => padding[props.padding]}
    ${(props) => width[props.width]}
    border: ${(props) => props.error ? "1px solid var(--bg-red-600);" : "1px solid var(--bg-zinc-300);"}
    width: 100%;

    &[type="file"] {
        display: none;
    }
`

const StyledTextArea = styled.textarea`
    font-size: var(--fs-12);
    border: 1px solid var(--bg-zinc-300);
    border-radius: calc(var(--border-radius) / 2);
    padding: calc(var(--spacing) / 2);
    position: ${(props) => props.padding === "currency" ? "absolute" : ""}
    ${(props) => width[props.width]}
`

StyledInput.defaultProps = {
    width: "auto",
    padding: "normal"
}


export default StyledInput