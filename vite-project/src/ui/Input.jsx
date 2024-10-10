import PropTypes from "prop-types"
function Input({type, placeholder, onChange}) {
    const base = "px-4 py-1 rounded-3xl"
    const style = {
        primary: base + " transition-all duration-300 w-40 focus:rounded-full focus:border-yellow-500 focus:outline-none focus:border-opacity-50 focus:w-60",
        secondary: base + " border-gray-200 transition-all focus:border-2 duration-300 border focus:outline-none focus:border-yellow-500"
    }
    if (placeholder) {
        return (
            <input className={style[type]} placeholder={placeholder}></input>
        )
    }

    if (onChange && placeholder) {
        return (
            <input className={style[type]} placeholder={placeholder} onChange={(e) => onChange(e)}></input>
        )
    }

    if (onChange) {
        return (
            <input className={style[type]} onChange={(e) => onChange(e)}></input>

        )
    }

    return (
        <input className={style[type]}></input>
    )
}
Input.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func
}
export default Input
