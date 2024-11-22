import styled from "styled-components"
import Label from "../../ui/Label"
import Button from "../../ui/Button"
import useDeleteCabin from "./useDeleteCabin"
const StyledDeleteCabin = styled.div`
    display:flex;
    align-items: center;
    flex-direction: column;
    gap: var(--spacing);
`
const StyledButtonLayout = styled.div`
    display: flex;
    gap: var(--spacing);
`
export default function DeleteCabin({id, onCloseModal}) {
    const {deleteCabins, isDeleting} = useDeleteCabin()
    const handleDelete = () => {
        deleteCabins(
            {id}, 
            {
            onSuccess: (data) => {
                onCloseModal()
            }
            })

    
    }
    return (
        <StyledDeleteCabin>
            <Label fs="large">Do you really want to delete this cabin?</Label>
            <StyledButtonLayout>
                <Button color="secondary">Cancel</Button>
                <Button color="warning" onClick={handleDelete}>Delete</Button>
            </StyledButtonLayout>
        </StyledDeleteCabin>
    )
}