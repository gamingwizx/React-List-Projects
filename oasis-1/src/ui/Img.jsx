import styled, {css} from "styled-components";
const borderradius = {
    rounded: css`
        border-radius: 50%;
        background-color: black;
    `,
    normal: css`
        border-radius: none;
    `
}
const size = {
    auto: css`
        width: 100%;
    `,
    small: css`
        width: 2.5rem;
    `,
    normal: css`
        width: 6rem;
    `
}
const Img = styled.img`
    
    ${(props) => size[props.size]}
    ${(props) => borderradius[props.borderradius]}
`
const StyledImageLayout = styled.div`

`
Img.defaultProps = {
    borderradius: "normal",
    size: "normal",
    width: "auto"
}

// function Img({src}) {
//     return (
//             <StyledImg src={src}></StyledImg>
//     )
// }

export default Img