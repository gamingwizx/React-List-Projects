import styled from "styled-components"
import StyledFormLayout from "../../ui/Form/FormLayout"
import FormRow from "../../ui/Form/FormRow"
import StyledInput from "../../ui/Form/FormInput"
import { useState } from "react"
import useChangePassword from "./useChangePassword"
import useGetUser from "./useGetUser"
import Button from "../../ui/Button"
const StyledResetPassword = styled.div`

`

function ResetPassword() {
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const {changePassword} = useChangePassword()
    const handleResetPassword = (e) => {        
        e.preventDefault()
        changePassword({email, newPassword: password})
        console.log("awaw")
    }
    return (
        <StyledResetPassword>
            <StyledFormLayout onSubmit={handleResetPassword}>
                <FormRow label="Email">
                    <StyledInput width="full" id="email" onChange={(e) => setEmail(e.target.value)}></StyledInput>
                </FormRow>
                <FormRow label="Password">
                    <StyledInput width="full" id="password" onChange={(e) => setPassword(e.target.value)}></StyledInput>
                </FormRow>
                <Button>Reset Password</Button>
            </StyledFormLayout>
        </StyledResetPassword>        
    )
}

export default ResetPassword