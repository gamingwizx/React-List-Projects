import Table from "../../ui/Table"
import Img from "../../ui/Img"
import styled from "styled-components"
import Button from "../../ui/Button"
import EditCabin from "./EditCabin"
import DeleteCabin from "./DeleteCabin"
import Modal from "../../ui/Modal"
const StyledButtonLayout = styled.div`
    display: flex;
    gap: var(--spacing);
`
function CabinRow({data}) {
    const {image, name, capacity, price, discount} = data
    return (
        <Table.Row>
            <Table.Cell paddingright="normal" width="normal"><Img src={image}></Img></Table.Cell>
            <Table.Cell>{name}</Table.Cell>
            <Table.Cell>{capacity}</Table.Cell>
            <Table.Cell>{price}</Table.Cell>
            <Table.Cell>{discount}</Table.Cell>
            <Table.Cell width="small">
                <StyledButtonLayout>
                <Modal>
                    <Modal.Open>
                        <Button>Edit</Button>
                    </Modal.Open>
                    <Modal.Window>
                        <EditCabin data={data}/>
                    </Modal.Window>
                </Modal>
                <Modal>
                    <Modal.Open>
                        <Button>Delete</Button>
                    </Modal.Open>
                    <Modal.Window>
                        <DeleteCabin id={data?.id}/>
                    </Modal.Window>
                </Modal>
                </StyledButtonLayout>
            </Table.Cell>
        </Table.Row>
     
    )
}

export default CabinRow