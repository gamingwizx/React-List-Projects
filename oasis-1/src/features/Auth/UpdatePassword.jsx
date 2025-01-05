import styled from "styled-components"
import FormLayout from "../../ui/Form/FormLayout"
import FormRow from "../../ui/Form/FormRow"
import FormInput from "../../ui/Form/FormInput"
import Button from "../../ui/Button"
import Label from "../../ui/Label"
import useChangePassword from "./useChangePassword.js"
import useRequestChangePassword from "./useRequestChangePassword.js"
// import {createChangePassword} from "../../services/apiAuth.js"
import { useState } from "react"
import toast from "react-hot-toast"
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

function UpdatePassword({email}) {
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const {changePassword} = useChangePassword()
    const {requestChangePassword} = useRequestChangePassword(email)
    // const changePasswordAsync = async() => {
    //     await changePassword().then((data) => {
    //         console.log(data)
    //     }).catch(error => {
    //         console.error(error)
    //     })
    // }
    const handleSubmitChangePassword = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            toast.error("Password and confirm password do not match!")
        } else {
            changePassword({email, password})
        } 
        
    }
    // const handleRequestChangePassword = (e) => {
    //     e.preventDefault()
    //     requestChangePassword(email)
    // }
    return (
        <StyledUpdatePasswrd>
            <Label fs="verylarge" fw="bold">Update Password</Label>
            <FormLayout onSubmit={(e) => e.preventDefault()}>
                <FormRow label="New Password (min 8 chars)" alignment="horizontal">
                    <FormInput type="password" onChange={(e) => setPassword(e.target.value)}></FormInput>
                </FormRow>
                <FormRow label="Confirm Password" alignment="horizontal">
                    <FormInput type="password" onChange={(e) => setConfirmPassword(e.target.value)}></FormInput>
                </FormRow>
                <StyledButtonLayout>
                    <Button color="secondary">Cancel</Button>
                    {/* <Button onClick={handleRequestChangePassword}>Request Change Password</Button> */}
                    <Button onClick={handleSubmitChangePassword}>Change Password</Button>
                </StyledButtonLayout>
            </FormLayout>
        </StyledUpdatePasswrd>
    )
}

export default UpdatePassword