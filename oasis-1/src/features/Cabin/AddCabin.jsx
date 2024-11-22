import styled from "styled-components"
import { useEffect, useState } from "react"
import useCreateCabins from "./useCreateCabins"
import CabinUploadButton from "./CabinUploadButton"
import Modal from "../../ui/Modal"
import Button from "../../ui/Button"
import Label from "../../ui/Label"
import FormLayout from "../../ui/Form/FormLayout"
import FormRow from "../../ui/Form/FormRow"
import FormInput from "../../ui/Form/FormInput"
import CabinImageLabel from "./CabinImageLabel"
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
const FormInputCurrencyLayout = styled.div`
    font-size: var(--fs-12);
    border: 1px solid var(--bg-zinc-300);
    border-radius: calc(var(--border-radius) / 2);
    padding: calc(var(--spacing) / 2) calc(var(--spacing) / 2) calc(var(--spacing) / 2) 0;
    display: flex;
    width: 100%;
`
const StyledSpan = styled.span`
    padding: 0 calc(var(--spacing) / 2);    
    flex-basis: 5%;
`
const Input = styled.input`
    border: none;
    width: 100%;

    &:focus {
        outline: none;
    }
`
export default function AddCabin({onCloseModal}) {
    const [error, setError] = useState({})
    const [cabinName, setCabinName] = useState("")
    const [cabinCapacity, setCabinCapacity] = useState(0)
    const [cabinPrice, setCabinPrice] = useState(0)
    const [cabinDiscount, setCabinDiscount] = useState(0)
    const [cabinWebsite, setCabinWebsite] = useState("")
    const [cabinImage, setCabinImage] = useState(null)
    const [cabinImageName, setCabinImageName] = useState("")
    const {createCabins, isCreating} = useCreateCabins()
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

        if (cabinImage.length <= 0) {
            setError((error) => {return {...error, cabinImage: "Select an image!"}})
        }
        if (Object.keys(error).length > 0) {
            return
        };
        const newCabin = {
            name: cabinName,
            capacity: cabinCapacity,
            price: cabinPrice,
            discount: cabinDiscount,
            description: cabinWebsite,
            imageName: cabinImageName,
            image: cabinImage

        }
        createCabins({...newCabin}, 
            {
                onSuccess: (data) => {
                onCloseModal?.()
                }
            })
        
    }
    const handleFileChange = (e) => {
        const file = e.target.files[0]
        const fileName = e.target.value.split("\\")[2]
        setCabinImageName(() => fileName)
        setCabinImage(() => file)
    }
    const handleNumberInput = (e, setState) => {
        if (/[a-z]/i.test(e.target.value)) {
            setState(0)
        } else {
            setState(() => Number(e.target.value)) 
        }
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
                            <FormInput onChange={(e) => handleNumberInput(e, setCabinCapacity)} value={cabinCapacity}>
                            </FormInput>
                            <Label color="red">{error["cabinCapacity"]}</Label>
                        </FormRowLayout>
                    </FormRow>
                    <FormRow label="Regular Price" alignment="horizontal">
                        <FormRowLayout>
                            <FormInputCurrencyLayout>
                                <StyledSpan>$</StyledSpan>
                                <Input padding="currency" onChange={(e) => handleNumberInput(e, setCabinPrice)} value={cabinPrice}></Input>
                            </FormInputCurrencyLayout>
                            <Label color="red">{error["cabinPrice"]}</Label>
                        </FormRowLayout>
                    </FormRow>
                    <FormRow label="Discount" alignment="horizontal">
                    <FormRowLayout>
                            <FormInputCurrencyLayout>
                                <StyledSpan>$</StyledSpan>
                                <Input padding="currency" onChange={(e) => handleNumberInput(e, setCabinDiscount)} value={cabinDiscount}>
                                </Input>
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
                        <Button>Add Cabin</Button>
                    </ButtonLayout>
                </FormLayout>
    )
}