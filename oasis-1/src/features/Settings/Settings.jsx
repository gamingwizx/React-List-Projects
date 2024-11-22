import styled from "styled-components"
import { useState } from "react"
import FormLayout from "../../ui/Form/FormLayout"
import FormRow from "../../ui/Form/FormRow"
import FormInput from "../../ui/Form/FormInput"
import Button from "../../ui/Button"
import useSettings from "./useSettings"
import useUpdateSettings from "./useUpdateSettings"
import Loader from "../../ui/Spinner"
const StyledCreateUser = styled.div`
    display: flex;
    gap: calc(var(--spacing) / 2);
`

const StyledButtonLayout = styled.div`
    display: flex;
    align-self: flex-end;
    gap: var(--spacing);
    justify-content: flex-end;
`

function CreateUser() {
    const {updateSetting, isUpdatingSettings, error: updateSettingsError} = useUpdateSettings()
    const {settings: {
        id,
        minbookinglength,
        maxbookinglength,
        maxguestsperbooking,
        breakfastprice
    } = {}, isGettingSettings, error} = useSettings()
    const [minBookingLength, setMinBookingLength] = useState(() => minbookinglength)
    const [maxBookingLength, setMaxBookingLength] = useState(() => maxbookinglength)
    const [maxGuestsPerBooking, setMaxGuestsPerBooking] = useState(() => maxguestsperbooking)
    const [breakfastPrice, setBreakfastPrice] = useState(() => breakfastprice)
    if (isGettingSettings) return <Loader></Loader>
    if (error) return <p>{error}</p>

    const handleSubmit = (e) => {
        e.preventDefault()
        const newSettings = {
            minbookinglength: minBookingLength,
            maxbookinglength: maxBookingLength,
            maxguestsperbooking: maxGuestsPerBooking,
            breakfastprice: breakfastPrice,
        }
        updateSetting({newSettings, id})
    }
    return (
        <StyledCreateUser>
            <FormLayout onSubmit={handleSubmit}>
                <FormRow label="Minimum nights/booking" alignment="horizontal">
                    <FormInput defaultValue={minbookinglength} type="number" onBlur={(e) => setMinBookingLength(e.target.value)}></FormInput>
                </FormRow>
                <FormRow label="Maximum nights/booking" alignment="horizontal">
                    <FormInput defaultValue={maxbookinglength} type="number" onBlur={(e) => setMaxBookingLength(e.target.value)}></FormInput>
                </FormRow>
                <FormRow label="Maximum guests/booking" alignment="horizontal">
                    <FormInput defaultValue={maxguestsperbooking} type="number" onBlur={(e) => setMaxGuestsPerBooking(e.target.value)}></FormInput>
                </FormRow>
                <FormRow label="Breakfast price" alignment="horizontal">
                    <FormInput defaultValue={breakfastprice} type="number" onBlur={(e) => setBreakfastPrice(e.target.value)}></FormInput>
                </FormRow>
                <StyledButtonLayout>
                    <Button color="secondary">Cancel</Button>
                    <Button>Update Settings</Button>
                </StyledButtonLayout>
            </FormLayout>
        </StyledCreateUser>
    )
}

export default CreateUser