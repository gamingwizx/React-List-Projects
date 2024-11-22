function GetDurationStatus(startdate) {
    const start = new Date(startdate)
    const differenceTodayToBookingDate = Math.floor(Math.floor(new Date().getTime() - start.getTime()) / 1000 / 60 / 60 / 24)
    const differenceBookingDateToToday = Math.floor(Math.floor(start.getTime() - new Date().getTime()) / 1000 / 60 / 60 / 24)
    const differenceToStartDate = () => {
        if (differenceTodayToBookingDate > 0) {
            return `${differenceTodayToBookingDate} days ago`
        } else if (differenceBookingDateToToday == -1) {
            return `Today`
        } else {
            return `In ${differenceBookingDateToToday} days`
        }
    }
    return differenceToStartDate()
}

export default GetDurationStatus