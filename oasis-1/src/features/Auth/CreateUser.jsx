import styled from "styled-components"
import FormLayout from "../../ui/Form/FormLayout"
import FormRow from "../../ui/Form/FormRow"
import FormInput from "../../ui/Form/FormInput"
import Button from "../../ui/Button"
import ContentHeader from "../../ui/ContentHeader"
import Label from "../../ui/Label"
import useRegister from "../../hooks/useRegister"
import { useState } from "react"
import toast from "react-hot-toast"
const StyledCreateUser = styled.div`
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

function CreateUser() {
    const {register, isLoading, error} = useRegister()
    const [email, setEmail] = useState("")
    const [fullName, setFullName] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const onCreateUserSubmit = (e) => {
        e.preventDefault()
        if (fullName === "") {
            toast.error("Full name must not be empty!")
            return
        }
        if (confirmPassword !== password) {
            toast.error("Password and Confirm Password doesn't match!")
            return
        }
        register({email, fullName, password})
    }
    return (
        <StyledCreateUser>
            <ContentHeader>
                <Label fs="verylarge" fw="bold">Create User</Label>
            </ContentHeader>
            <FormLayout onSubmit={onCreateUserSubmit}>
                <FormRow label="Full name" alignment="horizontal">
                    <FormInput onChange={(e) => setFullName(e.target.value)}></FormInput>
                </FormRow>
                <FormRow label="Email Address" alignment="horizontal">
                    <FormInput onChange={(e) => setEmail(e.target.value)}></FormInput>
                </FormRow>
                <FormRow label="Password (min 8 characters)" alignment="horizontal">
                    <FormInput type="password" onChange={(e) => setPassword(e.target.value)}></FormInput>
                </FormRow>
                <FormRow label="Repeat Password" alignment="horizontal">
                    <FormInput type="password" onChange={(e) => setConfirmPassword(e.target.value)}></FormInput>
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