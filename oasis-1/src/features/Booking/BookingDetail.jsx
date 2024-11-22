import { useParams } from "react-router-dom"
import styled, {css} from "styled-components"
import useBookingDetail from "./useBookingDetail.js"
import ContentHeader from "../../ui/ContentHeader.jsx"
import {HiMiniHomeModern, HiChatBubbleBottomCenterText, HiMiniCheckCircle, HiCurrencyDollar} from "react-icons/hi2"
import Label from "../../ui/Label.jsx"
import Button from "../../ui/Button.jsx"
import CalculateDuration from "../../utils/CalculateDuration"
import GetDurationStatus from "../../utils/GetDurationStatus"
import FormatTimestampToDate from "../../utils/FormatTimestampToDate"
import FormatTimestampToDateTime from "../../utils/FormatTimestampToDateTime"
import Loader from "../../ui/Spinner.jsx"
import Empty from "../../ui/Empty.jsx"
const StyledBookingDetail = styled.div`
    display: grid;
    gap: calc(var(--spacing) * 2);
`
const StyledBookingDetailHeader = styled.div`
    display: flex;
    color: white;
    align-items: center;
    gap: var(--spacing);
`
const StyledBookingDetailLayout = styled.div`

`
const Header = styled.div`
    background-color: var(--bg-indigo-600);
    color: white;
    font-size: var(--fs-8);
    padding: calc(var(--spacing)) calc(var(--spacing) * 3);
    gap: var(--spacing);
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Right = styled.div`
    align-self: flex-end;
`
const Left = styled.div`
    display: flex;    
    gap: var(--spacing);
    align-items: center;
`
const Body = styled.div`
    background-color: white;
    padding: calc(var(--spacing) * 2);
    display: flex;
    flex-direction: column;
    gap: var(--spacing);
`
const styling = {
    none: css`
        background-color: none;
    `,
    totalprice: css`
        background-color: var(--bg-yellow-100);
        padding: var(--spacing);
        color: var(--bg-yellow-700);
        justify-content: space-between;
    `,
    footer: css`
        justify-content: flex-end;
    `
}
const Row = styled.div`
    display: flex;
    align-items: center;
    gap: var(--spacing);
    ${(props) => styling[props.theme]}
`
const ButtonLayout = styled.div`
    display:flex;
    gap: var(--spacing);
    justify-content: flex-end;
`
StyledBookingDetailLayout.Header = Header
StyledBookingDetailLayout.Header.Right = Right
StyledBookingDetailLayout.Header.Left = Left
StyledBookingDetailLayout.Body = Body
StyledBookingDetailLayout.Body.Row = Row
StyledBookingDetailLayout.Body.Row.defaultProps = {
    theme: "none"
}

function BookingDetail() {
    const {id: bookingId} = useParams()
    const {error, bookingDetail, isLoading} = useBookingDetail()
    if (isLoading) return <Loader/>
    if (!bookingDetail) return <Empty resourceName="booking detail"></Empty>
    const {
        cabins,
        cabinprice,
        created_at,
        enddate,
        extrasprice,
        guests,
        hasbreakfast,
        id,
        ispaid,
        numguests,
        numnights,
        observations,
        startdate,
        status,
        totalprice
      } = bookingDetail;
    const bookingDays = CalculateDuration(startdate, enddate)
    const startDate = FormatTimestampToDate(startdate)
    const endDate = FormatTimestampToDate(enddate)
    const durationStatus = GetDurationStatus(startdate)
  
    return (
        <StyledBookingDetail>
            <ContentHeader>
                <StyledBookingDetailHeader>
                    <Label fs="verylarge" fw="bold">Booking #{bookingId}</Label>
                    <Label fs="small">{bookingDetail?.status}</Label>

                </StyledBookingDetailHeader>
                <Button color="transparent">← Back</Button>
            </ContentHeader>
            <StyledBookingDetailLayout>
                <StyledBookingDetailLayout.Header>
                    <StyledBookingDetailLayout.Header.Left>
                        <HiMiniHomeModern />
                        <Label color="white" fs="large">{bookingDays} nights in cabin</Label>
                    </StyledBookingDetailLayout.Header.Left>
                    <StyledBookingDetailLayout.Header.Right>
                        <Label color="white" fs="large">{startDate} ({durationStatus}) - {endDate}</Label>
                    </StyledBookingDetailLayout.Header.Right>
                </StyledBookingDetailLayout.Header>
                <StyledBookingDetailLayout.Body>
                    <StyledBookingDetailLayout.Body.Row>
                        <Label fw="bold">{guests.fullname}</Label>•
                        <Label>{guests.email}</Label>•
                        <Label>National ID</Label>
                    </StyledBookingDetailLayout.Body.Row>
                    <StyledBookingDetailLayout.Body.Row>
                        <HiChatBubbleBottomCenterText/>
                        <Label fw="bold">Observations</Label>
                        <Label>{observations}</Label>
                    </StyledBookingDetailLayout.Body.Row>
                    <StyledBookingDetailLayout.Body.Row>
                        <HiMiniCheckCircle/>
                        <Label fw="bold">Breakfast included?</Label>
                        <Label>{hasbreakfast ? "Yes" : "No"}</Label>
                    </StyledBookingDetailLayout.Body.Row>
                    <StyledBookingDetailLayout.Body.Row theme="totalprice">
                        <Left>
                            <HiCurrencyDollar/>
                            <Label fw="bold" color="yellow">Total Price</Label>
                            <Label color="yellow">${totalprice} (${cabinprice} cabin + ${extrasprice} breakfast)</Label>
                        </Left>
                        <Right>
                            <Label color="yellow" fw="bold">Will Pay at Property</Label>
                        </Right>
                    </StyledBookingDetailLayout.Body.Row>
                    <StyledBookingDetailLayout.Body.Row theme="footer">
                        <Label>Booked {FormatTimestampToDateTime(created_at)}</Label>
                    </StyledBookingDetailLayout.Body.Row>
                </StyledBookingDetailLayout.Body>
            </StyledBookingDetailLayout>
                <ButtonLayout>
                    <Button color="warning">Delete Booking</Button>
                    <Button color="secondary">Back</Button>
                </ButtonLayout>
        </StyledBookingDetail>
    )
}

export default BookingDetail