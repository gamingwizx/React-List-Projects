import styled from "styled-components"
import Label from "../../ui/Label";
import Button from "../../ui/Button"
import Status from "./Status"
import useCheckIn from "../Booking/useCheckIn"
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

function Activity({booking}) {
    const {status, numnights, fullname} = booking
    const {checkIn, isLoading, error} = useCheckIn()
    const disabled = status.toLowerCase() === "checked in"
    const buttonName = status.toLowerCase() === "checked in" ? "Guest Checked in" : "Check in"
    const color = () => {
        switch(status.toLowerCase()) {
            case "checked in":
                return "green"
                break;
            case "cancelled":
                return "red"
                break;
            case "reserved":
                return "yellow"
                break;
            case "pending":
                return "orange"
                break;
            default:
                return "black"
        }
    }

    const handleCheckIn = () => {
        const updatedBooking = {status: "Checked in", id: booking.id}
        checkIn(updatedBooking, {
            onSuccess: () => {
            }
        })
    }
    return (
        <StyledActivity>
            <Status color={color()}>
                {status}
            </Status>
            <Label>{fullname}</Label>
            <Label>{numnights} nights</Label>
            <Button onClick={handleCheckIn} disabled={disabled} test={disabled.toString()}>{buttonName}</Button>
        </StyledActivity>
    )
}

export default Activity;