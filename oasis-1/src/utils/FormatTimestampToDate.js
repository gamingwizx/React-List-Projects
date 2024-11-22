export default function FormatTimestampToDate(date) {
    const newDateFormat = new Date(date)
    const options = { month: 'short', day: '2-digit', year: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(newDateFormat);
}