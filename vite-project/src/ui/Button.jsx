import PropTypes from "prop-types"
function Button({type, children}) {
    
    const base = "rounded-full inline-block text-sm font-semibold tracking-wide uppercase self-end"
    const style = {
        primary: base + " bg-yellow-500 px-6 py-2",
        secondary: base + "bg-gray-100 text-gray-400 border-gray-300 border-2",
        small: base + "rounded-full bg-yellow-500 inline-block text-sm font-semibold px-2.5 pt-0.5 pb-1 tracking-wide uppercase"
    }
    console.log(style[type])
    return (
        <button className={style[type]}>{children}</button>
    )
}
Button.propTypes = {
    type: PropTypes.string,
    children: PropTypes.node.isRequired
}
export default Button