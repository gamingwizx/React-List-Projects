import PropTypes from "prop-types";
function Label({type, children}) {
    const base = "font-bold text-white py-1 px-5 text-sm uppercase rounded-full"
    const styles = {
        green: base + " bg-green-500",
        red: base + " bg-red-500"
    }
    return (
        <p className={styles[type]}>{children}</p>
    )
}

Label.propTypes = {
    type: PropTypes.string,
    children: PropTypes.node.isRequired
}

export default Label

