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
                <FormRow label="Full name" alignment="horizontal">
                    <FormInput></FormInput>
                </FormRow>
                <FormRow label="Email Address" alignment="horizontal">
                    <FormInput></FormInput>
                </FormRow>
                <FormRow label="Password (min 8 characters)" alignment="horizontal">
                    <FormInput></FormInput>
                </FormRow>
                <FormRow label="Repeat Password" alignment="horizontal">
                    <FormInput></FormInput>
                </FormRow>
                <StyledButtonLayout>
                    <Button color="secondary">Cancel</Button>
                    <Button>Create New User</Button>
                </StyledButtonLayout>
            </FormLayout>
        </StyledCreateUser>
    )
}

export default CreateUser