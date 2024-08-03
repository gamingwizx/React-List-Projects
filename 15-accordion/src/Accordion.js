import {useState, useEffect} from 'react' 

export default function Accordion({ children, numberText = 20, expandByDefault = false, color = "blue", text = "Show more" }) {

    const [showAll, setShowAll] = useState(expandByDefault)

    const paragraphStyle = {
        margin: 0,
    }
    const showMoreStyle = {
        color
    }
    console.log(children.split("").slice(0, numberText))
    const displayText = showAll ?  children : children.split("").slice(0, numberText).join("") + "..."
    return (
        <>
            <label style={paragraphStyle}>{displayText}&nbsp;</label>
            <label onClick={() => setShowAll(!showAll)} style={showMoreStyle}>{text}</label>
        </>
    )
}