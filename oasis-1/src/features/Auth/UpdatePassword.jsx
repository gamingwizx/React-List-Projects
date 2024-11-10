import styled from "styled-components"
import FormLayout from "../../ui/Form/FormLayout"
import FormRow from "../../ui/Form/FormRow"
import FormInput from "../../ui/Form/FormInput"
import Button from "../../ui/Button"
import Label from "../../ui/Label"
const StyledUpdatePasswrd = styled.div`
    display: flex;
    gap: calc(var(--spacing) / 2);
    flex-direction: column;
`

const StyledButtonLayout = styled.div`
    display: flex;
    align-self: flex-end;
    gap: var(--spacing);
    justify-content: flex-end;
`

function UpdatePassword() {
    return (
        <StyledUpdatePasswrd>
            <Label fs="verylarge" fw="bold">Update Password</Label>
            <FormLayout>
                <FormRow label="New Password (min 8 chars)" alignment="horizontal">
                    <FormInput></FormInput>
                </FormRow>
                <FormRow label="Confirm Password" alignment="horizontal">
                    <FormInput></FormInput>
                </FormRow>
                <StyledButtonLayout>
                    <Button color="secondary">Cancel</Button>
                    <Button>Change Password</Button>
                </StyledButtonLayout>
            </FormLayout>
        </StyledUpdatePasswrd>
    )
}

export default UpdatePassword