import styled, {css} from "styled-components";

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

const Icon = styled.div`
    width: 5rem;
    height: 5rem;
    font-size: var(--fs-6);
    justify-content: center;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    ${(props) => backgroundColor[props.color]}
    ${(props) => color[props.color]}
`

export default Icon