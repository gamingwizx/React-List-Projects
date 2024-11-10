import styled from "styled-components"
import FormLayout from "../../ui/Form/FormLayout"
import FormRow from "../../ui/Form/FormRow"
import FormInput from "../../ui/Form/FormInput"
import Button from "../../ui/Button"
import Label from "../../ui/Label"
import UploadFileButton from "../../ui/UploadFileButton"
const StyledUpdateUser = styled.div`
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
const UploadFileLayout = styled.div`
    display: flex;
    align-items: center;
    gap: var(--spacing);
`

function UpdateUser() {
    return (
        <StyledUpdateUser>
            <Label fs="verylarge" fw="bold">Update User</Label>
            <FormLayout>
                <FormRow label="Email address" alignment="horizontal">
                    <FormInput></FormInput>
                </FormRow>
                <FormRow label="Full name" alignment="horizontal">
                    <FormInput></FormInput>
                </FormRow>
                <FormRow label="Avatar Image" alignment="horizontal">
                    <UploadFileLayout>
                        <UploadFileButton for="uploadfile">Choose file</UploadFileButton>
                        <Label>No file chosen</Label>
                    </UploadFileLayout>
                    <FormInput type="file" id="uploadfile"></FormInput>
                </FormRow>
                <StyledButtonLayout>
                    <Button color="secondary">Cancel</Button>
                    <Button>Update User</Button>
                </StyledButtonLayout>
            </FormLayout>
        </StyledUpdateUser>
    )
}

export default UpdateUser