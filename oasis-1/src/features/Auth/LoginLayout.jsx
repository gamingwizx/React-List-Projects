import styled from "styled-components";
import StyledFormLayout from "../../ui/Form/FormLayout";
import FormRow from "../../ui/Form/FormRow";
import StyledInput from "../../ui/Form/FormInput";
import Button from "../../ui/Button";
import { useState } from "react";
import useLogin from "../../hooks/useLogin"
function LoginLayout() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {login, isLoading} = useLogin()

    const handleSubmit = (e) => {
        e.preventDefault()
        login({email, password})
        
    }
    return (
        <StyledFormLayout onSubmit={handleSubmit}>
            <FormRow label="Email">
                <StyledInput width="full" id="email" value={email} onChange={(e) => setEmail(e.target.value)}></StyledInput>
            </FormRow>
            <FormRow label="Password">
                <StyledInput type="password" width="full" id="password" value={password} onChange={(e) => setPassword(e.target.value)}></StyledInput>
            </FormRow>
            <Button>Login</Button>
        </StyledFormLayout>
    )
}

export default LoginLayout