
import styled from "styled-components"
import Modal from "../../ui/Modal"
import Button from "../../ui/Button"
import Label from "../../ui/Label"
import FormLayout from "../../ui/Form/FormLayout"
import FormRow from "../../ui/Form/FormRow"
import FormInput from "../../ui/Form/FormInput"
import { useState, useEffect } from "react"
import CabinUploadButton from "./CabinUploadButton"
import CabinImageLabel from "./CabinImageLabel"
import useEditCabin from "./useEditCabin" 
const StyledUploadFileFormLayout = styled.div`
    display: flex;
    align-self: flex-start;
    justify-cotent: flex-start;
    align-items: center;
    gap: var(--spacing);

`
const ButtonLayout = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: var(--spacing);
`

const FormRowLayout = styled.div`
    display: flex;
    gap: var(--spacing);
    align-items: center;
`

const StyledSpan = styled.span`
    padding: 0 calc(var(--spacing) / 2);    
    flex-basis: 5%;
`

const FormInputCurrencyLayout = styled.div`
    font-size: var(--fs-12);
    border: 1px solid var(--bg-zinc-300);
    border-radius: calc(var(--border-radius) / 2);
    padding: calc(var(--spacing) / 2) calc(var(--spacing) / 2) calc(var(--spacing) / 2) 0;
    display: flex;
    width: 100%;
`
const Input = styled.input`
    border: none;
    width: 100%;

    &:focus {
        outline: none;
    }
`

export default function EditCabin({data, onCloseModal}) {
    const {image, name, capacity, price, discount, id} = data
    const [error, setError] = useState({})
    const [cabinName, setCabinName] = useState(() => name)
    const [cabinCapacity, setCabinCapacity] = useState(() => capacity)
    const [cabinPrice, setCabinPrice] = useState(() => price)
    const [cabinDiscount, setCabinDiscount] = useState(() => discount)
    const [cabinWebsite, setCabinWebsite] = useState("")
    const [cabinImageName, setCabinImageName] = useState(() => image)
    const [cabinImage, setCabinImage] = useState(null)
    const {editCabins, isEditing} = useEditCabin()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (cabinName.length <= 1) {
            setError((error) => {return {...error, cabinName: "At least more than 1 character!"}})
        }
        if (/[a-z]i/.test(cabinCapacity)) {
            setError((error) => {return {...error, cabinCapacity: "Must contain a number!"}})
        }
        if (/a-z/i.test(cabinPrice)) {
            setError((error) => {return {...error, cabinPrice: "Must be a number!"}})
        }
        if (/a-z/.test(cabinDiscount)) {
            setError((error) => {return {...error, cabinDiscount: "Must be a number!"}})
        }

        if (cabinImageName.length <= 0) {
            setError((error) => {return {...error, cabinImage: "Select an image!"}})
        }
        if (Object.keys(error).length > 0) {
            return
        };
  
        const editedCabin = {
            id: id,
            name: cabinName,
            price: cabinPrice,
            discount: cabinDiscount,
            website: cabinWebsite,
            imageName: cabinImageName,
            capacity: cabinCapacity,
            description: cabinWebsite,
            image: cabinImage
        }
        editCabins({...editedCabin},
            {
                onSuccess: (data) => {
                    onCloseModal()

                }

            }
        )

    }
    const handleFileChange = (e) => {
        const file = e.target.files[0]
        const fileName = e.target.value.split("\\")[2]
        console.log(file)
        setCabinImageName(() => fileName)
        setCabinImage(() => file)
    }
    return (
                <FormLayout onSubmit={handleSubmit}>
                    <FormRow label="Cabin name" alignment="horizontal">
                        <FormRowLayout>
                            <FormInput onChange={(e) => setCabinName(e.target.value)} value={cabinName}></FormInput>
                            <Label color="red">{error["cabinName"]}</Label>
                        </FormRowLayout>
                    </FormRow>
                    <FormRow label="Maximum capacity" alignment="horizontal">
                        <FormRowLayout>
                            <FormInput onChange={(e) => setCabinCapacity(e.target.value)} value={cabinCapacity}>
                            </FormInput>
                            <Label color="red">{error["cabinCapacity"]}</Label>
                        </FormRowLayout>
                    </FormRow>
                    <FormRow label="Regular Price" alignment="horizontal">
                        <FormRowLayout>
                            <FormInputCurrencyLayout>
                                <StyledSpan>$</StyledSpan>
                                <Input padding="currency" onChange={(e) => setCabinPrice(e.target.value)} value={cabinPrice}></Input>
                            </FormInputCurrencyLayout>
                            <Label color="red">{error["cabinPrice"]}</Label>
                        </FormRowLayout>
                    </FormRow>
                    <FormRow label="Discount" alignment="horizontal">
                    <FormRowLayout>
                            <FormInputCurrencyLayout>
                                <StyledSpan>$</StyledSpan>
                                <Input padding="currency" onChange={(e) => setCabinDiscount(e.target.value)} value={cabinDiscount}></Input>
                            </FormInputCurrencyLayout>
                            <Label color="red">{error["cabinDiscount"]}</Label>
                        </FormRowLayout>
                    </FormRow>
                    <FormRow label="Description of website" alignment="horizontal">
                        <FormInput onChange={(e) => setCabinWebsite(e.target.value)} type="textarea" value={cabinWebsite}></FormInput>
                    </FormRow>
                    <FormRow label="Cabin photo" alignment="horizontal">
                        <FormRowLayout>
                            <StyledUploadFileFormLayout>
                                <CabinUploadButton for="uploadPhoto">Choose file</CabinUploadButton>
                                <CabinImageLabel for="uploadPhoto">{cabinImageName ? cabinImageName : "No file chosen"}</CabinImageLabel>
                            </StyledUploadFileFormLayout>
                            <Label color="red">{error["cabinImage"]}</Label>
                        </FormRowLayout>
                        <FormInput onChange={handleFileChange} type="file" id="uploadPhoto"></FormInput>
                    </FormRow>
                    <ButtonLayout>
                        <Button color="secondary">Cancel</Button>
                        <Button>Edit Cabin</Button>
                    </ButtonLayout>
                </FormLayout>
    )
}