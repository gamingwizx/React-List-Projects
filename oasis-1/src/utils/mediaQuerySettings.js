export const breakpoints = {
    mobile: '480px',
    tablet: '800px'
}

const media = {
    mobile: `@media(max-width: ${breakpoints.mobile})`,
    tablet: `@media(max-width: ${breakpoints.tablet})`
}

export default media