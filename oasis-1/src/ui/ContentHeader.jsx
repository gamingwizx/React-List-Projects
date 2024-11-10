import { useEffect,useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components"
import BookingHeader from "../features/Booking/BookingHeader";
import CabinHeader from "../features/Cabin/CabinHeader";
import DashboardHeader from "../features/Dashboard/DashboardHeader";
import capitalizeFirstLetter from "../utils/Capitalize";
import Label from "./Label";

const StyledContentHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: calc(var(--spacing)) calc(var(--spacing) * 2);
    align-items: center;
`

function ContentHeader() {
    const [title, setTitle] = useState("")
    const location = useLocation()
    useEffect(() => {
        const currentPage = location.pathname.split("/")[2]
        
        setTitle(() => capitalizeFirstLetter(currentPage))
    }, [location])

    if (title === "Booking") {
        return (
        <StyledContentHeader>
            <Label fs="verylarge" fw="bold">All {title}s</Label>
            <BookingHeader />
        </StyledContentHeader>
        )
    }

    if (title === "Cabin") {
        return (
            <StyledContentHeader>
                <Label fs="verylarge" fw="bold">All {title}s</Label>
                <CabinHeader />
            </StyledContentHeader>
        )
    }

    if (title === "Dashboard") {
        return (
            <StyledContentHeader>
                <Label fs="verylarge" fw="bold">All {title}s</Label>
                <DashboardHeader />
            </StyledContentHeader>
        )
    }

    return (
        <StyledContentHeader>
            <Label fs="verylarge" fw="bold">{title}</Label>
        </StyledContentHeader>
    )
}

export default ContentHeader