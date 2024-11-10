import styled from "styled-components"
import FormLayout from "../../ui/Form/FormLayout"
import FormRow from "../../ui/Form/FormRow"
import FormInput from "../../ui/Form/FormInput"
import Button from "../../ui/Button"
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
    return (
        <StyledCreateUser>
            <FormLayout>
                <FormRow label="Minimum nights/booking" alignment="horizontal">
                    <FormInput></FormInput>
                </FormRow>
                <FormRow label="Maximum nights/booking" alignment="horizontal">
                    <FormInput></FormInput>
                </FormRow>
                <FormRow label="Maximum guests/booking" alignment="horizontal">
                    <FormInput></FormInput>
                </FormRow>
                <FormRow label="Breakfast price" alignment="horizontal">
                    <FormInput></FormInput>
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