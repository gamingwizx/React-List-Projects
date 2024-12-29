import styled from "styled-components"
import FormLayout from "../../ui/Form/FormLayout"
import FormRow from "../../ui/Form/FormRow"
import FormInput from "../../ui/Form/FormInput"
import Button from "../../ui/Button"
import Label from "../../ui/Label"
import Loader from "../../ui/Spinner.jsx"
import { useState, useEffect, useRef } from "react"
import UploadFileButton from "../../ui/UploadFileButton"
import useUpdateUser from "./useUpdateUser"
import { createRetrieveUserInfo } from "../../services/apiAuth"
import useGetAvatarImage from "./useGetAvatarImage.js"
import useRetrieveUserInfo from "./useRetrieveUserInfo1"
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

function UpdateUser({email = "", fullname = "", filename = "", id = ""}) {
    const {updateUser, isLoading: isUpdateUserLoading, error: errorUpdateUser} = useUpdateUser()
    const [emailUpdate, setEmailUpdate] = useState(() => email)
    const [fullnameUpdate, setFullnameUpdate] = useState(() => fullname)
    const [selectedFilename, setSelectedFilename] = useState("")
    const file = useRef(null)
    if (isUpdateUserLoading) return <Loader></Loader>

    const handleSubmit = async (e) => {
        e.preventDefault()
        updateUser({email, fullname: fullnameUpdate, filename: selectedFilename, file: file.current, id})
    }

    const handleSubmitFile = (e) => {
        file.current = e.target.files[0]
        setSelectedFilename(() => e.target.value.split("\\")[2])
    }

    return (
        <StyledUpdateUser>
            <Label fs="verylarge" fw="bold">Update User</Label>
            <FormLayout onSubmit={handleSubmit}>
                <FormRow label="Email" alignment="horizontal">
                    <FormInput onChange={(e) => setEmailUpdate(e.target.value)} defaultValue={email}></FormInput>
                </FormRow>
                <FormRow label="Full name" alignment="horizontal">
                    <FormInput onChange={(e) => setFullnameUpdate(e.target.value)} defaultValue={fullname}></FormInput>
                </FormRow>
                <FormRow label="Avatar Image" alignment="horizontal">
                    <UploadFileLayout>
                        <UploadFileButton htmlFor="uploadfile">Choose file</UploadFileButton>
                        <Label isfileupload="true" htmlFor="uploadfile">{selectedFilename ? selectedFilename : filename}</Label>
                    </UploadFileLayout>
                    <FormInput onChange={handleSubmitFile} type="file" id="uploadfile"></FormInput>
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