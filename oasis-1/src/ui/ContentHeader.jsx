import styled from "styled-components"

const StyledContentHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: calc(var(--spacing)) 0;
    align-items: center;
    max-width: 100vw;
    box-sizing: border-box;
    overflow: hidden;
    gap: var(--spacing);

`

// function ContentHeader() {
//     const [title, setTitle] = useState("")
//     const {id} = useParams()
//     const {error: bookingStatusError, bookingStatus, isLoading: bookingStatusIsLoading} = useBookingStatus(id)
//     const location = useLocation()
//     useEffect(() => {
//         const currentPage = location.pathname.split("/")[2]
        
//         setTitle(() => capitalizeFirstLetter(currentPage))
//     }, [location])
    
//     if (title === "Booking" && id) {
//         return (
//         <StyledContentHeader>
//             <StyledBookingDetailHeader>
//                 <Label fs="verylarge" fw="bold">{title} #{id}</Label>
//                 <Label fs="small">{bookingStatus?.status}</Label>

//             </StyledBookingDetailHeader>
//             <Button color="transparent">← Back</Button>
//         </StyledContentHeader>
//         )
//     }
//     if (title === "Booking") {
//         return (
//         <StyledContentHeader>
//             <Label fs="verylarge" fw="bold">All {title}s</Label>
//             <BookingHeader />
//         </StyledContentHeader>
//         )
//     }
    

//     if (title === "Cabin") {
//         return (
//             <StyledContentHeader>
//                 <Label fs="verylarge" fw="bold">All {title}s</Label>
//                 <CabinHeader />
//             </StyledContentHeader>
//         )
//     }

//     if (title === "Dashboard") {
//         return (
//             <StyledContentHeader>
//                 <Label fs="verylarge" fw="bold">All {title}s</Label>
//                 <DashboardHeader />
//             </StyledContentHeader>
//         )
//     }

//     return (
//         <StyledContentHeader>
//             <Label fs="verylarge" fw="bold">{title}</Label>
//         </StyledContentHeader>
//     )
// }

export default StyledContentHeader