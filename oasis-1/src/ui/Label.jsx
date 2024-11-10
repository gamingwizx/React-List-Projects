import styled, {css} from "styled-components";
const fw = {
    normal: css`
        font-weight: 400;
    `,
    semiBold: css`
        font-weight: 500;
    `,
    bold: css`
        font-weight: 600;
    `,
    verybold: css`
        font-weight: 800;
    `
}
const color = {
    black: css`
        color: black;
    `,
    gray: css`
        color: gray;
    `,
    red: css`
        color: red;
    `
}
const fs = {
    small: css`
    font-size: var(--fs-12);
    `,
    medium: css`
    font-size: var(--fs-11);
    `,
    semilarge: css`
        font-size: var(--fs-10);
    `,
    large: css`
    font-size: var(--fs-8);
    `,
    verylarge: css`
    font-size: var(--fs-6);
    `,
}

const paddingtop = {
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
    `,
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
    `,
}

const Label = styled.label`
  display: flex;
  gap: 8px;
  margin: 0;

  ${(props) => fs[props.fs]}
  ${(props) => fw[props.fw]}
  ${(props) => color[props.color]}
  ${(props) => paddingtop[props.paddingtop]}
  ${(props) => paddinghorizontal[props.paddinghorizontal]}
`

Label.defaultProps = {
    fw: "normal",
    fs: "medium",
    color: "black",
    paddingtop: "none",
    paddinghorizontal: "none"
}
// function Label({children}) {
//     return (<StyledLabel>
//         {children}
//     </StyledLabel>)
// }

export default Label;