export default function CalculateDuration(startdate, enddate) {
    const start = new Date(startdate)
    const end = new Date(enddate)
    const differenceDuration = Math.floor(end.getTime() - start.getTime())
    return Math.floor(differenceDuration / 1000 / 60 / 60 / 24)
    
}