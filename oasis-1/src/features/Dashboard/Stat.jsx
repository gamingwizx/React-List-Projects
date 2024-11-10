import styled from "styled-components"
import Label from "../../ui/Label"
import Icon from "../../ui/Icon"

const StyledStat = styled.div`
    flex-grow: 1;    
    background-color: white;
    border-radius: calc(var(--border-radius) / 2);
    display: flex;
    align-items: center;
    padding:  var(--spacing);
    justify-content: flex-start;
    gap: var(--spacing);

`

const StyledStatLeftColumn = styled.div`
    
`

const StyledStatRightColumn = styled.div`
    
`

function Stat({icon, color, label, number}) {
    return (
        <StyledStat>
            <Icon color={color}>{icon}</Icon>
            <StyledStatRightColumn>
                <Label fs="semilarge" color="gray" fontWeight="verybold">{label}</Label>
                <Label fs="verylarge" fontWeight="bold">{number}</Label>
            </StyledStatRightColumn>
        </StyledStat>
    )
}
export default Stat