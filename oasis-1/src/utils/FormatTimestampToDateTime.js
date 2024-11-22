export default function FormatTimestampToDateTime(date) {
    const newDateFormat = new Date(date)
    const options = { 
        month: 'short', 
        day: '2-digit', 
        year: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit',
      };
    return new Intl.DateTimeFormat('en-US', options).format(newDateFormat);
}