import FormInput from "../../ui/Form/FormInput";
import FormLayout from "../../ui/Form/FormLayout";
import FormRow from "../../ui/Form/FormRow";
import Label from "../../ui/Label";
import H2 from "../../ui/H2"
import Button from "../../ui/Button";
import useRegister from "../../hooks/useRegister"
import { useState } from "react";
import styled from "styled-components"
export default function RegisterLayout() {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const {register, isLoading} = useRegister()

    const StyledLayout = styled.div`
        width: 35%;
    `

    const handleSubmit = (e) => {
        e.preventDefault();
        register({email, fullName, password})
    }
    return (
        <StyledLayout>
            <FormLayout onSubmit={handleSubmit}>
                <FormRow label="Full Name">
                    <FormInput id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)}></FormInput>
                </FormRow>
                <FormRow label="Email Address">
                    <FormInput id="email" value={email} onChange={(e) => setEmail(e.target.value)}></FormInput>
                </FormRow>
                <FormRow label="Password">
                    <FormInput id="password" value={password} onChange={(e) => setPassword(e.target.value)}></FormInput>
                </FormRow>
                <FormRow label="Confirm Password">
                    <FormInput id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></FormInput>
                </FormRow>
                <Button>Register</Button>
            </FormLayout>
            
        </StyledLayout>
    )
}