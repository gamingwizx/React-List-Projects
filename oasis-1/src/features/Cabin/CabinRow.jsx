import Table from "../../ui/Table"
import Img from "../../ui/Img"
import styled from "styled-components"
import Button from "../../ui/Button"
import EditCabin from "./EditCabin"
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
                    <EditCabin data={data}></EditCabin>
                    <Button>Delete</Button>
                </StyledButtonLayout>
            </Table.Cell>
               {/* <Status padding="small" color="green">{status}</Status> */}
        </Table.Row>
     
    )
}

export default CabinRow