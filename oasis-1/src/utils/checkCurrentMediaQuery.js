import { breakpoints } from "./mediaQuerySettings";

const windowWidth = window.innerWidth

export default function checkCurrentMediaQuery() {
    const mobileBreakpoint = Number(breakpoints.mobile.replace("px", ""))
    const tabletBreakpoint = Number(breakpoints.tablet.replace("px", ""))
    return {isMobile: mobileBreakpoint > windowWidth, isTablet: tabletBreakpoint > windowWidth}
}