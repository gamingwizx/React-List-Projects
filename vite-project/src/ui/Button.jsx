import PropTypes from "prop-types"
function Button({type, children, onClick, disabled}) {
    
    const base = "rounded-full inline-block font-semibold tracking-wide uppercase disabled:cursor-not-allowed disabled:bg-yellow-200 md:text-sm"
    const style = {
        primary: base + " text-xs bg-yellow-500 md:px-6",
        secondary: base + "bg-gray-100 text-gray-400 text-sm border-gray-300 border-2",
        small: base + "rounded-full bg-yellow-500 inline-block text-sm font-semibold px-2.5 pt-0.5 pb-1 tracking-wide uppercase",
        inside: base + " absolute md:text-sm text-xs md:right-[5px] md:top-[5px] right-[7px] top-[5px] bg-yellow-300"
    }
    if (onClick) {
        return (
            <button disabled={disabled} className={style[type]} onClick={(e) => onClick(e)}>{children}</button>
        )
    }
    return (
        <button disabled={disabled} className={style[type]}>{children}</button>
    )
}
Button.propTypes = {
    type: PropTypes.string,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
}
export default Button