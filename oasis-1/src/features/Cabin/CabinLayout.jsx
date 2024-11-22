import styled from "styled-components"
import { useState } from "react"
import Button from "../../ui/Button"
import Table from "../../ui/Table"
import CabinRow from "./CabinRow"
import AddCabin from "./AddCabin"
import useCabin from "./useCabin"
import Loader from "../../ui/Spinner"
import Modal from "../../ui/Modal"
const StyledCabinLayout = styled.div`
    display: flex;
    gap: var(--spacing);
    flex-direction: column;
`
const AddNewCabinLayout = styled.div`
        display: flex;
        align-self: flex-start;
        justify-content: flex-start;
        
`

function CabinLayout() {
    const {cabins, isLoading, error} = useCabin()
    const [test, setTest] = useState(false)
    if (isLoading) return <Loader></Loader>
    return (
        <StyledCabinLayout>
            <Table>
                <Table.Header>
                    <th></th>
                    <th>Cabin</th>
                    <th>Capacity</th>
                    <th>Price</th>
                    <th>Discount</th>
                    <th>Operation</th>
                </Table.Header>
                <Table.Body data={cabins} render={dat => (
                        <CabinRow key={dat.id} data={dat}></CabinRow>
                    )}>
                </Table.Body>
            </Table>
            <AddNewCabinLayout>
            <Modal>
                <Modal.Open name="add-cabin-form">
                    <Button>Add Cabin</Button>
                </Modal.Open>
                <Modal.Window name="add-cabin-form">
                    <AddCabin />
                </Modal.Window>
            </Modal>
                
            </AddNewCabinLayout>
        </StyledCabinLayout>
    )
}
export default CabinLayout