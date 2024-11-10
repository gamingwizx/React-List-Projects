import styled from "styled-components"
import Label from "../../ui/Label";
import Button from "../../ui/Button"
import Status from "./Status"
const StyledActivity = styled.div`
    padding: var(--spacing);
    display: flex;
    gap: var(--spacing);
    align-items: center;
    border-top: 1px solid var(--bg-gray-300);
    border-bottom: 1px solid var(--bg-gray-300);

    label {
        flex-basis: 25%;
        flex-grow: 1;
    }
    button {
        flex-basis: 25%;
        flex-grow: 1;
    }
    div {
        flex-basis: 10%;
    }

`

function Activity() {
    return (
        <StyledActivity>
            <Status color="green">
                Arriving
            </Status>
            <Label>Ng Pheng Loong</Label>
            <Label>7 nights</Label>
            <Button>Check in</Button>
        </StyledActivity>
    )
}

export default Activity;