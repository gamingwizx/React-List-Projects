import FormInput from "../../ui/Form/FormInput";
import FormLayout from "../../ui/Form/FormLayout";
import FormRow from "../../ui/Form/FormRow";
import Label from "../../ui/Label";
import H2 from "../../ui/H2"
import Button from "../../ui/Button";
import useRegister from "../../hooks/useRegister"
import { useState } from "react";
import styled from "styled-components"
import isEmpty from "../../utils/IsEmpty";
export default function RegisterLayout() {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState({})
    const {register, isLoading} = useRegister()

    const StyledLayout = styled.div`
        width: 35%;
    `

    const handleSubmit = (e) => {
        e.preventDefault();
        setError({})
        if (password !== confirmPassword) {
            setError({...error, password: "Password do not match"})
        }
        if (isEmpty(error)) {
            register({email, fullName, password})
        }
    }
    return (
        <FormLayout onSubmit={handleSubmit}>
            <FormRow auth="true" label="Full Name">
                <FormInput defaultValue={fullName} onBlur={(e) => setFullName(e.target.value)}></FormInput>
            </FormRow>
            <FormRow auth="true" label="Email Address">
                <FormInput defaultValue={email} onBlur={(e) => setEmail(e.target.value)}></FormInput>
            </FormRow>
            <FormRow auth="true" label="Password">
                <FormInput error={error['password']} type="password" defaultValue={password} onBlur={(e) => setPassword(e.target.value)}></FormInput>
                <Label color="red">{error['password']}</Label>
            </FormRow>
            <FormRow auth="true" label="Confirm Password">
                <FormInput error={error['password']} type="password" defaultValue={confirmPassword} onBlur={(e) => setConfirmPassword(e.target.value)}></FormInput>
                <Label color="red">{error['password']}</Label>
            </FormRow>
            <Button>Register</Button>
        </FormLayout>
            
    )
}